import{d as o,aj as n,al as u,c}from"./vendor.75426bd3.js";var p=o({name:"Redirect",setup(){const t=n(),r=u(),{params:a,query:s}=t,e=a.path;r.replace({path:e.startsWith("/")?e:`/${e}`,query:s})},render(){return c("section",null,null)}});export{p as default};
