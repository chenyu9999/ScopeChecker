var _sjsSupporter={compiler:!1};window.define("pages/register/countryCode/countryCode.swan",(function(e,t){t.exports={componentUsingComponentMap:{},componentUsingComponentMapInPlugin:{},componentGenerics:{},template:'<view style="top:{{headerHeight}}px;height:calc(100% - {{headerHeight}}px);" class="contentView"><scroll-view scroll-y="true" style="height:100vh" scroll-into-view="{{toView}}"><view hidden="{{!showArea}}" class="countryView swan-spider-tap" data-cn="中国" data-code="CN" data-en="China" data-num="86" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><text >中国</text><text >+86</text></view><view hidden="{{!showArea}}" class="countryView swan-spider-tap" data-cn="中国香港" data-code="HK" data-en="Hong Kong" data-num="852" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><text >中国香港</text><text >+852</text></view><view hidden="{{!showArea}}" class="countryView swan-spider-tap" data-cn="中国澳门" data-code="MO" data-en="China" data-num="853" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><text >中国澳门</text><text >+853</text></view><view hidden="{{!showArea}}" class="countryView swan-spider-tap" style="border-bottom:none" data-cn="中国台湾" data-code="TW" data-en="Taiwan" data-num="886" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><text >中国台湾</text><text >+886</text></view><view class="letterView" id="A">A</view><view class="countryBlock"><view s-for="item, index in country.A" class="countryView swan-spider-tap" data-cn="{{item.cnName}}" data-en="{{item.enName}}" data-code="{{item.code}}" data-num="{{item.num}}" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><text >{{item.cnName}}</text><text hidden="{{!showArea}}">+{{item.num}}</text></view></view><view class="letterView" id="B">B</view><view class="countryBlock"><view s-for="item, index in country.B" class="countryView swan-spider-tap" data-cn="{{item.cnName}}" data-en="{{item.enName}}" data-code="{{item.code}}" data-num="{{item.num}}" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><text >{{item.cnName}}</text><text hidden="{{!showArea}}">+{{item.num}}</text></view></view><view class="letterView" id="C">C</view><view class="countryBlock"><view s-for="item, index in country.C" class="countryView swan-spider-tap" data-cn="{{item.cnName}}" data-en="{{item.enName}}" data-code="{{item.code}}" data-num="{{item.num}}" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><text >{{item.cnName}}</text><text hidden="{{!showArea}}">+{{item.num}}</text></view></view><view class="letterView" id="D">D</view><view class="countryBlock"><view s-for="item, index in country.D" class="countryView swan-spider-tap" data-cn="{{item.cnName}}" data-en="{{item.enName}}" data-code="{{item.code}}" data-num="{{item.num}}" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><text >{{item.cnName}}</text><text hidden="{{!showArea}}">+{{item.num}}</text></view></view><view class="letterView" id="E">E</view><view class="countryBlock"><view s-for="item, index in country.E" class="countryView swan-spider-tap" data-cn="{{item.cnName}}" data-en="{{item.enName}}" data-code="{{item.code}}" data-num="{{item.num}}" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><text >{{item.cnName}}</text><text hidden="{{!showArea}}">+{{item.num}}</text></view></view><view class="letterView" id="F">F</view><view class="countryBlock"><view s-for="item, index in country.F" class="countryView swan-spider-tap" data-cn="{{item.cnName}}" data-en="{{item.enName}}" data-code="{{item.code}}" data-num="{{item.num}}" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><text >{{item.cnName}}</text><text hidden="{{!showArea}}">+{{item.num}}</text></view></view><view class="letterView" id="G">G</view><view class="countryBlock"><view s-for="item, index in country.G" class="countryView swan-spider-tap" data-cn="{{item.cnName}}" data-en="{{item.enName}}" data-code="{{item.code}}" data-num="{{item.num}}" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><text >{{item.cnName}}</text><text hidden="{{!showArea}}">+{{item.num}}</text></view></view><view class="letterView" id="H">H</view><view class="countryBlock"><view s-for="item, index in country.H" class="countryView swan-spider-tap" data-cn="{{item.cnName}}" data-en="{{item.enName}}" data-code="{{item.code}}" data-num="{{item.num}}" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><text >{{item.cnName}}</text><text hidden="{{!showArea}}">+{{item.num}}</text></view></view><view class="letterView" id="J">J</view><view class="countryBlock"><view s-for="item, index in country.J" class="countryView swan-spider-tap" data-cn="{{item.cnName}}" data-en="{{item.enName}}" data-code="{{item.code}}" data-num="{{item.num}}" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><text >{{item.cnName}}</text><text hidden="{{!showArea}}">+{{item.num}}</text></view></view><view class="letterView" id="K">K</view><view class="countryBlock"><view s-for="item, index in country.K" class="countryView swan-spider-tap" data-cn="{{item.cnName}}" data-en="{{item.enName}}" data-code="{{item.code}}" data-num="{{item.num}}" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><text >{{item.cnName}}</text><text hidden="{{!showArea}}">+{{item.num}}</text></view></view><view class="letterView" id="L">L</view><view class="countryBlock"><view s-for="item, index in country.L" class="countryView swan-spider-tap" data-cn="{{item.cnName}}" data-en="{{item.enName}}" data-code="{{item.code}}" data-num="{{item.num}}" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><text >{{item.cnName}}</text><text hidden="{{!showArea}}">+{{item.num}}</text></view></view><view class="letterView" id="M">M</view><view class="countryBlock"><view s-for="item, index in country.M" class="countryView swan-spider-tap" data-cn="{{item.cnName}}" data-en="{{item.enName}}" data-code="{{item.code}}" data-num="{{item.num}}" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><text >{{item.cnName}}</text><text hidden="{{!showArea}}">+{{item.num}}</text></view></view><view class="letterView" id="N">N</view><view class="countryBlock"><view s-for="item, index in country.N" class="countryView swan-spider-tap" data-cn="{{item.cnName}}" data-en="{{item.enName}}" data-code="{{item.code}}" data-num="{{item.num}}" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><text >{{item.cnName}}</text><text hidden="{{!showArea}}">+{{item.num}}</text></view></view><view class="letterView" id="P">P</view><view class="countryBlock"><view s-for="item, index in country.P" class="countryView swan-spider-tap" data-cn="{{item.cnName}}" data-en="{{item.enName}}" data-code="{{item.code}}" data-num="{{item.num}}" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><text >{{item.cnName}}</text><text hidden="{{!showArea}}">+{{item.num}}</text></view></view><view class="letterView" id="R">R</view><view class="countryBlock"><view s-for="item, index in country.R" class="countryView swan-spider-tap" data-cn="{{item.cnName}}" data-en="{{item.enName}}" data-code="{{item.code}}" data-num="{{item.num}}" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><text >{{item.cnName}}</text><text hidden="{{!showArea}}">+{{item.num}}</text></view></view><view class="letterView" id="S">S</view><view class="countryBlock"><view s-for="item, index in country.S" class="countryView swan-spider-tap" data-cn="{{item.cnName}}" data-en="{{item.enName}}" data-code="{{item.code}}" data-num="{{item.num}}" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><text >{{item.cnName}}</text><text hidden="{{!showArea}}">+{{item.num}}</text></view></view><view class="letterView" id="T">T</view><view class="countryBlock"><view s-for="item, index in country.T" class="countryView swan-spider-tap" data-cn="{{item.cnName}}" data-en="{{item.enName}}" data-code="{{item.code}}" data-num="{{item.num}}" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><text >{{item.cnName}}</text><text hidden="{{!showArea}}">+{{item.num}}</text></view></view><view class="letterView" id="W">W</view><view class="countryBlock"><view s-for="item, index in country.W" class="countryView swan-spider-tap" data-cn="{{item.cnName}}" data-en="{{item.enName}}" data-code="{{item.code}}" data-num="{{item.num}}" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><text >{{item.cnName}}</text><text hidden="{{!showArea}}">+{{item.num}}</text></view></view><view class="letterView" id="X">X</view><view class="countryBlock"><view s-for="item, index in country.X" class="countryView swan-spider-tap" data-cn="{{item.cnName}}" data-en="{{item.enName}}" data-code="{{item.code}}" data-num="{{item.num}}" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><text >{{item.cnName}}</text><text hidden="{{!showArea}}">+{{item.num}}</text></view></view><view class="letterView" id="Y">Y</view><view class="countryBlock"><view s-for="item, index in country.Y" class="countryView swan-spider-tap" data-cn="{{item.cnName}}" data-en="{{item.enName}}" data-code="{{item.code}}" data-num="{{item.num}}" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><text >{{item.cnName}}</text><text hidden="{{!showArea}}">+{{item.num}}</text></view></view><view class="letterView" id="Z">Z</view><view class="countryBlock"><view s-for="item, index in country.Z" class="countryView swan-spider-tap" data-cn="{{item.cnName}}" data-en="{{item.enName}}" data-code="{{item.code}}" data-num="{{item.num}}" on-bindtap="eventHappen(\'tap\', $event, \'chooseCountry\', \'\', \'bind\')"><text >{{item.cnName}}</text><text hidden="{{!showArea}}">+{{item.num}}</text></view></view></scroll-view></view><view class="sortArea"><view data-sort="A" class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'sortData\', \'\', \'bind\')">A</view><view data-sort="B" class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'sortData\', \'\', \'bind\')">B</view><view data-sort="C" class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'sortData\', \'\', \'bind\')">C</view><view data-sort="D" class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'sortData\', \'\', \'bind\')">D</view><view data-sort="E" class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'sortData\', \'\', \'bind\')">E</view><view data-sort="F" class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'sortData\', \'\', \'bind\')">F</view><view data-sort="G" class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'sortData\', \'\', \'bind\')">G</view><view data-sort="H" class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'sortData\', \'\', \'bind\')">H</view><view data-sort="J" class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'sortData\', \'\', \'bind\')">J</view><view data-sort="K" class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'sortData\', \'\', \'bind\')">K</view><view data-sort="L" class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'sortData\', \'\', \'bind\')">L</view><view data-sort="M" class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'sortData\', \'\', \'bind\')">M</view><view data-sort="N" class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'sortData\', \'\', \'bind\')">N</view><view data-sort="P" class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'sortData\', \'\', \'bind\')">P</view><view data-sort="R" class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'sortData\', \'\', \'bind\')">R</view><view data-sort="S" class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'sortData\', \'\', \'bind\')">S</view><view data-sort="T" class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'sortData\', \'\', \'bind\')">T</view><view data-sort="W" class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'sortData\', \'\', \'bind\')">W</view><view data-sort="X" class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'sortData\', \'\', \'bind\')">X</view><view data-sort="Y" class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'sortData\', \'\', \'bind\')">Y</view><view data-sort="Z" class="swan-spider-tap" on-bindtap="eventHappen(\'tap\', $event, \'sortData\', \'\', \'bind\')">Z</view></view>',isComponent:!1,componentPath:"pages/register/countryCode/countryCode.swan",customComponentCss:[],createTemplateComponent:function(e){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));