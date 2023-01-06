import{u as j,c as F,a as d,P as N,D as M}from"./useConfigInject-bc8cb14d.js";import{W as U}from"./wave-c3e26277.js";import{P as V,j as q}from"./shallowequal-4c081fda.js";import{d as S,c as m,f as s,r as z,j as G,F as H}from"./runtime-core.esm-bundler-d3f66853.js";var J=function(){return{prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}},K=S({compatConfig:{MODE:3},name:"ACheckableTag",props:J(),setup:function(e,i){var o=i.slots,r=i.emit,g=j("tag",e),u=g.prefixCls,l=function(C){var v=e.checked;r("update:checked",!v),r("change",!v),r("click",C)},p=m(function(){var n;return F(u.value,(n={},d(n,"".concat(u.value,"-checkable"),!0),d(n,"".concat(u.value,"-checkable-checked"),e.checked),n))});return function(){var n;return s("span",{class:p.value,onClick:l},[(n=o.default)===null||n===void 0?void 0:n.call(o)])}}});const h=K;var L=new RegExp("^(".concat(V.join("|"),")(-inverse)?$")),Q=new RegExp("^(".concat(q.join("|"),")$")),X=function(){return{prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:N.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},"onUpdate:visible":Function,icon:N.any}},f=S({compatConfig:{MODE:3},name:"ATag",props:X(),slots:["closeIcon","icon"],setup:function(e,i){var o=i.slots,r=i.emit,g=i.attrs,u=j("tag",e),l=u.prefixCls,p=u.direction,n=z(!0);G(function(){e.visible!==void 0&&(n.value=e.visible)});var C=function(t){t.stopPropagation(),r("update:visible",!1),r("close",t),!t.defaultPrevented&&e.visible===void 0&&(n.value=!1)},v=m(function(){var a=e.color;return a?L.test(a)||Q.test(a):!1}),E=m(function(){var a;return F(l.value,(a={},d(a,"".concat(l.value,"-").concat(e.color),v.value),d(a,"".concat(l.value,"-has-color"),e.color&&!v.value),d(a,"".concat(l.value,"-hidden"),!n.value),d(a,"".concat(l.value,"-rtl"),p.value==="rtl"),a))});return function(){var a,t,k,b=e.icon,R=b===void 0?(a=o.icon)===null||a===void 0?void 0:a.call(o):b,y=e.color,P=e.closeIcon,T=P===void 0?(t=o.closeIcon)===null||t===void 0?void 0:t.call(o):P,I=e.closable,w=I===void 0?!1:I,B=function(){return w?T?s("span",{class:"".concat(l.value,"-close-icon"),onClick:C},[T]):s(M,{class:"".concat(l.value,"-close-icon"),onClick:C},null):null},D={backgroundColor:y&&!v.value?y:void 0},x=R||null,$=(k=o.default)===null||k===void 0?void 0:k.call(o),O=x?s(H,null,[x,s("span",null,[$])]):$,W="onClick"in g,_=s("span",{class:E.value,style:D},[O,B()]);return W?s(U,null,{default:function(){return[_]}}):_}}});f.CheckableTag=h;f.install=function(c){return c.component(f.name,f),c.component(h.name,h),c};const ne=f;export{h as C,ne as T};