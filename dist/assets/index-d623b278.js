import{b as g,d as r,m as u,u as _,_ as h,w}from"./plugin-vue_export-helper-f50e9431.js";import{d as p,D as R,c as l,s as S,a as $,b as v,e as j,l as N,n as x,h as c,x as C,i as E,E as k}from"./runtime-core.esm-bundler-a4e74cc4.js";import{b}from"./base-3117a520.js";const O=Symbol("rowContextKey"),K=g({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:r([Number,Object]),default:()=>u({})},sm:{type:r([Number,Object]),default:()=>u({})},md:{type:r([Number,Object]),default:()=>u({})},lg:{type:r([Number,Object]),default:()=>u({})},xl:{type:r([Number,Object]),default:()=>u({})}}),P=p({name:"ElCol"}),B=p({...P,props:K,setup(f){const t=f,{gutter:o}=R(O,{gutter:l(()=>0)}),a=_("col"),i=l(()=>{const e={};return o.value&&(e.paddingLeft=e.paddingRight=`${o.value/2}px`),e}),m=l(()=>{const e=[];return["span","offset","pull","push"].forEach(s=>{const n=t[s];b(n)&&(s==="span"?e.push(a.b(`${t[s]}`)):n>0&&e.push(a.b(`${s}-${t[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{b(t[s])?e.push(a.b(`${s}-${t[s]}`)):S(t[s])&&Object.entries(t[s]).forEach(([n,y])=>{e.push(n!=="span"?a.b(`${s}-${n}-${y}`):a.b(`${s}-${y}`))})}),o.value&&e.push(a.is("guttered")),[a.b(),e]});return(e,d)=>($(),v(E(e.tag),{class:x(c(m)),style:C(c(i))},{default:j(()=>[N(e.$slots,"default")]),_:3},8,["class","style"]))}});var D=h(B,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const Q=w(D),L=["start","center","end","space-around","space-between","space-evenly"],A=["top","middle","bottom"],I=g({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:L,default:"start"},align:{type:String,values:A,default:"top"}}),J=p({name:"ElRow"}),T=p({...J,props:I,setup(f){const t=f,o=_("row"),a=l(()=>t.gutter);k(O,{gutter:a});const i=l(()=>{const e={};return t.gutter&&(e.marginRight=e.marginLeft=`-${t.gutter/2}px`),e}),m=l(()=>[o.b(),o.is(`justify-${t.justify}`,t.justify!=="start"),o.is(`align-${t.align}`,t.align!=="top")]);return(e,d)=>($(),v(E(e.tag),{class:x(c(m)),style:C(c(i))},{default:j(()=>[N(e.$slots,"default")]),_:3},8,["class","style"]))}});var q=h(T,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const U=w(q);export{U as E,Q as a};