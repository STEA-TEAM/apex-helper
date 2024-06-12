import{c as $,i as W,e as L,p as F,a as f,h,d as j,l as k,f as A,g as R,w as P,o as N,j as V,n as K,k as U,r as g,m as I,q as z,s as G,t as J,u as X,_ as Y,v as Z,x as ee,y as te,z as O,A as w}from"./index-DCnRgger.js";import{s as oe,g as ne,a as le,b as ie,c as T}from"./scroll-D2Pa0wQw.js";import{Q as D}from"./QResizeObserver-DbD30Cm1.js";import{u as re}from"./use-quasar-dG9N7qxh.js";import{bus as ae}from"./bus-HvrHHNEb.js";const se=$({name:"QPageContainer",setup(t,{slots:m}){const{proxy:{$q:n}}=R(),e=W(k,L);if(e===L)return console.error("QPageContainer needs to be child of QLayout"),L;F(A,!0);const l=f(()=>{const i={};return e.header.space===!0&&(i.paddingTop=`${e.header.size}px`),e.right.space===!0&&(i[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${e.right.size}px`),e.footer.space===!0&&(i.paddingBottom=`${e.footer.size}px`),e.left.space===!0&&(i[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${e.left.size}px`),i});return()=>h("div",{class:"q-page-container",style:l.value},j(m.default))}}),{passive:M}=U,ce=["both","horizontal","vertical"],ue=$({name:"QScrollObserver",props:{axis:{type:String,validator:t=>ce.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:oe},emits:["scroll"],setup(t,{emit:m}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let e=null,l,i;P(()=>t.scrollTarget,()=>{c(),p()});function r(){e!==null&&e();const b=Math.max(0,le(l)),y=ie(l),u={top:b-n.position.top,left:y-n.position.left};if(t.axis==="vertical"&&u.top===0||t.axis==="horizontal"&&u.left===0)return;const _=Math.abs(u.top)>=Math.abs(u.left)?u.top<0?"up":"down":u.left<0?"left":"right";n.position={top:b,left:y},n.directionChanged=n.direction!==_,n.delta=u,n.directionChanged===!0&&(n.direction=_,n.inflectionPoint=n.position),m("scroll",{...n})}function p(){l=ne(i,t.scrollTarget),l.addEventListener("scroll",a,M),a(!0)}function c(){l!==void 0&&(l.removeEventListener("scroll",a,M),l=void 0)}function a(b){if(b===!0||t.debounce===0||t.debounce==="0")r();else if(e===null){const[y,u]=t.debounce?[setTimeout(r,t.debounce),clearTimeout]:[requestAnimationFrame(r),cancelAnimationFrame];e=()=>{u(y),e=null}}}const{proxy:S}=R();return P(()=>S.$q.lang.rtl,r),N(()=>{i=S.$el.parentNode,p()}),V(()=>{e!==null&&e(),c()}),Object.assign(S,{trigger:a,getPosition:()=>n}),K}}),de=$({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:m,emit:n}){const{proxy:{$q:e}}=R(),l=g(null),i=g(e.screen.height),r=g(t.container===!0?0:e.screen.width),p=g({position:0,direction:"down",inflectionPoint:0}),c=g(0),a=g(I.value===!0?0:T()),S=f(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),b=f(()=>t.container===!1?{minHeight:e.screen.height+"px"}:null),y=f(()=>a.value!==0?{[e.lang.rtl===!0?"left":"right"]:`${a.value}px`}:null),u=f(()=>a.value!==0?{[e.lang.rtl===!0?"right":"left"]:0,[e.lang.rtl===!0?"left":"right"]:`-${a.value}px`,width:`calc(100% + ${a.value}px)`}:null);function _(o){if(t.container===!0||document.qScrollPrevented!==!0){const s={position:o.position.top,direction:o.direction,directionChanged:o.directionChanged,inflectionPoint:o.inflectionPoint.top,delta:o.delta.top};p.value=s,t.onScroll!==void 0&&n("scroll",s)}}function E(o){const{height:s,width:v}=o;let d=!1;i.value!==s&&(d=!0,i.value=s,t.onScrollHeight!==void 0&&n("scrollHeight",s),q()),r.value!==v&&(d=!0,r.value=v),d===!0&&t.onResize!==void 0&&n("resize",o)}function B({height:o}){c.value!==o&&(c.value=o,q())}function q(){if(t.container===!0){const o=i.value>c.value?T():0;a.value!==o&&(a.value=o)}}let x=null;const Q={instances:{},view:f(()=>t.view),isContainer:f(()=>t.container),rootRef:l,height:i,containerHeight:c,scrollbarWidth:a,totalWidth:f(()=>r.value+a.value),rows:f(()=>{const o=t.view.toLowerCase().split(" ");return{top:o[0].split(""),middle:o[1].split(""),bottom:o[2].split("")}}),header:z({size:0,offset:0,space:!1}),right:z({size:300,offset:0,space:!1}),footer:z({size:0,offset:0,space:!1}),left:z({size:300,offset:0,space:!1}),scroll:p,animate(){x!==null?clearTimeout(x):document.body.classList.add("q-body--layout-animate"),x=setTimeout(()=>{x=null,document.body.classList.remove("q-body--layout-animate")},155)},update(o,s,v){Q[o][s]=v}};if(F(k,Q),T()>0){let o=function(){d=null,C.classList.remove("hide-scrollbar")},s=function(){if(d===null){if(C.scrollHeight>e.screen.height)return;C.classList.add("hide-scrollbar")}else clearTimeout(d);d=setTimeout(o,300)},v=function(H){d!==null&&H==="remove"&&(clearTimeout(d),o()),window[`${H}EventListener`]("resize",s)},d=null;const C=document.body;P(()=>t.container!==!0?"add":"remove",v),t.container!==!0&&v("add"),G(()=>{v("remove")})}return()=>{const o=J(m.default,[h(ue,{onScroll:_}),h(D,{onResize:E})]),s=h("div",{class:S.value,style:b.value,ref:t.container===!0?void 0:l,tabindex:-1},o);return t.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:l},[h(D,{onResize:B}),h("div",{class:"absolute-full",style:y.value},[h("div",{class:"scroll",style:u.value},[s])])]):s}}}),fe=X({__name:"MainLayout",setup(t,{expose:m}){m();const{screen:n}=re(),e=g(!1),l=g(!1);ae.on("drawer",(r,p)=>{const c=p==="left"?e:l;switch(r){case"open":c.value=!0;break;case"close":c.value=!1;break;case"toggle":c.value=!c.value;break}});const i={screen:n,leftDrawerOpen:e,rightDrawerOpen:l};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}});function me(t,m,n,e,l,i){const r=Z("router-view");return ee(),te(de,{view:"hHh LpR lFf"},{default:O(()=>[w(r,{mobile:e.screen.lt.md,name:"header"},null,8,["mobile"]),w(r,{mobile:e.screen.lt.md,"model-value":e.leftDrawerOpen,name:"leftDrawer"},null,8,["mobile","model-value"]),w(se,{style:{height:"100vh"}},{default:O(()=>[w(r)]),_:1}),w(r,{mobile:e.screen.lt.md,"model-value":e.rightDrawerOpen,name:"rightDrawer"},null,8,["mobile","model-value"]),w(r,{mobile:e.screen.lt.md,name:"footer"},null,8,["mobile"])]),_:1})}const ye=Y(fe,[["render",me],["__file","MainLayout.vue"]]);export{ye as default};