(function(e){function n(n){for(var o,u,c=n[0],a=n[1],f=n[2],l=0,d=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&d.push(r[u][0]),r[u]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);s&&s(n);while(d.length)d.shift()();return i.push.apply(i,f||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,u=1;u<t.length;u++){var a=t[u];0!==r[a]&&(o=!1)}o&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},r={app:0},i=[];function u(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"56c4bd83","chunk-19b30634":"5c1eb1cc","chunk-c76a86e4":"f425841f","chunk-d353dcf2":"c1f75fc2"}[e]+".js"}function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=o);var i,a=document.createElement("script");a.charset="utf-8",a.timeout=120,c.nc&&a.setAttribute("nonce",c.nc),a.src=u(e);var f=new Error;i=function(n){a.onerror=a.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",f.name="ChunkLoadError",f.type=o,f.request=i,t[1](f)}r[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:a})}),12e4);a.onerror=a.onload=i,document.head.appendChild(a)}return Promise.all(n)},c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/ipfs-chat/",c.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],f=a.push.bind(a);a.push=n,a=a.slice();for(var l=0;l<a.length;l++)n(a[l]);var s=f;i.push([1,"chunk-vendors"]),t()})({0:function(e,n){},"034f":function(e,n,t){"use strict";t("85ec")},1:function(e,n,t){e.exports=t("56d7")},10:function(e,n){},11:function(e,n){},12:function(e,n){},13:function(e,n){},14:function(e,n){},15:function(e,n){},16:function(e,n){},17:function(e,n){},2:function(e,n){},3:function(e,n){},4:function(e,n){},5:function(e,n){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[e._v("Chat")]),e._v(" | "),t("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),t("router-view"),t("small",[e._v("0.0.1")])],1)},i=[],u=(t("034f"),t("2877")),c={},a=Object(u["a"])(c,r,i,!1,null,null,null),f=a.exports,l=t("9483");Object(l["a"])("".concat("/ipfs-chat/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),alert("New content is available; please close the app & reopen.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7"),t("3ca3"),t("ddb0");var s=t("8c4f"),d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("ChatSocket"),t("ChatApp")],1)},p=[],h={name:"Home",components:{ChatApp:function(){return Promise.all([t.e("chunk-19b30634"),t.e("chunk-d353dcf2")]).then(t.bind(null,"4788"))},ChatSocket:function(){return Promise.all([t.e("chunk-19b30634"),t.e("chunk-c76a86e4")]).then(t.bind(null,"bf7d"))}}},b=h,v=Object(u["a"])(b,d,p,!1,null,null,null),m=v.exports;o["default"].use(s["a"]);var g=[{path:"/",name:"Home",component:m},{path:"/about",name:"About",component:function(){return t.e("about").then(t.bind(null,"f820"))}}],w=new s["a"]({mode:"history",base:"/ipfs-chat/",routes:g}),y=w,k=t("2f62");o["default"].use(k["a"]);var j=new k["a"].Store({state:{notifications:[]},mutations:{setNotifications:function(e,n){e.notifications=n}},actions:{},modules:{}}),O=t("5f5b"),_=t("b1e0"),P=(t("f9e3"),t("2dd8"),t("3054"),t("9b56")),C=t.n(P),S={install:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.prototype.$ipfs=C.a.create(n)}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(S);var x=S;o["default"].use(O["a"]),o["default"].use(_["a"]),o["default"].use(x),o["default"].config.productionTip=!1,new o["default"]({router:y,store:j,render:function(e){return e(f)}}).$mount("#app")},6:function(e,n){},7:function(e,n){},8:function(e,n){},"85ec":function(e,n,t){},9:function(e,n){}});
//# sourceMappingURL=app.85fcce5d.js.map