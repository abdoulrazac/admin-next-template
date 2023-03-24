import{d as g,aa as q,m as b,_ as v,a as s,b as c,g as f,w as l,e as o,ab as x,ac as ee,ad as te,I as O,c as M,ae as _,a6 as W,a7 as K,af as E,h as w,i as F,f as B,F as k,r as P,ag as ne,X as N,ah as oe,ai as J,t as V,aj as H,a8 as se,B as Q,q as U,j as S,ak as ae,z as le,o as ce,al as j,a3 as I}from"./index-6ad3420e.js";const re=g({name:"Content",setup(){const e=q();return{cachedTabs:b(()=>e.cachedTabs)}}});function ue(e,t,r,a,m,u){const n=s("router-view");return c(),f(n,null,{default:l(({Component:p,route:i})=>[o(te,{name:"fade-slide",mode:"out-in",appear:""},{default:l(()=>[(c(),f(x,{max:20,include:e.cachedTabs},[(c(),f(ee(p),{key:i.fullPath}))],1032,["include"]))]),_:2},1024)]),_:1})}const ie=v(re,[["render",ue]]),de=g({name:"Logo",components:{Icon:O}}),me="logo__O3W1z",pe="logoIcon__gvzS2",_e={logo:me,logoIcon:pe};function fe(e,t,r,a,m,u){const n=s("Icon");return c(),M("div",{class:_(e.$style.logo)},[o(n,{class:_(e.$style.logoIcon),icon:"logos:element"},null,8,["class"])],2)}const he={$style:_e},be=v(de,[["render",fe],["__cssModules",he]]),ye=g({name:"MainMenu",components:{Icon:O},props:{item:{type:Object,required:!0}},setup(e){const t=W(),r=K(),a=b(()=>e.item.meta?!e.item.meta.hidden:!1);function m(){t.path!==e.item.path&&r.push(e.item.path).catch(u=>{console.error(u)})}return{show:a,handleJump:m}}});function $e(e,t,r,a,m,u){const n=s("Icon"),p=s("el-menu-item");return e.show?(c(),f(p,{key:0,index:e.item.path,onClick:e.handleJump},{title:l(()=>[e.item.meta.icon?(c(),f(n,{key:0,icon:e.item.meta.icon},null,8,["icon"])):E("",!0),w("span",null,F(e.item.meta.title),1)]),_:1},8,["index","onClick"])):E("",!0)}const Y=v(ye,[["render",$e]]),ge=g({name:"SubMenu",components:{Icon:O,MainMenu:Y},props:{item:{type:Object,required:!0}},setup(e){return{onlyOneChild:b(()=>e.item.children.length===1?e.item.meta?!e.item.meta.alwaysShow:!0:!1)}}});function ve(e,t,r,a,m,u){const n=s("MainMenu"),p=s("Icon"),i=s("sub-menu",!0),d=s("el-sub-menu");return e.onlyOneChild?(c(),f(n,{key:0,item:e.item.children[0]},null,8,["item"])):(c(),f(d,{key:1,index:e.item.path},{title:l(()=>[e.item.meta.icon?(c(),f(p,{key:0,class:"el-icon",icon:e.item.meta.icon},null,8,["icon"])):E("",!0),w("span",null,F(e.item.meta.title),1)]),default:l(()=>[(c(!0),M(k,null,B(e.item.children,$=>(c(),M(k,{key:$.path},[$.children?(c(),f(i,{key:0,item:$},null,8,["item"])):(c(),f(n,{key:1,item:$},null,8,["item"]))],64))),128))]),_:1},8,["index"]))}const Me=v(ge,[["render",ve]]),Ce=g({name:"Menu",components:{MainMenu:Y,SubMenu:Me},setup(){const e=P({list:[]}),t=W(),r=ne(),a=N(),m=b(()=>oe(r.routes)),u=b(()=>a.$state),n=b(()=>t.path);function p(d,$=""){for(const y of d)if(y.path=$+(y.path.startsWith("/")?y.path:`/${y.path}`),delete y.component,delete y.redirect,y.children){if(y.children.length===0)continue;p(y.children,y.path)}return d}function i(){const d=p(m.value);e.list=d}return J(()=>{i()}),{...V(e),vars:H,activeMenu:n,setting:u}}}),Te="menu__JeSdZ",Se={menu:Te};function we(e,t,r,a,m,u){const n=s("SubMenu"),p=s("MainMenu"),i=s("el-menu");return c(),f(i,{mode:"vertical",class:_(e.$style.menu),defaultActive:e.activeMenu,backgroundColor:e.vars.menuBg,textColor:e.vars.menuText,activeTextColor:e.vars.menuActiveText,collapse:!e.setting.sideOpened,collapseTransition:!1,uniqueOpened:""},{default:l(()=>[(c(!0),M(k,null,B(e.list,d=>(c(),M(k,{key:d.path},[d.children?(c(),f(n,{key:0,item:d},null,8,["item"])):(c(),f(p,{key:1,item:d},null,8,["item"]))],64))),128))]),_:1},8,["class","defaultActive","backgroundColor","textColor","activeTextColor","collapse"])}const ke={$style:Se},Oe=v(Ce,[["render",we],["__cssModules",ke]]),Ie=g({name:"Avatar",components:{Icon:O},setup(){const e=P({commandMap:{logout:()=>m()}}),t=K(),r=se(),{$msgbox:a}=Q();function m(){a.confirm("确认退出登录？","提示",{type:"warning"}).then(async()=>{await r.logout(),t.replace({path:"/login"})}).catch(()=>{})}function u(n){e.commandMap[n]()}return{handleCommand:u}}}),De="avatarWrapper__qJ38h",Le="avatar__XLkyv",Re="avatarDropdownMenu__vY1TP",Ae={avatarWrapper:De,avatar:Le,avatarDropdownMenu:Re},Fe=w("span",null,"退出登录",-1);function We(e,t,r,a,m,u){const n=s("Icon"),p=s("el-dropdown-item"),i=s("el-dropdown-menu"),d=s("el-dropdown");return c(),f(d,{onCommand:e.handleCommand},{default:l(()=>[w("div",{class:_(e.$style.avatarWrapper)},[o(n,{class:_(e.$style.avatar),icon:"custom:avatar",inline:!0},null,8,["class"])],2)]),dropdown:l(()=>[o(i,{class:_(e.$style.avatarDropdownMenu)},{default:l(()=>[o(p,{command:"logout"},{default:l(()=>[o(n,{icon:"ant-design:logout-outlined",inline:!0}),Fe]),_:1})]),_:1},8,["class"])]),_:1},8,["onCommand"])}const Be={$style:Ae},Pe=v(Ie,[["render",We],["__cssModules",Be]]),Ne=g({name:"Breadcrumb",setup(){const e=P({breadcrumbs:[]}),t=W();function r(){var u;const a=t.matched,m=[];for(const n of a)n.path!=="/"&&m.push({path:n.path.startsWith("/")?n.path:`/${n.path}`,title:((u=n.meta)==null?void 0:u.title)||"-"});e.breadcrumbs=m}return U(()=>t.path,a=>{a.startsWith("/redirect/")||r()}),J(()=>{r()}),{...V(e)}}}),Ee="breadcrumb__45QCe",He={breadcrumb:Ee};function Ke(e,t,r,a,m,u){const n=s("el-breadcrumb-item"),p=s("el-breadcrumb");return c(),f(p,{class:_(e.$style.breadcrumb)},{default:l(()=>[(c(!0),M(k,null,B(e.breadcrumbs,(i,d)=>(c(),M(k,{key:i.path},[d===e.breadcrumbs.length-1?(c(),f(n,{key:0},{default:l(()=>[S(F(i.title),1)]),_:2},1024)):(c(),f(n,{key:1,to:{path:i.path}},{default:l(()=>[S(F(i.title),1)]),_:2},1032,["to"]))],64))),128))]),_:1},8,["class"])}const Ve={$style:He},ze=v(Ne,[["render",Ke],["__cssModules",Ve]]),je=g({name:"ScreenFull",components:{Icon:O},setup(){const{isFullscreen:e,isSupported:t,toggle:r}=ae(),{$message:a}=Q(),m=b(()=>e.value?"ant-design:fullscreen-exit-outlined":"ant-design:fullscreen-outlined");function u(){t?r():a.warning("浏览器不支持全屏")}return{icon:m,handleClick:u}}});function qe(e,t,r,a,m,u){const n=s("Icon");return c(),M("div",{title:"全屏",onClick:t[0]||(t[0]=(...p)=>e.handleClick&&e.handleClick(...p))},[o(n,{icon:e.icon,inline:!0},null,8,["icon"])])}const Je=v(je,[["render",qe]]),Qe=g({name:"Trigger",components:{Icon:O},setup(){const e=N(),t=b(()=>!e.sideOpened),r=b(()=>t.value?"ant-design:menu-unfold-outlined":"ant-design:menu-fold-outlined");function a(){e.change({key:"sideOpened",value:t.value})}return{collapsed:t,icon:r,handleClick:a}}}),Ue="trigger__lcYms",Ye={trigger:Ue};function Ge(e,t,r,a,m,u){const n=s("Icon");return c(),f(n,{class:_(e.$style.trigger),icon:e.icon,onClick:e.handleClick},null,8,["class","icon","onClick"])}const Xe={$style:Ye},Ze=v(Qe,[["render",Ge],["__cssModules",Xe]]),xe=g({name:"Navbar",components:{Avatar:Pe,Breadcrumb:ze,ScreenFull:Je,Trigger:Ze}}),et="navbar__JDd-o",tt="left__Yp02w",nt="right__Z-Ibh",ot={navbar:et,left:tt,right:nt};function st(e,t,r,a,m,u){const n=s("Trigger"),p=s("Breadcrumb"),i=s("ScreenFull"),d=s("Avatar"),$=s("el-space");return c(),M("div",{class:_(e.$style.navbar)},[w("div",{class:_(e.$style.left)},[o(n),o(p)],2),w("div",{class:_(e.$style.right)},[o($,{size:15},{default:l(()=>[o(i),o(d)]),_:1})],2)],2)}const at={$style:ot},lt=v(xe,[["render",st],["__cssModules",at]]),ct=g({name:"Tabbar",components:{Icon:O},setup(){const e=P({activeKey:"",commandMap:{refresh:()=>y(),closeLeft:()=>R(),closeRight:()=>A(),closeOther:()=>D(),closeAll:()=>G()}}),t=W(),r=K(),a=q(),m=N(),u=b(()=>a.visitedTabs),n=b(()=>u.value.findIndex(h=>h.fullPath===e.activeKey)===0),p=b(()=>u.value.findIndex(h=>h.fullPath===e.activeKey)===u.value.length-1),i=b(()=>u.value.length<=1);function d(h){return e.activeKey===h.fullPath}function $(){const{name:h,path:T,fullPath:L}=t;return h&&[j.LOGIN,j.ERROR].indexOf(T)===-1&&(a.addTab(t),e.activeKey=L),!1}function y(){a.delCachedTab(t).then(()=>{const{fullPath:h}=t;le(()=>{r.replace({path:"/redirect"+h})})})}function C(h){const T=u.value.find(L=>L.fullPath===h);a.delTab(T).then(({visitedTabs:L})=>{d(T)&&z(L)})}function R(){a.delLeftTabs(t)}function A(){a.delRightTabs(t)}function D(){a.delOthersTabs(t)}function G(){a.delAllTabs().then(({visitedTabs:h})=>{z(h)})}function X(h){r.push(h)}function z(h){const T=h.slice(-1)[0];T?r.push(T.fullPath):t.name===m.homeRoute.name?r.replace({path:"/redirect"+t.fullPath}):r.replace("/")}function Z(h){e.commandMap[h]()}return U(()=>t.path,()=>{$()}),ce(()=>{$()}),{...V(e),visitedTabs:u,closeLeftDisabled:n,closeRightDisabled:p,closeOtherDisabled:i,handleCloseTab:C,handleSelectTab:X,handleCommand:Z}}}),rt="tabbar__2iI-k",ut="tabsMenu__sonef",it="tabsDropdownMenu__x75gy",dt={tabbar:rt,tabsMenu:ut,tabsDropdownMenu:it};function mt(e,t,r,a,m,u){const n=s("el-tab-pane"),p=s("el-tabs"),i=s("Icon"),d=s("el-dropdown-item"),$=s("el-dropdown-menu"),y=s("el-dropdown");return c(),M("div",{class:_(e.$style.tabbar)},[o(p,{modelValue:e.activeKey,"onUpdate:modelValue":t[0]||(t[0]=C=>e.activeKey=C),onTabChange:e.handleSelectTab,onTabRemove:e.handleCloseTab},{default:l(()=>[(c(!0),M(k,null,B(e.visitedTabs,C=>(c(),f(n,{key:C.fullPath,name:C.fullPath,label:C.meta.title,closable:""},null,8,["name","label"]))),128))]),_:1},8,["modelValue","onTabChange","onTabRemove"]),o(y,{placement:"bottom-end",onCommand:e.handleCommand},{default:l(()=>[w("div",{class:_(e.$style.tabsMenu)},[o(i,{icon:"ant-design:down-outlined",inline:!0})],2)]),dropdown:l(()=>[o($,{class:_(e.$style.tabsDropdownMenu)},{default:l(()=>[o(d,{command:"refresh"},{default:l(()=>[o(i,{icon:"ant-design:reload-outlined",inline:!0}),S(" 刷新页面 ")]),_:1}),o(d,{command:"closeLeft",disabled:e.closeLeftDisabled,divided:""},{default:l(()=>[o(i,{icon:"ant-design:vertical-right-outlined",inline:!0}),S(" 关闭左侧 ")]),_:1},8,["disabled"]),o(d,{command:"closeRight",disabled:e.closeRightDisabled},{default:l(()=>[o(i,{icon:"ant-design:vertical-left-outlined",inline:!0}),S(" 关闭右侧 ")]),_:1},8,["disabled"]),o(d,{command:"closeOther",disabled:e.closeOtherDisabled,divided:""},{default:l(()=>[o(i,{icon:"ant-design:close-outlined",inline:!0}),S(" 关闭其它 ")]),_:1},8,["disabled"]),o(d,{command:"closeAll"},{default:l(()=>[o(i,{icon:"ant-design:close-circle-outlined",inline:!0}),S(" 关闭所有 ")]),_:1})]),_:1},8,["class"])]),_:1},8,["onCommand"])],2)}const pt={$style:dt},_t=v(ct,[["render",mt],["__cssModules",pt]]),ft=g({name:"DefaultLayout",components:{Content:ie,Logo:be,Menu:Oe,Navbar:lt,Tabbar:_t},setup(){const e=N(),t=b(()=>e.$state),r=b(()=>t.value.sideOpened?t.value.sideOpenedWidth:t.value.sideClosedWidth),a=b(()=>{const n={};return t.value.sideOpened?(n.marginLeft=t.value.sideOpenedWidth,n.width=`calc(100vw - ${t.value.sideOpenedWidth})`):(n.marginLeft=t.value.sideClosedWidth,n.width=`calc(100vw - ${t.value.sideClosedWidth})`),n}),m=b(()=>{const n={height:H.headerHeight};return t.value.fixedHeader&&(n.position="sticky",n.top="0px"),n}),u=b(()=>{const n={};return t.value.fixedHeader&&(n.position="sticky",n.top=H.headerHeight),n});return{setting:t,asideWidth:r,mainStyle:a,headerStyle:m,tabbarStyle:u}}}),ht="layout__Cm3G4",bt="layoutSide__Qx-Oj",yt="layoutMain__RvQoN",$t="layoutHeader__1O0br",gt="layoutContent__0Ei-r",vt={layout:ht,layoutSide:bt,layoutMain:yt,layoutHeader:$t,layoutContent:gt};function Mt(e,t,r,a,m,u){const n=s("Logo"),p=s("Menu"),i=s("el-scrollbar"),d=s("el-aside"),$=s("Navbar"),y=s("el-header"),C=s("Tabbar"),R=s("Content"),A=s("el-main"),D=s("el-container");return c(),f(D,{class:_(e.$style.layout)},{default:l(()=>[o(d,{class:_(e.$style.layoutSide),width:e.asideWidth},{default:l(()=>[o(n),o(i,null,{default:l(()=>[o(p)]),_:1})]),_:1},8,["class","width"]),e.setting.fixedHeader?(c(),f(D,{key:0,class:_(e.$style.layoutMain),style:I(e.mainStyle)},{default:l(()=>[o(y,{class:_(e.$style.layoutHeader),style:I(e.headerStyle)},{default:l(()=>[o($)]),_:1},8,["class","style"]),o(C,{style:I(e.tabbarStyle)},null,8,["style"]),o(i,{id:"page"},{default:l(()=>[o(A,{class:_(e.$style.layoutContent)},{default:l(()=>[o(R)]),_:1},8,["class"])]),_:1})]),_:1},8,["class","style"])):(c(),f(i,{key:1},{default:l(()=>[o(D,{class:_(e.$style.layoutMain),style:I(e.mainStyle)},{default:l(()=>[o(y,{class:_(e.$style.layoutHeader),style:I(e.headerStyle)},{default:l(()=>[o($)]),_:1},8,["class","style"]),o(C,{style:I(e.tabbarStyle)},null,8,["style"]),o(A,{class:_(e.$style.layoutContent)},{default:l(()=>[o(R)]),_:1},8,["class"])]),_:1},8,["class","style"])]),_:1}))]),_:1},8,["class"])}const Ct={$style:vt},St=v(ft,[["render",Mt],["__cssModules",Ct]]);export{St as default};
