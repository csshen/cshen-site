(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{201:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return l});var n=a(0),r=a.n(n),o=a(219),i=a(220);var c=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return r.a.createElement(o.a,{location:this.props.location,title:t},r.a.createElement(i.a,{title:"404: Not Found"}),r.a.createElement("h1",null,"Not Found"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},n}(r.a.Component);e.default=c;var l="1097489062"},212:function(t,e,a){"use strict";var n=a(0),r=a.n(n),o=a(66),i=a.n(o);a.d(e,"a",function(){return i.a});a(213),a(9).default.enqueue,r.a.createContext({})},213:function(t,e,a){var n;t.exports=(n=a(218))&&n.default||n},215:function(t,e,a){"use strict";a.d(e,"a",function(){return o}),a.d(e,"b",function(){return i});var n=a(234),r=new(a.n(n).a)({headerFontFamily:["-apple-system","BlinkMacSystemFont","Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue","Helvetica","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"],bodyFontFamily:["-apple-system","BlinkMacSystemFont","Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue","Helvetica","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"]});var o=r.rhythm,i=r.scale},218:function(t,e,a){"use strict";a.r(e);a(18);var n=a(0),r=a.n(n),o=a(96);e.default=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(o.a,Object.assign({location:e,pageResources:a},a.json)):null}},219:function(t,e,a){"use strict";a(40),a(18);var n=a(0),r=a.n(n),o=a(212),i=a(215),c=a(460),l=a(459),s=a(233),u=a(458);a(197);c.a.Title;var p=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t,e=this.props,a=e.location,n=e.title,c=e.children;if("/"===a.pathname)t=r.a.createElement("h1",{style:Object.assign({},Object(i.b)(1.5),{marginBottom:Object(i.a)(1.5),marginTop:0})},r.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n));else{var p=a.pathname.split("/"),m=(p=p.filter(function(t){return""!==t})).map(function(t,e){var a="/"+t,n=t.split("-").map(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}).join(" ");return e===p.length-1?r.a.createElement(l.a.Item,null,n):r.a.createElement(l.a.Item,null,r.a.createElement(o.a,{to:a},n))});t=r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement(l.a.Item,null,r.a.createElement(o.a,{to:"/"},r.a.createElement(s.a,{type:"home"})," ","Home")),m),r.a.createElement(u.a,null))}return r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(i.a)(24),padding:Object(i.a)(1.5)+" "+Object(i.a)(.75)}},r.a.createElement("header",null,t),r.a.createElement("main",null,c),r.a.createElement("footer",{style:{textAlign:"center"}},"© ",(new Date).getFullYear()," Christopher Shen"))},n}(n.Component);e.a=p},220:function(t,e,a){"use strict";var n=a(221),r=a(0),o=a.n(r),i=a(237),c=a.n(i);function l(t){var e=t.description,a=t.lang,r=t.meta,i=t.title,l=n.data.site,s=e||l.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},e.a=l},221:function(t){t.exports={data:{site:{siteMetadata:{title:"Chris Shen",description:"A starter blog demonstrating what Gatsby can do.",author:"Chris Shen"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-1e83cb32cbb4139fa41d.js.map