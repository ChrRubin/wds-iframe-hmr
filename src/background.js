const stripHeaders = (headers) => {
  return headers.filter(header => {
    const headerName = header.name.toLowerCase();
    return !(headerName === 'content-security-policy' ||
      headerName === 'x-frame-options');
  });
};

chrome.webRequest.onHeadersReceived.addListener(
  details => {
    return {
      responseHeaders: stripHeaders(details.responseHeaders)
    };
  }, {
  urls: [
    'https://www.youtube.com/live_chat?v=5qap5aO4i9A'
  ]
}, ['blocking', 'responseHeaders']);

chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.create({ url: '/page.html' });
});
