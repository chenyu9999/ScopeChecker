$gwx_XC_55=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_55 || [];
function gz$gwx_XC_55_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_55_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_55_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_55_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[9],[[9],[[8],'g',[[2,'!'],[[7],[3,'$primaryNoDone']]]],[[8],'l',[[2,'&&'],[[2,'!'],[[7],[3,'disableCMSMarketingModal']]],[[2,'!'],[[7],[3,'$cmsMarketingModalDisabled']]]]]],[[8],'m',[[7],[3,'$marketingModalNoBelongToPage']]]],[[8],'u',[[2,'!'],[1,0]]]])
Z([3,'titan-one-component'])
Z([3,'1'])
Z([3,'loadDataReady'])
Z([3,'pageReady'])
Z([3,'shareMessage'])
Z([3,'design-platform-page'])
Z([1,true])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_55_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_55_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_55=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_55=true;
var x=['./cms_design/RAW/pages/usercenter/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_55_1()
var lM1=_mz(z,'titan-one-component',['d',0,'id',1,'s',1],[],e,s,gg)
var aN1=_mz(z,'design-page',['bind:loadDataReady',3,'bind:pageReady',1,'bind:shareMessage',2,'id',3,'isUserCenterPage',4],[],e,s,gg)
_(lM1,aN1)
_(r,lM1)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_55";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_55();	if (__vd_version_info__.delayedGwx) __wxAppCode__['cms_design/RAW/pages/usercenter/index.wxml'] = [$gwx_XC_55, './cms_design/RAW/pages/usercenter/index.wxml'];else __wxAppCode__['cms_design/RAW/pages/usercenter/index.wxml'] = $gwx_XC_55( './cms_design/RAW/pages/usercenter/index.wxml' );
	;__wxRoute = "cms_design/RAW/pages/usercenter/index";__wxRouteBegin = true;__wxAppCurrentFile__="cms_design/RAW/pages/usercenter/index.js";define("cms_design/RAW/pages/usercenter/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../titan.bootstrap.js"),global.beginDefinePage=!0;var e,a=global.bc("package","cms_design"),n=require("../../titan-scoped-env.js"),r=(e=require("../pageBehavior"))&&e.__esModule?e:{default:e},o=require("../onRefresh"),s=require("../onShare");n.requirePlatform("cms").main.CMS;n.Page({pagename:"cms-usercenter",behaviors:[r.default],usingPageInjections:["cms_sdk:tracePromotionPageInjection","cms:authLogin"],data:{pagename:"cms-usercenter",isUserCenter:!0,$vidFailRequestStrategy:"hanged"},onLoad:function(){},onShareAppMessage:s.onShareAppMessage,onPullDownRefresh:o.onPullDownRefresh,onPageScrollHandler:[],onPageScroll:function(e){this.pageScroll(e)}}),global.ec(a),global.beginDefinePage=!1;
},{isPage:false,isComponent:true,currentFile:'cms_design/RAW/pages/usercenter/index.js'});require("cms_design/RAW/pages/usercenter/index.js");