import{d as U,a as S,o as a,c as r,b as m,w as t,F as b,r as h,e as u,f as l,g as V,h as n,u as x,i as v,t as e,j as L,k as F,l as N,m as W}from"./index-aae18fef.js";const j="/s3n/assets/IMG_miniIcon-ee8cad60.png",$=U("calculateDuration",()=>{const D=(y,d)=>{const i=new Date(`${y}/01`),c=new Date(`${d}/01`),p=c.getFullYear()-i.getFullYear(),f=c.getMonth()-i.getMonth();let g=p,k=f;return f<0&&(g--,k+=12),{years:g,months:k}};return{calculateDuration:D,dateRange:(y,d)=>{const i=D(y,d).years,c=D(y,d).months;return`${i}年${c}ヶ月`}}}),A={class:"me-1"},Y={key:0},T={key:1},E={key:2},G={key:3},P={key:4},q={class:"me-1"},H={key:0},J={key:1},K={key:2},Q={key:3},X={key:4},Z=S({__name:"CareerCard",props:{careerList:null},setup(D){const _=D;return(y,d)=>{var R,I;const i=l("v-avatar"),c=l("v-card-title"),p=l("v-card-subtitle"),f=l("v-card-item"),g=l("v-card-text"),k=l("v-divider"),w=l("v-card"),C=l("v-timeline-item"),z=l("v-timeline"),B=l("v-col"),M=l("v-row"),O=l("v-container");return a(),r(b,null,[(R=y.$vuetify.display)!=null&&R.mdAndUp?(a(),m(z,{key:0,side:"end",align:"start"},{default:t(()=>[(a(!0),r(b,null,h(_.careerList,s=>(a(),m(C,{size:"large",key:s.careerId},V({icon:t(()=>[n(i,{image:x(j)},null,8,["image"])]),default:t(()=>[n(w,null,{default:t(()=>[n(f,null,{default:t(()=>[n(c,null,{default:t(()=>[v(e(s.company),1)]),_:2},1024),n(p,null,{default:t(()=>[L("span",A,e(s.department)+e(s.position),1)]),_:2},1024)]),_:2},1024),n(g,null,{default:t(()=>[v(e(s.responsibilities),1)]),_:2},1024),s.achievements.length>0?(a(),m(k,{key:0,class:"mx-4 mb-1"})):u("",!0),(a(!0),r(b,null,h(s.achievements,o=>(a(),m(f,{key:o.description},{default:t(()=>[n(c,null,{default:t(()=>[v(e(o.title),1)]),_:2},1024),n(g,null,{default:t(()=>[n(p,null,{default:t(()=>[v(e(o.from)+" - "+e(o.to),1)]),_:2},1024),o.description?(a(),r("p",Y,e(o.description),1)):u("",!0),o.responsibility?(a(),r("p",T,"担当 ："+e(o.responsibility),1)):u("",!0),o.technologiesUsed?(a(),r("p",E,"使用技術："+e(o.technologiesUsed),1)):u("",!0),o.scopeOfWork?(a(),r("p",G,"作業範囲："+e(o.scopeOfWork),1)):u("",!0),o.teamSize?(a(),r("p",P,"参画人数："+e(o.teamSize)+"人",1)):u("",!0)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},[s.startDate||s.endDate?{name:"opposite",fn:t(()=>[L("p",null,e(s.startDate)+" - "+e(s.endDate),1),L("p",null,e(x($)().dateRange(s.startDate,s.endDate)),1)]),key:"0"}:void 0]),1024))),128))]),_:1})):u("",!0),(I=y.$vuetify.display)!=null&&I.smAndDown?(a(),m(O,{key:1},{default:t(()=>[(a(!0),r(b,null,h(_.careerList,s=>(a(),m(M,{key:s.careerId},{default:t(()=>[n(B,null,{default:t(()=>[n(w,null,{default:t(()=>[n(f,null,{default:t(()=>[n(c,null,{default:t(()=>[v(e(s.company),1)]),_:2},1024),s.startDate||s.endDate?(a(),m(p,{key:0,class:"me-1"},{default:t(()=>[L("p",null,e(s.startDate)+" - "+e(s.endDate)+" ("+e(x($)().dateRange(s.startDate,s.endDate))+") ",1)]),_:2},1024)):u("",!0),n(p,null,{default:t(()=>[L("span",q,e(s.department)+e(s.position),1)]),_:2},1024)]),_:2},1024),n(g,null,{default:t(()=>[v(e(s.responsibilities),1)]),_:2},1024),s.achievements.length>0?(a(),m(k,{key:0,class:"mx-4 mb-1"})):u("",!0),(a(!0),r(b,null,h(s.achievements,o=>(a(),m(f,{key:o.description},{default:t(()=>[n(c,null,{default:t(()=>[v(e(o.title),1)]),_:2},1024),n(g,null,{default:t(()=>[n(p,null,{default:t(()=>[v(e(o.from)+" - "+e(o.to),1)]),_:2},1024),o.description?(a(),r("p",H,e(o.description),1)):u("",!0),o.responsibility?(a(),r("p",J,"担当 ："+e(o.responsibility),1)):u("",!0),o.technologiesUsed?(a(),r("p",K," 使用技術："+e(o.technologiesUsed),1)):u("",!0),o.scopeOfWork?(a(),r("p",Q,"作業範囲："+e(o.scopeOfWork),1)):u("",!0),o.teamSize?(a(),r("p",X,"参画人数："+e(o.teamSize)+"人",1)):u("",!0)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):u("",!0)],64)}}}),tt=S({__name:"CareerPage",setup(D){const _=F({careerList:new Array,occupationList:{}}),y=async()=>{var d,i,c,p,f;_.careerList=W,_.occupationList={occupation1:`法人営業(${$().dateRange((d=_.careerList[1])==null?void 0:d.startDate,(i=_.careerList[1])==null?void 0:i.endDate)})`,occupation2:`販売員(${$().dateRange((c=_.careerList[2])==null?void 0:c.startDate,(p=_.careerList[2])==null?void 0:p.endDate)})`,occupation3:`ITエンジニア(${$().dateRange((f=_.careerList[3])==null?void 0:f.startDate,new Date().toISOString().slice(0,7).replace(/-/g,"/"))})`}};return N(()=>{y()}),(d,i)=>{const c=l("v-card-subtitle"),p=l("v-card-item"),f=l("v-card-text"),g=l("v-card"),k=l("v-col"),w=l("v-row"),C=l("v-container");return a(),m(C,null,{default:t(()=>[n(w,{align:"center",justify:"center"},{default:t(()=>[n(k,{cols:"12",md:"10"},{default:t(()=>[n(g,null,{default:t(()=>[n(p,null,{default:t(()=>[n(c,null,{default:t(()=>[v("概要 ")]),_:1})]),_:1}),n(f,null,{default:t(()=>[v(e(_.occupationList.occupation1)+"→ "+e(_.occupationList.occupation2)+"→ "+e(_.occupationList.occupation3),1)]),_:1})]),_:1})]),_:1})]),_:1}),n(w,null,{default:t(()=>[n(k,null,{default:t(()=>[n(Z,{"career-list":_.careerList},null,8,["career-list"])]),_:1})]),_:1})]),_:1})}}}),et=L("h1",null,"Career page",-1),ot=S({__name:"CareerView",setup(D){return(_,y)=>{const d=l("v-col"),i=l("v-row"),c=l("v-container");return a(),m(c,null,{default:t(()=>[n(i,{justify:"center"},{default:t(()=>[n(d,{cols:"auto"},{default:t(()=>[et]),_:1})]),_:1}),n(i,null,{default:t(()=>[n(d,null,{default:t(()=>[n(tt)]),_:1})]),_:1})]),_:1})}}});export{ot as default};
