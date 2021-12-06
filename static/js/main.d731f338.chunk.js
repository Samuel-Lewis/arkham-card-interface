(this["webpackJsonparkham-card-interface"]=this["webpackJsonparkham-card-interface"]||[]).push([[0],{130:function(e,t,c){},217:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(24),s=c.n(r),i=c(44),o=(c(130),c(121)),j=c(13),l=c(31),d=c(220),b=c(222),h=c(219),O=c(7),u="https://arkhamdb.com",x=function(e){var t=e.cardId,c=a.a.useState({}),r=Object(l.a)(c,2),s=r[0],i=r[1],o="".concat(u,"/api/public/card/").concat(t);return Object(n.useEffect)((function(){t&&(console.log("fetch"),fetch(o).then((function(e){return e.json()})).then(i).then((function(e){return console.log(e)})))}),[t,o]),Object(O.jsx)("div",{style:{width:"420px",height:"420px"},children:s&&s.imagesrc&&Object(O.jsx)("img",{alt:s.name,src:"".concat(u).concat(s.imagesrc)})})},m=c(221),f=c(86),g=c(112),p=c.n(g),v=c(223),k=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useCallback)((function(e){a(e.target.value)}),[a]),s=Object(n.useCallback)((function(){var e,t=null===(e=document.getElementById("qr-code"))||void 0===e?void 0:e.innerHTML;if(t){var c=new Blob([t.toString()]),n=document.createElement("a");n.download="w3c.png",n.href=window.URL.createObjectURL(c),n.click(),n.remove()}}),[]);return Object(O.jsxs)(b.b,{direction:"vertical",align:"center",style:{width:"100%"},children:[Object(O.jsxs)(b.b,{children:[Object(O.jsx)(m.a,{onChange:r,placeholder:"Card ID"}),Object(O.jsx)(f.a,{title:"Download SVG",children:Object(O.jsx)(o.a,{icon:Object(O.jsx)(v.a,{}),onClick:s})})]}),Object(O.jsx)(p.a,{id:"qr-code",value:c,size:128})]})},w=c(116),y=c.n(w),S=function(e){var t=e.onScan,c=e.onError,a=e.visible,r=Object(n.useCallback)((function(e){t&&t(e)}),[t]),s=Object(n.useCallback)((function(e){e&&c&&c(e)}),[c]),i=null===a||void 0===a||a?"100%":0;return Object(O.jsx)(y.a,{delay:300,onError:s,onScan:r,style:{width:i}})},C=d.a.Title,I=d.a.Paragraph,E=d.a.Link,R=function(){var e=a.a.useState(""),t=Object(l.a)(e,2),c=t[0],r=t[1],s=Object(n.useCallback)((function(e){r(e)}),[]),o=Object(n.useCallback)((function(e){console.error(e),r(e)}),[]);return Object(O.jsxs)("div",{className:"home-page",children:[Object(O.jsx)(C,{children:"Arkham Horror Card Interface"}),Object(O.jsxs)(b.b,{align:"start",wrap:!0,children:[Object(O.jsx)(h.a,{title:"Card",children:Object(O.jsx)(x,{cardId:c})}),Object(O.jsxs)(h.a,{title:"QR Scanner",style:{width:300},children:[Object(O.jsx)(S,{onScan:s,onError:o}),Object(O.jsx)("pre",{children:c})]}),Object(O.jsx)(h.a,{title:"QR Generator",style:{width:300},children:Object(O.jsx)(k,{})}),Object(O.jsxs)(h.a,{title:"Info",children:[Object(O.jsxs)(I,{children:["This is a tool designed for use in streaming"," ",Object(O.jsx)(E,{href:"https://www.fantasyflightgames.com/en/products/arkham-horror-the-card-game/",children:"Arkham Horror: The Card Game"}),". It allows you to create QR codes for you cards (corresponding to the card ID), and then scan the code to get a digital image."]}),Object(O.jsxs)(I,{children:["Use this page for testing your setup, camera alignment, and for generating QR codes. Use ",Object(O.jsx)(i.b,{to:"/stream",children:"/stream"})," as your OBS browser source. The card display area is ",Object(O.jsx)("b",{children:"400px"})," by"," ",Object(O.jsx)("b",{children:"400px"}),"."]})]})]})]})},T=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useCallback)((function(e){a(e)}),[a]);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x,{cardId:c}),Object(O.jsx)(S,{onScan:r,visible:!1})]})};var B=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)("div",{className:"nav-links",children:[Object(O.jsx)(o.a,{type:"link",children:Object(O.jsx)(i.b,{to:"/",children:"Home"})}),"|",Object(O.jsx)(o.a,{type:"link",children:Object(O.jsx)(i.b,{to:"/stream",children:"Stream"})})]}),Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{path:"/",element:Object(O.jsx)(R,{})}),Object(O.jsx)(j.a,{path:"/stream",element:Object(O.jsx)(T,{})})]})]})};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(i.a,{children:Object(O.jsx)(B,{})})}),document.getElementById("root"))}},[[217,1,2]]]);
//# sourceMappingURL=main.d731f338.chunk.js.map