__wxCodeSpace__.batchAddCompiledTemplate(function(G,R,D,Q,gdc,X,Y,Z,RG={}){var P=RG.P||function(a){return typeof a==='function'?a:()=>{}};return {'pages/market/advertiseNew/components/adSlider/adSlider':(()=>{var H={};var S;var I=(P)=>{if(!S)S=Object.assign({},H);return S[P]};H[""]=(R,C,D,U)=>{var L=R.c;var M=R.m;var O=R.r;var A={"autoplay":new Array(1),"wraperStyle":new Array(1),"swiperStyle":new Array(1)};var K=U===true;return {C:(C,T,E)=>{E("view",{},(N,C)=>{if(C||K||U.wraperStyle)R.y(N,D.wraperStyle);A["wraperStyle"][0]=(D,E,T)=>{R.y(N,D.wraperStyle)}},(C,T,E,B)=>{E("swiper",{},(N,C)=>{if(C||K||U.swiperStyle)R.y(N,D.swiperStyle);A["swiperStyle"][0]=(D,E,T)=>{R.y(N,D.swiperStyle)};if(C||K||U.currentSwiper)O(N,"current",D.currentSwiper);if(C||K||U.autoplay)O(N,"autoplay",D.autoplay);A["autoplay"][0]=(D,E,T)=>{O(N,"autoplay",D.autoplay);E(N)};if(C||K||Z(U.swiperData,"delayTime"))O(N,"interval",X(D.swiperData).delayTime);if(C)O(N,"circular","true");if(C)O(N,"bindchange","swiperChange")},(C,T,E,B,F)=>{F(D.adOpeData,"creativeId",U?U.adOpeData:undefined,[0,"adOpeData"],(C,a,b,c,d,e,T,E,B)=>{var f=X(a).isuse&&X(a).unionCode?1:0;B(f,(C,T,E)=>{if(f===1){E("swiper-item",{},(N,C)=>{if(C||K||!!Z(c,"top")||undefined)R.y(N,"top:"+Y(X(a).top));if(C)L(N,"wxadsdk_tranformstyle")},(C,T,E)=>{E("ad-custom",{},(N,C)=>{if(C||K||Z(c,"unionCode"))O(N,"unit-id",X(a).unionCode)},(C)=>{})})}else{E("swiper-item",{},(N,C)=>{},(C,T,E)=>{E("ad-background",{},(N,C)=>{if(C||K||c)O(N,"adData",a);if(C||K||U.trackingid)O(N,"trackingid",D.trackingid);if(C||K||U.header)O(N,"header",D.header);if(C||K||U.adType)O(N,"adType",D.adType);if(C||K||U.whObj)O(N,"whObj",D.whObj);if(C||K||U.showSign)O(N,"showSign",D.showSign);if(C||K||d)O(N,"adIndex",b);if(C||K||U.currentSwiper)O(N,"currentSwiper",D.currentSwiper);if(C)R.v(N,"videoChange","handleVideo",!1,!1,!1,!1)},(C)=>{})})}})})});var a=X(D.swiperData).dotShow?1:0;B(a,(C,T,E)=>{if(a===1){E("view",{},(N,C)=>{if(C||K||U.dotWrapStyle)R.y(N,D.dotWrapStyle)},(C,T,E,B,F)=>{F(D.adOpeData,"creativeId",U?U.adOpeData:undefined,[0,"adOpeData"],(C,b,c,d,e,f,T,E)=>{E("view",{},(N,C)=>{if(C||K||!!(e||U.currentSwiper||U.dotCurrentStyle||U.dotStyle)||undefined)R.y(N,c==D.currentSwiper?D.dotCurrentStyle:D.dotStyle)},(C)=>{})})})}})})},B:A}};return Object.assign(function(R){return H[R]},{_:H})})(),}});
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['pages/market/advertiseNew/components/adSlider/adSlider.wxss'] = setCssToHead([".",[1],"wxadsdk_tranformstyle{height:112%!important;top:-12%}\n",],undefined,{path:"./pages/market/advertiseNew/components/adSlider/adSlider.wxss"});
}