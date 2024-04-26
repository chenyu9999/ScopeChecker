var _sjsSupporter={compiler:!1};window.define("pages/new/index.swan",(function(e,o){o.exports={componentUsingComponentMap:{"components/NavigateBar.swan":["navigate-bar"],"components/Banner.swan":["banner"],"components/HeroImageGame.swan":["hero-image-game"],"components/FlexStyleGames.swan":["flex-style-games"],"components/RankModule.swan":["rank-module"],"components/Footer.swan":["footer"],"components/EmptyBar.swan":["empty-bar"],"components/FloatDownload.swan":["float-download"],"components/BookModal.swan":["book-modal"],"components/InstallModal.swan":["install-modal"],"components/PauseModal.swan":["pause-modal"],"components/ActivityModule.swan":["activity-module"],"components/FindGameModule.swan":["find-game-module"],"components/NewGameModule.swan":["new-game-module"],"components/NewPageVideoModule.swan":["new-page-video-module"],"components/FloatActivity.swan":["float-activity"],"components/TodayStarterModule.swan":["today-starter-module"],"components/GameLeanSliderModule.swan":["game-lean-slider-module"]},componentUsingComponentMapInPlugin:{},componentGenerics:{},template:'\n<view class="new-page swan-spider-tap" data-touchstart-proxy="touchStart" data-touchend-proxy="touchEnd" on-capturebindtouchstart="eventHappen(\'touchstart\', $event, \'__handlerProxy\', \'capture\', \'bind\')" on-capturebindtouchend="eventHappen(\'touchend\', $event, \'__handlerProxy\', \'capture\', \'bind\')"><view class="page-content" animation="{{contentFadeInData}}"><navigate-bar title="新奇" is-transparent="{{isNavBarTransparent}}" is-transparent-bg="{{isTransparentBg}}" /><template s-for="item, index in pageModule"><banner s-if="item.computed.showBanner" list="{{item.module_data}}" mod-pblog-data="{{item.pblogData}}" nav-bar-height="{{navBarHeight}}" is-new-style="{{true}}" data-mod-slide-show-log-proxy="modSlideShowLog" data-mod-slide-show-log-args="{{[\'zgm60m0s3sg_$event\', \'modSlide\']}}" data-mod-slide-show-log-event="zgm60m0s3sg_$event" on-bindmodSlideShowLog="eventHappen(\'modSlideShowLog\', $event, \'__handlerProxy\', \'\', \'bind\')" /><new-game-module s-elif="item.computed.showNewGamesSwipe" page-rendered="{{pageRendered}}" module-info="{{item}}" data-mod-slide-show-log-proxy="modSlideShowLog" data-mod-slide-show-log-args="{{[\'7gl28ta0jki_$event\', \'modTabSlide\']}}" data-mod-slide-show-log-event="7gl28ta0jki_$event" on-bindmodSlideShowLog="eventHappen(\'modSlideShowLog\', $event, \'__handlerProxy\', \'\', \'bind\')" /><hero-image-game s-elif="item.computed.showNewGameCard || item.computed.showBigGameCard" module-id="{{item.module_id}}" module-info="{{item}}" is-new-style="{{true}}" title-text="{{item.module_desc_type >= 1 ? item.module_name : \'\'}}" title-tag="{{item.title_tag}}" has-activity="{{item.module_desc_type === 2}}" game-info="{{item.module_data && item.module_data[0] || {}}}" mod-pblog-data="{{item.pblogData}}" data-mod-slide-proxy="modSlideChange" on-bindmodSlide="eventHappen(\'modSlide\', $event, \'__handlerProxy\', \'\', \'bind\')" /><flex-style-games s-elif="item.computed.showGridGames || item.computed.showListGames" module-info="{{item}}" is-new-style="{{true}}" page-type="{{pageType}}" columns="{{item.computed.showGridGames ? 4 : 1}}" /><rank-module s-elif="false && item.computed.showRankGames" is-new-style="{{true}}" module-info="{{item.module_data}}" more-data="{{item.more_data || {}}}" desc-type="{{item.desc_type || 0}}" page-rendered="{{pageRendered}}" data-mod-slide-show-log-proxy="modSlideShowLog" data-mod-slide-show-log-args="{{[\'due48x6ye4_$event\', \'modTabSlide\']}}" data-mod-slide-show-log-event="due48x6ye4_$event" on-bindmodSlideShowLog="eventHappen(\'modSlideShowLog\', $event, \'__handlerProxy\', \'\', \'bind\')" /><activity-module s-elif="item.computed.showActivityModule" module-info="{{item}}" data-mod-slide-show-log-proxy="modSlideShowLog" data-mod-slide-show-log-args="{{[\'c9568de04wh_$event\', \'modTabSlide\']}}" data-mod-slide-show-log-event="c9568de04wh_$event" on-bindmodSlideShowLog="eventHappen(\'modSlideShowLog\', $event, \'__handlerProxy\', \'\', \'bind\')" /><find-game-module s-elif="item.computed.showFindGameModule" module-info="{{item}}" /><today-starter-module s-elif="item.computed.showTodayStarterModule" module-info="{{item}}" /><game-lean-slider-module s-elif="item.computed.showGameLeanSlider" module-info="{{item}}" /><new-page-video-module s-elif="item.computed.showNewPageVideoModule" module-info="{{videoList}}" current-play-video-id="{{currentPlayVideoId}}" /></template><footer s-if="!isEmptyPage && !fetchDataFailed && pageModule.length >0 && pageRendered" showLoadingMore="{{hasMore || hasMoreVideo}}" showFooterLine="{{false}}" /><empty-bar s-if="isEmptyPage || fetchDataFailed" error-type="{{isEmptyPage ? \'empty\' : \'server\'}}" /><float-activity s-if="showFloatActivity && pageRendered" folded="{{isScrolling}}" logid="{{logid}}" conner-entry-info="{{connerEntryInfo}}" /><float-download s-if="pageRendered" is-page-scrolling="{{isPageScrolling}}" /><book-modal s-if="isShowBookModal" /><install-modal s-if="showIntallModal" /><pause-modal s-if="showPauseModal" /></view></view>',isComponent:!1,componentPath:"pages/new/index.swan",customComponentCss:[],createTemplateComponent:function(e){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));