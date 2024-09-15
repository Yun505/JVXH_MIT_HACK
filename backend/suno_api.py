import os
from dotenv import load_dotenv
import requests
import json

load_dotenv()
SUNO_KEY = os.getenv('SUNO_API')
headers = {'accept': 'application/json',
    'Content-Type': 'application/json'}
url = 'https://studio-api.suno.ai/api/external/generate/'

# Define the headers to include in the request
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

# Define the raw data to be sent in the request body
# data = '{"topic": "A song about traveling on Christmas", "tags": "pop"}'

# # Make the POST request
# response = requests.post(url, headers=headers, data=data)

# # Print the response status code and response data
# print(f"Status Code: {response.status_code}")
# print(f"Response Data: {response.text}")
clip_id = '7dba3af2-0d44-4f85-8f2d-445607aa7082'#response.json()['id']
print(clip_id)
url = f'https://studio-api.suno.ai/api/external/clips/?ids={clip_id}'
print(url)

headers = {'authorization': f'Bearer {SUNO_KEY}',  # Replace {USER_TOKEN} with your actual token
}

response = requests.get(url,headers=headers)
print(f"Status Code: {response.status_code}")
print(f"Response Data: {response.text}")