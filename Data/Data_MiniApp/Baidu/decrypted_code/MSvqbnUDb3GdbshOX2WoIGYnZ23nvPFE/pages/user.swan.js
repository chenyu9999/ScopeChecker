var _sjsSupporter={compiler:!1};window.define("pages/user.swan",(function(e,i){i.exports={componentUsingComponentMap:{},componentUsingComponentMapInPlugin:{},componentGenerics:{},template:'\n  <view class="user_page"><view class="page-no-login" s-if="{{$noLogin$show}}"><image src="{{$noLogin$imgSrc}}" class="group" mode="aspectFit" /><text >{{$noLogin$text}}</text><button class="bd-login swan-spider-tap" type="primary" open-type="getPhoneNumber" s-if="{{!$noLogin$islogin}}" on-bindgetphonenumber="eventHappen(\'getphonenumber\', $event, \'$noLogin$bdLogin\', \'\', \'bind\')">百度授权快捷登录</button><view type="button" class="login swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'$noLogin$goLogin\', \'\', \'bind\')">{{$noLogin$button}}</view></view><view s-if="{{userInfo.code}}"><view class="header"><view class="user-info"><image src="{{userInfo.img}}" /><view class="nick-name">{{userInfo.nickName}}</view></view><text class="logout swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'logout\', \'\', \'bind\')">退出</text></view><view class="no-fav" s-if="{{favNum == 0}}"><image src="/images/no-fav.png" /><view class="tips">你还未收藏任何内容~</view></view><view class="fav" s-if="{{favNum != 0}}"><view class="fav-title">我的收藏</view><view class="feed" id="nav"><view class="wrapper {{isScroll ? \'fixed\' : \'\'}}"><view class="{{activeIndex == index ? \'active\':\'\'}} item-tab swan-spider-tap" s-for="item, index in tabList" s-key="index" data-wpychangetab-a="{{index}}" on-bindtap="eventHappen(\'tap\', $event, \'changeTab\', \'\', \'bind\')">{{item.name}}\n            </view></view><view class="{{isScroll ? \'wrapper\' : \'\'}}" /><view class="no-fav" s-if="{{allList.length == 0 && !isRequest}}"><image src="/images/no-fav.png" /><view class="tips">你还未收藏任何内容~</view></view><view class="content"><view class="left" s-if="{{$foodCover$allList.length >0}}"><view s-for="item, index in $foodCover$allList" s-key="index"><view s-if="{{index%2===0 && item}}" class="video-wrap swan-spider-tap" data-wpygodetail-a="{{item.type}}" data-wpygodetail-b="{{item.code}}" on-bindtap="eventHappen(\'tap\', $event, \'$foodCover$goDetail\', \'\', \'bind\')"><view style="width:44.53333333333333vw;height:{{334*item.image.height/item.image.width}}rpx; background:url({{item.image.url}}) center no-repeat;background-size: cover;position:relative;"></view><view class="bottom"><view class="title">{{item.title}}</view><view class="col-2"><view class="name-wrap"><image src="{{item.customer.img}}" style="width:5.333333333333333vw;height:5.333333333333333vw;border-radius:50%;" /><view class="text" style="width:14.666666666666666vw;">{{item.customer.nickName}}</view></view><view class="name-wrap" s-if="{{item.allClick}}"><image src="/images/eye.png" style="width:4.8vw;height:3.3333333333333335vw;" /><view class="text-click">{{item.allClick}}</view></view><view class="name-wrap" s-if="{{item.favTime}}"><view class="text-click">{{item.favTime}}</view></view></view></view></view></view></view><view class="right" s-if="{{$foodCover$allList.length >0}}"><view s-for="item, index in $foodCover$allList" s-key="index"><view s-if="{{index%2===1 && item}}" class="video-wrap swan-spider-tap" data-wpygodetail-a="{{item.type}}" data-wpygodetail-b="{{item.code}}" on-bindtap="eventHappen(\'tap\', $event, \'$foodCover$goDetail\', \'\', \'bind\')"><view style="width:44.53333333333333vw;height:{{334*item.image.height/item.image.width}}rpx; background:url({{item.image.url}}) center no-repeat;background-size: cover;position:relative;"></view><view class="bottom"><view class="title">{{item.title}}</view><view class="col-2"><view class="name-wrap"><image src="{{item.customer.img}}" style="width:5.333333333333333vw;height:5.333333333333333vw;border-radius:50%;" /><view class="text" style="width:14.666666666666666vw;">{{item.customer.nickName}}</view></view><view class="name-wrap" s-if="{{item.allClick}}"><image src="/images/eye.png" style="width:4.8vw;height:3.3333333333333335vw;" /><view class="text-click">{{item.allClick}}</view></view><view class="name-wrap" s-if="{{item.favTime}}"><view class="text-click">{{item.favTime}}</view></view></view></view></view></view></view></view></view><view class="loadMoreGif" s-if="{{$bottomLoadMore$show}}"><image src="/images/loadding.gif" /><text >{{$bottomLoadMore$message}}</text></view><view class="xh-text" s-if="{{$bottomText$show}}"><text class="line" /><text class="text">{{$bottomText$message}}</text></view></view></view></view>',isComponent:!1,componentPath:"pages/user.swan",customComponentCss:[],createTemplateComponent:function(e){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));