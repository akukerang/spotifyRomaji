from flask import Flask
import pykakasi


kks = pykakasi.kakasi()


application = Flask(__name__)


@application.route('/get_romaji/<song_name>',methods=['GET'])
def getromaji(song_name):
    result = kks.convert(song_name)
    output = ""
    for item in result:
        output += ("{}".format(item['hepburn'])).capitalize() + " "
    return output


application.run()


