document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#app_link').addEventListener('click', function() {
        chrome.tabs.create({
            'url': 'https://www.google.com',
            'selected': true
        });

        window.close();
    });

    document.querySelector('#translate_link').addEventListener('click', function() {
        chrome.tabs.create({
            'url': 'https://translate.google.com',
            'selected': true
        });

        window.close();
    });
});