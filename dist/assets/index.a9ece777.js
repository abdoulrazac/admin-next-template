import{Q as e}from"./index.4c6fddc5.js";import{d as l,r as a,b as t,aw as i,ax as o,ay as n}from"./vendor.568cb1c2.js";var f="/admin-next-template/assets/logo.81f4abbc.svg",p=l({name:"DemoQRCode",setup(){const r=a({text:"http://www.baidu.com"}),d=a({text:"http://www.baidu.com",options:{color:{dark:"#43d08c"}}}),s=a({text:"http://www.baidu.com",logo:f});return{qr1Config:r,qr2Config:d,qr3Config:s}},render(){return t("div",null,[t(i,{gutter:15},{default:()=>[t(o,{span:8},{default:()=>[t(n,{title:"\u57FA\u7840\u793A\u4F8B"},{default:()=>[t(e,this.qr1Config,null)]})]}),t(o,{span:8},{default:()=>[t(n,{title:"\u914D\u7F6E\u6837\u5F0F"},{default:()=>[t(e,this.qr2Config,null)]})]}),t(o,{span:8},{default:()=>[t(n,{title:"\u96C6\u6210\u56FE\u6807"},{default:()=>[t(e,this.qr3Config,null)]})]})]})])}});export{p as default};