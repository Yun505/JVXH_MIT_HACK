from fastapi import FastAPI
from dotenv import load_dotenv
from pymongo import MongoClient
import os
import json

load_dotenv()
URI = os.getenv('ATLAS_URI')
app = FastAPI()
client = MongoClient(URI)

db = client['video-link-database']
collection = db['video-links']

@app.get("/")
async def root():
    #print(type(collection.find_one()))
    return {"message": str(collection.find_one())}
