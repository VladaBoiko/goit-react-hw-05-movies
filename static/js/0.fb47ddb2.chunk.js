"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[0],{81:function(n,t,e){e.d(t,{$Y:function(){return d},B$:function(){return f},L3:function(){return l},c4:function(){return p},fS:function(){return i}});var r=e(861),a=e(757),c=e.n(a),o=e(44),u="5f2a66e63fa9a8139a0b7e8b9aba27ca",s="en";o.ZP.defaults.baseURL="https://api.themoviedb.org/";var i=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("3/trending/movie/day?api_key=".concat(u));case 3:return t=n.sent,n.next=6,t.data.results;case 6:return e=n.sent,n.abrupt("return",e);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("3/movie/".concat(t,"?api_key=").concat(u,"&language=").concat(s));case 3:return e=n.sent,n.next=6,e.data;case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("3/movie/".concat(t,"/credits?api_key=").concat(u,"&language=").concat(s));case 3:return e=n.sent,n.next=6,e.data;case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("3/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=").concat(s));case 3:return e=n.sent,n.next=6,e.data;case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("3/search/movie?api_key=".concat(u,"&language=").concat(s,"&query=").concat(t,"&page=1&include_adult=false"));case 3:return e=n.sent,n.next=6,e.data;case 6:return r=n.sent,console.log(r),n.abrupt("return",r);case 11:n.prev=11,n.t0=n.catch(0),console.error(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(t){return n.apply(this,arguments)}}()},0:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r=e(861),a=e(885),c=e(757),o=e.n(c),u=e(791),s=e(81),i=e(350),p=e(184),l="";function f(n){var t=n.itemData,e=t.id,r=t.original_title,a=t.release_date,c=t.poster_path;c||(l="https://www.designbolts.com/wp-content/uploads/2015/12/Minion-404-funny-page-404-error-design.jpg"),c&&(l="".concat("https://image.tmdb.org/t/p/original").concat(c));var o="".concat(l);return(0,p.jsx)(i.ck,{children:(0,p.jsxs)(i.F6,{to:"".concat(e),children:[(0,p.jsx)("img",{src:o,alt:r,width:"380"}),(0,p.jsxs)(i.kI,{children:[(0,p.jsx)(i.Le,{children:r}),(0,p.jsxs)("p",{children:["Release date: ",a]})]})]})})}function d(){var n=(0,u.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1];return(0,u.useEffect)((function(){function n(){return(n=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.fS)();case 3:t=n.sent,c(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,p.jsxs)(i.aV,{children:[e.map((function(n){return(0,p.jsx)(f,{itemData:n},n.id)}))," "]})}},350:function(n,t,e){e.d(t,{F6:function(){return v},Le:function(){return x},aV:function(){return f},ck:function(){return d},kI:function(){return h}});var r,a,c,o,u,s,i=e(168),p=e(444),l=e(87),f=p.ZP.ul(r||(r=(0,i.Z)(["\n  padding: 0;\n  display: flex;\n  width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n  flex-wrap: wrap;\n  gap: 30px;\n  list-style: none;\n"]))),d=p.ZP.li(a||(a=(0,i.Z)(["\n  border: 1px solid #0000002b;\n  width: 380px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    transform: scale(1.05);\n  }\n"]))),v=(p.ZP.p(c||(c=(0,i.Z)([""]))),(0,p.ZP)(l.OL)(o||(o=(0,i.Z)(["\n  &:not(:last-child) {\n    margin-right: 40px;\n  }\n  text-decoration: none;\n  color: black;\n  &.active {\n    color: #d54a20;\n  }\n"])))),h=p.ZP.div(u||(u=(0,i.Z)(["\n  padding: 10px;\n  text-transform: lowercase;\n  background-color: white;\n  font-size: 15px;\n  color: black;\n"]))),x=p.ZP.p(s||(s=(0,i.Z)(["\n  font-size: 20px;\n  text-transform: uppercase;\n"])))}}]);
//# sourceMappingURL=0.fb47ddb2.chunk.js.map