"use strict";

function rewriteUserAgent(x) {
  for (var header of x.requestHeaders) {
    if (header.name.toLowerCase() === "user-agent") {
      header.value = "Mozilla/5.0 (SMART-TV; Linux; Tizen 5.0) AppleWebKit/538.1 (KHTML, like Gecko) Version/5.0 NativeTVAds Safari/538.1";
    }
  }
  return {requestHeaders: x.requestHeaders};
}

chrome.webRequest.onBeforeSendHeaders.addListener(rewriteUserAgent, {urls: ["*://*.youtube.com/tv*"]}, ["blocking", "requestHeaders"]);

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-159581267-5']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
