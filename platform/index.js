import{defineAsyncComponent as E,createApp as _}from"/demo/libs/vue.js";import a,{mode as d,pathname as y,urls as g,Lang as f}from"/demo/libs/view.js";import{message as m}from"/demo/libs/viewui.js";import L from"/demo/libs/network.js";const w=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};w();const D="modulepreload",v=function(i){return"/demo/"+i},l={},u=function(r,o,s){return!o||o.length===0?r():Promise.all(o.map(e=>{if(e=v(e),e in l)return;l[e]=!0;const t=e.endsWith(".css"),c=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${c}`))return;const n=document.createElement("link");if(n.rel=t?"stylesheet":D,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t)return new Promise((p,h)=>{n.addEventListener("load",p),n.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>r())},A=`/demo/${a.dataSource}?mode=${d}&p=${y}`;a.initDataPromise=L.get(A).then(i=>{for(const r of i){const{url:o}=r;if(typeof o=="string"){g[o]=r;const{name:s,icon:e,color:t}={...r.main,...r.app,...r.mask};r.name=s,r.icon=e,r.color=t}}return i});const P=E(()=>u(d==="single"?()=>import("./single/index.js"):()=>import("./split/index.js"),["platform/split/index.js","platform/export-helper.js"])),F=_(P);F.mount(document.body);window.addEventListener("load",()=>u(()=>import("./install.js"),[]));window.addEventListener("offline",()=>{m.warning(f({en:'"network offline"',zh:"\u7F51\u7EDC\u8FDE\u63A5\u5DF2\u65AD\u5F00"}))});window.addEventListener("online",()=>{m.success(f({en:"Network connection success",zh:"\u7F51\u7EDC\u8FDE\u63A5\u5DF2\u6062\u590D"}))});export{u as _};