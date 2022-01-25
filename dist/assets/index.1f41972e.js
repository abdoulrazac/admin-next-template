import{u as H,S as o,a as q,b as Z,R as I,c as w}from"./index.61a9acb4.js";import{u as M}from"./useSettingStore.902c0b83.js";import{d as h,c as i,b as e,a9 as Q,a2 as X,af as G,r as T,a as L,ag as p,ah as F,ai as J,aj as Y,ak as W,al as ee,am as R,k as x,an as D,ao as A,P as S,ap as te,w as ae,aq as ne,ar as le,as as se,Q as re,o as oe,at as N,au as ie,av as E,n as ue,aw as j,ax as ce,ay as de,az as he}from"./vendor.2cde020b.js";var be=h({name:"Content",setup(){const t=H();return{cachedTabs:i(()=>t.cachedTabs)}},render(){return e(Q,null,{default:({Component:t,route:a})=>e(X,{name:"fade-slide",mode:"out-in",appear:!0},{default:()=>[e(G,{max:20,include:this.cachedTabs},[e(t,{key:a.fullPath},null)])]})})}});const me="logo__1slq7",fe="logoIcon__3zi2F";var B={logo:me,logoIcon:fe},pe=h({name:"Logo",setup(){const t=T({}),a=M(),n=i(()=>a.$state);return L(n,l=>{t.value.height=l.siderLogoHeight,t.value.borderRight=l.siderTheme==="light"?"1px solid #f0f0f0":"unset"},{deep:!0,immediate:!0}),{style:t}},render(){return e("div",{class:B.logo,style:this.style},[e(o,{class:B.logoIcon,name:"logo"},null)])}}),$=h({name:"MainMenu",props:{item:{type:Object,required:!0}},setup(t){return{show:i(()=>t.item.meta?!t.item.meta.hidden:!1)}},render(){return this.show?e(p,{icon:this.item.meta.icon?e(o,{name:this.item.meta.icon},null):null,key:this.item.path},{default:()=>[e(F,{to:this.item.path},{default:()=>[this.item.meta.title]})]}):null}}),P=h({name:"SubMenu",props:{item:{type:Object,required:!0}},setup(t){return{onlyOneChild:i(()=>t.item.children.length===1?t.item.meta?!t.item.meta.alwaysShow:!0:!1)}},render(){return this.onlyOneChild?e($,{item:this.item.children[0]},null):e(J,{key:this.item.path,icon:this.item.meta.icon?e(o,{name:this.item.meta.icon},null):null,title:this.item.meta.title},{default:()=>{var t;return[(t=this.item.children)==null?void 0:t.map(a=>a.children?e(Y("sub-menu"),{item:a},null):e($,{item:a},null))]}})}});function ve(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!x(t)}var ye=h({name:"Menu",components:{SubMenu:P},setup(){const t=T([]),a=T([]),n=T([]),l=W(),u=q(),s=M(),y=i(()=>ee(u.routes)),d=i(()=>s.$state),g=i(()=>{const b={};return b.minHeight=`calc(100vh - ${d.value.siderLogoHeight})`,b});function m(b,k=""){for(const c of b)if(c.name!=="Dashboard"?c.path=k+(c.path.startsWith("/")?c.path:`/${c.path}`):c.path=`/${c.path}`,delete c.component,delete c.redirect,c.children){if(c.children.length===0)continue;m(c.children,c.path)}return b}function C(){const b=m(y.value);t.value=b}return L(()=>l.path,b=>{C(),a.value=[...l.matched.map(k=>k.path)],n.value=[b]},{immediate:!0}),{list:t,openKeys:a,selectedKeys:n,setting:d,style:g}},render(){let t;const a=n=>n.children?e(P,{item:n},null):e($,{item:n},null);return e(R,{mode:"inline",theme:this.setting.siderTheme,openKeys:this.openKeys,"onUpdate:openKeys":n=>this.openKeys=n,selectedKeys:this.selectedKeys,"onUpdate:selectedKeys":n=>this.selectedKeys=n,style:this.style},ve(t=this.list.map(a))?t:{default:()=>[t]})}});const ge="navbar__2tJtB",Ce="left__1lzk_",Te="trigger__2kX0y",Se="breadcrumb__z1ZAM",_e="right__s5uL9",ke="avatarWrapper__3YP6S",Me="avatar__1WZ8Z";var v={navbar:ge,left:Ce,trigger:Te,breadcrumb:Se,right:_e,avatarWrapper:ke,avatar:Me},Oe=h({name:"Avatar",setup(){const t=D(),a=Z();function n(){te.confirm({title:"\u63D0\u793A",icon:e(o,{class:"anticon",name:"navbar-exclamation"},null),content:"\u786E\u8BA4\u9000\u51FA\u767B\u5F55\uFF1F",async onOk(){await a.logout(),t.replace({path:"/login"})}})}return{handleLogout:n}},render(){return e(A,null,{default:()=>e("div",{class:v.avatarWrapper},[e(o,{class:v.avatar,name:"avatar"},null)]),overlay:()=>e(R,null,{default:()=>[e(p,{onClick:this.handleLogout},{default:()=>[e(o,{name:"navbar-logout",style:{marginRight:"5px"}},null),e("span",null,[S("\u9000\u51FA\u767B\u5F55")])]})]})})}}),we=h({name:"Breadcrumb",setup(){const t=T([]),a=D();function n(u){var s;return((s=u.meta)==null?void 0:s.title)||"undefined"}function l(u){var y;const s=[];for(const d of u){if(d.path==="/")continue;const g={path:d.path.startsWith("/")?d.path:`/${d.path}`,breadcrumbName:((y=d.meta)==null?void 0:y.title)||"undefined",children:[]};d.children&&(g.children=d.children.map(m=>{var C;return{path:d.path+`/${m.path}`,breadcrumbName:((C=m.meta)==null?void 0:C.title)||"undefined"}})),s.push(g)}return s}return ae(()=>{const u=a.currentRoute.value;t.value=l(u.matched)}),{routes:t,getBreadcrumbName:n}},render(){return e(ne,{class:v.breadcrumb,routes:this.routes,itemRender:({route:t,routes:a})=>a.indexOf(t)===a.length-1?e("span",null,[t.breadcrumbName]):e(F,{to:t.path},{default:()=>[t.breadcrumbName]})},null)}}),Le=h({name:"ScreenFull",setup(){const{isFullscreen:t,isSupported:a,toggle:n}=le();function l(){a?n():se.warn("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u5168\u5C4F")}return{isFullscreen:t,handleClick:l}},render(){return e("div",{title:"\u5168\u5C4F",style:{cursor:"pointer"},onClick:this.handleClick},[this.isFullscreen?e(o,{name:"navbar-fullscreen-exit"},null):e(o,{name:"navbar-fullscreen"},null)])}}),Re=h({name:"SiderTheme",setup(){const t=M(),a=i(()=>t.siderTheme);function n(){t.change({key:"siderTheme",value:a.value==="dark"?"light":"dark"})}return{siderTheme:a,handleClick:n}},render(){return e("div",{title:"\u4E3B\u9898",style:{cursor:"pointer"},onClick:this.handleClick},[this.siderTheme==="dark"?e(o,{name:"navbar-theme-dark"},null):e(o,{name:"navbar-theme-light"},null)])}}),xe=h({name:"Trigger",setup(){const t=M(),a=i(()=>!t.siderOpened);function n(){t.change({key:"siderOpened",value:a.value})}return{collapsed:a,handleClick:n}},render(){return e(o,{class:v.trigger,name:this.collapsed?"navbar-menu-unfold":"navbar-menu-fold",onClick:this.handleClick},null)}}),De=h({name:"Header",render(){return e("div",{class:v.navbar},[e("div",{class:v.left},[e(xe,null,null),e(we,null,null)]),e("div",{class:v.right},[e(re,null,{default:()=>[e(Le,null,null),e(Re,null,null),e(Oe,null,null)]})])])}});const je="tabbar__mjQd6",$e="tabContent__2IlFX",Ke="tabCloseIcon__zQVEA",He="tabsMenu__3TFrf",Ie="tabsDropdownMenu__u77_F";var O={tabbar:je,tabContent:$e,tabCloseIcon:Ke,tabsMenu:He,tabsDropdownMenu:Ie};function Fe(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!x(t)}var We=h({name:"Tabs",setup(){const t=T(""),a=W(),n=D(),l=H(),u=i(()=>l.visitedTabs),s=i(()=>u.value.findIndex(r=>r.path===t.value)===0),y=i(()=>u.value.findIndex(r=>r.path===t.value)===u.value.length-1),d=i(()=>u.value.length<=1);function g(r){return t.value===r.path}function m(){const{name:r,path:f}=a;return r&&[I.LOGIN,I.ERROR].indexOf(f)===-1&&(l.addTab(a),t.value=f),!1}function C(){l.delCachedTab(a).then(()=>{const{fullPath:r}=a;ue(()=>{n.replace({path:"/redirect"+r})})})}function b(r){l.delTab(r).then(({visitedTabs:f})=>{g(r)&&K(f)})}function k(){l.delLeftTabs(a)}function c(){l.delRightTabs(a)}function z(){l.delOthersTabs(a)}function V(){l.delAllTabs().then(({visitedTabs:r})=>{K(r)})}function U(r){n.push(r)}function K(r){const f=r.slice(-1)[0];f?n.push(f.fullPath):a.name==="Analysis"?n.replace({path:"/redirect"+a.fullPath}):n.replace("/")}return L(()=>a.path,()=>{m()}),oe(()=>{m()}),{activeKey:t,visitedTabs:u,closeLeftDisabled:s,closeRightDisabled:y,closeOtherDisabled:d,handleCloseTab:b,handleCloseLeftTabs:k,handleCloseRightTabs:c,handleCloseOtherTabs:z,handleCloseAllTabs:V,handleSelectTab:U,handleRefreshTab:C}},render(){let t;return e("div",{class:O.tabbar},[e(N,{activeKey:this.activeKey,"onUpdate:activeKey":a=>this.activeKey=a,onChange:this.handleSelectTab},Fe(t=this.visitedTabs.map(a=>e(N.TabPane,{tab:()=>e("div",{class:O.tabContent},[e("span",null,[a.meta.title]),e(o,{name:"tabbar-close",class:O.tabCloseIcon,onClick:ie(()=>this.handleCloseTab(a),["stop"])},null)]),key:a.path},null)))?t:{default:()=>[t]}),e(A,{overlayStyle:{zIndex:100002}},{default:()=>e("div",{class:O.tabsMenu},[e(o,{name:"tabbar-down"},null)]),overlay:()=>e(R,{class:O.tabsDropdownMenu},{default:()=>[e(p,{onClick:this.handleRefreshTab},{default:()=>[e(o,{name:"tabbar-refresh"},null),S("\u5237\u65B0\u9875\u9762")]}),e(E,null,null),e(p,{onClick:this.handleCloseLeftTabs,disabled:this.closeLeftDisabled},{default:()=>[e(o,{name:"tabbar-close-left"},null),S("\u5173\u95ED\u5DE6\u4FA7")]}),e(p,{onClick:this.handleCloseRightTabs,disabled:this.closeRightDisabled},{default:()=>[e(o,{name:"tabbar-close-right"},null),S("\u5173\u95ED\u53F3\u4FA7")]}),e(E,null,null),e(p,{onClick:this.handleCloseOtherTabs,disabled:this.closeOtherDisabled},{default:()=>[e(o,{name:"tabbar-close"},null),S("\u5173\u95ED\u5176\u5B83")]}),e(p,{onClick:this.handleCloseAllTabs},{default:()=>[e(o,{name:"tabbar-close-all"},null),S("\u5173\u95ED\u6240\u6709")]})]})})])}});const Ae="layout__NHE5Z",Ne="layoutSider__3_P83",Ee="layoutMain__3jFjl",Be="layoutHeader__2VbKL",Pe="layoutContent__1uzW5";var _={layout:Ae,layoutSider:Ne,layoutMain:Ee,layoutHeader:Be,layoutContent:Pe};function ze(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!x(t)}var Ze=h({name:"DefaultLayout",setup(){const t=M(),a=i(()=>t.$state),n=i(()=>{const s={};return a.value.siderOpened?(s.marginLeft=a.value.siderOpenedWidth,s.width=`calc(100vw - ${a.value.siderOpenedWidth})`):(s.marginLeft=a.value.siderClosedWidth,s.width=`calc(100vw - ${a.value.siderClosedWidth})`),s}),l=i(()=>{const s={height:a.value.headerHeight};return a.value.fixedHeader&&(s.position="sticky",s.top="0px"),s}),u=i(()=>{const s={};return a.value.fixedHeader&&(s.position="sticky",s.top=a.value.headerHeight),s});return{setting:a,mainStyle:n,headerStyle:l,tabbarStyle:u}},render(){let t;const a=()=>e(de,{class:_.layoutHeader,style:this.headerStyle},{default:()=>[e(De,null,null)]}),n=()=>e(We,{style:this.tabbarStyle},null),l=()=>e(he,{class:_.layoutContent},{default:()=>[e(be,null,null)]});return e(j,{class:_.layout},{default:()=>[e(ce,{class:_.layoutSider,collapsed:!this.setting.siderOpened,trigger:null,theme:this.setting.siderTheme,width:this.setting.siderOpenedWidth,collapsedWidth:this.setting.siderClosedWidth,collapsible:!0},{default:()=>[e(pe,null,null),e(w,null,{default:()=>[e(ye,null,null)]})]}),this.setting.fixedHeader?e(j,{class:_.layoutMain,style:this.mainStyle},{default:()=>[a(),n(),e(w,null,ze(t=l())?t:{default:()=>[t]})]}):e(w,null,{default:()=>[e(j,{class:_.layoutMain,style:this.mainStyle},{default:()=>[a(),n(),l()]})]})]})}});export{Ze as default};