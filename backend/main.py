from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from bson import ObjectId
from motor.motor_asyncio import AsyncIOMotorClient
from typing import List, Dict
import json
import joblib
import numpy as np

from external_apis.news import get_news
from external_apis.twitter_scrapper import get_tweets
from scrapers.social_buzz_scraper import scrape_social_buzz

from confi import (
    MONGO_CONNECTION_STRING,
    MONGO_DATABASE
)

app = FastAPI()

# models
with open('model_files/flood.joblib', 'rb') as file:
    model = joblib.load(file)

class JSONEncoder(json.JSONEncoder):
    """ Extend json-encoder class to add support for ObjectId. """
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)

def get_fatality_rate(prediction, data):
    print(data)
    if prediction == 0:
        return 0
    else:
        total = 0
        for key, value in data.items():
            if key != 'YEAR':
                total += value

        avg = total/12

        return  round(((avg / 1500) * 14.9 + 0.1), 3)

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/news")
async def retrieve_news(topic: str):
    if not topic:
        raise HTTPException(status_code=400, detail="No topic provided")
    return get_news(topic=topic)


@app.get("/twitter")
async def retrieve_twitter_data(word: str, number: int = 7):
    if not word:
        raise HTTPException(status_code=400, detail="No word provided")
    client = AsyncIOMotorClient(MONGO_CONNECTION_STRING)
    database = client[MONGO_DATABASE]
    collection = database['twitter']
    
    try:
        data_in_db = await collection.find_one({'word': word}, {'_id': 0})
        if not data_in_db:
            data = get_tweets(word=word, number=number)
            await collection.insert_one(data)
            return data
        else:
            return data_in_db
    except Exception as e:
        raise Exception('some error occured: ',e)

@app.post("/add_docter")
async def add_docter(items: List[Dict]):
    if not items:
        raise HTTPException(status_code=400, detail="No items provided")
    client = AsyncIOMotorClient(MONGO_CONNECTION_STRING)
    database = client[MONGO_DATABASE]
    collection = database['docter']

    try:
        for item in items:
            if 'location' in item:
                item['location'] = item['location'].lower()

        await collection.insert_many(items)
    except Exception as e:
        return {"error": str(e)}
    finally:
        client.close()

    return {"status": True}


@app.get("/get_docters")
async def get_docter(location: str, count: int = 5):
    if not location:
        raise HTTPException(status_code=400, detail="No location provided")
    client = AsyncIOMotorClient(MONGO_CONNECTION_STRING)
    database = client[MONGO_DATABASE]
    collection = database['docter']

    try:
        doctors = await collection.find(
            {"location": location},
            {'_id': 0}
        ).limit(count).to_list(length=count)
        if not doctors:
            raise HTTPException(status_code=404, detail="No doctors found in the specified location")
        return doctors
    
    except Exception as e:
        return {"error": str(e)}
    finally:
        client.close()


@app.get("/live_stats")
async def get_live_stats(tag_name: str = 'naturaldisaster'):
    client = AsyncIOMotorClient(MONGO_CONNECTION_STRING)
    database = client[MONGO_DATABASE]
    collection = database['social']

    try:
        data_in_db = await collection.find_one({'tag_name': tag_name}, {'_id': 0})
        if not data_in_db:
            data = scrape_social_buzz(tag_name=tag_name)
            print(data)
            print(type(data))
            return JSONResponse(content=json.loads(JSONEncoder().encode(data)))
        else:
            return data_in_db
    except Exception as e:
        raise Exception('some error occured: ',e)
    

@app.post('/predict_flood')
async def predict_flood(data: dict):
    try:
        features = [float(data[key]) for key in ['YEAR', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']]
        np_features = np.array(features).reshape(1, -1)
        prediction = model.predict(np_features)
        prediction = prediction.tolist()
        prediction = prediction[0]

        fatality_rate = get_fatality_rate(prediction, data)

        return {"prediction": prediction, 'fatality_rate': fatality_rate}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid input format, {e}")