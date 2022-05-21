/**
 * @fileoverview Entry point of the application.
 */
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.windows.create(
      {url: 'window.html', type: 'popup', width: 800, height: 550});
});
