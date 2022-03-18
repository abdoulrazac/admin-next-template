import{i as j,S as o,j as q,u as G,R as I,k as R}from"./index.e199ac6e.js";import{u as k}from"./useSettingStore.b746a8bd.js";import{d as c,c as u,b as e,Q as X,au as Y,$ as Q,r as _,a as L,av as A,aw as p,ax as Z,ay as ee,aa as F,a5 as x,az as H,aA as te,ab as K,h as T,aB as B,aC as ae,w as ne,aD as le,aE as se,ai as re,S as oe,o as ue,aF as ie,aG as ce,aH as de,aI as P,n as he,aJ as be,aK as w,aL as me,aM as fe}from"./vendor.7360edc3.js";var pe=c({name:"Content",setup(){const t=j();return{cachedTabs:u(()=>t.cachedTabs)}},render(){return e(Q,null,{default:({Component:t,route:a})=>e(X,{name:"fade-slide",mode:"out-in",appear:!0},{default:()=>[e(Y,{max:20,include:this.cachedTabs},[e(t,{key:a.fullPath},null)])]})})}});const ve="logo__b4V60",ye="logoIcon__1fNeN";var W={logo:ve,logoIcon:ye},ge=c({name:"Logo",setup(){const t=_({}),a=k(),n=u(()=>a.$state);return L(n,s=>{t.value.height=s.siderLogoHeight,t.value.borderRight=s.siderTheme==="light"?"1px solid #f0f0f0":"unset"},{deep:!0,immediate:!0}),{style:t}},render(){return e("div",{class:W.logo,style:this.style},[e(o,{class:W.logoIcon,name:"logo"},null)])}}),D=c({name:"MainMenu",props:{item:{type:Object,required:!0}},setup(t){return{show:u(()=>t.item.meta?!t.item.meta.hidden:!1)}},render(){return this.show?e(p,{icon:this.item.meta.icon?e(o,{name:this.item.meta.icon},null):null,key:this.item.path},{default:()=>[e(A,{to:this.item.path},{default:()=>[this.item.meta.title]})]}):null}}),N=c({name:"SubMenu",props:{item:{type:Object,required:!0}},setup(t){return{onlyOneChild:u(()=>t.item.children.length===1?t.item.meta?!t.item.meta.alwaysShow:!0:!1)}},render(){return this.onlyOneChild?e(D,{item:this.item.children[0]},null):e(ee,{key:this.item.path,icon:this.item.meta.icon?e(o,{name:this.item.meta.icon},null):null,title:this.item.meta.title},{default:()=>{var t;return[(t=this.item.children)==null?void 0:t.map(a=>a.children?e(Z("sub-menu"),{item:a},null):e(D,{item:a},null))]}})}});function Ce(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!x(t)}var Se=c({name:"Menu",components:{SubMenu:N},setup(){const t=_([]),a=_([]),n=_([]),s=F(),d=q(),l=k(),y=u(()=>te(d.routes)),i=u(()=>l.$state),g=u(()=>{const b={};return b.minHeight=`calc(100vh - ${i.value.siderLogoHeight})`,b});function m(b,M=""){for(const h of b)if(h.path=M+(h.path.startsWith("/")?h.path:`/${h.path}`),delete h.component,delete h.redirect,h.children){if(h.children.length===0)continue;m(h.children,h.path)}return b}function f(){const b=m(y.value);t.value=b}return L(()=>s.path,b=>{f(),a.value=[...d.matched],n.value=[b]},{immediate:!0}),{list:t,openKeys:a,selectedKeys:n,setting:i,style:g}},render(){let t;const a=n=>n.children?e(N,{item:n},null):e(D,{item:n},null);return e(H,{mode:"inline",theme:this.setting.siderTheme,openKeys:this.openKeys,"onUpdate:openKeys":n=>this.openKeys=n,selectedKeys:this.selectedKeys,"onUpdate:selectedKeys":n=>this.selectedKeys=n,style:this.style},Ce(t=this.list.map(a))?t:{default:()=>[t]})}});const Te="navbar__hJHzc",_e="left__jNRv4",ke="trigger__-bzRa",Oe="breadcrumb__fDC6f",Me="right__POa-W",Re="avatarWrapper__oh6CA",we="avatar__t145K";var v={navbar:Te,left:_e,trigger:ke,breadcrumb:Oe,right:Me,avatarWrapper:Re,avatar:we},De=c({name:"Avatar",setup(){const t=K(),a=G();function n(){ae.confirm({title:"\u63D0\u793A",icon:e(o,{class:"anticon",name:"navbar-exclamation"},null),content:"\u786E\u8BA4\u9000\u51FA\u767B\u5F55\uFF1F",async onOk(){await a.logout(),t.replace({path:"/login"})}})}return{handleLogout:n}},render(){return e(B,{placement:"bottomRight"},{default:()=>e("div",{class:v.avatarWrapper},[e(o,{class:v.avatar,name:"avatar"},null)]),overlay:()=>e(H,null,{default:()=>[e(p,{onClick:this.handleLogout},{default:()=>[e(o,{name:"navbar-logout",style:{marginRight:"5px"}},null),e("span",null,[T("\u9000\u51FA\u767B\u5F55")])]})]})})}}),Le=c({name:"Breadcrumb",setup(){const t=_([]),a=K();function n(d){var l;return((l=d.meta)==null?void 0:l.title)||"undefined"}function s(d){var y;const l=[];for(const i of d){if(i.path==="/")continue;const g={path:i.path.startsWith("/")?i.path:`/${i.path}`,breadcrumbName:((y=i.meta)==null?void 0:y.title)||"undefined",children:[]};i.children&&(g.children=i.children.map(m=>{var f;return{path:i.path+`/${m.path}`,breadcrumbName:((f=m.meta)==null?void 0:f.title)||"undefined"}})),l.push(g)}return l}return ne(()=>{const d=a.currentRoute.value;t.value=s(d.matched)}),{routes:t,getBreadcrumbName:n}},render(){return e(le,{class:v.breadcrumb,routes:this.routes,itemRender:({route:t,routes:a})=>a.indexOf(t)===a.length-1?e("span",null,[t.breadcrumbName]):e(A,{to:t.path},{default:()=>[t.breadcrumbName]})},null)}}),xe=c({name:"ScreenFull",setup(){const{isFullscreen:t,isSupported:a,toggle:n}=se();function s(){a?n():re.warn("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u5168\u5C4F")}return{isFullscreen:t,handleClick:s}},render(){return e("div",{title:"\u5168\u5C4F",style:{cursor:"pointer"},onClick:this.handleClick},[this.isFullscreen?e(o,{name:"navbar-fullscreen-exit"},null):e(o,{name:"navbar-fullscreen"},null)])}}),He=c({name:"SiderTheme",setup(){const t=k(),a=u(()=>t.siderTheme);function n(){t.change({key:"siderTheme",value:a.value==="dark"?"light":"dark"})}return{siderTheme:a,handleClick:n}},render(){return e("div",{title:"\u4E3B\u9898",style:{cursor:"pointer"},onClick:this.handleClick},[this.siderTheme==="dark"?e(o,{name:"navbar-theme-dark"},null):e(o,{name:"navbar-theme-light"},null)])}}),Ke=c({name:"Trigger",setup(){const t=k(),a=u(()=>!t.siderOpened);function n(){t.change({key:"siderOpened",value:a.value})}return{collapsed:a,handleClick:n}},render(){return e(o,{class:v.trigger,name:this.collapsed?"navbar-menu-unfold":"navbar-menu-fold",onClick:this.handleClick},null)}}),$e=c({name:"Header",render(){return e("div",{class:v.navbar},[e("div",{class:v.left},[e(Ke,null,null),e(Le,null,null)]),e("div",{class:v.right},[e(oe,null,{default:()=>[e(xe,null,null),e(He,null,null),e(De,null,null)]})])])}});const Ie="tabbar__3urcJ",Pe="tabContent__-d8Yv",We="tabCloseIcon__9H4YP",Ne="tabsMenu__4WXXF",je="tabsDropdownMenu__aNrgf";var O={tabbar:Ie,tabContent:Pe,tabCloseIcon:We,tabsMenu:Ne,tabsDropdownMenu:je};function Ae(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!x(t)}var Fe=c({name:"Tabs",setup(){const t=_(""),a=F(),n=K(),s=j(),d=k(),l=u(()=>s.visitedTabs),y=u(()=>l.value.findIndex(r=>r.fullPath===t.value)===0),i=u(()=>l.value.findIndex(r=>r.fullPath===t.value)===l.value.length-1),g=u(()=>l.value.length<=1);function m(r){return t.value===r.fullPath}function f(){const{name:r,path:C,fullPath:J}=a;return r&&[I.LOGIN,I.ERROR].indexOf(C)===-1&&(s.addTab(a),t.value=J),!1}function b(){s.delCachedTab(a).then(()=>{const{fullPath:r}=a;he(()=>{n.replace({path:"/redirect"+r})})})}function M(r){s.delTab(r).then(({visitedTabs:C})=>{m(r)&&$(C)})}function h(){s.delLeftTabs(a)}function E(){s.delRightTabs(a)}function U(){s.delOthersTabs(a)}function V(){s.delAllTabs().then(({visitedTabs:r})=>{$(r)})}function z(r){n.push(r)}function $(r){const C=r.slice(-1)[0];C?n.push(C.fullPath):a.name===d.homeRoute.name?n.replace({path:"/redirect"+a.fullPath}):n.replace("/")}return L(()=>a.path,()=>{f()}),ue(()=>{f()}),{activeKey:t,visitedTabs:l,closeLeftDisabled:y,closeRightDisabled:i,closeOtherDisabled:g,handleCloseTab:M,handleCloseLeftTabs:h,handleCloseRightTabs:E,handleCloseOtherTabs:U,handleCloseAllTabs:V,handleSelectTab:z,handleRefreshTab:b}},render(){let t;return e("div",{class:O.tabbar},[e(ie,{activeKey:this.activeKey,"onUpdate:activeKey":a=>this.activeKey=a,onChange:this.handleSelectTab},Ae(t=this.visitedTabs.map(a=>e(ce,{tab:()=>e("div",{class:O.tabContent},[e("input",{"data-key":a.fullPath,hidden:!0},null),e("span",null,[a.meta.title]),e(o,{name:"tabbar-close",class:O.tabCloseIcon,onClick:de(()=>this.handleCloseTab(a),["stop"])},null)]),key:a.fullPath},null)))?t:{default:()=>[t]}),e(B,{placement:"bottomRight",overlayStyle:{zIndex:100002}},{default:()=>e("div",{class:O.tabsMenu},[e(o,{name:"tabbar-down"},null)]),overlay:()=>e(H,{class:O.tabsDropdownMenu},{default:()=>[e(p,{onClick:this.handleRefreshTab},{default:()=>[e(o,{name:"tabbar-refresh"},null),T("\u5237\u65B0\u9875\u9762")]}),e(P,null,null),e(p,{onClick:this.handleCloseLeftTabs,disabled:this.closeLeftDisabled},{default:()=>[e(o,{name:"tabbar-close-left"},null),T("\u5173\u95ED\u5DE6\u4FA7")]}),e(p,{onClick:this.handleCloseRightTabs,disabled:this.closeRightDisabled},{default:()=>[e(o,{name:"tabbar-close-right"},null),T("\u5173\u95ED\u53F3\u4FA7")]}),e(P,null,null),e(p,{onClick:this.handleCloseOtherTabs,disabled:this.closeOtherDisabled},{default:()=>[e(o,{name:"tabbar-close"},null),T("\u5173\u95ED\u5176\u5B83")]}),e(p,{onClick:this.handleCloseAllTabs},{default:()=>[e(o,{name:"tabbar-close-all"},null),T("\u5173\u95ED\u6240\u6709")]})]})})])}});const Be="layout__USsbD",Ee="layoutSider__M0-OJ",Ue="layoutMain__lOiPe",Ve="layoutHeader__9--p7",ze="layoutContent__19vnr";var S={layout:Be,layoutSider:Ee,layoutMain:Ue,layoutHeader:Ve,layoutContent:ze};function Je(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!x(t)}var Ye=c({name:"DefaultLayout",setup(){const t=k(),a=u(()=>t.$state),n=u(()=>{const l={};return a.value.siderOpened?(l.marginLeft=a.value.siderOpenedWidth,l.width=`calc(100vw - ${a.value.siderOpenedWidth})`):(l.marginLeft=a.value.siderClosedWidth,l.width=`calc(100vw - ${a.value.siderClosedWidth})`),l}),s=u(()=>{const l={height:a.value.headerHeight};return a.value.fixedHeader&&(l.position="sticky",l.top="0px"),l}),d=u(()=>{const l={};return a.value.fixedHeader&&(l.position="sticky",l.top=a.value.headerHeight),l});return{setting:a,mainStyle:n,headerStyle:s,tabbarStyle:d}},render(){let t;const a=()=>e(me,{class:S.layoutHeader,style:this.headerStyle},{default:()=>[e($e,null,null)]}),n=()=>e(Fe,{style:this.tabbarStyle},null),s=()=>e(fe,{class:S.layoutContent},{default:()=>[e(pe,null,null)]});return e(w,{class:S.layout},{default:()=>[e(be,{class:S.layoutSider,collapsed:!this.setting.siderOpened,trigger:null,theme:this.setting.siderTheme,width:this.setting.siderOpenedWidth,collapsedWidth:this.setting.siderClosedWidth,collapsible:!0},{default:()=>[e(ge,null,null),e(R,null,{default:()=>[e(Se,null,null)]})]}),this.setting.fixedHeader?e(w,{class:S.layoutMain,style:this.mainStyle},{default:()=>[a(),n(),e(R,null,Je(t=s())?t:{default:()=>[t]})]}):e(R,null,{default:()=>[e(w,{class:S.layoutMain,style:this.mainStyle},{default:()=>[a(),n(),s()]})]})]})}});export{Ye as default};
