"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[229],{81:function(n,e,t){t.d(e,{$Y:function(){return f},B$:function(){return d},L3:function(){return l},c4:function(){return p},fS:function(){return u}});var r=t(861),a=t(757),o=t.n(a),c=t(44),i="5f2a66e63fa9a8139a0b7e8b9aba27ca",s="en";c.ZP.defaults.baseURL="https://api.themoviedb.org/";var u=function(){var n=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.ZP.get("3/trending/movie/day?api_key=".concat(i));case 3:return e=n.sent,n.next=6,e.data.results;case 6:return t=n.sent,n.abrupt("return",t);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.ZP.get("3/movie/".concat(e,"?api_key=").concat(i,"&language=").concat(s));case 3:return t=n.sent,n.next=6,t.data;case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.ZP.get("3/movie/".concat(e,"/credits?api_key=").concat(i,"&language=").concat(s));case 3:return t=n.sent,n.next=6,t.data;case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.ZP.get("3/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=").concat(s));case 3:return t=n.sent,n.next=6,t.data;case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.ZP.get("3/search/movie?api_key=".concat(i,"&language=").concat(s,"&query=").concat(e,"&page=1&include_adult=false"));case 3:return t=n.sent,n.next=6,t.data;case 6:return r=n.sent,console.log(r),n.abrupt("return",r);case 11:n.prev=11,n.t0=n.catch(0),console.error(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()},350:function(n,e,t){t.d(e,{F6:function(){return x},Le:function(){return h},aV:function(){return d},ck:function(){return f},kI:function(){return g}});var r,a,o,c,i,s,u=t(168),p=t(444),l=t(87),d=p.ZP.ul(r||(r=(0,u.Z)(["\n  padding: 0;\n  display: flex;\n  width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n  flex-wrap: wrap;\n  gap: 30px;\n  list-style: none;\n"]))),f=p.ZP.li(a||(a=(0,u.Z)(["\n  border: 1px solid #0000002b;\n  width: 380px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    transform: scale(1.05);\n  }\n"]))),x=(p.ZP.p(o||(o=(0,u.Z)([""]))),(0,p.ZP)(l.OL)(c||(c=(0,u.Z)(["\n  &:not(:last-child) {\n    margin-right: 40px;\n  }\n  text-decoration: none;\n  color: black;\n  &.active {\n    color: #d54a20;\n  }\n"])))),g=p.ZP.div(i||(i=(0,u.Z)(["\n  padding: 10px;\n  text-transform: lowercase;\n  background-color: white;\n  font-size: 15px;\n  color: black;\n"]))),h=p.ZP.p(s||(s=(0,u.Z)(["\n  font-size: 20px;\n  text-transform: uppercase;\n"])))},229:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,a,o,c,i=t(885),s=t(791),u=t(705),p=t(168),l=t(444),d=(0,l.ZP)(u.Bc)(r||(r=(0,p.Z)(["\n  font-size: 15px;\n  font-weight: bold;\n  color: rgb(201, 49, 42);\n"]))),f=(0,l.ZP)(u.gN)(a||(a=(0,p.Z)(["\n  display: block;\n  background-color: #e1e6e9;\n  min-width: 250px;\n  padding: 10px 20px;\n  border-top: 1px solid rgb(27, 100, 154);\n  border-left: 1px solid rgb(27, 100, 154);\n  border-right: 1px solid white;\n  border-bottom: 1px solid white;\n  color: rgb(50, 50, 29);\n  font-size: 18px;\n"]))),x=(0,l.ZP)(u.l0)(o||(o=(0,p.Z)(["\n  background-color: rgb(251, 251, 251);\n  border: 1px solid rgb(152, 154, 27);\n  padding: 10px;\n  font-size: 30px;\n  font-weight: bold;\n  text-transform: uppercase;\n  color: rgb(87, 89, 11);\n  margin-bottom: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n"]))),g=l.ZP.button(c||(c=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 40px;\n  text-transform: uppercase;\n  font-size: 15px;\n  font-weight: bold;\n  background-color: #18344c;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  min-height: 44px;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    background-color: #021b31;\n  }\n"]))),h=t(184),v={query:""};function m(n){var e=n.updateQuery;return(0,h.jsx)(u.J9,{initialValues:v,onSubmit:function(n,t){var r=t.resetForm;e(n),r()},children:(0,h.jsxs)(x,{autoComplete:"off",children:[(0,h.jsx)(f,{type:"text",name:"query",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",placeholder:"Add search word",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,h.jsx)(d,{name:"name",component:"p"}),(0,h.jsx)(g,{type:"submit",children:"SEARCH"})]})})}var b=t(861),Z=t(757),w=t.n(Z),y=t(81),k=t(350),j="";function _(n){var e=n.itemData,t=e.id,r=e.original_title,a=e.release_date,o=e.poster_path;o||(j="https://www.designbolts.com/wp-content/uploads/2015/12/Minion-404-funny-page-404-error-design.jpg"),o&&(j="".concat("https://image.tmdb.org/t/p/original").concat(o));var c="".concat(j);return(0,h.jsx)(k.ck,{children:(0,h.jsxs)(k.F6,{to:"".concat(t),children:[(0,h.jsx)("img",{src:c,alt:r,width:"380",height:"569.7"}),(0,h.jsxs)(k.kI,{children:[(0,h.jsx)(k.Le,{children:r}),(0,h.jsxs)("p",{children:["Release date: ",a]})]})]})})}var P=function(n){var e=n.query,t=(0,s.useState)([]),r=(0,i.Z)(t,2),a=r[0],o=r[1];if((0,s.useEffect)((function(){function n(){return(n=(0,b.Z)(w().mark((function n(){var t;return w().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,y.$Y)(e);case 3:t=n.sent,o(t.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),0!==a.length)return(0,h.jsxs)(k.aV,{children:[a.map((function(n){return(0,h.jsx)(_,{itemData:n},n.id)}))," "]})};function z(){var n=(0,s.useState)(""),e=(0,i.Z)(n,2),t=e[0],r=e[1];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(m,{updateQuery:function(n){r(n.query)}}),t&&(0,h.jsx)(P,{query:t})]})}}}]);
//# sourceMappingURL=229.24140191.chunk.js.map