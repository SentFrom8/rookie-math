#!python3

import requests

res = requests.post(url="http://localhost:5173/suggestion-handler.data", headers={"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"}, data=b"type=bug&email=test%40test.test&description=1%22%22%22%04")
print(res.text)
