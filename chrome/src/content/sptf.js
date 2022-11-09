nowPlaying = ""
setInterval(function(){
    setTimeout(function(){
        chrome.runtime.sendMessage("send")
        chrome.runtime.onMessage.addListener(function(romanized, sender, sendResponse){
            nowPlaying = romanized; 
        });
    },1000); //gives time for get request
    document.querySelector("#main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div > div.OgkbKIVYE_mrNpYESylB > div > div.ZcNcu7WZgOAz_Mkcoff3 > div.Q_174taY6n64ZGC3GsKj > div > div > div > div > span > a").innerHTML = nowPlaying;
},10000) //updates every 30 seconds



