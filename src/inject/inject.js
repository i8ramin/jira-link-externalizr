chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      delegate(document, 'a[href^="https://"]:not([href*="we.co"]):not([href*="atlassian.com"])', 'click', function(e) {
        var link = e.target;
        link.setAttribute('target', '_blank');
      });
    }
  }, 10);
});
