import{d as C,r as V,k as F,a as r,b as h,c as b,w as e,g as t,i as p,t as f,F as y,e as $,m as P,u as D,l as G,h as B,f as o,n as H,p as j,o as q,q as A}from"./index-4ee28e3a.js";const E={class:"text-center"},I=B("br",null,null,-1),M=C({__name:"ProductDialog",props:{isOpening:{type:Boolean},product:null},emits:["close"],setup(c,{emit:l}){const u=c,_=n=>{a.isOpening=n,l("close",n)},a=V({isOpening:!1});return F(()=>u.isOpening,()=>a.isOpening=u.isOpening),(n,i)=>{const x=o("v-card-title"),k=o("v-img"),m=o("v-card-subtitle"),v=o("v-chip"),g=o("v-chip-group"),w=o("v-card-text"),d=o("v-btn"),O=o("v-tooltip"),L=o("v-spacer"),S=o("v-card-actions"),N=o("v-card"),U=o("v-dialog");return r(),h("div",E,[u.isOpening?(r(),b(U,{key:0,modelValue:a.isOpening,"onUpdate:modelValue":i[1]||(i[1]=s=>a.isOpening=s),width:"auto"},{default:e(()=>[t(N,{"max-width":"500"},{default:e(()=>[t(x,null,{default:e(()=>[p(f(c.product.title),1)]),_:1}),t(k,{src:c.product.imgSrc,height:"auto",cover:""},null,8,["src"]),t(m,null,{default:e(()=>[p(" CreateDate："+f(c.product.createDate),1)]),_:1}),t(w,null,{default:e(()=>[p(f(c.product.description)+" ",1),I,t(g,null,{default:e(()=>[(r(!0),h(y,null,$(c.product.technologyUsed,s=>(r(),b(v,{key:s,"x-small":""},{default:e(()=>[p(f(s),1)]),_:2},1024))),128))]),_:1})]),_:1}),t(S,null,{default:e(()=>[t(O,{location:"bottom",text:"GitHubで見る"},{activator:e(({props:s})=>[t(d,P(s,{icon:D(H),href:c.product.gitHubSrc,target:"_blank",rel:"noopener"}),null,16,["icon","href"])]),_:1}),t(O,{location:"bottom",text:`${c.product.pageUrl}を見る`},{activator:e(({props:s})=>[t(d,P(s,{icon:D(j),href:c.product.pageUrl,target:"_blank",rel:"noopener"}),null,16,["icon","href"])]),_:1},8,["text"]),t(L),t(d,{color:"primary",onClick:i[0]||(i[0]=s=>_(!1))},{default:e(()=>[p("Close")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])):G("",!0)])}}}),T=C({__name:"ProductPage",setup(c){const l=V({isDialogOpen:!1,productList:new Array,selectProduct:{}}),u=n=>{l.selectProduct=n,l.isDialogOpen=!0},_=n=>{l.isDialogOpen=n},a=async()=>{l.productList=A.map(n=>{const i=`${n.imgSrc}`;return{...n,imgSrc:i}})};return q(()=>a()),(n,i)=>{const x=o("v-img"),k=o("v-card"),m=o("v-col"),v=o("v-row"),g=o("v-container"),w=o("v-sheet");return r(),h(y,null,[t(g,null,{default:e(()=>[t(v,null,{default:e(()=>[(r(!0),h(y,null,$(l.productList,d=>(r(),b(m,{key:d.productId,cols:"12",sm:"6",md:"4"},{default:e(()=>[t(w,{color:"grey-lighten-3"},{default:e(()=>[t(g,null,{default:e(()=>[t(v,null,{default:e(()=>[t(m,{class:"ma-8"},{default:e(()=>[t(k,{elevation:"0",onClick:O=>u(d)},{default:e(()=>[t(x,{src:"src/assets/images/product1.png",height:"230","aspect-ratio":"16/9",cover:""})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(M,{"is-opening":l.isDialogOpen,product:l.selectProduct,onClose:_},null,8,["is-opening","product"])],64)}}}),W=B("h1",null,"Product page",-1),J=C({__name:"ProductView",setup(c){return(l,u)=>{const _=o("v-col"),a=o("v-row"),n=o("v-container");return r(),b(n,null,{default:e(()=>[t(a,{justify:"center"},{default:e(()=>[t(_,{cols:"auto"},{default:e(()=>[W]),_:1})]),_:1}),t(a,null,{default:e(()=>[t(_,null,{default:e(()=>[t(T)]),_:1})]),_:1})]),_:1})}}});export{J as default};