import{d as s,r as e,b as t,aA as d,aB as a,aC as o}from"./vendor.e0cfe960.js";/* empty css               *//* empty css              */import{f as r}from"./index.3cbfe2fe.js";var f="/admin-next-template/assets/logo.81f4abbc.svg",c=s({name:"DemoQRCode",setup(){const n=e({text:"http://www.baidu.com"}),i=e({text:"http://www.baidu.com",options:{color:{dark:"#43d08c"}}}),l=e({text:"http://www.baidu.com",logo:f});return{qr1Config:n,qr2Config:i,qr3Config:l}},render(){return t("div",null,[t(d,{gutter:15},{default:()=>[t(a,{span:8},{default:()=>[t(o,{title:"\u57FA\u7840\u793A\u4F8B"},{default:()=>[t(r,this.qr1Config,null)]})]}),t(a,{span:8},{default:()=>[t(o,{title:"\u914D\u7F6E\u6837\u5F0F"},{default:()=>[t(r,this.qr2Config,null)]})]}),t(a,{span:8},{default:()=>[t(o,{title:"\u96C6\u6210\u56FE\u6807"},{default:()=>[t(r,this.qr3Config,null)]})]})]})])}});export{c as default};