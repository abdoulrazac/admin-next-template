import{d as f,r,b as e,U as v,P as n,Q as o,m as p,as as s}from"./vendor.e0cfe960.js";import{d as m}from"./index.3cbfe2fe.js";const T="view__VcgMy",h="btnsWrap__XPpjV";var i={view:T,btnsWrap:h},b=f({name:"DemoEditor",setup(){const l=r({}),t=r({});function d(){const a=t.value.editor.getHtml();s.info(a)}function u(){const a=t.value.editor.getText();s.info(a)}function c(){t.value.editor.clear()}return{editorConfig:l,editorRef:t,handleGetHTML:d,handleGetTXT:u,handleClear:c}},render(){return e("div",{class:i.view},[e("div",{class:i.btnsWrap},[e(v,null,{default:()=>[e(n,{onClick:this.handleGetHTML},{default:()=>[o("\u83B7\u53D6 HTML")]}),e(n,{onClick:this.handleGetTXT},{default:()=>[o("\u83B7\u53D6 TXT")]}),e(n,{onClick:this.handleClear},{default:()=>[o("\u6E05\u9664\u5185\u5BB9")]})]})]),e(m,p({ref:"editorRef"},this.editorConfig),null)])}});export{b as default};