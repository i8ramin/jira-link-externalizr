chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
  	if (document.readyState === "complete") {
  		clearInterval(readyStateCheckInterval);

      var externalLinks = document.querySelectorAll('a[href^="https://"]:not([href*="atlassian"])');

      externalLinks.forEach(function (link) {
        link.setAttribute('target', '_blank');
        console.warn('Set target="_blank" on', link);
      });
  	}
	}, 10);
});
