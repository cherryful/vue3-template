import{l as s,e as a,f as n,m as l,w as d,n as i,p as o,q as r}from"./index-7d32acc4.js";const f={class:"flex items-center"},c={name:"UButton",inheritAttrs:!1},y=s({...c,props:{as:{default:"button"},type:{default:"default"},size:{default:"md"},disabled:{type:Boolean,default:!1}},setup(e){return(t,u)=>(a(),n("div",f,[(a(),l(r(e.as),o(t.$attrs,{type:"button",disabled:e.disabled,"aria-disabled":e.disabled,class:["inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md font-sans text-xs font-semibold leading-4 shadow-sm disabled:cursor-not-allowed disabled:opacity-30 focus:outline-none focus:ring-2 focus:ring-offset-2",[e.type==="default"?"text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-gray-500":`text-white bg-${e.type}-500 hover:bg-${e.type}-600 focus:ring-${e.type}-500`,{"px-2 py-1":e.size==="sm","px-3 py-2":e.size==="md","px-4 py-3":e.size==="lg"}]]}),{default:d(()=>[i(t.$slots,"default")]),_:3},16,["disabled","aria-disabled","class"]))]))}});export{y as _};