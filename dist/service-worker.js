if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const d=e=>r(e,c),l={module:{uri:c},exports:o,require:d};s[c]=Promise.all(i.map((e=>l[e]||d(e)))).then((e=>(n(...e),o)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"sw-search-in-galaxy"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.704f5422.css",revision:null},{url:"css/chunk-vendors.03657bed.css",revision:null},{url:"darth_vader.png",revision:"b7058d2ce1fd1758dfe633155ee2bebc"},{url:"img/jedi.jpg",revision:"2fc3418be373ec0af8ebc665281a9d2a"},{url:"img/sith.jpg",revision:"e0aacf85c2da3e9a8478aeef7fad505c"},{url:"index.html",revision:"37c653162d458243fdb0da3dd729fe11"},{url:"js/app.ca18b4ce.js",revision:null},{url:"js/chunk-vendors.eca5001e.js",revision:null},{url:"manifest.json",revision:"de907bc133bff3f604526c9a04fbed7a"},{url:"snd/star-wars-theme.m4a",revision:"c6282c2840fddb2301fc49d02c3dbb21"},{url:"storm_trooper.png",revision:"85e0c917eb855537b72092155467987a"}],{})}));
//# sourceMappingURL=service-worker.js.map
