from fastapi import FastAPI
from dotenv import load_dotenv
from pymongo import MongoClient
from pydantic import BaseModel
import requests
import os
import json
import time
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=['*'],
    allow_headers=['*'],
)
SUNO_KEY = os.getenv('SUNO_API')
url = 'https://studio-api.suno.ai/api/external/generate/'
class Search(BaseModel):
    search: str

class Query(BaseModel):
    query: str

headers = {
    'accept': '/',
    'accept-language': 'en-US,en;q=0.9',
    'affiliate-id': 'undefined',
    'authorization': f'Bearer {SUNO_KEY}',  # Replace {USER_TOKEN} with your actual token
    'content-type': 'text/plain;charset=UTF-8',
    'origin': 'https://suno.com/',
    'priority': 'u=1, i',
    'referer': 'https://suno.com/',
    'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'cross-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
}

load_dotenv()
URI = os.getenv('ATLAS_URI')
app = FastAPI()
client = MongoClient(URI)

db = client['video-link-database']
collection = db['video-links']

@app.get("/search/{search}")
async def search_for(search: str):
    print(search)
    query = {'tags': search}
    results = collection.find(query,{"link": 1, "tags": 1, "_id":0})
    result_list = []
    for b in results:
        result_list.append(b)
    return {"message": str(result_list)}

@app.get("/searchall")
async def search_for():
    results = collection.find({},{"link": 1, "tags": 1, "_id":0})
    result_list = []
    for b in results:
        result_list.append(b)
    return {"message": str(result_list)}

@app.get("/endpoint")
async def test():
    return {"message": "AHHHHH"}

@app.get("/suno/{search}")
async def test(search: str):
    headers = {
    'accept': '/',
    'accept-language': 'en-US,en;q=0.9',
    'affiliate-id': 'undefined',
    'authorization': f'Bearer {SUNO_KEY}',  # Replace {USER_TOKEN} with your actual token
    'content-type': 'text/plain;charset=UTF-8',
    'origin': 'https://suno.com/',
    'priority': 'u=1, i',
    'referer': 'https://suno.com/',
    'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'cross-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
    }
    tp = f"A song that does the following: {search}"
    data = {"topic": tp, "tags": "pop"}
    data = json.dumps(data)
    # Make the POST request
    url = "https://studio-api.suno.ai/api/external/generate/"
    response = requests.post(url, headers=headers, data=data)
    clip_id = response.json()['id']
    url=f'https://cdn1.suno.ai/{clip_id}.mp3'
    # headers = {'authorization': f'Bearer {SUNO_KEY}'}
    time.sleep(30)
    # response = requests.get(url,headers=headers)
    # print(response.json())
    return {"message": url}

