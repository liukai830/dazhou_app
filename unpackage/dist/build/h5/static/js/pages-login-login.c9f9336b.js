(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"12c8":function(t,e,i){"use strict";var a={uToast:i("8e4e").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"zai-box"},[i("v-uni-image",{staticClass:"zai-logo",attrs:{src:"/static/imgs/zaizai-login/login.png",mode:"aspectFit"}}),i("v-uni-view",{staticClass:"zai-title"},[t._v("LOGO区域")]),i("v-uni-view",[i("u-toast",{ref:"uToast"})],1),i("v-uni-view",{staticClass:"zai-form"},[i("v-uni-input",{staticClass:"zai-input",attrs:{placeholder:"请输入用户名"},model:{value:t.userId,callback:function(e){t.userId=e},expression:"userId"}}),i("v-uni-input",{staticClass:"zai-input",attrs:{password:!0,placeholder:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),i("v-uni-view",{staticClass:"zai-label"}),i("v-uni-button",{staticClass:"zai-btn",attrs:{clicked:t.isClicked},nativeOn:{click:function(e){return t.startLogin()}}},[t._v("立即登录")])],1)],1)},r=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}))},"194a":function(t,e,i){"use strict";var a=i("ee27");i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("fc11")),r="";r="http://172.16.254.4:8087/";var o={config:{baseUrl:r,header:(0,n.default)({"Content-Type":"application/json;charset=UTF-8"},"Content-Type","application/json"),data:{},method:"GET",dataType:"json",responseType:"json",success:function(){},fail:function(){},complete:function(){}},interceptor:{request:null,response:null},request:function(t){var e=this;return t||(t={}),t.baseUrl=t.baseUrl||this.config.baseUrl,t.dataType=t.dataType||this.config.dataType,t.url=t.baseUrl+t.url,t.data=t.data||{},t.method=t.method||this.config.method,new Promise((function(i,a){var n=null;t.complete=function(t){var r=t.statusCode;if(t.config=n,e.interceptor.response){var o=e.interceptor.response(t);o&&(t=o)}u(t),200===r?t.data.success?i(t):(uni.showToast({icon:"none",position:"bottom",title:t.data.msg||"接口返回error!",duration:3e3}),uni.stopPullDownRefresh(),uni.hideLoading(),a(t)):(uni.showToast({icon:"none",position:"bottom",title:"接口异常:"+r,duration:3e3}),uni.stopPullDownRefresh(),uni.hideLoading(),a(t))},n=Object.assign({},e.config,t),n.requestId=(new Date).getTime(),e.interceptor.request&&e.interceptor.request(n),s(n),uni.request(n)}))},get:function(t,e,i){return i||(i={}),i.url=t,i.data=e,i.method="GET",this.request(i)},post:function(t,e,i){return i||(i={}),i.url=t,i.data=e,i.method="POST",this.request(i)},put:function(t,e,i){return i||(i={}),i.url=t,i.data=e,i.method="PUT",this.request(i)},delete:function(t,e,i){return i||(i={}),i.url=t,i.data=e,i.method="DELETE",this.request(i)}};function s(t){0}function u(t){var e=t.statusCode;switch(e){case 200:break;case 401:break;case 404:break;default:break}}e.default=o},"32be":function(t,e,i){"use strict";var a=i("8526"),n=i.n(a);n.a},3507:function(t,e,i){"use strict";i.r(e);var a=i("c004"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"3cf5":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".zai-box[data-v-2ea51159]{padding:0 %?100?%;position:relative}.zai-logo[data-v-2ea51159]{width:100%;width:100%;height:%?310?%}.zai-title[data-v-2ea51159]{position:absolute;top:0;line-height:%?360?%;font-size:%?68?%;color:#fff;text-align:center;width:100%;margin-left:%?-100?%}.zai-form[data-v-2ea51159]{margin-top:%?300?%}.zai-input[data-v-2ea51159]{background:#e2f5fc;margin-top:%?30?%;border-radius:%?100?%;padding:%?20?% %?40?%;font-size:%?36?%}.input-placeholder[data-v-2ea51159], .zai-input[data-v-2ea51159]{color:#94afce}.zai-label[data-v-2ea51159]{padding:%?60?% 0;text-align:center;font-size:%?30?%;color:#a7b6d0}.zai-btn[data-v-2ea51159]{background:#ff65a3;color:#fff;border:0;border-radius:%?100?%;font-size:%?36?%}.zai-btn[data-v-2ea51159]:after{border:0}\n/*按钮点击效果*/.zai-btn.button-hover[data-v-2ea51159]{-webkit-transform:translate(%?1?%,%?1?%);transform:translate(%?1?%,%?1?%)}",""]),t.exports=e},"3fed":function(t,e,i){"use strict";i.r(e);var a=i("12c8"),n=i("3507");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("32be");var o,s=i("f0c5"),u=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"2ea51159",null,!1,a["a"],o);e["default"]=u.exports},6459:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView的全局SCSS主题文件 */.u-toast[data-v-d6ae0fe2]{position:fixed;z-index:-1;-webkit-transition:opacity .3s;transition:opacity .3s;text-align:center;color:#fff;border-radius:%?8?%;background:#585858;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;opacity:0;pointer-events:none;padding:0 %?40?%}.u-toast.u-show[data-v-d6ae0fe2]{opacity:1}.u-text[data-v-d6ae0fe2]{word-break:keep-all;white-space:nowrap;line-height:normal}.u-icon[data-v-d6ae0fe2]{margin-right:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:normal}.u-position-center[data-v-d6ae0fe2]{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.u-position-top[data-v-d6ae0fe2]{left:50%;top:20%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.u-position-bottom[data-v-d6ae0fe2]{left:50%;bottom:20%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.u-type-primary[data-v-d6ae0fe2]{color:#2979ff;background-color:#ecf5ff;border:1px solid #d7eafe}.u-type-success[data-v-d6ae0fe2]{color:#19be6b;background-color:#dbf1e1;border:1px solid #bef5c8}.u-type-error[data-v-d6ae0fe2]{color:#fa3534;background-color:#fef0f0;border:1px solid #fde2e2}.u-type-warning[data-v-d6ae0fe2]{color:#f90;background-color:#fdf6ec;border:1px solid #faecd8}.u-type-info[data-v-d6ae0fe2]{color:#909399;background-color:#f4f4f5;border:1px solid #ebeef5}.u-type-default[data-v-d6ae0fe2]{color:#fff;background-color:#585858}',""]),t.exports=e},"6b5c":function(t,e,i){"use strict";var a=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.login=void 0;var n=a(i("194a")),r=function(t){return n.default.post("Api/Machine/GetUserByUser",t)};e.login=r;var o={login:r};e.default=o},8526:function(t,e,i){var a=i("3cf5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0d408469",a,!0,{sourceMap:!1,shadowMode:!1})},"8e4e":function(t,e,i){"use strict";i.r(e);var a=i("f79d"),n=i("a7d2");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("e5f0");var o,s=i("f0c5"),u=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"d6ae0fe2",null,!1,a["a"],o);e["default"]=u.exports},"908a":function(t,e,i){var a=i("6459");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6b446bed",a,!0,{sourceMap:!1,shadowMode:!1})},a7d2:function(t,e,i){"use strict";i.r(e);var a=i("be3f"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},be3f:function(t,e,i){"use strict";i("c975"),i("a9e3"),i("b64b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center",callback:null}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.config.type)>=0&&this.config.icon){var t=this.$u.type2icon(this.config.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"999999"}},methods:{show:function(t){var e=this;this.config=this.$u.deepMerge(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){e.isShow=!1,clearTimeout(e.timer),e.timer=null,"function"===typeof e.config.callback&&e.config.callback(),e.timeEnd()}),this.config.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.config.url){if("/"!=this.config.url[0]&&(this.config.url="/"+this.config.url),Object.keys(this.config.params).length){var t="";/.*\/.*\?.*=.*/.test(this.config.url)?(t=this.$u.queryParams(this.config.params,!1),this.config.url=this.config.url+"&"+t):(t=this.$u.queryParams(this.config.params),this.config.url+=t)}this.config.isTab?uni.switchTab({url:this.config.url}):uni.navigateTo({url:this.config.url})}}}};e.default=a},c004:function(t,e,i){"use strict";var a=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,r=a(i("6b5c")),o={data:function(){return{userId:"",password:"",isClicked:!1}},mounted:function(){n=this,this.isLogin()},methods:{isObjEmpty:function(t){for(var e in t)return!1;return!0},isLogin:function(){try{var t=uni.getStorageSync("currentUser");t&&!n.isObjEmpty(t)&&(n.$store.commit("setUserData",{currentUser:t}),uni.reLaunch({url:"/pages/index/index"}))}catch(e){}},startLogin:function(){var t=this;if(this.isClicked)return!1;""!=this.userId.length?""!=this.password.length?(n.isClicked=!0,setTimeout((function(){n.isClicked=!1}),3e3),this.$refs.uToast.show({title:"登陆中",type:"default"}),r.default.login({userID:this.userId,password:this.password}).then((function(e){var i=e.data;if(i.success)if(i.data&&0!==i.data.length){var a={userId:i.data[0].userID,userName:i.data[0].userName,roles:i.data[0].roles,rolenames:i.data[0].rolenames};n.$store.dispatch("setUserDataAsync",{currentUser:a});try{uni.setStorageSync("currentUser",a)}catch(r){}t.$refs.uToast.show({title:"登录成功",type:"success",url:"/pages/index/index",duration:500,isTab:!1})}else t.$refs.uToast.show({title:"用户名或密码错误",type:"error"});else uni.showToast({icon:"none",position:"bottom",title:i.msg||"接口异常"})}))):this.$refs.uToast.show({title:"密码不能为空",type:"error"}):this.$refs.uToast.show({title:"用户名不能为空",type:"error"})}}};e.default=o},e5f0:function(t,e,i){"use strict";var a=i("908a"),n=i.n(a);n.a},f79d:function(t,e,i){"use strict";var a={uIcon:i("25b1").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-toast",class:[t.isShow?"u-show":"","u-type-"+t.config.type,"u-position-"+t.config.position],style:{zIndex:t.uZIndex}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[t.config.icon?i("u-icon",{staticClass:"u-icon",attrs:{name:t.iconName,size:30,color:t.$u.color[t.config.type]}}):t._e()],1),i("v-uni-text",{staticClass:"u-text"},[t._v(t._s(t.config.title))])],1)},r=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}))}}]);