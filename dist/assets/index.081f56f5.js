import{S as e,a as i,b as r,c as u,d as c,e as v,f as d,r as s,o as m,g as n,R as f,i as x,C as b,h as C,T as g,j as T,k as w}from"./index.6759a130.js";import"./index.e1e1f18d.js";e.Button=i;e.Avatar=r;e.Input=u;e.Image=c;e.Title=v;e.install=function(t){return t.component(e.name,e),t.component(e.Button.name,i),t.component(e.Avatar.name,r),t.component(e.Input.name,u),t.component(e.Image.name,c),t.component(e.Title.name,v),t};const S="view__BFG1d",_="cardContent__3oCA8",p="text__Za5RV",I="icon__XAFof";var a={view:S,cardContent:_,text:p,icon:I};function k(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!x(t)}var P=d({name:"AnalysisView",setup(){const t=s(!1),l=s([{title:"\u8BBF\u95EE\u6570",subText:"\u6708",subColor:"blue",valPrefix:"\uFFE5",valNum:2e3,icon:"view-visit-count"},{title:"\u6210\u4EA4\u989D",subText:"\u6708",subColor:"green",valPrefix:"\uFFE5",valNum:2e3,icon:"view-total-sales"},{title:"\u4E0B\u8F7D\u6570",subText:"\u5468",subColor:"blue",valPrefix:"",valNum:2e3,icon:"view-download-count"},{title:"\u6210\u4EA4\u6570",subText:"\u5E74",subColor:"green",valPrefix:"",valNum:2e3,icon:"view-transaction"}]);function o(){t.value=!0,setTimeout(()=>{t.value=!1},1500)}return m(()=>{o()}),{loading:t,list:l}},render(){let t;const l=o=>n(b,{span:6},{default:()=>[n(C,{title:o.title,size:"small"},{extra:()=>n(g,{color:o.subColor},{default:()=>[o.subText]}),default:()=>n(e,{loading:this.loading,active:!0},{default:()=>[n("div",{class:a.cardContent},[n(T,{class:a.text,prefix:o.valPrefix,endVal:o.valNum},null),n(w,{class:a.icon,name:o.icon},null)])]})})]});return n("div",{class:a.view},[n(f,{gutter:10},k(t=this.list.map(l))?t:{default:()=>[t]})])}});export{P as default};