"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[530],{530:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),a=n(439),u=n(687),c=n.n(u),i=n(791),s=n(87),o=n(689),p=n(390),f="Movies_links_list__item__o3g7G",l="Movies_input__N3yRL",v=n(184),h=function(){var e=(0,s.lr)(),t=(0,a.Z)(e,2),n=t[0],u=t[1],h=n.get("query"),m=(0,o.TH)(),d=(0,i.useState)([]),g=(0,a.Z)(d,2),y=g[0],x=g[1],k=(0,i.useState)(""),_=(0,a.Z)(k,2),w=_[0],Z=_[1];return(0,i.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.zi)(h);case 2:t=e.sent,x(t.results),Z("");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}h&&function(){e.apply(this,arguments)}()}),[h]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),e.target.searchQuery.value.trim()&&u({query:e.target.searchQuery.value.trim()})},children:[(0,v.jsx)("input",{className:l,name:"searchQuery",type:"text",value:w,onChange:function(e){Z(e.target.value)}}),(0,v.jsx)("button",{type:"submit",children:"Search"})]}),(0,v.jsx)("ul",{children:y.map((function(e){var t=e.id,n=e.title;return(0,v.jsx)("li",{className:f,children:(0,v.jsx)(s.rU,{to:"".concat(t),state:{from:m},children:n})},t)}))})]})}},390:function(e,t,n){n.d(t,{Df:function(){return s},M1:function(){return p},TP:function(){return o},tx:function(){return f},zi:function(){return l}});var r=n(861),a=n(687),u=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="608a612cc746968ead61312fe4955129",s=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day?language=en-US&api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"?language=en-US&api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/credits?language=en-US&api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/reviews?language=en-US&api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?query=".concat(t,"&language=en-US&api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=530.f0f30b87.chunk.js.map