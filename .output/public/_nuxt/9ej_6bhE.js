import{q as y,r as p,x as g,o as i,c as l,a as c,F as h,z as I,t as v,y as x,_ as f,u as L,b as u,B as w,C as B,p as T,f as R,d as m}from"./D7TokJyV.js";import{_ as $}from"./Bq5zbquC.js";const k={id:"loading-welcome",class:"loading-welcome"},S={class:"loading-text"},b=y({__name:"LoadingWelcome",setup(d){const _=p(""),r=p(0);return g(()=>{const e="welcome";r.value=e.length;for(let o=0;o<e.length;o++)setTimeout(()=>{_.value+=e[o]},40*o);setTimeout(()=>{const o=document.getElementById("loading-welcome");o.parentNode.removeChild(o)},2500)}),(e,o)=>(i(),l("div",k,[c("div",S,[(i(!0),l(h,null,I(x(_),(s,n)=>(i(),l("span",{class:"loading-char",key:n},v(s),1))),128))])]))}}),E=f(b,[["__scopeId","data-v-085c5620"]]),C={class:"portfolio-list-random-wrapper"},F={id:"portfolio-list-random",class:"portfolio-list-random"},N=y({__name:"PortfolioListRandom",setup(d){const _=L("portfolioList"),r=()=>{const o=[..._.value.keys()],s=new Set;for(;s.size<2;){const t=Math.floor(Math.random()*o.length);s.add(t)}const n=[];for(const t of s)n.push(o[t]);return n},e=p(r());return g(()=>{const o=document.getElementById("portfolio-list-random");o&&(o.style.opacity=0,setTimeout(()=>{o.style.opacity=0,setTimeout(()=>{s()},100)},100));const s=()=>{const t=document.getElementById("portfolio-list-random");if(t){const a=r();t.style.opacity=0,t.style.transition="opacity 2s ease-in",setTimeout(()=>{n()},2e3),setTimeout(()=>{e.value=a},2e3)}},n=t=>{const a=document.getElementById("portfolio-list-random");a&&(a.style.opacity=1,a.style.transition="opacity 2s ease-out",setTimeout(()=>{s()},2e3))}}),(o,s)=>{const n=E,t=B;return i(),l("div",C,[u(n),c("div",F,[(i(!0),l(h,null,I(x(e),a=>(i(),w(t,{key:a,id:a},null,8,["id"]))),128))])])}}}),P=f(N,[["__scopeId","data-v-8f5dca71"]]),M={},V=d=>(T("data-v-1a03e338"),d=d(),R(),d),W=V(()=>c("div",{class:"greeting"},[c("p",null,[m(" 当ポートフォリオサイトへ"),c("br",{class:"for-sp"}),m(" ご訪問いただきありがとうございます。"),c("br"),m(" サムネイルをクリックして詳細をご覧ください。"),c("br"),m(" 右上のボタンより一覧表示が可能です。"),c("br")])],-1));function z(d,_){const r=P,e=$;return i(),l("div",null,[W,u(r),u(e)])}const D=f(M,[["render",z],["__scopeId","data-v-1a03e338"]]);export{D as default};
