import{_ as l}from"./Button.vue_vue_type_script_setup_true_lang-8439dbb4.js";import{r as h,o as y,a as x,u as v,b as g,c as k,d as w,e as C,f as b,g as s,h as a,w as c,i as o,t as r,j as u}from"./index-ac7403dc.js";const T="/vue3-template/assets/vue-5532db34.svg";function S(){const n=h({x:0,y:0});function e(t){n.x=t.pageX,n.y=t.pageY}return y(()=>{window.addEventListener("click",e)}),x(()=>{window.removeEventListener("click",e)}),n}async function m(n){if(n.status!==200){let e=await n.text();return/json/i.test(n.headers.get("Content-Type")||"")&&(e=JSON.parse(e).error||e),e||(e=n.statusText),Promise.reject(e)}return await n.json()}async function d(n,e,t){const i=await fetch(e,{method:n,body:JSON.stringify(t||{}),headers:new Headers({"Content-Type":"application/json"})});return await m(i)}class P{async delete(e){return await d("DELETE",e)}async put(e,t){return await d("PUT",e,t)}async patch(e,t){return await d("PATCH",e,t)}async post(e,t){return await d("POST",e,t)}async get(e){const t=await fetch(e);return await m(t)}}const E=new P,M={oneSentence:()=>E.get("https://v1.hitokoto.cn?c=i")},j={class:"m-5 space-y-5"},L=s("div",{class:"flex items-center gap-4"},[s("span",null," assets "),s("img",{src:T,alt:"vue"})],-1),N=s("div",{class:"flex items-center gap-4"},[s("span",null," iconify "),s("div",{class:"i-mdi:emoticon-happy-outline hover:i-mdi:emoticon-happy-outline text-3xl text-yellow-500 hover:text-red-500"})],-1),R={class:"flex items-center gap-4"},B={class:"flex items-center gap-4"},q={class:"text-xl font-bold text-green-400"},D={class:"flex items-center gap-4"},H={class:"inline-block border p-4"},O={class:"ml-2 text-lg font-bold text-red-500"},V={class:"ml-2 text-lg font-bold text-blue-500"},U={__name:"Demo",setup(n){const e=v(),t=S(),i=g("君子不器。");async function p(){const _=await M.oneSentence();i.value=_.hitokoto}return k(()=>{p()}),(_,A)=>{const f=w("RouterLink");return C(),b("div",j,[L,N,s("div",R,[a(l,{type:"primary",onClick:p},{default:c(()=>[o(" Fetch API ")]),_:1}),o(" "+r(i.value),1)]),s("div",B,[a(l,{type:"secondary",onClick:u(e).increment},{default:c(()=>[o(" Increase Store Count ")]),_:1},8,["onClick"]),s("span",q,r(u(e).count),1)]),s("div",D,[a(f,{class:"inline-block",to:"/hello"},{default:c(()=>[a(l,{type:"accent"},{default:c(()=>[o(" To Hello Page ")]),_:1})]),_:1}),a(f,{class:"inline-block",to:"/404"},{default:c(()=>[a(l,{type:"error"},{default:c(()=>[o(" To 404 Page ")]),_:1})]),_:1})]),s("div",H,[o(" useMouseClick hook "),s("p",null,[o(" Mouse click x: "),s("span",O,r(u(t).x),1)]),s("p",null,[o(" Mouse click y: "),s("span",V,r(u(t).y),1)])])])}}};export{U as default};
