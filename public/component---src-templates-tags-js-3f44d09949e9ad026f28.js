(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{MN1z:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return c}));a("HQhv");var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),o=a("RLKe"),i=a("SfDe");t.default=function(e){var t=e.data,a=e.pageContext,l=e.siteTitle,c=e.location,u=t.allMdx.edges,s=a.tag.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ");return n.a.createElement(o.a,{location:c.pathname,title:l},n.a.createElement("h2",null,n.a.createElement(r.a,{to:"/archive"},n.a.createElement("span",{style:{color:"#989EA3"}},"POSTS · ")),n.a.createElement("span",{style:{color:"#4C6085"}},s)),u.map((function(e){var t=e.node,a=t.frontmatter,l=a.title,r=a.date,o=a.description,c=a.github,u=a.demo;return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{title:l,description:o,image:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",date:r,slug:"/posts"+t.fields.slug,github:c,demo:u}),n.a.createElement("br",null))})))};var c="3231985598"},RLKe:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=(a("pJf4"),a("Wbzz")),o=a("jr8U"),i=a.n(o),c=function(e){var t=e.children,a=e.to;e.location;return n.a.createElement(r.a,{to:a,activeClassName:i.a.highlight},t)},u=function(e){var t=e.children,a=e.to;e.location;return n.a.createElement(r.a,{to:a,className:i.a.highlightA,activeClassName:i.a.highlightB},n.a.createElement("strong",null,t))},s=function(e){var t=e.location;return n.a.createElement("div",{className:i.a.sidebar},n.a.createElement("h3",{id:i.a.name},"CHRIS SHEN"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(c,{to:"/index2",location:t},"Recent")),n.a.createElement("hr",null),n.a.createElement("li",null,n.a.createElement(u,{to:"/projects",location:t},"Projects")),n.a.createElement("li",null,n.a.createElement(c,{to:"/travelogue/japan",location:t},"Arcadia")),n.a.createElement("li",null,n.a.createElement(c,{to:"/travelogue/japan",location:t},"Deep Lofi")),n.a.createElement("hr",null),n.a.createElement("li",null,n.a.createElement(u,{to:"/travelogue",location:t},"Travelogue")),n.a.createElement("li",null,n.a.createElement(c,{to:"/travelogue/japan",location:t},"Japan")),n.a.createElement("li",null,n.a.createElement(c,{to:"/travelogue/taiwan",location:t},"Taiwan")),n.a.createElement("li",null,n.a.createElement(c,{to:"/travelogue/korea",location:t},"Korea")),n.a.createElement("li",null,n.a.createElement(c,{to:"/travelogue/switzerland",location:t},"Switzerland")),n.a.createElement("li",null,n.a.createElement(c,{to:"/travelogue/singapore",location:t},"Singapore")),n.a.createElement("hr",null),n.a.createElement("li",null,n.a.createElement(u,{to:"/tags/linguistics",location:t},"Linguistics")),n.a.createElement("li",null,n.a.createElement(c,{to:"/posts/linguistic-phylogenies/",location:t},"Linguistic Phylogenies")),n.a.createElement("li",null,n.a.createElement(r.a,null,"N Gram Classification")),n.a.createElement("li",null,n.a.createElement(r.a,null,"WSB Chatbot")),n.a.createElement("li",null,n.a.createElement(r.a,null,"Aizuchi")),n.a.createElement("hr",null),n.a.createElement("li",null,n.a.createElement("b",null," Design")),n.a.createElement("li",null,n.a.createElement(r.a,null,"Some design project")),n.a.createElement("li",null,n.a.createElement(r.a,null,"Typography")),n.a.createElement("li",null,n.a.createElement(r.a,null,"Vaporwave CSS")),n.a.createElement("hr",null),n.a.createElement("li",null,n.a.createElement(u,{to:"/archive",location:t},"Archive")),n.a.createElement("hr",null),n.a.createElement("li",null,n.a.createElement(r.a,{to:"/about",activeClassName:i.a.highlight},"About")),n.a.createElement("li",null,n.a.createElement(r.a,null,"Contact"))))},m=a("S6vT"),d=a.n(m);t.a=function(e){var t=e.location,a=(e.title,e.children);return n.a.createElement("div",{className:d.a.flex},n.a.createElement(s,{location:t}),n.a.createElement("main",{className:d.a.content},a),n.a.createElement("footer",{className:d.a.footer},"© 2020 Chris Shen · Last Updated: Apr 09 2020"))}},S6vT:function(e,t,a){e.exports={flex:"slayout-module--flex--7Z9ls",content:"slayout-module--content--lCv6d",footer:"slayout-module--footer--3ToAq"}},SfDe:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),o=a("BMrR"),i=a("kPKH"),c=a("WH+K"),u=a.n(c);t.a=function(e){var t=e.title,a=e.description,l=e.excerpt,c=(e.image,e.date),s=e.slug,m=l||"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";return n.a.createElement("div",null,n.a.createElement("div",{className:u.a.header},n.a.createElement(r.a,{to:s,id:u.a.title},t),n.a.createElement("span",{id:u.a.subtitle}," · "+a)),n.a.createElement("p",{id:u.a.body},m),n.a.createElement(o.a,{className:u.a.footer},n.a.createElement(i.a,{xs:12,id:u.a.date},c),n.a.createElement(i.a,{xs:12,style:{textAlign:"right"}},n.a.createElement("a",{className:"lz"},"[Demo]")," ",n.a.createElement("a",{className:"lz"},"[Source]"))))}},"WH+K":function(e,t,a){e.exports={header:"PostCard-module--header--O0Pzm",footer:"PostCard-module--footer--87XAd",title:"PostCard-module--title--1y2z0",body:"PostCard-module--body--3pJ5s",date:"PostCard-module--date--2Ck6e"}},Wbzz:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("+ZDr"),o=a.n(r);a.d(t,"a",(function(){return o.a}));a("lw3w"),a("emEt").default.enqueue,n.a.createContext({})},jr8U:function(e,t,a){e.exports={sidebar:"sidebar-module--sidebar--2v4Jt",name:"sidebar-module--name--fJJmu",highlight:"sidebar-module--highlight--1qSQU",highlightA:"sidebar-module--highlightA--BeOdZ",highlightB:"sidebar-module--highlightB--3TG6G"}},lw3w:function(e,t,a){var l;e.exports=(l=a("rzlk"))&&l.default||l},rzlk:function(e,t,a){"use strict";a.r(t);a("xtjI"),a("4DPX"),a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi");var l=a("q1tI"),n=a.n(l),r=a("IOVJ");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(r.a,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({location:t,pageResources:a},a.json)):null}},yLpj:function(e,t){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(l){"object"==typeof window&&(a=window)}e.exports=a}}]);
//# sourceMappingURL=component---src-templates-tags-js-3f44d09949e9ad026f28.js.map