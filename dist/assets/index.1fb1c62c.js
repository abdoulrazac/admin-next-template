import{d as o,ai as n,ak as u,c}from"./vendor.6aebc5a6.js";var d=o({name:"Redirect",setup(){const t=n(),a=u(),{params:r,query:s}=t,e=r.path;a.replace({path:e.startsWith("/")?e:`/${e}`,query:s})},render(){return c("section",null,null)}});export{d as default};
