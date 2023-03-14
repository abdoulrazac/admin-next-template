import{v as V,T as U,e as te,b as oe,a as ae,r as L}from"./dayjs.min-bc4b3a60.js";import{m as O}from"./config-provider-74aaaa6e.js";import{b as q,u as A,_ as j,w as re,d as F,m as le,D as ie}from"./plugin-vue_export-helper-f50e9431.js";import{d as N,c as m,a as f,k as B,l as Z,p as z,e as w,f as J,g as E,n as g,h as t,t as G,b9 as ue,r as S,o as ce,w as de,b as h,x as pe,j as T,i as me,F as fe,q as H,aT as K,J as x}from"./runtime-core.esm-bundler-a4e74cc4.js";import{b as M,i as Q,u as ge}from"./base-3117a520.js";import{o as ye,T as R,E as P,a as ve,b as he,R as Ce,F as be}from"./index-ac42ff0c.js";const Te=q({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),we=["textContent"],Ne=N({name:"ElBadge"}),ke=N({...Ne,props:Te,setup(s,{expose:n}){const e=s,a=A("badge"),o=m(()=>e.isDot?"":M(e.value)&&M(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return n({content:o}),(l,u)=>(f(),B("div",{class:g(t(a).b())},[Z(l.$slots,"default"),z(U,{name:`${t(a).namespace.value}-zoom-in-center`,persisted:""},{default:w(()=>[J(E("sup",{class:g([t(a).e("content"),t(a).em("content",l.type),t(a).is("fixed",!!l.$slots.default),t(a).is("dot",l.isDot)]),textContent:G(t(o))},null,10,we),[[V,!l.hidden&&(t(o)||l.isDot)]])]),_:1},8,["name"])],2))}});var Se=j(ke,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const Be=re(Se),W=["success","info","warning","error"],i=le({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:Q?document.body:void 0}),Ee=q({customClass:{type:String,default:i.customClass},center:{type:Boolean,default:i.center},dangerouslyUseHTMLString:{type:Boolean,default:i.dangerouslyUseHTMLString},duration:{type:Number,default:i.duration},icon:{type:ye,default:i.icon},id:{type:String,default:i.id},message:{type:F([String,Object,Function]),default:i.message},onClose:{type:F(Function),required:!1},showClose:{type:Boolean,default:i.showClose},type:{type:String,values:W,default:i.type},offset:{type:Number,default:i.offset},zIndex:{type:Number,default:i.zIndex},grouping:{type:Boolean,default:i.grouping},repeatNum:{type:Number,default:i.repeatNum}}),xe={destroy:()=>!0},c=ue([]),Me=s=>{const n=c.findIndex(o=>o.id===s),e=c[n];let a;return n>0&&(a=c[n-1]),{current:e,prev:a}},ze=s=>{const{prev:n}=Me(s);return n?n.vm.exposed.bottom.value:0},Ie=(s,n)=>c.findIndex(a=>a.id===s)>0?20:n,_e=["id"],$e=["innerHTML"],De=N({name:"ElMessage"}),Le=N({...De,props:Ee,emits:xe,setup(s,{expose:n}){const e=s,{Close:a}=ve,o=A("message"),l=S(),u=S(!1),d=S(0);let p;const C=m(()=>e.type?e.type==="error"?"danger":e.type:"info"),I=m(()=>{const r=e.type;return{[o.bm("icon",r)]:r&&R[r]}}),v=m(()=>e.icon||R[e.type]||""),Y=m(()=>ze(e.id)),_=m(()=>Ie(e.id,e.offset)+Y.value),ee=m(()=>d.value+_.value),se=m(()=>({top:`${_.value}px`,zIndex:e.zIndex}));function k(){e.duration!==0&&({stop:p}=ge(()=>{b()},e.duration))}function $(){p==null||p()}function b(){u.value=!1}function ne({code:r}){r===he.esc&&b()}return ce(()=>{k(),u.value=!0}),de(()=>e.repeatNum,()=>{$(),k()}),te(document,"keydown",ne),oe(l,()=>{d.value=l.value.getBoundingClientRect().height}),n({visible:u,bottom:ee,close:b}),(r,D)=>(f(),h(U,{name:t(o).b("fade"),onBeforeLeave:r.onClose,onAfterLeave:D[0]||(D[0]=Ve=>r.$emit("destroy")),persisted:""},{default:w(()=>[J(E("div",{id:r.id,ref_key:"messageRef",ref:l,class:g([t(o).b(),{[t(o).m(r.type)]:r.type&&!r.icon},t(o).is("center",r.center),t(o).is("closable",r.showClose),r.customClass]),style:pe(t(se)),role:"alert",onMouseenter:$,onMouseleave:k},[r.repeatNum>1?(f(),h(t(Be),{key:0,value:r.repeatNum,type:t(C),class:g(t(o).e("badge"))},null,8,["value","type","class"])):T("v-if",!0),t(v)?(f(),h(t(P),{key:1,class:g([t(o).e("icon"),t(I)])},{default:w(()=>[(f(),h(me(t(v))))]),_:1},8,["class"])):T("v-if",!0),Z(r.$slots,"default",{},()=>[r.dangerouslyUseHTMLString?(f(),B(fe,{key:1},[T(" Caution here, message could've been compromised, never use user's input as message "),E("p",{class:g(t(o).e("content")),innerHTML:r.message},null,10,$e)],2112)):(f(),B("p",{key:0,class:g(t(o).e("content"))},G(r.message),3))]),r.showClose?(f(),h(t(P),{key:2,class:g(t(o).e("closeBtn")),onClick:ae(b,["stop"])},{default:w(()=>[z(t(a))]),_:1},8,["class","onClick"])):T("v-if",!0)],46,_e),[[V,u.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Oe=j(Le,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let Fe=1;const X=s=>{const n=!s||H(s)||K(s)||x(s)?{message:s}:s,e={...i,...n};if(!e.appendTo)e.appendTo=document.body;else if(H(e.appendTo)){let a=document.querySelector(e.appendTo);be(a)||(a=document.body),e.appendTo=a}return e},He=s=>{const n=c.indexOf(s);if(n===-1)return;c.splice(n,1);const{handler:e}=s;e.close()},Re=({appendTo:s,...n},e)=>{const{nextZIndex:a}=Ce(),o=`message_${Fe++}`,l=n.onClose,u=document.createElement("div"),d={...n,zIndex:a()+n.zIndex,id:o,onClose:()=>{l==null||l(),He(v)},onDestroy:()=>{L(null,u)}},p=z(Oe,d,x(d.message)||K(d.message)?{default:x(d.message)?d.message:()=>d.message}:null);p.appContext=e||y._context,L(p,u),s.appendChild(u.firstElementChild);const C=p.component,v={id:o,vnode:p,vm:C,handler:{close:()=>{C.exposed.visible.value=!1}},props:p.component.props};return v},y=(s={},n)=>{if(!Q)return{close:()=>{}};if(M(O.max)&&c.length>=O.max)return{close:()=>{}};const e=X(s);if(e.grouping&&c.length){const o=c.find(({vnode:l})=>{var u;return((u=l.props)==null?void 0:u.message)===e.message});if(o)return o.props.repeatNum+=1,o.props.type=e.type,o.handler}const a=Re(e,n);return c.push(a),a.handler};W.forEach(s=>{y[s]=(n={},e)=>{const a=X(n);return y({...a,type:s},e)}});function Pe(s){for(const n of c)(!s||s===n.props.type)&&n.handler.close()}y.closeAll=Pe;y._context=null;const Ge=ie(y,"$message");export{Ge as E};