$gwx_XC_16=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_16 || [];
function gz$gwx_XC_16_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_16=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_16=true;
var x=['./pages/index/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_16_1()
var fKB=_n('privacy')
_(r,fKB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_16";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_16();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx_XC_16, './pages/index/index.wxml'];else __wxAppCode__['pages/index/index.wxml'] = $gwx_XC_16( './pages/index/index.wxml' );
	;__wxRoute = "pages/index/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index/index.js";define("pages/index/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
!function(){const a=getApp();Page({data:{jxList:[],hideNotice:!1,notice:"",parameter:"",img:[{url:"https://qsyxcx.jinjinyl.cn/public/uploads/question/20230226/s_63fb7435e520a.png"}],indicatorDots:!1,autoplay:!0,interval:3e3,duration:800,circular:!0,imgUrls:[{appid:"",link:"",url:"https://qsyxcx.jinjinyl.cn/public/uploads/question/20230226/s_63fb7435e520a.png"},{appid:"",link:"",url:"https://qsyxcx.jinjinyl.cn/public/uploads/question/20230226/s_63fb7435e520a.png"}]},switchNotice:function(){this.setData({hideNotice:!0})},onLoad:function(){this.interstitialAd(),wx.request({url:getApp().globalData.ylurl+"jx.json",success:a=>{console.log(a.data.jiyu1),console.log(a.data.jiyu),console.log(a.data.jiyu2),console.log(a.data.jiyu1),console.log("%c+","font-size: 1px;\n  padding: 122px 217px;\n  background-image: url(https://qsyxcx.jinjinyl.cn/public/uploads/question/20230226/s_63fb7435e520a.png);\n  background-size: contain;\n  background-repeat: no-repeat;\n  color: transparent;"),this.setData({jxList:a.data})}})},banping(){wx.openEmbeddedMiniProgram({appId:"wxdcd3d073e47d1742",path:"/pages/netdisk_share/share?surl=19xz7i263V8qhbge1X10-PQ?pwd=5fya&imagetype=-1"})},interstitialAd:function(){let a=null;wx.createInterstitialAd&&(a=wx.createInterstitialAd({adUnitId:"adunit-8bb69150556722e4"})),a&&a.show().catch(a=>{console.error(a)})},go13:function(){wx.navigateToMiniProgram({appId:"",path:" ",envVersion:"release",shortLink:"",success(a){},fail:function(a){console.log(a)}})},gozhinanzhen:function(){wx.navigateTo({url:"../../pagesA/pages/lp/lp"})},zhengjianzhao:function(){wx.navigateTo({url:"../../pagesE/pages/index/index"})},previewImg:function(){var a=[];a[0]="https://i04piccdn.sogoucdn.com/28e113aa5a21fa63",wx.previewImage({current:0,urls:a})},openqsy:function(){a.globalData.parameter=1},go5:function(){wx.navigateTo({url:"../../pages/numToCase/numToCase"})},goad:function(){var a=this;wx.showModal({title:"提示",confirmText:"好的",confirmColor:"#d4237a",content:"需观看激励视频完成后可自动保存无水印视频",success(n){n.confirm?(console.log("用户点击确定"),a.getAd()):n.cancel&&console.log("用户点击取消")}})},getAd:function(){var a=null;wx.createRewardedVideoAd&&((a=wx.createRewardedVideoAd({adUnitId:"adunit-066b83dc8b56f579"})).onError(a=>{}),a.onClose(n=>{if(n&&n.isEnded||void 0===n)a.offClose(),this.go5();else{var e=this;wx.showModal({title:"观看未完成提示",confirmText:"继续观看",confirmColor:"#d4237a",content:"需观看完成后自动保存无水印视频",success(a){a.confirm?(console.log("用户点击确定"),e.getAd()):a.cancel&&console.log("用户点击取消")}})}})),a&&a.show().catch(n=>{a.load().then(()=>a.show())})},goct1:function(){wx.navigateTo({url:"../../pages/full-mark/full-mark"})},goct2:function(){wx.navigateTo({url:"../../pages/invisible-mark/invisible-mark"})},goct3:function(){wx.navigateTo({url:"../../pages/banner-mark/banner-mark"})},gogeshi:function(){wx.navigateTo({url:"../../pagesD/pages/geshi/index"})},goab:function(){wx.navigateTo({url:"../../pagesB/pages/blood/blood"})},gocs:function(){wx.navigateTo({url:"../../pagesB/pages/networkSpeed/networkSpeed"})},gosm:function(){wx.navigateTo({url:"../../pagesB/pages/blind/blind"})},gogzh:function(){wx.navigateTo({url:"../../pagesC/pages/index/index"})},go121:function(){wx.navigateToMiniProgram({appId:"",path:" ",envVersion:"release",shortLink:"",success(a){},fail:function(a){console.log(a)}})},gojisuanqi:function(){wx.navigateTo({url:"../../pagesC/pages/jisuanqi/index"})},go113:function(){wx.navigateToMiniProgram({appId:"",path:"pages/shuiyin/index",envVersion:"release",shortLink:"",success(a){},fail:function(a){console.log(a)}})},alicopy:function(a){wx.setClipboardData?wx.setClipboardData({data:a.currentTarget.dataset.ali,success:function(a){wx.showToast({title:"复制成功，请前往微信粘贴搜一搜",icon:"none",duration:4e3})}}):wx.showModal({title:"提示",content:"当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"})},go520:function(){wx.navigateTo({url:"../../pagesA/pages/lovesc/lovesc"})},wxtz:function(){wx.navigateTo({url:"../../pages/wxtz/index"})},wenzi3:function(){wx.navigateTo({url:"../../pagesA/pages/fly/fly"})},gojiema:function(){wx.navigateTo({url:"../../pages/scanQrcode/scanQrcode"})},goip:function(){wx.navigateTo({url:"../../pagesB/pages/clock/clock"})},fanyi:function(){wx.navigateTo({url:"../../pagesC/pages/index/index"})},b4:function(){wx.navigateTo({url:"../../taskOuter/pages/util/share/share"})},gotubianji:function(){wx.navigateTo({url:"../../pagesD/pages/tubianji/index"})},gochangtu:function(){wx.navigateTo({url:"../../pagesD/pages/changtu/index"})},gopiliang:function(){wx.navigateTo({url:"../../pagesD/pages/batch/index"})},b2:function(){wx.navigateTo({url:"../../taskOuter/pages/util/material/poster"})},b3:function(){wx.navigateTo({url:"../../taskOuter/pages/util/material/avatar"})},go2:function(){wx.navigateTo({url:"../../pages/vipvideo/vipvideo"})},gojiami:function(){wx.navigateTo({url:"../../pagesC/pages/crypt/crypt"})},gotztz:function(){wx.navigateToMiniProgram({appId:"wx4acb857b763d7a64",path:"/pages/details/details?tid=90",envVersion:"release",shortLink:"",success(a){},fail:function(a){console.log(a)}})},gojiemi:function(){wx.navigateTo({url:"../../pagesC/pages/crypt/decrypt"})},go1:function(){wx.navigateTo({url:"../../pages/video/index"})},go255:function(){wx.navigateTo({url:"../../pagesA/pages/mnld/mnld"})},gosjs:function(){wx.navigateTo({url:"../../pagesB/pages/randomNum/randomNum"})},go22:function(){wx.navigateTo({url:"../../pages/dm/newDanMu"})},go9:function(){wx.navigateTo({url:"../../pages/choujiang/choujiang"})},go21:function(){wx.navigateTo({url:"../../pages/tax/tax"})},previewImage:function(a){wx.previewImage({current:"https://upload.jianshu.io/images/js-qrc.png",urls:this.img})},goguanzhu:function(){wx.previewImage({current:"https://upload.jianshu.io/images/js-qrc.png",urls:"https://upload.jianshu.io/images/js-qrc.png"})},go24:function(){wx.navigateTo({url:"../../pages/ruler/ruler"})},go25:function(){wx.navigateTo({url:"../../pages/navigator/jiashuiyin/waterMarkSet/waterMarkSet"})},go26:function(){wx.navigateTo({url:"../../pages/welcome/welcome"})},goqs:function(){wx.navigateTo({url:"../../pagesB/pages/quse/index"})},go277:function(){wx.navigateTo({url:"../../pagesA/pages/dh/dh"})},go27:function(){wx.navigateTo({url:"../../pagesA/pages/mm/mm"})},goqinghui:function(){wx.navigateTo({url:"../../pagesC/pages/qh/index"})},gozhendong:function(){wx.navigateTo({url:"../../pagesC/pages/zhendong/index"})},golaji:function(){wx.navigateTo({url:"../../pagesD/pages/guide/guide"})},goshanguangdeng:function(){wx.navigateTo({url:"../../pagesC/pages/bainian/bainian"})},goyss:function(){wx.navigateTo({url:"../../pagesB/pages/life_time/life_time"})},go28:function(){wx.navigateTo({url:"../../pagesA/pages/protractor/protractor"})},go29:function(){wx.navigateTo({url:"../../pagesA/pages/time/time"})},go299:function(){wx.navigateTo({url:"../../pagesB/pages/zsz/zsz"})},go23:function(){wx.navigateTo({url:"../../pages/time/time"})},go4:function(){wx.navigateTo({url:"../../pages/createQrcode/createQrcode"})},godk:function(){wx.navigateTo({url:"../../pagesA/pages/album/index"})},bizhi:function(){wx.navigateTo({url:"../../pagesB/pages/index/index"})},gotouxiang:function(){wx.navigateTo({url:"../../pagesB/pages/hottouxiang/index"})},go6:function(){wx.navigateTo({url:"../../pages/figure/figure"})},go8:function(){wx.navigateTo({url:"../../pages/color/color"})},go7:function(){wx.navigateTo({url:"../../pages/counter/counter"})},go3:function(){wx.navigateTo({url:"../../pagesA/pages/imagepress/imagepress"})},go10:function(){wx.navigateTo({url:"../../pages/myphone/myphone"})},tothree:function(){wx.navigateTo({url:"../../components/text/text"})},tofour:function(){wx.navigateTo({url:"../../components/picture/picture"})},tofive:function(){wx.navigateTo({url:"../../pages/video/index"})},tosix:function(){wx.navigateTo({url:"../../pages/vipvideo/vipvideo"})},totool:function(){wx.navigateTo({url:"../../components/search_tool/search_tool"})},tu1:function(){wx.navigateTo({url:"../../pages/jietus/album/index"})},tu2:function(){wx.navigateTo({url:"../../pages/navigator/heart/heart"})},tu3:function(){wx.navigateTo({url:"../../pages/navigator/pintu/pintu/pintu"})},tu4:function(){wx.navigateTo({url:"../../pages/navigator/pintu/cut/cut"})},tu5:function(){wx.navigateTo({url:"../../pages/navigator/pintu/wenzi/wenzi"})},tu6:function(){wx.navigateTo({url:"../../pages/navigator/combine/combine"})},tu8:function(){wx.navigateTo({url:"../../pagesA/pages/wzt/wzt"})},tu88:function(){wx.navigateTo({url:"../../pagesA/pages/geshi/index"})},gomasaike:function(){wx.navigateTo({url:"../../pagesC/pages/indexmsk/index"})},gojianjiao:function(){wx.navigateTo({url:"../../pagesA/pages/screaming/screaming"})},gohuashi:function(){wx.navigateTo({url:"../../pagesA/pages/typeface/typeface"})},gozifu:function(){wx.navigateTo({url:"../../pagesA/pages/emojy/emojy"})},onShareAppMessage:function(){return{title:"给你推荐一个微信便捷PS万能工具，干嘛嘛方便~",path:""}},onShareTimeline:function(){return{title:"给你推荐一个微信便捷PS万能工具，干嘛嘛方便~"}}})}();
},{isPage:true,isComponent:true,currentFile:'pages/index/index.js'});require("pages/index/index.js");