if(!self.define){let e,o={};const n=(n,r)=>(n=new URL(n+".js",r).href,o[n]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=o,document.head.appendChild(e)}else e=n,importScripts(n),o()})).then((()=>{let e=o[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(o[s])return;let d={};const c=e=>n(e,s),l={module:{uri:s},exports:d,require:c};o[s]=Promise.all(r.map((e=>l[e]||c(e)))).then((e=>(i(...e),d)))}}define(["./workbox-dbf1b8dc"],(function(e){"use strict";e.setCacheNameDetails({prefix:"bingo-game"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/bingao-devHero/css/app.77bbe482.css",revision:null},{url:"/bingao-devHero/css/chunk-vendors.2fe6f369.css",revision:null},{url:"/bingao-devHero/index.html",revision:"f77d2c1e75595de554bade0fdaf5eae5"},{url:"/bingao-devHero/js/app.c28e6cc9.js",revision:null},{url:"/bingao-devHero/js/chunk-vendors.952ff4c4.js",revision:null},{url:"/bingao-devHero/js/webfontloader.d56982b7.js",revision:null},{url:"/bingao-devHero/manifest.json",revision:"a29bfb6ed61a339bef0969d0dadd0313"},{url:"/bingao-devHero/manisfest.json",revision:"beadb2b6673b2cba049cddcaa8b0cb76"},{url:"/bingao-devHero/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
