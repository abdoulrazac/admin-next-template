import{d as n,ak as o,an as u,b as c}from"./vendor.2cde020b.js";var p=n({name:"RedirectView",setup(){const t=o(),r=u(),{params:a,query:s}=t,e=a.path;r.replace({path:e.startsWith("/")?e:`/${e}`,query:s})},render(){return c("section",null,null)}});export{p as default};