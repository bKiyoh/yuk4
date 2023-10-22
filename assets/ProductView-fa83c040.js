import{a as D,n as U,s as S,o as l,e as x,f as b,w as e,k as t,l as m,t as y,F as O,r as B,v as V,u as C,h as F,m as L,i as o,x as G,y as H,d as j,p as z,z as A}from"./index-90e8e7ed.js";const E={class:"text-center"},M=L("br",null,null,-1),T=D({__name:"ProductDialog",props:{isOpening:{type:Boolean},product:null,productImage:null},emits:["close"],setup(c,{emit:i}){const n=c,d=u=>{s.isOpening=u,i("close",u)},s=U({isOpening:!1});return S(()=>n.isOpening,()=>s.isOpening=n.isOpening),(u,a)=>{const g=o("v-card-title"),P=o("v-img"),w=o("v-card-subtitle"),v=o("v-chip"),f=o("v-chip-group"),h=o("v-card-text"),p=o("v-btn"),_=o("v-tooltip"),k=o("v-spacer"),I=o("v-card-actions"),$=o("v-card"),N=o("v-dialog");return l(),x("div",E,[n.isOpening?(l(),b(N,{key:0,modelValue:s.isOpening,"onUpdate:modelValue":a[1]||(a[1]=r=>s.isOpening=r),width:"auto",persistent:""},{default:e(()=>[t($,{"max-width":"500"},{default:e(()=>[t(g,null,{default:e(()=>[m(y(c.product.title),1)]),_:1}),t(P,{src:n.productImage,"max-height":"400",cover:""},null,8,["src"]),t(w,null,{default:e(()=>[m(" CreateDate："+y(c.product.createDate),1)]),_:1}),t(h,null,{default:e(()=>[m(y(c.product.description)+" ",1),M,t(f,null,{default:e(()=>[(l(!0),x(O,null,B(c.product.technologyUsed,r=>(l(),b(v,{key:r,"x-small":""},{default:e(()=>[m(y(r),1)]),_:2},1024))),128))]),_:1})]),_:1}),t(I,null,{default:e(()=>[t(_,{location:"bottom",text:"GitHubで見る"},{activator:e(({props:r})=>[t(p,V(r,{icon:C(G),href:c.product.gitHubSrc,target:"_blank",rel:"noopener"}),null,16,["icon","href"])]),_:1}),t(_,{location:"bottom",text:`${c.product.pageUrl}を見る`},{activator:e(({props:r})=>[t(p,V(r,{icon:C(H),href:c.product.pageUrl,target:"_blank",rel:"noopener"}),null,16,["icon","href"])]),_:1},8,["text"]),t(k),t(p,{color:"primary",onClick:a[0]||(a[0]=r=>d(!1))},{default:e(()=>[m("Close")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])):F("",!0)])}}}),W="/yuk4/assets/product1-49c7cea9.png",q="/yuk4/assets/product2-8934bac0.png",J="/yuk4/assets/product3-c38c7b48.png",K="/yuk4/assets/product4-8520dec5.png",Q="/yuk4/assets/product5-9f7d268d.png",R="/yuk4/assets/product6-8237e9e2.png",X="/yuk4/assets/product7-c7300ed1.png",Y=j("productImages",()=>({imgUrls:[W,q,J,K,Q,R,X]})),Z=D({__name:"ProductPage",setup(c){const i=Y().imgUrls,n=U({isDialogOpen:!1,productList:new Array,selectedProduct:{},selectedProductImage:""}),d=(a,g)=>{n.selectedProduct=a,n.selectedProductImage=i[g],n.isDialogOpen=!0},s=a=>{n.isDialogOpen=a},u=async()=>{n.productList=A};return z(()=>u()),(a,g)=>{const P=o("v-img"),w=o("v-card"),v=o("v-col"),f=o("v-row"),h=o("v-container"),p=o("v-sheet");return l(),x(O,null,[t(h,null,{default:e(()=>[t(f,null,{default:e(()=>[(l(!0),x(O,null,B(n.productList,(_,k)=>(l(),b(v,{key:_.productId,cols:"12",sm:"6",md:"4"},{default:e(()=>[t(p,{color:"grey-lighten-3"},{default:e(()=>[t(h,null,{default:e(()=>[t(f,null,{default:e(()=>[t(v,{class:"ma-8"},{default:e(()=>[t(w,{elevation:"0",onClick:I=>d(_,k)},{default:e(()=>[t(P,{src:C(i)[k],height:"230","aspect-ratio":"16/9",cover:""},null,8,["src"])]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(T,{"is-opening":n.isDialogOpen,product:n.selectedProduct,"product-image":n.selectedProductImage,onClose:s},null,8,["is-opening","product","product-image"])],64)}}}),tt=L("h1",null,"Product page",-1),ot=D({__name:"ProductView",setup(c){return(i,n)=>{const d=o("v-col"),s=o("v-row"),u=o("v-container");return l(),b(u,null,{default:e(()=>[t(s,{justify:"center"},{default:e(()=>[t(d,{cols:"auto"},{default:e(()=>[tt]),_:1})]),_:1}),t(s,null,{default:e(()=>[t(d,null,{default:e(()=>[t(Z)]),_:1})]),_:1})]),_:1})}}});export{ot as default};