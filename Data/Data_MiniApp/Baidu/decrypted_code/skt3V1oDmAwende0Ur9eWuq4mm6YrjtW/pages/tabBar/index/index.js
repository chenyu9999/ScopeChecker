!function(n){n.global,n.Function,n.setTimeout,n.setInterval,n.setImmediate,n.requestAnimationFrame,n.swanGlobal,n.jsNative,n.masterManager,n._openSourceDebugInfo,n.System,n.Bdbox_aiapps_jsbridge,n.Bdbox_android_jsbridge,n.Bdbox_android_utils,n._naFile,n._naInteraction,n._naNetwork,n._naRouter,n._naSetting,n._naStorage,n._naUtils,n.globalThis;window.define("211",(function(n,e,t,a,i,r,o,s,d,c,p,g,u,l,h,m,f,b,v,w,y,I,_){"use strict";Component({properties:{bannerImage:{type:String,value:""},size:{type:String,value:"xxs"}},data:{visible:!1},methods:{show:function(){this.setData({visible:!0})},hidden:function(){this.setData({visible:!1})},closePopupBanner:function(){this.setData({visible:!1}),this.triggerEvent("close",{})},bannerHandle:function(){this.triggerEvent("click",{})}}})})),window.define("212",(function(n,e,t,a,i,r,o,s,d,c,p,g,u,l,h,m,f,b,v,w,y,I,_){"use strict";var S=n(11),B=n(14),P=n(213),C=n(23),D=C.sfSeneorTracksEvent,U=C.getUrlParm,N=n(216),T=N.getAdvInfo,A=N.adManger,k=N.getAdParams,x=N.getAdSensorParams,E=n(12).actualHost,O=n(217).AD_POSITION,L=n(32).titleList,W=r(),J=[{imageUrl:"../../../static/images/bg_activity.png",path:E.bannerLayeredHostName+"/wechat-act/weixin/activity/bdLayered",bannerName:"defaultBanner",targetType:"webview"}];Page({data:{alertMsg:{imgUrl:"../../static/images/icon-error-No.png",content:"尊敬的客户您好，经过系统检验，该运单号不符合顺丰规范（或者为非顺丰运单），请确保从正规渠道获取运单！",buttonText:"确定"},showSpringWarn:!1,fnGray:!1,showTcFlag:!0,extraData:"",navigateSource:"",bindMobile:"",bannerList:J,popUpBanner:{},signPromise:{},isRequestBanner:!1},onLoad:function(n){n.source&&i.reportAnalytics("scan_code_to_index",{source:n.source}),W.globalData.hasBindmember&&i.isLoginSync().isLogin&&P.uploadOpenIdAndMobile(),this.loadAdvConfig()},onShow:function(){i.setPageInfo({title:L.other,keywords:"快递,寄快递,顺丰",description:"“顺丰速运”小程序主打场景化的寄件方式和情景化的寄件服务，让您随心选择"}),3===i.getStorageSync("scanJump")&&(i.setStorageSync("scanJump",0),this.scanCode())},clickBanner:function(n){var e=n.currentTarget.dataset.option||{};k(e);if(D.AdClick(x(e)),i.setStorageSync("jumpBannerUrl",JSON.stringify(e)),U("noLogin",e.adverJumpUrl))return P.jumpWebviewWithUserinfo(e.adverJumpUrl);P.bannerPathHandler(e.adverJumpUrl).then((function(n){n&&A(e)}))},bannerAdChange:function(n){var e=n.detail,t=this.data.bannerList.find((function(n){return n.adverId&&n.adverId.toString()===e.currentItemId})),a=x(t);D.AdView(a)},queryIsPilotByOpenId:function(n){var e=this;n&&B.api({url:S.query.queryIsPilotByOpenId,data:{type:n}}).then((function(n){var t=n.data;t.success&&t.obj&&e.setData({fnGray:!0})})).catch((function(n){console.log("queryIsPilotByOpenId error",n)}))},scanCode:function(){P.scanOrder(this,"index")},onShareAppMessage:function(){return{title:"寄快递，用顺丰",path:"pages/tabBar/index/index",imageUrl:"../../../static/images/send-share.png"}},springWarn:function(){var n=this,e=new Date("2019/02/04 00:00:00").getTime(),t=new Date("2019/02/10 23:59:59").getTime(),a="";return new Promise((function(i){P.getCurrentTime().then((function(r){return a=r?new Date(r.replace(/-/g,"/")).getTime():(new Date).getTime(),e<=a&&a<=t?(n.setData({showSpringWarn:!0}),i(!1)):i(!0)})).catch((function(){return i(!0)}))}))},closeSpringWarn:function(){this.setData({showSpringWarn:!1})},navigateToNext:function(n){var e="",t=n.currentTarget.dataset.type,a=""+P.loginUrl;switch(t){case"normal":2,e=P.getH5AppointUrl(),a+="?backChannel=0";break;case"medicine":3,e="/pages/order/sending/order-home/order-home?type=medicine";break;case"large":4,e="/pages/order/sending/order-home/order-home?type=large",a+="?backChannel=1";break;case"international":5,e="/pages/order/sending/order-home/order-home?type=international",a+="?backChannel=2";break;case"internationalIntel":5,a+="?backChannel=16";break;case"scan":a+="?backChannel=3"}if(W.globalData.hasBindmember&&W.globalData.bindMobile){if("scan"===t)return this.scanCode();if("large"===t&&(e=P.getH5AppointUrl(t)),"internationalIntel"===t)return this.toInternationalIntel();i.navigateTo({url:e})}else i.navigateTo({url:a})},toBatch:function(){this.springWarn().then((function(n){n&&i.navigateTo({url:"/pages/order/sending/batch-order/batch-order"})}))},toFC:function(){this.springWarn().then((function(n){n&&i.navigateTo({url:"/pages/order/sending/fcbox-order/fcbox-order"})}))},toColdChain:function(){this.springWarn().then((function(n){n&&i.navigateTo({url:"/pages/order/sending/cold-order/cold-order"})}))},emptyEvent:function(){},toTcMiniProgram:function(){P.tcProgram.toTcProgram()},toService:function(){},toInternationalIntel:function(){P.enterInternational({})},loadAdvConfig:function(){var n=this;T([O.INDEX_POPUP.id,O.INDEX_BANNER.id]).then((function(e){if("{}"!==JSON.stringify(e)&&(e[O.INDEX_BANNER.id].length&&(n.setData({bannerList:e[O.INDEX_BANNER.id].slice(0,3)}),n.data.bannerList.map((function(n){k(n)}))),e[O.INDEX_POPUP.id][0])){n.setData({popUpBanner:e[O.INDEX_POPUP.id][0]});k(n.data.popUpBanner);n.selectComponent("#popupBanner").show()}}))},popupCloseHandler:function(n){k(this.data.popUpBanner)},popupJumpHandler:function(n){i.setStorageSync("jumpBannerUrl",JSON.stringify(this.data.popUpBanner)),A(this.data.popUpBanner),this.selectComponent("#popupBanner").hidden();k(this.data.popUpBanner)}})})),window.__swanRoute="components/popup-banner/popup-banner",window.usingComponents=[],window.usingPluginComponents=[],require("211"),window.__swanRoute="pages/tabBar/index/index",window.usingComponents=["components/alert-dialog/alert-dialog","components/popup-banner/popup-banner"],window.usingPluginComponents=[],require("212")}(__hacked);
//# sourceMappingURL=/output/pages/tabBar/index/index.js.map