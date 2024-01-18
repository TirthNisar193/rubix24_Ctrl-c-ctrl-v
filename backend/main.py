from fastapi import FastAPI, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
from typing import List, Dict
import json
from bson import json_util

from external_apis.news import get_news
from external_apis.twitter_scrapper import get_tweets
from scrapers.social_buzz_scraper import scrape_social_buzz

from confi import (
    MONGO_CONNECTION_STRING,
    MONGO_DATABASE
)

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/news")
async def retrieve_news(topic: str):
    if not topic:
        raise HTTPException(status_code=400, detail="No topic provided")
    return get_news(topic=topic)


@app.get("/twitter")
async def retrieve_twitter_data(word: str, number: int = 5):
    if not word:
        raise HTTPException(status_code=400, detail="No word provided")
    return get_tweets(word=word, number=number) #connect to db for better speed


@app.post("/add_docter")
async def add_docter(items: List[Dict]):
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
        data_in_db = await collection.find_one({'tag_name': tag_name})
        if not data_in_db:
            data = scrape_social_buzz(tag_name=tag_name)
            await collection.insert_one(data)
            return data
        else:
            return data_in_db
    except Exception as e:
        raise Exception('some error occured: ',e)