(this["webpackJsonpmikes-ecommerce"]=this["webpackJsonpmikes-ecommerce"]||[]).push([[0],{212:function(e,t,a){e.exports=a(384)},217:function(e,t,a){},240:function(e,t,a){},241:function(e,t,a){},242:function(e,t,a){},243:function(e,t,a){},344:function(e,t,a){},345:function(e,t,a){},373:function(e,t,a){},374:function(e,t,a){},375:function(e,t,a){},376:function(e,t,a){},377:function(e,t,a){},378:function(e,t,a){},379:function(e,t,a){},380:function(e,t,a){},381:function(e,t,a){},382:function(e,t,a){},383:function(e,t,a){},384:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(38),l=a.n(i),c=(a(217),a(18)),o=a(44),s=a(42),m=a.n(s),u=function(e){e?m.a.defaults.headers.common["x-auth-token"]=e:delete m.a.defaults.headers.common["x-auth-token"]},p=a(20),d=a.n(p),f=a(31),h=function(){return function(){var e=Object(f.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Loading user...."),localStorage.token&&u(localStorage.token),e.prev=2,e.next=5,m.a.get("/login");case 5:a=e.sent,t({type:"USER_LOADED",payload:a.data}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log("loadUser action ERROR: "+e.t0),t({type:"AUTH_ERROR"});case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},E=function(){return function(e){e({type:"CLEAR_PROFILE"}),e({type:"LOGOUT"})}},b=a(16),g=(a(240),a(241),function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{a({type:"ADD_ITEM",payload:e})}catch(n){alert("addItem action error: ",n)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}),y=function(){return function(){var e=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t({type:"TOGGLE_CART"})}catch(a){console.log("toggleCart action ERROR: "+a),t({type:"TOGGLE_ERROR"})}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=Object(b.b)(null,(function(e){return{add:function(t){return e(g(t))},remove:function(t){return e(function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{a({type:"REMOVE_ITEM",payload:e})}catch(n){alert("removeItem action error: ",n)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},removes:function(t){return e(function(e){return function(){var t=Object(f.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{a({type:"REMOVE_ITEMS",payload:e})}catch(n){alert("removeItem action error: ",n)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=e.add,a=e.cartItem,n=e.remove,i=e.removes,l=a.name,c=a.imageUrl,o=a.price,s=a.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:c,alt:"item"})),r.a.createElement("span",{className:"name"},l),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return n(a)}},"\u276e"),r.a.createElement("span",{className:"value"},s),r.a.createElement("div",{className:"arrow",onClick:function(){return t(a)}},"\u276f")),r.a.createElement("span",{className:"price"},o),r.a.createElement("span",{className:"remove-button",onClick:function(){return i(a)}},"\u2715"))}));function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var x=r.a.createElement("title",null,"Group"),j=r.a.createElement("desc",null,"Created with Sketch."),k=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),N=function(e){var t=e.svgRef,a=e.title,n=w(e,["svgRef","title"]);return r.a.createElement("svg",O({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?x:a?r.a.createElement("title",null,a):null,j,k)},U=r.a.forwardRef((function(e,t){return r.a.createElement(N,O({svgRef:t},e))})),C=(a.p,a(242),a(243),function(e){var t=e.item,a=t.imageUrl,n=t.name,i=t.price,l=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:a,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},n),r.a.createElement("span",{className:"name"},l," x $",i)))}),M=a(399),B=Object(o.g)(Object(b.b)((function(e){return{cartItems:e.cart.cartItems}}),null)((function(e){var t=e.cartItems,a=e.history,n=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(C,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement("br",null),r.a.createElement(M.a,{inverted:!0,color:"green",className:"checkout-button",onClick:function(){a.push("/checkout"),n(y())}},"Checkout"))})));function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var R=r.a.createElement("g",null),T=r.a.createElement("g",null),D=r.a.createElement("g",null),S=r.a.createElement("g",null),H=r.a.createElement("g",null),W=r.a.createElement("g",null),J=r.a.createElement("g",null),Q=r.a.createElement("g",null),A=r.a.createElement("g",null),L=r.a.createElement("g",null),P=r.a.createElement("g",null),_=r.a.createElement("g",null),G=r.a.createElement("g",null),F=r.a.createElement("g",null),z=r.a.createElement("g",null),V=function(e){var t=e.svgRef,a=e.title,n=q(e,["svgRef","title"]);return r.a.createElement("svg",I({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),R,T,D,S,H,W,J,Q,A,L,P,_,G,F,z)},$=r.a.forwardRef((function(e,t){return r.a.createElement(V,I({svgRef:t},e))})),Y=(a.p,a(344),a(124)),Z=Object(Y.a)([function(e){return e.cart}],(function(e){return e.cartItems})),K=(Object(Y.a)([Z],(function(e){return e.reduce((function(e,t){return e+t.quantity}))})),Object(b.b)((function(e){return{itemCount:e.cart.cartItems.reduce((function(e,t){return e+t.quantity}),0)}}),(function(e){return{toggleCart:function(){return e(y())}}}))((function(e){var t=e.itemCount,a=e.toggleCart;return r.a.createElement("div",{className:"cart-icon",onClick:a},r.a.createElement($,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},t))}))),X=(a(345),a(400)),ee=a(397),te=Object(b.b)((function(e){return{auth:e.auth,cart:e.cart.hidden}}),{logout:E})((function(e){var t=e.auth,a=t.isAuthenticated,i=t.loading,l=t.user,o=e.cart,s=e.logout,m=r.a.createElement("div",{className:"header"},r.a.createElement(X.a,{size:"massive"},r.a.createElement(X.a.Item,null,r.a.createElement(c.b,{to:"/"},r.a.createElement(U,null))),r.a.createElement(X.a.Item,null,r.a.createElement(c.b,{to:"/shop"},"Shop")),r.a.createElement(X.a.Menu,{position:"right"},r.a.createElement(X.a.Item,null,r.a.createElement(K,null),o?null:r.a.createElement(B,null)),r.a.createElement(ee.a,{item:!0,text:a?l.name:null},r.a.createElement(ee.a.Menu,null,r.a.createElement(c.b,{to:"/edit"},r.a.createElement(ee.a.Item,null,"My Account")),r.a.createElement(c.b,{to:"/",onClick:s},r.a.createElement(ee.a.Item,null,"Logout"))))))),u=r.a.createElement("div",{className:"header"},r.a.createElement(X.a,{size:"massive"},r.a.createElement(X.a.Item,null,r.a.createElement(c.b,{to:"/"},r.a.createElement(U,null))),r.a.createElement(X.a.Item,null,r.a.createElement(c.b,{to:"/shop"},"Shop")),r.a.createElement(X.a.Menu,{position:"right"},r.a.createElement(X.a.Item,null,r.a.createElement(c.b,{to:"/auth"},"Login")))));return r.a.createElement("div",null,!i&&r.a.createElement(n.Fragment,null,a?m:u))})),ae=Object(b.b)((function(e){return{cartItems:e.cart.cartItems}}),null)((function(e){var t=e.cartItems,a=e.total;return console.log("checkout: ",a),r.a.createElement("div",null,r.a.createElement(te,null),r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(v,{cartItem:e,key:e.id})})),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"TOTAL: $",a))))})),ne=a(395),re=(a(373),function(e){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(X.a,{size:"massive"},r.a.createElement(X.a.Item,null,r.a.createElement(c.b,{to:"/"},"Back")))),r.a.createElement("div",{className:"edit-container"},r.a.createElement("h2",null,"Update your account"),r.a.createElement("br",null),r.a.createElement(ne.a,null,r.a.createElement(ne.a.Group,{unstackable:!0,widths:2},r.a.createElement(ne.a.Input,{label:"First name",placeholder:"First name"}),r.a.createElement(ne.a.Input,{label:"Last name",placeholder:"Last name"})),r.a.createElement(ne.a.Group,{widths:2},r.a.createElement(ne.a.Input,{label:"Phone",placeholder:"Phone"}),r.a.createElement(ne.a.Input,{label:"Password",placeholder:"Password"})),r.a.createElement("br",null),r.a.createElement("div",{className:"edit-button"},r.a.createElement(M.a,{type:"submit"},"Submit")))))}),ie=(a(374),a(375),Object(b.b)((function(e){return{alerts:e.alert}}),null)((function(e){var t=e.alerts;return null!==t&&t.length>0&&t.map((function(e){return r.a.createElement("div",{key:e.id,className:"alert alert-".concat(e.alertType)},r.a.createElement("i",{className:"fas fa-exclamation-circle"})," "+e.msg)}))}))),le=a(94),ce=(a(376),Object(o.g)((function(e){var t=e.title,a=e.imageUrl,n=e.size,i=e.history,l=e.match,c=e.linkUrl;return r.a.createElement("div",{className:"".concat(n," menu-item"),onClick:function(){return i.push("".concat(l.url," ").concat(c))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),oe=(a(377),Object(b.b)((function(e){return{directory:e.directory.sections}}),null)((function(e){var t=e.directory;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,a=Object(le.a)(e,["id"]);return r.a.createElement(ce,Object.assign({key:t},a))})))}))),se=a(401),me=function(){return r.a.createElement(se.a,null,r.a.createElement(se.a.Row,null,r.a.createElement(se.a.Column,null,"Based in Northern California, we take our production process seriously, knowing the quality our environment provides to the rest of the world",r.a.createElement("br",null),"We are a cbd company willing to provide the best and only the best possible products.")),r.a.createElement(se.a.Row,null,r.a.createElement(se.a.Column,null,r.a.createElement("i",{className:"fab fa-facebook-square"}))),r.a.createElement(se.a.Row,null,r.a.createElement(se.a.Column,null,r.a.createElement("i",{className:"fab fa-instagram"}))),r.a.createElement(se.a.Row,null,r.a.createElement(se.a.Column,null,r.a.createElement("i",{className:"fab fa-linkedin"}))),r.a.createElement(se.a.Row,null,"\xa0\xa0\xa0\xa9 2020 Copyright. mikes-ecommerce, all rights reserved."))},ue=function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(te,null)),r.a.createElement("div",{className:"homepage"},r.a.createElement(ie,null),r.a.createElement(oe,null),r.a.createElement(me,null)))},pe=(a(378),a(379),Object(b.b)(null,(function(e){return{add:function(t){return e(g(t))}}}))((function(e){var t=e.add,a=e.item,n=a.name,i=a.price,l=a.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(l,")")}},r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},n),r.a.createElement("span",{className:"price"},i))),r.a.createElement(M.a,{inverted:!0,color:"green",className:"checkout-button",onClick:function(){return t(a)}},"Add to Cart"))}))),de=a(394),fe=(a(380),function(e){var t=e.title,a=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(pe,{key:e.id,item:e})}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(de.a,{color:"black"}))}),he=Object(b.b)((function(e){return{collections:e.shop.collections}}),null)((function(e){var t=e.collections;return r.a.createElement("div",null,r.a.createElement(te,null),r.a.createElement("div",{className:"shop-page"},t.map((function(e){var t=e.id,a=Object(le.a)(e,["id"]);return r.a.createElement(fe,Object.assign({key:t},a))}))))})),Ee=a(195),be=a(196),ge=a(201),ye=a(200),ve=a(62),Oe=a(21),we=a(91),xe=a(402),je=function(e,t){return function(a){var n=Object(xe.a)();a({type:"SET_ALERT",payload:{msg:e,alertType:t,id:n}}),setTimeout((function(){a({type:"REMOVE_ALERT",payload:n})}),4e3)}},ke=(a(381),Object(b.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var a=Object(f.a)(d.a.mark((function a(n){var r,i,l,c;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r={headers:{"Content-Type":"application/json"}},i=JSON.stringify({email:e,password:t}),a.prev=2,a.next=5,m.a.post("/login",i,r);case 5:l=a.sent,n({type:"LOGIN_SUCCESS",payload:l.data}),n(h()),a.next=15;break;case 10:a.prev=10,a.t0=a.catch(2),(c=a.t0.response)&&console.log(c),n({type:"LOGIN_FAIL"});case 15:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(e){return a.apply(this,arguments)}}()},setAlert:je})((function(e){var t=e.isAuthenticated,a=e.login,i=e.setAlert,l=Object(n.useState)({email:"",password:""}),c=Object(we.a)(l,2),s=c[0],m=c[1],u=s.email,p=s.password,d=function(e){return m(Object(Oe.a)({},s,Object(ve.a)({},e.target.name,e.target.value)))};return t?r.a.createElement(o.a,{to:"/"}):r.a.createElement("div",{className:"login"},r.a.createElement("h2",null,"LOGIN"),r.a.createElement(ne.a,{onSubmit:function(e){return function(e){e.preventDefault(),i("You have successfully logged in","success"),a(u,p)}(e)}},r.a.createElement(ne.a.Field,null,r.a.createElement("label",null,"Email"),r.a.createElement("input",{placeholder:"Email",type:"email",name:"email",value:u,onChange:function(e){return d(e)},required:!0})),r.a.createElement(ne.a.Field,null,r.a.createElement("label",null,"Password"),r.a.createElement("input",{placeholder:"Password",type:"password",name:"password",value:p,onChange:function(e){return d(e)},required:!0})),r.a.createElement(M.a,{type:"submit"},"Login")))}))),Ne=(a(382),Object(b.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{register:function(e){var t=e.name,a=e.email,n=e.phoneNumber,r=e.password,i=e.password2;return function(){var e=Object(f.a)(d.a.mark((function e(l){var c,o,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={headers:{"Content-Type":"application/json"}},o=JSON.stringify({name:t,email:a,phoneNumber:n,password:r,password2:i}),e.prev=2,e.next=5,m.a.post("/register",o,c);case 5:s=e.sent,l({type:"REGISTER_SUCCESS",payload:s.data}),l(h()),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),e.t0&&console.log(e.t0),l({type:"REGISTER_FAIL"});case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},setAlert:je})((function(e){var t=e.isAuthenticated,a=e.register,i=e.setAlert,l=Object(n.useState)({name:"",email:"",phoneNumber:"",password:"",password2:""}),c=Object(we.a)(l,2),s=c[0],m=c[1],u=s.name,p=s.email,h=s.phoneNumber,E=s.password,b=s.password2,g=function(e){return m(Object(Oe.a)({},s,Object(ve.a)({},e.target.name,e.target.value)))},y=function(){var e=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),E!==b?i("Passwords do not match","danger"):(a({name:u,email:p,phoneNumber:h,password:E,password2:b}),console.log("REGISTERED"));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return t?r.a.createElement(o.a,{to:"/"}):r.a.createElement("div",{className:"register"},r.a.createElement(de.a,null),r.a.createElement("br",null),r.a.createElement("h2",null,"CREATE ACCOUNT"),r.a.createElement(ne.a,{onSubmit:function(e){return y(e)}},r.a.createElement(ne.a.Field,null,r.a.createElement("label",null,"Name"),r.a.createElement("input",{placeholder:"Name",type:"text",name:"name",onChange:function(e){return g(e)},value:u,required:!0})),r.a.createElement(ne.a.Field,null,r.a.createElement("label",null,"Email"),r.a.createElement("input",{placeholder:"Email",type:"email",name:"email",onChange:function(e){return g(e)},value:p,required:!0})),r.a.createElement(ne.a.Field,null,r.a.createElement("label",null,"Phone Number"),r.a.createElement("input",{placeholder:"Phone",type:"text",name:"phoneNumber",onChange:function(e){return g(e)},value:h,required:!0})),r.a.createElement(ne.a.Field,null,r.a.createElement("label",null,"Password"),r.a.createElement("input",{placeholder:"Password",type:"password",name:"password",onChange:function(e){return g(e)},value:E,required:!0})),r.a.createElement(ne.a.Field,null,r.a.createElement("label",null,"Confirm Password"),r.a.createElement("input",{placeholder:"Confirm Password",type:"password",name:"password2",onChange:function(e){return g(e)},value:b,required:!0})),r.a.createElement(M.a,{type:"submit"},"Register")))}))),Ue=a(398),Ce=a(64),Me=function(e){Object(ge.a)(a,e);var t=Object(ye.a)(a);function a(){var e;Object(Ee.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={activeIndex:0},e.handleClick=function(t,a){var n=a.index,r=e.state.activeIndex===n?-1:n;e.setState({activeIndex:r})},e}return Object(be.a)(a,[{key:"render",value:function(){var e=this.state.activeIndex;return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement(X.a,{size:"massive"},r.a.createElement(X.a.Item,null,r.a.createElement(c.b,{to:"/"},"Back")))),r.a.createElement("br",null),r.a.createElement("div",{className:"auth"},r.a.createElement(ke,null),r.a.createElement("br",null),r.a.createElement("div",{className:"register"},r.a.createElement(Ue.a,null,r.a.createElement(Ue.a.Title,{active:0===e,index:0,onClick:this.handleClick},r.a.createElement(Ce.a,{name:"dropdown"}),"or Register"),r.a.createElement(Ue.a.Content,{active:-1===e},r.a.createElement(Ne,null))))))}}]),a}(r.a.Component),Be=(a(383),a(41)),Ie=a(197),qe=a(198),Re=a(92),Te=[],De={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null},Se=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(Oe.a)({},e,{quantity:e.quantity+1}):e})):[].concat(Object(Re.a)(e),[Object(Oe.a)({},t,{quantity:1})])},He=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!=t.id})):e.map((function(e){return e.id===t.id?Object(Oe.a)({},e,{quantity:e.quantity-1}):e}))},We={cartItems:[],hidden:!0},Je={sections:[{title:"Tinctures",imageUrl:"https://images.unsplash.com/photo-1585216195257-1e24956105c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",id:1,linkUrl:"tinctures"},{title:"Edibles",imageUrl:"https://images.unsplash.com/photo-1579911098863-2324d6914c01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",id:2,linkUrl:"edibles"},{title:"Topicals",imageUrl:"https://images.unsplash.com/photo-1573171508396-21a51aab334b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",id:3,linkUrl:"topicals"},{title:"Capsules",imageUrl:"https://images.unsplash.com/photo-1563483783233-5bada9b67dec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",size:"large",id:4,linkUrl:"capsules"},{title:"Pets",imageUrl:"https://images.unsplash.com/photo-1562782441-fdc53369e894?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",size:"large",id:6,linkUrl:"pets"},{title:"Sleep",imageUrl:"https://images.unsplash.com/photo-1583687780174-434f85f826b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1214&q=80",size:"large",id:5,linkUrl:"sleep"},{title:"Bundles",imageUrl:"https://images.unsplash.com/photo-1571883496609-625e2694bf76?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",size:"large",id:7,linkUrl:"bundles"}]},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Ae={collections:[{id:1,title:"Tinctures",routeName:"tinctures",items:[{id:1,name:"Strawberry Tincture",imageUrl:"https://images.unsplash.com/photo-1560877241-1dc5569c06a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",price:30},{id:2,name:"Sunset Serbert Tincture",imageUrl:"https://images.unsplash.com/photo-1562782567-a8e7809893bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",price:35},{id:3,name:"Grape Jelly Tincture",imageUrl:"https://images.unsplash.com/photo-1560877241-1dc5569c06a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",price:30},{id:4,name:"Trainwreck Tincture",imageUrl:"https://images.unsplash.com/flagged/photo-1564833125683-b9fde4516274?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",price:30},{id:5,name:"Lemon Haze Tincture",imageUrl:"",price:30},{id:6,name:"Thin Mint Cookies Tincture",imageUrl:"https://images.unsplash.com/photo-1560877241-1dc5569c06a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",price:30},{id:7,name:"Cookies Tincture",imageUrl:"https://images.unsplash.com/photo-1560877241-1dc5569c06a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",price:30},{id:8,name:"Cereal Milk Tincture",imageUrl:"https://images.unsplash.com/photo-1560877241-1dc5569c06a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",price:35},{id:9,name:"Blue Dream Tincture",imageUrl:"https://images.unsplash.com/photo-1560877241-1dc5569c06a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",price:30}]},{id:2,title:"Edibles",routeName:"edibles",items:[{id:10,name:"Brownie",imageUrl:"https://images.unsplash.com/photo-1580750882617-9ee40463d9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",price:25},{id:11,name:"M&M Cookie",imageUrl:"https://images.unsplash.com/photo-1580750882617-9ee40463d9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",price:25},{id:12,name:"Gummy Bears",imageUrl:"https://images.unsplash.com/photo-1580750882617-9ee40463d9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",price:25},{id:13,name:"Chocolate Bar",imageUrl:"https://images.unsplash.com/photo-1580750882617-9ee40463d9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",price:25},{id:14,name:"Weed Butter",imageUrl:"https://images.unsplash.com/photo-1580750882617-9ee40463d9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",price:25},{id:15,name:"Hemp2-O",imageUrl:"https://images.unsplash.com/photo-1580750882617-9ee40463d9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",price:4},{id:16,name:"Snickerdoodle",imageUrl:"https://images.unsplash.com/photo-1580750882617-9ee40463d9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",price:25}]},{id:3,title:"Topicals",routeName:"topicals",items:[{id:17,name:"Butterfinger",imageUrl:"https://images.unsplash.com/photo-1559856668-d3e666959b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",price:30},{id:18,name:"Topical 2",imageUrl:"https://images.unsplash.com/photo-1559856668-d3e666959b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",price:30},{id:19,name:"Topical 3",imageUrl:"https://images.unsplash.com/photo-1559856668-d3e666959b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",price:30},{id:20,name:"Topical 4",imageUrl:"https://images.unsplash.com/photo-1559856668-d3e666959b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",price:30},{id:21,name:"Topical 5",imageUrl:"https://images.unsplash.com/photo-1559856668-d3e666959b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",price:30}]},{id:4,title:"Capsules",routeName:"capsules",items:[{id:22,name:"Capsules 7",imageUrl:"https://images.unsplash.com/photo-1563483783066-9c82a0daaaf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",price:30},{id:23,name:"Capsules 8",imageUrl:"https://images.unsplash.com/photo-1563483783066-9c82a0daaaf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",price:30},{id:24,name:"Capsules 9",imageUrl:"https://images.unsplash.com/photo-1563483783066-9c82a0daaaf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",price:30},{id:25,name:"Capsules 10",imageUrl:"https://images.unsplash.com/photo-1563483783066-9c82a0daaaf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",price:30},{id:26,name:"Capsules 11",imageUrl:"https://images.unsplash.com/photo-1563483783066-9c82a0daaaf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",price:30}]},{id:5,title:"Pets",routeName:"pets",items:[{id:27,name:"Pets 1",imageUrl:"https://images.unsplash.com/photo-1573461217066-9413a9627ccb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",price:30},{id:28,name:"Pets 2",imageUrl:"https://images.unsplash.com/photo-1571170685445-94f230d55140?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",price:35},{id:29,name:"Pets 3",imageUrl:"https://images.unsplash.com/photo-1571941727012-783f3768de46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",price:30},{id:30,name:"Pets 4",imageUrl:"https://images.unsplash.com/photo-1566240234333-c562bad01181?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",price:30},{id:31,name:"Pets 5",imageUrl:"https://images.unsplash.com/photo-1566240234333-c562bad01181?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",price:30},{id:32,name:"Pets 6",imageUrl:"https://images.unsplash.com/photo-1566240234333-c562bad01181?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",price:30}]},{id:6,title:"Sleep",routeName:"sleep",items:[{id:33,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:30},{id:34,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:30},{id:35,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:35},{id:36,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:30},{id:37,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:30},{id:38,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:30}]},{id:7,title:"Bundles",routeName:"bundles",items:[{id:39,name:"Bundle 1",imageUrl:"https://images.unsplash.com/photo-1557934866-261e8b45f102?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",price:60},{id:40,name:"Bundle 2",imageUrl:"https://images.unsplash.com/photo-1557934866-261e8b45f102?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",price:70},{id:41,name:"Bundle 3",imageUrl:"https://images.unsplash.com/photo-1565913163055-810fb688349b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",price:80},{id:42,name:"Bundle 4",imageUrl:"https://images.unsplash.com/photo-1565913163055-810fb688349b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",price:80},{id:43,name:"Bundle 5",imageUrl:"https://images.unsplash.com/photo-1565913163055-810fb688349b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",price:80},{id:44,name:"Bundle 6",imageUrl:"https://images.unsplash.com/photo-1565913163055-810fb688349b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",price:100}]}]},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Pe=Object(Be.combineReducers)({alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SET_ALERT":return[].concat(Object(Re.a)(e),[n]);case"REMOVE_ALERT":return e.filter((function(e){return e.id!==n}));default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"USER_LOADED":return Object(Oe.a)({},e,{isAuthenticated:!0,loading:!1,user:n});case"REGISTER_SUCCESS":case"LOGIN_SUCCESS":return localStorage.setItem("token",n.token),Object(Oe.a)({},e,{},n,{isAuthenticated:!0,loading:!1,user:n});case"REGISTER_FAIL":case"AUTH_ERROR":case"LOGIN_FAIL":case"LOGOUT":return localStorage.removeItem("token"),Object(Oe.a)({},e,{token:null,isAuthenticated:!1,loading:!1});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ADD_ITEM":return Object(Oe.a)({},e,{cartItems:Se(e.cartItems,n)});case"REMOVE_ITEM":return Object(Oe.a)({},e,{cartItems:He(e.cartItems,n)});case"REMOVE_ITEMS":return Object(Oe.a)({},e,{cartItems:e.cartItems.filter((function(e){return e.id!=n.id}))});case"TOGGLE_CART":return Object(Oe.a)({},e,{hidden:!e.hidden});default:return e}},directory:Qe,shop:Le}),_e=[qe.a],Ge=Object(Be.createStore)(Pe,{},Object(Ie.composeWithDevTools)(Be.applyMiddleware.apply(void 0,_e)));localStorage.token&&u(localStorage.token);var Fe=function(){return Object(n.useEffect)((function(){Ge.dispatch(h())}),[]),r.a.createElement(b.a,{store:Ge},r.a.createElement(c.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/checkout",component:ae}),r.a.createElement(o.b,{exact:!0,path:"/",component:ue}),r.a.createElement(o.b,{exact:!0,path:"/edit",component:re}),r.a.createElement(o.b,{path:"/shop",component:he}),r.a.createElement(o.b,{path:"/auth",component:Me})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[212,1,2]]]);
//# sourceMappingURL=main.276db0b5.chunk.js.map