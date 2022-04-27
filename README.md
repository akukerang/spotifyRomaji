# spotifyRomaji
Converts Japanese songs to romaji, only in web-based Spotify. Uses a content script to call a python server to convert song titles into romaji, using pykakasi.
## **How to use:**
1. Run python server
2. Load unpackaged extension, with developer mode on. _(I'll package it later, maybe...)_
3. Go to open.spotify.com



![peko](https://c4.wallpaperflare.com/wallpaper/831/174/466/hololive-usada-pekora-hd-wallpaper-preview.jpg)

_If someone reading this knows how to do this without a server, and all in browser lmk.
Closest thing I can figure out is using kuroshiro, but I can't run it in the content script because dont know how to use dir files, cant get https working, and http is incompatible since Spotify runs on https. Can't run in background since the analyzer uses xhr, and too much work changing it all to fetch._
