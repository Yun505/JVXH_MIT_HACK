import requests
from fastapi import FastAPI
from dotenv import load_dotenv
from pymongo import MongoClient
from pydantic import BaseModel
import requests
import os
import json

load_dotenv()
URI = os.getenv('ATLAS_URI')
app = FastAPI()
client = MongoClient(URI)

db = client['video-link-database']
collection = db['video-links']
mylist = [
  {"link": "https://s3.abci.ai/aistdancedb.ongaaccel.jp/v1.0.0/video/10M/gBR_sBM_c01_d06_mBR4_ch05.mp4", "tags": ["breaking","legs","expert"]},
{"link": "https://s3.abci.ai/aistdancedb.ongaaccel.jp/v1.0.0/video/10M/gBR_sBM_c02_d05_mBR1_ch08.mp4", "tags": ["breaking","legs","expert", "spinny"]},
{"link": "https://s3.abci.ai/aistdancedb.ongaaccel.jp/v1.0.0/video/10M/gMH_sFM_c07_d24_mMH0_ch15.mp4", "tags": ["groovy","smooth","hard", "locking"]},
{"link": "https://s3.abci.ai/aistdancedb.ongaaccel.jp/v1.0.0/video/10M/gJS_sBM_c09_d03_mJS3_ch07.mp4", "tags": ["ballet","graceful","hard", "slow"]},
{"link": "https://s3.abci.ai/aistdancedb.ongaaccel.jp/v1.0.0/video/10M/gHO_sBM_c06_d19_mHO1_ch07.mp4", "tags": ["loose","breaking","easy", "slow"]},
]
collection.insert_many(mylist)
# response = requests.post('http://localhost:8000/search', json={"search":"bulk"})
# print(response)

