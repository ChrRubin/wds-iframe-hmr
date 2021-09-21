# WDS v4 cross-domain iframe content script issue example

When developing for chrome extensions, triggering hot reload in a page with a cross-domain iframe that has an injected content script causes the iframe to reload infinitely, even when the change is not on the injected content script.

Checking the browser console shows that HMR tries to load the `*.hot-update.json` file via the iframe's domain, and continues to reload and fail infinitely.

![image](https://i.imgur.com/wfBxwHp.png)

This bug did not occur in webpack-dev-server v3.11.2.

## Way to reproduce

- Clone repo, `yarn install`
- `yarn serve`
- Drag the `dist` folder into `chrome://extensions/` with Developer mode enabled.
- Open the example page via the extension's browser action:

![image](https://i.imgur.com/Xreyvy5.png)

- Trigger hot reload by changing the value(s) of the variables in `page-script.js`.
