import requests

response = requests.post('https://a588-2601-19b-e01-53a0-9c84-514e-2831-fc4b.ngrok-free.app/search', json={"search":"bulk"})
print(response.content)

