import{_ as i,e as u,r as x,o as t,a as o,g as r,w as l,d as c,t as a,x as n,b as d}from"./app.2c419e62.js";const k={class:"pager"},m=d("br",null,null,-1),v={key:0},f=d("br",null,null,-1),h={key:0},g=u({name:"Pager",props:{data:{type:Object,required:!0}},setup(e){return(y,_)=>{const s=x("RouterLink");return t(),o("div",k,[e.data.next?(t(),r(s,{key:0,class:"next",to:e.data.next.link},{default:l(()=>[c(a(e.data.next.text),1),m,e.data.next.title?(t(),o("span",v,a(e.data.next.title),1)):n("",!0)]),_:1},8,["to"])):n("",!0),e.data.prev?(t(),r(s,{key:1,class:"previous",to:e.data.prev.link},{default:l(()=>[c(a(e.data.prev.text),1),f,e.data.prev.title?(t(),o("span",h,a(e.data.prev.title),1)):n("",!0)]),_:1},8,["to"])):n("",!0)])}}});var B=i(g,[["__file","Pager.vue"]]);export{B as P};
