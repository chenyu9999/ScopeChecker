var _sjsSupporter={compiler:!1};function ownKeys(l,e){var n=Object.keys(l);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(l);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable}))),n.push.apply(n,t)}return n}function _objectSpread(l){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(n),!0).forEach((function(e){_defineProperty(l,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(e){Object.defineProperty(l,e,Object.getOwnPropertyDescriptor(n,e))}))}return l}function _defineProperty(l,e,n){return e in l?Object.defineProperty(l,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):l[e]=n,l}window.define("homes/new-freshmen-welfare/index.swan",(function(require,modulesExports){var componentUsingComponentMap={"components/c-button-login/c-button-login.swan":["c-button-login"],"components/page-loading/page-loading.swan":["page-loading"],"components/top-fixed-bar/tpl.swan":["top-fixed-bar"],"components/loading/index.swan":["c-loading"],"node_modules/@baidu/smart-kit/dist/components/coupon/src/index.swan":["coupon"]},componentUsingComponentMapInPlugin={},componentGenerics={};function processTemplateModule(filterTemplateArrs,filterModule){eval(filterModule);var modules={},templateFiltersObj={};return filterTemplateArrs&&filterTemplateArrs.forEach((function(element){var filterName=element.filterName,func=element.func,module=element.module;modules[module]=eval(module),templateFiltersObj[filterName]=function(){var l;return(l=modules[module])[func].apply(l,arguments)}})),templateFiltersObj}var createTemplateComponent=function(l){var e=Object.create(null),n=Object.create(null),t=JSON.parse("[]"),a={};t.length&&(a=processTemplateModule(t,""));var u=san.defineComponent({components:n,getAPack:function(){return[1,"swan-template",5,2,"data-origin-name",3,"card-loading",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"view",2,2,"class",3,"reload",1,"c-loading",1,2,"status",3,"loading"]},filters:_objectSpread({},a),_smartJs:smartJsMap,inited:function(){var l=this,e=function(e){for(var n in e)l.data.set(n,e[n])};e(this.data.get("data")),this.watch("data",e)},eventHappen:function(){var l;(l=this.owner).eventHappen.apply(l,arguments)}});e["template-4f970603"]=u;var s=JSON.parse("[]"),i={};s.length&&(i=processTemplateModule(s,""));var o=san.defineComponent({components:n,getAPack:function(){return[1,"swan-template",5,2,"data-origin-name",3,"reload",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"view",4,2,"class",3,"reload swan-spider-tap",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"handleReload",3,"",3,"bind",null,null,3,"重新加载\n        ",1,"image",2,2,"class",3,"reload-img",2,"src",6,1,3,"reloadImg"]},filters:_objectSpread({},i),_smartJs:smartJsMap,inited:function(){var l=this,e=function(e){for(var n in e)l.data.set(n,e[n])};e(this.data.get("data")),this.watch("data",e)},eventHappen:function(){var l;(l=this.owner).eventHappen.apply(l,arguments)}});e["template-24bc8a66"]=o;var r=JSON.parse("[]"),d={};r.length&&(d=processTemplateModule(r,""));var c=san.defineComponent({components:n,getAPack:function(){return[1,"swan-template",5,2,"data-origin-name",3,"sku-item",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"c-button-login",7,33,"needFlex",9,null,null,2,"dataset",13,3,14,3,"jumpType",6,1,3,"jumpType",14,3,"jumpUrl",6,1,3,"jumpUrl",14,3,"isNeedDrawCoupon",6,1,3,"isNeedDrawCoupon",2,"data-ubc-type",3,"newHsh",2,"data-mod",9,null,9,3,'{\n            "module": "',7,null,6,1,3,"mod",null,3,'",\n            "rank": "',7,null,6,1,3,"index",null,3,'",\n            "user_type": "',7,null,6,1,3,"user_type",null,3,'",\n            "skuid": "',7,null,6,1,3,"skuid",null,3,'"\n        }',2,"class",3,"swan-spider-tap",35,"bindloginhandle",8,6,1,3,"eventHappen",5,3,"loginhandle",6,1,3,"$event",3,"handleClickSku",3,"",3,"bind",null,1,"view",3,2,"class",3,"sku-info",1,"image",2,2,"class",3,"sku-img",2,"src",6,1,3,"img",1,"view",3,2,"class",3,"sku-detail",1,"view",2,1,"view",3,2,"class",3,"sku-title-wrap c-lc2",1,"view",3,2,"class",3,"sku-label-wrap",38,6,1,3,"tips",null,9,null,1,7,null,6,1,3,"tips",null,null,1,"text",2,2,"class",3,"sku-title",null,9,null,1,7,null,6,1,3,"title",null,1,"view",3,2,"class",3,"sku-sales",38,6,1,3,"sold",null,9,null,3,3,"已售",7,null,6,1,3,"sold",null,3,"\n                    ",null,1,"view",5,2,"class",3,"sku-price",1,"text",2,2,"class",3,"sku-price-icon",null,3,"¥",1,"text",2,2,"class",3,"sku-price",null,9,null,1,7,null,6,1,3,"priceNum",null,1,"text",3,2,"class",3,"sku-price-begin",38,6,1,3,"showBegin",null,3,"起",null,1,"text",3,2,"class",3,"sku-origin",38,6,1,3,"originPrice",null,9,null,3,3,"¥",7,null,6,1,3,"originPrice",null,3,"\n                    ",null]},filters:_objectSpread({},d),_smartJs:smartJsMap,inited:function(){var l=this,e=function(e){for(var n in e)l.data.set(n,e[n])};e(this.data.get("data")),this.watch("data",e)},eventHappen:function(){var l;(l=this.owner).eventHappen.apply(l,arguments)}});e["template-b095236a"]=c;var p=JSON.parse("[]"),m={};p.length&&(m=processTemplateModule(p,""));var g=san.defineComponent({components:n,getAPack:function(){return[1,"swan-template",5,2,"data-origin-name",3,"title",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"view",4,2,"class",3,"card-title",2,"style",9,null,2,3,"background: ",7,null,6,1,3,"background",1,8,6,1,3,"_style",null,1,"rich-text",2,2,"class",3,"card-rich-title",2,"nodes",6,1,3,"nodes",1,"view",8,2,"class",3,"card-title-right swan-spider-tap",2,"data-jump-type",6,1,3,"jumpType",2,"data-jump-url",6,1,3,"jumpUrl",2,"data-ubc-type",3,"newHsh",2,"data-mod",9,null,5,3,'{\n                "module": "',7,null,6,1,3,"module",null,3,'_more",\n                "user_type": "',7,null,6,1,3,"dotUserTag",null,3,'"\n            }',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"commonJump",3,"",3,"bind",null,38,6,1,3,"rightText",1,"text",2,2,"class",3,"card-title-more",null,9,null,1,7,null,6,1,3,"rightText",null,null]},filters:_objectSpread({},m),_smartJs:smartJsMap,inited:function(){var l=this,e=function(e){for(var n in e)l.data.set(n,e[n])};e(this.data.get("data")),this.watch("data",e)},eventHappen:function(){var l;(l=this.owner).eventHappen.apply(l,arguments)}});e["template-d5d3db17"]=g;var v=JSON.parse("[]"),b={};v.length&&(b=processTemplateModule(v,""));var w=san.defineComponent({components:n,getAPack:function(){return[1,"swan-template",5,2,"data-origin-name",3,"c-error-page",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"view",5,2,"class",3,"c-error-page",2,"style",9,null,2,3,"background-color: ",7,null,12,6,1,3,"bgColor",6,1,3,"bgColor",3,"#fff",1,8,6,1,3,"_style",null,1,"template",4,38,10,183,6,1,3,"type",4,1,1,"view",2,2,"class",3,"c-error-page-img",2,"style",9,null,2,3,"margin-top: ",7,null,12,6,1,3,"mTop",6,1,3,"mTop",3,"0",1,8,6,1,3,"_style",null,1,"view",2,2,"class",3,"c-error-page-tip c-fm",null,3,"网络不给力，请稍候重试",1,"view",5,2,"class",3,"c-error-page-btn c-fm c-gtlm swan-spider-tap",2,"hover-class",3,"c-error-page-btn-active",2,"data-mod",9,null,3,3,'{"module": "error-page", "index": "',7,null,4,1,null,3,'"}',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"onErrorPageReload",3,"",3,"bind",null,null,3,"重新加载\n            ",null,1,"template",3,38,10,183,6,1,3,"type",4,2,1,"view",2,2,"class",3,"img",2,"style",9,null,2,3,"margin-top: ",7,null,12,6,1,3,"mTop",6,1,3,"mTop",3,"0",1,8,6,1,3,"_style",null,1,"view",2,2,"class",3,"text c-fm",null,9,null,1,7,null,12,6,1,3,"text",6,1,3,"text",3,"暂无结果",null,null,1,"template",4,38,10,183,6,1,3,"type",4,3,1,"view",2,2,"class",3,"c-error-page-img img3",2,"style",9,null,2,3,"margin-top: ",7,null,12,6,1,3,"mTop",6,1,3,"mTop",3,"0",1,8,6,1,3,"_style",null,1,"view",2,2,"class",3,"text c-fm",null,3,"数据异常",1,"view",5,2,"class",3,"c-error-page-btn c-fm c-gtlm swan-spider-tap",2,"hover-class",3,"c-error-page-btn-active",2,"data-mod",9,null,3,3,'{"module": "error-page", "index": "',7,null,4,2,null,3,'"}',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"onErrorPageReload",3,"",3,"bind",null,null,3,"重新加载\n            ",null]},filters:_objectSpread({},b),_smartJs:smartJsMap,inited:function(){var l=this,e=function(e){for(var n in e)l.data.set(n,e[n])};e(this.data.get("data")),this.watch("data",e)},eventHappen:function(){var l;(l=this.owner).eventHappen.apply(l,arguments)}});e["template-77f12031"]=w;var y=JSON.parse("[]"),f={};y.length&&(f=processTemplateModule(y,""));var x=san.defineComponent({components:n,getAPack:function(){return[1,"swan-template",5,2,"data-origin-name",3,"c-count-down",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"view",9,2,"class",3,"count-down-time-box",1,"view",2,2,"class",3,"count-down-time-text",null,9,null,1,7,null,10,248,6,1,3,"text",3,"距结束",null,1,"text",3,2,"class",9,null,2,3,"count-down-time-num ",7,null,12,6,1,3,"isTop",3,"count-down-time-num-top",3,"",1,8,6,1,3,"_class",null,2,"style",9,null,4,3,"color: ",7,null,6,1,3,"fontColor",1,8,6,1,3,"_style",null,3,"; background: ",7,null,6,1,3,"background",1,8,6,1,3,"_style",null,null,9,null,2,7,null,6,2,3,"countdown",3,"days",null,3,"天\n        ",1,"view",2,2,"class",3,"colon-box",1,"text",2,2,"class",3,"colon",null,3,":",1,"text",3,2,"class",9,null,2,3,"count-down-time-num ",7,null,12,6,1,3,"isTop",3,"count-down-time-num-top",3,"",1,8,6,1,3,"_class",null,2,"style",9,null,4,3,"color: ",7,null,6,1,3,"fontColor",1,8,6,1,3,"_style",null,3,"; background: ",7,null,6,1,3,"background",1,8,6,1,3,"_style",null,null,9,null,2,7,null,6,2,3,"countdown",3,"hours",null,3,"\n        ",1,"view",2,2,"class",3,"colon-box",1,"text",2,2,"class",3,"colon",null,3,":",1,"text",3,2,"class",9,null,2,3,"count-down-time-num ",7,null,12,6,1,3,"isTop",3,"count-down-time-num-top",3,"",1,8,6,1,3,"_class",null,2,"style",9,null,4,3,"color: ",7,null,6,1,3,"fontColor",1,8,6,1,3,"_style",null,3,"; background: ",7,null,6,1,3,"background",1,8,6,1,3,"_style",null,null,9,null,2,7,null,6,2,3,"countdown",3,"minutes",null,3,"\n        ",1,"view",2,2,"class",3,"colon-box",1,"text",2,2,"class",3,"colon",null,3,":",1,"text",3,2,"class",9,null,2,3,"count-down-time-num ",7,null,12,6,1,3,"isTop",3,"count-down-time-num-top",3,"",1,8,6,1,3,"_class",null,2,"style",9,null,4,3,"color: ",7,null,6,1,3,"fontColor",1,8,6,1,3,"_style",null,3,"; background: ",7,null,6,1,3,"background",1,8,6,1,3,"_style",null,null,9,null,2,7,null,6,2,3,"countdown",3,"seconds",null,3,"\n        "]},filters:_objectSpread({},f),_smartJs:smartJsMap,inited:function(){var l=this,e=function(e){for(var n in e)l.data.set(n,e[n])};e(this.data.get("data")),this.watch("data",e)},eventHappen:function(){var l;(l=this.owner).eventHappen.apply(l,arguments)}});return e["template-bb06f2c4"]=x,Object.assign(n,l,e),e},filterCustomArr=[],sjsExportsMap={},smartJsMap={},modules={},filtersObj={};modulesExports.exports={componentUsingComponentMap:componentUsingComponentMap,componentUsingComponentMapInPlugin:componentUsingComponentMapInPlugin,componentGenerics:componentGenerics,getAPack:function(){return[1,"swan-private-root-tag",6,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",1,"page-loading",1,2,"hideLoading",6,1,3,"rendered",1,"template-77f12031",3,2,"data",13,1,14,3,"type",6,1,3,"errType",2,"data-origin-name",3,"c-error-page",38,6,1,3,"showErrorPage",null,1,"view",4,2,"class",3,"new-freshmen-welfare-container",1,"view",4,2,"class",3,"page-top",2,"style",9,null,3,3,"background-image: url(",7,null,6,1,3,"bannerImg",1,8,6,1,3,"_style",null,3,")",1,"top-fixed-bar",9,2,"title",3,"新人福利专享",2,"status-bar-height",6,1,3,"statusBarHeight",2,"navigation-bar-height",6,1,3,"navigationBarHeight",2,"custom-height",4,49,2,"titleColor",9,null,3,3,"rgba(255, 255, 255, ",7,null,6,1,3,"opacity",null,3,")",2,"background",9,null,5,3,"linear-gradient(92.57deg, rgba(255, 128, 73, ",7,null,6,1,3,"opacity",null,3,") 1.74%, rgba(255, 92, 86, ",7,null,6,1,3,"opacity",null,3,") 100.34%)",33,"isAnimation",9,null,null,2,"need-place",5,null,2,"opacity",6,1,3,"opacity",1,"view",3,2,"class",3,"page-top-content",1,"view",4,2,"class",3,"page-top-row1",1,"view",8,2,"class",3,"rule btn swan-spider-tap",2,"data-jump-type",6,2,3,"ruleInfo",3,"jumpType",2,"data-jump-url",6,2,3,"ruleInfo",3,"jumpUrl",2,"data-ubc-type",3,"newHsh",2,"data-mod",9,null,3,3,'{\n                        "module": "rule",\n                        "user_type":"',7,null,6,1,3,"dotUserTag",null,3,'"\n                    }',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"commonJump",3,"",3,"bind",null,38,6,1,3,"ruleInfo",null,9,null,2,7,null,6,2,3,"ruleInfo",3,"text",null,3,"\n                ",null,1,"image",2,2,"class",7,null,12,6,1,3,"formatCountDown",3,"limit-time-title-img",3,"title-img",1,8,6,1,3,"_class",null,2,"src",6,1,3,"topImg",1,"view",8,2,"class",3,"coupon btn swan-spider-tap",2,"data-jump-type",6,2,3,"baoInfo",3,"jumpType",2,"data-jump-url",6,2,3,"baoInfo",3,"jumpUrl",2,"data-ubc-type",3,"newHsh",2,"data-mod",9,null,3,3,'{\n                        "module": "coupons",\n                        "user_type":"',7,null,6,1,3,"dotUserTag",null,3,'"\n                    }',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"commonJump",3,"",3,"bind",null,38,6,1,3,"baoInfo",null,9,null,2,7,null,6,2,3,"baoInfo",3,"text",null,3,"\n                ",null,1,"view",3,2,"class",3,"page-top-row2",1,"template-bb06f2c4",6,33,"isTop",9,null,null,2,"fontColor",3,"#fff",2,"background",3,"#E41010",2,"countdown",6,1,3,"formatCountDown",2,"data-origin-name",3,"c-count-down",38,6,1,3,"formatCountDown",1,1,"view",4,2,"class",3,"page-info-subtitle",40,1,"text",2,2,"class",3,"subtitle",null,9,null,1,7,null,6,2,3,"subtitle",4,0,null,1,"text",2,2,"class",3,"subtitle",null,9,null,1,7,null,6,2,3,"subtitle",4,1,null,1,"view",8,2,"class",3,"order btn swan-spider-tap",2,"data-jump-type",6,2,3,"orderInfo",3,"jumpType",2,"data-jump-url",6,2,3,"orderInfo",3,"jumpUrl",2,"data-ubc-type",3,"newHsh",2,"data-mod",9,null,3,3,'{\n                        "module": "order",\n                        "user_type":"',7,null,6,1,3,"dotUserTag",null,3,'"\n                    }',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"commonJump",3,"",3,"bind",null,38,6,1,3,"orderInfo",null,9,null,2,7,null,6,2,3,"orderInfo",3,"text",null,3,"\n                ",null,1,"view",8,2,"class",3,"new-freshmen-welfare-content",1,"swiper",10,33,"autoplay",5,1,2,"current",3,"0",2,"current-item-id",3,"0",33,"circular",9,null,null,33,"vertical",9,null,null,2,"disable-touchmove",10,183,6,2,3,"tips",3,"length",4,1,2,"display-multiple-items",3,"1",2,"class",3,"tips-wrap",38,10,76,6,1,3,"tips",6,2,3,"tips",3,"length",1,"swiper-item",4,2,"class",3,"tips-item",37,"item","index",null,6,1,3,"tips",1,"view",3,2,"class",3,"tips-left",1,"image",2,2,"class",3,"tips-icon",2,"src",6,1,3,"voiceImg",1,"text",2,2,"class",3,"tips-title",null,9,null,2,7,null,6,2,3,"item",3,"title",null,3,"\n                    ",1,"view",7,2,"class",3,"tips-btn swan-spider-tap",2,"data-jump-type",6,2,3,"item",3,"jumpType",2,"data-jump-url",6,2,3,"item",3,"jumpUrl",2,"data-ubc-type",3,"newHsh",2,"data-mod",9,null,3,3,'{\n                        "module": "voice",\n                        "index": "',7,null,6,1,3,"index",null,3,'"\n                    }',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"commonJump",3,"",3,"bind",null,null,9,null,2,7,null,6,2,3,"item",3,"button",null,3,"\n                ",null,1,"view",3,2,"class",3,"tab-fixed-bg",2,"style",9,null,3,3,"height: ",7,null,10,43,10,43,6,1,3,"navigationBarHeight",6,1,3,"statusBarHeight",4,12,1,8,6,1,3,"_style",null,3,"px",38,10,183,6,1,3,"opacity",4,1,null,1,"scroll-view",8,2,"class",3,"scroll-view tab-container",2,"style",9,null,3,3,"top: ",7,null,10,43,6,1,3,"navigationBarHeight",6,1,3,"statusBarHeight",1,8,6,1,3,"_style",null,3,"px;",33,"scroll-x",9,null,null,2,"scroll-y",3,"false",2,"show-scrollbar",3,"false",33,"scroll-with-animation",9,null,null,38,10,155,6,1,3,"opacity",4,1,1,"view",11,2,"id",9,null,2,3,"tab-",7,null,6,1,3,"index",null,2,"class",9,null,3,3,"tab-item ",7,null,12,10,183,6,1,3,"currentTab",6,2,3,"item",3,"id",3,"tab-active-item",3,"",1,8,6,1,3,"_class",null,3," swan-spider-tap",2,"data-index",6,1,3,"index",2,"data-id",6,2,3,"item",3,"id",2,"data-ubc-type",3,"newHsh",2,"data-mod",9,null,7,3,'{\n                    "module": "tab",\n                    "index": "',7,null,6,1,3,"index",null,3,'",\n                    "tab": "',7,null,6,2,3,"item",3,"title",null,3,'",\n                    "user_type": "',7,null,6,1,3,"dotUserTag",null,3,'"\n                }',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"handleClickTab",3,"",3,"bind",null,37,"item","index",null,6,1,3,"tabList",1,"image",2,2,"class",3,"tab-img",2,"src",12,10,183,6,1,3,"currentTab",6,2,3,"item",3,"id",6,2,3,"item",3,"hitImg",6,2,3,"item",3,"img",1,"text",3,2,"class",3,"tab-title",2,"style",9,null,2,3,"color: ",7,null,12,10,183,6,1,3,"currentTab",6,2,3,"item",3,"id",6,2,3,"item",3,"color",3,"#525252",1,8,6,1,3,"_style",null,null,9,null,2,7,null,6,2,3,"item",3,"title",null,3,"\n                ",1,"text",3,2,"class",3,"tab-desc",2,"style",9,null,2,3,"background: ",7,null,12,10,183,6,1,3,"currentTab",6,2,3,"item",3,"id",6,2,3,"item",3,"color",3,"transparent",1,8,6,1,3,"_style",null,null,9,null,2,7,null,6,2,3,"item",3,"notice",null,3,"\n                ",null,1,"scroll-view",9,2,"class",3,"scroll-view tab-fixed",2,"style",9,null,3,3,"top: ",7,null,10,43,6,1,3,"navigationBarHeight",6,1,3,"statusBarHeight",1,8,6,1,3,"_style",null,3,"px;",33,"scroll-x",9,null,null,2,"scroll-y",3,"false",2,"show-scrollbar",3,"false",34,"scroll-into-view",6,1,3,"scrollIntoView",33,"scroll-with-animation",9,null,null,38,10,183,6,1,3,"opacity",4,1,1,"view",2,2,"class",3,"tab-list",1,"view",10,2,"id",9,null,2,3,"tab-",7,null,6,1,3,"index",null,2,"class",9,null,3,3,"tab-item ",7,null,12,10,183,6,1,3,"currentTab",6,2,3,"item",3,"id",3,"tab-active-item",3,"",1,8,6,1,3,"_class",null,3," swan-spider-tap",2,"data-index",6,1,3,"index",2,"data-id",6,2,3,"item",3,"id",2,"data-ubc-type",3,"newHsh",2,"data-mod",9,null,7,3,'{\n                        "module": "tab",\n                        "index": "',7,null,6,1,3,"index",null,3,'",\n                        "tab": "',7,null,6,2,3,"item",3,"title",null,3,'",\n                        "user_type": "',7,null,6,1,3,"dotUserTag",null,3,'"\n                    }',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"handleClickTab",3,"",3,"bind",null,37,"item","index",null,6,1,3,"tabList",1,"text",3,2,"class",3,"tab-title",2,"style",9,null,2,3,"color: ",7,null,12,10,183,6,1,3,"currentTab",6,2,3,"item",3,"id",6,2,3,"item",3,"color",3,"#525252",1,8,6,1,3,"_style",null,null,9,null,2,7,null,6,2,3,"item",3,"title",null,3,"\n                    ",1,"text",3,2,"class",3,"tab-desc",2,"style",9,null,2,3,"background: ",7,null,12,10,183,6,1,3,"currentTab",6,2,3,"item",3,"id",6,2,3,"item",3,"color",3,"transparent",1,8,6,1,3,"_style",null,null,9,null,2,7,null,6,2,3,"item",3,"notice",null,3,"\n                    ",null,1,"view",3,2,"class",3,"new-freshmen-welfare-list",1,"view",6,2,"class",3,"card",2,"data-id",3,"feature",2,"data-ubc-show",9,null,3,3,'{\n                    "module": "recommend",\n                    "user_type": "',7,null,6,1,3,"dotUserTag",null,3,'"\n                }',2,"id",3,"feature",1,"template-d5d3db17",2,2,"nodes",6,1,3,"featureTitle",2,"data-origin-name",3,"title",1,"view",2,2,"class",3,"card-content",1,"view",3,38,10,76,6,1,3,"featureList",6,2,3,"featureList",3,"length",1,"view",2,2,"class",3,"sku-list",1,"view",6,2,"class",3,"sku-item",2,"id",9,null,2,3,"recommend-",7,null,6,1,3,"index",null,2,"data-id",9,null,2,3,"recommend-",7,null,6,1,3,"index",null,2,"data-ubc-show",9,null,7,3,'{\n                                    "module": "recommend",\n                                    "user_type": "',7,null,6,1,3,"dotUserTag",null,3,'",\n                                    "skuid": "',7,null,6,2,3,"item",3,"id",null,3,'",\n                                    "rank": "',7,null,6,1,3,"index",null,3,'"\n                                }',37,"item","index",null,6,1,3,"featureList",1,"template-b095236a",2,2,"data",13,7,15,6,1,3,"item",14,3,"mod",3,"recommend",14,3,"user_type",6,1,3,"dotUserTag",14,3,"skuid",6,2,3,"item",3,"id",14,3,"index",6,1,3,"index",14,3,"isNeedDrawCoupon",6,1,3,"isNeedDrawCoupon",14,3,"showBegin",11,33,6,1,3,"isLogin",2,"data-origin-name",3,"sku-item",1,"view",6,2,"class",9,null,3,3,"sku-more ",7,null,12,6,1,3,"hasMoreData",3,"sku-more-arrow",3,"",1,8,6,1,3,"_class",null,3," swan-spider-tap",2,"data-ubc-type",3,"newHsh",2,"data-repeat",5,1,2,"data-mod",9,null,3,3,'{\n                                "module": "recommend_more",\n                                "user_type":"',7,null,6,1,3,"dotUserTag",null,3,'"\n                            }',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"handleClickMore",3,"",3,"bind",null,null,9,null,2,7,null,12,6,1,3,"hasMoreData",3,"展开更多",3,"没有更多了，快去抢优惠吧",null,3,"\n                        ",1,1,"view",3,2,"class",3,"init",40,1,"c-loading",1,2,"status",3,"loading",1,"view",10,2,"class",9,null,2,3,"card ",7,null,12,10,183,6,2,3,"card",3,"id",3,"food",3,"food-bottom",3,"",1,8,6,1,3,"_class",null,2,"data-id",6,2,3,"card",3,"id",2,"data-ubc-show",9,null,5,3,'{\n                    "module": "',7,null,6,2,3,"card",3,"module",null,3,'",\n                    "user_type": "',7,null,6,1,3,"dotUserTag",null,3,'"\n                }',2,"id",6,2,3,"card",3,"id",37,"card","index",null,6,1,3,"cardList",1,"view",3,38,10,183,6,2,3,"card",3,"id",3,"food",1,"template-d5d3db17",8,2,"nodes",6,2,3,"card",3,"title",2,"right-text",6,3,3,"card",3,"more",3,"text",2,"background",6,2,3,"card",3,"background",2,"jump-type",6,2,3,"card",3,"jumpType",2,"jump-url",6,2,3,"card",3,"jumpUrl",2,"module",6,2,3,"card",3,"module",2,"dot-user-tag",6,1,3,"dotUserTag",2,"data-origin-name",3,"title",1,"view",4,2,"class",3,"card-content",1,"template-4f970603",2,2,"data-origin-name",3,"card-loading",38,6,2,3,"card",3,"loading",null,1,"template-24bc8a66",3,2,"reloadImg",6,2,3,"card",3,"reloadImg",2,"data-origin-name",3,"reload",38,6,2,3,"card",3,"loadError",null,1,"view",2,2,"class",3,"sku-list",1,"view",6,2,"class",3,"sku-item",2,"data-id",9,null,2,3,"food-",7,null,6,1,3,"index",null,2,"id",9,null,2,3,"food-",7,null,6,1,3,"index",null,2,"data-ubc-show",9,null,9,3,'{\n                                    "module": "',7,null,6,2,3,"card",3,"module",null,3,'",\n                                    "user_type": "',7,null,6,1,3,"dotUserTag",null,3,'",\n                                    "skuid": "',7,null,6,2,3,"item",3,"id",null,3,'",\n                                    "rank": "',7,null,6,1,3,"index",null,3,'"\n                                }',37,"item","index",null,6,2,3,"card",3,"data",1,"template-b095236a",2,2,"data",13,7,15,6,1,3,"item",14,3,"mod",6,2,3,"card",3,"module",14,3,"user_type",6,1,3,"dotUserTag",14,3,"skuid",6,2,3,"item",3,"id",14,3,"index",6,1,3,"index",14,3,"isNeedDrawCoupon",6,1,3,"isNeedDrawCoupon",14,3,"showBegin",11,33,6,1,3,"isLogin",2,"data-origin-name",3,"sku-item",null,1,"view",3,38,10,183,6,2,3,"card",3,"id",3,"coupon",1,"template-d5d3db17",8,2,"nodes",6,2,3,"card",3,"title",2,"right-text",6,3,3,"card",3,"more",3,"text",2,"background",6,2,3,"card",3,"background",2,"jump-type",6,2,3,"card",3,"jumpType",2,"jump-url",6,2,3,"card",3,"jumpUrl",2,"module",6,2,3,"card",3,"module",2,"dot-user-tag",6,1,3,"dotUserTag",2,"data-origin-name",3,"title",1,"view",4,2,"class",3,"card-content",1,"template-4f970603",2,2,"data-origin-name",3,"card-loading",38,6,2,3,"card",3,"loading",null,1,"template-24bc8a66",3,2,"reloadImg",6,2,3,"card",3,"reloadImg",2,"data-origin-name",3,"reload",38,6,2,3,"card",3,"loadError",null,1,"view",6,2,"class",3,"takeout-coupon",2,"data-id",9,null,2,3,"coupon-",7,null,6,1,3,"index",null,2,"id",9,null,2,3,"coupon-",7,null,6,1,3,"index",null,2,"data-ubc-show",9,null,9,3,'{\n                                "module": "',7,null,6,2,3,"card",3,"module",null,3,'",\n                                "user_type": "',7,null,6,1,3,"dotUserTag",null,3,'",\n                                "coupon_id": "',7,null,6,2,3,"item",3,"couponName",null,3,'",\n                                "rank": "',7,null,6,1,3,"index",null,3,'"\n                            }',37,"item","index",null,6,2,3,"card",3,"data",1,"c-button-login",4,2,"type",3,"login",2,"class",3,"swan-spider-tap",35,"bindloginhandle",8,6,1,3,"eventHappen",5,3,"loginhandle",6,1,3,"$event",3,"onCouponTap",3,"",3,"bind",null,1,"coupon",19,2,"bg-img",6,2,3,"item",3,"bgImg",2,"title",6,2,3,"item",3,"title",2,"time-range",6,2,3,"item",3,"description",2,"status-img-url",6,2,3,"item",3,"statusImgUrl",33,"need-login",9,null,null,2,"status",6,2,3,"item",3,"status",2,"index",6,2,3,"item",3,"index",2,"status-name",6,2,3,"item",3,"statusName",33,"is-toast",9,null,null,2,"content-text-color",6,2,3,"item",3,"contentTextColor",33,"is-button-show",9,null,null,2,"btn-bg",6,2,3,"item",3,"btnBg",2,"btn-text-color",6,2,3,"item",3,"btnTextColor",2,"btn-border-color",6,2,3,"item",3,"btnBorderColor",2,"data-coupon-index",6,1,3,"index",2,"data-coupon-id",6,2,3,"item",3,"couponName",2,"data-module",6,2,3,"card",3,"module",35,"bindbtnclick",8,6,1,3,"eventHappen",5,3,"btnclick",6,1,3,"$event",3,"onCouponTap",3,"",3,"bind",null,1,"view",3,2,"class",3,"coupon-slot-price",1,"view",2,2,"class",3,"unit",null,3,"¥",1,"view",2,2,"class",3,"price",null,9,null,1,7,null,6,2,3,"item",3,"price",null,null,1,"view",3,38,10,183,6,2,3,"card",3,"id",3,"movie",1,"template-d5d3db17",8,2,"nodes",6,2,3,"card",3,"title",2,"right-text",6,3,3,"card",3,"more",3,"text",2,"background",6,2,3,"card",3,"background",2,"jump-type",6,2,3,"card",3,"jumpType",2,"jump-url",6,2,3,"card",3,"jumpUrl",2,"module",6,2,3,"card",3,"module",2,"dot-user-tag",6,1,3,"dotUserTag",2,"data-origin-name",3,"title",1,"view",4,2,"class",3,"card-content",1,"template-4f970603",2,2,"data-origin-name",3,"card-loading",38,6,2,3,"card",3,"loading",null,1,"template-24bc8a66",3,2,"reloadImg",6,2,3,"card",3,"reloadImg",2,"data-origin-name",3,"reload",38,6,2,3,"card",3,"loadError",null,1,"view",2,2,"class",3,"movie-list",1,"view",15,2,"class",3,"movie-item swan-spider-tap",2,"data-id",9,null,2,3,"movie-",7,null,6,1,3,"index",null,2,"id",9,null,2,3,"movie-",7,null,6,1,3,"index",null,2,"data-ubc-show",9,null,9,3,'{\n                                    "module": "',7,null,6,2,3,"card",3,"module",null,3,'",\n                                    "user_type": "',7,null,6,1,3,"dotUserTag",null,3,'",\n                                    "movie_id": "',7,null,6,2,3,"movie",3,"movieId",null,3,'",\n                                    "rank": "',7,null,6,1,3,"index",null,3,'"\n                                }',2,"data-jump-type",6,2,3,"movie",3,"jumpType",2,"data-jump-url",6,2,3,"movie",3,"jumpUrl",2,"data-ubc-type",3,"newHsh",2,"data-mod",9,null,9,3,'{\n                                    "module": "',7,null,6,2,3,"card",3,"module",null,3,'",\n                                    "user_type": "',7,null,6,1,3,"dotUserTag",null,3,'",\n                                    "movie_id": "',7,null,6,2,3,"movie",3,"movieId",null,3,'",\n                                    "rank": "',7,null,6,1,3,"index",null,3,'"\n                                }',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"commonJump",3,"",3,"bind",null,38,10,76,6,2,3,"card",3,"data",6,3,3,"card",3,"data",3,"length",37,"movie","index",null,6,2,3,"card",3,"data",1,"view",4,2,"class",3,"movie-img-wrap",1,"image",2,2,"class",3,"movie-img",2,"src",6,2,3,"movie",3,"poster",1,"view",1,2,"class",3,"movie-img-mask",1,"view",4,2,"class",3,"discount-info",2,"style",3,"position: absolute;",1,"template",2,37,"source","index",null,6,2,3,"movie",3,"sourceList",1,"image",4,2,"src",6,2,3,"source",3,"logo",2,"style",9,null,3,3,"position: absolute; z-index: ",7,null,10,45,4,3,6,1,3,"index",1,8,6,1,3,"_style",null,3,";",2,"class",3,"logo",38,10,60,6,1,3,"index",4,3,null,1,"text",3,2,"class",3,"text",2,"style",9,null,3,3,"left: ",7,null,12,10,62,6,3,3,"movie",3,"sourceList",3,"length",4,1,10,43,10,43,4,3.865,10,42,4,1.932,12,10,62,6,3,3,"movie",3,"sourceList",3,"length",4,3,4,3,6,3,3,"movie",3,"sourceList",3,"length",4,.725,4,0,1,8,6,1,3,"_style",null,3,"vw",null,9,null,2,7,null,6,3,3,"movie",3,"sourceList",3,"length",null,3,"家比价\n                                        ",1,"view",2,2,"class",3,"movie-name c-lc1",null,9,null,2,7,null,6,2,3,"movie",3,"name",null,3,"\n                                ",1,"view",3,2,"class",3,"movie-star",38,10,76,6,2,3,"movie",3,"score",11,33,6,2,3,"movie",3,"isPresale",1,"view",4,2,"class",3,"movie-rating",38,10,155,6,2,3,"movie",3,"score",3,"暂无评分",1,"view",3,2,"class",3,"star_rate",37,"item","index",null,6,2,3,"movie",3,"star",1,"view",2,2,"class",3,"c-icon-star-full movie-score",38,10,122,6,1,3,"item",4,0,2,1,"view",2,2,"class",3,"c-icon-star-half movie-score",39,10,122,6,1,3,"item",4,2,1,"view",2,2,"class",3,"c-icon-star-empty movie-score",40,1,"view",2,2,"class",3,"score-text",null,9,null,2,7,null,6,2,3,"movie",3,"score",null,3,"分",1,1,"view",3,2,"class",3,"no-rating",40,null,3,"暂无评分",1,1,"view",3,2,"class",3,"movie-star movie-wishnum",40,null,9,null,2,7,null,6,2,3,"movie",3,"wishNum",null,3,"人想看\n                                ",1,"view",2,2,"class",9,null,2,3,"movie-btn ",7,null,12,6,2,3,"movie",3,"isPresale",3,"blue-btn",3,"",1,8,6,1,3,"_class",null,null,9,null,2,7,null,12,6,2,3,"movie",3,"isPresale",3,"预售",3,"购票",null,3,"\n                                ",1,1,"view",3,2,"class",3,"movie-empty",40,null,3,"抱歉，您所在的城市暂无在映影片",null,1,"view",3,38,10,183,6,2,3,"card",3,"id",3,"recharges",1,"template-d5d3db17",4,2,"nodes",6,2,3,"card",3,"title",2,"right-text",6,3,3,"card",3,"more",3,"text",2,"background",6,2,3,"card",3,"background",2,"data-origin-name",3,"title",1,"view",2,2,"class",3,"card-content",1,"view",5,2,"class",3,"recharges",37,"item","index",null,6,2,3,"card",3,"data",1,"image",2,2,"class",3,"recharges-img",2,"src",6,2,3,"item",3,"bannerImg",1,"view",3,2,"class",3,"recharges-info",1,"view",2,2,"class",3,"recharges-title",null,9,null,1,7,null,6,2,3,"item",3,"title",null,1,"view",2,2,"class",3,"recharges-desc",null,9,null,1,7,null,6,2,3,"item",3,"notice",null,1,"view",7,2,"class",3,"recharges-btn swan-spider-tap",2,"data-jump-type",6,2,3,"card",3,"jumpType",2,"data-jump-url",6,2,3,"card",3,"jumpUrl",2,"data-ubc-type",3,"newHsh",2,"data-mod",9,null,5,3,'{\n                                    "module": "',7,null,6,2,3,"card",3,"module",null,3,'",\n                                    "user_type": "',7,null,6,1,3,"dotUserTag",null,3,'"\n                                }',35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"commonJump",3,"",3,"bind",null,null,3,"立即充值\n                            ",null,1,"view",3,38,10,183,6,2,3,"card",3,"id",3,"express",1,"template-d5d3db17",8,2,"nodes",6,2,3,"card",3,"title",2,"right-text",6,3,3,"card",3,"more",3,"text",2,"background",6,2,3,"card",3,"background",2,"jump-type",6,2,3,"card",3,"jumpType",2,"jump-url",6,2,3,"card",3,"jumpUrl",2,"module",6,2,3,"card",3,"module",2,"dot-user-tag",6,1,3,"dotUserTag",2,"data-origin-name",3,"title",1,"view",4,2,"class",3,"card-content",1,"template-4f970603",2,2,"data-origin-name",3,"card-loading",38,6,2,3,"card",3,"loading",null,1,"template-24bc8a66",3,2,"reloadImg",6,2,3,"card",3,"reloadImg",2,"data-origin-name",3,"reload",38,6,2,3,"card",3,"loadError",null,1,"view",2,2,"class",3,"express-list",1,"view",7,2,"class",3,"express-item",2,"data-id",9,null,2,3,"express-",7,null,6,1,3,"index",null,2,"id",9,null,2,3,"express-",7,null,6,1,3,"index",null,2,"data-ubc-show",9,null,7,3,'{\n                                    "module": "',7,null,6,2,3,"card",3,"module",null,3,'",\n                                    "user_type": "',7,null,6,1,3,"dotUserTag",null,3,'",\n                                    "coupon_id": "',7,null,6,2,3,"item",3,"id",null,3,'"\n                                }',37,"item","index",null,6,2,3,"card",3,"data",1,"view",5,2,"class",3,"red-packet",1,"image",5,2,"src",6,1,3,"couponImg",2,"lazy-load",3,"true",2,"image-menu-prevent",3,"true",2,"preview",3,"false",2,"class",3,"express-bg-img",1,"view",4,2,"class",3,"express-desc",1,"text",2,2,"class",3,"express-number",null,9,null,1,7,null,6,2,3,"item",3,"value",null,1,"text",2,2,"class",3,"express-unit",null,9,null,1,7,null,6,2,3,"item",3,"unit",null,1,"view",2,2,"class",3,"express-tips c-lc1",null,9,null,1,7,null,6,2,3,"item",3,"desc",null,1,"c-button-login",8,2,"type",3,"login",2,"class",9,null,3,3,"express-btn ",7,null,12,10,155,6,2,3,"item",3,"status",4,4,3,"express-btn-width",3,"",1,8,6,1,3,"_class",null,3," swan-spider-tap",2,"style",9,null,3,3,"background: ",7,null,6,2,3,"item",3,"background",1,8,6,1,3,"_style",null,3,";",2,"dataset",13,1,14,3,"index",6,1,3,"index",2,"data-ubc-type",3,"newHsh",2,"data-mod",9,null,7,3,'{\n                                            "module": "',7,null,6,2,3,"card",3,"module",null,3,'",\n                                            "user_type": "',7,null,6,1,3,"dotUserTag",null,3,'",\n                                            "coupon_id": "',7,null,6,2,3,"item",3,"id",null,3,'"\n                                        }',35,"bindloginhandle",8,6,1,3,"eventHappen",5,3,"loginhandle",6,1,3,"$event",3,"handleExpress",3,"",3,"bind",null,1,"text",3,2,"class",3,"express-btn-text",2,"style",9,null,2,3,"color: ",7,null,6,2,3,"item",3,"color",1,8,6,1,3,"_style",null,null,9,null,2,7,null,6,2,3,"item",3,"text",null,3,"\n                                        ",1,"view",3,2,"class",3,"express-btn-bg",2,"style",9,null,3,3,"background-image:url(",7,null,6,2,3,"item",3,"statusImgUrl",1,8,6,1,3,"_style",null,3,")",38,6,2,3,"item",3,"statusImgUrl",null,1,"view",2,2,"class",3,"red-packet-mask",38,6,2,3,"item",3,"needMask",null,null,1,"view",4,2,"class",3,"bottom-decorate",1,"image",2,2,"class",3,"img",2,"src",6,1,3,"decorateImg",1,"text",2,2,"class",3,"text",null,3,"我是有底线的",1,"image",2,2,"class",3,"img right",2,"src",6,1,3,"decorateImg",1,"view",1,2,"class",3,"content-bg",1,"view",3,2,"class",3,"lottieWwrap",38,6,1,3,"isShowPop",1,"view",3,2,"class",3,"videoWrap",1,"animation-video",8,2,"class",3,"video",2,"path",6,1,3,"videoPath",2,"loop",5,1,2,"resource-width",3,"2216",2,"resource-height",3,"2216",2,"canvas-style",6,1,3,"canvasStyle",2,"autoplay",5,1,2,"alpha-direction",3,"left",1,"view",2,2,"class",3,"videoText swan-spider-tap",35,"bindtap",8,6,1,3,"eventHappen",5,3,"tap",6,1,3,"$event",3,"clickBottom",3,"",3,"bind",null,null]},isComponent:!1,componentPath:"homes/new-freshmen-welfare/index.swan",customComponentCss:[],createTemplateComponent:createTemplateComponent,filters:Object.assign({},filtersObj),initialFilters:filterCustomArr,pageModules:modules,extProperties:{_smartJs:smartJsMap}}}));