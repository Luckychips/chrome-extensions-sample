chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.create({
        'url': './app.html',
        'selected': true
    });
});