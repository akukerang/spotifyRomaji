chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
  fetch(`http://127.0.0.1:5000/`,{
    method: 'GET',
  })
  .then((response) => response.text())
  .then(function(text) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, text);
    });
  });
}
);

