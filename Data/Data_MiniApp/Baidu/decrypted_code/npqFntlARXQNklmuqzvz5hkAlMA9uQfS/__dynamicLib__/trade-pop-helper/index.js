window.define("1",(function(e,t,n,r,i,o,a,s,c,u,f,d,p,l,h,g,_,y,v){"use strict";!function(n){n.global,n.Function,n.setTimeout,n.setInterval,n.setImmediate,n.requestAnimationFrame,n.swanGlobal,n.jsNative,n.masterManager,n._openSourceDebugInfo,n.System,n.Bdbox_aiapps_jsbridge,n.Bdbox_android_jsbridge,n.Bdbox_android_utils,n._naFile,n._naInteraction,n._naNetwork,n._naRouter,n._naSetting,n._naStorage,n._naUtils,n.globalThis;var r=e(2);t.exports=r}(__hacked)})),window.define("2",(function(e,t,n,r,i,o,a,s,c,u,f,d,p,l,h,g,_,y,v){"use strict";!function(n){n.global,n.Function;var r=n.setTimeout,o=(n.setInterval,n.setImmediate,n.requestAnimationFrame,n.swanGlobal,n.jsNative,n.masterManager,n._openSourceDebugInfo,n.System,n.Bdbox_aiapps_jsbridge,n.Bdbox_android_jsbridge,n.Bdbox_android_utils,n._naFile,n._naInteraction,n._naNetwork,n._naRouter,n._naSetting,n._naStorage,n._naUtils,n.globalThis,e(3)),a=e(4),s={version:"v0.0.1",delayTime:200,trackUrl:"https://etrade-api.baidu.com/cps/user/record/dlsa",verifyEffectUrl:"https://etrade-api.baidu.com/goods/cps/auth",reTry:1};function c(){var e=getCurrentPages();if(e.length){var t=e[e.length-1];return{path:t.route,params:t.options}}}function u(){var e={appKey:"",initOptions:{},schemaHost:"",tradePopFailNum:0,verifyEffectFailNum:0,version:"0.0.0"};this._set=function(t,n){e[t]=n},this._get=function(t){return e[t]}}function f(){var e,t=this,n=this._get("appKey");e="0.0.1"===this._get("version")?c().path:this._get("initOptions").appOptions.path;var r=a.timestamp,o="programKey="+n+"&path="+e+"&time="+r;i.request({url:s.verifyEffectUrl,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",dataType:"json",responseType:"text",data:{a:n,t:r,c:a.AesEncrypt(o)},success:function(e){var n=e.data;if("string"==typeof n)try{n=JSON.parse(n)}catch(e){return}if(0!=+n.code){var r=t._get("verifyEffectFailNum");if(r++,t._set("verifyEffectFailNum",r),r>s.reTry)return;f.call(t)}},fail:function(e){console.log("错误码："+e.errCode),console.log("错误信息："+e.errMsg)}})}function d(){var e=this,t=Math.floor(Date.now()/1e3),n=this._get("initOptions").appOptions.query,r="";i.getSwanId({success:function(a){r=a.data.swanid;var c={bduss:"",businessId:n.contentId,cuid:"",itemId:n.spuId,masterId:n.fromHost,mid:n.mid,naid:e._get("schemaHost"),payAppKey:n.payAppKey,programKey:e._get("appKey"),scene:n.scene,sid:r,userPassId:"",version:s.version},u="";for(var f in c)c[f]&&(u=u+f+"="+c[f]+"&");u=u.substring(0,u.length-1),c.timestamp=t,c.sign=o.hexMD5(u+"&0f1f7b6fee9a73cb77331f067b0380b0&"+t),i.request({url:s.trackUrl,header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",dataType:"json",responseType:"text",data:c,success:function(t){var n=t.data;if("string"==typeof n)try{n=JSON.parse(n)}catch(e){return}if(0!=+n.code){var r=e._get("tradePopFailNum");if(r++,e._set("tradePopFailNum",r),r>s.reTry)return;d.call(e)}},fail:function(e){console.log("错误码："+e.errCode),console.log("错误信息："+e.errMsg)}})},fail:function(e){console.log("getSwanId fail",e)}})}var p=void 0;u.prototype={constructor:u,init:function(e){var t=this;if("0.0.1"===e.version)try{this._set("initOptions",e),this._set("version",e.version);var n=i.getEnvInfoSync(),o="";n instanceof Error?console.log("getAppKeyfail",n.message):(o=n.appKey,this._set("appKey",o))}catch(e){console.log("init1:",e)}else try{var c=i.getEnvInfoSync(),u="";c instanceof Error?console.log("getAppKeyfail",c.message):(u=c.appKey,this._set("appKey",u),a.register({path:e.appOptions.path,appKey:u})),this._set("initOptions",e),f.call(this),i.getSystemInfo({success:function(n){t._set("schemaHost",n.host),e.delayTime&&(s.delayTime=1e3*e.delayTime),p=r((function(){d.call(t),console.log("sentRes")}),s.delayTime)}})}catch(e){console.log("init:",e)}},trackLog:function(e){var t=this;try{a.register({path:c().path,appKey:this._get("appKey")}),f.call(this),i.getSystemInfo({success:function(n){t._set("schemaHost",n.host),e.delayTime&&(s.delayTime=1e3*e.delayTime),p=r((function(){d.call(t),console.log("sentRes")}),s.delayTime)}})}catch(e){console.log("trackLog:",e)}},clear:function(){try{console.log("已卸载"),clearTimeout(p)}catch(e){console.log("clear:",e)}},clearTimer:function(){try{console.log("已卸载"),clearTimeout(p)}catch(e){console.log("clear:",e)}}},t.exports=new u}(__hacked)})),window.define("3",(function(e,t,n,r,i,o,a,s,c,u,f,d,p,l,h,g,_,y,v){"use strict";!function(e){function n(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var n=1732584193,r=-271733879,u=-1732584194,f=271733878,d=0;d<e.length;d+=16){var p=n,l=r,h=u,g=f;n=i(n,r,u,f,e[d+0],7,-680876936),f=i(f,n,r,u,e[d+1],12,-389564586),u=i(u,f,n,r,e[d+2],17,606105819),r=i(r,u,f,n,e[d+3],22,-1044525330),n=i(n,r,u,f,e[d+4],7,-176418897),f=i(f,n,r,u,e[d+5],12,1200080426),u=i(u,f,n,r,e[d+6],17,-1473231341),r=i(r,u,f,n,e[d+7],22,-45705983),n=i(n,r,u,f,e[d+8],7,1770035416),f=i(f,n,r,u,e[d+9],12,-1958414417),u=i(u,f,n,r,e[d+10],17,-42063),r=i(r,u,f,n,e[d+11],22,-1990404162),n=i(n,r,u,f,e[d+12],7,1804603682),f=i(f,n,r,u,e[d+13],12,-40341101),u=i(u,f,n,r,e[d+14],17,-1502002290),n=o(n,r=i(r,u,f,n,e[d+15],22,1236535329),u,f,e[d+1],5,-165796510),f=o(f,n,r,u,e[d+6],9,-1069501632),u=o(u,f,n,r,e[d+11],14,643717713),r=o(r,u,f,n,e[d+0],20,-373897302),n=o(n,r,u,f,e[d+5],5,-701558691),f=o(f,n,r,u,e[d+10],9,38016083),u=o(u,f,n,r,e[d+15],14,-660478335),r=o(r,u,f,n,e[d+4],20,-405537848),n=o(n,r,u,f,e[d+9],5,568446438),f=o(f,n,r,u,e[d+14],9,-1019803690),u=o(u,f,n,r,e[d+3],14,-187363961),r=o(r,u,f,n,e[d+8],20,1163531501),n=o(n,r,u,f,e[d+13],5,-1444681467),f=o(f,n,r,u,e[d+2],9,-51403784),u=o(u,f,n,r,e[d+7],14,1735328473),n=a(n,r=o(r,u,f,n,e[d+12],20,-1926607734),u,f,e[d+5],4,-378558),f=a(f,n,r,u,e[d+8],11,-2022574463),u=a(u,f,n,r,e[d+11],16,1839030562),r=a(r,u,f,n,e[d+14],23,-35309556),n=a(n,r,u,f,e[d+1],4,-1530992060),f=a(f,n,r,u,e[d+4],11,1272893353),u=a(u,f,n,r,e[d+7],16,-155497632),r=a(r,u,f,n,e[d+10],23,-1094730640),n=a(n,r,u,f,e[d+13],4,681279174),f=a(f,n,r,u,e[d+0],11,-358537222),u=a(u,f,n,r,e[d+3],16,-722521979),r=a(r,u,f,n,e[d+6],23,76029189),n=a(n,r,u,f,e[d+9],4,-640364487),f=a(f,n,r,u,e[d+12],11,-421815835),u=a(u,f,n,r,e[d+15],16,530742520),n=s(n,r=a(r,u,f,n,e[d+2],23,-995338651),u,f,e[d+0],6,-198630844),f=s(f,n,r,u,e[d+7],10,1126891415),u=s(u,f,n,r,e[d+14],15,-1416354905),r=s(r,u,f,n,e[d+5],21,-57434055),n=s(n,r,u,f,e[d+12],6,1700485571),f=s(f,n,r,u,e[d+3],10,-1894986606),u=s(u,f,n,r,e[d+10],15,-1051523),r=s(r,u,f,n,e[d+1],21,-2054922799),n=s(n,r,u,f,e[d+8],6,1873313359),f=s(f,n,r,u,e[d+15],10,-30611744),u=s(u,f,n,r,e[d+6],15,-1560198380),r=s(r,u,f,n,e[d+13],21,1309151649),n=s(n,r,u,f,e[d+4],6,-145523070),f=s(f,n,r,u,e[d+11],10,-1120210379),u=s(u,f,n,r,e[d+2],15,718787259),r=s(r,u,f,n,e[d+9],21,-343485551),n=c(n,p),r=c(r,l),u=c(u,h),f=c(f,g)}return Array(n,r,u,f)}function r(e,t,n,r,i,o){return c((a=c(c(t,e),c(r,o)))<<(s=i)|a>>>32-s,n);var a,s}function i(e,t,n,i,o,a,s){return r(t&n|~t&i,e,t,o,a,s)}function o(e,t,n,i,o,a,s){return r(t&i|n&~i,e,t,o,a,s)}function a(e,t,n,i,o,a,s){return r(t^n^i,e,t,o,a,s)}function s(e,t,n,i,o,a,s){return r(n^(t|~i),e,t,o,a,s)}function c(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function u(e){for(var t=Array(),n=0;n<8*e.length;n+=8)t[n>>5]|=(255&e.charCodeAt(n/8))<<n%32;return t}e.global,e.Function,e.setTimeout,e.setInterval,e.setImmediate,e.requestAnimationFrame,e.swanGlobal,e.jsNative,e.masterManager,e._openSourceDebugInfo,e.System,e.Bdbox_aiapps_jsbridge,e.Bdbox_android_jsbridge,e.Bdbox_android_utils,e._naFile,e._naInteraction,e._naNetwork,e._naRouter,e._naSetting,e._naStorage,e._naUtils,e.globalThis,t.exports={hexMD5:function(e){return function(e){for(var t="0123456789abcdef",n="",r=0;r<4*e.length;r++)n+=t.charAt(e[r>>2]>>r%4*8+4&15)+t.charAt(e[r>>2]>>r%4*8&15);return n}(n(u(e),8*e.length))},b64Md5:function(e){return function(e){for(var t="",n=0;n<4*e.length;n+=3)for(var r=(e[n>>2]>>n%4*8&255)<<16|(e[n+1>>2]>>(n+1)%4*8&255)<<8|e[n+2>>2]>>(n+2)%4*8&255,i=0;i<4;i++)8*n+6*i>32*e.length?t+="":t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(r>>6*(3-i)&63);return t}(n(u(e),8*e.length))}}}(__hacked)})),window.define("4",(function(e,t,n,r,i,o,a,s,c,u,f,d,p,l,h,g,_,y,v){"use strict";!function(n){n.global,n.Function,n.setTimeout,n.setInterval,n.setImmediate,n.requestAnimationFrame,n.swanGlobal,n.jsNative,n.masterManager,n._openSourceDebugInfo,n.System,n.Bdbox_aiapps_jsbridge,n.Bdbox_android_jsbridge,n.Bdbox_android_utils,n._naFile,n._naInteraction,n._naNetwork,n._naRouter,n._naSetting,n._naStorage,n._naUtils,n.globalThis;var r=e(5),i=e(3),o="",a="",s=Math.floor(Date.now()/1e3);t.exports={register:function(e){o=e.path;var t=e.appKey;o&&(a=r.enc.Utf8.parse(i.hexMD5(t+"%="+o+"%="+s)))},AesEncrypt:function(e){var t=r.enc.Utf8.parse(e);return r.AES.encrypt(t,a,{mode:r.mode.CBC,padding:r.pad.Pkcs7}).ciphertext.toString().toUpperCase()},AesDecrypt:function(e){var t=r.enc.Hex.parse(e),n=r.enc.Base64.stringify(t);return r.AES.decrypt(n,a,{mode:r.mode.CBC,padding:r.pad.Pkcs7}).toString(r.enc.Utf8).toString()},timestamp:s}}(__hacked)})),window.define("5",(function(e,t,n,r,i,o,a,s,c,u,f,d,p,l,h,g,_,y,v){"use strict";!function(e){e.global,e.Function,e.setTimeout,e.setInterval,e.setImmediate,e.requestAnimationFrame,e.swanGlobal,e.jsNative,e.masterManager,e._openSourceDebugInfo,e.System,e.Bdbox_aiapps_jsbridge,e.Bdbox_android_jsbridge,e.Bdbox_android_utils,e._naFile,e._naInteraction,e._naNetwork,e._naRouter,e._naSetting,e._naStorage,e._naUtils,e.globalThis;var n,r,i=i||function(e,t){var n={},r=n.lib={},i=function(){},o=r.Base={extend:function(e){i.prototype=this;var t=new i;return e&&t.mixIn(e),t.hasOwnProperty("init")||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},a=r.WordArray=o.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=null!=t?t:4*e.length},toString:function(e){return(e||c).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes;if(e=e.sigBytes,this.clamp(),r%4)for(var i=0;i<e;i++)t[r+i>>>2]|=(n[i>>>2]>>>24-i%4*8&255)<<24-(r+i)%4*8;else if(65535<n.length)for(i=0;i<e;i+=4)t[r+i>>>2]=n[i>>>2];else t.push.apply(t,n);return this.sigBytes+=e,this},clamp:function(){var t=this.words,n=this.sigBytes;t[n>>>2]&=4294967295<<32-n%4*8,t.length=e.ceil(n/4)},clone:function(){var e=o.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var n=[],r=0;r<t;r+=4)n.push(4294967296*e.random()|0);return new a.init(n,t)}}),s=n.enc={},c=s.Hex={stringify:function(e){var t=e.words;e=e.sigBytes;for(var n=[],r=0;r<e;r++){var i=t[r>>>2]>>>24-r%4*8&255;n.push((i>>>4).toString(16)),n.push((15&i).toString(16))}return n.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-r%8*4;return new a.init(n,t/2)}},u=s.Latin1={stringify:function(e){var t=e.words;e=e.sigBytes;for(var n=[],r=0;r<e;r++)n.push(String.fromCharCode(t[r>>>2]>>>24-r%4*8&255));return n.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r++)n[r>>>2]|=(255&e.charCodeAt(r))<<24-r%4*8;return new a.init(n,t)}},f=s.Utf8={stringify:function(e){try{return decodeURIComponent(escape(u.stringify(e)))}catch(e){throw Error("Malformed UTF-8 data")}},parse:function(e){return u.parse(unescape(encodeURIComponent(e)))}},d=r.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new a.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=f.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n=this._data,r=n.words,i=n.sigBytes,o=this.blockSize,s=i/(4*o);if(t=(s=t?e.ceil(s):e.max((0|s)-this._minBufferSize,0))*o,i=e.min(4*t,i),t){for(var c=0;c<t;c+=o)this._doProcessBlock(r,c);c=r.splice(0,t),n.sigBytes-=i}return new a.init(c,i)},clone:function(){var e=o.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});r.Hasher=d.extend({cfg:o.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){d.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new p.HMAC.init(e,n).finalize(t)}}});var p=n.algo={};return n}(Math);r=(n=i).lib.WordArray,n.enc.Base64={stringify:function(e){var t=e.words,n=e.sigBytes,r=this._map;e.clamp(),e=[];for(var i=0;i<n;i+=3)for(var o=(t[i>>>2]>>>24-i%4*8&255)<<16|(t[i+1>>>2]>>>24-(i+1)%4*8&255)<<8|t[i+2>>>2]>>>24-(i+2)%4*8&255,a=0;4>a&&i+.75*a<n;a++)e.push(r.charAt(o>>>6*(3-a)&63));if(t=r.charAt(64))for(;e.length%4;)e.push(t);return e.join("")},parse:function(e){var t=e.length,n=this._map;(i=n.charAt(64))&&-1!=(i=e.indexOf(i))&&(t=i);for(var i=[],o=0,a=0;a<t;a++)if(a%4){var s=n.indexOf(e.charAt(a-1))<<a%4*2,c=n.indexOf(e.charAt(a))>>>6-a%4*2;i[o>>>2]|=(s|c)<<24-o%4*8,o++}return r.create(i,o)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},function(e){function t(e,t,n,r,i,o,a){return((e=e+(t&n|~t&r)+i+a)<<o|e>>>32-o)+t}function n(e,t,n,r,i,o,a){return((e=e+(t&r|n&~r)+i+a)<<o|e>>>32-o)+t}function r(e,t,n,r,i,o,a){return((e=e+(t^n^r)+i+a)<<o|e>>>32-o)+t}function o(e,t,n,r,i,o,a){return((e=e+(n^(t|~r))+i+a)<<o|e>>>32-o)+t}for(var a=i,s=(u=a.lib).WordArray,c=u.Hasher,u=a.algo,f=[],d=0;64>d;d++)f[d]=4294967296*e.abs(e.sin(d+1))|0;u=u.MD5=c.extend({_doReset:function(){this._hash=new s.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,i){for(var a=0;16>a;a++){var s=e[c=i+a];e[c]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8)}a=this._hash.words;var c=e[i+0],u=(s=e[i+1],e[i+2]),d=e[i+3],p=e[i+4],l=e[i+5],h=e[i+6],g=e[i+7],_=e[i+8],y=e[i+9],v=e[i+10],m=e[i+11],S=e[i+12],x=e[i+13],b=e[i+14],B=e[i+15],k=t(k=a[0],E=a[1],C=a[2],w=a[3],c,7,f[0]),w=t(w,k,E,C,s,12,f[1]),C=t(C,w,k,E,u,17,f[2]),E=t(E,C,w,k,d,22,f[3]);k=t(k,E,C,w,p,7,f[4]),w=t(w,k,E,C,l,12,f[5]),C=t(C,w,k,E,h,17,f[6]),E=t(E,C,w,k,g,22,f[7]),k=t(k,E,C,w,_,7,f[8]),w=t(w,k,E,C,y,12,f[9]),C=t(C,w,k,E,v,17,f[10]),E=t(E,C,w,k,m,22,f[11]),k=t(k,E,C,w,S,7,f[12]),w=t(w,k,E,C,x,12,f[13]),C=t(C,w,k,E,b,17,f[14]),k=n(k,E=t(E,C,w,k,B,22,f[15]),C,w,s,5,f[16]),w=n(w,k,E,C,h,9,f[17]),C=n(C,w,k,E,m,14,f[18]),E=n(E,C,w,k,c,20,f[19]),k=n(k,E,C,w,l,5,f[20]),w=n(w,k,E,C,v,9,f[21]),C=n(C,w,k,E,B,14,f[22]),E=n(E,C,w,k,p,20,f[23]),k=n(k,E,C,w,y,5,f[24]),w=n(w,k,E,C,b,9,f[25]),C=n(C,w,k,E,d,14,f[26]),E=n(E,C,w,k,_,20,f[27]),k=n(k,E,C,w,x,5,f[28]),w=n(w,k,E,C,u,9,f[29]),C=n(C,w,k,E,g,14,f[30]),k=r(k,E=n(E,C,w,k,S,20,f[31]),C,w,l,4,f[32]),w=r(w,k,E,C,_,11,f[33]),C=r(C,w,k,E,m,16,f[34]),E=r(E,C,w,k,b,23,f[35]),k=r(k,E,C,w,s,4,f[36]),w=r(w,k,E,C,p,11,f[37]),C=r(C,w,k,E,g,16,f[38]),E=r(E,C,w,k,v,23,f[39]),k=r(k,E,C,w,x,4,f[40]),w=r(w,k,E,C,c,11,f[41]),C=r(C,w,k,E,d,16,f[42]),E=r(E,C,w,k,h,23,f[43]),k=r(k,E,C,w,y,4,f[44]),w=r(w,k,E,C,S,11,f[45]),C=r(C,w,k,E,B,16,f[46]),k=o(k,E=r(E,C,w,k,u,23,f[47]),C,w,c,6,f[48]),w=o(w,k,E,C,g,10,f[49]),C=o(C,w,k,E,b,15,f[50]),E=o(E,C,w,k,l,21,f[51]),k=o(k,E,C,w,S,6,f[52]),w=o(w,k,E,C,d,10,f[53]),C=o(C,w,k,E,v,15,f[54]),E=o(E,C,w,k,s,21,f[55]),k=o(k,E,C,w,_,6,f[56]),w=o(w,k,E,C,B,10,f[57]),C=o(C,w,k,E,h,15,f[58]),E=o(E,C,w,k,x,21,f[59]),k=o(k,E,C,w,p,6,f[60]),w=o(w,k,E,C,m,10,f[61]),C=o(C,w,k,E,u,15,f[62]),E=o(E,C,w,k,y,21,f[63]),a[0]=a[0]+k|0,a[1]=a[1]+E|0,a[2]=a[2]+C|0,a[3]=a[3]+w|0},_doFinalize:function(){var t=this._data,n=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;n[i>>>5]|=128<<24-i%32;var o=e.floor(r/4294967296);for(n[15+(i+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),n[14+(i+64>>>9<<4)]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8),t.sigBytes=4*(n.length+1),this._process(),n=(t=this._hash).words,r=0;4>r;r++)i=n[r],n[r]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8);return t},clone:function(){var e=c.clone.call(this);return e._hash=this._hash.clone(),e}}),a.MD5=c._createHelper(u),a.HmacMD5=c._createHmacHelper(u)}(Math),function(){var e,t=i,n=(e=t.lib).Base,r=e.WordArray,o=(e=t.algo).EvpKDF=n.extend({cfg:n.extend({keySize:4,hasher:e.MD5,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var n=(s=this.cfg).hasher.create(),i=r.create(),o=i.words,a=s.keySize,s=s.iterations;o.length<a;){c&&n.update(c);var c=n.update(e).finalize(t);n.reset();for(var u=1;u<s;u++)c=n.finalize(c),n.reset();i.concat(c)}return i.sigBytes=4*a,i}});t.EvpKDF=function(e,t,n){return o.create(n).compute(e,t)}}(),i.lib.Cipher||function(e){var t=(h=i).lib,n=t.Base,r=t.WordArray,o=t.BufferedBlockAlgorithm,a=h.enc.Base64,s=h.algo.EvpKDF,c=t.Cipher=o.extend({cfg:n.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,n){this.cfg=this.cfg.extend(n),this._xformMode=e,this._key=t,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){return e&&this._append(e),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(e){return{encrypt:function(t,n,r){return("string"==typeof n?g:l).encrypt(e,t,n,r)},decrypt:function(t,n,r){return("string"==typeof n?g:l).decrypt(e,t,n,r)}}}});t.StreamCipher=c.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var u=h.mode={},f=function(e,t,n){},d=(t.BlockCipherMode=n.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}})).extend();d.Encryptor=d.extend({processBlock:function(e,t){var n=this._cipher,r=n.blockSize;f.call(this,e,t,r),n.encryptBlock(e,t),this._prevBlock=e.slice(t,t+r)}}),d.Decryptor=d.extend({processBlock:function(e,t){var n=this._cipher,r=n.blockSize,i=e.slice(t,t+r);n.decryptBlock(e,t),f.call(this,e,t,r),this._prevBlock=i}}),u=u.CBC=d,d=(h.pad={}).Pkcs7={pad:function(e,t){for(var n,i=(n=(n=4*t)-e.sigBytes%n)<<24|n<<16|n<<8|n,o=[],a=0;a<n;a+=4)o.push(i);n=r.create(o,n),e.concat(n)},unpad:function(e){e.sigBytes-=255&e.words[e.sigBytes-1>>>2]}},t.BlockCipher=c.extend({cfg:c.cfg.extend({mode:u,padding:d}),reset:function(){c.reset.call(this);var e=(t=this.cfg).iv,t=t.mode;if(this._xformMode==this._ENC_XFORM_MODE)var n=t.createEncryptor;else n=t.createDecryptor,this._minBufferSize=1;this._mode=n.call(t,this,e&&e.words)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){e.pad(this._data,this.blockSize);var t=this._process(!0)}else t=this._process(!0),e.unpad(t);return t},blockSize:4});var p=t.CipherParams=n.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}}),l=(u=(h.format={}).OpenSSL={stringify:function(e){var t=e.ciphertext;return((e=e.salt)?r.create([1398893684,1701076831]).concat(e).concat(t):t).toString(a)},parse:function(e){var t=(e=a.parse(e)).words;if(1398893684==t[0]&&1701076831==t[1]){var n=r.create(t.slice(2,4));t.splice(0,4),e.sigBytes-=16}return p.create({ciphertext:e,salt:n})}},t.SerializableCipher=n.extend({cfg:n.extend({format:u}),encrypt:function(e,t,n,r){r=this.cfg.extend(r);var i=e.createEncryptor(n,r);return t=i.finalize(t),i=i.cfg,p.create({ciphertext:t,key:n,iv:i.iv,algorithm:e,mode:i.mode,padding:i.padding,blockSize:e.blockSize,formatter:r.format})},decrypt:function(e,t,n,r){return r=this.cfg.extend(r),t=this._parse(t,r.format),e.createDecryptor(n,r).finalize(t.ciphertext)},_parse:function(e,t){return"string"==typeof e?t.parse(e,this):e}})),h=(h.kdf={}).OpenSSL={execute:function(e,t,n,i){return i||(i=r.random(8)),e=s.create({keySize:t+n}).compute(e,i),n=r.create(e.words.slice(t),4*n),e.sigBytes=4*t,p.create({key:e,iv:n,salt:i})}},g=t.PasswordBasedCipher=l.extend({cfg:l.cfg.extend({kdf:h}),encrypt:function(e,t,n,r){return n=(r=this.cfg.extend(r)).kdf.execute(n,e.keySize,e.ivSize),r.iv=n.iv,(e=l.encrypt.call(this,e,t,n.key,r)).mixIn(n),e},decrypt:function(e,t,n,r){return r=this.cfg.extend(r),t=this._parse(t,r.format),n=r.kdf.execute(n,e.keySize,e.ivSize,t.salt),r.iv=n.iv,l.decrypt.call(this,e,t,n.key,r)}})}(),function(){for(var e=i,t=e.lib.BlockCipher,n=e.algo,r=[],o=[],a=[],s=[],c=[],u=[],f=[],d=[],p=[],l=[],h=[],g=0;256>g;g++)h[g]=128>g?g<<1:g<<1^283;var _=0,y=0;for(g=0;256>g;g++){var v=(v=y^y<<1^y<<2^y<<3^y<<4)>>>8^255&v^99;r[_]=v,o[v]=_;var m=h[_],S=h[m],x=h[S],b=257*h[v]^16843008*v;a[_]=b<<24|b>>>8,s[_]=b<<16|b>>>16,c[_]=b<<8|b>>>24,u[_]=b,b=16843009*x^65537*S^257*m^16843008*_,f[v]=b<<24|b>>>8,d[v]=b<<16|b>>>16,p[v]=b<<8|b>>>24,l[v]=b,_?(_=m^h[h[h[x^m]]],y^=h[h[y]]):_=y=1}var B=[0,1,2,4,8,16,32,64,128,27,54];n=n.AES=t.extend({_doReset:function(){for(var e=(n=this._key).words,t=n.sigBytes/4,n=4*((this._nRounds=t+6)+1),i=this._keySchedule=[],o=0;o<n;o++)if(o<t)i[o]=e[o];else{var a=i[o-1];o%t?6<t&&4==o%t&&(a=r[a>>>24]<<24|r[a>>>16&255]<<16|r[a>>>8&255]<<8|r[255&a]):(a=r[(a=a<<8|a>>>24)>>>24]<<24|r[a>>>16&255]<<16|r[a>>>8&255]<<8|r[255&a],a^=B[o/t|0]<<24),i[o]=i[o-t]^a}for(e=this._invKeySchedule=[],t=0;t<n;t++)o=n-t,a=t%4?i[o]:i[o-4],e[t]=4>t||4>=o?a:f[r[a>>>24]]^d[r[a>>>16&255]]^p[r[a>>>8&255]]^l[r[255&a]]},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._keySchedule,a,s,c,u,r)},decryptBlock:function(e,t){var n=e[t+1];e[t+1]=e[t+3],e[t+3]=n,this._doCryptBlock(e,t,this._invKeySchedule,f,d,p,l,o),n=e[t+1],e[t+1]=e[t+3],e[t+3]=n},_doCryptBlock:function(e,t,n,r,i,o,a,s){for(var c=this._nRounds,u=e[t]^n[0],f=e[t+1]^n[1],d=e[t+2]^n[2],p=e[t+3]^n[3],l=4,h=1;h<c;h++){var g=r[u>>>24]^i[f>>>16&255]^o[d>>>8&255]^a[255&p]^n[l++],_=r[f>>>24]^i[d>>>16&255]^o[p>>>8&255]^a[255&u]^n[l++],y=r[d>>>24]^i[p>>>16&255]^o[u>>>8&255]^a[255&f]^n[l++];p=r[p>>>24]^i[u>>>16&255]^o[f>>>8&255]^a[255&d]^n[l++],u=g,f=_,d=y}g=(s[u>>>24]<<24|s[f>>>16&255]<<16|s[d>>>8&255]<<8|s[255&p])^n[l++],_=(s[f>>>24]<<24|s[d>>>16&255]<<16|s[p>>>8&255]<<8|s[255&u])^n[l++],y=(s[d>>>24]<<24|s[p>>>16&255]<<16|s[u>>>8&255]<<8|s[255&f])^n[l++],p=(s[p>>>24]<<24|s[u>>>16&255]<<16|s[f>>>8&255]<<8|s[255&d])^n[l++],e[t]=g,e[t+1]=_,e[t+2]=y,e[t+3]=p},keySize:8}),e.AES=t._createHelper(n)}(),i.encrypt=function(e,t,n){return function(e,t,n){return t=i.enc.Utf8.parse(t),n=i.enc.Utf8.parse(n),i.AES.encrypt(e,t,{iv:n,mode:i.mode.CBC,padding:i.pad.Pkcs7}).toString()}(e,t,n)},i.decrypt=function(e,t,n){return function(e,t,n){t=i.enc.Utf8.parse(t),n=i.enc.Utf8.parse(n);var r=i.AES.decrypt(e,t,{iv:n,mode:i.mode.CBC,padding:i.pad.Pkcs7});return i.enc.Utf8.stringify(r)}(e,t,n)},t.exports=i}(__hacked)}));