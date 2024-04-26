var _sjsSupporter={compiler:!1};function ownKeys(e,l){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);l&&(a=a.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),n.push.apply(n,a)}return n}function _objectSpread(e){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?ownKeys(Object(n),!0).forEach((function(l){_defineProperty(e,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))}))}return e}function _defineProperty(e,l,n){return l in e?Object.defineProperty(e,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[l]=n,e}window.define("channels/family-service/pages/index/index.swan",(function(require,modulesExports){var componentUsingComponentMap={"components/page-loading/page-loading.swan":["page-loading"],"components/c-card/c-card.swan":["c-card"],"components/c-swiper-banner/index.swan":["c-swiper-banner"],"components/top-fixed-bar/tpl.swan":["top-fixed-bar"],"components/c-task-timer/c-task-timer.swan":["c-task-timer"],"components/ensure-popup/ensure-popup.swan":["ensure-popup"],"channels/shop/components/security/index.swan":["security"],"components/loading/index.swan":["c-loading"]},componentUsingComponentMapInPlugin={},componentGenerics={};function processTemplateModule(filterTemplateArrs,filterModule){eval(filterModule);var modules={},templateFiltersObj={};return filterTemplateArrs&&filterTemplateArrs.forEach((function(element){var filterName=element.filterName,func=element.func,module=element.module;modules[module]=eval(module),templateFiltersObj[filterName]=function(){var e;return(e=modules[module])[func].apply(e,arguments)}})),templateFiltersObj}var createTemplateComponent=function(e){var l=Object.create(null),n=Object.create(null),a=JSON.parse("[]"),t={};a.length&&(t=processTemplateModule(a,""));var s=san.defineComponent({components:n,getAPack:function(){return[1,"swan-template",5,2,"data-origin-name",3,"c-channel-entry",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"view",2,1,"scroll-view",7,2,"scroll-x",12,6,1,3,"disableScrollX",5,null,5,1,2,"scroll-y",3,"false",2,"class",9,null,2,7,null,12,6,2,3,"channel",3,"showScrollBar",3,"",3,"c-channel-entry-nobar",1,8,6,1,3,"_class",null,3," swan-spider-tap",2,"data-per-width",6,2,3,"channel",3,"perWidth",2,"data-data-path",6,1,3,"dataPath",35,"bindscroll",8,6,1,3,"eventHappen",5,3,"scroll",6,1,3,"$event",3,"onChanneEntryScroll",3,"",3,"bind",null,1,"view",3,2,"style",9,null,3,3,"width:",7,null,6,2,3,"channel",3,"allWidth",1,8,6,1,3,"_style",null,3,"vw;display:flex;",37,"row","index",null,6,2,3,"channel",3,"showArr",1,"view",16,2,"style",9,null,3,3,"width:",7,null,6,2,3,"channel",3,"perWidth",1,8,6,1,3,"_style",null,3,"vw",2,"class",9,null,3,3,"c-channel-entry-col c-channel-entry-col-",7,null,10,43,10,42,6,1,3,"index",4,5,6,1,3,"coli",1,8,6,1,3,"_class",null,3," swan-spider-tap",2,"data-jump-type",6,2,3,"col",3,"jump_type",2,"data-jump-url",6,2,3,"col",3,"jump_url",2,"data-unencode",10,248,6,2,3,"col",3,"unencode",4,1,2,"data-bubble",6,2,3,"col",3,"bubble_title",2,"data-icon",12,6,2,3,"col",3,"bubble_title",6,2,3,"col",3,"icon",3,"",2,"data-channel-id",12,6,2,3,"col",3,"bubble_title",6,2,3,"channel",3,"channelId",3,"",2,"data-canal-name",6,2,3,"channel",3,"canal_name",2,"data-itemIndex",16,2,17,6,1,3,"index",17,6,1,3,"coli",2,"data-ubc-type",3,"shangMen",2,"data-mod",9,null,7,3,'{\n                        "module": "',7,null,6,1,3,"moduleName",null,3,'", \n                        "service_two": "',7,null,6,1,3,"service_two",null,3,'",\n                        "service_three": "',7,null,6,1,3,"service_three",null,3,'"\n                    }',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"commonJump",3,"",3,"bind",null,37,"col","coli",null,6,1,3,"row",1,"view",3,2,"class",3,"c-channel-entry-img",1,"image",8,2,"src",6,2,3,"col",3,"icon",2,"class",3,"c-channel-entry-icon c-gbs swan-spider-tap",2,"data-src",6,2,3,"col",3,"icon",2,"data-bubble",6,2,3,"col",3,"bubble_title",2,"data-itemIndex",16,2,17,6,1,3,"index",17,6,1,3,"coli",2,"image-menu-prevent",3,"true",2,"preview",3,"false",35,"binderror",8,6,1,3,"eventHappen",5,3,"error",6,1,3,"$event",3,"commonImageError",3,"",3,"bind",null,1,"view",4,2,"class",3,"c-channel-entry-tip",38,6,2,3,"col",3,"bubble_title",1,"view",2,2,"class",3,"c-channel-entry-tip-text c-lc1",null,9,null,2,7,null,6,2,3,"col",3,"bubble_title",null,3,"\n                            ",1,"view",1,2,"class",3,"c-channel-entry-tip-anchor",null,1,"text",2,2,"class",3,"c-channel-entry-title c-c c-fn c-lc1",null,9,null,2,7,null,6,2,3,"col",3,"title",null,3,"\n                    ",1,"view",3,2,"class",3,"c-channel-entry-bar",38,6,2,3,"channel",3,"showScrollBar",1,"view",2,2,"class",3,"c-channel-entry-bar-inner",2,"style",9,null,5,3,"width:",7,null,6,2,3,"channel",3,"scrollBarWidth",1,8,6,1,3,"_style",null,3,"%;transform:translateX(",7,null,6,2,3,"channel",3,"scrollBarLeft",1,8,6,1,3,"_style",null,3,"vw);",null]},filters:_objectSpread({},t),_smartJs:smartJsMap,inited:function(){var e=this,l=function(l){for(var n in l)e.data.set(n,l[n])};l(this.data.get("data")),this.watch("data",l)},eventHappen:function(){var e;(e=this.owner).eventHappen.apply(e,arguments)}});l["template-59291e07"]=s;var i=JSON.parse("[]"),c={};i.length&&(c=processTemplateModule(i,""));var r=san.defineComponent({components:n,getAPack:function(){return[1,"swan-template",5,2,"data-origin-name",3,"c-family-title",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"view",10,2,"class",3,"c-family-title swan-spider-tap",2,"data-jump-url",6,1,3,"jumpUrl",2,"data-jump-type",6,1,3,"jumpType",2,"data-mod",9,null,5,3,'{"module": "family-title", "index": "0", "apptype": "',7,null,6,1,3,"jumpType",null,3,'", "url": "',7,null,6,1,3,"jumpUrl",null,3,'"}',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"commonJump",3,"",3,"bind",null,1,"image",3,2,"class",3,"logo",2,"src",6,1,3,"logoSrc",38,6,1,3,"logoSrc",null,1,"view",2,2,"class",3,"title c-ct c-fb c-bold",null,9,null,1,7,null,6,1,3,"title",null,1,"view",2,2,"class",3,"bao-icon",38,10,183,6,1,3,"isShowIcon",3,"1",null,1,"view",3,2,"class",3,"tag",38,6,1,3,"tag",null,9,null,1,7,null,6,1,3,"tag",null,null,1,"view",3,2,"class",3,"num c-fn c-cg",38,6,1,3,"num",null,9,null,1,7,null,6,1,3,"num",null,null]},filters:_objectSpread({},c),_smartJs:smartJsMap,inited:function(){var e=this,l=function(l){for(var n in l)e.data.set(n,l[n])};l(this.data.get("data")),this.watch("data",l)},eventHappen:function(){var e;(e=this.owner).eventHappen.apply(e,arguments)}});l["template-afc84f78"]=r;var u=JSON.parse("[]"),o={};u.length&&(o=processTemplateModule(u,""));var p=san.defineComponent({components:n,getAPack:function(){return[1,"swan-template",5,2,"data-origin-name",3,"c-family-channel",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"view",2,2,"class",3,"c-family-channel",1,"scroll-view",4,2,"scroll-x",3,"true",2,"scroll-y",3,"false",2,"data-mod",9,null,3,3,'{"module": "channel", "title": "',7,null,6,1,3,"title",null,3,'", "index": "", "apptype": "", "url": ""}',1,"view",3,2,"class",3,"c-family-channel-cont",2,"style",9,null,3,3,"width: ",7,null,10,43,10,42,4,30.273,6,2,3,"list",3,"length",4,4.348,1,8,6,1,3,"_style",null,3,"vw;",1,"view",10,2,"class",3,"channel-item swan-spider-tap",2,"data-jump-url",6,2,3,"item",3,"jump_url",2,"data-jump-type",6,2,3,"item",3,"jump_type",2,"data-mod",9,null,11,3,'{"module": "',7,null,6,1,3,"module",null,3,"-",7,null,10,43,6,1,3,"index",4,1,null,3,'", "index": "',7,null,6,1,3,"i",null,3,'", "apptype": "',7,null,6,2,3,"item",3,"jump_type",null,3,'", "url": "',7,null,6,2,3,"item",3,"jump_url",null,3,'"}',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"commonJump",3,"",3,"bind",null,37,"item","i",null,6,1,3,"list",1,"image",3,2,"src",6,2,3,"item",3,"img",2,"class",3,"image",2,"mode",3,"widthFix",1,"view",2,2,"class",3,"title c-ct c-lc1 c-gbm c-bold",null,9,null,1,7,null,6,2,3,"item",3,"title",null,1,"text",2,2,"class",3,"cur-price c-fn c-co c-lc1",null,9,null,1,7,null,10,248,6,2,3,"item",3,"cur_price",3,"价格待定",null,1,"text",4,2,"class",3,"price c-fn c-lc1 c-gtm",2,"style",9,null,2,3,"text-decoration: ",7,null,12,10,122,6,3,3,"item",3,"ext_info",3,"type",4,1,3,"line-through",3,"none",1,8,6,1,3,"_style",null,38,6,3,3,"item",3,"ext_info",3,"text",null,9,null,2,7,null,6,3,3,"item",3,"ext_info",3,"text",null,3,"\n                    ",null]},filters:_objectSpread({},o),_smartJs:smartJsMap,inited:function(){var e=this,l=function(l){for(var n in l)e.data.set(n,l[n])};l(this.data.get("data")),this.watch("data",l)},eventHappen:function(){var e;(e=this.owner).eventHappen.apply(e,arguments)}});l["template-4b8bb1a7"]=p;var d=JSON.parse("[]"),m={};d.length&&(m=processTemplateModule(d,""));var v=san.defineComponent({components:n,getAPack:function(){return[1,"swan-template",5,2,"data-origin-name",3,"c-footer",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"view",4,2,"class",3,"c-footer c-cg c-fs c-gtlm",1,"text",1,2,"class",3,"c-footer-before c-grs",1,"text",2,2,"class",3,"c-footer-text",null,3,"精选好服务 · 精彩你生活",1,"text",1,2,"class",3,"c-footer-after c-gls"]},filters:_objectSpread({},m),_smartJs:smartJsMap,inited:function(){var e=this,l=function(l){for(var n in l)e.data.set(n,l[n])};l(this.data.get("data")),this.watch("data",l)},eventHappen:function(){var e;(e=this.owner).eventHappen.apply(e,arguments)}});l["template-5dae834c"]=v;var b=JSON.parse("[]"),g={};b.length&&(g=processTemplateModule(b,""));var f=san.defineComponent({components:n,getAPack:function(){return[1,"swan-template",5,2,"data-origin-name",3,"c-error-page",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"view",5,2,"class",3,"c-error-page",2,"style",9,null,2,3,"background-color: ",7,null,12,6,1,3,"bgColor",6,1,3,"bgColor",3,"#fff",1,8,6,1,3,"_style",null,1,"template",4,38,10,183,6,1,3,"type",4,1,1,"view",2,2,"class",3,"c-error-page-img",2,"style",9,null,2,3,"margin-top: ",7,null,12,6,1,3,"mTop",6,1,3,"mTop",3,"0",1,8,6,1,3,"_style",null,1,"view",2,2,"class",3,"c-error-page-tip c-fm",null,3,"网络不给力，请稍候重试",1,"view",5,2,"class",3,"c-error-page-btn c-fm c-gtlm swan-spider-tap",2,"hover-class",3,"c-error-page-btn-active",2,"data-mod",9,null,3,3,'{"module": "error-page", "index": "',7,null,4,1,null,3,'"}',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"onErrorPageReload",3,"",3,"bind",null,null,3,"重新加载\n            ",null,1,"template",3,38,10,183,6,1,3,"type",4,2,1,"view",2,2,"class",3,"img",2,"style",9,null,2,3,"margin-top: ",7,null,12,6,1,3,"mTop",6,1,3,"mTop",3,"0",1,8,6,1,3,"_style",null,1,"view",2,2,"class",3,"text c-fm",null,9,null,1,7,null,12,6,1,3,"text",6,1,3,"text",3,"暂无结果",null,null,1,"template",4,38,10,183,6,1,3,"type",4,3,1,"view",2,2,"class",3,"c-error-page-img img3",2,"style",9,null,2,3,"margin-top: ",7,null,12,6,1,3,"mTop",6,1,3,"mTop",3,"0",1,8,6,1,3,"_style",null,1,"view",2,2,"class",3,"text c-fm",null,3,"数据异常",1,"view",5,2,"class",3,"c-error-page-btn c-fm c-gtlm swan-spider-tap",2,"hover-class",3,"c-error-page-btn-active",2,"data-mod",9,null,3,3,'{"module": "error-page", "index": "',7,null,4,2,null,3,'"}',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"onErrorPageReload",3,"",3,"bind",null,null,3,"重新加载\n            ",null]},filters:_objectSpread({},g),_smartJs:smartJsMap,inited:function(){var e=this,l=function(l){for(var n in l)e.data.set(n,l[n])};l(this.data.get("data")),this.watch("data",l)},eventHappen:function(){var e;(e=this.owner).eventHappen.apply(e,arguments)}});l["template-77f12031"]=f;var h=JSON.parse("[]"),w={};h.length&&(w=processTemplateModule(h,""));var y=san.defineComponent({components:n,getAPack:function(){return[1,"swan-template",5,2,"data-origin-name",3,"c-icon-horizontal",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"view",2,2,"class",3,"c-icon-horizontal",1,"view",13,2,"class",3,"c-icon-horizontal-item c-gtlm swan-spider-tap",2,"data-jump-url",6,2,3,"item",3,"jump_url",2,"data-jump-type",6,2,3,"item",3,"jump_type",2,"data-canal-name",6,1,3,"canal_name",2,"data-bubble",6,2,3,"item",3,"bubble_title",2,"data-icon",12,6,2,3,"item",3,"bubble_title",6,2,3,"item",3,"icon",3,"",2,"data-channel-id",12,6,2,3,"item",3,"bubble_title",6,1,3,"channelId",3,"",2,"data-itemIndex",6,1,3,"index",2,"data-mod",9,null,7,3,'{"module": "tj", "index": "',7,null,6,1,3,"index",null,3,'", "url": "',7,null,6,2,3,"item",3,"jump_url",null,3,'", "apptype": "',7,null,6,2,3,"item",3,"jump_type",null,3,'"}',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"commonJump",3,"",3,"bind",null,37,"item","index",null,6,1,3,"list",1,"image",7,2,"class",3,"c-icon-horizontal-img swan-spider-tap",2,"src",6,2,3,"item",3,"icon",2,"data-src",6,2,3,"item",3,"icon",2,"data-bubble",6,2,3,"item",3,"bubble_title",2,"data-itemIndex",6,1,3,"index",2,"lazy-load",3,"true",35,"binderror",8,6,1,3,"eventHappen",5,3,"error",6,1,3,"$event",3,"commonImageError",3,"",3,"bind",null,1,"view",3,2,"class",3,"c-icon-horizontal-title-cont c-gil",1,"view",3,2,"class",3,"c-icon-horizontal-title c-ct",1,"view",2,2,"class",3,"c-fn c-lc1",null,9,null,1,7,null,6,2,3,"item",3,"title",null,1,"view",3,2,"class",3,"c-icon-horizontal-tips c-fs c-gils c-girs c-gls c-lc1",38,6,2,3,"item",3,"bubble_title",null,9,null,2,7,null,6,2,3,"item",3,"bubble_title",null,3,"\n                    ",null,1,"view",3,2,"class",3,"c-icon-horizontal-subtitle c-cg c-fs c-lc1",38,6,2,3,"item",3,"description",null,9,null,2,7,null,6,2,3,"item",3,"description",null,3,"\n                ",null]},filters:_objectSpread({},w),_smartJs:smartJsMap,inited:function(){var e=this,l=function(l){for(var n in l)e.data.set(n,l[n])};l(this.data.get("data")),this.watch("data",l)},eventHappen:function(){var e;(e=this.owner).eventHappen.apply(e,arguments)}});l["template-56091312"]=y;var _=JSON.parse("[]"),x={};_.length&&(x=processTemplateModule(_,"var cardRender = function (require, module, exports, define, swan, getApp, window, document, frames, self, location, navigator, localStorage, history, Caches) {\n  return {\n    cutText: function cutText(val, str, length) {\n      if (typeof str !== 'string') {\n        return str;\n      }\n\n      if (str.length < length) {\n        return str;\n      }\n\n      return str.substring(0, length) + '...';\n    },\n    priceHandle: function priceHandle(val, price) {\n      var resultPrice = '';\n\n      if (typeof price === 'string') {\n        resultPrice = price;\n      } else if (typeof price === 'number' && !isNaN(price)) {\n        if (price < 0) {\n          return '';\n        }\n\n        if (price === 0) {\n          resultPrice = '免费';\n        } else if (price < 10000) {\n          var priceFix = Math.floor(parseFloat(price) * 100) / 100;\n          resultPrice = '￥' + priceFix;\n        } else if (price >10000 && price < 100000000) {\n          var _priceFix = Math.floor(parseFloat(price / 10000) * 100) / 100;\n\n          resultPrice = '￥' + _priceFix + '万';\n        } else if (price >100000000) {\n          var _priceFix2 = Math.floor(parseFloat(price / 100000000) * 100) / 100;\n\n          resultPrice = '￥' + _priceFix2 + '亿';\n        }\n      }\n\n      return resultPrice;\n    }\n  };\n}();"));var k=san.defineComponent({components:n,getAPack:function(){return[1,"swan-template",5,2,"data-origin-name",3,"c-sku-service",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"view",3,2,"class",3,"c-sku-service c-gbl",1,"image",4,2,"src",6,1,3,"logo",2,"mode",3,"scaleToFill",2,"class",3,"c-sku-service-logo swan-spider-tap",35,"binderror",8,6,1,3,"eventHappen",5,3,"error",6,1,3,"$event",3,"commonImageError",3,"",3,"bind",null,1,"view",3,2,"class",3,"c-sku-service-main c-gl",1,"view",3,2,"class",3,"c-sku-service-top",1,"view",2,2,"class",3,"c-sku-service-title c-fb c-lc1 c-bold",null,9,null,1,7,null,6,1,3,"name",null,1,"view",4,2,"class",3,"c-sku-service-bao swan-spider-tap",2,"data-mod",9,null,5,3,'{"module": "ppfw-',7,null,6,1,3,"proIndex",null,3,'-b", "apptype": "',7,null,6,1,3,"jumpType",null,3,'", "url": "https://baozhang.baidu.com/guarantee/m/#/"}',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"tapServiceBao",3,"",3,"catch",null,38,6,1,3,"hasBdGuarantee",null,1,"view",2,2,"class",3,"c-sku-service-bot",1,"template",3,38,10,76,6,1,3,"tag",6,1,3,"tagDesc",1,"view",2,2,"class",3,"c-sku-card-label",null,9,null,1,7,null,6,1,3,"tag",null,1,"view",2,2,"class",3,"c-fs c-cg c-lc1",null,9,null,1,7,null,6,1,3,"tagDesc",null,1,1,"template",4,39,11,33,6,1,3,"tagDesc",1,"view",3,2,"class",3,"c-fs c-cg c-sku-card-num",38,6,1,3,"userNum",null,9,null,1,7,null,6,1,3,"userNum",null,null,1,"view",3,2,"class",3,"c-sku-card-label",38,6,1,3,"tag",null,9,null,1,7,null,6,1,3,"tag",null,null,1,"template",3,38,10,76,6,1,3,"safegardTags",6,2,3,"safegardTags",3,"length",37,"label","i",null,6,1,3,"safegardTags",1,"template",2,38,6,1,3,"tag",1,"view",3,2,"class",3,"c-sku-card-label c-sku-card-label-nor",38,10,60,6,1,3,"i",4,2,null,9,null,2,7,null,6,1,3,"label",null,3,"\n                            ",null,1,1,"template",2,40,1,"view",3,2,"class",3,"c-sku-card-label c-sku-card-label-nor",38,10,60,6,1,3,"i",4,3,null,9,null,2,7,null,6,1,3,"label",null,3,"\n                            ",null,null]},filters:_objectSpread({},x),_smartJs:smartJsMap,inited:function(){var e=this,l=function(l){for(var n in l)e.data.set(n,l[n])};l(this.data.get("data")),this.watch("data",l)},eventHappen:function(){var e;(e=this.owner).eventHappen.apply(e,arguments)}});l["template-1da210bc"]=k;var j=JSON.parse('[{"filterName":"cardRendercutText","module":"cardRender","func":"cutText"},{"filterName":"cardRenderpriceHandle","module":"cardRender","func":"priceHandle"},{"filterName":"cardRenderpriceHandle","module":"cardRender","func":"priceHandle"},{"filterName":"cardRenderpriceHandle","module":"cardRender","func":"priceHandle"},{"filterName":"cardRenderpriceHandle","module":"cardRender","func":"priceHandle"}]'),I={};j.length&&(I=processTemplateModule(j,"var cardRender = function (require, module, exports, define, swan, getApp, window, document, frames, self, location, navigator, localStorage, history, Caches) {\n  return {\n    cutText: function cutText(val, str, length) {\n      if (typeof str !== 'string') {\n        return str;\n      }\n\n      if (str.length < length) {\n        return str;\n      }\n\n      return str.substring(0, length) + '...';\n    },\n    priceHandle: function priceHandle(val, price) {\n      var resultPrice = '';\n\n      if (typeof price === 'string') {\n        resultPrice = price;\n      } else if (typeof price === 'number' && !isNaN(price)) {\n        if (price < 0) {\n          return '';\n        }\n\n        if (price === 0) {\n          resultPrice = '免费';\n        } else if (price < 10000) {\n          var priceFix = Math.floor(parseFloat(price) * 100) / 100;\n          resultPrice = '￥' + priceFix;\n        } else if (price >10000 && price < 100000000) {\n          var _priceFix = Math.floor(parseFloat(price / 10000) * 100) / 100;\n\n          resultPrice = '￥' + _priceFix + '万';\n        } else if (price >100000000) {\n          var _priceFix2 = Math.floor(parseFloat(price / 100000000) * 100) / 100;\n\n          resultPrice = '￥' + _priceFix2 + '亿';\n        }\n      }\n\n      return resultPrice;\n    }\n  };\n}();"));var H=san.defineComponent({components:n,getAPack:function(){return[1,"swan-template",5,2,"data-origin-name",3,"c-sku-card",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"template",2,38,10,155,6,1,3,"type",3,"row",1,"view",3,2,"class",7,null,12,6,1,3,"isLanding",3,"c-sku-card-landing c-gbm",3,"c-sku-card c-grm c-gblm",1,8,6,1,3,"_class",null,1,"view",3,2,"class",3,"c-sku-card-img-area",1,"image",4,2,"src",6,1,3,"img",2,"mode",3,"aspectFill",2,"class",9,null,2,7,null,12,6,1,3,"isLanding",3,"c-sku-card-img-landing",3,"c-sku-card-img",1,8,6,1,3,"_class",null,3," swan-spider-tap",35,"binderror",8,6,1,3,"eventHappen",5,3,"error",6,1,3,"$event",3,"commonImageError",3,"",3,"bind",null,1,"view",3,2,"class",9,null,4,3,"c-lc1 ",7,null,12,10,183,6,1,3,"imgLabelType",3,"top",3,"c-sku-card-tip-top",3,"",1,8,6,1,3,"_class",null,3," ",7,null,12,6,1,3,"title_style",3,"c-sku-card-log",3,"c-sku-card-tip",1,8,6,1,3,"_class",null,38,6,1,3,"img_label",null,9,null,2,7,null,6,1,3,"img_label",null,3,"\n                ",null,1,"view",7,2,"class",7,null,12,6,1,3,"isLanding",3,"c-sku-card-infos-landing",3,"c-sku-card-infos",1,8,6,1,3,"_class",null,1,"view",3,2,"class",3,"c-sku-card-title",1,"view",3,2,"class",7,null,12,10,62,6,1,3,"level",4,3,3,"c-sku-card-level-o",10,43,3,"c-sku-card-level-",6,1,3,"level",1,8,6,1,3,"_class",null,38,6,1,3,"level",null,9,null,2,7,null,6,1,3,"level",null,3,"\n                    ",null,1,"view",2,2,"class",9,null,5,3,"c-lc",7,null,12,6,1,3,"title_clamp",10,43,10,43,6,1,3,"title_clamp",3," c-line-clamp",6,1,3,"title_clamp",4,1,1,8,6,1,3,"_class",null,3," c-line-text ",7,null,12,6,1,3,"isLanding",3,"c-fm",3,"c-fn",1,8,6,1,3,"_class",null,3," c-bold",null,9,null,2,7,null,6,1,3,"title",null,3,"\n                    ",1,"view",3,2,"class",3,"c-lc1 c-sku-card-descs c-gbm",38,6,1,3,"desc",null,9,null,2,7,null,6,1,3,"desc",null,3,"\n                ",null,1,"view",3,2,"class",3,"c-lc1 c-sku-card-descs c-gbm",38,10,76,11,33,6,1,3,"desc",6,1,3,"short_desc",null,9,null,2,7,null,6,1,3,"short_desc",null,3,"\n                ",null,1,"view",5,2,"class",3,"c-sku-card-labels",38,10,248,10,76,6,1,3,"labels",6,2,3,"labels",3,"length",10,248,10,76,6,1,3,"grayLabels",6,2,3,"grayLabels",3,"length",6,1,3,"activity",1,"template",2,38,6,1,3,"activity",1,"view",2,2,"class",3,"c-sku-card-label c-sku-card-label-activity",null,9,null,1,7,null,6,1,3,"activity",null,null,1,"template",3,38,10,76,6,1,3,"grayLabels",6,2,3,"grayLabels",3,"length",37,"label","index",null,6,1,3,"grayLabels",1,"view",3,2,"class",3,"c-sku-card-label c-sku-card-label-gray",38,10,60,6,1,3,"index",4,3,null,9,null,1,7,null,6,1,3,"label",null,null,null,1,"template",3,38,10,76,6,1,3,"labels",6,2,3,"labels",3,"length",37,"label","index",null,6,1,3,"labels",1,"view",3,2,"class",9,null,2,3,"c-sku-card-label ",7,null,12,6,2,3,"label",3,"type",10,43,3,"c-sku-card-label-",6,2,3,"label",3,"type",3,"",1,8,6,1,3,"_class",null,38,10,60,6,1,3,"index",4,3,null,9,null,2,7,null,10,248,6,2,3,"label",3,"text",6,1,3,"label",null,3,"\n                        ",null,null,null,1,"view",6,2,"class",3,"c-sku-card-price-area c-gbm c-lc1",38,10,76,10,155,6,1,3,"price",6,1,3,"undefined",10,155,6,1,3,"price",3,"",1,"view",3,2,"class",7,null,12,6,1,3,"isLanding",3,"c-fn c-sku-card-price-prefix-landing c-bold",3,"c-fs c-sku-card-price-prefix",1,8,6,1,3,"_class",null,38,6,1,3,"price_prefix",null,9,null,2,7,null,3,"",1,8,6,1,3,"cardRendercutText",2,6,1,3,"price_prefix",4,3,3,"\n                    ",null,1,"view",2,2,"class",7,null,12,6,1,3,"isLanding",3,"c-sku-card-price-landing c-bold c-fm",3,"c-sku-card-price",1,8,6,1,3,"_class",null,null,9,null,2,7,null,3,"",1,8,6,1,3,"cardRenderpriceHandle",1,6,1,3,"price",3,"\n                    ",1,"view",3,2,"class",3,"c-sku-card-ori-price c-lc1",38,10,76,10,155,6,1,3,"origin_price",6,1,3,"undefined",10,94,6,1,3,"origin_price",6,1,3,"price",null,9,null,2,7,null,3,"",1,8,6,1,3,"cardRenderpriceHandle",1,6,1,3,"origin_price",3,"\n                    ",null,1,"view",3,2,"class",3,"c-sku-card-price-desc c-fs c-lc1",38,10,76,6,1,3,"short_text",11,33,6,1,3,"origin_price",null,9,null,2,7,null,6,1,3,"short_text",null,3,"\n                    ",null,null,1,"view",4,2,"class",3,"c-sku-card-source c-gbm c-lc1",38,10,76,6,1,3,"source_logo",6,1,3,"source_name",1,"view",2,2,"class",3,"c-sku-card-logo-container c-grs",1,"image",4,2,"class",3,"c-sku-card-logo swan-spider-tap",2,"src",6,1,3,"source_logo",2,"data-src",6,1,3,"source_logo",35,"binderror",8,6,1,3,"eventHappen",5,3,"error",6,1,3,"$event",3,"commonImageError",3,"",3,"bind",null,1,"view",3,2,"class",3,"c-sku-card-source-name c-lc1",38,6,1,3,"source_name",null,9,null,1,7,null,6,1,3,"source_name",null,null,null,1,1,"view",4,2,"class",3,"c-sku-row",40,1,"image",4,2,"src",6,1,3,"img",2,"mode",3,"aspectFill",2,"class",3,"c-sku-card-img swan-spider-tap",35,"binderror",8,6,1,3,"eventHappen",5,3,"error",6,1,3,"$event",3,"commonImageError",3,"",3,"bind",null,1,"view",3,2,"class",3,"c-sku-row-right c-glm",1,"view",2,1,"view",2,2,"class",3,"c-sku-row-title c-lc2 c-fn c-bold",null,9,null,2,7,null,6,1,3,"title",null,3,"\n                ",1,"view",5,2,"class",3,"c-sku-card-labels c-gbm c-gt",38,10,248,10,76,6,1,3,"labels",6,2,3,"labels",3,"length",10,248,10,76,6,1,3,"grayLabels",6,2,3,"grayLabels",3,"length",6,1,3,"activity",1,"template",2,38,6,1,3,"activity",1,"view",2,2,"class",3,"c-sku-card-label c-sku-card-label-activity",null,9,null,1,7,null,6,1,3,"activity",null,null,1,"template",3,38,10,76,6,1,3,"grayLabels",6,2,3,"grayLabels",3,"length",37,"label","index",null,6,1,3,"grayLabels",1,"view",3,2,"class",3,"c-sku-card-label c-sku-card-label-gray",38,10,60,6,1,3,"index",4,3,null,9,null,2,7,null,6,1,3,"label",null,3,"\n                        ",null,null,1,"template",3,38,10,76,6,1,3,"labels",6,2,3,"labels",3,"length",37,"label","labelIndex",null,6,1,3,"labels",1,"view",3,2,"class",3,"c-sku-card-label",38,10,60,6,1,3,"labelIndex",4,3,null,9,null,2,7,null,6,1,3,"label",null,3,"\n                        ",null,null,null,1,"view",3,2,"class",3,"c-sku-row-bottom",1,"view",3,2,"class",3,"c-sku-row-price",1,"view",2,2,"class",9,null,2,3,"c-sku-card-price c-fm c-lc1 ",7,null,12,10,76,11,33,6,1,3,"origin_price",11,33,6,1,3,"short_text",3,"c-sku-card-price-only",3,"",1,8,6,1,3,"_class",null,null,9,null,2,7,null,3,"",1,8,6,1,3,"cardRenderpriceHandle",1,6,1,3,"price",3,"\n                    ",1,"view",3,2,"class",3,"c-sku-card-ori-price c-lc1",38,10,76,10,155,6,1,3,"origin_price",6,1,3,"undefined",10,94,6,1,3,"origin_price",6,1,3,"price",null,9,null,2,7,null,3,"",1,8,6,1,3,"cardRenderpriceHandle",1,6,1,3,"origin_price",3,"\n                    ",1,1,"view",3,2,"class",3,"c-sku-card-price-desc c-lc1",39,6,1,3,"short_text",null,9,null,2,7,null,6,1,3,"short_text",null,3,"\n                    ",1,"view",2,2,"class",3,"c-sku-row-btn c-fs",null,3,"预订"]},filters:_objectSpread({},I),_smartJs:smartJsMap,inited:function(){var e=this,l=function(l){for(var n in l)e.data.set(n,l[n])};l(this.data.get("data")),this.watch("data",l)},eventHappen:function(){var e;(e=this.owner).eventHappen.apply(e,arguments)}});return l["template-06965be6"]=H,Object.assign(n,e,l),l},filterCustomArr=[],sjsExportsMap={},smartJsMap={},modules={},filtersObj={};modulesExports.exports={componentUsingComponentMap:componentUsingComponentMap,componentUsingComponentMapInPlugin:componentUsingComponentMapInPlugin,componentGenerics:componentGenerics,getAPack:function(){return[1,"swan-private-root-tag",10,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"page-loading",1,2,"hideLoading",6,1,3,"rendered",1,"c-task-timer",1,2,"id",3,"c-task-timer",1,"template-77f12031",3,2,"data",13,1,14,3,"type",6,1,3,"errType",2,"data-origin-name",3,"c-error-page",38,6,1,3,"showErrorPage",null,1,"top-fixed-bar",5,2,"title",6,1,3,"title",2,"status-bar-height",6,1,3,"statusBarHeight",2,"navigation-bar-height",6,1,3,"navigationBarHeight",2,"custom-height",4,49,2,"background",3,"#FF8D44",1,"view",10,2,"class",3,"family-service-container c-git swan-spider-tap",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"tapPageFn",3,"",3,"bind",null,1,"c-card",4,2,"title",6,2,3,"keyPosition",3,"title",2,"class",3,"family-entry",38,10,76,10,183,6,2,3,"keyPosition",3,"template_name",3,"channel",6,2,3,"keyPosition",3,"isShow",1,"template-59291e07",2,2,"data",13,5,14,3,"dataPath",3,"keyPosition",14,3,"channel",6,1,3,"keyPosition",14,3,"moduleName",3,"jinggangwei",14,3,"service_two",6,1,3,"cate",14,3,"service_three",6,1,3,"query",2,"data-origin-name",3,"c-channel-entry",null,1,"view",2,2,"class",9,null,2,7,null,12,6,2,3,"banner",3,"isShow",3,"c-gib",3,"",1,8,6,1,3,"_class",null,3," swiper-wrap",1,"c-swiper-banner",3,2,"banner",6,1,3,"banner",2,"style",3,"border-radius: 3.14vw; overflow: hidden;",38,6,2,3,"banner",3,"isShow",null,1,"view",2,38,6,2,3,"safe",3,"isShow",1,"c-card",3,2,"with-padding",3,"true",1,"template-afc84f78",2,2,"data",13,2,14,3,"title",6,2,3,"safe",3,"title",14,3,"isShowIcon",6,2,3,"safe",3,"guarantee_flag",2,"data-origin-name",3,"c-family-title",1,"view",2,2,"class",3,"safe-cont",1,"view",7,2,"class",3,"safe-cont-item swan-spider-tap",2,"data-jump-url",6,2,3,"safe",3,"jump_url",2,"data-jump-type",6,2,3,"safe",3,"jump_type",2,"data-mod",9,null,7,3,'{"module": "bzq", "index": "',7,null,6,1,3,"index",null,3,'", "url": "',7,null,6,2,3,"safe",3,"jump_url",null,3,'", "apptype": "',7,null,6,2,3,"safe",3,"jump_type",null,3,'"}',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"commonJump",3,"",3,"catch",null,37,"item","index",null,6,2,3,"safe",3,"value",1,"image",2,2,"src",6,2,3,"item",3,"img",2,"mode",3,"widthFix",null,1,"view",2,37,"channelItem","index",null,6,1,3,"channel",1,"c-card",4,2,"title",6,2,3,"channelItem",3,"title",2,"show-title",3,"1",38,6,2,3,"channelItem",3,"isShow",1,"template-4b8bb1a7",2,2,"data",13,4,14,3,"list",6,2,3,"channelItem",3,"value",14,3,"title",6,2,3,"channelItem",3,"title",14,3,"index",6,1,3,"index",14,3,"module",3,"yyq",2,"data-origin-name",3,"c-family-channel",null,1,"view",5,2,"class",3,"fs-card",38,10,76,6,1,3,"brand",6,2,3,"brand",3,"isShow",1,"view",3,2,"class",3,"security",38,10,76,6,1,3,"platformGuarantee",6,2,3,"platformGuarantee",3,"promises",1,"security",2,2,"class",3,"swan-spider-tap",35,"bindshowEnsurePop",8,6,1,3,"eventHappen",5,3,"showEnsurePop",6,1,3,"$event",3,"showEnsurePop",3,"",3,"bind",null,null,1,"view",4,2,"class",3,"fs-card-header",1,"view",2,2,"class",3,"fs-card-header-title",null,9,null,1,7,null,6,2,3,"brand",3,"title",null,1,"view",3,2,"class",3,"c-icon c-icon-ic-more fs-card-header-icon swan-spider-tap",2,"data-mark",3,"opt",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"toggleOptionsFn",3,"",3,"bind",null,1,"view",4,2,"class",3,"fs-card-header-options swan-spider-tap",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"jumpFeedback",3,"",3,"bind",null,38,6,1,3,"showComplaintBox",1,"image",3,2,"class",3,"fs-card-header-options-img",2,"mode",3,"widthFix",2,"src",3,"https://midpf-material.cdn.bcebos.com/1b39c15ab6bc11421e36388ef40c3058.png",null,1,"view",1,1,"view",5,2,"key",10,43,3,"service_",6,1,3,"index",2,"class",3,"fs-card-item ",37,"item","index",null,6,2,3,"brand",3,"providers",1,"image",15,2,"class",9,null,3,3,"fs-card-item-logo merchant-",7,null,6,1,3,"index",1,8,6,1,3,"_class",null,3," swan-spider-tap",2,"id",9,null,2,3,"merchant-",7,null,6,1,3,"index",null,2,"mode",3,"aspectFit",2,"src",6,3,3,"item",3,"info",3,"logo",2,"data-jump-url",6,3,3,"item",3,"info",3,"jumpUrl",2,"data-jump-type",6,3,3,"item",3,"info",3,"jumpType",2,"data-index",6,1,3,"index",2,"data-ad-icon",6,2,3,"item",3,"adIcon",2,"data-poster",6,3,3,"item",3,"info",3,"click_url",2,"data-bd-vid",6,3,3,"item",3,"info",3,"bd_vid",2,"data-url",6,2,3,"item",3,"url",2,"data-shop-id",6,2,3,"item",3,"shopId",2,"data-shop-name",6,3,3,"item",3,"info",3,"name",2,"data-type",6,2,3,"item",3,"type",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"goToShopCore",3,"",3,"bind",null,1,"view",4,2,"class",3,"fs-card-item-content",1,"view",14,2,"data-jump-url",6,3,3,"item",3,"info",3,"jumpUrl",2,"data-jump-type",6,3,3,"item",3,"info",3,"jumpType",2,"data-ad-icon",6,2,3,"item",3,"adIcon",2,"data-index",6,1,3,"index",2,"data-poster",6,3,3,"item",3,"info",3,"click_url",2,"data-bd-vid",6,3,3,"item",3,"info",3,"bd_vid",2,"data-url",6,2,3,"item",3,"url",2,"data-shop-name",6,3,3,"item",3,"info",3,"name",2,"data-shop-id",6,2,3,"item",3,"shopId",2,"data-type",6,2,3,"item",3,"type",2,"class",3,"swan-spider-tap",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"goToShopCore",3,"",3,"bind",null,1,"view",2,2,"class",3,"flex-center",1,"view",2,2,"class",3,"fs-card-item-content-title",null,9,null,1,7,null,6,3,3,"item",3,"info",3,"name",null,1,"view",2,2,"class",3,"flex-center",1,"view",2,2,"class",3,"fs-card-item-content-sub",null,9,null,2,7,null,6,3,3,"item",3,"info",3,"userNum",null,3,"\n                            ",1,"view",19,2,"key",10,43,3,"service_",6,1,3,"idx",2,"class",9,null,5,3,"merchant-",7,null,6,1,3,"index",1,8,6,1,3,"_class",null,3,"-service-",7,null,6,1,3,"idx",1,8,6,1,3,"_class",null,3," swan-spider-tap",2,"data-type",6,2,3,"subItem",3,"jumpType",2,"data-jump-url",6,2,3,"subItem",3,"jumpUrl",2,"data-url",6,2,3,"subItem",3,"url",2,"data-index",6,1,3,"index",2,"data-idx",6,1,3,"idx",2,"data-ad-icon",6,2,3,"item",3,"adIcon",2,"data-bd-vid",6,3,3,"item",3,"info",3,"bd_vid",2,"data-poster",6,3,3,"item",3,"info",3,"click_url",2,"data-merchant-type",6,2,3,"item",3,"type",2,"data-shop-id",6,2,3,"item",3,"shopId",2,"data-service-id",6,2,3,"subItem",3,"goodsId",2,"data-service-price",6,2,3,"subItem",3,"price",2,"data-merchant-score",6,2,3,"item",3,"startsText",2,"data-title",6,2,3,"subItem",3,"title",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"tapServiceBtnFn",3,"",3,"catch",null,37,"subItem","idx",null,6,2,3,"item",3,"services",1,"view",5,2,"class",3,"shop-service-item",38,10,248,6,2,3,"item",3,"spread",10,60,6,1,3,"idx",4,2,1,"image",18,2,"class",3,"shop-service-item-img swan-spider-tap",2,"id",9,null,4,3,"merchant-",7,null,6,1,3,"index",null,3,"-service-",7,null,6,1,3,"idx",null,2,"mode",3,"aspectFill",2,"src",10,248,6,2,3,"subItem",3,"img",3,"https://scenter.cdn.bcebos.com/fw-mall%2FanonymousIcon.jpg",2,"data-type",6,2,3,"subItem",3,"jumpType",2,"data-jump-url",6,2,3,"subItem",3,"jumpUrl",2,"data-url",6,2,3,"subItem",3,"url",2,"data-ad-icon",6,2,3,"item",3,"adIcon",2,"data-poster",6,3,3,"item",3,"info",3,"click_url",2,"data-merchant-type",6,2,3,"item",3,"type",2,"data-shop-id",6,2,3,"item",3,"shopId",2,"data-service-id",6,2,3,"subItem",3,"goodsId",2,"data-service-price",6,2,3,"subItem",3,"price",2,"data-merchant-score",6,2,3,"item",3,"startsText",2,"data-bd-vid",6,3,3,"item",3,"info",3,"bd_vid",2,"data-title",6,2,3,"subItem",3,"title",2,"data-index",6,1,3,"index",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"tapServiceBtnFn",3,"",3,"catch",null,1,"view",4,2,"class",3,"shop-service-item-content",1,"view",2,2,"class",3,"shop-service-item-content-title c-fm c-lc2",null,9,null,2,7,null,6,2,3,"subItem",3,"title",null,3,"\n                                ",1,"view",3,2,"class",3,"shop-service-item-content-tags",1,"view",5,2,"key",10,43,3,"label_",6,1,3,"i",2,"class",9,null,2,3,"shop-tag shop-service-item-content-tag ",7,null,12,10,183,11,43,6,2,3,"label",3,"couponBizType",4,2,3,"shop-tag-orange",3,"shop-tag-red",1,8,6,1,3,"_class",null,38,10,76,6,2,3,"subItem",3,"newActLabels",10,62,6,3,3,"subItem",3,"newActLabels",3,"length",4,0,37,"label","i",null,6,2,3,"subItem",3,"newActLabels",1,"text",2,2,"class",3,"shop-tag-text",null,9,null,1,7,null,6,2,3,"label",3,"label",null,null,1,"view",5,2,"key",10,43,3,"tag_",6,1,3,"i",2,"class",3,"shop-tag shop-tag-gray shop-service-item-content-tag",38,10,76,6,2,3,"subItem",3,"grayLabels",10,62,6,3,3,"subItem",3,"grayLabels",3,"length",4,0,37,"tag","i",null,6,2,3,"subItem",3,"grayLabels",1,"text",2,2,"class",3,"shop-tag-text",null,9,null,1,7,null,6,1,3,"tag",null,null,1,"view",2,2,"class",3,"shop-service-item-content-bottom",1,"view",4,2,"class",3,"shop-service-item-content-bottom-left",38,6,2,3,"subItem",3,"priceMode",1,"view",5,2,"class",3,"c-fm c-co price",1,"view",2,2,"class",3,"c-bold",null,3,"¥",1,"view",2,2,"class",3,"price-num c-bold",null,9,null,2,7,null,6,2,3,"subItem",3,"computedPriceInt",null,3,"\n                                            ",1,"view",3,2,"class",3,"c-bold price-float",38,6,2,3,"subItem",3,"computedPriceFloat",null,9,null,2,3,".",7,null,6,2,3,"subItem",3,"computedPriceFloat",null,null,1,"view",2,38,10,183,11,43,6,2,3,"subItem",3,"priceMode",4,1,null,9,null,1,7,null,6,2,3,"subItem",3,"newPriceAfter",null,null,1,"text",2,2,"class",3,"price-desc",null,9,null,1,7,null,6,2,3,"subItem",3,"priceModeType",null,1,1,"text",3,2,"class",3,"c-fm c-co c-grs c-bold",40,null,9,null,1,7,null,6,2,3,"subItem",3,"price",null,1,"view",2,2,"class",3,"shop-service-item-btn c-bold",1,"text",2,2,"class",3,"shop-service-item-btn-txt",null,3,"预订",null,1,"view",7,2,"class",3,"shop-service-more swan-spider-tap",2,"data-index",6,1,3,"index",2,"data-mod",9,null,5,3,'{\n                            "module": "ppfw-',7,null,6,1,3,"index",null,3,'",\n                            "index": "ppfw-',7,null,6,1,3,"index",null,3,'-zk"}',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"tapMoreBtn",3,"",3,"bind",null,38,10,76,11,33,6,2,3,"item",3,"spread",10,62,6,3,3,"item",3,"services",3,"length",4,2,null,3,"展开\n                        ",1,"view",1,2,"class",3,"c-icon c-icon-more-blue shop-service-more-icon",null,null,1,"c-loading",3,2,"status",12,6,1,3,"hasMore",3,"loading",3,"complete",2,"noMoreText",3,"没有更多了",38,10,76,10,248,6,1,3,"isLoading",11,33,6,1,3,"hasMore",6,3,3,"brand",3,"providers",3,"length",null,1,"c-card",2,38,6,1,3,"showEmptyCard",1,"view",3,2,"class",3,"brach-empty",1,"view",1,2,"class",3,"branch-empty-img",1,"view",2,2,"class",3,"branch-empty-txt c-cg c-fm",null,3,"当前地区暂无服务，敬请期待",null,1,"c-card",5,2,"title",6,2,3,"recommand",3,"title",2,"class",3,"recommand-main",2,"show-title",3,"1",38,10,76,6,1,3,"recommand",10,76,6,2,3,"recommand",3,"isShow",11,33,6,1,3,"hasMore",1,"template-56091312",2,2,"data",13,3,14,3,"list",6,2,3,"recommand",3,"value",14,3,"channelId",3,"recommend",14,3,"canal_name",6,2,3,"recommand",3,"canal_name",2,"data-origin-name",3,"c-icon-horizontal",null,1,"ensure-popup",4,2,"show",6,1,3,"showEnsurePopup",2,"data",6,1,3,"ensureData",2,"class",3,"swan-spider-tap",35,"bindclose",8,6,1,3,"eventHappen",5,3,"close",6,1,3,"$event",3,"closeEnsurePopupFn",3,"",3,"bind",null,1,"template-5dae834c",2,2,"data-origin-name",3,"c-footer",38,11,33,6,1,3,"hasMore",null]},isComponent:!1,componentPath:"channels/family-service/pages/index/index.swan",customComponentCss:[],createTemplateComponent:createTemplateComponent,filters:Object.assign({},filtersObj),initialFilters:filterCustomArr,pageModules:modules,extProperties:{_smartJs:smartJsMap}}}));