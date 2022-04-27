var songplaying = "";
var songplayingromaji = "";

function getSongPlaying(){
    setTimeout(function(){
        var convert = document.evaluate("//*[@id='main']/div/div[2]/div[2]/footer/div/div[1]/div/div[2]/div[1]/div/div/div/div/span/a", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        songplaying = convert.textContent;
    },4000); //makes sure title  is loaded
    setTimeout(function(){
        if(isJapanese(songplaying)==true){ //if song has japanese characthers, go through
            chrome.runtime.sendMessage(songplaying)
            chrome.runtime.onMessage.addListener(function(romaji, sender, sendResponse){
                songplayingromaji = romaji; 
            });
        } else {
            songplayingromaji = songplaying;
        }       
    },5000); //gives time for get request
}
//timing varies based off connection, need to figure out how to better this

getSongPlaying(); //initial run

setInterval(function(){
    getSongPlaying();
    console.log(songplaying);
    console.log(songplayingromaji); 
    document.querySelector("#main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div > div.vlcT8RVn1uWMsYpq2e5K > div > div.KKJUKKP3FyKKKdRjWDVj > div.tyIiSOWsTxiyox1_LW7F > div > div > div > div > span > a").innerHTML = songplayingromaji;
    //sets song title area to songplayingromaji
},30000) //updates every 30 seconds






