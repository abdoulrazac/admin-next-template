import{d as s,r as l,o as i,b as e,aA as r,k as u,aB as c,aC as d,aD as v,aE as f}from"./vendor.e0cfe960.js";/* empty css               *//* empty css              */import{C as x,S as b}from"./index.3cbfe2fe.js";const C="view__63699",m="cardContent__oWKez",p="text__a--8O",w="icon__0W1yU";var a={view:C,cardContent:m,text:p,icon:w};function _(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!u(t)}var P=s({name:"AnalysisView",setup(){const t=l(!1),n=l([{title:"\u8BBF\u95EE\u6570",subText:"\u6708",subColor:"blue",valPrefix:"\uFFE5",valNum:2e3,icon:"view-visit-count"},{title:"\u6210\u4EA4\u989D",subText:"\u6708",subColor:"green",valPrefix:"\uFFE5",valNum:2e3,icon:"view-total-sales"},{title:"\u4E0B\u8F7D\u6570",subText:"\u5468",subColor:"blue",valPrefix:"",valNum:2e3,icon:"view-download-count"},{title:"\u6210\u4EA4\u6570",subText:"\u5E74",subColor:"green",valPrefix:"",valNum:2e3,icon:"view-transaction"}]);function o(){t.value=!0,setTimeout(()=>{t.value=!1},1500)}return i(()=>{o()}),{loading:t,list:n}},render(){let t;const n=o=>e(c,{span:6},{default:()=>[e(d,{title:o.title,size:"small"},{extra:()=>e(v,{color:o.subColor},{default:()=>[o.subText]}),default:()=>e(f,{loading:this.loading,active:!0},{default:()=>[e("div",{class:a.cardContent},[e(x,{class:a.text,prefix:o.valPrefix,endVal:o.valNum},null),e(b,{class:a.icon,name:o.icon},null)])]})})]});return e("div",{class:a.view},[e(r,{gutter:10},_(t=this.list.map(n))?t:{default:()=>[t]})])}});export{P as default};