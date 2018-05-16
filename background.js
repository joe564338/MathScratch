chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'bounds': {
            'width': 900,
            'height': 900,
        },
  });
  chrome.app.window.current().fullscreen();
});
