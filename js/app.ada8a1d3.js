(function(t){function e(e){for(var r,i,c=e[0],u=e[1],l=e[2],s=0,d=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5dc0ab40"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var l=new Error;a=function(e){u.onerror=u.onload=null,clearTimeout(s);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[t]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/daily/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var p=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0418":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header bg-light p-3 text-gray border-bottom border-gray"},[n("p",{staticClass:"mb-0"},[t._v("YuChen's practice")])])}],a=n("2877"),i={},c=Object(a["a"])(i,r,o,!1,null,null,null);e["a"]=c.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=(n("5c0b"),n("2877")),c={},u=Object(i["a"])(c,o,a,!1,null,null,null),l=u.exports,s=(n("d3b7"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Header"),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 p-4"},[n("p",[t._v("簡易功能實現")]),n("p"),n("ul",{staticClass:"list-unstyled p-2 text-left"},[n("li",{staticClass:"p-3 border border-1 mb-2"},[n("router-link",{staticClass:"text-secondary",attrs:{to:"/ubike"}},[t._v("高雄YouBike2.0公共自行車租賃站即時資訊")]),n("router-view"),n("p",{staticClass:"mt-1"},[t._v("利用高雄市政府提供的開放API獲取資料，整理後可依地區及車輛數做篩選，並以地圖及列表方式顯示公共腳踏車即時租借資訊。")])],1),n("li",{staticClass:"p-3 border border-1 mb-2"},[n("router-link",{staticClass:"text-secondary",attrs:{to:"/secretly"}},[t._v("匿名聊天室")]),n("router-view"),n("p",{staticClass:"mt-1"},[t._v("可以匿名聊天，來與別人訴說你的故事吧～")])],1),n("li",{staticClass:"p-3 border border-1 mb-2"},[n("router-link",{staticClass:"text-secondary",attrs:{to:"/todolist"}},[t._v("待辦清單")]),n("router-view"),n("p",{staticClass:"mt-1"},[t._v("簡易待辦清單功能")])],1),n("li",{staticClass:"p-3 border border-1 mb-2"},[n("router-link",{staticClass:"text-secondary",attrs:{to:"/store"}},[t._v("Store 開發中(手機＆電腦)")]),n("router-view"),n("p",[t._v(" 目前功能：")]),t._m(0)],1)])])])])],1)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("搜尋功能")]),n("li",[t._v("金額計算")]),n("li",[t._v("新增移除項目 儲存至本地")])])}],f=n("0418"),b={name:"Home",components:{Header:f["a"]},created:function(){},methods:{}},m=b,h=Object(i["a"])(m,p,d,!1,null,null,null),v=h.exports;r["a"].use(s["a"]);var y=[{path:"/",name:"Home",component:v},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/detail",name:"Detail",component:function(){return n.e("about").then(n.bind(null,"c84b"))}},{path:"/ubike",name:"Ubike",component:function(){return n.e("about").then(n.bind(null,"ae74"))}},{path:"/todolist",name:"Todolist",component:function(){return n.e("about").then(n.bind(null,"b996"))}},{path:"/parking",name:"Parhing",component:function(){return n.e("about").then(n.bind(null,"af3e"))}},{path:"/secretly",name:"Secretly",component:function(){return n.e("about").then(n.bind(null,"9a11"))},children:[{path:"chat",name:"SecretlyChat",component:function(){return n.e("about").then(n.bind(null,"293a"))}}]},{path:"/chat",name:"Chat",component:function(){return n.e("about").then(n.bind(null,"293a"))}},{path:"/store",name:"Store",component:function(){return n.e("about").then(n.bind(null,"2c25"))}},{path:"/cart",name:"Cart",component:function(){return n.e("about").then(n.bind(null,"b789"))}}],g=new s["a"]({base:"/daily/",routes:y}),_=g,C=(n("99af"),n("b0c0"),n("2f62"));r["a"].use(C["a"]);var w=new C["a"].Store({state:{cartlist:[]},mutations:{addCartList:function(t,e){if(localStorage.productCart){console.log(e.name);for(var n=JSON.parse(localStorage.getItem("productCart")),r=0;r<n.length;r++){if(e.name===n[r].name){n[r].count++,t.cartlist=n;break}t.cartlist=n.concat(e)}localStorage.setItem("productCart",JSON.stringify(t.cartlist))}else console.log("28",t.cartlist),t.cartlist=[],t.cartlist.push(e),localStorage.setItem("productCart",JSON.stringify(t.cartlist))}},actions:{},modules:{}});n("b18a"),n("6cc5");r["a"].config.productionTip=!1,new r["a"]({router:_,store:w,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(t,e,n){},b18a:function(t,e,n){}});
//# sourceMappingURL=app.ada8a1d3.js.map