(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d353dcf2"],{"159b":function(t,e,n){var r=n("da84"),o=n("fdbc"),s=n("17c2"),a=n("9112");for(var c in o){var i=r[c],u=i&&i.prototype;if(u&&u.forEach!==s)try{a(u,"forEach",s)}catch(f){u.forEach=s}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,o=n("a640"),s=o("forEach");t.exports=s?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),o=n("825a"),s=n("d039"),a=n("ad6d"),c="toString",i=RegExp.prototype,u=i[c],f=s((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l=u.name!=c;(f||l)&&r(RegExp.prototype,c,(function(){var t=o(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in i)?a.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},4788:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" chat app status : "+t._s(t.status)+" "),n("b-input",{on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.IpfsAdd(e)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),n("b-button",{on:{click:t.IpfsAdd}},[t._v("Add")]),n("b-button",{on:{click:t.load}},[t._v("Load")]),t._v(" nodes : "+t._s(JSON.stringify(t.nodes))+" ")],1)},o=[],s=n("1da1"),a=n("668b"),c=(n("d3b7"),n("25f0"),n("159b"),n("96cf"),n("6655")),i=n.n(c),u={name:"ChatApp",data:function(){return{status:"none",agoraPath:"https://ipgs.solidcommunity.net/public/ipgs/network.ttl",content:"",nodes:[]}},created:function(){this.getIpfsNodeInfo()},methods:{getIpfsNodeInfo:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$ipfs;case 3:return t.ipfs=e.sent,e.next=6,t.ipfs.id();case 6:n=e.sent,r=n.agentVersion,o=n.id,t.agentVersion=r,t.id=o,t.status="Connected to IPFS =)",console.log(t.status),e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](0),t.status="Error: ".concat(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))()},IpfsAdd:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.ipfs),n={label:t.content},e.next=4,t.ipfs.add(JSON.stringify(n));case 4:return r=e.sent,console.log("res",r),e.t0=console,e.next=9,r.cid;case 9:return e.t1=e.sent,e.t0.log.call(e.t0,e.t1),t.cid=r.cid,console.log(t.cid),console.log("https://ipfs.io/ipfs/"+t.cid.string),e.next=16,i.a[t.agoraPath]["https://www.dublincore.org/specifications/dublin-core/dcmi-terms/hasPart"].add(t.cid.string);case 16:t.content="";case 17:case"end":return e.stop()}}),e)})))()},load:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.loadIpfs(t.cid.string);case 1:case"end":return e.stop()}}),e)})))()},loadIpfs:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,o,s,c,i,u,f,l,p,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(console.log(t),n.prev=1,"none"==e.status){n.next=46;break}return n.next=5,e.ipfs.cat(t);case 5:r=n.sent,o="",s=!0,c=!1,n.prev=9,u=Object(a["a"])(r);case 11:return n.next=13,u.next();case 13:return f=n.sent,s=f.done,n.next=17,f.value;case 17:if(l=n.sent,s){n.next=25;break}p=l,console.log(p),o+=p.toString();case 22:s=!0,n.next=11;break;case 25:n.next=31;break;case 27:n.prev=27,n.t0=n["catch"](9),c=!0,i=n.t0;case 31:if(n.prev=31,n.prev=32,s||null==u.return){n.next=36;break}return n.next=36,u.return();case 36:if(n.prev=36,!c){n.next=39;break}throw i;case 39:return n.finish(36);case 40:return n.finish(31);case 41:console.log(o),console.info("must take a look at this solution if always preload error: https://github.com/ipfs/js-ipfs/issues/1481");try{d=JSON.parse(o),console.log(d),e.nodes.unshift(d)}catch(h){console.log("i can't parse",o)}n.next=47;break;case 46:console.error("IPFS not READY YET :-{");case 47:n.next=52;break;case 49:n.prev=49,n.t1=n["catch"](1),console.log("Error: ".concat(n.t1));case 52:case"end":return n.stop()}}),n,null,[[1,49],[9,27,31,41],[32,,36,40]])})))()},processNotifs:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log(t.notifications),void 0!=t.notifications&&t.notifications.length>0&&t.notifications.forEach((function(e){t.loadIpfs(e)}));case 2:case"end":return e.stop()}}),e)})))()}},watch:{notifications:function(){this.processNotifs()},status:function(){this.processNotifs()}},computed:{notifications:{get:function(){return this.$store.state.notifications},set:function(){}}}},f=u,l=n("2877"),p=Object(l["a"])(f,r,o,!1,null,null,null);e["default"]=p.exports},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}}}]);
//# sourceMappingURL=chunk-d353dcf2.ec84dd38.js.map