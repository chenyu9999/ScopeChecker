var _sjsSupporter={compiler:!1};window.define("payment/pay/pages/payPrivilege/index.swan",(function(e,n){n.exports={componentUsingComponentMap:{"payment/Components/Navbar/Navbar.swan":["Navbar","navbar"],"payment/Components/NavbarPlaceholder/placeholder.swan":["NavbarPlaceholder"],"payment/pay/components/privilegeTab/privilegeTab.swan":["privilege-tab"],"payment/pay/components/privilegeContent/privilegeContent.swan":["privilege-content"],"payment/pay/components/privilegeButton/privilegeButton.swan":["privilege-button"]},componentUsingComponentMapInPlugin:{},componentGenerics:{},template:'<navbar id="Navbar" isShowBarBtn="{{true}}" showBack="{{true}}" showHome="{{false}}" theme="translate-white" titleText="特权对比"></navbar><NavbarPlaceholder ></NavbarPlaceholder><privilege-tab identity="{{identity}}" chooseType="{{type}}" class="swan-spider-tap" on-bindchangeTab="eventHappen(\'changeTab\', $event, \'onChangeTab\', \'\', \'bind\')"></privilege-tab><privilege-content chooseType="{{type}}"></privilege-content><privilege-button chooseType="{{type}}" identity="{{identity}}" class="swan-spider-tap" on-bindclickPrivilegeButton="eventHappen(\'clickPrivilegeButton\', $event, \'clickPrivilegeButton\', \'\', \'bind\')"></privilege-button><view class="background-color {{type}}"></view>',isComponent:!1,componentPath:"payment/pay/pages/payPrivilege/index.swan",customComponentCss:[],createTemplateComponent:function(e){return Object.create(null)},filters:Object.assign({},{}),initialFilters:[],pageModules:{},extProperties:{_smartJs:{}}}}));