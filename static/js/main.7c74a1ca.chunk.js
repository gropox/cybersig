(this.webpackJsonpcybersig=this.webpackJsonpcybersig||[]).push([[0],{144:function(e,a,t){e.exports=t(310)},149:function(e,a,t){},150:function(e,a,t){},180:function(e,a){},182:function(e,a){},243:function(e,a){},244:function(e,a){},29:function(e,a,t){"use strict";(function(e){t.d(a,"c",(function(){return v})),t.d(a,"a",(function(){return f})),t.d(a,"b",(function(){return h}));var r=t(20),n=t.n(r),c=t(40),l=t(72),o=t(73),s=t(140),i=t.n(s),m=t(141),u=t.n(m),d=(t(286),t(71)),p=t.n(d),b="https://node-cyberway.golos.io";function v(e,a,t){return E.apply(this,arguments)}function E(){return(E=Object(c.a)(n.a.mark((function e(a,t,r){var c,s,m,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=new l.JsonRpc(r||b),s=new i.a([a]),m=new l.Api({rpc:c,signatureProvider:s,textDecoder:new o.TextDecoder,textEncoder:new o.TextEncoder}),e.next=5,m.transact(t,{blocksBehind:5,expireSeconds:3600});case 5:return u=e.sent,console.log("sendgtransaction: results",u),e.abrupt("return",u);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(a){var t=!1,r=function(e){return u.a.createHash("sha256").update(e).digest()};try{var n=new e(p.a.decode(a)),c=n.slice(0,-4),l=n.slice(-4),o=r(c);o=(o=r(o)).slice(0,4),l.toString()==o.toString()&&(t=!0)}catch(s){}return t}function h(e,a){return y.apply(this,arguments)}function y(){return(y=Object(c.a)(n.a.mark((function e(a,t){var r,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Request(b+a,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),e.next=3,fetch(r);case 3:if(c=e.sent,console.log(a,t,c),c.ok){e.next=7;break}return e.abrupt("return",{});case 7:return e.next=9,c.json();case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}).call(this,t(2).Buffer)},310:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(137),l=t.n(c),o=(t(149),t(138)),s=(t(150),t(24)),i=t(19),m=t(139),u=t.n(m);function d(e){return n.a.createElement("div",{className:""},n.a.createElement("div",{className:"alert alert-primary",role:"alert"},n.a.createElement("h4",null,"Content")),n.a.createElement("div",null,n.a.createElement("pre",null,JSON.stringify(e.trJson,null,2))))}function p(e){return n.a.createElement("div",{className:"p-2 border"},n.a.createElement("div",{className:"alert alert-danger",role:"alert"},n.a.createElement("h4",null,"Erroneous transaction")),n.a.createElement("div",null,n.a.createElement("p",{class:" text-danger font-weight-bold"},e.parseError)))}var b=t(21),v=t(29);function E(e){var a=Object(r.useState)(""),t=Object(b.a)(a,2),c=t[0],l=t[1],o=Object(r.useState)("form-control"),s=Object(b.a)(o,2),i=s[0],m=s[1];return n.a.createElement("form",null,n.a.createElement("div",{className:"alert alert-primary",role:"alert"},n.a.createElement("h4",null,"Signature")),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"private_key"},"Private key"),n.a.createElement("input",{type:"password",className:i,id:"private_key",placeholder:"Private key",value:c,onChange:function(e){var a=e.target.value;Object(v.a)(a)?m("form-control is-valid"):m("form-control is-invalid"),l(a)}}),n.a.createElement("small",{id:"passwordHelpBlock",className:"form-text text-muted"},"For signing a private key required.")),n.a.createElement("button",{onClick:function(){return e.submit(c)},type:"button",className:"btn btn-primary"},"Submit"))}function f(e){var a=u.a.parse(window.location.search),t=null,r=null;if(a.tr)try{t=JSON.parse(a.tr)}catch(c){r=c+""}if(r)return n.a.createElement(p,{parseError:r});if(!t)return n.a.createElement(p,{parseError:"Please provide parameter 'tr' with a transaction"});return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12 p-2 border "},n.a.createElement(E,{submit:function(e){console.log("submit",t),Object(v.c)(e,t).then((function(e){return console.log("result",e)})).catch((function(e){return console.error("error",""+e)}))}}))),n.a.createElement("div",{className:"row mt-2"},n.a.createElement("div",{className:"col-sm-12 p-2 border "},n.a.createElement(d,{trJson:t}))))}function h(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-2"},n.a.createElement("a",{className:"navbar-brand",href:"/"},"CyberSig"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item dropdown"},n.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Tools"),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},n.a.createElement("a",{className:"dropdown-item",href:"/templates"},"Templates"),n.a.createElement("a",{className:"dropdown-item",href:"/exec"},"Execute contract action"),n.a.createElement("div",{className:"dropdown-divider"}),n.a.createElement("a",{className:"dropdown-item",href:"/create_key"},"Create key"),n.a.createElement("a",{className:"dropdown-item",href:"/associate"},"Associate key"))))))}var y=t(20),g=t.n(y),w=t(40);function N(e,a,t){return{actions:[{account:"cyber",name:"bidname",authorization:[{actor:"zhm555xmzkd3",permission:"active"}],data:{bidder:e,newname:a,bid:parseFloat(t).toFixed(4)+" CYBER"}}]}}var O="/v1/chain/get_table_rows",x={json:!0,code:"cyber",scope:"cyber",table:"namebids",lower_bound:null,upper_bound:null,limit:50,index:"highbid",encode_type:"dec",reverse:!1,show_payer:!1};function j(e){var a=Object(r.useState)(""),t=Object(b.a)(a,2),c=t[0],l=t[1],o=Object(r.useState)(""),i=Object(b.a)(o,2),m=i[0],u=i[1],d=Object(r.useState)(0),p=Object(b.a)(d,2),E=p[0],f=p[1],h=Object(r.useState)({}),y=Object(b.a)(h,2),j=y[0],k=y[1];return Object(r.useEffect)((function(){function e(){return(e=Object(w.a)(g.a.mark((function e(){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(v.b)(O,x);case 3:a=e.sent,console.log(a),a&&a.data&&a.data.rows&&k(a.rows),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("form",null,n.a.createElement("div",{className:"alert alert-primary",role:"alert"},n.a.createElement("h4",null,"Bidname")),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"bidder"},"Bidder"),n.a.createElement("input",{type:"text",className:"form-control",id:"bidder",placeholder:"cyberway account",value:c,onChange:function(e){return l(e.target.value)}}),n.a.createElement("small",{id:"bidderHelpBlock",className:"form-text text-muted"},"Cyberway account")),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"newname"},"Bidder"),n.a.createElement("input",{type:"text",className:"form-control",id:"newname",placeholder:"new cyberway name",value:m,onChange:function(e){return u(e.target.value)}}),n.a.createElement("small",{id:"bidderHelpBlock",className:"form-text text-muted"},'New cyberway name, max 12 characters. Only following characters are allowed: "12345abcdefghijklmnopqrstuvwxyz"')),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"bid"},"Bidder"),n.a.createElement("input",{type:"number",min:"0",className:"form-control",id:"bid",placeholder:"bid amount",value:E,onChange:function(e){return f(e.target.value)}}),n.a.createElement("small",{id:"bidderHelpBlock",className:"form-text text-muted"},"Bid amount.")),n.a.createElement(s.b,{to:"/signing?tr="+JSON.stringify(N(c,m,E)),type:"button",className:"btn btn-primary"},"Sign"))),n.a.createElement("div",null,n.a.createElement("pre",null,JSON.stringify(j,null,2))))}function k(){return n.a.createElement("div",{className:"card-body"},n.a.createElement(s.b,{to:"/templates/cyberway/bidname"},"bidname"))}function S(){return n.a.createElement("div",{className:"card-body"},n.a.createElement(s.b,{to:"/templates/golos/upvote"},"upvote"))}function C(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-6 mb-3"},n.a.createElement("h3",null,"Transaction templates"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-6 mb-3"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},n.a.createElement("h4",null,"Cyberway")),n.a.createElement(k,null))),n.a.createElement("div",{className:"col-sm-6 mb-3"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},n.a.createElement("h4",null,"Golos")),n.a.createElement(S,null)))))}function B(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function P(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?B(t,!0).forEach((function(a){Object(o.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var J=function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement(h,null))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("div",null,n.a.createElement(s.a,null,n.a.createElement(i.c,null,n.a.createElement(i.a,{exact:!0,path:"/"},n.a.createElement("h1",null,"Signing tool for cyberway!")),n.a.createElement(i.a,{exact:!0,path:"/signing"},n.a.createElement(f,{props:P({},e)})),n.a.createElement(i.a,{exact:!0,path:"/templates/"},n.a.createElement(C,{props:P({},e)})),n.a.createElement(i.a,{exact:!0,path:"/templates/cyberway/bidname"},n.a.createElement(j,{props:P({},e)}))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[144,1,2]]]);
//# sourceMappingURL=main.7c74a1ca.chunk.js.map