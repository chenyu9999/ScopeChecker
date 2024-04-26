var _sjsSupporter={compiler:!1};window.define("pages/homeServices/showBookSeatOrderDetail/showBookSeatOrderDetail.swan",(function(e,t){t.exports={componentUsingComponentMap:{},componentUsingComponentMapInPlugin:{},componentGenerics:{},template:'<view style="overflow-y:auto;height:{{formHeight}}px;"><view class="form-view am-padding-vertical-xs am-padding-horizontal-sm am-line-height flex-wrp" style="flex-direction:column;"><view class="am-u-sm-12 am-line am-padding-top-xxs am-padding-bottom-xs am-margin-bottom-xs"><text class="am-text-danger" style="font-size:14px;font-weight: 800;">订单详情</text></view><view class="am-u-sm-12 am-padding-bottom-xxs"><view class="am-u-sm-5" style="color: #aaa;">订单编号</view><view class="am-u-sm-7 am-text-right">{{orderDetail.registerNumber}}</view></view><view class="am-u-sm-12 am-padding-bottom-xxs"><view class="am-u-sm-5" style="color: #aaa;">订单状态</view><view class="am-u-sm-7 am-text-right">{{orderDetail.strRegisterStatus}}</view></view><view class="am-u-sm-12 am-padding-bottom-xxs"><view class="am-u-sm-5" style="color: #aaa;">联系人</view><view class="am-u-sm-7 am-text-right">{{orderDetail.connectPerson}}</view></view><view class="am-u-sm-12 am-padding-bottom-xxs"><view class="am-u-sm-5" style="color: #aaa;">联系电话</view><view class="am-u-sm-7 am-text-right">{{orderDetail.connectPhone}}</view></view><view class="am-u-sm-12"><view class="am-u-sm-5" style="color: #aaa;">下单时间</view><view class="am-u-sm-7 am-text-right">{{orderDetail.creatDate}}</view></view></view><view class="form-view am-padding-vertical-xs am-padding-horizontal-sm am-line-height flex-wrp" style="flex-direction:column;"><view class="am-u-sm-12 am-line am-padding-top-xxs am-padding-bottom-xs am-margin-bottom-xs"><text class="am-text-danger" style="font-size:14px;font-weight: 800;">机票详情</text></view><view class="am-u-sm-12"><view class="clearfix am-padding-bottom-xs"><view class="am-u-sm-6 am-text-danger" style="font-weight: 800;"><text >{{orderDetail.carrFlightNo}}</text></view><view class="am-u-sm-6 am-text-right">{{orderDetail.departDate}}({{orderDetail.strDepartDate}})</view></view><view class="clearfix"><view class="am-u-sm-4" style="font-weight: 800;">{{orderDetail.departureTime}}</view><view class="am-u-sm-4 am-text-center"><image src="https://m.airchina.com.cn/ac/WeChat_Image/flight_big.png" mode="aspectFill" style="width:65px;height:16px;" /></view><view class="am-u-sm-4 am-text-right" style="font-weight: 800;">{{orderDetail.arrivalTime}}<text style="font-size:2.5vw">{{orderDetail.strdiffTime}}</text></view></view><view class="clearfix"><view class="am-u-sm-6" style="color: #aaa;">{{orderDetail.strDepartCityCode}} {{orderDetail.orgTerminal}}</view><view class="am-u-sm-6 am-text-right" style="color: #aaa;">{{orderDetail.strArriCityCode}} {{orderDetail.dstTerminal}}</view></view><view class="am-padding-top-xs am-margin-top-xs" style="border-top: 1px solid #f3f3f3;" s-if="{{orderDetail.emdNo != undefined && orderDetail.emdNo != \'\' && orderDetail.emdNo != \'--\'}}"><view class="clearfix"><view ><view class="am-u-sm-12" style="font-weight: 800;">{{orderDetail.trvlName}}</view><view class="am-u-sm-12 am-padding-top-xxs" style="font-weight: 800;">选座票号: {{orderDetail.emdNo}}</view></view></view></view></view></view><view class="form-view am-padding-vertical-xs am-padding-horizontal-sm am-line-height flex-wrp" style="flex-direction:column;"><view class="am-u-sm-12 am-line am-padding-top-xxs am-padding-bottom-xs am-margin-bottom-xs"><text class="am-text-danger" style="font-size:14px;font-weight: 800;">选座费</text></view><view class="am-u-sm-12 am-line" s-if="{{orderDetail.seatType == \'P\'}}"><view class="clearfix am-padding-bottom-xs"><view class="am-u-sm-3">座位号</view><view class="am-u-sm-5 am-text-center">{{orderDetail.newSeat}} (或同等价值座位)</view><view class="am-u-sm-4 am-text-right" s-if="{{orderDetail.mileageFlag == \'0\'}}" style="font-weight: 800;">￥{{orderDetail.oldEmdFee}}</view><view class="am-u-sm-4 am-text-right" s-if="{{orderDetail.mileageFlag == \'1\'}}" style="font-weight: 800;">{{orderDetail.oldMileage}}里程</view></view><view class="clearfix am-padding-bottom-xs" s-if="{{orderDetail.countOrFee == \'1\'}}"><view class="am-u-sm-4">代金券抵扣</view><view class="am-u-sm-8 am-text-right" style="font-weight: 800;">免费1次</view></view><view class="clearfix am-padding-bottom-xs" s-if="{{orderDetail.countOrFee == \'0\'}}"><view class="am-u-sm-4">代金券抵扣</view><view class="am-u-sm-8 am-text-right" style="font-weight: 800;">{{orderDetail.strYh}}</view></view><view class="clearfix am-padding-bottom-xs"><view class="am-u-sm-12 am-text-right" s-if="{{orderDetail.mileageFlag == \'0\'}}"><text >总额：</text><text style="font-weight: 800;font-size:14px;" class="am-text-danger">￥{{orderDetail.emdFee}}</text></view><view class="am-u-sm-12 am-text-right" s-if="{{orderDetail.mileageFlag == \'1\'}}"><text >总额：</text><text style="font-weight: 800;font-size:14px;" class="am-text-danger">{{orderDetail.mileage}}里程</text></view></view></view><view class="am-u-sm-12" s-if="{{orderDetail.seatType == \'F\'}}"><view class="clearfix am-padding-bottom-xs am-padding-top-xs"><view class="am-u-sm-3">座位号</view><view class="am-u-sm-5 am-text-center">{{orderDetail.newSeat}} (或同等价值座位)</view><view class="am-u-sm-4 am-text-right am-text-danger" style="font-weight: 800;">免费</view></view></view><view class="am-u-sm-12 am-text-right" style="padding-top: 0.7rem;" s-if="{{orderDetail.registerStatus == \'1\'}}"><text style="font-size:3.466666666666667vw;background-color: #b1000e;color: #fff;padding: 3px 5px;border-radius: 5px;" class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'cancleOrder\', \'\', \'bind\')">取消订单</text></view></view><view class="form-view am-padding-vertical-xs am-padding-horizontal-sm"><view class="clearfix am-text-danger"><text >注：由于航班、机型变动，或航空公司出于安全或运营等原因，您的付费座位可能会被变更。我们将尽力为您安排至其他等价值的座位。</text></view></view></view><view class="form-view flex-wrp" s-if="{{footerFlag == \'1\'}}" style="flex-direction:column;background: #3c3c3c;height:{{footerHeight}};color:#fff;padding:0 1rem"><view class="am-u-sm-12 am-text-center" style="padding-top:0.7rem" s-if="{{orderDetail.registerStatus == \'1\'}}"><view style="color:#d1c5c5;padding-bottom: 0.3rem;">请在15分钟内付款，否则订单将会取消</view><button class="form-buttom swan-spider-tap" type="default" style="margin-left:25%;width:50%;font-size:3.466666666666667vw;background-color:#FFF;color:#B1000E;" on-bindtap="eventHappen(\'tap\', $event, \'doPay\', \'\', \'bind\')">立即支付</button></view><view class="am-u-sm-12" style="padding-top:0.7rem" s-if="{{orderDetail.registerStatus == \'3\'}}"><button class="form-buttom swan-spider-tap" type="default" style="margin-left:25%;width:50%;font-size:3.466666666666667vw;background-color:#FFF;color:#B1000E;" on-bindtap="eventHappen(\'tap\', $event, \'doCancelOrder\', \'\', \'bind\')">退订</button></view><view class="am-u-sm-12" style="padding-top:0.7rem" s-if="{{orderDetail.registerStatus == \'2\' && orderDetail.travelStatus != \'4\'}}"><button class="form-buttom" type="default" style="margin-left:25%;width:50%;font-size:3.466666666666667vw;background-color:#FFF;color:#B1000E;">出票中</button></view><view class="am-u-sm-12" style="padding-top:0.7rem" s-if="{{orderDetail.registerStatus == \'2\' && orderDetail.travelStatus == \'4\'}}"><button class="form-buttom swan-spider-tap" type="default" style="margin-left:25%;width:50%;font-size:3.466666666666667vw;background-color:#FFF;color:#B1000E;" on-bindtap="eventHappen(\'tap\', $event, \'doErrorRefund\', \'\', \'bind\')">差错</button></view></view>',isComponent:!1,componentPath:"pages/homeServices/showBookSeatOrderDetail/showBookSeatOrderDetail.swan",customComponentCss:[],createTemplateComponent:function(e){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));