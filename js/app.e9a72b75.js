(function(t){function e(e){for(var r,u,i=e[0],c=e[1],s=e[2],l=0,d=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function u(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"3078590f"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(t);var s=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/daily/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0418":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header bg-light p-3 text-gray border-bottom border-gray"},[n("p",{staticClass:"mb-0"},[t._v("YuChen's practice")])])}],a=n("2877"),u={},i=Object(a["a"])(u,r,o,!1,null,null,null);e["a"]=i.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=(n("5c0b"),n("2877")),i={},c=Object(u["a"])(i,o,a,!1,null,null,null),s=c.exports,l=(n("d3b7"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Header"),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 p-4"},[n("p",[t._v("簡易功能實現")]),n("p"),n("ul",{staticClass:"list-unstyled p-2 text-left"},[n("li",{staticClass:"p-3 border border-1 mb-2"},[n("router-link",{staticClass:"text-secondary",attrs:{to:"/ubike"}},[t._v("高雄YouBike2.0公共自行車租賃站即時資訊")]),n("router-view"),n("p",{staticClass:"mt-1"},[t._v("利用高雄市政府提供的開放API獲取資料，整理後可依地區及車輛數做篩選，並以地圖及列表方式顯示公共腳踏車即時租借資訊。")])],1),n("li",{staticClass:"p-3 border border-1 mb-2"},[n("router-link",{staticClass:"text-secondary",attrs:{to:"/secretly"}},[t._v("匿名聊天室")]),n("router-view"),n("p",{staticClass:"mt-1"},[t._v("可以匿名聊天，來與別人訴說你的故事吧～")])],1),n("li",{staticClass:"p-3 border border-1 mb-2"},[n("router-link",{staticClass:"text-secondary",attrs:{to:"/todolist"}},[t._v("待辦清單")]),n("router-view"),n("p",{staticClass:"mt-1"},[t._v("簡易待辦清單功能")])],1),n("li",{staticClass:"p-3 border border-1 mb-2"},[n("router-link",{staticClass:"text-secondary",attrs:{to:"/store"}},[t._v("Store")]),n("router-view"),n("p",{staticClass:"mt-1"},[t._v("Store 未完成")])],1)])])])])],1)},d=[],f=n("0418"),b={name:"Home",components:{Header:f["a"]},created:function(){},methods:{}},m=b,h=Object(u["a"])(m,p,d,!1,null,null,null),v=h.exports;r["a"].use(l["a"]);var y=[{path:"/",name:"Home",component:v},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/detail",name:"Detail",component:function(){return n.e("about").then(n.bind(null,"c84b"))}},{path:"/ubike",name:"Ubike",component:function(){return n.e("about").then(n.bind(null,"ae74"))}},{path:"/todolist",name:"Todolist",component:function(){return n.e("about").then(n.bind(null,"b996"))}},{path:"/parking",name:"Parhing",component:function(){return n.e("about").then(n.bind(null,"af3e"))}},{path:"/secretly",name:"Secretly",component:function(){return n.e("about").then(n.bind(null,"9a11"))},children:[{path:"chat",name:"SecretlyChat",component:function(){return n.e("about").then(n.bind(null,"293a"))}}]},{path:"/chat",name:"Chat",component:function(){return n.e("about").then(n.bind(null,"293a"))}},{path:"/store",name:"Store",component:function(){return n.e("about").then(n.bind(null,"2c25"))}},{path:"/cart",name:"Cart",component:function(){return n.e("about").then(n.bind(null,"b789"))}}],g=new l["a"]({base:"/daily/",routes:y}),C=g,_=n("2f62");r["a"].use(_["a"]);var w=new _["a"].Store({state:{cartlist:[]},mutations:{addCartList:function(t,e){localStorage.productCart?console.log(localStorage.productCart):console.log(t.cartlist,e)}},actions:{},modules:{}});n("b18a"),n("6cc5");r["a"].config.productionTip=!1,new r["a"]({router:C,store:w,render:function(t){return t(s)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(t,e,n){},b18a:function(t,e,n){}});
//# sourceMappingURL=app.e9a72b75.js.map