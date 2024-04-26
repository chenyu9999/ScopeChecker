var _sjsSupporter={compiler:!1};window.define("pages/puzzle/puzzle.swan",(function(e,i){i.exports={componentUsingComponentMap:{"payment/Components/Navbar/Navbar.swan":["Navbar"],"payment/Components/NavbarPlaceholder/placeholder.swan":["NavbarPlaceholder"],"components/nav-bar/nav-bar.swan":["nav-bar"],"components/export-image/index.swan":["export-image"],"components/upload-tip/upload-tip.swan":["upload-tip"]},componentUsingComponentMapInPlugin:{},componentGenerics:{},template:'<view class="pages"><nav-bar titleText="{{titleText}}" showHome="{{false}}" isBatch="{{true}}" on-bindback="eventHappen(\'back\', $event, \'handleNavbarBack\', \'\', \'bind\')"></nav-bar><upload-tip id="upload-tip"></upload-tip><scroll-view scroll-y="{{viewport.scrollY}}" scroll-top="{= viewport.scrollTop =}" class="container swan-spider-tap" style="width: {{viewport.width}}px;height: {{viewport.height}}px;top: {{viewport.top}}px;left: {{viewport.left}}px;" on-bindscroll="eventHappen(\'scroll\', $event, \'scroll\', \'\', \'bind\')"><view class="page swan-spider-tap" s-for="item,index in drawPages" :key="{{index}}" data-id="{{item.id}}" style="width: {{item.width}}px;height: {{item.height}}px;left: {{item.left}}px;top: {{item.top}}px; overflow: {{viewport.scrollY ? \'hidden\' : \'visible\'}}" data-page="{{-1}}" data-image="{{-1}}" on-capturebindtap="eventHappen(\'tap\', $event, \'handleFocusImage\', \'capture\', \'bind\')"><view class="image swan-spider-tap" s-for="image, iidx in item.images" :key="{{iidx}}" style="\n                    scale: {{image.scale}}px;\n                    width: {{image.width}}px;\n                    height: {{image.height}}px;\n                    left: {{image.left}}px;\n                    top: {{image.top}}px;\n                    z-index: {{image.zIndex}};\n                    transform: rotate({{image.deg}}deg) scale({{image.scale}});\n                    display: {{image.del ? \'none\' : \'block\'}};\n                " data-page="{{index}}" data-image="{{iidx}}" data-del="{{image.del}}" data-focus="{{image.focus}}" on-capturebindtap="eventHappen(\'tap\', $event, \'start\', \'capture\', \'bind\')" on-bindtouchmove="eventHappen(\'touchmove\', $event, \'move\', \'\', \'bind\')" on-bindtouchend="eventHappen(\'touchend\', $event, \'end\', \'\', \'bind\')"><image class="image-el" src="{{image.url}}" mode="scaleToFill" image-menu-prevent style="border: {{image.focus ? ( 2 / image.scale + \'px solid  #06A7FF\') : ( 2 / image.scale + \'px solid rgba(255, 255, 255, 0)\')}};"></image><view s-if="image.focus" class="image-del-icon swan-spider-tap" data-page="{{index}}" data-image="{{iidx}}" style="width: {{56/image.scale}}rpx;height: {{56/image.scale}}rpx;" on-bindtap="eventHappen(\'tap\', $event, \'handleDelImage\', \'\', \'bind\')"></view><view s-if="image.focus" class="image-rotate-icon swan-spider-tap" data-page="{{index}}" data-image="{{iidx}}" style="width: {{56/image.scale}}rpx;height: {{56/image.scale}}rpx;" on-bindtouchstart="eventHappen(\'touchstart\', $event, \'handleRotateImage\', \'\', \'bind\')" on-bindtouchend="eventHappen(\'touchend\', $event, \'end\', \'\', \'bind\')"></view></view></view></scroll-view><view class="page-number" style="top: {{topHeight + 19}}px;" s-if="{{ showNum }}">{{currentPage}} / {{drawPageslength}}</view><cover-view class="combo-picker" s-if="showComboPicker"><cover-view class="combo-picker__mask"></cover-view><cover-view class="combo-picker__content"><cover-image src="https://staticsns.cdn.bcebos.com/amis/2022-6/1655868817099/icon-puzzle-combo-picker-puzzle-title.png" class="combo-picker__bg"></cover-image><cover-view class="combo-picker__header"><cover-view class="combo-picker__close swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'handleCloseComboPicker\', \'\', \'bind\')"></cover-view></cover-view><cover-view class="combo-picker__main {{isIpx ? \'is-ipx\' : \'\'}}"><cover-view class="combo-picker__item is-svip swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'handleBuySVip\', \'\', \'bind\')"><cover-image class="combo-picker__item-content" src="https://staticsns.cdn.bcebos.com/amis/2022-6/1655868818078/icon-puzzle-combo-picker-work-bg.png"></cover-image></cover-view><cover-view class="combo-picker__item normal swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'handleBuyWorkCombo\', \'\', \'bind\')"><cover-image class="combo-picker__item-content" src="https://staticsns.cdn.bcebos.com/amis/2022-6/1655868817583/icon-puzzle-combo-picker-svip-bg.png"></cover-image></cover-view></cover-view></cover-view></cover-view><view class="typesetting {{isIpx ? \'is-ipx\' : \'\'}} {{typeShow ? \'show\' : \'\'}} swan-spider-tap" on-bindtouchstart="eventHappen(\'touchstart\', $event, \'handleTypeStart\', \'\', \'bind\')" on-bindtouchmove="eventHappen(\'touchmove\', $event, \'handleTypeMove\', \'\', \'bind\')" on-bindtouchend="eventHappen(\'touchend\', $event, \'handleTypeEnd\', \'\', \'bind\')"><view class="typesetting-border"></view><view class="typesetting-content" style="transform: translateX({{typeTransX}}px);width: {{typesettingWidth}}px;"><image class="typesetting-item swan-spider-tap" s-for="item,index in TEMPLATE_LIST_ACTIVE" src="{{item.icon}}" data-index="{{index}}" data-type="{{item.type}}" data-mode="{{item.name}}" data-purpose="{{item.purpose}}" image-menu-prevent on-bindtap="eventHappen(\'tap\', $event, \'handleChooseType\', \'\', \'bind\')"></image></view></view><view class="operation has-border {{isIpx ? \'is-ipx\' : \'\'}}" s-if="!showImageForPhoto"><view class="operation-btn-wrap"><view class="operation-left"><view class="operation-btn {{typeShow ? \'active\' : \'\'}} swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'handleToggleType\', \'\', \'bind\')"><view class="operation-btn-icon operation-btn-type"></view><text class="noselect">排版</text></view><view class="operation-btn swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'handleAddPage\', \'\', \'bind\')"><view class="operation-btn-icon operation-btn-add-page"></view><text class="noselect">空白页</text></view></view><view class="operation-right"><button class="operation-save swan-spider-tap" round on-bindtap="eventHappen(\'tap\', $event, \'handleSave\', \'\', \'bind\')"><view class="operation-save-svip" style="background-image: url({{ isFromShoubai ? limitIcon : svipIcon}});}"></view>保存\n                </button></view></view></view><export-image id="exportImage"></export-image></view><view class="loading" s-if="isLoading"><view class="loading-wrap"><image class="loading-icon" image-menu-prevent src="https://staticsns.cdn.bcebos.com/amis/2022-6/1655782389670/loading.gif"></image><view class="loading-font">正在加载...</view></view></view>',isComponent:!1,componentPath:"pages/puzzle/puzzle.swan",customComponentCss:[],createTemplateComponent:function(e){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));