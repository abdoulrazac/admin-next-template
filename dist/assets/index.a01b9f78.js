import{d as o,aj as i,al as c,v as e,c as u,aL as l,H as d,J as p}from"./vendor.2ced17f5.js";const f={403:"\u6743\u9650\u4E0D\u591F",404:"\u9875\u9762\u4E0D\u5B58\u5728",500:"\u670D\u52A1\u5668\u5F02\u5E38"};var m=o({name:"Error",setup(){const s=i(),a=c(),t=e(()=>s.query.status),r=e(()=>f[t.value]);function n(){a.replace("/")}return{status:t,subTitle:r,handleClick:n}},render(){return u(l,{status:this.status,title:this.status,subTitle:this.subTitle},{extra:()=>u(d,{type:"primary",onClick:this.handleClick},{default:()=>[p("\u8FD4\u56DE\u9996\u9875")]})})}});export{m as default};
