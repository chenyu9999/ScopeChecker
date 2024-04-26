window.define("dynamicLib://swan-solutions-ug-template/pages/index/index.swan",(function(e,n){n.exports={componentUsingComponentMap:{"components/navigation-bar/navigation-bar.swan":["navigation-bar"],"components/watermark/watermark.swan":["watermark"],"node_modules/@baidu/smartprogram-solution-components/components/sudoku/swan/index.swan":["sudoku"],"node_modules/@baidu/smartprogram-solution-components/components/header-btn/swan/index.swan":["header-btn"],"node_modules/@baidu/smartprogram-solution-components/components/task-list/swan/index.swan":["task-list"],"node_modules/@baidu/smartprogram-solution-components/components/invite-node/swan/index.swan":["invite-node"],"node_modules/@baidu/smartprogram-solution-components/components/kong-site/swan/index.swan":["kong-site"],"node_modules/@baidu/smartprogram-solution-components/components/feedback/swan/index.swan":["feedback"],"node_modules/@baidu/smartprogram-solution-components/components/divider-view/swan/index.swan":["divider-view"],"node_modules/@baidu/smartprogram-solution-components/components/tabs-server/swan/index.swan":["tabs-server"],"node_modules/@baidu/smartprogram-solution-components/components/swiper-banner/swan/index.swan":["swiper-banner"],"node_modules/@baidu/smartprogram-solution-components/components/grid-chunk/swan/index.swan":["grid-chunk"],"node_modules/@baidu/smartprogram-solution-components/components/image-view/swan/index.swan":["image-view"],"node_modules/@baidu/smartprogram-solution-components/components/coupon/swan/index.swan":["coupon"],"node_modules/@baidu/smartprogram-solution-components/components/feed/swan/index.swan":["feed"],"node_modules/@baidu/smartprogram-solution-components/components/bonus-goods/swan/index.swan":["bonus-goods"],"node_modules/@baidu/smartprogram-solution-components/components/sku/swan/index.swan":["sku"],"node_modules/@baidu/smartprogram-solution-components/components/word-edit/swan/index.swan":["word-edit"],"node_modules/@baidu/smartprogram-solution-components/components/subscribe/swan/index.swan":["subscribe"],"node_modules/@baidu/smartprogram-solution-components/components/add-widget/swan/index.swan":["add-widget"],"node_modules/@baidu/smartprogram-solution-components/components/advert/swan/index.swan":["advert"]},template:'<view class="wrap {{triggerViewHeight ? \'page-placeholder\':\'\'}}"><navigation-bar class="nav" options="{{navigationBarOptions}}" /><view class="background-images-container"><image s-for="item, index in schema.pageConfig.backgroundImages" class="background-image" src="{{item.imageURL}}" mode="widthFix" preview="false" /></view><view class="popup login" s-if="{{schema.pageConfig.loginModal.isShow}}"><view class="content"><image src="{{schema.pageConfig.loginModal.backgroundImage}}" class="background-image" mode="widthFix" preview="false" /><button class="login-button {{ schema.pageConfig.loginModal.isShowClose ? \'show-close\' : \'\' }} swan-spider-tap" open-type="login" on-bindlogin="eventHappen(\'login\', $event, \'login\', \'\', \'bind\')">{{schema.pageConfig.loginModal.loginButtonText}}</button><image s-if="{{schema.pageConfig.loginModal.isShowClose}}" class="popup-close swan-spider-tap" src="{{ schema.pageConfig.loginModal.closeButtonImage }}" on-bindtap="eventHappen(\'tap\', $event, \'closeLoginModal\', \'\', \'bind\')" /></view></view><view class="popup app-close" s-if="{{isShowBeforeAppCloseModal}}"><view class="content border-radius"><image src="{{schema.pageConfig.beforeAppCloseModal.backgroundImage}}" class="background-image" mode="widthFix" preview="false" /><view class="close-app-buttons"><button class="button swan-spider-tap" style="color: {{schema.pageConfig.beforeAppCloseModal.confirmColor}};" on-bindtap="eventHappen(\'tap\', $event, \'closeApp\', \'\', \'bind\')">{{schema.pageConfig.beforeAppCloseModal.confirmText || \'确定关闭\'}}</button><view class="separator"></view><button class="button swan-spider-tap" style="color: {{schema.pageConfig.beforeAppCloseModal.cancelColor}};" on-bindtap="eventHappen(\'tap\', $event, \'cancelCloseApp\', \'\', \'bind\')">{{schema.pageConfig.beforeAppCloseModal.cancelText || \'我再看看\'}}</button></view></view></view><view class="net-err" s-if="{{pageDataRequestErrNo === 0 && !schema.pageConfig}}" style="height: calc(100vh - {{ navigationBarAndStatusBarHeight * 2 }}px)"><view class="text load-text">正在加载...</view></view><view class="net-err" s-if="{{pageDataRequestErrNo !== 0}}" style="height: calc(100vh - {{ navigationBarAndStatusBarHeight * 2 }}px)"><view class="err-icon"></view><view class="text">网络不给力，请稍后重试\n        </view><view class="reload swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'reloadComponentsData\', \'\', \'catch\')">重新加载\n        </view></view><template s-for="item, index in schema.components"><header-btn s-if="item.component == \'header-btn\'" class="{{item.component || item.name}} {{item.id}}" component-id="{{item.id}}" component-index="{{index}}" config-data="{{item.configData}}" component-name="{{item.component || item.name}}" component-version="{{item.version}}" component-description="{{item.description}}"></header-btn><kong-site s-if="item.component == \'kong-site\'" class="{{item.component || item.name}} {{item.id}}" component-id="{{item.id}}" component-index="{{index}}" config-data="{{item.configData}}" component-name="{{item.component || item.name}}" component-version="{{item.version}}" component-description="{{item.description}}"></kong-site><bonus-goods s-if="item.component == \'bonus-goods\'" class="{{item.component || item.name}} {{item.id}}" component-id="{{item.id}}" component-index="{{index}}" config-data="{{item.configData}}" component-name="{{item.component || item.name}}" component-version="{{item.version}}" component-description="{{item.description}}"></bonus-goods><divider-view s-if="item.component == \'divider-view\'" class="{{item.component || item.name}} {{item.id}}" component-id="{{item.id}}" component-index="{{index}}" config-data="{{item.configData}}" component-name="{{item.component || item.name}}" component-version="{{item.version}}" component-description="{{item.description}}"></divider-view><feedback s-if="item.component == \'feedback\'" class="{{item.component || item.name}} {{item.id}}" component-id="{{item.id}}" component-index="{{index}}" config-data="{{item.configData}}" component-name="{{item.component || item.name}}" component-version="{{item.version}}" component-description="{{item.description}}"></feedback><tabs-server s-if="item.component == \'tabs-server\'" class="{{item.component || item.name}} {{item.id}}" component-id="{{item.id}}" component-index="{{index}}" config-data="{{item.configData}}" component-name="{{item.component || item.name}}" component-version="{{item.version}}" component-description="{{item.description}}"></tabs-server><swiper-banner s-if="item.component == \'swiper-banner\'" class="{{item.component || item.name}} {{item.id}}" component-id="{{item.id}}" component-index="{{index}}" config-data="{{item.configData}}" component-name="{{item.component || item.name}}" component-version="{{item.version}}" component-description="{{item.description}}"></swiper-banner><sudoku s-if="item.component == \'sudoku\'" class="{{item.component || item.name}} {{item.id}}" component-id="{{item.id}}" component-index="{{index}}" config-data="{{item.configData}}" component-name="{{item.component || item.name}}" component-version="{{item.version}}" component-description="{{item.description}}"></sudoku><task-list s-if="item.component == \'task-list\'" class="{{item.component || item.name}} {{item.id}}" component-id="{{item.id}}" component-index="{{index}}" config-data="{{item.configData}}" component-name="{{item.component || item.name}}" component-version="{{item.version}}" component-description="{{item.description}}"></task-list><invite-node s-if="item.component == \'invite-node\'" class="{{item.component || item.name}} {{item.id}}" component-id="{{item.id}}" component-index="{{index}}" config-data="{{item.configData}}" component-name="{{item.component || item.name}}" component-version="{{item.version}}" component-description="{{item.description}}"></invite-node><grid-chunk s-if="item.component == \'grid-chunk\'" class="{{item.component || item.name}} {{item.id}}" component-id="{{item.id}}" component-index="{{index}}" config-data="{{item.configData}}" component-name="{{item.component || item.name}}" component-version="{{item.version}}" component-description="{{item.description}}"></grid-chunk><image-view s-if="item.component == \'image-view\'" class="{{item.component || item.name}} {{item.id}}" component-id="{{item.id}}" component-index="{{index}}" config-data="{{item.configData}}" component-name="{{item.component || item.name}}" component-version="{{item.version}}" component-description="{{item.description}}"></image-view><coupon s-if="item.component == \'coupon\'" class="{{item.component || item.name}} {{item.id}}" component-id="{{item.id}}" component-index="{{index}}" config-data="{{item.configData}}" component-name="{{item.component || item.name}}" component-version="{{item.version}}" component-description="{{item.description}}"></coupon><feed s-if="item.component == \'feed\'" class="{{item.component || item.name}} {{item.id}}" component-id="{{item.id}}" component-index="{{index}}" config-data="{{item.configData}}" component-name="{{item.component || item.name}}" component-version="{{item.version}}" component-description="{{item.description}}"></feed><sku s-if="item.component == \'sku\'" class="{{item.component || item.name}} {{item.id}}" component-id="{{item.id}}" component-index="{{index}}" config-data="{{item.configData}}" component-name="{{item.component || item.name}}" component-version="{{item.version}}" component-description="{{item.description}}"></sku><word-edit s-if="item.component == \'word-edit\'" class="{{item.component || item.name}} {{item.id}}" component-id="{{item.id}}" component-index="{{index}}" config-data="{{item.configData}}" component-name="{{item.component || item.name}}" component-version="{{item.version}}" component-description="{{item.description}}"></word-edit><subscribe s-if="item.component == \'subscribe\'" class="{{item.component || item.name}} {{item.id}}" component-id="{{item.id}}" component-index="{{index}}" config-data="{{item.configData}}" component-name="{{item.component || item.name}}" component-version="{{item.version}}" component-description="{{item.description}}"></subscribe><add-widget s-if="item.component == \'add-widget\'" class="{{item.component || item.name}} {{item.id}}" component-id="{{item.id}}" component-index="{{index}}" config-data="{{item.configData}}" component-name="{{item.component || item.name}}" component-version="{{item.version}}" component-description="{{item.description}}"></add-widget><advert s-if="item.component == \'advert\'" class="{{item.component || item.name}} {{item.id}}" component-id="{{item.id}}" component-index="{{index}}" config-data="{{item.configData}}" component-name="{{item.component || item.name}}" component-version="{{item.version}}" component-description="{{item.description}}"></advert></template><watermark s-if="isShowWatermark" /></view>',isComponent:!1,componentPath:"dynamicLib://swan-solutions-ug-template/pages/index/index.swan",customComponentCss:[],createTemplateComponent:function(e){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{}}}));