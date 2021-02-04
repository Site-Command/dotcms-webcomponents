import{h as e}from"./p-ca5d1561.js";import{d as t,e as a}from"./p-3163a9f0.js";const r={Text:t=>e("dot-textfield",{hint:t.hint,label:t.name,name:t.variable,ref:e=>{n(e,t.fieldVariables)},"regex-check":t.regexCheck,required:t.required,value:t.defaultValue}),Textarea:t=>e("dot-textarea",{hint:t.hint,label:t.name,name:t.variable,ref:e=>{n(e,t.fieldVariables)},"regex-check":t.regexCheck,required:t.required,value:t.defaultValue}),Checkbox:t=>e("dot-checkbox",{hint:t.hint,label:t.name,name:t.variable,options:t.values,ref:e=>{n(e,t.fieldVariables)},required:t.required,value:t.defaultValue}),"Multi-Select":t=>e("dot-multi-select",{hint:t.hint,label:t.name,name:t.variable,options:t.values,ref:e=>{n(e,t.fieldVariables)},required:t.required,value:t.defaultValue}),"Key-Value":t=>e("dot-key-value",{"field-type":t.fieldType,hint:t.hint,label:t.name,name:t.variable,required:t.required,value:t.defaultValue}),Select:t=>e("dot-select",{hint:t.hint,label:t.name,name:t.variable,options:t.values,ref:e=>{n(e,t.fieldVariables)},required:t.required,value:t.defaultValue}),Radio:t=>e("dot-radio",{hint:t.hint,label:t.name,name:t.variable,options:t.values,ref:e=>{n(e,t.fieldVariables)},required:t.required,value:t.defaultValue}),Date:t=>e("dot-date",{hint:t.hint,label:t.name,name:t.variable,ref:e=>{n(e,t.fieldVariables)},required:t.required,value:t.defaultValue}),Time:t=>e("dot-time",{hint:t.hint,label:t.name,name:t.variable,ref:e=>{n(e,t.fieldVariables)},required:t.required,value:t.defaultValue}),"Date-and-Time":t=>e("dot-date-time",{hint:t.hint,label:t.name,name:t.variable,ref:e=>{n(e,t.fieldVariables)},required:t.required,value:t.defaultValue}),"Date-Range":t=>e("dot-date-range",{hint:t.hint,label:t.name,name:t.variable,required:t.required,value:t.defaultValue}),Tag:t=>e("dot-tags",{data:()=>fetch("/api/v1/tags").then(e=>e.json()).then(e=>Object.keys(e)).catch(()=>[]),hint:t.hint,label:t.name,name:t.variable,required:t.required,value:t.defaultValue}),Binary:t=>e("dot-binary-file",{accept:d(t.fieldVariables,"accept"),"max-file-length":d(t.fieldVariables,"maxFileLength"),hint:t.hint,label:t.name,name:t.variable,ref:e=>{n(e,t.fieldVariables)},required:t.required})},l="dot";function n(e,t){t.forEach(({key:t,value:a})=>{e.setAttribute(t,a)})}function i(e,t){t.forEach(({name:t,value:a})=>{e.setAttribute(t.replace("dot",""),a)})}function u(e,t){const a=t.map(e=>e.toUpperCase());return e.filter(e=>!a.includes(e.name.toUpperCase())&&e.name.startsWith("dot"))}const o=(e,t)=>{const a=t?t.split(","):[];return!a.length||a.includes(e.variable)},d=(e,t)=>{if(e&&e.length){const[a]=e.filter(e=>e.key.toUpperCase()===t.toUpperCase());return a&&a.value}return null},c=e=>{let t;try{t=JSON.parse(e)}catch(a){t=e}return t.errors&&t.errors.length&&t.errors[0].message?t.errors[0].message:e},s=e=>e.reduce((e,{columns:t})=>e.concat(...t.map(e=>e.fields)),[]),m={"Key-Value":e=>{if(e.defaultValue&&"string"!=typeof e.defaultValue){const a=Object.keys(e.defaultValue).map(t=>({key:t,value:e.defaultValue[t]}));e.defaultValue=t(a)}return r["Key-Value"](e)}},f={"DOT-KEY-VALUE":e=>a(e)?e.split(",").reduce((e,t)=>{const[a,r]=t.split("|");return Object.assign(Object.assign({},e),{[a]:r})},{}):null},b={Time:r.Time,Textarea:r.Textarea,Text:r.Text,Tag:r.Tag,Select:r.Select,Radio:r.Radio,"Multi-Select":r["Multi-Select"],"Key-Value":m["Key-Value"],"Date-and-Time":r["Date-and-Time"],"Date-Range":r["Date-Range"],Date:r.Date,Checkbox:r.Checkbox,Binary:r.Binary};export{l as D,c as a,s as b,o as c,b as d,f,u as g,i as s}