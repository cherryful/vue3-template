import{r as _,o as m,a as w,u as b,b as g,c as v,d as y,e as x,f as k,g as n,h as c,t as i,i as o,j as C,w as S}from"./index-17c6866d.js";function T(){const s=_({x:0,y:0});function e(t){s.x=t.pageX,s.y=t.pageY}return m(()=>{window.addEventListener("click",e)}),w(()=>{window.removeEventListener("click",e)}),s}async function h(s){if(s.status!==200){let e=await s.text();return/json/i.test(s.headers.get("Content-Type")||"")&&(e=JSON.parse(e).error||e),e||(e=s.statusText),Promise.reject(e)}return await s.json()}async function r(s,e,t){const a=await fetch(e,{method:s,body:JSON.stringify(t||{}),headers:new Headers({"Content-Type":"application/json"})});return await h(a)}class j{async delete(e){return await r("DELETE",e)}async put(e,t){return await r("PUT",e,t)}async patch(e,t){return await r("PATCH",e,t)}async post(e,t){return await r("POST",e,t)}async get(e){const t=await fetch(e);return await h(t)}}const E=new j,M={oneSentence:()=>E.get("https://v1.hitokoto.cn?c=i")},P={class:"mx-5"},L={class:"my-5 space-y-5"},N=n("div",{class:"i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy text-3xl"},null,-1),R={class:"text-xl font-bold text-green-400"},B=n("div",{class:"bg-red-500 btn hover:bg-red-600"}," To Hello Page ",-1),q={class:"inline-block border p-4"},D={class:"text-lg font-bold text-red-500"},H={class:"text-lg font-bold text-blue-500"},V={__name:"Demo",setup(s){const e=b(),t=T(),a=g("君子不器。");v(()=>{l()});async function l(){const u=await M.oneSentence();a.value=u.hitokoto}return(u,d)=>{const p=y("RouterLink");return x(),k("div",P,[n("div",L,[N,n("div",null,[n("button",{class:"mr-5 bg-amber-500 btn hover:bg-amber-600",onClick:l}," Fetch API "),c(" "+i(a.value),1)]),n("div",null,[n("div",{class:"mr-5 bg-blue-500 btn hover:bg-blue-600",onClick:d[0]||(d[0]=(...f)=>o(e).increment&&o(e).increment(...f))}," Increase Store Count "),n("span",R,i(o(e).count),1)]),n("div",null,[C(p,{to:"/hello"},{default:S(()=>[B]),_:1})]),n("div",null,[n("div",q,[c(" useMouseClick hook "),n("p",null,[c(" Mouse click x: "),n("span",D,i(o(t).x),1)]),n("p",null,[c(" Mouse click y: "),n("span",H,i(o(t).y),1)])])])])])}}};export{V as default};