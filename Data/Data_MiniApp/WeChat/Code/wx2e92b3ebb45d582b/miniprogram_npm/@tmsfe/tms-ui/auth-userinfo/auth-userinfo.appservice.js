$gwx_XC_5=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_5 || [];
function gz$gwx_XC_5_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'customUI']]])
Z([[7],[3,'showUserInfoModal']])
Z([3,'getUserInfo'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_5=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_5=true;
var x=['./miniprogram_npm/@tmsfe/tms-ui/auth-userinfo/auth-userinfo.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_5_1()
var bSD=_v()
_(r,bSD)
if(_oz(z,0,e,s,gg)){bSD.wxVkey=1
var oTD=_v()
_(bSD,oTD)
if(_oz(z,1,e,s,gg)){oTD.wxVkey=1
}
oTD.wxXCkey=1
}
else{bSD.wxVkey=2
var xUD=_n('slot')
_rz(z,xUD,'bindtap',2,e,s,gg)
_(bSD,xUD)
}
bSD.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_5";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_5();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/auth-userinfo/auth-userinfo.wxml'] = [$gwx_XC_5, './miniprogram_npm/@tmsfe/tms-ui/auth-userinfo/auth-userinfo.wxml'];else __wxAppCode__['miniprogram_npm/@tmsfe/tms-ui/auth-userinfo/auth-userinfo.wxml'] = $gwx_XC_5( './miniprogram_npm/@tmsfe/tms-ui/auth-userinfo/auth-userinfo.wxml' );
	;__wxRoute = "miniprogram_npm/@tmsfe/tms-ui/auth-userinfo/auth-userinfo";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/@tmsfe/tms-ui/auth-userinfo/auth-userinfo.js";define("miniprogram_npm/@tmsfe/tms-ui/auth-userinfo/auth-userinfo.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,t=(e=require("../platformUtils"))&&e.__esModule?e:{default:e};var r={nickName:"微信用户",avatarUrl:"https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132",gender:0,country:"",province:"",city:"",language:""};Component({properties:{showUserInfoModal:{type:Boolean,value:!1},customUI:{type:Boolean,value:!1},useDesc:{type:String,value:""}},data:{authIntroImg:"https://static.img.tai.qq.com/mp/components/auth-userinfo/auth-intro.png",hasGetUserProfile:!!wx.getUserProfile},lifetimes:{attached:function(){t.default.isSinan()||this.setData({authIntroImg:"https://static.img.tai.qq.com/mp/components/auth-userinfo/auth-intro-mycar.png"})}},methods:{getUserInfo:function(){var e=this;if(!this.gettingUserInfo){this.gettingUserInfo=!0;var t=function(t){e.triggerEvent("auth-changed",{cancel:!1,userInfo:t.userInfo||r}),e.triggerEvent("getUserInfo",{success:!0,userInfo:t.userInfo||r,error:null})},n=function(t){e.triggerEvent("auth-changed",{cancel:!0,userInfo:r,error:t}),e.triggerEvent("getUserInfo",{success:!1,userInfo:r,error:t})},s=function(){return e.gettingUserInfo=!1};wx.getUserProfile?wx.getUserProfile({success:t,fail:n,complete:s,desc:this.data.useDesc||"提供更好的出行服务"}):wx.getUserInfo({success:t,fail:n,complete:s})}}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/@tmsfe/tms-ui/auth-userinfo/auth-userinfo.js'});require("miniprogram_npm/@tmsfe/tms-ui/auth-userinfo/auth-userinfo.js");