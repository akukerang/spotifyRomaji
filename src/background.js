chrome.runtime.onMessage.addListener(function(song_name, sender, sendResponse){
    console.log(song_name);


    fetch(`http://127.0.0.1:5000/get_romaji/${song_name}`)
      .then(function (response) {
          return response.text();
      }).then(function (text) {
          console.log('GET response text:');
          console.log(text); 
          chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, text, function(response) {});
          });
      });






    
});




