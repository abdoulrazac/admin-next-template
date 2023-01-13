import{v as Be,a as Le}from"./runtime-dom.esm-bundler-f4221b35.js";import{d as Re}from"./index-f8533f9f.js";import{U as De,V as He,j as Oe,E as M,g as je}from"./index-11c4686d.js";import{W as Ke,l as ge,h as Ue,j as J,u as xe,_ as We,f as Xe,w as Ye}from"./plugin-vue_export-helper-11364865.js";import{c as d,L as qe,r as V,j as Q,d as Ce,l as Ge,H as Ze,s as ee,a as te,A,o as Je,a4 as Qe,M as et,b as f,e as g,D as m,F as ae,n as h,u as t,g as j,f as z,m as w,p as B,C as K,y as oe,q as tt,N as at,x as U,h as ot,k as we}from"./runtime-core.esm-bundler-8c23b74b.js";import{b as st,a as nt,u as lt}from"./index-fbb8de7a.js";import{i as Se,V as rt}from"./icon-390fc75b.js";import{m as it}from"./typescript-defaf979.js";import{b as ut,c as ct}from"./index-d91a418e.js";class dt extends Error{constructor(u){super(u),this.name="ElementPlusError"}}function Bt(o,u){throw new dt(`[${o}] ${u}`)}function Lt(o,u){}const se="update:modelValue",Rt="change",Dt="input",pt=o=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(o),ft=["class","style"],vt=/^on[A-Z]/,mt=(o={})=>{const{excludeListeners:u=!1,excludeKeys:n}=o,a=d(()=>((n==null?void 0:n.value)||[]).concat(ft)),l=qe();return l?d(()=>{var r;return Ke(Object.entries((r=l.proxy)==null?void 0:r.$attrs).filter(([c])=>!a.value.includes(c)&&!(u&&vt.test(c))))}):d(()=>({}))};function ht(o){const u=V();function n(){if(o.value==null)return;const{selectionStart:l,selectionEnd:r,value:c}=o.value;if(l==null||r==null)return;const x=c.slice(0,Math.max(0,l)),p=c.slice(Math.max(0,r));u.value={selectionStart:l,selectionEnd:r,value:c,beforeTxt:x,afterTxt:p}}function a(){if(o.value==null||u.value==null)return;const{value:l}=o.value,{beforeTxt:r,afterTxt:c,selectionStart:x}=u.value;if(r==null||c==null||x==null)return;let p=l.length;if(l.endsWith(c))p=l.length-c.length;else if(l.startsWith(r))p=r.length;else{const y=r[x-1],S=l.indexOf(y,x-1);S!==-1&&(p=S+1)}o.value.setSelectionRange(p,p)}return[n,a]}let b;const yt=`
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,bt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function gt(o){const u=window.getComputedStyle(o),n=u.getPropertyValue("box-sizing"),a=Number.parseFloat(u.getPropertyValue("padding-bottom"))+Number.parseFloat(u.getPropertyValue("padding-top")),l=Number.parseFloat(u.getPropertyValue("border-bottom-width"))+Number.parseFloat(u.getPropertyValue("border-top-width"));return{contextStyle:bt.map(c=>`${c}:${u.getPropertyValue(c)}`).join(";"),paddingSize:a,borderSize:l,boxSizing:n}}function Ee(o,u=1,n){var a;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:l,borderSize:r,boxSizing:c,contextStyle:x}=gt(o);b.setAttribute("style",`${x};${yt}`),b.value=o.value||o.placeholder||"";let p=b.scrollHeight;const y={};c==="border-box"?p=p+r:c==="content-box"&&(p=p-l),b.value="";const S=b.scrollHeight-l;if(ge(u)){let v=S*u;c==="border-box"&&(v=v+l+r),p=Math.max(v,p),y.minHeight=`${v}px`}if(ge(n)){let v=S*n;c==="border-box"&&(v=v+l+r),p=Math.min(v,p)}return y.height=`${p}px`,(a=b.parentNode)==null||a.removeChild(b),b=void 0,y}const xt=Ue({id:{type:String,default:void 0},size:st,disabled:Boolean,modelValue:{type:J([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:J([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Se},prefixIcon:{type:Se},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:J([Object,Array,String]),default:()=>it({})}}),wt={[se]:o=>Q(o),input:o=>Q(o),change:o=>Q(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},St=["role"],Et=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form"],Ct=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],It=Ce({name:"ElInput",inheritAttrs:!1}),kt=Ce({...It,props:xt,emits:wt,setup(o,{expose:u,emit:n}){const a=o,l=Ge(),r=Ze(),c=d(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=l["aria-haspopup"],e["aria-owns"]=l["aria-owns"],e["aria-expanded"]=l["aria-expanded"]),e}),x=d(()=>[a.type==="textarea"?le.b():s.b(),s.m(Ie.value),s.is("disabled",I.value),s.is("exceed",ze.value),{[s.b("group")]:r.prepend||r.append,[s.bm("group","append")]:r.append,[s.bm("group","prepend")]:r.prepend,[s.m("prefix")]:r.prefix||a.prefixIcon,[s.m("suffix")]:r.suffix||a.suffixIcon||a.clearable||a.showPassword,[s.bm("suffix","password-clear")]:D.value&&Y.value},l.class]),p=d(()=>[s.e("wrapper"),s.is("focus",N.value)]),y=mt({excludeKeys:d(()=>Object.keys(c.value))}),{form:S,formItem:v}=ut(),{inputId:ne}=ct(a,{formItemContext:v}),Ie=nt(),I=lt(),s=xe("input"),le=xe("textarea"),L=ee(),k=ee(),N=V(!1),W=V(!1),T=V(!1),R=V(!1),re=V(),X=ee(a.inputStyle),F=d(()=>L.value||k.value),ie=d(()=>{var e;return(e=S==null?void 0:S.statusIcon)!=null?e:!1}),_=d(()=>(v==null?void 0:v.validateState)||""),ue=d(()=>_.value&&rt[_.value]),ke=d(()=>R.value?De:He),Pe=d(()=>[l.style,a.inputStyle]),ce=d(()=>[a.inputStyle,X.value,{resize:a.resize}]),E=d(()=>Oe(a.modelValue)?"":String(a.modelValue)),D=d(()=>a.clearable&&!I.value&&!a.readonly&&!!E.value&&(N.value||W.value)),Y=d(()=>a.showPassword&&!I.value&&!a.readonly&&!!E.value&&(!!E.value||N.value)),P=d(()=>a.showWordLimit&&!!y.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!I.value&&!a.readonly&&!a.showPassword),q=d(()=>Array.from(E.value).length),ze=d(()=>!!P.value&&q.value>Number(y.value.maxlength)),Ve=d(()=>!!r.suffix||!!a.suffixIcon||D.value||a.showPassword||P.value||!!_.value&&ie.value),[Ne,Te]=ht(L);Re(k,e=>{if(!P.value||a.resize!=="both")return;const i=e[0],{width:C}=i.contentRect;re.value={right:`calc(100% - ${C+15+6}px)`}});const H=()=>{const{type:e,autosize:i}=a;if(!(!Xe||e!=="textarea"))if(i){const C=we(i)?i.minRows:void 0,Z=we(i)?i.maxRows:void 0;X.value={...Ee(k.value,C,Z)}}else X.value={minHeight:Ee(k.value).minHeight}},$=()=>{const e=F.value;!e||e.value===E.value||(e.value=E.value)},G=async e=>{Ne();let{value:i}=e.target;if(a.formatter&&(i=a.parser?a.parser(i):i,i=a.formatter(i)),!T.value){if(i===E.value){$();return}n(se,i),n("input",i),await A(),$(),Te()}},de=e=>{n("change",e.target.value)},pe=e=>{n("compositionstart",e),T.value=!0},fe=e=>{var i;n("compositionupdate",e);const C=(i=e.target)==null?void 0:i.value,Z=C[C.length-1]||"";T.value=!pt(Z)},ve=e=>{n("compositionend",e),T.value&&(T.value=!1,G(e))},Fe=()=>{R.value=!R.value,O()},O=async()=>{var e;await A(),(e=F.value)==null||e.focus()},_e=()=>{var e;return(e=F.value)==null?void 0:e.blur()},me=e=>{N.value=!0,n("focus",e)},he=e=>{var i;N.value=!1,n("blur",e),a.validateEvent&&((i=v==null?void 0:v.validate)==null||i.call(v,"blur").catch(C=>void 0))},$e=e=>{W.value=!1,n("mouseleave",e)},Me=e=>{W.value=!0,n("mouseenter",e)},ye=e=>{n("keydown",e)},Ae=()=>{var e;(e=F.value)==null||e.select()},be=()=>{n(se,""),n("change",""),n("clear"),n("input","")};return te(()=>a.modelValue,()=>{var e;A(()=>H()),a.validateEvent&&((e=v==null?void 0:v.validate)==null||e.call(v,"change").catch(i=>void 0))}),te(E,()=>$()),te(()=>a.type,async()=>{await A(),$(),H()}),Je(()=>{!a.formatter&&a.parser,$(),A(H)}),u({input:L,textarea:k,ref:F,textareaStyle:ce,autosize:Qe(a,"autosize"),focus:O,blur:_e,select:Ae,clear:be,resizeTextarea:H}),(e,i)=>et((f(),g("div",oe(t(c),{class:t(x),style:t(Pe),role:e.containerRole,onMouseenter:Me,onMouseleave:$e}),[m(" input "),e.type!=="textarea"?(f(),g(ae,{key:0},[m(" prepend slot "),e.$slots.prepend?(f(),g("div",{key:0,class:h(t(s).be("group","prepend"))},[j(e.$slots,"prepend")],2)):m("v-if",!0),z("div",{class:h(t(p))},[m(" prefix slot "),e.$slots.prefix||e.prefixIcon?(f(),g("span",{key:0,class:h(t(s).e("prefix"))},[z("span",{class:h(t(s).e("prefix-inner")),onClick:O},[j(e.$slots,"prefix"),e.prefixIcon?(f(),w(t(M),{key:0,class:h(t(s).e("icon"))},{default:B(()=>[(f(),w(K(e.prefixIcon)))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0),z("input",oe({id:t(ne),ref_key:"input",ref:L,class:t(s).e("inner")},t(y),{type:e.showPassword?R.value?"text":"password":e.type,disabled:t(I),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:a.form,onCompositionstart:pe,onCompositionupdate:fe,onCompositionend:ve,onInput:G,onFocus:me,onBlur:he,onChange:de,onKeydown:ye}),null,16,Et),m(" suffix slot "),t(Ve)?(f(),g("span",{key:1,class:h(t(s).e("suffix"))},[z("span",{class:h(t(s).e("suffix-inner")),onClick:O},[!t(D)||!t(Y)||!t(P)?(f(),g(ae,{key:0},[j(e.$slots,"suffix"),e.suffixIcon?(f(),w(t(M),{key:0,class:h(t(s).e("icon"))},{default:B(()=>[(f(),w(K(e.suffixIcon)))]),_:1},8,["class"])):m("v-if",!0)],64)):m("v-if",!0),t(D)?(f(),w(t(M),{key:1,class:h([t(s).e("icon"),t(s).e("clear")]),onMousedown:Le(t(at),["prevent"]),onClick:be},{default:B(()=>[tt(t(je))]),_:1},8,["class","onMousedown"])):m("v-if",!0),t(Y)?(f(),w(t(M),{key:2,class:h([t(s).e("icon"),t(s).e("password")]),onClick:Fe},{default:B(()=>[(f(),w(K(t(ke))))]),_:1},8,["class"])):m("v-if",!0),t(P)?(f(),g("span",{key:3,class:h(t(s).e("count"))},[z("span",{class:h(t(s).e("count-inner"))},U(t(q))+" / "+U(t(y).maxlength),3)],2)):m("v-if",!0),t(_)&&t(ue)&&t(ie)?(f(),w(t(M),{key:4,class:h([t(s).e("icon"),t(s).e("validateIcon"),t(s).is("loading",t(_)==="validating")])},{default:B(()=>[(f(),w(K(t(ue))))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0)],2),m(" append slot "),e.$slots.append?(f(),g("div",{key:1,class:h(t(s).be("group","append"))},[j(e.$slots,"append")],2)):m("v-if",!0)],64)):(f(),g(ae,{key:1},[m(" textarea "),z("textarea",oe({id:t(ne),ref_key:"textarea",ref:k,class:t(le).e("inner")},t(y),{tabindex:e.tabindex,disabled:t(I),readonly:e.readonly,autocomplete:e.autocomplete,style:t(ce),"aria-label":e.label,placeholder:e.placeholder,form:a.form,onCompositionstart:pe,onCompositionupdate:fe,onCompositionend:ve,onInput:G,onFocus:me,onBlur:he,onChange:de,onKeydown:ye}),null,16,Ct),t(P)?(f(),g("span",{key:0,style:ot(re.value),class:h(t(s).e("count"))},U(t(q))+" / "+U(t(y).maxlength),7)):m("v-if",!0)],64))],16,St)),[[Be,e.type!=="hidden"]])}});var Pt=We(kt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const Ht=Ye(Pt);export{Rt as C,Ht as E,Dt as I,se as U,Lt as d,pt as i,Bt as t,mt as u};
