import{d as n,ak as o,an as u,b as p}from"./vendor.e0cfe960.js";var d=n({name:"RedirectView",setup(){const t=o(),a=u(),{params:r,query:s}=t,e=r.path;a.replace({path:e.startsWith("/")?e:`/${e}`,query:s})},render(){return p("section",null,null)}});export{d as default};