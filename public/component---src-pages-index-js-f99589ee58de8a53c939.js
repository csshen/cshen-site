(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{203:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return h});var n=a(0),r=a.n(n),i=a(212),o=a(246),c=a(219),l=a(220),s=a(293),m=a(460),p=a(333),u=a(233);a(197),a(198);m.a.Text;var d=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return r.a.createElement(c.a,{location:this.props.location,title:e},r.a.createElement(l.a,{title:"Home"}),r.a.createElement(o.a,null),r.a.createElement(p.a,{type:"flex",justify:"start",align:"middle"},r.a.createElement(i.a,{to:"/about",className:"links"},"About"),r.a.createElement(u.a,{type:"arrow-left",style:{margin:"1em"}}),"Find out more about me."),r.a.createElement(p.a,{type:"flex",justify:"end",align:"middle"},"Check out some of the things I'm currently working on.",r.a.createElement(u.a,{type:"arrow-right",style:{margin:"1em"}}),r.a.createElement(i.a,{to:"/projects",className:"links"},"Projects")),r.a.createElement(p.a,{type:"flex",justify:"start",align:"middle"},r.a.createElement(i.a,{to:"/posts",className:"links"},"Posts"),r.a.createElement(u.a,{type:"arrow-left",style:{margin:"1em"}}),"Blog posts stuff im doing"),r.a.createElement(s.a,null))},n}(n.Component);t.default=d;var h="1097489062"},212:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(66),o=a.n(i);a.d(t,"a",function(){return o.a});a(213),a(9).default.enqueue,r.a.createContext({})},213:function(e,t,a){var n;e.exports=(n=a(218))&&n.default||n},215:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return o});var n=a(234),r=new(a.n(n).a)({headerFontFamily:["-apple-system","BlinkMacSystemFont","Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue","Helvetica","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"],bodyFontFamily:["-apple-system","BlinkMacSystemFont","Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue","Helvetica","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"]});var i=r.rhythm,o=r.scale},218:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),r=a.n(n),i=a(96);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},219:function(e,t,a){"use strict";a(40),a(18);var n=a(0),r=a.n(n),i=a(212),o=a(215),c=a(460),l=a(459),s=a(233),m=a(458);a(197);c.a.Title;var p=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e,t=this.props,a=t.location,n=t.title,c=t.children;if("/"===a.pathname)e=r.a.createElement("h1",{style:Object.assign({},Object(o.b)(1.5),{marginBottom:Object(o.a)(1.5),marginTop:0})},r.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n));else{var p=a.pathname.split("/"),u=(p=p.filter(function(e){return""!==e})).map(function(e,t){var a="/"+e,n=e.split("-").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join(" ");return t===p.length-1?r.a.createElement(l.a.Item,null,n):r.a.createElement(l.a.Item,null,r.a.createElement(i.a,{to:a},n))});e=r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement(l.a.Item,null,r.a.createElement(i.a,{to:"/"},r.a.createElement(s.a,{type:"home"})," ","Home")),u),r.a.createElement(m.a,null))}return r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(o.a)(24),padding:Object(o.a)(1.5)+" "+Object(o.a)(.75)}},r.a.createElement("header",null,e),r.a.createElement("main",null,c),r.a.createElement("footer",{style:{textAlign:"center"}},"© ",(new Date).getFullYear()," Christopher Shen"))},n}(n.Component);t.a=p},220:function(e,t,a){"use strict";var n=a(221),r=a(0),i=a.n(r),o=a(237),c=a.n(o);function l(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,l=n.data.site,s=t||l.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},221:function(e){e.exports={data:{site:{siteMetadata:{title:"Chris Shen",description:"A starter blog demonstrating what Gatsby can do.",author:"Chris Shen"}}}}},246:function(e,t,a){"use strict";a(226);var n=a(248),r=a(0),i=a.n(r),o=a(249),c=a.n(o),l=a(215);t.a=function(){var e=n.data,t=e.site.siteMetadata,a=t.author;t.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.5)}},i.a.createElement(c.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",null,"Hi! I'm ",i.a.createElement("strong",null,a),". This entire site is currently under construction. Things are a bit messy right now, but I'm working on fixing that. Stay tuned."," "))}},248:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEuElEQVQ4y22T6VOVZRjG36b9H8gW0xJzpkyjyYRcAhcWNQFZOgJyIBSQTWRRJBOYyg0LxNAZiDJN/KAzFH3QbEodFE1TUeAcOIfDWdjhsG+yOb/u94BOWR+ued73mef9vfd139ej1Df1Ud/S/w8N0NA6KBrC5FiHsbSPie5j6xwTTWAVWR7Twz3FaOtFhRqbBdwkwOYBeR4Q8CCtfdAxCG3Tq7VjwiFL5/9pEnPHJEqdtRuDtRdj4zSwSSpsG3YAz5T9Tvz2XXwcEsmh/GLHD6xdD+TD8ceqm3wkRWexU2vtwWDrw9DYj0GgZrGXkLqbJ556DkVRHik2aRdt/dDYJRD7hKyT/5FSY+5EZ+lGL1C9rDb7OKdLL/DkM88za8aLuDkvxGX+mzjPdeLZp58le38+9mFokL6qfVPBqhzVSuXTwC4HtLrB7rCVnp3DgtdncyxOy4nUaE7uiOVMRjyZIX4sWeKOsWVYIJMO66oaVMkPVAnQ/qjCGnMXjT0T5BWV4Oe2lJyYMPK2ajmeHM3XMVpyEzYT4h9Aha4VS/cDjO2j1IsMbfepax2htmUEpVoFymD0Mm0Vau4c5deLN/B2c2e162I83nMmaNkHrFRX79VsDgzk0pU7GKRfNY2D1DQNOVQtz1W2QRUodm091El0DE29WHsnKb9wiU/DNKRs9CPS052DkSEk+a3h82gt+bFaLp8pxSTD0QtE1zyMrmlY4FNgRSdV1ao5bJXIiCzdY9yt1JMbu4mDW0LY7b+OvSEBZGk28FXMJkr2JHK74ibWfnUwo9M9HHPYN4iUGrE7BZQwt0kGO4aw2Ec4X/oTGZo1RK1aRvAyV+LXeJLi8yFlJ7/FLP2rl1tT3zmOUYWJVFid9FKpUqcrwa6VYBvk2pnah6SPI2L9AfvSEglfvojDURHsCw0iI8iL67eqkFZhto9i6RrHZB9zwP8FrBJgjYS6Tq5cndwQtWLV0ukfTpDgvYSUtR58GbyBvCQtV29Wo28blfMD6ER6iZAKM3aolgVYae7hrqWHe0KolgNVtn5RD9YBOHuqRIbiSpjHcqJ8PDi0NZCCAzncMPXKN73cNHZw29TDHbO8W/tkKAMPgVMb91TrkqcGCW25vovPsvLY5ueOxt2VBH9PDscGkJGWzcnf6rnT0E2lbYCK2nbJZRvX6zr409A5BVSlwvQSzD/+MrEzM4fYPd/zSXoRYWJ36/pVJAd4kRYeTExmCYk559HGZ5Fz7BQXq5opr2mRtYlL1c0ot01d3BPL5To7B4vP4bLck7nzXYjYWci77hrefmcp0b5riQvyY6WXBm3Gj6QXlLN0rZaZs52IStlL6TWBCbBcBVaauym7aiKrqALvjdt5aeZsVvhG4x+9HzffONwCUvHyi8HFzZ95i9bh5hNPtFTp7hvFjJmv4ezqwe6jVyj8RceFW2YU9V6m55YRmnyMxSt8efnVufiEZxK56zih278hKC6XDZuz8Q7NYGNivuwVsGXPKVYFJglwDvMWLEaTkEvcF2cpPleJ8t3P1+TQEdZHZOE0fxFz3nqf8LRCItOLidhRRLAKSTri2AtNPkr4ziK2HVALKOCFV5yY9cZCPorIZlNqIftOXOZv8aS/gBWZbKsAAAAASUVORK5CYII=",width:50,height:50,src:"/static/acf61c4e02d3abc455d18a65d13bb3e7/352e5/profile-pic.png",srcSet:"/static/acf61c4e02d3abc455d18a65d13bb3e7/352e5/profile-pic.png 1x,\n/static/acf61c4e02d3abc455d18a65d13bb3e7/aae31/profile-pic.png 1.5x,\n/static/acf61c4e02d3abc455d18a65d13bb3e7/47c2b/profile-pic.png 2x"}}},site:{siteMetadata:{author:"Chris Shen",social:{twitter:"chrisshen"}}}}}},293:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(233),o=a(458);var c=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",{style:{textAlign:"center",margin:"1em"}},r.a.createElement("a",{href:"https://github.com/csshen",className:"icon-link"},r.a.createElement(i.a,{type:"github",className:"icon-up"})),r.a.createElement(o.a,{type:"vertical"}),r.a.createElement("a",{href:"https://www.instagram.com/chrissshen/",className:"icon-link"},r.a.createElement(i.a,{type:"instagram",className:"icon-up"})),r.a.createElement(o.a,{type:"vertical"}),r.a.createElement("a",{href:"https://www.youtube.com/user/CrateNinja/videos",className:"icon-link"},r.a.createElement(i.a,{type:"youtube",className:"icon-up"})),r.a.createElement(o.a,{type:"vertical"}),r.a.createElement("a",{href:"https://www.linkedin.com/in/christopher-shen-aa780912b/",className:"icon-link"},r.a.createElement(i.a,{type:"linkedin",className:"icon-up"})),r.a.createElement(o.a,{type:"vertical"}),r.a.createElement("a",{href:"mailto:chrisshen8@gmail.com",className:"icon-link"},r.a.createElement(i.a,{type:"mail",className:"icon-up"})))},n}(n.Component);t.a=c}}]);
//# sourceMappingURL=component---src-pages-index-js-f99589ee58de8a53c939.js.map