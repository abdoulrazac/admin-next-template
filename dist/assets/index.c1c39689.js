import{d as f}from"./index.61a9acb4.js";import{d as v,r,b as e,Q as h,O as n,P as o,m,as as s}from"./vendor.2cde020b.js";const p="view__oqq5F",T="btnsWrap__20hPn";var i={view:p,btnsWrap:T},g=v({name:"DemoEditor",setup(){const d=r({}),t=r({});function l(){const a=t.value.editor.getHtml();s.info(a)}function u(){const a=t.value.editor.getText();s.info(a)}function c(){t.value.editor.clear()}return{editorConfig:d,editorRef:t,handleGetHTML:l,handleGetTXT:u,handleClear:c}},render(){return e("div",{class:i.view},[e("div",{class:i.btnsWrap},[e(h,null,{default:()=>[e(n,{onClick:this.handleGetHTML},{default:()=>[o("\u83B7\u53D6 HTML")]}),e(n,{onClick:this.handleGetTXT},{default:()=>[o("\u83B7\u53D6 TXT")]}),e(n,{onClick:this.handleClear},{default:()=>[o("\u6E05\u9664\u5185\u5BB9")]})]})]),e(f,m({ref:"editorRef"},this.editorConfig),null)])}});export{g as default};