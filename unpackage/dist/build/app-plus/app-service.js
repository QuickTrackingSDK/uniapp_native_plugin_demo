(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"03ac":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("view",[e("button",{attrs:{_i:1},on:{click:this.navigateToPrePage}})])},r=[]},"0de9":function(t,e,n){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function r(){return"string"===typeof __channelId__&&__channelId__}function a(t,e){switch(i(e)){case"Function":return"function() { [native code] }";default:return e}}function o(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];console[t].apply(console,n)}function u(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=e.shift();if(r())return e.push(e.pop().replace("at ","uni-app:///")),console[o].apply(console,e);var u=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,a)+"---END:JSON---"}catch(r){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=i(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),s="";if(u.length>1){var c=u.pop();s=u.join("---COMMA---"),0===c.indexOf(" at ")?s+=c:s+="---COMMA---"+c}else s=u[0];console[o](s)}n.r(e),n.d(e,"log",(function(){return o})),n.d(e,"default",(function(){return u}))},"10ef":function(t,e,n){"use strict";n.r(e);var i=n("3083"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},1275:function(t,e,n){"use strict";n.r(e);var i=n("fa2d"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"26ec":function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("74c6")),a=uni.requireNativePlugin("qt-analytics-plugin"),o={methods:{registerGP:function(){var e=this;uni.showModal({title:"\u8bbe\u7f6e\u5168\u5c40\u5c5e\u6027",content:JSON.stringify(this.gp),confirmText:"\u540c\u610f",cancelText:"\u53d6\u6d88",success:function(n){n&&n.confirm&&(a.registerGlobalProperties(JSON.stringify(e.gp)),t("log","yz----",JSON.stringify(e.gp)," at pages/setting/index.vue:55"))},fail:function(e){t("log","yz----err",e," at pages/setting/index.vue:62")}})},unregisterGP:function(){uni.showModal({title:"\u5220\u9664\u5168\u5c40\u5c5e\u6027a",confirmText:"\u540c\u610f",cancelText:"\u53d6\u6d88",success:function(t){t&&t.confirm&&a.unregisterGlobalProperty("a")},fail:function(e){t("log","yz----err",e," at pages/setting/index.vue:80")}})},getGlobalProperties:function(){var e=a.getGlobalProperties();t("log","yz----curGP",e," at pages/setting/index.vue:94"),uni.showModal({title:"\u5f53\u524d\u5168\u5c40\u5c5e\u6027",content:JSON.stringify(e||{})})},clearGlobalProperties:function(){uni.showModal({title:"\u6e05\u7a7a\u5168\u5c40\u5c5e\u6027",confirmText:"\u540c\u610f",cancelText:"\u53d6\u6d88",success:function(t){},fail:function(e){t("log","yz----err",e," at pages/setting/index.vue:119")}})},setUserProfile:function(){var e=this;t("log","yz-----",JSON.stringify(e.up)," at pages/setting/index.vue:125"),uni.showModal({title:"\u8bbe\u7f6e\u7528\u6237\u5c5e\u6027",confirmText:"\u540c\u610f",cancelText:"\u53d6\u6d88",content:JSON.stringify(this.up),success:function(n){n&&n.confirm&&(t("log","yz-----up",e.up," at pages/setting/index.vue:133"),r.default.sendEvent("$$_user_profile",e.up,"OTHER"))}})},setUserIdAndOrganization:function(){var e=this;t("log","yz-----",this.puid," at pages/setting/index.vue:143"),uni.showModal({title:"\u8bbe\u7f6e\u7528\u6237\u8d26\u53f7",content:"\u5f53\u524d\u7528\u6237\u8d26\u53f7\u4e3a"+e.puid+"; native\u73af\u5883\u4e0b\uff0c\u8fd8\u652f\u6301\u8bbe\u7f6e\u7ec4\u7ec7\uff0c\u8be6\u7ec6\u89c1\u4ee3\u7801",success:function(t){t&&t.confirm&&r.default.setUserId(e.puid,e.organization)}})}},data:function(){return{title:"textarea",puid:"testUserId",organization:"testOrganization",gp:{a:1,b:2,c:"3",d:"undefined"},up:{a:1,b:2}}}};e.default=o}).call(this,n("0de9")["default"])},"28b8":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:t._$s(0,"sc","setting"),attrs:{_i:0}},[n("div",{staticClass:t._$s(1,"sc","setting-all"),attrs:{_i:1}},[n("view"),n("textarea",{attrs:{value:t._$s(3,"a-value",JSON.stringify(t.gp)),_i:3}}),n("div",{staticClass:t._$s(4,"sc","setting-btn"),attrs:{_i:4}},[n("button",{attrs:{_i:5},on:{click:t.registerGP}}),n("button",{attrs:{_i:6},on:{click:t.unregisterGP}})]),n("div",{staticClass:t._$s(7,"sc","setting-btn"),attrs:{_i:7}},[n("button",{attrs:{_i:8},on:{click:t.getGlobalProperties}}),n("button",{attrs:{_i:9},on:{click:t.clearGlobalProperties}})])]),n("div",{staticClass:t._$s(10,"sc","setting-user"),attrs:{_i:10}},[n("view"),n("div",{staticClass:t._$s(12,"sc","user-account"),attrs:{_i:12}},[n("text"),n("textarea",{attrs:{value:t._$s(14,"a-value",t.puid),_i:14}})]),n("button",{attrs:{_i:15},on:{click:t.setUserIdAndOrganization}}),n("div",{staticClass:t._$s(16,"sc","user-event"),attrs:{_i:16}},[n("text")]),n("button",{attrs:{_i:18},on:{click:t.setUserProfile}})])])},r=[]},3083:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.requireNativePlugin("qt-analytics-plugin"),i={onLaunch:function(){t("log","App Launch",n," at App.vue:7"),"ios"===uni.getSystemInfoSync().platform?n.init("x4sg2k3zvr2w6fuh1mb8shwr","YuZhaoUniapp",1,""):n.preInit("uqcc3wskqjgbvj2ntvapebx9","YuZhaoUniapp",1,"")},onShow:function(){t("log","App Show"," at App.vue:15")},onHide:function(){t("log","App Hide"," at App.vue:18")}};e.default=i}).call(this,n("0de9")["default"])},3374:function(t,e,n){"use strict";n.r(e);var i=n("dbdc"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},4523:function(t,e,n){"use strict";n.r(e);var i=n("a7b1"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"4ea4":function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports["default"]=t.exports},5777:function(t,e,n){"use strict";n.r(e);var i=n("fd94"),r=n("88f9");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var o=n("f0c5"),u=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"78347e4d",null,!1,i["a"],void 0);e["default"]=u.exports},5795:function(t,e,n){"use strict";n.r(e);var i=n("a87d"),r=n("3374");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var o=n("f0c5"),u=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"78e159bd",null,!1,i["a"],void 0);e["default"]=u.exports},"6fcf":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("view",[e("button",{attrs:{_i:1},on:{click:this.navigateToPrePage}}),e("button",{attrs:{_i:2},on:{click:this.navigateToPage2}})])},r=[]},7037:function(t,e){function n(e){return t.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports["default"]=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports["default"]=t.exports},"74c6":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={sendPV:function(t){},sendEvent:function(e,n){var i=uni.requireNativePlugin("qt-analytics-plugin");t("log","yz---------ekvid",e," at utils/umengAdaptor.js:63"),t("log","yz------params",n," at utils/umengAdaptor.js:64"),i.onEventObject(e,JSON.stringify(n))},registerGlobalProperties:function(t){var e=uni.requireNativePlugin("qt-analytics-plugin"),n=JSON.stringify(t);e.registerGlobalProperties(n)},getGlobalProperties:function(){var t=uni.requireNativePlugin("qt-analytics-plugin");return t.getGlobalProperties()},clearGlobalProperties:function(){var t=uni.requireNativePlugin("qt-analytics-plugin");t.clearGlobalProperties()},unregisterGlobalProperty:function(t){var e=uni.requireNativePlugin("qt-analytics-plugin");e.unregisterGlobalProperty(t)},setUserId:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"testOrganization";t("log","yz---------",e,n," at utils/umengAdaptor.js:178");uni.requireNativePlugin("qt-analytics-plugin");UmengAnalytics.onProfileSignIn(e,n)}};e.default=n}).call(this,n("0de9")["default"])},"85e6":function(t,e,n){if("undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),"undefined"!==typeof uni&&uni&&uni.requireGlobal){var i=uni.requireGlobal();ArrayBuffer=i.ArrayBuffer,Int8Array=i.Int8Array,Uint8Array=i.Uint8Array,Uint8ClampedArray=i.Uint8ClampedArray,Int16Array=i.Int16Array,Uint16Array=i.Uint16Array,Int32Array=i.Int32Array,Uint32Array=i.Uint32Array,Float32Array=i.Float32Array,Float64Array=i.Float64Array,BigInt64Array=i.BigInt64Array,BigUint64Array=i.BigUint64Array}uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("5795").default)})),__definePage("pages/page1/page1",(function(){return Vue.extend(n("de90").default)})),__definePage("pages/page2/page2",(function(){return Vue.extend(n("ba4d").default)})),__definePage("pages/click/click",(function(){return Vue.extend(n("5777").default)})),__definePage("pages/setting/index",(function(){return Vue.extend(n("a657").default)}))},"88f9":function(t,e,n){"use strict";n.r(e);var i=n("f099"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"8bbf":function(t,e){t.exports=Vue},9523:function(t,e,n){var i=n("a395");t.exports=function(t,e,n){return e=i(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.__esModule=!0,t.exports["default"]=t.exports},a395:function(t,e,n){var i=n("7037")["default"],r=n("e50d");t.exports=function(t){var e=r(t,"string");return"symbol"===i(e)?e:String(e)},t.exports.__esModule=!0,t.exports["default"]=t.exports},a657:function(t,e,n){"use strict";n.r(e);var i=n("28b8"),r=n("cf1e");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var o=n("f0c5"),u=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"670e451b",null,!1,i["a"],void 0);e["default"]=u.exports},a7b1:function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(n("74c6"));var r=uni.requireNativePlugin("qt-analytics-plugin"),a={onShow:function(){t("log","yz------qt_plugin",r," at pages/page1/page1.vue:16"),r.onPageStart("Page1")},onHide:function(){r.onPageEnd("Page1")},onUnload:function(){r.onPageEnd("Page1")},data:function(){return{}},methods:{navigateToPrePage:function(){uni.navigateBack({})},navigateToPage2:function(){uni.navigateTo({url:"../page2/page2"})}}};e.default=a}).call(this,n("0de9")["default"])},a87d:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:t._$s(0,"sc","uniapp"),attrs:{_i:0}},[n("view",{staticClass:t._$s(1,"sc","uniapp-view"),attrs:{_i:1}},[n("section",{staticClass:t._$s(2,"sc","uni-left"),attrs:{_i:2}}),n("section",{staticClass:t._$s(3,"sc","uni-right"),attrs:{_i:3}},[n("p",{staticClass:t._$s(4,"sc","uni-tip"),attrs:{_i:4}},[n("br")]),n("button",{staticClass:t._$s(6,"sc","uni-viewcode"),attrs:{_i:6},on:{click:t.navigateToCode}})])]),n("view",{staticClass:t._$s(7,"sc","uniapp-view"),attrs:{_i:7}},[n("section",{staticClass:t._$s(8,"sc","uni-left"),attrs:{_i:8}}),n("section",{staticClass:t._$s(9,"sc","uni-right"),attrs:{_i:9}},[n("button",{attrs:{_i:10},on:{click:t.navigateToPv}}),n("button",{attrs:{_i:11},on:{click:t.navigateToClick}})])]),n("view",{staticClass:t._$s(12,"sc","uniapp-view"),attrs:{_i:12}},[n("section",{staticClass:t._$s(13,"sc","uni-left"),attrs:{_i:13}}),n("section",{staticClass:t._$s(14,"sc","uni-right"),attrs:{_i:14}},[n("button",{staticClass:t._$s(15,"sc","uni-setting"),attrs:{_i:15},on:{click:t.navigateToSetting}})])])])},r=[]},b646:function(t,e,n){"use strict";n.r(e);var i=n("10ef");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var a=n("f0c5"),o=Object(a["a"])(i["default"],void 0,void 0,!1,null,null,null,!1,void 0,void 0);e["default"]=o.exports},ba4d:function(t,e,n){"use strict";n.r(e);var i=n("03ac"),r=n("1275");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var o=n("f0c5"),u=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=u.exports},cf1e:function(t,e,n){"use strict";n.r(e);var i=n("26ec"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},d24f:function(t,e,n){"use strict";var i=n("4ea4"),r=i(n("9523"));n("85e6");var a=i(n("b646")),o=i(n("8bbf"));function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}o.default.config.productionTip=!1,a.default.mpType="app";var s=new o.default(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){(0,r.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},a.default));s.$mount()},dbdc:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.requireNativePlugin("qt-analytics-plugin"),i={methods:{navigateToCode:function(){uni.showModal({title:"\u6388\u6743\u9690\u79c1\u5f39\u7a97",content:"\u4ec5native\u73af\u5883\u4e0b\u9700\u8981",confirmText:"\u540c\u610f",cancelText:"\u53d6\u6d88",success:function(e){e&&e.confirm?(uni.setStorageSync("user_authed",!0),"ios"===uni.getSystemInfoSync().platform?(t("log","yz-------qt_plugin",n," at pages/index/index.vue:68"),n.init("x4sg2k3zvr2w6fuh1mb8shwr","YuZhaoUniapp",1,"")):n.init("uqcc3wskqjgbvj2ntvapebx9","YuZhaoUniapp",1,"")):uni.setStorageSync("user_authed",!1)},fail:function(e){t("log","yz----err",e," at pages/index/index.vue:79")}})},navigateToPv:function(){uni.navigateTo({url:"/pages/page1/page1"})},navigateToClick:function(){uni.navigateTo({url:"/pages/click/click"})},navigateToSetting:function(){uni.navigateTo({url:"/pages/setting/index"})}}};e.default=i}).call(this,n("0de9")["default"])},de90:function(t,e,n){"use strict";n.r(e);var i=n("6fcf"),r=n("4523");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var o=n("f0c5"),u=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=u.exports},e50d:function(t,e,n){var i=n("7037")["default"];t.exports=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports["default"]=t.exports},f099:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("74c6")),a={data:function(){return{detail:{product:"\u6c34\u676f",productColor:"\u9ec4\u8272",productId:"003"}}},methods:{clickEvent:function(){r.default.sendEvent("test_clk",this.detail)}}};e.default=a},f0c5:function(t,e,n){"use strict";function i(t,e,n,i,r,a,o,u,s,c){var l,f="function"===typeof t?t.options:t;if(s){f.components||(f.components={});var d=Object.prototype.hasOwnProperty;for(var p in s)d.call(s,p)&&!d.call(f.components,p)&&(f.components[p]=s[p])}if(c&&("function"===typeof c.beforeCreate&&(c.beforeCreate=[c.beforeCreate]),(c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(f.mixins||(f.mixins=[])).push(c)),e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),i&&(f.functional=!0),a&&(f._scopeId="data-v-"+a),o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},f._ssrRegister=l):r&&(l=u?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(f.functional){f._injectStyles=l;var v=f.render;f.render=function(t,e){return l.call(e),v(t,e)}}else{var g=f.beforeCreate;f.beforeCreate=g?[].concat(g,l):[l]}return{exports:t,options:f}}n.d(e,"a",(function(){return i}))},fa2d:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("74c6")),a=uni.requireNativePlugin("qt-analytics-plugin"),o={onShow:function(){a.onPageStart("Page2"),r.default.sendPV({a:1,b:2,c:3,page_name:"manpv_page_custom",d:void 0,e:null,f:""})},onHide:function(){a.onPageEnd("Page2")},onUnload:function(){a.onPageEnd("Page2")},data:function(){return{}},methods:{navigateToPrePage:function(){uni.navigateBack({})}}};e.default=o},fd94:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:t._$s(0,"sc","event-click"),attrs:{_i:0}},[n("div",{staticClass:t._$s(1,"sc","click-detail"),attrs:{_i:1}},[n("img",{attrs:{_i:2}}),n("view",[n("p",[t._v(t._$s(4,"t0-0",t._s("\u5546\u54c1\u540d\u79f0"))+t._$s(4,"t0-1",t._s(t.detail.product)))]),n("p",[t._v(t._$s(5,"t0-0",t._s("\u5546\u54c1\u989c\u8272"))+t._$s(5,"t0-1",t._s(t.detail.productColor)))]),n("p",[t._v(t._$s(6,"t0-0",t._s("\u5546\u54c1ID"))+t._$s(6,"t0-1",t._s(t.detail.productId)))])])]),n("div",{staticClass:t._$s(7,"sc","click-purchase"),attrs:{_i:7}},[n("button",{attrs:{_i:8},on:{click:t.clickEvent}})])])},r=[]}},[["d24f","app-config"]]]);