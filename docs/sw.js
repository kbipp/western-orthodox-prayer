if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const a=s=>i(s,r),u={module:{uri:r},exports:t,require:a};e[r]=Promise.all(l.map((s=>u[s]||a(s)))).then((s=>(n(...s),t)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Empty-e5a9e8b2.js",revision:null},{url:"assets/Empty-legacy-1befe43a.js",revision:null},{url:"assets/index-ed881a0e.css",revision:null},{url:"assets/index-eecf5199.js",revision:null},{url:"assets/index-legacy-06597db2.js",revision:null},{url:"assets/index9-50acfe88.js",revision:null},{url:"assets/index9-legacy-1f94ef7c.js",revision:null},{url:"assets/input-shims-ec132e46.js",revision:null},{url:"assets/input-shims-legacy-266b36a0.js",revision:null},{url:"assets/ios.transition-7b83b7ec.js",revision:null},{url:"assets/ios.transition-legacy-18c7131b.js",revision:null},{url:"assets/md.transition-9dc302a8.js",revision:null},{url:"assets/md.transition-legacy-cdf7cad8.js",revision:null},{url:"assets/polyfills-legacy-7a2e2012.js",revision:null},{url:"assets/status-tap-9114393e.js",revision:null},{url:"assets/status-tap-legacy-8e87fa71.js",revision:null},{url:"assets/swipe-back-456abc45.js",revision:null},{url:"assets/swipe-back-legacy-8decaae2.js",revision:null},{url:"index.html",revision:"ed66bfe1494869181aaac05ba4eafc1f"},{url:"registerSW.js",revision:"52ad8f8b6bb00bed86eb80bda875425d"},{url:"manifest.webmanifest",revision:"8d6f51fa2b8b78e29d5d4e1d52feb768"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));