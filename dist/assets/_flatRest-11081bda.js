import{f as b,j as h}from"./_baseClone-d8c30708.js";import{a5 as u,S as f,c as g}from"./plugin-vue_export-helper-49eba6ff.js";function v(n){return n}function S(n,e,t){switch(t.length){case 0:return n.call(e);case 1:return n.call(e,t[0]);case 2:return n.call(e,t[0],t[1]);case 3:return n.call(e,t[0],t[1],t[2])}return n.apply(e,t)}var d=800,y=16,p=Date.now;function w(n){var e=0,t=0;return function(){var a=p(),r=y-(a-t);if(t=a,r>0){if(++e>=d)return arguments[0]}else e=0;return n.apply(void 0,arguments)}}function T(n){return function(){return n}}var x=u?function(n,e){return u(n,"toString",{configurable:!0,enumerable:!1,value:T(e),writable:!0})}:v;const O=x;var C=w(O);const N=C;var s=Math.max;function P(n,e,t){return e=s(e===void 0?n.length-1:e,0),function(){for(var a=arguments,r=-1,o=s(a.length-e,0),l=Array(o);++r<o;)l[r]=a[e+r];r=-1;for(var i=Array(e+1);++r<e;)i[r]=a[r];return i[e]=t(l),S(n,this,i)}}var c=f?f.isConcatSpreadable:void 0;function $(n){return g(n)||b(n)||!!(c&&n&&n[c])}function m(n,e,t,a,r){var o=-1,l=n.length;for(t||(t=$),r||(r=[]);++o<l;){var i=n[o];e>0&&t(i)?e>1?m(i,e-1,t,a,r):h(r,i):a||(r[r.length]=i)}return r}function A(n){var e=n==null?0:n.length;return e?m(n,1):[]}function M(n){return N(P(n,void 0,A),n+"")}export{A as a,m as b,M as f,v as i,P as o,N as s};