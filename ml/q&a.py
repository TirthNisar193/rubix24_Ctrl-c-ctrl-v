# Q&A ChatBot
from langchain_openai import ChatOpenAI 
from dotenv import load_dotenv

load_dotenv() # take environment varialbes from .env

import streamlit as st
import os


## Function to load OpenAi model and get responses

def get_open_response(question):
    llm= ChatOpenAI(openai_api_key='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', model_name="gpt-3.5-turbo-0613", temperature=0.5)
    response=llm.invoke(question)
    return response

## Initialise our streamlit app
st.set_page_config(page_title="Q&A Demo")
st.header("Langchain Application")

input = st.text_input("Input:  ", key="input")
response = get_open_response(input)
submit = st.button("Generate")

## If Generate button is clicked

if submit:
    st.subheader("The Reponse is")
    st.write(response)