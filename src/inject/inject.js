chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      // open external links in a new tab
      delegate(
        document,
        'a[href^="https://"]:not([href*="we.co"]):not([href*="atlassian.com"])',
        'click',
        function(e) {
          e.target.setAttribute('target', '_blank');
        }
      );

      // close modal when clicked outside of it
      delegate(
        document,
        'div[class*="aui-blanket"]',
        'click',
        function(e) {
          document.getElementById('aui-dialog-close').click();
        }
      );
    }
  }, 10);
});
