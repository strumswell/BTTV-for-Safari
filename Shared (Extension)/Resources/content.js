// Head to append scripts to
const head = document.getElementsByTagName('head')[0];

// Inject BTTV if enabled
browser.runtime.sendMessage({ type: "GetStoreExecution", id: "bttvEnabled" }).then((response) => {
    if (response.checked) {
        const bttvScript = document.createElement('script');
        bttvScript.type = 'text/javascript';
        bttvScript.src = 'https://cdn.betterttv.net/betterttv.js';
        head.appendChild(bttvScript);
    }
});

// Inject FFZ if enabled
browser.runtime.sendMessage({ type: "GetStoreExecution", id: "ffzEnabled" }).then((response) => {
    if (response.checked) {
        const ffzScript = document.createElement('script');
        ffzScript.type = 'text/javascript';
        ffzScript.src = 'https://cdn.frankerfacez.com/static/ffz_injector.user.js';
        head.appendChild(ffzScript);
    }
});
