import{b as n,d as p,u as c,_ as i,w as m}from"./plugin-vue_export-helper-f50e9431.js";import{d,a as o,k as t,n as r,h as s,l,m as u,t as y,j as f,g as h,x as v}from"./runtime-core.esm-bundler-a4e74cc4.js";const w=n({header:{type:String,default:""},bodyStyle:{type:p([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),S=d({name:"ElCard"}),_=d({...S,props:w,setup(g){const a=c("card");return(e,k)=>(o(),t("div",{class:r([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(o(),t("div",{key:0,class:r(s(a).e("header"))},[l(e.$slots,"header",{},()=>[u(y(e.header),1)])],2)):f("v-if",!0),h("div",{class:r(s(a).e("body")),style:v(e.bodyStyle)},[l(e.$slots,"default")],6)],2))}});var b=i(_,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const N=m(b);export{N as E};