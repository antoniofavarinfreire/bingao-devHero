if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const d=e=>n(e,s),t={module:{uri:s},exports:o,require:d};i[s]=Promise.all(r.map((e=>t[e]||d(e)))).then((e=>(c(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BugAxThZ.js",revision:null},{url:"assets/index-CAYEaoFL.css",revision:null},{url:"index.html",revision:"c8f1b6d0cc364395948c224a7b28ccd9"},{url:"registerSW.js",revision:"ca855198f5d0087918484baecf526152"},{url:"android-chrome-192x192.png",revision:"218d7f396ad6c94fa977cfd5f423a176"},{url:"android-chrome-512x512.png",revision:"69cc2a9db22697a7517ec708dcdaaf7d"},{url:"apple-touch-icon.png",revision:"365cd98b521a3ad6c1354e48ba741e3d"},{url:"favicon.ico",revision:"344c0b0e05ac6b39eecf3827f937e62d"},{url:"manifest.webmanifest",revision:"99745e9021a0c323dc97872019fa9210"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));