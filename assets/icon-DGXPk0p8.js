import{x as B,X as I,k as z,F as P,u as j}from"./index-BiWYdtHZ.js";/**
 * @license lucide-preact v1.57.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=(...t)=>t.filter((e,s,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===s).join(" ").trim();/**
 * @license lucide-preact v1.57.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=t=>t?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-preact v1.57.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function q(t,e,s=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:X(t),size:24,node:e,...s.length>0?{aliases:s}:{}}}/**
 * @license lucide-preact v1.57.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=t=>{let e="",s=!1;for(const o of t){if(o==="-"||o==="_"||o<=" "){s=e.length>0;continue}e.length===0?e+=o.toLowerCase():e+=s?o.toUpperCase():o,s=!1}return e};/**
 * @license lucide-preact v1.57.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=t=>{const e=F(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-preact v1.57.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-preact v1.57.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function y(t){return t!=null}function U(t,e={}){const s=e.attributeNames??{},o=n=>s[n]??n,c=t.size??t.width??i.width,u=t.size??t.height??i.height,k=t.aliases?.filter(n=>typeof n=="string"&&n.trim()!=="").map(n=>`lucide-${n}`)??[],r=[...t.name?[`lucide-${t.name}`]:[],...k],l=e.className?.split(" ").filter(Boolean)??[],f=e.includeDefaultClasses===!1?b(...l):b("lucide",...r,...l),C=e.absoluteStrokeWidth?Number(e.strokeWidth??i["stroke-width"])*Number(t.size??t.width??i.width)/Number(e.size??e.width??i.width):e.strokeWidth??i["stroke-width"];return["svg",{...Object.entries(i).reduce((n,[a,d])=>(n[o(a)]=d,n),{}),..."color"in e&&e.color&&{[o("stroke")]:e.color},..."size"in e&&y(e.size)&&{[o("width")]:e.size,[o("height")]:e.size},..."width"in e&&y(e.width)&&{[o("width")]:e.width},..."height"in e&&y(e.height)&&{[o("height")]:e.height},[o("stroke-width")]:C,...f&&{[o("class")]:f},[o("viewBox")]:`0 0 ${c} ${u}`,...e.hasA11yProp===!1?{[o("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(n=>{const[a,d,w]=n,g=e.nonScalingStroke?{[o("vector-effect")]:"non-scaling-stroke",...d}:d;return w?[a,g,w]:[a,g]})]}/**
 * @license lucide-preact v1.57.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-preact v1.57.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=I({size:24,color:"currentColor",strokeWidth:2,absoluteStrokeWidth:!1,nonScalingStroke:!1,class:""}),K=()=>B(H);/**
 * @license lucide-preact v1.57.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=({color:t,size:e,width:s,height:o,strokeWidth:c,absoluteStrokeWidth:u,nonScalingStroke:k,children:r,iconNode:l=[],icon:f={node:l,aliases:[],size:24},class:C="",...x})=>{const{size:n=24,strokeWidth:a=2,absoluteStrokeWidth:d=!1,nonScalingStroke:w=!1,color:g="currentColor",class:_=""}=K()??{},[A,$,M=[]]=U(f,{color:t??g,width:s??e??n,height:o??e??n,strokeWidth:c??a,absoluteStrokeWidth:u??d,nonScalingStroke:k??w,className:b(_,C),hasA11yProp:!!r||E(x),attributes:x});return z(A,{...$},[...M.map(([L,D])=>z(L,D)),...P(r)])};/**
 * @license lucide-preact v1.57.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function h(t,e,s=[]){const o=typeof t=="string"?q(t,e,s):t,c=({class:u="",className:k="",children:r,...l})=>z(V,{...l,icon:o,class:b(u,k)},r);return o.name&&(c.displayName=T(o.name)),c}/**
 * @license lucide-preact v1.57.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};m.node;const G=h(m);/**
 * @license lucide-preact v1.57.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};S.node;const J=h(S);/**
 * @license lucide-preact v1.57.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W={name:"minus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}]]};W.node;const O=h(W);/**
 * @license lucide-preact v1.57.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};p.node;const Q=h(p);/**
 * @license lucide-preact v1.57.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v={name:"triangle-alert",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle"]};v.node;const R=h(v);/**
 * @license lucide-preact v1.57.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};N.node;const Y=h(N);function ee({i:t,lop:e}){return j(t,{class:"ds-icon"+(e?" "+e:""),"aria-hidden":"true",focusable:"false"})}export{G as C,ee as I,J as L,O as M,Q as P,R as T,Y as X,h as c};
