// Inject BBTV Script
const bttvScript = document.createElement('script');
bttvScript.type = 'text/javascript';
bttvScript.src = 'https://cdn.betterttv.net/betterttv.js';

// Inject FFZ script
const ffzScript = document.createElement('script');
ffzScript.type = 'text/javascript';
ffzScript.src = 'https://cdn.frankerfacez.com/static/ffz_injector.user.js';

// Append scripts to head
const head = document.getElementsByTagName('head')[0];
head.appendChild(bttvScript);
head.appendChild(ffzScript);
