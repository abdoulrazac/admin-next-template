import{P as c}from"./el-scrollbar-f77101f7.js";import{d as p,r as l,o as m,h as f,f as e,C as v,q as a}from"./runtime-core.esm-bundler-d3f66853.js";import"./dayjs.min-73c6472a.js";import"./index-7f8506ed.js";import{S as y}from"./index-f253655b.js";import{B as i}from"./button-5adece00.js";import"./useConfigInject-bc8cb14d.js";import"./_commonjsHelpers-042e6b4d.js";import"./vue-router-22a2ab70.js";import"./cloneDeep-a0bb90cb.js";import"./_getPrototype-d283ffb9.js";import"./ajax-be8adbaf.js";import"./useFlexGapSupport-89e64ba1.js";import"./wave-c3e26277.js";import"./raf-436af0c2.js";const h=()=>({options:{type:Object,required:!0}}),C=p({name:"ProVideo",props:h(),setup(o){const n=l(null),t=l({});function u(){t.value=new c({el:n.value,...o.options})}return m(()=>{u()}),f(()=>{var r;(r=t.value)==null||r.destroy()}),{video:n,player:t}},render(){return e("div",{ref:"video"},null)}}),P="view__jna5l",b="btns__rC0-3",s={view:P,btns:b},N=p({name:"DemoVideo",setup(){const o=l({}),n=l({options:{url:"//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo-720p.mp4"}});function t(){o.value.player.start(),o.value.player.play()}function u(){o.value.player.pause()}function r(){o.value.player.play()}function d(){o.value.player.reload()}return{videoRef:o,videoConfig:n,handlePlay:t,handlePause:u,handleContinueToPlay:r,handleReplay:d}},render(){return e("div",{class:s.view},[e(C,v({ref:"videoRef"},this.videoConfig),null),e("div",{class:s.btns},[e(y,null,{default:()=>[e(i,{onClick:this.handlePlay},{default:()=>[a("播放")]}),e(i,{onClick:this.handlePause},{default:()=>[a("暂停")]}),e(i,{onClick:this.handleContinueToPlay},{default:()=>[a("继续播放")]}),e(i,{onClick:this.handleReplay},{default:()=>[a("重新播放")]})]})])])}});export{N as default};