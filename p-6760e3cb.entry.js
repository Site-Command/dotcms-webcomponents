import{r as t,c as s,h as i,H as e,g as h}from"./p-ca5d1561.js";import{g as a,a as r,b as o,c as n,h as d,j as u,k as l,u as c}from"./p-3163a9f0.js";import{c as g}from"./p-a2039f2e.js";import{g as m,s as p}from"./p-aff2a700.js";const f=class{constructor(i){t(this,i),this.dotValueChange=s(this,"dotValueChange",7),this.dotStatusChange=s(this,"dotStatusChange",7),this.value="",this.name="",this.label="",this.hint="",this.required=!1,this.requiredMessage="This field is required",this.validationMessage="The field doesn't comply with the specified format",this.disabled=!1,this.regexCheck=""}async reset(){this.value="",this.status=a(this.isValid()),this.emitStatusChange(),this.emitValueChange()}componentWillLoad(){this.value=this.value||"",this.validateProps(),this.status=a(this.isValid()),this.emitStatusChange()}componentDidLoad(){const t=this.el.querySelector("textarea");setTimeout(()=>{const s=m(Array.from(this.el.attributes),[]);p(t,s)},0)}regexCheckWatch(){this.regexCheck=g(this,"regexCheck")}valueWatch(){this.value=this.value||""}render(){const t=r(this.status,this.isValid(),this.required);return i(e,{class:Object.assign({},t)},i("dot-label",{label:this.label,required:this.required,name:this.name},i("textarea",{"aria-describedby":d(this.hint),class:u(this.status.dotValid),id:l(this.name),name:this.name,value:this.value,required:this.getRequiredAttr(),onInput:t=>this.setValue(t),onBlur:()=>this.blurHandler(),disabled:this.getDisabledAtt()})),n(this.hint),o(this.shouldShowErrorMessage(),this.getErrorMessage()))}validateProps(){this.regexCheckWatch()}getDisabledAtt(){return this.disabled||null}getRequiredAttr(){return!!this.required||null}isValid(){return!this.isValueRequired()&&this.isRegexValid()}isValueRequired(){return this.required&&!this.value.length}isRegexValid(){return!this.regexCheck||!this.value.length||new RegExp(this.regexCheck,"ig").test(this.value)}shouldShowErrorMessage(){return this.getErrorMessage()&&!this.status.dotPristine}getErrorMessage(){return this.isRegexValid()?this.isValid()?"":this.requiredMessage:this.validationMessage}blurHandler(){this.status.dotTouched||(this.status=c(this.status,{dotTouched:!0}),this.emitStatusChange())}setValue(t){this.value=t.target.value.toString(),this.status=c(this.status,{dotTouched:!0,dotPristine:!1,dotValid:this.isValid()}),this.emitValueChange(),this.emitStatusChange()}emitStatusChange(){this.dotStatusChange.emit({name:this.name,status:this.status})}emitValueChange(){this.dotValueChange.emit({name:this.name,value:this.value})}get el(){return h(this)}static get watchers(){return{regexCheck:["regexCheckWatch"],value:["valueWatch"]}}};f.style="input{outline:none}.dot-field__input--error{border:1px solid red}";export{f as dot_textarea}