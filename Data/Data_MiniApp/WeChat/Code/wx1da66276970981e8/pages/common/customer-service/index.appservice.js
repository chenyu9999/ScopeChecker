$gwx_XC_107=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_107 || [];
function gz$gwx_XC_107_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_107_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_107_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_107_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'a']])
Z([[7],[3,'c']])
Z([3,'__l'])
Z([3,'5df35915-0'])
Z(z[1])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_107_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_107_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_107=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_107=true;
var x=['./pages/common/customer-service/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_107_1()
var bUW=_n('view')
var oVW=_v()
_(bUW,oVW)
if(_oz(z,0,e,s,gg)){oVW.wxVkey=1
}
else{oVW.wxVkey=2
var xWW=_v()
_(oVW,xWW)
if(_oz(z,1,e,s,gg)){xWW.wxVkey=1
var oXW=_mz(z,'u-empty',['bind:__l',2,'uI',1,'uP',2],[],e,s,gg)
_(xWW,oXW)
}
xWW.wxXCkey=1
xWW.wxXCkey=3
}
oVW.wxXCkey=1
oVW.wxXCkey=3
_(r,bUW)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_107";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_107();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/common/customer-service/index.wxml'] = [$gwx_XC_107, './pages/common/customer-service/index.wxml'];else __wxAppCode__['pages/common/customer-service/index.wxml'] = $gwx_XC_107( './pages/common/customer-service/index.wxml' );
	;__wxRoute = "pages/common/customer-service/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/common/customer-service/index.js";define("pages/common/customer-service/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../../common/vendor.js");require("../../../config/options.js");var r=require("../../../config/theme.js"),o=require("../../../hooks/order/useOrder.js");require("../../../hooks/products/useProductsSearch.js"),require("../../../consts.js"),require("../../../config/enums.js"),require("../../../hooks/app/useConfig.js"),require("../../../hooks/app/useApp.js"),require("../../../config/routes.js"),require("../../../utils/upgrade.js"),require("../../../hooks/app/useLocation.js"),require("../../../hooks/app/useSubscribeMsg.js"),require("../../../hooks/products/useFilm.js"),require("../../../utils/num-util.js"),require("../../../hooks/app/useAreas.js"),require("../../../hooks/products/useShopCoupons.js"),require("../../../hooks/products/useDefaultRegionInfo.js"),Array||e.resolveComponent("u-empty")(),Math;var u=e.defineComponent({__name:"index",setup:function(u){var s=o.useOrder(),n=e.storeToRefs(s).customerServiceUrl,i=e.ref(""),t=e.computed((function(){return n.value&&i.value?"".concat(n.value,"?osn=").concat(i.value):""}));return e.onShow((function(){var r=e.getCurrentPageOptions();i.value=r.platOrderId})),function(o,u){return e.e({a:e.unref(t)},e.unref(t)?{b:e.unref(t)}:{c:e.p({mode:"data",icon:e.unref(r.icons).EMPTY_DATA,text:"获取客服地址错误"})})}}});wx.createPage(u);
},{isPage:true,isComponent:true,currentFile:'pages/common/customer-service/index.js'});require("pages/common/customer-service/index.js");