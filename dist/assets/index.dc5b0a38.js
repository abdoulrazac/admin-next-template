import{X as d,f as m,r as i,Y as a,Z as n,_ as l,$ as p,a0 as c,g as r,a1 as f,t as g,B as b,l as R}from"./index.53fb3747.js";const h={getList(t){return d.get("/demo/list",{params:t})}},C=m({name:"DemoTable",setup(){const t=i({}),s=i({fixedHeight:!0,options:{showOverflow:!0,border:!0,loading:!1,keepSource:!0,toolbarConfig:{perfect:!0,custom:!0,refresh:!0,zoom:!0,slots:{buttons:"toolbar_buttons"}},editConfig:{trigger:"click",showStatus:!0},customConfig:{storage:!0},formConfig:{items:[{title:"\u8D26\u53F7",field:"account",itemRender:{name:a.AInput,props:{placeholder:"\u8BF7\u8F93\u5165"}}},{title:"\u6635\u79F0",field:"nickname",itemRender:{name:a.AInput,props:{placeholder:"\u8BF7\u8F93\u5165"}}},{title:"\u89D2\u8272",field:"role",itemRender:{name:a.ASelect,props:{placeholder:"\u8BF7\u9009\u62E9"},options:[{label:"admin",value:"admin"},{label:"normal",value:"normal"}]}},{title:"\u72B6\u6001",field:"status",itemRender:{name:a.ASelect,props:{placeholder:"\u8BF7\u9009\u62E9"},options:[{label:"\u7981\u7528",value:"0"},{label:"\u542F\u7528",value:"1"}]}},{title:"\u65F6\u95F4",field:"date",itemRender:{name:n.FormItemDate,props:{type:"range",placeholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"],valueFormat:"YYYY-MM-DD HH:mm:ss"}}},{itemRender:{name:n.FormItemBtns}}]},columns:[{type:"checkbox",width:50},{title:"ID",field:"id"},{title:"\u8D26\u53F7",field:"account"},{title:"\u90AE\u7BB1",field:"email"},{title:"\u6635\u79F0",field:"nickname",editRender:{name:l.AInput}},{title:"\u89D2\u8272",field:"role"},{title:"\u72B6\u6001",field:"status",editRender:{name:l.ASelect,options:[{label:"\u7981\u7528",value:"0"},{label:"\u542F\u7528",value:"1"}]}},{title:"\u5907\u6CE8",field:"remark",editRender:{name:l.AInput}},{title:"\u521B\u5EFA\u65F6\u95F4",field:"createTs",formatter:p.Date}],pagerConfig:{pageSize:15},proxyConfig:{seq:!0,form:!0,props:{result:"content",total:"total"},ajax:{query:async({page:o,form:e})=>(e.date&&(e.start=e.date[0],e.end=e.date[1],e=c(e,["date"])),await h.getList({pageSize:o.pageSize,current:o.currentPage,...e}))}}}});function u(){t.value.table.commitProxy("query")}return{tableRef:t,tableConfig:s,handleCustomRefresh:u}},render(){return r("div",null,[r(f,g({ref:"tableRef"},this.tableConfig),{toolbar_buttons:()=>r(b,{type:"link",onClick:this.handleCustomRefresh},{default:()=>[R("\u81EA\u5B9A\u4E49\u5237\u65B0")]})})])}});export{C as default};
