import{C as o,p as e,w as s,a as t,d as n,N as r}from"./p-ca5d1561.js";const a="undefined"!=typeof Deno,c=!(a||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),p=(a&&Deno,c?process:a&&Deno,c?process:a&&Deno,()=>o&&o.supports&&o.supports("color","var(--c)")?t():__sc_import_dotcms_webcomponents("./p-0ad0b6e8.js").then(()=>(e.o=s.__cssshim)?(!1).i():0)),i=()=>{e.o=s.__cssshim;const o=Array.from(n.querySelectorAll("script")).find(o=>RegExp(`/${r}(\\.esm)?\\.js($|\\?|#)`).test(o.src)||o.getAttribute("data-stencil-namespace")===r),a=o["data-opts"]||{};return"onbeforeload"in o&&!history.scrollRestoration?{then(){}}:(a.resourcesUrl=new URL(".",new URL(o.getAttribute("data-resources-url")||o.src,s.location.href)).href,m(a.resourcesUrl,o),s.customElements?t(a):__sc_import_dotcms_webcomponents("./p-3d1015c2.js").then(()=>a))},m=(o,e)=>{const t="__sc_import_"+r.replace(/\s|-/g,"_");try{s[t]=Function("w","return import(w);//"+Math.random())}catch(a){const r=new Map;s[t]=a=>{const c=new URL(a,o).href;let p=r.get(c);if(!p){const o=n.createElement("script");o.type="module",o.crossOrigin=e.crossOrigin,o.src=URL.createObjectURL(new Blob([`import * as m from '${c}'; window.${t}.m = m;`],{type:"application/javascript"})),p=new Promise(e=>{o.onload=()=>{e(s[t].m),o.remove()}}),r.set(c,p),n.head.appendChild(o)}return p}}};export{p as a,i as p}