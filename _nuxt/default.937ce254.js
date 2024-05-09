import{_ as f}from"./nuxt-link.d68981b8.js";import{f as h,E as k,v as p,o as i,c as u,a as e,t as d,u as a,b as s,w as o,d as n,G as m,_ as g,H as v}from"./entry.130f2c2e.js";import{u as b}from"./config.036deaa9.js";const y={class:"text-md flex justify-between p-4 sm:text-lg"},$={class:"flex gap-4"},w=h({__name:"AppHeader",setup(l){const c=b(),t=k(),r=p(()=>({"hover:text-sky-500":!0,"border-b-2 border-sky-500":t.path==="/"})),_=p(()=>({"hover:text-sky-500":!0,"border-b-2 border-sky-500":t.path==="/experience"}));return(U,q)=>{const x=f;return i(),u("header",y,[e("h2",null,d(a(c).appName),1),e("nav",$,[s(x,{to:"/",class:m(a(r))},{default:o(()=>[n("About")]),_:1},8,["class"]),s(x,{to:"/experience",class:m(a(_))},{default:o(()=>[n("Experience")]),_:1},8,["class"])])])}}}),A=""+globalThis.__publicAssetsURL("me_blur.png"),N={class:"mt-8 flex justify-center gap-8 p-4"},C=e("img",{src:A,alt:"a picture of me",class:"h-48 w-48 rounded-full border-2 border-white sm:h-64 sm:w-64 sm:border-4"},null,-1),B={class:"flex flex-col items-center justify-center"},H={class:"text-xl sm:text-3xl"},j={class:"text-md sm:text-2xl"},E=h({__name:"AvatarBanner",setup(l){const{myName:c,currentPosition:t}=b();return(r,_)=>(i(),u("section",N,[C,e("div",B,[e("h3",H,d(a(c)),1),e("h4",j,d(a(t)),1)])]))}}),L={},z={class:"flex flex-col p-4 text-zinc-400"},R={class:"flex flex-col sm:grid-cols-2 sm:flex-row sm:justify-evenly"},V={role:"navigation",class:"flex flex-col gap-2 pt-2 text-center sm:text-right"},D={role:"navigation",class:"flex flex-col gap-2 pt-2 text-center sm:text-left"},F=e("p",{class:"pt-4 text-center text-sm"},"2023 © Hoang Nguyen",-1);function G(l,c){const t=f;return i(),u("footer",z,[e("div",R,[e("ul",V,[e("li",null,[s(t,{to:"/",class:"hover:text-sky-500"},{default:o(()=>[n("About Me")]),_:1})]),e("li",null,[s(t,{to:"/experience",class:"hover:text-sky-500"},{default:o(()=>[n("Experience")]),_:1})])]),e("ul",D,[e("li",null,[s(t,{to:"https://www.linkedin.com/in/hoangn/",target:"_blank",class:"hover:text-sky-500"},{default:o(()=>[n("LinkedIn")]),_:1})]),e("li",null,[s(t,{to:"https://github.com/mmxcrono",target:"_blank",class:"hover:text-sky-500"},{default:o(()=>[n("GitHub")]),_:1})]),e("li",null,[s(t,{to:"resume.pdf",target:"_blank",class:"hover:text-sky-500"},{default:o(()=>[n("Resume PDF")]),_:1})])])]),F])}const P=g(L,[["render",G]]),S={},T={class:"min-h-screen bg-gradient-to-t from-teal-900 to-indigo-900 text-zinc-100"},I={class:"mx-auto max-w-5xl"};function M(l,c){const t=w,r=E,_=P;return i(),u("div",T,[e("div",I,[s(t),s(r),v(l.$slots,"default"),s(_)])])}const Q=g(S,[["render",M]]);export{Q as default};
