if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const c=e=>r(e,l),t={module:{uri:l},exports:o,require:c};s[l]=Promise.all(i.map((e=>t[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-practice-app"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.5785d2be.css",revision:null},{url:"/index.html",revision:"0b69269465679fd77fc5f1b94a3968ac"},{url:"/js/206.a2b85431.js",revision:null},{url:"/js/646.387ccf69.js",revision:null},{url:"/js/723.b44d9ab1.js",revision:null},{url:"/js/app.7602f47c.js",revision:null},{url:"/js/chunk-vendors.8147b801.js",revision:null},{url:"/manifest.json",revision:"f11bce428d38fd9f4d6f0ba31c2acffc"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
