(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-process-process-monitoring"],{"0f46":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-cell-group",props:{title:{type:String,default:""},border:{type:Boolean,default:!0},titleStyle:{type:Object,default:function(){return{}}}},data:function(){return{index:0}},provide:function(){return{uCellGroup:this}}};e.default=i},1241:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-cell-item",props:{icon:{type:String,default:""},title:{type:[String,Number],default:""},value:{type:[String,Number],default:""},label:{type:[String,Number],default:""},borderBottom:{type:Boolean,default:!0},borderGap:{type:Boolean,default:!0},hoverClass:{type:String,default:"u-cell-hover"},arrow:{type:Boolean,default:!0},center:{type:Boolean,default:!1},required:{type:Boolean,default:!1},titleWidth:{type:[Number,String],default:""},arrowDirection:{type:String,default:"right"},titleStyle:{type:Object,default:function(){return{}}},valueStyle:{type:Object,default:function(){return{}}},labelStyle:{type:Object,default:function(){return{}}},bgColor:{type:String,default:"transparent"},index:{type:[String,Number],default:""},useLabelSlot:{type:Boolean,default:!1},iconSize:{type:[Number,String],default:34}},inject:{uCellGroup:{default:function(){return{index:0}}}},data:function(){return{itemIndex:0}},created:function(){this.itemIndex=this.uCellGroup.index++},computed:{arrowStyle:function(){var t={};return"up"==this.arrowDirection?t.transform="rotate(-90deg)":"down"==this.arrowDirection?t.transform="rotate(90deg)":t.transform="rotate(0deg)",t}},methods:{click:function(){this.$emit("click",this.index)}}};e.default=i},"1b3b":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView的全局SCSS主题文件 */.u-cell[data-v-3e381b78]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;width:100%;padding:%?20?% %?32?%;font-size:%?28?%;line-height:%?48?%;color:#606266;background-color:#fff;text-align:left}.u-cell_title[data-v-3e381b78]{font-size:%?28?%}.u-cell__left-icon-wrap[data-v-3e381b78]{margin-right:%?10?%;font-size:%?32?%}.u-cell__right-icon-wrap[data-v-3e381b78]{margin-left:%?10?%;color:#969799;font-size:%?28?%}.u-cell__left-icon-wrap[data-v-3e381b78],\r\n.u-cell__right-icon-wrap[data-v-3e381b78]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?48?%}.u-cell-border[data-v-3e381b78]:after{position:absolute;box-sizing:border-box;content:" ";pointer-events:none;right:0;left:0;top:0;border-bottom:1px solid #e4e7ed;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.u-cell-border[data-v-3e381b78]{position:relative}.u-border-gap[data-v-3e381b78]:after{left:%?32?%!important}.u-cell__label[data-v-3e381b78]{margin-top:%?6?%;font-size:%?26?%;line-height:%?36?%;color:#909399}.u-cell__value[data-v-3e381b78]{overflow:hidden;text-align:right;vertical-align:middle;color:#909399;font-size:%?26?%}.u-cell__title[data-v-3e381b78],\r\n.u-cell__value[data-v-3e381b78]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-cell--required[data-v-3e381b78]{overflow:visible;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-cell--required[data-v-3e381b78]:before{position:absolute;content:"*";left:8px;margin-top:%?4?%;font-size:14px;color:#fa3534}',""]),t.exports=e},"201a":function(t,e,n){"use strict";n.r(e);var i=n("dacb"),a=n("ec30");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var l,u=n("f0c5"),o=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"6be6df5d",null,!1,i["a"],l);e["default"]=o.exports},"21ac":function(t,e,n){"use strict";var i={uIcon:n("25b1").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{},[n("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[n("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),n("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?n("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"u-icon-wrap"},[n("u-icon",{attrs:{name:t.backIconName,color:t.backIconColor,size:t.backIconSize}})],1),t.backText?n("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):t._e(),t.title?n("v-uni-view",{staticClass:"u-navbar-content-title",style:[t.titleStyle]},[n("v-uni-view",{staticClass:"u-title u-line-1",style:{color:t.titleColor,fontSize:t.titleSize+"rpx"}},[t._v(t._s(t.title))])],1):t._e(),n("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),n("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1),t.isFixed?n("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(t.navbarHeight)+t.statusBarHeight+"px"}}):t._e()],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},"2fe1":function(t,e,n){var i=n("8a89");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("67c654c6",i,!0,{sourceMap:!1,shadowMode:!1})},"413f":function(t,e,n){"use strict";var i=n("e317"),a=n.n(i);a.a},"4f69":function(t,e,n){"use strict";var i=n("2fe1"),a=n.n(i);a.a},5781:function(t,e,n){"use strict";n.r(e);var i=n("77a0"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"582b":function(t,e,n){"use strict";n.r(e);var i=n("bdf6"),a=n("5781");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var l,u=n("f0c5"),o=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"3314ae99",null,!1,i["a"],l);e["default"]=o.exports},"5fa0":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-cell-box"},[t.title?n("v-uni-view",{staticClass:"u-cell-title",style:[t.titleStyle]},[t._v(t._s(t.title))]):t._e(),n("v-uni-view",{staticClass:"u-cell-item-box",class:{"u-border-bottom u-border-top":t.border}},[t._t("default")],2)],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},6506:function(t,e,n){"use strict";var i=n("9999"),a=n.n(i);a.a},"6a49":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=uni.getSystemInfoSync(),a={},r={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"arrow-left"},backIconSize:{type:[String,Number],default:"30"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:a,statusBarHeight:i.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(i.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(i.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack&&this.customBack(),uni.navigateBack()}}};e.default=r},"77a0":function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,r=i(n("201a")),l={components:{ingsysNavbar:r.default},data:function(){return{flowList:[]}},onLoad:function(){a=this,a.getFlowListData()},methods:{getFlowListData:function(){this.flowList=[{name:"磷酸二铵"},{name:"磷酸装置"},{name:"净化磷酸装置"},{name:"公用工程"}]}}};e.default=l},"7ad7":function(t,e,n){"use strict";var i={uIcon:n("25b1").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-cell",class:{"u-cell-border":t.itemIndex>0&&t.borderBottom,"u-col-center":t.center,"u-border-gap":t.borderGap,"u-cell--required":t.required},style:{backgroundColor:t.bgColor},attrs:{"hover-stay-time":"150","hover-class":t.hoverClass},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t.icon?n("u-icon",{staticClass:"u-cell__left-icon-wrap",attrs:{size:t.iconSize,name:t.icon}}):n("v-uni-view",{staticClass:"u-flex"},[t._t("icon")],2),n("v-uni-view",{staticClass:"u-cell_title",style:[{width:t.titleWidth?t.titleWidth+"rpx":"auto"},t.titleStyle]},[t.title?[t._v(t._s(t.title))]:t._t("title"),t.label||t.$slots.label?n("v-uni-view",{staticClass:"u-cell__label",style:[t.labelStyle]},[t.label?[t._v(t._s(t.label))]:t._t("label")],2):t._e()],2),n("v-uni-view",{staticClass:"u-cell__value",style:[t.valueStyle]},[t.value?[t._v(t._s(t.value))]:t._t("default")],2),t.arrow?n("u-icon",{staticClass:"u-icon-wrap u-cell__right-icon-wrap",style:[t.arrowStyle],attrs:{name:"arrow-right"}}):n("v-uni-view",{staticClass:"u-flex"},[t._t("right-icon")],2)],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},8852:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView的全局SCSS主题文件 */.u-navbar[data-v-1cd05796]{width:100%}.u-navbar-fixed[data-v-1cd05796]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-1cd05796]{width:100%}.u-navbar-inner[data-v-1cd05796]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:relative;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-back-wrap[data-v-1cd05796]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-1cd05796]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-1cd05796]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;-webkit-flex-shrink:0;flex-shrink:0}.u-navbar-centent-slot[data-v-1cd05796]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-title[data-v-1cd05796]{line-height:1;font-size:%?32?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-navbar-right[data-v-1cd05796]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.u-slot-content[data-v-1cd05796]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=e},"8a89":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView的全局SCSS主题文件 */.u-cell-box[data-v-3744e83b]{width:100%}.u-cell-title[data-v-3744e83b]{padding:%?30?% %?32?% %?10?% %?32?%;font-size:%?30?%;text-align:left;color:#909399}.u-cell-item-box[data-v-3744e83b]{background-color:#fff}',""]),t.exports=e},9999:function(t,e,n){var i=n("1b3b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("8050c0d8",i,!0,{sourceMap:!1,shadowMode:!1})},b058:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{title:String},data:function(){return{background:{backgroundImage:"linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))"}}}};e.default=i},bdf6:function(t,e,n){"use strict";var i={uCellGroup:n("f8cc").default,uCellItem:n("e9eb").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("ingsysNavbar",{attrs:{title:"流程监控"}}),n("u-cell-group",t._l(t.flowList,(function(t,e){return n("u-cell-item",{key:e,attrs:{title:t.name,value:"查看详情"}})})),1)],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},d11d:function(t,e,n){"use strict";n.r(e);var i=n("6a49"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},dacb:function(t,e,n){"use strict";var i={uNavbar:n("e385").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("u-navbar",{attrs:{"back-text":"返回",title:t.title,background:t.background}},[t._t("default")],2)],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},e317:function(t,e,n){var i=n("8852");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("55b8f550",i,!0,{sourceMap:!1,shadowMode:!1})},e385:function(t,e,n){"use strict";n.r(e);var i=n("21ac"),a=n("d11d");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("413f");var l,u=n("f0c5"),o=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"1cd05796",null,!1,i["a"],l);e["default"]=o.exports},e715:function(t,e,n){"use strict";n.r(e);var i=n("0f46"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},e9eb:function(t,e,n){"use strict";n.r(e);var i=n("7ad7"),a=n("f6ec");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("6506");var l,u=n("f0c5"),o=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"3e381b78",null,!1,i["a"],l);e["default"]=o.exports},ec30:function(t,e,n){"use strict";n.r(e);var i=n("b058"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},f6ec:function(t,e,n){"use strict";n.r(e);var i=n("1241"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},f8cc:function(t,e,n){"use strict";n.r(e);var i=n("5fa0"),a=n("e715");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("4f69");var l,u=n("f0c5"),o=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"3744e83b",null,!1,i["a"],l);e["default"]=o.exports}}]);