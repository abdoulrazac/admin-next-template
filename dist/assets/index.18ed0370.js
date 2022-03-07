import{u as F,S as o,a as q,b as X,R as I,c as R}from"./index.7064e514.js";import{u as k}from"./useSettingStore.0a0a6629.js";import{d as c,c as i,b as e,_ as Y,P as G,a3 as Q,r as _,a as L,a4 as v,a5 as P,a6 as Z,a7 as ee,a8 as B,a9 as te,aa as x,ab as H,ac as K,ad as E,C as T,ae,w as ne,af as le,ag as se,ah as re,S as oe,o as ie,ai as W,aj as ue,ak as N,n as ce,al as w,am as de,an as he,ao as be}from"./vendor.4068de6c.js";var me=c({name:"Content",setup(){const t=F();return{cachedTabs:i(()=>t.cachedTabs)}},render(){return e(Y,null,{default:({Component:t,route:a})=>e(G,{name:"fade-slide",mode:"out-in",appear:!0},{default:()=>[e(Q,{max:20,include:this.cachedTabs},[e(t,{key:a.fullPath},null)])]})})}});const fe="logo__b4V60",pe="logoIcon__1fNeN";var j={logo:fe,logoIcon:pe},ve=c({name:"Logo",setup(){const t=_({}),a=k(),n=i(()=>a.$state);return L(n,s=>{t.value.height=s.siderLogoHeight,t.value.borderRight=s.siderTheme==="light"?"1px solid #f0f0f0":"unset"},{deep:!0,immediate:!0}),{style:t}},render(){return e("div",{class:j.logo,style:this.style},[e(o,{class:j.logoIcon,name:"logo"},null)])}}),D=c({name:"MainMenu",props:{item:{type:Object,required:!0}},setup(t){return{show:i(()=>t.item.meta?!t.item.meta.hidden:!1)}},render(){return this.show?e(v,{icon:this.item.meta.icon?e(o,{name:this.item.meta.icon},null):null,key:this.item.path},{default:()=>[e(P,{to:this.item.path},{default:()=>[this.item.meta.title]})]}):null}}),A=c({name:"SubMenu",props:{item:{type:Object,required:!0}},setup(t){return{onlyOneChild:i(()=>t.item.children.length===1?t.item.meta?!t.item.meta.alwaysShow:!0:!1)}},render(){return this.onlyOneChild?e(D,{item:this.item.children[0]},null):e(Z,{key:this.item.path,icon:this.item.meta.icon?e(o,{name:this.item.meta.icon},null):null,title:this.item.meta.title},{default:()=>{var t;return[(t=this.item.children)==null?void 0:t.map(a=>a.children?e(ee("sub-menu"),{item:a},null):e(D,{item:a},null))]}})}});function ge(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!H(t)}var ye=c({name:"Menu",components:{SubMenu:A},setup(){const t=_([]),a=_([]),n=_([]),s=B(),h=q(),l=k(),y=i(()=>te(h.routes)),u=i(()=>l.$state),C=i(()=>{const b={};return b.minHeight=`calc(100vh - ${u.value.siderLogoHeight})`,b});function m(b,O=""){for(const d of b)if(d.path=O+(d.path.startsWith("/")?d.path:`/${d.path}`),delete d.component,delete d.redirect,d.children){if(d.children.length===0)continue;m(d.children,d.path)}return b}function f(){const b=m(y.value);t.value=b}return L(()=>s.path,b=>{f(),a.value=[...s.matched.map(O=>O.path)],n.value=[b]},{immediate:!0}),{list:t,openKeys:a,selectedKeys:n,setting:u,style:C}},render(){let t;const a=n=>n.children?e(A,{item:n},null):e(D,{item:n},null);return e(x,{mode:"inline",theme:this.setting.siderTheme,openKeys:this.openKeys,"onUpdate:openKeys":n=>this.openKeys=n,selectedKeys:this.selectedKeys,"onUpdate:selectedKeys":n=>this.selectedKeys=n,style:this.style},ge(t=this.list.map(a))?t:{default:()=>[t]})}});const Ce="navbar__hJHzc",Se="left__jNRv4",Te="trigger__-bzRa",_e="breadcrumb__fDC6f",ke="right__POa-W",Oe="avatarWrapper__oh6CA",Me="avatar__t145K";var g={navbar:Ce,left:Se,trigger:Te,breadcrumb:_e,right:ke,avatarWrapper:Oe,avatar:Me},Re=c({name:"Avatar",setup(){const t=K(),a=X();function n(){ae.confirm({title:"\u63D0\u793A",icon:e(o,{class:"anticon",name:"navbar-exclamation"},null),content:"\u786E\u8BA4\u9000\u51FA\u767B\u5F55\uFF1F",async onOk(){await a.logout(),t.replace({path:"/login"})}})}return{handleLogout:n}},render(){return e(E,null,{default:()=>e("div",{class:g.avatarWrapper},[e(o,{class:g.avatar,name:"avatar"},null)]),overlay:()=>e(x,null,{default:()=>[e(v,{onClick:this.handleLogout},{default:()=>[e(o,{name:"navbar-logout",style:{marginRight:"5px"}},null),e("span",null,[T("\u9000\u51FA\u767B\u5F55")])]})]})})}}),we=c({name:"Breadcrumb",setup(){const t=_([]),a=K();function n(h){var l;return((l=h.meta)==null?void 0:l.title)||"undefined"}function s(h){var y;const l=[];for(const u of h){if(u.path==="/")continue;const C={path:u.path.startsWith("/")?u.path:`/${u.path}`,breadcrumbName:((y=u.meta)==null?void 0:y.title)||"undefined",children:[]};u.children&&(C.children=u.children.map(m=>{var f;return{path:u.path+`/${m.path}`,breadcrumbName:((f=m.meta)==null?void 0:f.title)||"undefined"}})),l.push(C)}return l}return ne(()=>{const h=a.currentRoute.value;t.value=s(h.matched)}),{routes:t,getBreadcrumbName:n}},render(){return e(le,{class:g.breadcrumb,routes:this.routes,itemRender:({route:t,routes:a})=>a.indexOf(t)===a.length-1?e("span",null,[t.breadcrumbName]):e(P,{to:t.path},{default:()=>[t.breadcrumbName]})},null)}}),De=c({name:"ScreenFull",setup(){const{isFullscreen:t,isSupported:a,toggle:n}=se();function s(){a?n():re.warn("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u5168\u5C4F")}return{isFullscreen:t,handleClick:s}},render(){return e("div",{title:"\u5168\u5C4F",style:{cursor:"pointer"},onClick:this.handleClick},[this.isFullscreen?e(o,{name:"navbar-fullscreen-exit"},null):e(o,{name:"navbar-fullscreen"},null)])}}),Le=c({name:"SiderTheme",setup(){const t=k(),a=i(()=>t.siderTheme);function n(){t.change({key:"siderTheme",value:a.value==="dark"?"light":"dark"})}return{siderTheme:a,handleClick:n}},render(){return e("div",{title:"\u4E3B\u9898",style:{cursor:"pointer"},onClick:this.handleClick},[this.siderTheme==="dark"?e(o,{name:"navbar-theme-dark"},null):e(o,{name:"navbar-theme-light"},null)])}}),xe=c({name:"Trigger",setup(){const t=k(),a=i(()=>!t.siderOpened);function n(){t.change({key:"siderOpened",value:a.value})}return{collapsed:a,handleClick:n}},render(){return e(o,{class:g.trigger,name:this.collapsed?"navbar-menu-unfold":"navbar-menu-fold",onClick:this.handleClick},null)}}),He=c({name:"Header",render(){return e("div",{class:g.navbar},[e("div",{class:g.left},[e(xe,null,null),e(we,null,null)]),e("div",{class:g.right},[e(oe,null,{default:()=>[e(De,null,null),e(Le,null,null),e(Re,null,null)]})])])}});const Ke="tabbar__3urcJ",$e="tabContent__-d8Yv",Ie="tabCloseIcon__9H4YP",We="tabsMenu__4WXXF",Ne="tabsDropdownMenu__aNrgf";var M={tabbar:Ke,tabContent:$e,tabCloseIcon:Ie,tabsMenu:We,tabsDropdownMenu:Ne};function je(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!H(t)}var Ae=c({name:"Tabs",setup(){const t=_(""),a=B(),n=K(),s=F(),h=k(),l=i(()=>s.visitedTabs),y=i(()=>l.value.findIndex(r=>r.path===t.value)===0),u=i(()=>l.value.findIndex(r=>r.path===t.value)===l.value.length-1),C=i(()=>l.value.length<=1);function m(r){return t.value===r.path}function f(){const{name:r,path:p}=a;return r&&[I.LOGIN,I.ERROR].indexOf(p)===-1&&(s.addTab(a),t.value=p),!1}function b(){s.delCachedTab(a).then(()=>{const{fullPath:r}=a;ce(()=>{n.replace({path:"/redirect"+r})})})}function O(r){s.delTab(r).then(({visitedTabs:p})=>{m(r)&&$(p)})}function d(){s.delLeftTabs(a)}function U(){s.delRightTabs(a)}function V(){s.delOthersTabs(a)}function z(){s.delAllTabs().then(({visitedTabs:r})=>{$(r)})}function J(r){n.push(r)}function $(r){const p=r.slice(-1)[0];p?n.push(p.fullPath):a.name===h.homeRoute.name?n.replace({path:"/redirect"+a.fullPath}):n.replace("/")}return L(()=>a.path,()=>{f()}),ie(()=>{f()}),{activeKey:t,visitedTabs:l,closeLeftDisabled:y,closeRightDisabled:u,closeOtherDisabled:C,handleCloseTab:O,handleCloseLeftTabs:d,handleCloseRightTabs:U,handleCloseOtherTabs:V,handleCloseAllTabs:z,handleSelectTab:J,handleRefreshTab:b}},render(){let t;return e("div",{class:M.tabbar},[e(W,{activeKey:this.activeKey,"onUpdate:activeKey":a=>this.activeKey=a,onChange:this.handleSelectTab},je(t=this.visitedTabs.map(a=>e(W.TabPane,{tab:()=>e("div",{class:M.tabContent},[e("span",null,[a.meta.title]),e(o,{name:"tabbar-close",class:M.tabCloseIcon,onClick:ue(()=>this.handleCloseTab(a),["stop"])},null)]),key:a.path},null)))?t:{default:()=>[t]}),e(E,{overlayStyle:{zIndex:100002}},{default:()=>e("div",{class:M.tabsMenu},[e(o,{name:"tabbar-down"},null)]),overlay:()=>e(x,{class:M.tabsDropdownMenu},{default:()=>[e(v,{onClick:this.handleRefreshTab},{default:()=>[e(o,{name:"tabbar-refresh"},null),T("\u5237\u65B0\u9875\u9762")]}),e(N,null,null),e(v,{onClick:this.handleCloseLeftTabs,disabled:this.closeLeftDisabled},{default:()=>[e(o,{name:"tabbar-close-left"},null),T("\u5173\u95ED\u5DE6\u4FA7")]}),e(v,{onClick:this.handleCloseRightTabs,disabled:this.closeRightDisabled},{default:()=>[e(o,{name:"tabbar-close-right"},null),T("\u5173\u95ED\u53F3\u4FA7")]}),e(N,null,null),e(v,{onClick:this.handleCloseOtherTabs,disabled:this.closeOtherDisabled},{default:()=>[e(o,{name:"tabbar-close"},null),T("\u5173\u95ED\u5176\u5B83")]}),e(v,{onClick:this.handleCloseAllTabs},{default:()=>[e(o,{name:"tabbar-close-all"},null),T("\u5173\u95ED\u6240\u6709")]})]})})])}});const Fe="layout__USsbD",Pe="layoutSider__M0-OJ",Be="layoutMain__lOiPe",Ee="layoutHeader__9--p7",Ue="layoutContent__19vnr";var S={layout:Fe,layoutSider:Pe,layoutMain:Be,layoutHeader:Ee,layoutContent:Ue};function Ve(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!H(t)}var Xe=c({name:"DefaultLayout",setup(){const t=k(),a=i(()=>t.$state),n=i(()=>{const l={};return a.value.siderOpened?(l.marginLeft=a.value.siderOpenedWidth,l.width=`calc(100vw - ${a.value.siderOpenedWidth})`):(l.marginLeft=a.value.siderClosedWidth,l.width=`calc(100vw - ${a.value.siderClosedWidth})`),l}),s=i(()=>{const l={height:a.value.headerHeight};return a.value.fixedHeader&&(l.position="sticky",l.top="0px"),l}),h=i(()=>{const l={};return a.value.fixedHeader&&(l.position="sticky",l.top=a.value.headerHeight),l});return{setting:a,mainStyle:n,headerStyle:s,tabbarStyle:h}},render(){let t;const a=()=>e(he,{class:S.layoutHeader,style:this.headerStyle},{default:()=>[e(He,null,null)]}),n=()=>e(Ae,{style:this.tabbarStyle},null),s=()=>e(be,{class:S.layoutContent},{default:()=>[e(me,null,null)]});return e(w,{class:S.layout},{default:()=>[e(de,{class:S.layoutSider,collapsed:!this.setting.siderOpened,trigger:null,theme:this.setting.siderTheme,width:this.setting.siderOpenedWidth,collapsedWidth:this.setting.siderClosedWidth,collapsible:!0},{default:()=>[e(ve,null,null),e(R,null,{default:()=>[e(ye,null,null)]})]}),this.setting.fixedHeader?e(w,{class:S.layoutMain,style:this.mainStyle},{default:()=>[a(),n(),e(R,null,Ve(t=s())?t:{default:()=>[t]})]}):e(R,null,{default:()=>[e(w,{class:S.layoutMain,style:this.mainStyle},{default:()=>[a(),n(),s()]})]})]})}});export{Xe as default};