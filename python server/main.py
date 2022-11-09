from flask import Flask
import pykakasi
import requests
from classes.japanese import isJapanese

kks = pykakasi.kakasi()
USER_TOKEN = ""
def getNowPlaying(access_token):
    URL = "https://api.spotify.com/v1/me/player/currently-playing"
    r = requests.get(
        URL,
        headers={
            "Authorization": f"Bearer {access_token}"
        }
    )
    if (r.status_code >= 200 and r.status_code <= 204):
        resp_json = r.json()
        return resp_json['item']['name']
    else:
        return ""

def getRomaji(song_name):
    result = kks.convert(song_name)
    output = ""
    for item in result:
        output += ("{}".format(item['hepburn'])).capitalize() + " "
    return output

application = Flask(__name__)
@application.route('/', methods=['GET'])
def home():
    currentSong= getNowPlaying(USER_TOKEN)
    if isJapanese(str(currentSong)):
        currentSong= getRomaji(currentSong)
        print(currentSong)
        return currentSong
    else:
        print(currentSong)
        return currentSong

application.run()

