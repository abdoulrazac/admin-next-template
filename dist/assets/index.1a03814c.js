import{d as t,ai as s,ak as a,u as e,c as r,aJ as u,G as i,H as l}from"./vendor.5d6b18ab.js";const n={403:"权限不够",404:"页面不存在",500:"服务器异常"};var o=t({name:"Error",setup(){const t=s(),r=a(),u=e((()=>t.query.status)),i=e((()=>n[u.value]));return{status:u,subTitle:i,handleClick:function(){r.replace("/")}}},render(){return r(u,{status:this.status,title:this.status,subTitle:this.subTitle},{extra:()=>r(i,{type:"primary",onClick:this.handleClick},{default:()=>[l("返回首页")]})})}});export{o as default};