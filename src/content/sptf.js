var songplaying = "";
var songplayingromaji = "";

function getSongPlaying(){
    setTimeout(function(){
        var convert = document.evaluate("//*[@id='main']/div/div[2]/div[2]/footer/div/div[1]/div/div[2]/div[1]/div/div/div/div/span/a", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        songplaying = convert.textContent;
    },5000); //makes sure title  is loaded
    setTimeout(function(){
            chrome.runtime.sendMessage(songplaying)
            chrome.runtime.onMessage.addListener(function(romaji, sender, sendResponse){
                songplayingromaji = romaji; 
            });
    },5000); //gives time for get request
}
//timing varies based off connection, need to figure out how to better this

getSongPlaying(); //initial run

setInterval(function(){
    getSongPlaying();
    console.log(songplaying);
    console.log(songplayingromaji); 
    document.querySelector("#main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div > div.OgkbKIVYE_mrNpYESylB > div > div.ZcNcu7WZgOAz_Mkcoff3 > div.Q_174taY6n64ZGC3GsKj > div > div > div > div > span > a").innerHTML = songplayingromaji;
    //sets song title area to songplayingromaji
},30000) //updates every 30 seconds







document.evaluate("//*[@id='main']/div/div[2]/div[2]/footer/div/div[1]/div/div[2]/div[1]/div/div/div/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;