import{d as o,al as i,an as c,c as u,b as e,aC as l,B as d,A as p}from"./vendor.568cb1c2.js";const h={403:"\u6743\u9650\u4E0D\u591F",404:"\u9875\u9762\u4E0D\u5B58\u5728",500:"\u670D\u52A1\u5668\u5F02\u5E38"};var E=o({name:"ErrorView",setup(){const s=i(),a=c(),t=u(()=>s.query.status),r=u(()=>h[t.value]);function n(){a.replace("/")}return{status:t,subTitle:r,handleClick:n}},render(){return e(l,{status:this.status,title:this.status,subTitle:this.subTitle},{extra:()=>e(d,{type:"primary",onClick:this.handleClick},{default:()=>[p("\u8FD4\u56DE\u9996\u9875")]})})}});export{E as default};