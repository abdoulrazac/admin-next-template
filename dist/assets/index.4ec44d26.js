import{d as e,ai as a,ak as r,r as s,c as l,aG as n,aH as o,G as i,H as t,u as p,o as u,aI as d,m as c}from"./vendor.5d6b18ab.js";import{a as m,c as g,S as f,P as v}from"./index.9d00c635.js";var h=e({name:"Login",setup(){const e=a(),c=r(),f=m(),v=g(),h=s(!1),y=s(null),w=s({}),b=s(null),C=s({props:{class:"login-form"},items:[{name:"username",type:"input",rules:[{required:!0,message:"请输入账号",trigger:"blur"}],props:{wrapperCol:{span:24}},componentProps:{placeholder:"账号：admin",prefix:l(n,null,null),size:"large"}},{name:"password",type:"input-password",rules:[{required:!0,message:"请输入密码",trigger:"blur"}],props:{wrapperCol:{span:24}},componentProps:{placeholder:"密码：任意",prefix:l(o,null,null),size:"large",onPressEnter:()=>q()}},{render:()=>l(i,{size:"large",type:"primary",loading:h.value,onClick:q,style:{width:"100%"}},{default:()=>[t("登录")]}),props:{wrapperCol:{span:24}}}]}),k=p((()=>f.title));function q(){var e;null==(e=b.value)||e.form.validate().then((()=>{h.value=!0,v.login(b.value.formModel).then((()=>{c.replace({path:y.value||"/",query:w.value})})).finally((()=>{h.value=!1}))})).catch((()=>{}))}return u((()=>{const{query:a}=e;a&&(y.value=a.redirect,w.value=d(a,["redirect"]))})),{title:k,formRef:b,formConfig:C}},render(){return l("div",{class:"login-view"},[l("div",{class:"top"},[l("div",{class:"header"},[l(f,{class:"logo",name:"ant-design"},null),l("span",{class:"title"},[this.title])]),l("div",{class:"desc"},[t("基于 Ant Design 的后台管理系统")])]),l(v,c({ref:"formRef"},this.formConfig),null),l(f,{name:"background",class:"background"},null)])}});export{h as default};
