import{Z as G,r as X,Y as O,E as ae,a as ce,O as A,i as S,aA as J,ai as ue,L as de,ay as le,aD as fe,A as me,$ as D,c as he}from"./runtime-core.esm-bundler-f902e13f.js";import{c as ve,a as _e}from"./vue-router-7d51514f.js";import{g as be}from"./index-f2496253.js";import{a as C}from"./ajax-676e8075.js";var pe=!1;/*!
  * pinia v2.0.27
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Y;const V=e=>Y=e,Z=Symbol();function H(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var L;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(L||(L={}));function Te(){const e=G(!0),r=e.run(()=>X({}));let s=[],t=[];const a=O({install(n){V(a),a._a=n,n.provide(Z,a),n.config.globalProperties.$pinia=a,t.forEach(u=>s.push(u)),t=[]},use(n){return!this._a&&!pe?t.push(n):s.push(n),this},_p:s,_a:null,_e:e,_s:new Map,state:r});return a}const z=()=>{};function q(e,r,s,t=z){e.push(r);const a=()=>{const n=e.indexOf(r);n>-1&&(e.splice(n,1),t())};return!s&&le()&&fe(a),a}function g(e,...r){e.slice().forEach(s=>{s(...r)})}function W(e,r){e instanceof Map&&r instanceof Map&&r.forEach((s,t)=>e.set(t,s)),e instanceof Set&&r instanceof Set&&r.forEach(e.add,e);for(const s in r){if(!r.hasOwnProperty(s))continue;const t=r[s],a=e[s];H(a)&&H(t)&&e.hasOwnProperty(s)&&!S(t)&&!J(t)?e[s]=W(a,t):e[s]=t}return e}const Ee=Symbol();function xe(e){return!H(e)||!e.hasOwnProperty(Ee)}const{assign:T}=Object;function ye(e){return!!(S(e)&&e.effect)}function ge(e,r,s,t){const{state:a,actions:n,getters:u}=r,m=s.state.value[e];let v;function i(){m||(s.state.value[e]=a?a():{});const c=D(s.state.value[e]);return T(c,n,Object.keys(u||{}).reduce((o,h)=>(o[h]=O(he(()=>{V(s);const x=s._s.get(e);return u[h].call(x,x)})),o),{}))}return v=K(e,i,r,s,t,!0),v.$reset=function(){const o=a?a():{};this.$patch(h=>{T(h,o)})},v}function K(e,r,s={},t,a,n){let u;const m=T({actions:{}},s),v={deep:!0};let i,c,o=O([]),h=O([]),x;const y=t.state.value[e];!n&&!y&&(t.state.value[e]={}),X({});let M;function $(f){let d;i=c=!1,typeof f=="function"?(f(t.state.value[e]),d={type:L.patchFunction,storeId:e,events:x}):(W(t.state.value[e],f),d={type:L.patchObject,payload:f,storeId:e,events:x});const p=M=Symbol();me().then(()=>{M===p&&(i=!0)}),c=!0,g(o,d,t.state.value[e])}const te=z;function se(){u.stop(),o=[],h=[],t._s.delete(e)}function ne(f,d){return function(){V(t);const p=Array.from(arguments),P=[],w=[];function re(_){P.push(_)}function ie(_){w.push(_)}g(h,{args:p,name:f,store:b,after:re,onError:ie});let I;try{I=d.apply(this&&this.$id===e?this:b,p)}catch(_){throw g(w,_),_}return I instanceof Promise?I.then(_=>(g(P,_),_)).catch(_=>(g(w,_),Promise.reject(_))):(g(P,I),I)}}const oe={_p:t,$id:e,$onAction:q.bind(null,h),$patch:$,$reset:te,$subscribe(f,d={}){const p=q(o,f,d.detached,()=>P()),P=u.run(()=>ce(()=>t.state.value[e],w=>{(d.flush==="sync"?c:i)&&f({storeId:e,type:L.direct,events:x},w)},T({},v,d)));return p},$dispose:se},b=A(oe);t._s.set(e,b);const R=t._e.run(()=>(u=G(),u.run(()=>r())));for(const f in R){const d=R[f];if(S(d)&&!ye(d)||J(d))n||(y&&xe(d)&&(S(d)?d.value=y[f]:W(d,y[f])),t.state.value[e][f]=d);else if(typeof d=="function"){const p=ne(f,d);R[f]=p,m.actions[f]=d}}return T(b,R),T(ue(b),R),Object.defineProperty(b,"$state",{get:()=>t.state.value[e],set:f=>{$(d=>{T(d,f)})}}),t._p.forEach(f=>{T(b,u.run(()=>f({store:b,app:t._a,pinia:t,options:m})))}),y&&n&&s.hydrate&&s.hydrate(b.$state,y),i=!0,c=!0,b}function k(e,r,s){let t,a;const n=typeof r=="function";typeof e=="string"?(t=e,a=n?s:r):(a=e,t=e.id);function u(m,v){const i=de();return m=m||i&&ae(Z),m&&V(m),m=Y,m._s.has(t)||(n?K(t,r,a,m):ge(t,a,m)),m._s.get(t)}return u.$id=t,u}const Re="modulepreload",Pe=function(e){return"/admin-next-template/"+e},F={},l=function(r,s,t){if(!s||s.length===0)return r();const a=document.getElementsByTagName("link");return Promise.all(s.map(n=>{if(n=Pe(n),n in F)return;F[n]=!0;const u=n.endsWith(".css"),m=u?'[rel="stylesheet"]':"";if(!!t)for(let c=a.length-1;c>=0;c--){const o=a[c];if(o.href===n&&(!u||o.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${m}`))return;const i=document.createElement("link");if(i.rel=u?"stylesheet":Re,u||(i.as="script",i.crossOrigin=""),i.href=n,document.head.appendChild(i),u)return new Promise((c,o)=>{i.addEventListener("load",c),i.addEventListener("error",()=>o(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>r())};var E=(e=>(e.INDEX="/",e.LOGIN="/login",e.ERROR="/error",e.DASHBOARD="/dashboard",e.REDIRECT="/redirect",e))(E||{});const we="var(--header-height)",Ie="var(--menu-width)",Le="var(--menu-collapse-width)",Ae="var(--menu-text)",De="var(--menu-active-text)",Oe="var(--sub-menu-active-text)",Se="var(--menu-bg)",Ve="var(--menu-hover)",ke="var(--sub-menu-bg)",Ce="var(--sub-menu-hover)",N={headerHeight:we,menuWidth:Ie,menuCollapseWidth:Le,menuText:Ae,menuActiveText:De,subMenuActiveText:Oe,menuBg:Se,menuHover:Ve,subMenuBg:ke,subMenuHover:Ce},Q={title:"后台管理系统",fixedHeader:!0,sideOpened:!0,sideOpenedWidth:N.menuWidth,sideClosedWidth:N.menuCollapseWidth,homeRoute:{name:"Analysis",path:"/dashboard/analysis"}},B=()=>l(()=>import("./DefaultLayout-3cc9b8c9.js"),["assets/DefaultLayout-3cc9b8c9.js","assets/runtime-dom.esm-bundler-a23c1beb.js","assets/runtime-core.esm-bundler-f902e13f.js","assets/vue-router-7d51514f.js","assets/iconify-d1f6aee2.js","assets/index-c3ae6b85.js","assets/_baseClone-d8c30708.js","assets/plugin-vue_export-helper-49eba6ff.js","assets/icon-89bd27e0.js","assets/index-49ba3c96.js","assets/index-042a5ba8.js","assets/index-a161aff0.js","assets/index-bf50502c.js","assets/index-f2496253.js","assets/index-b20df692.js","assets/typescript-defaf979.js","assets/index-f4bb9377.js","assets/index-0cc5ae9b.js","assets/index-f9681fe7.js","assets/ajax-676e8075.js","assets/DefaultLayout-3b8b89fa.css"]),je=()=>l(()=>import("./ParentLayout-51b2b402.js"),["assets/ParentLayout-51b2b402.js","assets/vue-router-7d51514f.js","assets/runtime-core.esm-bundler-f902e13f.js"]),U=[{path:E.INDEX,redirect:Q.homeRoute.path},{path:E.DASHBOARD,redirect:`${E.DASHBOARD}/analysis`,component:B,meta:{title:"Dashboard",icon:"ant-design:dashboard-outlined"},children:[{path:"analysis",name:"Analysis",component:()=>l(()=>import("./index-e614b035.js"),["assets/index-e614b035.js","assets/iconify-d1f6aee2.js","assets/runtime-core.esm-bundler-f902e13f.js","assets/index-f2496253.js","assets/plugin-vue_export-helper-49eba6ff.js","assets/index.common-62072a48.js","assets/runtime-dom.esm-bundler-a23c1beb.js","assets/dayjs.min-4c9a69f7.js","assets/index-f50b8930.css","assets/index-b07e0771.js","assets/typescript-defaf979.js","assets/index-af5dedc2.js","assets/index-23058a32.js","assets/index-49ba3c96.js","assets/index-a161aff0.js","assets/index-62cf9bec.js","assets/vue-router-7d51514f.js","assets/ajax-676e8075.js","assets/index-f729710e.css"]),meta:{title:"分析页"}},{path:"workbench",name:"Workbench",component:()=>l(()=>import("./index-d050b7ea.js"),["assets/index-d050b7ea.js","assets/runtime-core.esm-bundler-f902e13f.js","assets/index-e3b0c442.css"]),meta:{title:"工作台"}}]},{path:E.LOGIN,name:"Login",component:()=>l(()=>import("./index-74a99c67.js"),["assets/index-74a99c67.js","assets/iconify-d1f6aee2.js","assets/runtime-core.esm-bundler-f902e13f.js","assets/vue-router-7d51514f.js","assets/ajax-676e8075.js","assets/index-bc3a38b6.js","assets/plugin-vue_export-helper-49eba6ff.js","assets/index-a161aff0.js","assets/index-b20df692.js","assets/runtime-dom.esm-bundler-a23c1beb.js","assets/index-f2496253.js","assets/index-49ba3c96.js","assets/icon-89bd27e0.js","assets/typescript-defaf979.js","assets/index-042a5ba8.js","assets/_baseClone-d8c30708.js","assets/index-be01ddb9.css"]),meta:{title:"登录",hidden:!0}},{path:E.ERROR,name:"Error",component:()=>l(()=>import("./index-52d6f0c3.js"),["assets/index-52d6f0c3.js","assets/vue-router-7d51514f.js","assets/runtime-core.esm-bundler-f902e13f.js","assets/index-1de3fb18.js","assets/index-49ba3c96.js","assets/plugin-vue_export-helper-49eba6ff.js","assets/index-042a5ba8.js","assets/index-a161aff0.js","assets/icon-89bd27e0.js"]),meta:{title:"错误",hidden:!0}},{path:E.REDIRECT,name:"Redirect",component:B,meta:{hidden:!0},children:[{path:"/redirect/:path(.*)",component:()=>l(()=>import("./index-5ab94e10.js"),["assets/index-5ab94e10.js","assets/vue-router-7d51514f.js","assets/runtime-core.esm-bundler-f902e13f.js"])}]}],Ne=ve({history:_e(),routes:U}),He=Object.assign({"../views/dashboard/analysis/index.tsx":()=>l(()=>import("./index-e614b035.js"),["assets/index-e614b035.js","assets/iconify-d1f6aee2.js","assets/runtime-core.esm-bundler-f902e13f.js","assets/index-f2496253.js","assets/plugin-vue_export-helper-49eba6ff.js","assets/index.common-62072a48.js","assets/runtime-dom.esm-bundler-a23c1beb.js","assets/dayjs.min-4c9a69f7.js","assets/index-f50b8930.css","assets/index-b07e0771.js","assets/typescript-defaf979.js","assets/index-af5dedc2.js","assets/index-23058a32.js","assets/index-49ba3c96.js","assets/index-a161aff0.js","assets/index-62cf9bec.js","assets/vue-router-7d51514f.js","assets/ajax-676e8075.js","assets/index-f729710e.css"]),"../views/dashboard/workbench/index.tsx":()=>l(()=>import("./index-d050b7ea.js"),["assets/index-d050b7ea.js","assets/runtime-core.esm-bundler-f902e13f.js","assets/index-e3b0c442.css"]),"../views/demo/chart/index.tsx":()=>l(()=>import("./index-e8bb437a.js"),["assets/index-e8bb437a.js","assets/runtime-core.esm-bundler-f902e13f.js","assets/index-b07e0771.js","assets/plugin-vue_export-helper-49eba6ff.js","assets/typescript-defaf979.js","assets/index-d97cf7fd.css"]),"../views/demo/copy-text/index.tsx":()=>l(()=>import("./index-0d0bec35.js"),["assets/index-0d0bec35.js","assets/ajax-676e8075.js","assets/util-5a68357a.js","assets/index-f2496253.js","assets/plugin-vue_export-helper-49eba6ff.js","assets/runtime-core.esm-bundler-f902e13f.js","assets/index-f9681fe7.js","assets/runtime-dom.esm-bundler-a23c1beb.js","assets/index-a161aff0.js","assets/index-49ba3c96.js","assets/typescript-defaf979.js","assets/icon-89bd27e0.js","assets/index-f4bb9377.js","assets/index-b20df692.js","assets/index-042a5ba8.js"]),"../views/demo/editor/index.tsx":()=>l(()=>import("./index-b208a5d9.js"),["assets/index-b208a5d9.js","assets/index.common-62072a48.js","assets/runtime-core.esm-bundler-f902e13f.js","assets/runtime-dom.esm-bundler-a23c1beb.js","assets/dayjs.min-4c9a69f7.js","assets/index-f50b8930.css","assets/index-0cc5ae9b.js","assets/plugin-vue_export-helper-49eba6ff.js","assets/index-a161aff0.js","assets/index-042a5ba8.js","assets/index-49ba3c96.js","assets/icon-89bd27e0.js","assets/index-f9681fe7.js","assets/index-f2496253.js","assets/typescript-defaf979.js","assets/index-f4bb9377.js","assets/vue-router-7d51514f.js","assets/ajax-676e8075.js","assets/index-8e2f3116.css"]),"../views/demo/form/index.tsx":()=>l(()=>import("./index-e37e4cea.js"),["assets/index-e37e4cea.js","assets/index-bc3a38b6.js","assets/plugin-vue_export-helper-49eba6ff.js","assets/runtime-core.esm-bundler-f902e13f.js","assets/index-a161aff0.js","assets/index-b20df692.js","assets/runtime-dom.esm-bundler-a23c1beb.js","assets/index-f2496253.js","assets/index-49ba3c96.js","assets/icon-89bd27e0.js","assets/typescript-defaf979.js","assets/index-042a5ba8.js","assets/_baseClone-d8c30708.js","assets/index-edbadba3.js","assets/_flatRest-11081bda.js","assets/dayjs.min-4c9a69f7.js","assets/index-bf50502c.js","assets/index-f4bb9377.js","assets/index-23058a32.js","assets/index-0cc5ae9b.js"]),"../views/demo/qrcode/index.tsx":()=>l(()=>import("./index-3f900571.js"),["assets/index-3f900571.js","assets/index.common-62072a48.js","assets/runtime-core.esm-bundler-f902e13f.js","assets/runtime-dom.esm-bundler-a23c1beb.js","assets/dayjs.min-4c9a69f7.js","assets/index-f50b8930.css","assets/index-b07e0771.js","assets/plugin-vue_export-helper-49eba6ff.js","assets/typescript-defaf979.js","assets/index-af5dedc2.js","assets/vue-router-7d51514f.js","assets/index-f2496253.js","assets/ajax-676e8075.js"]),"../views/demo/table/index.tsx":()=>l(()=>import("./index-3d812bfb.js"),["assets/index-3d812bfb.js","assets/index.common-62072a48.js","assets/runtime-core.esm-bundler-f902e13f.js","assets/runtime-dom.esm-bundler-a23c1beb.js","assets/dayjs.min-4c9a69f7.js","assets/index-f50b8930.css","assets/ajax-676e8075.js","assets/util-5a68357a.js","assets/index-f2496253.js","assets/plugin-vue_export-helper-49eba6ff.js","assets/index-f9681fe7.js","assets/index-a161aff0.js","assets/index-49ba3c96.js","assets/typescript-defaf979.js","assets/icon-89bd27e0.js","assets/index-f4bb9377.js","assets/table-f5bf8c20.js","assets/_baseClone-d8c30708.js","assets/_flatRest-11081bda.js","assets/index-042a5ba8.js","assets/vue-router-7d51514f.js"]),"../views/nested/menu1/menu1-1/index.tsx":()=>l(()=>import("./index-1b4739d1.js"),["assets/index-1b4739d1.js","assets/index-561e7d44.js","assets/runtime-dom.esm-bundler-a23c1beb.js","assets/runtime-core.esm-bundler-f902e13f.js","assets/index-49ba3c96.js","assets/plugin-vue_export-helper-49eba6ff.js","assets/icon-89bd27e0.js"]),"../views/nested/menu1/menu1-2/index.tsx":()=>l(()=>import("./index-f938dfed.js"),["assets/index-f938dfed.js","assets/index-561e7d44.js","assets/runtime-dom.esm-bundler-a23c1beb.js","assets/runtime-core.esm-bundler-f902e13f.js","assets/index-49ba3c96.js","assets/plugin-vue_export-helper-49eba6ff.js","assets/icon-89bd27e0.js"]),"../views/nested/menu1/menu1-3/index.tsx":()=>l(()=>import("./index-894ef1d9.js"),["assets/index-894ef1d9.js","assets/index-561e7d44.js","assets/runtime-dom.esm-bundler-a23c1beb.js","assets/runtime-core.esm-bundler-f902e13f.js","assets/index-49ba3c96.js","assets/plugin-vue_export-helper-49eba6ff.js","assets/icon-89bd27e0.js"]),"../views/nested/menu2/index.tsx":()=>l(()=>import("./index-a3a7d151.js"),["assets/index-a3a7d151.js","assets/index-561e7d44.js","assets/runtime-dom.esm-bundler-a23c1beb.js","assets/runtime-core.esm-bundler-f902e13f.js","assets/index-49ba3c96.js","assets/plugin-vue_export-helper-49eba6ff.js","assets/icon-89bd27e0.js"]),"../views/sys/error/index.tsx":()=>l(()=>import("./index-52d6f0c3.js"),["assets/index-52d6f0c3.js","assets/vue-router-7d51514f.js","assets/runtime-core.esm-bundler-f902e13f.js","assets/index-1de3fb18.js","assets/index-49ba3c96.js","assets/plugin-vue_export-helper-49eba6ff.js","assets/index-042a5ba8.js","assets/index-a161aff0.js","assets/icon-89bd27e0.js"]),"../views/sys/login/index.tsx":()=>l(()=>import("./index-74a99c67.js"),["assets/index-74a99c67.js","assets/iconify-d1f6aee2.js","assets/runtime-core.esm-bundler-f902e13f.js","assets/vue-router-7d51514f.js","assets/ajax-676e8075.js","assets/index-bc3a38b6.js","assets/plugin-vue_export-helper-49eba6ff.js","assets/index-a161aff0.js","assets/index-b20df692.js","assets/runtime-dom.esm-bundler-a23c1beb.js","assets/index-f2496253.js","assets/index-49ba3c96.js","assets/icon-89bd27e0.js","assets/typescript-defaf979.js","assets/index-042a5ba8.js","assets/_baseClone-d8c30708.js","assets/index-be01ddb9.css"]),"../views/sys/redirect/index.tsx":()=>l(()=>import("./index-5ab94e10.js"),["assets/index-5ab94e10.js","assets/vue-router-7d51514f.js","assets/runtime-core.esm-bundler-f902e13f.js"])}),We=e=>He[`../views/${e}/index.tsx`];async function ee(e){const r=[];for(const s of e){const t={...s};if(s.component==="DefaultLayout")t.component=B;else if(s.component==="ParentLayout")t.component=je;else{const a=We(s.component),n=await a();t.name=n.default.name,t.component=a}t.children&&(t.children=await ee(t.children)),r.push(t)}return r}const Ge=k("permission",()=>{const e=A({routes:[],matched:[]});async function r(s){const t=await ee(s);return t.push({path:"/:pathMatch(.*)*",redirect:{path:E.ERROR,query:{status:404}}}),e.routes=U.concat(t),t}return{...D(e),generate:r}}),Xe=k("setting",()=>{const e=A({...Q});function r({key:s,value:t}){e[s]=t}return{...D(e),change:r}}),Be=k("tabs",()=>{const e=A({cachedTabs:[],visitedTabs:[]});function r(i){const c=e.visitedTabs.find(o=>o.path===i.path);if(c){if(c.fullPath===i.fullPath)return;const o=e.visitedTabs.findIndex(h=>h.path===i.path);e.visitedTabs[o]={...i}}else{const o={...i};o.meta.title||(o.meta.title="undefined"),e.visitedTabs.push(o),v()}}function s(i){return new Promise(c=>{for(const[o,h]of e.visitedTabs.entries())if(h.path===i.path){e.visitedTabs.splice(o,1);break}v(),c({cachedTabs:[...e.cachedTabs],visitedTabs:[...e.visitedTabs]})})}function t(i){return new Promise(c=>{const o=e.visitedTabs.findIndex(h=>h.path===i.path);o>0&&(e.visitedTabs=e.visitedTabs.slice(o)),v(),c({cachedTabs:[...e.cachedTabs],visitedTabs:[...e.visitedTabs]})})}function a(i){return new Promise(c=>{const o=e.visitedTabs.findIndex(h=>h.path===i.path);o>=0&&o<e.visitedTabs.length-1&&(e.visitedTabs=e.visitedTabs.slice(0,o+1)),v(),c({cachedTabs:[...e.cachedTabs],visitedTabs:[...e.visitedTabs]})})}function n(i){return new Promise(c=>{e.visitedTabs=e.visitedTabs.filter(o=>o.path===i.path),v(),c({cachedTabs:[...e.cachedTabs],visitedTabs:[...e.visitedTabs]})})}function u(i){return new Promise(c=>{const o=e.cachedTabs.indexOf(i.name);o>-1&&e.cachedTabs.splice(o,1),c(!0)})}function m(){return new Promise(i=>{e.visitedTabs=[],v(),i({cachedTabs:[...e.cachedTabs],visitedTabs:[...e.visitedTabs]})})}function v(){const i=new Set;for(const c of e.visitedTabs)if(c.meta.noCache!==!0){const o=c.name;o&&i.add(o)}e.cachedTabs=Array.from(i)}return{...D(e),addTab:r,delTab:s,delLeftTabs:t,delRightTabs:a,delOthersTabs:n,delCachedTab:u,delAllTabs:m}}),j={login(e){return C.post("/user/login",e)},logout(){return C.post("/user/logout")},getInfo(){return C.get("/user/info")}},Je=k("user",()=>{const e=A({token:be("token",""),name:"",menus:[]});async function r(n){const u=await j.login(n);e.token=u.token}async function s(){await j.logout(),a()}async function t(){const n=await j.getInfo();return e.name=n.name,e.menus=n.menus,n.menus}function a(){const n=Be();e.token="",e.name="",e.menus=[],n.delAllTabs()}return{...D(e),login:r,logout:s,getInfo:t,clear:a}}),Ye=Te();export{E as C,Ge as a,Xe as b,Be as c,Ne as r,Ye as s,Je as u,N as v};
