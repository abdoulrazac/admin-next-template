import"./base-3117a520.js";import{t as h}from"./index.common-5b8c2a1c.js";/* empty css               */import{d as c,r as x,w as C,o as E,p as t,K as q,U as v,m as r}from"./runtime-core.esm-bundler-a4e74cc4.js";/* empty css                  *//* empty css                 *//* empty css                  *//* empty css                   */import"./index-8c06401f.js";import{E as b,a as l}from"./index-d623b278.js";import{E as u}from"./index-797a36c1.js";import"./dayjs.min-bc4b3a60.js";import"./vue-router-8273c86d.js";import"./el-message-cf125374.js";import"./plugin-vue_export-helper-f50e9431.js";import"./isObjectLike-46b91259.js";const F=()=>({text:{type:String,default:"",required:!0},logo:{type:String,default:""},options:{type:Object,default:()=>({})}}),i=c({name:"ProQr",props:F(),setup(o){const e=x(null);function f(){const a=new Image;a.src=o.logo,a.onload=()=>{const d=e.value.getContext("2d");d.imageSmoothingEnabled=!1;const n=e.value.clientWidth,m=n/4,p=n/4,g=(n-m)/2,w=(n-p)/2;d.drawImage(a,g,w,m,p)}}async function s(){await h(e.value,o.text,o.options),o.logo&&f()}return C(()=>o.text,()=>{s()}),E(()=>{s()}),{qrEl:e}},render(){return t("canvas",{ref:"qrEl"},null)}}),y="/admin-next-template/assets/logo-81f4abbc.svg",T=c({setup(){const o=q({qr1Config:{text:"http://www.baidu.com"},qr2Config:{text:"http://www.baidu.com",options:{color:{dark:"#43d08c"}}},qr3Config:{text:"http://www.baidu.com",logo:y}});return{...v(o)}},render(){return t("div",null,[t(b,{gutter:15},{default:()=>[t(l,{span:8},{default:()=>[t(u,null,{header:()=>t("span",null,[r("基础示例")]),default:()=>t(i,this.qr1Config,null)})]}),t(l,{span:8},{default:()=>[t(u,null,{header:()=>t("span",null,[r("配置样式")]),default:()=>t(i,this.qr2Config,null)})]}),t(l,{span:8},{default:()=>[t(u,null,{header:()=>t("span",null,[r("集成图标")]),default:()=>t(i,this.qr3Config,null)})]})]})])}});export{T as default};