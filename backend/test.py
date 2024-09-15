import requests

response = requests.post('http://localhost:8000/search', json={"search":"bulk"})
print(response)

