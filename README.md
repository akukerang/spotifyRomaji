# spotifyRomaji
Converts Japanese songs to romaji, only in web-based Spotify. Uses a content script to fetch from a Flask server to convert currently playing Japanese song titles into romaji, using pykakasi.
## **How to use:**
1. Get a Spotify user token for authentication.
    - Need to eventually make this automatic or easier
2. Adjust timing
    - Adjust the interval and timeout settings in background.js and sptf.js. Really depends on internet speed.
3. Run the Flask Server on main.py
4. Load folder named chrome as an extension, with developer mode on. 
5. Go to open.spotify.com, set it as the first tab.
6. Pick a song with hiragana/katakana for best test case
    - Certain kanji does not get romanized


![peko](https://c4.wallpaperflare.com/wallpaper/831/174/466/hololive-usada-pekora-hd-wallpaper-preview.jpg)

