/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../../../fronth5/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _regenerator = __webpack_require__(62);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _toConsumableArray2 = __webpack_require__(84);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _stringify = __webpack_require__(56);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _asyncToGenerator2 = __webpack_require__(61);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _extends2 = __webpack_require__(57);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(12);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(16);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(17);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(19);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(18);

	var _inherits3 = _interopRequireDefault(_inherits2);

	__webpack_require__(88);

	__webpack_require__(87);

	__webpack_require__(90);

	__webpack_require__(91);

	__webpack_require__(89);

	__webpack_require__(187);

	__webpack_require__(202);

	__webpack_require__(179);

	var _react = __webpack_require__(22);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(83);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _isomorphicFetch = __webpack_require__(86);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	__webpack_require__(85);

	var _header = __webpack_require__(94);

	var _header2 = _interopRequireDefault(_header);

	var _nav = __webpack_require__(177);

	var _nav2 = _interopRequireDefault(_nav);

	var _city = __webpack_require__(55);

	var _city2 = _interopRequireDefault(_city);

	var _productList = __webpack_require__(178);

	var _productList2 = _interopRequireDefault(_productList);

	var _addCar = __webpack_require__(175);

	var _addCar2 = _interopRequireDefault(_addCar);

	var _dropContent = __webpack_require__(176);

	var _dropContent2 = _interopRequireDefault(_dropContent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//引入自动设置rem

	// import NewCity from 'components/city/new-city'


	//引入组件
	/**
	 * 1. 项目名称：比亚迪合作-提供合作商家车源进度查询
	 * 2. 页面名称：byd
	 * 3. 作者：yong.xu@ttpai.cn
	 * 4. 创建时间：2018.04.04
	 * 5. 备注：
	 */

	// require less
	var rem = __webpack_require__(92);

	// require js

	rem.init();

	/** 
	 * @Author: yong.xu@ttpai.cn 
	 * @Date: 2018-04-28 11:29:02 
	 */

	var data = [{
	    "dealStatus": "成交失败1",
	    "auctionPrice": "20万",
	    "carName": "比亚迪-秦",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "车主暂不出售2",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍3",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDateStr": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍4",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍5",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍6",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍7",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍8",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍9",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍10",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍11",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍12",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍13",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍14",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍15",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍16",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍17",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍18",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍19",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍20",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍21",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍22",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍23",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍24",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍25",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍26",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍27",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍28",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍29",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍30",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍31",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}, {
	    "dealStatus": "已重拍32",
	    "auctionPrice": "20万",
	    "carName": "宝马320Li",
	    "city": "上海",
	    "licensePlate": "京A4893",
	    "dealCity": "上海-李海交易",
	    "carSkeleton": "5星",
	    "carDevice": "3星",
	    "carExterior": "4星",
	    "carInterior": "2星",
	    "signDate": "2018.03.02",
	    "testDate": "2018.03.03",
	    "dealDate": "2018.03.05"
	}];

	var App = function (_Component) {
	    (0, _inherits3.default)(App, _Component);

	    function App(props) {
	        (0, _classCallCheck3.default)(this, App);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

	        _this.state = {
	            isClickAddCar: false, //点击添加车源按钮
	            carList: data, //初始车源列表
	            option: { //传递的参数
	                source: window.source,
	                currentPage: 1,
	                dealStatus: '',
	                cityId: '',
	                licenseNum: ''
	            },
	            totalNum: data.length, //车源总数量
	            chooseTextList: [], //已选择的筛选条件数据
	            currentPage: null, //当前页
	            totalPage: null, //总页数
	            text: null, //当前选择的成交状态文字
	            cityName: null, //当前选择的城市名称
	            cityId: null, //发送后台的城市id
	            dealStatus: null, //成交状态下拉列表状态码(阿拉伯数字)
	            currentTabIndex: null,
	            isClickDropContentCloseBtn: null,
	            isClickCurrentTab: false, // 顶部三个tab默认不点击，外层div可滑动，点击后设置overflow:hidden，外层div不可滑动
	            currentCityName: '城市',
	            currentCityId: null,
	            isShowCity: false, //默认不显示城市组件
	            carIdInputRef: null // 获取车牌号下拉菜单里的input元素，默认为空，获取此元素用于设置失去焦点
	        };
	        _this.getListData = _this.getListData.bind(_this);
	        _this.getChooseText = _this.getChooseText.bind(_this);
	        _this.isClickAddCar = _this.isClickAddCar.bind(_this);
	        _this.resetCarList = _this.resetCarList.bind(_this);
	        _this.changeTabIndex = _this.changeTabIndex.bind(_this);
	        _this.isClickDropContentCloseBtn = _this.isClickDropContentCloseBtn.bind(_this);
	        _this.isClickTab = _this.isClickTab.bind(_this);
	        _this.getCity = _this.getCity.bind(_this);
	        _this.showCity = _this.showCity.bind(_this);
	        return _this;
	    }

	    //页面数据更新方法


	    (0, _createClass3.default)(App, [{
	        key: 'getListData',
	        value: function getListData() {
	            var _this2 = this;

	            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	            var onScrollData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	            // console.log("getListData", JSON.stringify(this.state.option));
	            var obj = (0, _extends3.default)({}, this.state.option, opts),
	                getData = function () {
	                var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
	                    var dataJson, data, carList, _data$result$page, currentPage, totalNum, totalPage;

	                    return _regenerator2.default.wrap(function _callee$(_context) {
	                        while (1) {
	                            switch (_context.prev = _context.next) {
	                                case 0:
	                                    _context.next = 2;
	                                    return (0, _isomorphicFetch2.default)('/dealer/auction/query', {
	                                        method: 'post',
	                                        headers: new Headers({
	                                            "Content-Type": "application/json; charset=utf-8"
	                                        }),
	                                        body: (0, _stringify2.default)(obj)
	                                    });

	                                case 2:
	                                    dataJson = _context.sent;
	                                    _context.next = 5;
	                                    return dataJson.json();

	                                case 5:
	                                    data = _context.sent;
	                                    carList = [].concat((0, _toConsumableArray3.default)(data.result.data), (0, _toConsumableArray3.default)(onScrollData));
	                                    _data$result$page = data.result.page;
	                                    currentPage = _data$result$page.currentPage;
	                                    totalNum = _data$result$page.totalNum;
	                                    totalPage = _data$result$page.totalPage;


	                                    if ('code' in data && data.code == 200) {
	                                        _this2.setState({
	                                            carList: carList,
	                                            option: obj,
	                                            currentPage: currentPage,
	                                            totalNum: totalNum,
	                                            totalPage: totalPage
	                                        });
	                                    };

	                                case 13:
	                                case 'end':
	                                    return _context.stop();
	                            }
	                        }
	                    }, _callee, _this2);
	                }));

	                return function getData() {
	                    return _ref.apply(this, arguments);
	                };
	            }();
	            return getData(opts);
	        }

	        //点击添加车源按钮

	    }, {
	        key: 'clickAddCar',
	        value: function clickAddCar(isClick) {
	            this.setState({
	                isClickAddCar: isClick
	            });
	        }

	        //当前页面显示的筛选条件的数据   

	    }, {
	        key: 'getChooseText',
	        value: function getChooseText(text) {
	            var cityName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	            var cityId = arguments[2];
	            var dealStatus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	            function getFilterData(data) {
	                var arr = [];
	                if (data) {
	                    arr.push(data);
	                } else {
	                    arr = [];
	                };
	                return arr;
	            };
	            var tabTextData = getFilterData(text),
	                tabCityData = getFilterData(cityName),
	                allFilterData = [].concat((0, _toConsumableArray3.default)(tabTextData), (0, _toConsumableArray3.default)(tabCityData));
	            this.setState({
	                chooseTextList: allFilterData,
	                text: text,
	                cityName: cityName,
	                cityId: cityId,
	                dealStatus: dealStatus
	            });
	        }

	        //点击成交状态或者选择城市清空当前默认车源列表

	    }, {
	        key: 'resetCarList',
	        value: function resetCarList() {
	            this.setState({ carList: [] });
	        }

	        //点击添加车源按钮

	    }, {
	        key: 'isClickAddCar',
	        value: function isClickAddCar(_isClickAddCar) {
	            this.setState({ isClickAddCar: _isClickAddCar });
	        }

	        //改变当前顶部tab标签的索引

	    }, {
	        key: 'changeTabIndex',
	        value: function changeTabIndex(ops) {
	            this.setState(ops);
	        }

	        //点击下拉菜单里的向上关闭按钮

	    }, {
	        key: 'isClickDropContentCloseBtn',
	        value: function isClickDropContentCloseBtn(fn) {
	            this.setState({ isClickDropContentCloseBtn: fn });
	        }

	        //点击当前顶部的tab标签

	    }, {
	        key: 'isClickTab',
	        value: function isClickTab(data) {
	            this.setState({ isClickCurrentTab: data });
	        }

	        //获取城市

	    }, {
	        key: 'getCity',
	        value: function getCity(currentCityName, currentCityId) {
	            this.setState({
	                currentCityName: currentCityName,
	                cityName: currentCityName,
	                currentCityId: currentCityId
	            });
	        }

	        //显示或隐藏城市组件

	    }, {
	        key: 'showCity',
	        value: function showCity(ops) {
	            this.setState(ops);
	        }

	        //获取车牌号下拉菜单里的input输入框元素

	    }, {
	        key: 'getCarIdInputRef',
	        value: function getCarIdInputRef(data) {
	            this.setState({ carIdInputRef: data });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            var _state = this.state,
	                isClickAddCar = _state.isClickAddCar,
	                carList = _state.carList,
	                totalNum = _state.totalNum,
	                chooseTextList = _state.chooseTextList,
	                currentPage = _state.currentPage,
	                totalPage = _state.totalPage,
	                text = _state.text,
	                cityName = _state.cityName,
	                cityId = _state.cityId,
	                dealStatus = _state.dealStatus,
	                currentTabIndex = _state.currentTabIndex,
	                dropContentIndex = _state.dropContentIndex,
	                isClickDropContentCloseBtn = _state.isClickDropContentCloseBtn,
	                isClickCurrentTab = _state.isClickCurrentTab,
	                currentCityName = _state.currentCityName,
	                isShowCity = _state.isShowCity,
	                carIdInputRef = _state.carIdInputRef;

	            return _react2.default.createElement(
	                'div',
	                { className: isClickCurrentTab ? 'byd-content byd-content-hidden' : 'byd-content' },
	                _react2.default.createElement(_header2.default, { isClickAddCar: this.isClickAddCar }),
	                _react2.default.createElement(
	                    'div',
	                    { 'class': isClickAddCar ? 'hide-current-content' : null },
	                    ' ',
	                    _react2.default.createElement(_nav2.default, {
	                        changeTabIndex: function changeTabIndex(ops) {
	                            return _this3.changeTabIndex(ops);
	                        },
	                        isClickDropContentCloseBtn: function isClickDropContentCloseBtn(fn) {
	                            return _this3.isClickDropContentCloseBtn(fn);
	                        },
	                        isClickTab: function isClickTab(data) {
	                            return _this3.isClickTab(data);
	                        },
	                        currentCityName: currentCityName,
	                        showCity: this.showCity,
	                        isShowCity: isShowCity,
	                        carIdInputRef: carIdInputRef
	                    }),
	                    _react2.default.createElement(_dropContent2.default, {
	                        tabIndex: currentTabIndex,
	                        changeTabIndex: function changeTabIndex(ops) {
	                            return _this3.changeTabIndex(ops);
	                        },
	                        isClickDropContentCloseBtn: isClickDropContentCloseBtn,
	                        isClickTab: function isClickTab(data) {
	                            return _this3.isClickTab(data);
	                        },
	                        dealStatus: dealStatus,
	                        resetCarList: this.resetCarList,
	                        getListData: this.getListData,
	                        getChooseText: this.getChooseText,
	                        getCity: function getCity(currentCityName, currentCityId) {
	                            return _this3.getCity(currentCityName, currentCityId);
	                        },
	                        cityId: cityId,
	                        cityName: cityName,
	                        currentCityName: currentCityName,
	                        text: text,
	                        isShowCity: isShowCity,
	                        hideCity: function hideCity(data) {
	                            return _this3.setState({ isShowCity: data });
	                        },
	                        getCarIdInputRef: function getCarIdInputRef(data) {
	                            return _this3.getCarIdInputRef(data);
	                        }
	                    }),
	                    _react2.default.createElement(_productList2.default, {
	                        getListData: this.getListData,
	                        carList: carList,
	                        totalPage: totalPage,
	                        chooseTextList: chooseTextList,
	                        currentPage: currentPage,
	                        totalNum: totalNum,
	                        getChooseText: this.getChooseText,
	                        text: text,
	                        cityName: cityName,
	                        cityId: cityId,
	                        dealStatus: dealStatus
	                    })
	                ),
	                isClickAddCar ? _react2.default.createElement(_addCar2.default, null) : null
	            );
	        }
	    }]);
	    return App;
	}(_react.Component);

	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('root'));

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.3' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(3);
	var core = __webpack_require__(1);
	var ctx = __webpack_require__(10);
	var hide = __webpack_require__(11);
	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(48)('wks');
	var uid = __webpack_require__(33);
	var Symbol = __webpack_require__(3).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = common;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(9);
	var IE8_DOM_DEFINE = __webpack_require__(64);
	var toPrimitive = __webpack_require__(50);
	var dP = Object.defineProperty;

	exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(13)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(6);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(23);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(7);
	var createDesc = __webpack_require__(28);
	module.exports = __webpack_require__(8) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(111), __esModule: true };

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(41);
	var defined = __webpack_require__(38);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(98);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(100);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(97);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(35);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(35);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(73);
	var enumBugKeys = __webpack_require__(40);

	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(38);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))(2);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(10);
	var call = __webpack_require__(67);
	var isArrayIter = __webpack_require__(65);
	var anObject = __webpack_require__(9);
	var toLength = __webpack_require__(32);
	var getIterFn = __webpack_require__(82);
	var BREAK = {};
	var RETURN = {};
	var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
	  var f = ctx(fn, that, entries ? 2 : 1);
	  var index = 0;
	  var length, step, iterator, result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	exports.BREAK = BREAK;
	exports.RETURN = RETURN;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(7).f;
	var has = __webpack_require__(14);
	var TAG = __webpack_require__(4)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = true;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(9);
	var dPs = __webpack_require__(134);
	var enumBugKeys = __webpack_require__(40);
	var IE_PROTO = __webpack_require__(47)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(39)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(63).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(49);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(140)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(42)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(105);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(104);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(24);
	var TAG = __webpack_require__(4)('toStringTag');
	// ES3 wrong here
	var ARG = cof(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(6);
	var document = __webpack_require__(3).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(24);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(30);
	var $export = __webpack_require__(2);
	var redefine = __webpack_require__(77);
	var hide = __webpack_require__(11);
	var has = __webpack_require__(14);
	var Iterators = __webpack_require__(26);
	var $iterCreate = __webpack_require__(131);
	var setToStringTag = __webpack_require__(29);
	var getPrototypeOf = __webpack_require__(72);
	var ITERATOR = __webpack_require__(4)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(33)('meta');
	var isObject = __webpack_require__(6);
	var has = __webpack_require__(14);
	var setDesc = __webpack_require__(7).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(13)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 25.4.1.5 NewPromiseCapability(C)
	var aFunction = __webpack_require__(23);

	function PromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	}

	module.exports.f = function (C) {
	  return new PromiseCapability(C);
	};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(11);
	module.exports = function (target, src, safe) {
	  for (var key in src) {
	    if (safe && target[key]) target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(48)('keys');
	var uid = __webpack_require__(33);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(3);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(6);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(3);
	var core = __webpack_require__(1);
	var LIBRARY = __webpack_require__(30);
	var wksExt = __webpack_require__(52);
	var defineProperty = __webpack_require__(7).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(4);


/***/ }),
/* 53 */
/***/ (function(module, exports) {

	

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(143);
	var global = __webpack_require__(3);
	var hide = __webpack_require__(11);
	var Iterators = __webpack_require__(26);
	var TO_STRING_TAG = __webpack_require__(4)('toStringTag');

	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');

	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _keys = __webpack_require__(99);

	var _keys2 = _interopRequireDefault(_keys);

	var _assign = __webpack_require__(60);

	var _assign2 = _interopRequireDefault(_assign);

	var _stringify = __webpack_require__(56);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _values = __webpack_require__(101);

	var _values2 = _interopRequireDefault(_values);

	var _getPrototypeOf = __webpack_require__(12);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(16);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(17);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(19);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(18);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(22);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(83);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// var React = require('react');
	// var ReactDOM = require('react-dom');
	// var PureRenderMixin = require('react-addons-pure-render-mixin');
	var CityPrivate = __webpack_require__(93);
	var IScroll = __webpack_require__(161);
	__webpack_require__(96);
	__webpack_require__(95);
	// require('../../plugins/zepto.scroll')

	// import 'components/city/city.less';


	//选择城市
	var CityContainer = function (_Component) {
		(0, _inherits3.default)(CityContainer, _Component);

		function CityContainer() {
			(0, _classCallCheck3.default)(this, CityContainer);

			var _this2 = (0, _possibleConstructorReturn3.default)(this, (CityContainer.__proto__ || (0, _getPrototypeOf2.default)(CityContainer)).call(this));

			_this2.state = {
				cityData: [],
				indexData: [],
				showCount: 0,
				myScroll: null,
				tipsLetter: '',
				showTips: false

			};

			_this2.showMyScroll = _this2.showMyScroll.bind(_this2);
			_this2.selectedCity = _this2.selectedCity.bind(_this2);

			return _this2;
		}
		//初始化城市数据


		(0, _createClass3.default)(CityContainer, [{
			key: 'initCityData',
			value: function initCityData(cityDataList, curCity) {
				var self = this;

				var ttpaiCity = cityDataList || window.GLOBAL_TTPAI_CITY_COPY;

				// 整合外部城市数据
				if (this.props.combineData) {
					ttpaiCity = this.props.combineData(ttpaiCity);
				}

				var cityList = CityPrivate.getCityList(ttpaiCity, curCity);

				var indexList = CityPrivate.getIndexList(cityList);

				self.setState({
					cityData: cityList,
					indexData: indexList
				}, function () {
					setTimeout(self.showMyScroll, 0);
				});
			}
		}, {
			key: 'selectedCity',


			// 城市列表点击事件
			value: function selectedCity(val, label, i, event) {
				var cityData = this.state.cityData,
				    id = '';
				(0, _values2.default)(cityData).map(function (ele) {
					ele.map(function (el) {
						if (el.key == val) {
							console.log("selectedCity-1", (0, _stringify2.default)(el), el.key, val);
							el.curClass = "active";
							id = el.value;
						} else if (el.curClass == "active") {
							console.log("selectedCity-2", (0, _stringify2.default)(el), el.key, val);
							el.curClass = "";
						}
					});
				});

				event.stopPropagation();

				this.props.setParentState({
					city: val,
					specialCity: label,
					id: id
				});

				// this.goBack();
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				if (!this.props.isShow && nextProps.isShow) {
					this.setState({ showCount: this.state.showCount + 1 });
				}
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps, prevState) {
				if (!prevProps.isShow && this.props.isShow) {
					this.showMyScroll();

					// Modal显示回调
					this.onShowModal();
				}

				//点击当前城市颜色和边框变成橙色
				$('.city-bottom-line li').click(function () {
					$('.city-bottom-line li').removeClass('active');
					$('.city-button-group li').removeClass('active');
					$(this).addClass('active');
				});
				$('.city-button-group li').click(function () {
					$('.city-button-group li').removeClass('active');
					$('.city-bottom-line li').removeClass('active');
					$(this).addClass('active');
				});
			}
		}, {
			key: 'setStorage',


			//写入sessionStorage
			value: function setStorage(key, val) {
				if (typeof sessionStorage !== 'undefined') {
					// Safari, in Private Browsing Mode, looks like it supports sessionStorage but all calls to setItem
					// throw QuotaExceededError.

					try {
						sessionStorage.setItem(key, (0, _stringify2.default)(val));
					} catch (error) {
						// do nothing
					}
				}
			}
		}, {
			key: 'getStorage',

			//sessionStorage取值
			value: function getStorage(key) {
				if (typeof sessionStorage !== 'undefined') {
					try {
						return JSON.parse(sessionStorage.getItem(key));
					} catch (error) {
						return null;
					}
				}
				return null;
			}
		}, {
			key: 'getCity',
			value: function getCity() {
				var self = this,
				    cityName = "",
				    ttpaicity = "http://cdn01.ttpaicdn.com/ttpai/js/ttpaicity.min.js?v=" + new Date().getTime();

				window.GLOBAL_TTPAI_CITY = self.getStorage('GLOBAL_TTPAI_CITY');
				window.GLOBAL_TTPAI_CITY_COPY = self.deepCopyArray(window.GLOBAL_TTPAI_CITY);

				if (window.GLOBAL_TTPAI_CITY_COPY) {
					self.getCname(window.GLOBAL_TTPAI_CITY_COPY);
				} else {
					$.getScript(ttpaicity, function (data) {
						self.setStorage('GLOBAL_TTPAI_CITY', window.GLOBAL_TTPAI_CITY);

						window.GLOBAL_TTPAI_CITY_COPY = self.deepCopyArray(window.GLOBAL_TTPAI_CITY);
						self.getCname(window.GLOBAL_TTPAI_CITY_COPY);
					});
				}
			}
		}, {
			key: 'deepCopyArray',


			/**
	   * [深拷贝数组]
	   * @Author   chen.yang
	   * @DateTime 2017-11-20T11:05:53+0800
	   * @param    {[type]}                 source [源数组]
	   * @return   {[type]}                        [目标数组]
	   */
			value: function deepCopyArray(source) {
				return source ? $.extend(true, [], source) : source;
			}
		}, {
			key: 'getCname',


			//城市定位
			value: function getCname(cityDataList) {
				var _this3 = this;

				// this.initCityData();
				var location = function location() {
					var _this = _this3,
					    sinaPort = "http://jsapi.ttpai.cn/v1.0/location/city",

					// sinaPort = "//cdn01.ttpaicdn.com/frontmobile/data/location-city.json",
					cityName = _this3.props.city || _this.getStorage('cname');

					if (cityName) {
						_this.sinaPortSuccess(cityDataList, cityName);
					} else {
						$.ajax({
							url: sinaPort,
							headers: {
								"Accept": "application/x-www-form-urlencoded; charset=utf-8",
								"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
							},
							dataType: CityPrivate.getDataType(sinaPort),
							success: function success(data) {
								if (data.code.toString() == "200") {
									cityName = data.result.fullName || '';
									_this.sinaPortSuccess(cityDataList, cityName);
									_this.setStorage('cname', cityName);
								} else {
									_this.initCityData();
								}
							},
							error: function error() {
								_this.initCityData();
							}
						});
					}
				};
				{
					//是否需要定位
					this.props.isLocation ? location() : this.initCityData();
				}
			}
		}, {
			key: 'sinaPortSuccess',
			value: function sinaPortSuccess(cityDataList, cityName) {

				var _this = this,
				    curCity = {}; //当前城市
				cityDataList = cityDataList.map(function (ele, index) {
					if (cityName.indexOf(ele.label) !== -1) {
						//设置样式 为选中状态
						ele.curClass = "active";
						//设置 当前定位城市 组
						curCity = (0, _assign2.default)({}, ele);
					} else {

						// 设置样式 为未选中样式
						ele.curClass = "";
					}

					return ele;
				});
				if (!curCity.key) {
					_this.initCityData();
					return false;
				}

				_this.props.setParentState({
					city: curCity.key || "",
					specialCity: curCity.label || "",
					id: curCity.value || ''
				});

				_this.initCityData(cityDataList, curCity);
			}
		}, {
			key: 'showTips',
			value: function showTips(letter) {
				var selector = CityPrivate.getCitySelector(letter);
				var el = '[data-selector="' + selector + '"]';

				var tips = CityPrivate.getTipsByLetter(letter);

				this.setState({
					showTips: true,
					tipsLetter: tips
				});
				//  console.log(this.state.tipsLetter)
				this.state.myScroll.scrollToElement(el, 100);
			}
		}, {
			key: 'hideTips',
			value: function hideTips() {
				this.setState({
					showTips: false
				});
			}
		}, {
			key: 'setScrollWrapperHeight',


			/**
	   * [设置滚动容器高度]
	   * @Author   chen.yang
	   * @DateTime 2017-11-24T10:07:59+0800
	   */
			value: function setScrollWrapperHeight() {
				// 设置容器高度
				var currentContainer = document.getElementById('current-city-box'),
				    containerTop = currentContainer.getBoundingClientRect().top;

				//判断头部是否有返回的箭头，如果有，重新设置滚动高度，如果没有，再判断当前滚动区域距离屏幕的高度
				if (this.props.isWantGoBackBtn == true) {
					$(this.refs.wrapper).height($(window).height() - 45);
				} else {
					$(this.refs.wrapper).height($(window).height() - containerTop);
				}
			}
		}, {
			key: 'showMyScroll',
			value: function showMyScroll() {
				var self = this;
				// console.log(self.state)
				// 首次弹窗
				if (!self.state.myScroll) {

					self.setScrollWrapperHeight();

					// iScroll 初始化
					var myScroll = new IScroll(self.refs.wrapper, {
						scrollbars: !0,
						shrinkScrollbars: "scale",
						fadeScrollbars: !0,
						click: !0
					});

					this.setState({ myScroll: myScroll });

					$(window).on("resize", function () {
						// 窗口大小变化时调整容器高度
						self.showMyScroll();

						// setrem.js中300ms后rem单位变动，需相应调整容器高度，并更新iscroll
						// 也可以通过修改 options.resizePolling 更新iscroll
						// 关于iscroll options.resizePolling : When you resize the window iScroll has to recalculate elements position and dimension. 
						setTimeout(self.showMyScroll, 350);
					});
				} else {
					self.setScrollWrapperHeight();

					self.state.myScroll.refresh();
				}
			}
		}, {
			key: 'goBack',


			/**
	   * [返回上一页，由单击组件返回按钮或者选择城市触发，且与点击浏览器后退按钮事件一致]
	   * @Author   chen.yang
	   * @DateTime 2017-11-23T10:53:24+0800
	   * @return   {[type]}                 [description]
	   */
			value: function goBack() {
				// if (window.history.length > 2) {
				// 	window.history.back();
				// } else {
				// 	if (window.location.href.search('#showCity') !== -1) {
				// 		var newURL = window.location.href.replace('#showCity', '');
				// 		window.history.replaceState(null, null, newURL);
				// 	}


				// }

			}
		}, {
			key: 'onShowModal',


			/**
	   * [Modal显示回调]
	   * @Author   chen.yang
	   * @DateTime 2017-11-23T11:13:14+0800
	   * @return   {[type]}                 [description]
	   */
			value: function onShowModal() {
				window.location.href.search('#showCity') == -1 ? window.location.href = window.location.href + '#showCity' : '';
			}
		}, {
			key: 'bindHistoryEvent',


			/**
	   * [绑定History API相关事件]
	   * @Author   chen.yang
	   * @DateTime 2017-11-23T11:10:28+0800
	   * @return   {[type]}                 [description]
	   */
			value: function bindHistoryEvent() {
				var self = this;
				$(window).on("hashchange", function (e) {
					e.newURL + "#showCity" == e.oldURL && self.props.setParentState({ 'isShow': false });
				});
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				var self = this;
				self.getCity();
				self.bindHistoryEvent();
			}
		}, {
			key: 'shouldComponentUpdate',

			// 判断是否需要更新虚拟dom
			value: function shouldComponentUpdate(nextProps, nextState) {
				return this.props.isShow !== nextProps.isShow || this.state.cityData !== nextState.cityData || this.state.showTips !== nextState.showTips || this.state.tipsLetter !== nextState.tipsLetter;
			}
		}, {
			key: 'render',
			value: function render() {
				var _this4 = this;

				// console.log('----- CityBox ------')
				// console.log(this.state.indexData)
				var animationClass = ' defaultAni ' + (this.props.isShow ? ' drawAni' : ' ') + (this.state.showCount === 0 ? ' hideWhenFirstLoaded' : '');
				var isWantGoBackBtn = this.props.isWantGoBackBtn || false;
				return _react2.default.createElement(
					'div',
					{
						ref: 'container',
						className: isWantGoBackBtn ? "m-city-box m-city-box-new " + this.props.cityTheme + animationClass : "m-city-box " + this.props.cityTheme + animationClass },
					isWantGoBackBtn ? _react2.default.createElement(
						'div',
						{ ref: 'header', className: 'm-back-nav' },
						_react2.default.createElement(
							'div',
							{ className: 'm-back-arrow' },
							_react2.default.createElement('i', { className: 'icon-header-goback', onClick: function onClick() {
									return _this4.props.clickGoBackBtn({ isShow: false });
								} })
						),
						_react2.default.createElement(
							'div',
							{ className: 'm-back-title' },
							'\u9009\u62E9\u57CE\u5E02'
						)
					) : null,
					_react2.default.createElement(
						'div',
						{ className: 'city-box' },
						_react2.default.createElement(
							'div',
							{ id: 'current-city-box', ref: 'wrapper', className: 'wrapper' },
							_react2.default.createElement(CityItemListBox, { selectedCityHandler: this.selectedCity, cityItemList: this.state.cityData })
						),
						_react2.default.createElement(IndexList, {
							showTips: this.showTips.bind(this),
							hideTips: this.hideTips.bind(this),
							list: this.state.indexData }),
						_react2.default.createElement(TipsLetter, { tips: this.state.tipsLetter, isShow: this.state.showTips })
					)
				);
			}
		}]);
		return CityContainer;
	}(_react.Component);

	;

	//城市列表

	var CityItemListBox = function (_Component2) {
		(0, _inherits3.default)(CityItemListBox, _Component2);

		function CityItemListBox() {
			(0, _classCallCheck3.default)(this, CityItemListBox);
			return (0, _possibleConstructorReturn3.default)(this, (CityItemListBox.__proto__ || (0, _getPrototypeOf2.default)(CityItemListBox)).apply(this, arguments));
		}

		(0, _createClass3.default)(CityItemListBox, [{
			key: 'render',


			// // 组件是否应当渲染新的props或state，返回false表示跳过后续的生命周期方法
			// shouldComponentUpdate: function(nextProps, nextState) {
			// 	return JSON.stringify(this.props.cityItemList) !== JSON.stringify(nextProps.cityItemList);
			// },

			value: function render() {
				// console.log('----- CityItemListBox ------')

				var _props = this.props,
				    selectedCityHandler = _props.selectedCityHandler,
				    cityItemList = _props.cityItemList;

				// console.log("====CityItemListBox render====", cityItemList);

				return _react2.default.createElement(
					'div',
					{ className: 'scroller' },
					_react2.default.createElement(
						'div',
						{ className: 'city-list' },
						(0, _keys2.default)(cityItemList).map(function (ele, index) {

							return _react2.default.createElement(CityItem, { key: ele, selectedCityHandler: selectedCityHandler, listJson: cityItemList[ele], label: ele });
						})
					)
				);
			}
		}]);
		return CityItemListBox;
	}(_react.Component);

	;

	//按拼音分组城市

	var CityItem = function (_Component3) {
		(0, _inherits3.default)(CityItem, _Component3);

		// 组件是否应当渲染新的props或state，返回false表示跳过后续的生命周期方法
		// shouldComponentUpdate: function(nextProps, nextState) {
		// 	// console.log("====shouldComponentUpdate====");
		// 	// console.log(this.props.listJson);
		// 	// console.log(nextProps.listJson);
		// 	// return this.props.listJson !== nextProps.listJson;
		// },
		function CityItem() {
			(0, _classCallCheck3.default)(this, CityItem);

			var _this6 = (0, _possibleConstructorReturn3.default)(this, (CityItem.__proto__ || (0, _getPrototypeOf2.default)(CityItem)).call(this));

			_this6.state = {
				currentIndex: null
			};
			return _this6;
		}

		(0, _createClass3.default)(CityItem, [{
			key: 'isClickCityName',
			value: function isClickCityName(ops) {
				this.setState(ops);
			}
		}, {
			key: 'render',
			value: function render() {
				// console.log('----- CityItem ------')

				var mainTitle = void 0,
				    _props2 = this.props,
				    selectedCityHandler = _props2.selectedCityHandler,
				    listJson = _props2.listJson,
				    label = _props2.label;

				mainTitle = CityPrivate.getMainTitle(label);
				var currentIndex = this.state.currentIndex;

				var self = this,
				    that = self;
				// console.log("====CityItem render====", listJson);
				return _react2.default.createElement(
					'div',
					{ 'data-selector': label },
					_react2.default.createElement(
						'div',
						{ className: "main-title" },
						mainTitle
					),
					_react2.default.createElement(
						'ul',
						{ className: label.length > 1 ? 'city-button-group' : 'city-bottom-line' },
						listJson.map(function (ele, i) {
							return _react2.default.createElement(
								'li',
								{
									onClick: function onClick(event) {
										selectedCityHandler(ele.key, ele.label, i, event);
										// that.isClickCityName({
										// 	currentIndex: i
										// })
									},
									className: null
								},
								ele.label
							);
						})
					)
				);
			}
		}]);
		return CityItem;
	}(_react.Component);

	;

	// 城市索引列表

	var IndexList = function (_Component4) {
		(0, _inherits3.default)(IndexList, _Component4);

		function IndexList() {
			(0, _classCallCheck3.default)(this, IndexList);

			var _this7 = (0, _possibleConstructorReturn3.default)(this, (IndexList.__proto__ || (0, _getPrototypeOf2.default)(IndexList)).call(this));

			_this7.onTouchStart = _this7.onTouchStart.bind(_this7);
			_this7.onTouchMove = _this7.onTouchStart.bind(_this7);
			_this7.onTouchEnd = _this7.onTouchEnd.bind(_this7);

			return _this7;
		}
		// 组件是否应当渲染新的props或state，返回false表示跳过后续的生命周期方法


		(0, _createClass3.default)(IndexList, [{
			key: 'shouldComponentUpdate',
			value: function shouldComponentUpdate(nextProps, nextState) {
				return (0, _stringify2.default)(this.props.list) !== (0, _stringify2.default)(nextProps.list);
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				var $indexEl = $(this.refs.index);

				$indexEl.on('touchstart', this.onTouchStart);
				$indexEl.on('touchmove', this.onTouchMove);
				$indexEl.on('touchend', this.onTouchEnd);
			}
		}, {
			key: 'onTouchStart',
			value: function onTouchStart(e) {
				var letter = $(e.target).text();
				e.preventDefault();

				this.props.showTips(letter);
			}
		}, {
			key: 'onTouchMove',
			value: function onTouchMove(e) {
				var $indexList = $(this.refs.index),
				    height = $indexList.height(),
				    offsetTop = $indexList.offset().top,
				    list = this.props.list;

				e.preventDefault();
				var t = "",
				    i = e.targetTouches[0],
				    n = i.pageY - offsetTop,
				    s = parseInt(n / (height / list.length));
				s < 0 ? s = 0 : s > list.length - 1 && (s = list.length - 1);

				var letter = list[s];

				this.props.showTips(letter);
			}
		}, {
			key: 'onTouchEnd',
			value: function onTouchEnd(e) {
				e.preventDefault();
				this.props.hideTips();
			}
		}, {
			key: 'render',
			value: function render() {
				// console.log('----- IndexList ------')

				var list = this.props.list;

				return _react2.default.createElement(
					'ul',
					{ ref: 'index', className: 'index-list' },
					list.map(function (ele, index) {
						return _react2.default.createElement(
							'li',
							null,
							ele
						);
					})
				);
			}
		}]);
		return IndexList;
	}(_react.Component);

	;

	// 滑动时提示字母

	var TipsLetter = function (_Component5) {
		(0, _inherits3.default)(TipsLetter, _Component5);

		function TipsLetter() {
			(0, _classCallCheck3.default)(this, TipsLetter);
			return (0, _possibleConstructorReturn3.default)(this, (TipsLetter.__proto__ || (0, _getPrototypeOf2.default)(TipsLetter)).apply(this, arguments));
		}

		(0, _createClass3.default)(TipsLetter, [{
			key: 'render',

			// mixins: [PureRenderMixin],
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: "tips-letter " + (this.props.isShow ? ' show' : '') },
					this.props.tips
				);
			}
		}]);
		return TipsLetter;
	}(_react.Component);

	;

	module.exports = CityContainer;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(107), __esModule: true };

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(60);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _getPrototypeOf = __webpack_require__(12);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(16);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(17);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(19);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(18);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(22);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var st = void 0;

	var Tips = function (_React$PureComponent) {
	    (0, _inherits3.default)(Tips, _React$PureComponent);

	    function Tips() {
	        (0, _classCallCheck3.default)(this, Tips);
	        return (0, _possibleConstructorReturn3.default)(this, (Tips.__proto__ || (0, _getPrototypeOf2.default)(Tips)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Tips, [{
	        key: 'showTips',
	        value: function showTips() {
	            var _this2 = this;

	            var time = this.props.time;
	            if (this.props.isShowTips && this.props.isAutoClose) {
	                clearTimeout(st);
	                st = setTimeout(function () {
	                    _this2.props.setParentState({
	                        'isShowTips': false
	                    });
	                }, time);
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.showTips();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this.showTips();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            // console.log("------------render Tips ------------");
	            return _react2.default.createElement(
	                'div',
	                { className: (this.props.isShowTips ? "show" : "hide") + " tips" },
	                this.props.text
	            );
	        }
	    }]);
	    return Tips;
	}(_react2.default.PureComponent);

	exports.default = Tips;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(108), __esModule: true };

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _promise = __webpack_require__(102);

	var _promise2 = _interopRequireDefault(_promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (fn) {
	  return function () {
	    var gen = fn.apply(this, arguments);
	    return new _promise2.default(function (resolve, reject) {
	      function step(key, arg) {
	        try {
	          var info = gen[key](arg);
	          var value = info.value;
	        } catch (error) {
	          reject(error);
	          return;
	        }

	        if (info.done) {
	          resolve(value);
	        } else {
	          return _promise2.default.resolve(value).then(function (value) {
	            step("next", value);
	          }, function (err) {
	            step("throw", err);
	          });
	        }
	      }

	      return step("next");
	    });
	  };
	};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(162);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(3).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(8) && !__webpack_require__(13)(function () {
	  return Object.defineProperty(__webpack_require__(39)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(26);
	var ITERATOR = __webpack_require__(4)('iterator');
	var ArrayProto = Array.prototype;

	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(24);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(9);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR = __webpack_require__(4)('iterator');
	var SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }

	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};


/***/ }),
/* 69 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(27);
	var createDesc = __webpack_require__(28);
	var toIObject = __webpack_require__(15);
	var toPrimitive = __webpack_require__(50);
	var has = __webpack_require__(14);
	var IE8_DOM_DEFINE = __webpack_require__(64);
	var gOPD = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(8) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(73);
	var hiddenKeys = __webpack_require__(40).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(14);
	var toObject = __webpack_require__(21);
	var IE_PROTO = __webpack_require__(47)('IE_PROTO');
	var ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(14);
	var toIObject = __webpack_require__(15);
	var arrayIndexOf = __webpack_require__(121)(false);
	var IE_PROTO = __webpack_require__(47)('IE_PROTO');

	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(2);
	var core = __webpack_require__(1);
	var fails = __webpack_require__(13);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),
/* 75 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return { e: false, v: exec() };
	  } catch (e) {
	    return { e: true, v: e };
	  }
	};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(9);
	var isObject = __webpack_require__(6);
	var newPromiseCapability = __webpack_require__(44);

	module.exports = function (C, x) {
	  anObject(C);
	  if (isObject(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11);


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(3);
	var core = __webpack_require__(1);
	var dP = __webpack_require__(7);
	var DESCRIPTORS = __webpack_require__(8);
	var SPECIES = __webpack_require__(4)('species');

	module.exports = function (KEY) {
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function () { return this; }
	  });
	};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(9);
	var aFunction = __webpack_require__(23);
	var SPECIES = __webpack_require__(4)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(10);
	var invoke = __webpack_require__(130);
	var html = __webpack_require__(63);
	var cel = __webpack_require__(39);
	var global = __webpack_require__(3);
	var process = global.process;
	var setTask = global.setImmediate;
	var clearTask = global.clearImmediate;
	var MessageChannel = global.MessageChannel;
	var Dispatch = global.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var defer, channel, port;
	var run = function () {
	  var id = +this;
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function (event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [];
	    var i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(24)(process) == 'process') {
	    defer = function (id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	    defer = function (id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function (id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(6);
	module.exports = function (it, TYPE) {
	  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
	  return it;
	};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(37);
	var ITERATOR = __webpack_require__(4)('iterator');
	var Iterators = __webpack_require__(26);
	module.exports = __webpack_require__(1).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))(7);

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(59);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ }),
/* 85 */
/***/ (function(module, exports) {

	(function() {
	  'use strict';

	  if (self.fetch) {
	    return
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = name.toString();
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = value.toString();
	    }
	    return value
	  }

	  function Headers(headers) {
	    this.map = {}

	    var self = this
	    if (headers instanceof Headers) {
	      headers.forEach(function(name, values) {
	        values.forEach(function(value) {
	          self.append(name, value)
	        })
	      })

	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        self.append(name, headers[name])
	      })
	    }
	  }

	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var list = this.map[name]
	    if (!list) {
	      list = []
	      this.map[name] = list
	    }
	    list.push(value)
	  }

	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }

	  Headers.prototype.get = function(name) {
	    var values = this.map[normalizeName(name)]
	    return values ? values[0] : null
	  }

	  Headers.prototype.getAll = function(name) {
	    return this.map[normalizeName(name)] || []
	  }

	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }

	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)]
	  }

	  // Instead of iterable for now.
	  Headers.prototype.forEach = function(callback) {
	    var self = this
	    Object.getOwnPropertyNames(this.map).forEach(function(name) {
	      callback(name, self.map[name])
	    })
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return fetch.Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }

	  function fileReaderReady(reader) {
	    return new fetch.Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    reader.readAsArrayBuffer(blob)
	    return fileReaderReady(reader)
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    reader.readAsText(blob)
	    return fileReaderReady(reader)
	  }

	  var support = {
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob();
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self
	  }

	  function Body() {
	    this.bodyUsed = false


	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (!body) {
	        this._bodyText = ''
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }
	    }

	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return fetch.Promise.resolve(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return fetch.Promise.resolve(new Blob([this._bodyText]))
	        }
	      }

	      this.arrayBuffer = function() {
	        return this.blob().then(readBlobAsArrayBuffer)
	      }

	      this.text = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text')
	        } else {
	          return fetch.Promise.resolve(this._bodyText)
	        }
	      }
	    } else {
	      this.text = function() {
	        var rejected = consumed(this)
	        return rejected ? rejected : fetch.Promise.resolve(this._bodyText)
	      }
	    }

	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }

	    this.json = function() {
	      return this.text().then(function (text) {
	          return JSON.parse(text);
	      });
	    }

	    return this
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }

	  function Request(url, options) {
	    options = options || {}
	    this.url = url

	    this.credentials = options.credentials || 'omit'
	    this.headers = new Headers(options.headers)
	    this.method = normalizeMethod(options.method || 'GET')
	    this.mode = options.mode || null
	    this.referrer = null

	    if ((this.method === 'GET' || this.method === 'HEAD') && options.body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(options.body)
	  }

	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }

	  function headers(xhr) {
	    var head = new Headers()
	    var pairs = xhr.getAllResponseHeaders().trim().split('\n')
	    pairs.forEach(function(header) {
	      var split = header.trim().split(':')
	      var key = split.shift().trim()
	      var value = split.join(':').trim()
	      head.append(key, value)
	    })
	    return head
	  }

	  var noXhrPatch =
	    typeof window !== 'undefined' && !!window.ActiveXObject &&
	      !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

	  function getXhr() {
	    // from backbone.js 1.1.2
	    // https://github.com/jashkenas/backbone/blob/1.1.2/backbone.js#L1181
	    if (noXhrPatch && !(/^(get|post|head|put|delete|options)$/i.test(this.method))) {
	      this.usingActiveXhr = true;
	      return new ActiveXObject("Microsoft.XMLHTTP");
	    }
	    return new XMLHttpRequest();
	  }

	  Body.call(Request.prototype)

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }

	    this._initBody(bodyInit)
	    this.type = 'default'
	    this.url = null
	    this.status = options.status
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = options.statusText
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
	    this.url = options.url || ''
	  }

	  Body.call(Response.prototype)

	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;

	  self.fetch = function(input, init) {
	    // TODO: Request constructor should accept input, init
	    var request
	    if (Request.prototype.isPrototypeOf(input) && !init) {
	      request = input
	    } else {
	      request = new Request(input, init)
	    }

	    return new fetch.Promise(function(resolve, reject) {
	      var xhr = getXhr();
	      if (request.credentials === 'cors') {
	        xhr.withCredentials = true;
	      }

	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL
	        }

	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL')
	        }

	        return;
	      }

	      function onload() {
	        if (xhr.readyState !== 4) {
	          return
	        }
	        var status = (xhr.status === 1223) ? 204 : xhr.status
	        if (status < 100 || status > 599) {
	          reject(new TypeError('Network request failed'))
	          return
	        }
	        var options = {
	          status: status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        }
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options))
	      }
	      xhr.onreadystatechange = onload;
	      if (!self.usingActiveXhr) {
	        xhr.onload = onload;
	        xhr.onerror = function() {
	          reject(new TypeError('Network request failed'))
	        }
	      }

	      xhr.open(request.method, request.url, true)

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }

	      request.headers.forEach(function(name, values) {
	        values.forEach(function(value) {
	          xhr.setRequestHeader(name, value)
	        })
	      })

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  fetch.Promise = self.Promise; // you could change it to your favorite alternative
	  self.fetch.polyfill = true
	})();


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	// the whatwg-fetch polyfill installs the fetch() function
	// on the global object (window or self)
	//
	// Return that as the export for use in Webpack, Browserify etc.
	__webpack_require__(186);
	module.exports = self.fetch.bind(self);


/***/ }),
/* 87 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 88 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 89 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 90 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 91 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 92 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * [rem 更具屏幕分辨率设置全局字体大小]
	 * @Author   bangyao.chen@ttpai.cn
	 * @DateTime 2018-01-05T13:29:49+0800
	 * @type {Object}
	 */
	module.exports = {
		init: function init() {
			this.setRem();
			this.on();
		},
		setRem: function setRem() {
			var rect = window.document.body.getBoundingClientRect();
			var width = rect.width > 750 ? 750 : rect.width;
			var rootEm = parseFloat(width / 320 * 20);
			document.getElementsByTagName('html')[0].style.fontSize = rootEm + "px";
		},
		on: function on() {
			var me = this;
			window.onresize = function () {
				window.setTimeout(me.setRem, 300);
			};
		}
	};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _from = __webpack_require__(59);

	var _from2 = _interopRequireDefault(_from);

	var _set = __webpack_require__(103);

	var _set2 = _interopRequireDefault(_set);

	var _extends2 = __webpack_require__(57);

	var _extends3 = _interopRequireDefault(_extends2);

	var _toConsumableArray2 = __webpack_require__(84);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * [城市选择控件所需的辅助函数]
	 * @Author   chen.yang
	 * @DateTime 2017-07-28T10:11:51+0800
	 * @return   {string}                     [导航标题]
	 */

	module.exports = {
	    //格式化首字母城市
	    formatCityDatas: function formatCityDatas(ttpaiCity) {
	        // 按城市拼音缩写排序
	        var list = [].concat((0, _toConsumableArray3.default)(ttpaiCity));
	        list.sort(function (a, b) {
	            if (a.abbr < b.abbr) return -1;
	            if (a.abbr > b.abbr) return 1;
	            return 0;
	        });

	        //分组城市
	        var obj = {};
	        list.map(function (ele, index) {
	            //设置样式 
	            ele.curClass = ele.curClass || "";
	            // 按首字母分组
	            var firstLetter = ele.abbr.charAt(0);
	            if (!obj[firstLetter]) {
	                obj[firstLetter] = [];
	            }
	            obj[firstLetter].push(ele);
	        });
	        return obj;
	    },

	    /**
	     * [格式化热门城市]
	     * @Author   chen.yang
	     * @DateTime 2017-07-27T11:02:51+0800
	     * @param    {Array}                 ttpaiCity [城市列表]
	     * @return   {Array}                           [热门城市列表]
	     */
	    formatHotList: function formatHotList(ttpaiCity) {
	        var hotList = ttpaiCity.filter(function (ele) {
	            return ele.hot;
	        });

	        return hotList;
	    },

	    /**
	     * [返回导航标题]
	     * @Author   chen.yang
	     * @DateTime 2017-07-28T10:11:51+0800
	     * @return   {string}                     [导航标题]
	     */
	    getMainTitle: function getMainTitle(key) {
	        var mainTitle = key;

	        switch (key) {
	            case 'curCity':
	                mainTitle = '当前定位及周边';
	                break;
	            case 'hotList':
	                mainTitle = '热门城市';
	                break;
	            default:
	                mainTitle = key;
	                break;
	        }

	        return mainTitle;
	    },

	    getCitySelector: function getCitySelector(letter) {
	        var selector = letter;

	        switch (letter) {
	            case '定':
	                selector = 'curCity';
	                break;
	            case '热':
	                selector = 'hotList';
	                break;
	            default:
	                selector = letter;
	                break;
	        }

	        return selector;
	    },

	    /**
	     * [返回字母导航点击或滑动时的提示]
	     * @Author   chen.yang
	     * @DateTime 2017-11-20T13:47:42+0800
	     * @param    {[type]}                 letter [字母]
	     * @return   {[type]}                        [提示]
	     */
	    getTipsByLetter: function getTipsByLetter(letter) {
	        var tips = '';

	        switch (letter) {
	            case '定':
	                tips = '定位';
	                break;
	            case '热':
	                tips = '热门';
	                break;
	            default:
	                tips = letter;
	                break;
	        }

	        return tips;
	    },

	    /**
	     * [城市列表]
	     * @Author   chen.yang
	     * @DateTime 2017-07-28T17:35:36+0800
	     * @param    {array}                 ttpaiCity  [所有城市]
	     * @param    {object}                 curCity   [定位城市]
	     * @return   {object}                 cityList  [城市列表]
	     */
	    getCityList: function getCityList(ttpaiCity, curCity) {
	        ttpaiCity = ttpaiCity || [];

	        var cityList = {};

	        // 定位城市
	        if (curCity && curCity.key) {
	            cityList.curCity = [curCity];

	            // 附近城市
	            if (curCity.hostValue) {
	                ttpaiCity.forEach(function (ele) {
	                    if (curCity.hostValue == ele.hostValue && curCity.label != ele.label) {
	                        cityList.curCity.push(ele);
	                    }
	                });
	            }
	        }

	        // 热门城市
	        cityList.hotList = this.formatHotList(ttpaiCity);

	        // 首字母城市
	        var letterListObj = this.formatCityDatas(ttpaiCity);

	        // 按顺序展示城市
	        cityList = (0, _extends3.default)({}, cityList, letterListObj);

	        return cityList;
	    },

	    /**
	     * [导航列表]
	     * @Author   chen.yang
	     * @DateTime 2017-07-28T17:35:52+0800
	     * @param    {object}                 cityList [城市列表]
	     * @return   {array}                 indexList [导航列表]
	     */
	    getIndexList: function getIndexList(cityList) {
	        var mySet = new _set2.default();

	        for (var key in cityList) {
	            switch (key) {
	                case 'curCity':
	                    mySet.add('定');
	                    break;
	                case 'hotList':
	                    mySet.add('热');
	                    break;
	                default:
	                    mySet.add(key);
	                    break;
	            }
	        }

	        var indexList = (0, _from2.default)(mySet);

	        return indexList;
	    },

	    //自动判断是否跨域 
	    getDataType: function getDataType(url) {
	        url = url || '';
	        var localhost = '//' + window.location.host;
	        return url.indexOf(localhost) !== -1 || /^(\/|\.\.\/)[a-z0-9]{1}.*/.test(url) ? 'json' : 'jsonp';
	    }
	};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _getPrototypeOf = __webpack_require__(12);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(16);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(17);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(19);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(18);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(22);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Header = function (_Component) {
	    (0, _inherits3.default)(Header, _Component);

	    function Header() {
	        (0, _classCallCheck3.default)(this, Header);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this));

	        _this.state = {
	            isAddBtn: true,
	            isShowAddContent: false
	        };
	        return _this;
	    }

	    //点击添加车源按钮将头部标题改变，并显示返回上一页的箭头图标    


	    (0, _createClass3.default)(Header, [{
	        key: 'showGoBackBtn',
	        value: function showGoBackBtn() {
	            this.setState({
	                isAddBtn: false
	            });
	        }

	        //点击箭头图标，返回上一页

	    }, {
	        key: 'goBack',
	        value: function goBack() {
	            this.setState({
	                isAddBtn: true
	            });
	            this.props.isClickAddCar(false);
	        }

	        //点击头部添加车源按钮

	    }, {
	        key: 'clickAddBtn',
	        value: function clickAddBtn() {
	            this.props.isClickAddCar(true);
	            this.setState({
	                isAddBtn: false
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _state = this.state,
	                isAddBtn = _state.isAddBtn,
	                isShowAddContent = _state.isShowAddContent;

	            return _react2.default.createElement(
	                'div',
	                { className: 'header-content' },
	                isAddBtn ? _react2.default.createElement(
	                    'div',
	                    { 'class': 'header clearfix' },
	                    _react2.default.createElement(
	                        'span',
	                        { 'class': 'title show' },
	                        '\u8F66\u6E90\u8FDB\u5EA6\u67E5\u8BE2'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { 'class': 'subnav' },
	                        _react2.default.createElement(
	                            'a',
	                            { onTouchEnd: function onTouchEnd() {
	                                    return _this2.clickAddBtn();
	                                }, rel: 'nofollow', target: '_blank' },
	                            '\u6DFB\u52A0\u8F66\u6E90'
	                        )
	                    )
	                ) : _react2.default.createElement(
	                    'div',
	                    { 'class': 'header clearfix', style: { 'position': 'relative', 'zIndex': 70 } },
	                    _react2.default.createElement('div', { 'class': 'btn-goback', onTouchEnd: function onTouchEnd() {
	                            return _this2.goBack();
	                        } }),
	                    _react2.default.createElement(
	                        'span',
	                        { 'class': 'title show' },
	                        '\u6DFB\u52A0\u8F66\u6E90'
	                    )
	                )
	            );
	        }
	    }]);
	    return Header;
	}(_react.Component);

	exports.default = Header;

/***/ }),
/* 95 */
/***/ (function(module, exports) {

	"use strict";

	(function ($) {

	    $.getScript = function (url, success, error) {
	        var script = document.createElement("script"),
	            $script = $(script);
	        script.src = url;

	        $("head").append(script);
	        $script.bind("load", success);
	        $script.bind("error", error);
	    };
	})($);

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof2 = __webpack_require__(35);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _getPrototypeOf = __webpack_require__(12);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */
	var Zepto = function () {
	  function L(t) {
	    return null == t ? String(t) : j[S.call(t)] || "object";
	  }function Z(t) {
	    return "function" == L(t);
	  }function _(t) {
	    return null != t && t == t.window;
	  }function $(t) {
	    return null != t && t.nodeType == t.DOCUMENT_NODE;
	  }function D(t) {
	    return "object" == L(t);
	  }function M(t) {
	    return D(t) && !_(t) && (0, _getPrototypeOf2.default)(t) == Object.prototype;
	  }function R(t) {
	    return "number" == typeof t.length;
	  }function k(t) {
	    return s.call(t, function (t) {
	      return null != t;
	    });
	  }function z(t) {
	    return t.length > 0 ? n.fn.concat.apply([], t) : t;
	  }function F(t) {
	    return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
	  }function q(t) {
	    return t in f ? f[t] : f[t] = new RegExp("(^|\\s)" + t + "(\\s|$)");
	  }function H(t, e) {
	    return "number" != typeof e || c[F(t)] ? e : e + "px";
	  }function I(t) {
	    var e, n;return u[t] || (e = a.createElement(t), a.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), u[t] = n), u[t];
	  }function V(t) {
	    return "children" in t ? o.call(t.children) : n.map(t.childNodes, function (t) {
	      return 1 == t.nodeType ? t : void 0;
	    });
	  }function B(n, i, r) {
	    for (e in i) {
	      r && (M(i[e]) || A(i[e])) ? (M(i[e]) && !M(n[e]) && (n[e] = {}), A(i[e]) && !A(n[e]) && (n[e] = []), B(n[e], i[e], r)) : i[e] !== t && (n[e] = i[e]);
	    }
	  }function U(t, e) {
	    return null == e ? n(t) : n(t).filter(e);
	  }function J(t, e, n, i) {
	    return Z(e) ? e.call(t, n, i) : e;
	  }function X(t, e, n) {
	    null == n ? t.removeAttribute(e) : t.setAttribute(e, n);
	  }function W(e, n) {
	    var i = e.className || "",
	        r = i && i.baseVal !== t;return n === t ? r ? i.baseVal : i : void (r ? i.baseVal = n : e.className = n);
	  }function Y(t) {
	    try {
	      return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? n.parseJSON(t) : t) : t;
	    } catch (e) {
	      return t;
	    }
	  }function G(t, e) {
	    e(t);for (var n = 0, i = t.childNodes.length; i > n; n++) {
	      G(t.childNodes[n], e);
	    }
	  }var t,
	      e,
	      n,
	      i,
	      C,
	      N,
	      r = [],
	      o = r.slice,
	      s = r.filter,
	      a = window.document,
	      u = {},
	      f = {},
	      c = { "column-count": 1, columns: 1, "font-weight": 1, "line-height": 1, opacity: 1, "z-index": 1, zoom: 1 },
	      l = /^\s*<(\w+|!)[^>]*>/,
	      h = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	      p = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	      d = /^(?:body|html)$/i,
	      m = /([A-Z])/g,
	      g = ["val", "css", "html", "text", "data", "width", "height", "offset"],
	      v = ["after", "prepend", "before", "append"],
	      y = a.createElement("table"),
	      x = a.createElement("tr"),
	      b = { tr: a.createElement("tbody"), tbody: y, thead: y, tfoot: y, td: x, th: x, "*": a.createElement("div") },
	      w = /complete|loaded|interactive/,
	      E = /^[\w-]*$/,
	      j = {},
	      S = j.toString,
	      T = {},
	      O = a.createElement("div"),
	      P = { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" },
	      A = Array.isArray || function (t) {
	    return t instanceof Array;
	  };return T.matches = function (t, e) {
	    if (!e || !t || 1 !== t.nodeType) return !1;var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;if (n) return n.call(t, e);var i,
	        r = t.parentNode,
	        o = !r;return o && (r = O).appendChild(t), i = ~T.qsa(r, e).indexOf(t), o && O.removeChild(t), i;
	  }, C = function C(t) {
	    return t.replace(/-+(.)?/g, function (t, e) {
	      return e ? e.toUpperCase() : "";
	    });
	  }, N = function N(t) {
	    return s.call(t, function (e, n) {
	      return t.indexOf(e) == n;
	    });
	  }, T.fragment = function (e, i, r) {
	    var s, u, f;return h.test(e) && (s = n(a.createElement(RegExp.$1))), s || (e.replace && (e = e.replace(p, "<$1></$2>")), i === t && (i = l.test(e) && RegExp.$1), i in b || (i = "*"), f = b[i], f.innerHTML = "" + e, s = n.each(o.call(f.childNodes), function () {
	      f.removeChild(this);
	    })), M(r) && (u = n(s), n.each(r, function (t, e) {
	      g.indexOf(t) > -1 ? u[t](e) : u.attr(t, e);
	    })), s;
	  }, T.Z = function (t, e) {
	    return t = t || [], t.__proto__ = n.fn, t.selector = e || "", t;
	  }, T.isZ = function (t) {
	    return t instanceof T.Z;
	  }, T.init = function (e, i) {
	    var r;if (!e) return T.Z();if ("string" == typeof e) {
	      if (e = e.trim(), "<" == e[0] && l.test(e)) r = T.fragment(e, RegExp.$1, i), e = null;else {
	        if (i !== t) return n(i).find(e);r = T.qsa(a, e);
	      }
	    } else {
	      if (Z(e)) return n(a).ready(e);if (T.isZ(e)) return e;if (A(e)) r = k(e);else if (D(e)) r = [e], e = null;else if (l.test(e)) r = T.fragment(e.trim(), RegExp.$1, i), e = null;else {
	        if (i !== t) return n(i).find(e);r = T.qsa(a, e);
	      }
	    }return T.Z(r, e);
	  }, n = function n(t, e) {
	    return T.init(t, e);
	  }, n.extend = function (t) {
	    var e,
	        n = o.call(arguments, 1);return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function (n) {
	      B(t, n, e);
	    }), t;
	  }, T.qsa = function (t, e) {
	    var n,
	        i = "#" == e[0],
	        r = !i && "." == e[0],
	        s = i || r ? e.slice(1) : e,
	        a = E.test(s);return $(t) && a && i ? (n = t.getElementById(s)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : o.call(a && !i ? r ? t.getElementsByClassName(s) : t.getElementsByTagName(e) : t.querySelectorAll(e));
	  }, n.contains = a.documentElement.contains ? function (t, e) {
	    return t !== e && t.contains(e);
	  } : function (t, e) {
	    for (; e && (e = e.parentNode);) {
	      if (e === t) return !0;
	    }return !1;
	  }, n.type = L, n.isFunction = Z, n.isWindow = _, n.isArray = A, n.isPlainObject = M, n.isEmptyObject = function (t) {
	    var e;for (e in t) {
	      return !1;
	    }return !0;
	  }, n.inArray = function (t, e, n) {
	    return r.indexOf.call(e, t, n);
	  }, n.camelCase = C, n.trim = function (t) {
	    return null == t ? "" : String.prototype.trim.call(t);
	  }, n.uuid = 0, n.support = {}, n.expr = {}, n.map = function (t, e) {
	    var n,
	        r,
	        o,
	        i = [];if (R(t)) for (r = 0; r < t.length; r++) {
	      n = e(t[r], r), null != n && i.push(n);
	    } else for (o in t) {
	      n = e(t[o], o), null != n && i.push(n);
	    }return z(i);
	  }, n.each = function (t, e) {
	    var n, i;if (R(t)) {
	      for (n = 0; n < t.length; n++) {
	        if (e.call(t[n], n, t[n]) === !1) return t;
	      }
	    } else for (i in t) {
	      if (e.call(t[i], i, t[i]) === !1) return t;
	    }return t;
	  }, n.grep = function (t, e) {
	    return s.call(t, e);
	  }, window.JSON && (n.parseJSON = JSON.parse), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
	    j["[object " + e + "]"] = e.toLowerCase();
	  }), n.fn = { forEach: r.forEach, reduce: r.reduce, push: r.push, sort: r.sort, indexOf: r.indexOf, concat: r.concat, map: function map(t) {
	      return n(n.map(this, function (e, n) {
	        return t.call(e, n, e);
	      }));
	    }, slice: function slice() {
	      return n(o.apply(this, arguments));
	    }, ready: function ready(t) {
	      return w.test(a.readyState) && a.body ? t(n) : a.addEventListener("DOMContentLoaded", function () {
	        t(n);
	      }, !1), this;
	    }, get: function get(e) {
	      return e === t ? o.call(this) : this[e >= 0 ? e : e + this.length];
	    }, toArray: function toArray() {
	      return this.get();
	    }, size: function size() {
	      return this.length;
	    }, remove: function remove() {
	      return this.each(function () {
	        null != this.parentNode && this.parentNode.removeChild(this);
	      });
	    }, each: function each(t) {
	      return r.every.call(this, function (e, n) {
	        return t.call(e, n, e) !== !1;
	      }), this;
	    }, filter: function filter(t) {
	      return Z(t) ? this.not(this.not(t)) : n(s.call(this, function (e) {
	        return T.matches(e, t);
	      }));
	    }, add: function add(t, e) {
	      return n(N(this.concat(n(t, e))));
	    }, is: function is(t) {
	      return this.length > 0 && T.matches(this[0], t);
	    }, not: function not(e) {
	      var i = [];if (Z(e) && e.call !== t) this.each(function (t) {
	        e.call(this, t) || i.push(this);
	      });else {
	        var r = "string" == typeof e ? this.filter(e) : R(e) && Z(e.item) ? o.call(e) : n(e);this.forEach(function (t) {
	          r.indexOf(t) < 0 && i.push(t);
	        });
	      }return n(i);
	    }, has: function has(t) {
	      return this.filter(function () {
	        return D(t) ? n.contains(this, t) : n(this).find(t).size();
	      });
	    }, eq: function eq(t) {
	      return -1 === t ? this.slice(t) : this.slice(t, +t + 1);
	    }, first: function first() {
	      var t = this[0];return t && !D(t) ? t : n(t);
	    }, last: function last() {
	      var t = this[this.length - 1];return t && !D(t) ? t : n(t);
	    }, find: function find(t) {
	      var e,
	          i = this;return e = t ? "object" == (typeof t === "undefined" ? "undefined" : (0, _typeof3.default)(t)) ? n(t).filter(function () {
	        var t = this;return r.some.call(i, function (e) {
	          return n.contains(e, t);
	        });
	      }) : 1 == this.length ? n(T.qsa(this[0], t)) : this.map(function () {
	        return T.qsa(this, t);
	      }) : n();
	    }, closest: function closest(t, e) {
	      var i = this[0],
	          r = !1;for ("object" == (typeof t === "undefined" ? "undefined" : (0, _typeof3.default)(t)) && (r = n(t)); i && !(r ? r.indexOf(i) >= 0 : T.matches(i, t));) {
	        i = i !== e && !$(i) && i.parentNode;
	      }return n(i);
	    }, parents: function parents(t) {
	      for (var e = [], i = this; i.length > 0;) {
	        i = n.map(i, function (t) {
	          return (t = t.parentNode) && !$(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0;
	        });
	      }return U(e, t);
	    }, parent: function parent(t) {
	      return U(N(this.pluck("parentNode")), t);
	    }, children: function children(t) {
	      return U(this.map(function () {
	        return V(this);
	      }), t);
	    }, contents: function contents() {
	      return this.map(function () {
	        return o.call(this.childNodes);
	      });
	    }, siblings: function siblings(t) {
	      return U(this.map(function (t, e) {
	        return s.call(V(e.parentNode), function (t) {
	          return t !== e;
	        });
	      }), t);
	    }, empty: function empty() {
	      return this.each(function () {
	        this.innerHTML = "";
	      });
	    }, pluck: function pluck(t) {
	      return n.map(this, function (e) {
	        return e[t];
	      });
	    }, show: function show() {
	      return this.each(function () {
	        "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = I(this.nodeName));
	      });
	    }, replaceWith: function replaceWith(t) {
	      return this.before(t).remove();
	    }, wrap: function wrap(t) {
	      var e = Z(t);if (this[0] && !e) var i = n(t).get(0),
	          r = i.parentNode || this.length > 1;return this.each(function (o) {
	        n(this).wrapAll(e ? t.call(this, o) : r ? i.cloneNode(!0) : i);
	      });
	    }, wrapAll: function wrapAll(t) {
	      if (this[0]) {
	        n(this[0]).before(t = n(t));for (var e; (e = t.children()).length;) {
	          t = e.first();
	        }n(t).append(this);
	      }return this;
	    }, wrapInner: function wrapInner(t) {
	      var e = Z(t);return this.each(function (i) {
	        var r = n(this),
	            o = r.contents(),
	            s = e ? t.call(this, i) : t;o.length ? o.wrapAll(s) : r.append(s);
	      });
	    }, unwrap: function unwrap() {
	      return this.parent().each(function () {
	        n(this).replaceWith(n(this).children());
	      }), this;
	    }, clone: function clone() {
	      return this.map(function () {
	        return this.cloneNode(!0);
	      });
	    }, hide: function hide() {
	      return this.css("display", "none");
	    }, toggle: function toggle(e) {
	      return this.each(function () {
	        var i = n(this);(e === t ? "none" == i.css("display") : e) ? i.show() : i.hide();
	      });
	    }, prev: function prev(t) {
	      return n(this.pluck("previousElementSibling")).filter(t || "*");
	    }, next: function next(t) {
	      return n(this.pluck("nextElementSibling")).filter(t || "*");
	    }, html: function html(t) {
	      return 0 in arguments ? this.each(function (e) {
	        var i = this.innerHTML;n(this).empty().append(J(this, t, e, i));
	      }) : 0 in this ? this[0].innerHTML : null;
	    }, text: function text(t) {
	      return 0 in arguments ? this.each(function (e) {
	        var n = J(this, t, e, this.textContent);this.textContent = null == n ? "" : "" + n;
	      }) : 0 in this ? this[0].textContent : null;
	    }, attr: function attr(n, i) {
	      var r;return "string" != typeof n || 1 in arguments ? this.each(function (t) {
	        if (1 === this.nodeType) if (D(n)) for (e in n) {
	          X(this, e, n[e]);
	        } else X(this, n, J(this, i, t, this.getAttribute(n)));
	      }) : this.length && 1 === this[0].nodeType ? !(r = this[0].getAttribute(n)) && n in this[0] ? this[0][n] : r : t;
	    }, removeAttr: function removeAttr(t) {
	      return this.each(function () {
	        1 === this.nodeType && t.split(" ").forEach(function (t) {
	          X(this, t);
	        }, this);
	      });
	    }, prop: function prop(t, e) {
	      return t = P[t] || t, 1 in arguments ? this.each(function (n) {
	        this[t] = J(this, e, n, this[t]);
	      }) : this[0] && this[0][t];
	    }, data: function data(e, n) {
	      var i = "data-" + e.replace(m, "-$1").toLowerCase(),
	          r = 1 in arguments ? this.attr(i, n) : this.attr(i);return null !== r ? Y(r) : t;
	    }, val: function val(t) {
	      return 0 in arguments ? this.each(function (e) {
	        this.value = J(this, t, e, this.value);
	      }) : this[0] && (this[0].multiple ? n(this[0]).find("option").filter(function () {
	        return this.selected;
	      }).pluck("value") : this[0].value);
	    }, offset: function offset(t) {
	      if (t) return this.each(function (e) {
	        var i = n(this),
	            r = J(this, t, e, i.offset()),
	            o = i.offsetParent().offset(),
	            s = { top: r.top - o.top, left: r.left - o.left };"static" == i.css("position") && (s.position = "relative"), i.css(s);
	      });if (!this.length) return null;var e = this[0].getBoundingClientRect();return { left: e.left + window.pageXOffset, top: e.top + window.pageYOffset, width: Math.round(e.width), height: Math.round(e.height) };
	    }, css: function css(t, i) {
	      if (arguments.length < 2) {
	        var r,
	            o = this[0];if (!o) return;if (r = getComputedStyle(o, ""), "string" == typeof t) return o.style[C(t)] || r.getPropertyValue(t);if (A(t)) {
	          var s = {};return n.each(t, function (t, e) {
	            s[e] = o.style[C(e)] || r.getPropertyValue(e);
	          }), s;
	        }
	      }var a = "";if ("string" == L(t)) i || 0 === i ? a = F(t) + ":" + H(t, i) : this.each(function () {
	        this.style.removeProperty(F(t));
	      });else for (e in t) {
	        t[e] || 0 === t[e] ? a += F(e) + ":" + H(e, t[e]) + ";" : this.each(function () {
	          this.style.removeProperty(F(e));
	        });
	      }return this.each(function () {
	        this.style.cssText += ";" + a;
	      });
	    }, index: function index(t) {
	      return t ? this.indexOf(n(t)[0]) : this.parent().children().indexOf(this[0]);
	    }, hasClass: function hasClass(t) {
	      return t ? r.some.call(this, function (t) {
	        return this.test(W(t));
	      }, q(t)) : !1;
	    }, addClass: function addClass(t) {
	      return t ? this.each(function (e) {
	        if ("className" in this) {
	          i = [];var r = W(this),
	              o = J(this, t, e, r);o.split(/\s+/g).forEach(function (t) {
	            n(this).hasClass(t) || i.push(t);
	          }, this), i.length && W(this, r + (r ? " " : "") + i.join(" "));
	        }
	      }) : this;
	    }, removeClass: function removeClass(e) {
	      return this.each(function (n) {
	        if ("className" in this) {
	          if (e === t) return W(this, "");i = W(this), J(this, e, n, i).split(/\s+/g).forEach(function (t) {
	            i = i.replace(q(t), " ");
	          }), W(this, i.trim());
	        }
	      });
	    }, toggleClass: function toggleClass(e, i) {
	      return e ? this.each(function (r) {
	        var o = n(this),
	            s = J(this, e, r, W(this));s.split(/\s+/g).forEach(function (e) {
	          (i === t ? !o.hasClass(e) : i) ? o.addClass(e) : o.removeClass(e);
	        });
	      }) : this;
	    }, scrollTop: function scrollTop(e) {
	      if (this.length) {
	        var n = "scrollTop" in this[0];return e === t ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function () {
	          this.scrollTop = e;
	        } : function () {
	          this.scrollTo(this.scrollX, e);
	        });
	      }
	    }, scrollLeft: function scrollLeft(e) {
	      if (this.length) {
	        var n = "scrollLeft" in this[0];return e === t ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function () {
	          this.scrollLeft = e;
	        } : function () {
	          this.scrollTo(e, this.scrollY);
	        });
	      }
	    }, position: function position() {
	      if (this.length) {
	        var t = this[0],
	            e = this.offsetParent(),
	            i = this.offset(),
	            r = d.test(e[0].nodeName) ? { top: 0, left: 0 } : e.offset();return i.top -= parseFloat(n(t).css("margin-top")) || 0, i.left -= parseFloat(n(t).css("margin-left")) || 0, r.top += parseFloat(n(e[0]).css("border-top-width")) || 0, r.left += parseFloat(n(e[0]).css("border-left-width")) || 0, { top: i.top - r.top, left: i.left - r.left };
	      }
	    }, offsetParent: function offsetParent() {
	      return this.map(function () {
	        for (var t = this.offsetParent || a.body; t && !d.test(t.nodeName) && "static" == n(t).css("position");) {
	          t = t.offsetParent;
	        }return t;
	      });
	    } }, n.fn.detach = n.fn.remove, ["width", "height"].forEach(function (e) {
	    var i = e.replace(/./, function (t) {
	      return t[0].toUpperCase();
	    });n.fn[e] = function (r) {
	      var o,
	          s = this[0];return r === t ? _(s) ? s["inner" + i] : $(s) ? s.documentElement["scroll" + i] : (o = this.offset()) && o[e] : this.each(function (t) {
	        s = n(this), s.css(e, J(this, r, t, s[e]()));
	      });
	    };
	  }), v.forEach(function (t, e) {
	    var i = e % 2;n.fn[t] = function () {
	      var t,
	          o,
	          r = n.map(arguments, function (e) {
	        return t = L(e), "object" == t || "array" == t || null == e ? e : T.fragment(e);
	      }),
	          s = this.length > 1;return r.length < 1 ? this : this.each(function (t, u) {
	        o = i ? u : u.parentNode, u = 0 == e ? u.nextSibling : 1 == e ? u.firstChild : 2 == e ? u : null;var f = n.contains(a.documentElement, o);r.forEach(function (t) {
	          if (s) t = t.cloneNode(!0);else if (!o) return n(t).remove();o.insertBefore(t, u), f && G(t, function (t) {
	            null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML);
	          });
	        });
	      });
	    }, n.fn[i ? t + "To" : "insert" + (e ? "Before" : "After")] = function (e) {
	      return n(e)[t](this), this;
	    };
	  }), T.Z.prototype = n.fn, T.uniq = N, T.deserializeValue = Y, n.zepto = T, n;
	}();window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), function (t) {
	  function l(t) {
	    return t._zid || (t._zid = e++);
	  }function h(t, e, n, i) {
	    if (e = p(e), e.ns) var r = d(e.ns);return (s[l(t)] || []).filter(function (t) {
	      return !(!t || e.e && t.e != e.e || e.ns && !r.test(t.ns) || n && l(t.fn) !== l(n) || i && t.sel != i);
	    });
	  }function p(t) {
	    var e = ("" + t).split(".");return { e: e[0], ns: e.slice(1).sort().join(" ") };
	  }function d(t) {
	    return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)");
	  }function m(t, e) {
	    return t.del && !u && t.e in f || !!e;
	  }function g(t) {
	    return c[t] || u && f[t] || t;
	  }function v(e, i, r, o, a, u, f) {
	    var h = l(e),
	        d = s[h] || (s[h] = []);i.split(/\s/).forEach(function (i) {
	      if ("ready" == i) return t(document).ready(r);var s = p(i);s.fn = r, s.sel = a, s.e in c && (r = function r(e) {
	        var n = e.relatedTarget;return !n || n !== this && !t.contains(this, n) ? s.fn.apply(this, arguments) : void 0;
	      }), s.del = u;var l = u || r;s.proxy = function (t) {
	        if (t = j(t), !t.isImmediatePropagationStopped()) {
	          t.data = o;var i = l.apply(e, t._args == n ? [t] : [t].concat(t._args));return i === !1 && (t.preventDefault(), t.stopPropagation()), i;
	        }
	      }, s.i = d.length, d.push(s), "addEventListener" in e && e.addEventListener(g(s.e), s.proxy, m(s, f));
	    });
	  }function y(t, e, n, i, r) {
	    var o = l(t);(e || "").split(/\s/).forEach(function (e) {
	      h(t, e, n, i).forEach(function (e) {
	        delete s[o][e.i], "removeEventListener" in t && t.removeEventListener(g(e.e), e.proxy, m(e, r));
	      });
	    });
	  }function j(e, i) {
	    return (i || !e.isDefaultPrevented) && (i || (i = e), t.each(E, function (t, n) {
	      var r = i[t];e[t] = function () {
	        return this[n] = x, r && r.apply(i, arguments);
	      }, e[n] = b;
	    }), (i.defaultPrevented !== n ? i.defaultPrevented : "returnValue" in i ? i.returnValue === !1 : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = x)), e;
	  }function S(t) {
	    var e,
	        i = { originalEvent: t };for (e in t) {
	      w.test(e) || t[e] === n || (i[e] = t[e]);
	    }return j(i, t);
	  }var n,
	      e = 1,
	      i = Array.prototype.slice,
	      r = t.isFunction,
	      o = function o(t) {
	    return "string" == typeof t;
	  },
	      s = {},
	      a = {},
	      u = "onfocusin" in window,
	      f = { focus: "focusin", blur: "focusout" },
	      c = { mouseenter: "mouseover", mouseleave: "mouseout" };a.click = a.mousedown = a.mouseup = a.mousemove = "MouseEvents", t.event = { add: v, remove: y }, t.proxy = function (e, n) {
	    var s = 2 in arguments && i.call(arguments, 2);if (r(e)) {
	      var a = function a() {
	        return e.apply(n, s ? s.concat(i.call(arguments)) : arguments);
	      };return a._zid = l(e), a;
	    }if (o(n)) return s ? (s.unshift(e[n], e), t.proxy.apply(null, s)) : t.proxy(e[n], e);throw new TypeError("expected function");
	  }, t.fn.bind = function (t, e, n) {
	    return this.on(t, e, n);
	  }, t.fn.unbind = function (t, e) {
	    return this.off(t, e);
	  }, t.fn.one = function (t, e, n, i) {
	    return this.on(t, e, n, i, 1);
	  };var x = function x() {
	    return !0;
	  },
	      b = function b() {
	    return !1;
	  },
	      w = /^([A-Z]|returnValue$|layer[XY]$)/,
	      E = { preventDefault: "isDefaultPrevented", stopImmediatePropagation: "isImmediatePropagationStopped", stopPropagation: "isPropagationStopped" };t.fn.delegate = function (t, e, n) {
	    return this.on(e, t, n);
	  }, t.fn.undelegate = function (t, e, n) {
	    return this.off(e, t, n);
	  }, t.fn.live = function (e, n) {
	    return t(document.body).delegate(this.selector, e, n), this;
	  }, t.fn.die = function (e, n) {
	    return t(document.body).undelegate(this.selector, e, n), this;
	  }, t.fn.on = function (e, s, a, u, f) {
	    var c,
	        l,
	        h = this;return e && !o(e) ? (t.each(e, function (t, e) {
	      h.on(t, s, a, e, f);
	    }), h) : (o(s) || r(u) || u === !1 || (u = a, a = s, s = n), (r(a) || a === !1) && (u = a, a = n), u === !1 && (u = b), h.each(function (n, r) {
	      f && (c = function c(t) {
	        return y(r, t.type, u), u.apply(this, arguments);
	      }), s && (l = function l(e) {
	        var n,
	            o = t(e.target).closest(s, r).get(0);return o && o !== r ? (n = t.extend(S(e), { currentTarget: o, liveFired: r }), (c || u).apply(o, [n].concat(i.call(arguments, 1)))) : void 0;
	      }), v(r, e, u, a, s, l || c);
	    }));
	  }, t.fn.off = function (e, i, s) {
	    var a = this;return e && !o(e) ? (t.each(e, function (t, e) {
	      a.off(t, i, e);
	    }), a) : (o(i) || r(s) || s === !1 || (s = i, i = n), s === !1 && (s = b), a.each(function () {
	      y(this, e, s, i);
	    }));
	  }, t.fn.trigger = function (e, n) {
	    return e = o(e) || t.isPlainObject(e) ? t.Event(e) : j(e), e._args = n, this.each(function () {
	      e.type in f && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n);
	    });
	  }, t.fn.triggerHandler = function (e, n) {
	    var i, r;return this.each(function (s, a) {
	      i = S(o(e) ? t.Event(e) : e), i._args = n, i.target = a, t.each(h(a, e.type || e), function (t, e) {
	        return r = e.proxy(i), i.isImmediatePropagationStopped() ? !1 : void 0;
	      });
	    }), r;
	  }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (e) {
	    t.fn[e] = function (t) {
	      return 0 in arguments ? this.bind(e, t) : this.trigger(e);
	    };
	  }), t.Event = function (t, e) {
	    o(t) || (e = t, t = e.type);var n = document.createEvent(a[t] || "Events"),
	        i = !0;if (e) for (var r in e) {
	      "bubbles" == r ? i = !!e[r] : n[r] = e[r];
	    }return n.initEvent(t, i, !0), j(n);
	  };
	}(Zepto), function (t) {
	  function h(e, n, i) {
	    var r = t.Event(n);return t(e).trigger(r, i), !r.isDefaultPrevented();
	  }function p(t, e, i, r) {
	    return t.global ? h(e || n, i, r) : void 0;
	  }function d(e) {
	    e.global && 0 === t.active++ && p(e, null, "ajaxStart");
	  }function m(e) {
	    e.global && ! --t.active && p(e, null, "ajaxStop");
	  }function g(t, e) {
	    var n = e.context;return e.beforeSend.call(n, t, e) === !1 || p(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void p(e, n, "ajaxSend", [t, e]);
	  }function v(t, e, n, i) {
	    var r = n.context,
	        o = "success";n.success.call(r, t, o, e), i && i.resolveWith(r, [t, o, e]), p(n, r, "ajaxSuccess", [e, n, t]), x(o, e, n);
	  }function y(t, e, n, i, r) {
	    var o = i.context;i.error.call(o, n, e, t), r && r.rejectWith(o, [n, e, t]), p(i, o, "ajaxError", [n, i, t || e]), x(e, n, i);
	  }function x(t, e, n) {
	    var i = n.context;n.complete.call(i, e, t), p(n, i, "ajaxComplete", [e, n]), m(n);
	  }function b() {}function w(t) {
	    return t && (t = t.split(";", 2)[0]), t && (t == f ? "html" : t == u ? "json" : s.test(t) ? "script" : a.test(t) && "xml") || "text";
	  }function E(t, e) {
	    return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?");
	  }function j(e) {
	    e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = E(e.url, e.data), e.data = void 0);
	  }function S(e, n, i, r) {
	    return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, i = void 0), { url: e, data: n, success: i, dataType: r };
	  }function C(e, n, i, r) {
	    var o,
	        s = t.isArray(n),
	        a = t.isPlainObject(n);t.each(n, function (n, u) {
	      o = t.type(u), r && (n = i ? r : r + "[" + (a || "object" == o || "array" == o ? n : "") + "]"), !r && s ? e.add(u.name, u.value) : "array" == o || !i && "object" == o ? C(e, u, i, n) : e.add(n, u);
	    });
	  }var i,
	      r,
	      e = 0,
	      n = window.document,
	      o = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	      s = /^(?:text|application)\/javascript/i,
	      a = /^(?:text|application)\/xml/i,
	      u = "application/json",
	      f = "text/html",
	      c = /^\s*$/,
	      l = n.createElement("a");l.href = window.location.href, t.active = 0, t.ajaxJSONP = function (i, r) {
	    if (!("type" in i)) return t.ajax(i);var f,
	        h,
	        o = i.jsonpCallback,
	        s = (t.isFunction(o) ? o() : o) || "jsonp" + ++e,
	        a = n.createElement("script"),
	        u = window[s],
	        c = function c(e) {
	      t(a).triggerHandler("error", e || "abort");
	    },
	        l = { abort: c };return r && r.promise(l), t(a).on("load error", function (e, n) {
	      clearTimeout(h), t(a).off().remove(), "error" != e.type && f ? v(f[0], l, i, r) : y(null, n || "error", l, i, r), window[s] = u, f && t.isFunction(u) && u(f[0]), u = f = void 0;
	    }), g(l, i) === !1 ? (c("abort"), l) : (window[s] = function () {
	      f = arguments;
	    }, a.src = i.url.replace(/\?(.+)=\?/, "?$1=" + s), n.head.appendChild(a), i.timeout > 0 && (h = setTimeout(function () {
	      c("timeout");
	    }, i.timeout)), l);
	  }, t.ajaxSettings = { type: "GET", beforeSend: b, success: b, error: b, complete: b, context: null, global: !0, xhr: function xhr() {
	      return new window.XMLHttpRequest();
	    }, accepts: { script: "text/javascript, application/javascript, application/x-javascript", json: u, xml: "application/xml, text/xml", html: f, text: "text/plain" }, crossDomain: !1, timeout: 0, processData: !0, cache: !0 }, t.ajax = function (e) {
	    var a,
	        o = t.extend({}, e || {}),
	        s = t.Deferred && t.Deferred();for (i in t.ajaxSettings) {
	      void 0 === o[i] && (o[i] = t.ajaxSettings[i]);
	    }d(o), o.crossDomain || (a = n.createElement("a"), a.href = o.url, a.href = a.href, o.crossDomain = l.protocol + "//" + l.host != a.protocol + "//" + a.host), o.url || (o.url = window.location.toString()), j(o);var u = o.dataType,
	        f = /\?.+=\?/.test(o.url);if (f && (u = "jsonp"), o.cache !== !1 && (e && e.cache === !0 || "script" != u && "jsonp" != u) || (o.url = E(o.url, "_=" + Date.now())), "jsonp" == u) return f || (o.url = E(o.url, o.jsonp ? o.jsonp + "=?" : o.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(o, s);var C,
	        h = o.accepts[u],
	        p = {},
	        m = function m(t, e) {
	      p[t.toLowerCase()] = [t, e];
	    },
	        x = /^([\w-]+:)\/\//.test(o.url) ? RegExp.$1 : window.location.protocol,
	        S = o.xhr(),
	        T = S.setRequestHeader;if (s && s.promise(S), o.crossDomain || m("X-Requested-With", "XMLHttpRequest"), m("Accept", h || "*/*"), (h = o.mimeType || h) && (h.indexOf(",") > -1 && (h = h.split(",", 2)[0]), S.overrideMimeType && S.overrideMimeType(h)), (o.contentType || o.contentType !== !1 && o.data && "GET" != o.type.toUpperCase()) && m("Content-Type", o.contentType || "application/x-www-form-urlencoded"), o.headers) for (r in o.headers) {
	      m(r, o.headers[r]);
	    }if (S.setRequestHeader = m, S.onreadystatechange = function () {
	      if (4 == S.readyState) {
	        S.onreadystatechange = b, clearTimeout(C);var e,
	            n = !1;if (S.status >= 200 && S.status < 300 || 304 == S.status || 0 == S.status && "file:" == x) {
	          u = u || w(o.mimeType || S.getResponseHeader("content-type")), e = S.responseText;try {
	            "script" == u ? (1, eval)(e) : "xml" == u ? e = S.responseXML : "json" == u && (e = c.test(e) ? null : t.parseJSON(e));
	          } catch (i) {
	            n = i;
	          }n ? y(n, "parsererror", S, o, s) : v(e, S, o, s);
	        } else y(S.statusText || null, S.status ? "error" : "abort", S, o, s);
	      }
	    }, g(S, o) === !1) return S.abort(), y(null, "abort", S, o, s), S;if (o.xhrFields) for (r in o.xhrFields) {
	      S[r] = o.xhrFields[r];
	    }var N = "async" in o ? o.async : !0;S.open(o.type, o.url, N, o.username, o.password);for (r in p) {
	      T.apply(S, p[r]);
	    }return o.timeout > 0 && (C = setTimeout(function () {
	      S.onreadystatechange = b, S.abort(), y(null, "timeout", S, o, s);
	    }, o.timeout)), S.send(o.data ? o.data : null), S;
	  }, t.get = function () {
	    return t.ajax(S.apply(null, arguments));
	  }, t.post = function () {
	    var e = S.apply(null, arguments);return e.type = "POST", t.ajax(e);
	  }, t.getJSON = function () {
	    var e = S.apply(null, arguments);return e.dataType = "json", t.ajax(e);
	  }, t.fn.load = function (e, n, i) {
	    if (!this.length) return this;var a,
	        r = this,
	        s = e.split(/\s/),
	        u = S(e, n, i),
	        f = u.success;return s.length > 1 && (u.url = s[0], a = s[1]), u.success = function (e) {
	      r.html(a ? t("<div>").html(e.replace(o, "")).find(a) : e), f && f.apply(r, arguments);
	    }, t.ajax(u), this;
	  };var T = encodeURIComponent;t.param = function (e, n) {
	    var i = [];return i.add = function (e, n) {
	      t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(T(e) + "=" + T(n));
	    }, C(i, e, n), i.join("&").replace(/%20/g, "+");
	  };
	}(Zepto), function (t) {
	  t.fn.serializeArray = function () {
	    var e,
	        n,
	        i = [],
	        r = function r(t) {
	      return t.forEach ? t.forEach(r) : void i.push({ name: e, value: t });
	    };return this[0] && t.each(this[0].elements, function (i, o) {
	      n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && r(t(o).val());
	    }), i;
	  }, t.fn.serialize = function () {
	    var t = [];return this.serializeArray().forEach(function (e) {
	      t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value));
	    }), t.join("&");
	  }, t.fn.submit = function (e) {
	    if (0 in arguments) this.bind("submit", e);else if (this.length) {
	      var n = t.Event("submit");this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit();
	    }return this;
	  };
	}(Zepto), function (t) {
	  "__proto__" in {} || t.extend(t.zepto, { Z: function Z(e, n) {
	      return e = e || [], t.extend(e, t.fn), e.selector = n || "", e.__Z = !0, e;
	    }, isZ: function isZ(e) {
	      return "array" === t.type(e) && "__Z" in e;
	    } });try {
	    getComputedStyle(void 0);
	  } catch (e) {
	    var n = getComputedStyle;window.getComputedStyle = function (t) {
	      try {
	        return n(t);
	      } catch (e) {
	        return null;
	      }
	    };
	  }
	}(Zepto);

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(109), __esModule: true };

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(113), __esModule: true };

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(115), __esModule: true };

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(116), __esModule: true };

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(117), __esModule: true };

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(118), __esModule: true };

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(34);
	__webpack_require__(142);
	module.exports = __webpack_require__(1).Array.from;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(1);
	var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
	module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(144);
	module.exports = __webpack_require__(1).Object.assign;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(145);
	var $Object = __webpack_require__(1).Object;
	module.exports = function create(P, D) {
	  return $Object.create(P, D);
	};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(146);
	var $Object = __webpack_require__(1).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(147);
	module.exports = __webpack_require__(1).Object.getPrototypeOf;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(148);
	module.exports = __webpack_require__(1).Object.keys;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(149);
	module.exports = __webpack_require__(1).Object.setPrototypeOf;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(153);
	module.exports = __webpack_require__(1).Object.values;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(53);
	__webpack_require__(34);
	__webpack_require__(54);
	__webpack_require__(150);
	__webpack_require__(154);
	__webpack_require__(155);
	module.exports = __webpack_require__(1).Promise;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(53);
	__webpack_require__(34);
	__webpack_require__(54);
	__webpack_require__(151);
	__webpack_require__(158);
	__webpack_require__(157);
	__webpack_require__(156);
	module.exports = __webpack_require__(1).Set;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(152);
	__webpack_require__(53);
	__webpack_require__(159);
	__webpack_require__(160);
	module.exports = __webpack_require__(1).Symbol;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(34);
	__webpack_require__(54);
	module.exports = __webpack_require__(52).f('iterator');


/***/ }),
/* 119 */
/***/ (function(module, exports) {

	module.exports = function () { /* empty */ };


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(25);

	module.exports = function (iter, ITERATOR) {
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(15);
	var toLength = __webpack_require__(32);
	var toAbsoluteIndex = __webpack_require__(141);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx = __webpack_require__(10);
	var IObject = __webpack_require__(41);
	var toObject = __webpack_require__(21);
	var toLength = __webpack_require__(32);
	var asc = __webpack_require__(124);
	module.exports = function (TYPE, $create) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  var create = $create || asc;
	  return function ($this, callbackfn, that) {
	    var O = toObject($this);
	    var self = IObject(O);
	    var f = ctx(callbackfn, that, 3);
	    var length = toLength(self.length);
	    var index = 0;
	    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var val, res;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      val = self[index];
	      res = f(val, index, O);
	      if (TYPE) {
	        if (IS_MAP) result[index] = res;   // map
	        else if (res) switch (TYPE) {
	          case 3: return true;             // some
	          case 5: return val;              // find
	          case 6: return index;            // findIndex
	          case 2: result.push(val);        // filter
	        } else if (IS_EVERY) return false; // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(6);
	var isArray = __webpack_require__(66);
	var SPECIES = __webpack_require__(4)('species');

	module.exports = function (original) {
	  var C;
	  if (isArray(original)) {
	    C = original.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(123);

	module.exports = function (original, length) {
	  return new (speciesConstructor(original))(length);
	};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var dP = __webpack_require__(7).f;
	var create = __webpack_require__(31);
	var redefineAll = __webpack_require__(46);
	var ctx = __webpack_require__(10);
	var anInstance = __webpack_require__(36);
	var forOf = __webpack_require__(25);
	var $iterDefine = __webpack_require__(42);
	var step = __webpack_require__(69);
	var setSpecies = __webpack_require__(78);
	var DESCRIPTORS = __webpack_require__(8);
	var fastKey = __webpack_require__(43).fastKey;
	var validate = __webpack_require__(81);
	var SIZE = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function (that, key) {
	  // fast case
	  var index = fastKey(key);
	  var entry;
	  if (index !== 'F') return that._i[index];
	  // frozen object case
	  for (entry = that._f; entry; entry = entry.n) {
	    if (entry.k == key) return entry;
	  }
	};

	module.exports = {
	  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._t = NAME;         // collection type
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
	          entry.r = true;
	          if (entry.p) entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function (key) {
	        var that = validate(this, NAME);
	        var entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.n;
	          var prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if (prev) prev.n = next;
	          if (next) next.p = prev;
	          if (that._f == entry) that._f = next;
	          if (that._l == entry) that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /* , that = undefined */) {
	        validate(this, NAME);
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	        var entry;
	        while (entry = entry ? entry.n : this._f) {
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while (entry && entry.r) entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(validate(this, NAME), key);
	      }
	    });
	    if (DESCRIPTORS) dP(C.prototype, 'size', {
	      get: function () {
	        return validate(this, NAME)[SIZE];
	      }
	    });
	    return C;
	  },
	  def: function (that, key, value) {
	    var entry = getEntry(that, key);
	    var prev, index;
	    // change existing entry
	    if (entry) {
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if (!that._f) that._f = entry;
	      if (prev) prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if (index !== 'F') that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function (C, NAME, IS_MAP) {
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function (iterated, kind) {
	      this._t = validate(iterated, NAME); // target
	      this._k = kind;                     // kind
	      this._l = undefined;                // previous
	    }, function () {
	      var that = this;
	      var kind = that._k;
	      var entry = that._l;
	      // revert to the last existing entry
	      while (entry && entry.r) entry = entry.p;
	      // get next entry
	      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if (kind == 'keys') return step(0, entry.k);
	      if (kind == 'values') return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(37);
	var from = __webpack_require__(120);
	module.exports = function (NAME) {
	  return function toJSON() {
	    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(3);
	var $export = __webpack_require__(2);
	var meta = __webpack_require__(43);
	var fails = __webpack_require__(13);
	var hide = __webpack_require__(11);
	var redefineAll = __webpack_require__(46);
	var forOf = __webpack_require__(25);
	var anInstance = __webpack_require__(36);
	var isObject = __webpack_require__(6);
	var setToStringTag = __webpack_require__(29);
	var dP = __webpack_require__(7).f;
	var each = __webpack_require__(122)(0);
	var DESCRIPTORS = __webpack_require__(8);

	module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
	  var Base = global[NAME];
	  var C = Base;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var proto = C && C.prototype;
	  var O = {};
	  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
	    new C().entries().next();
	  }))) {
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    C = wrapper(function (target, iterable) {
	      anInstance(target, C, NAME, '_c');
	      target._c = new Base();
	      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
	        anInstance(this, C, KEY);
	        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    IS_WEAK || dP(C.prototype, 'size', {
	      get: function () {
	        return this._c.size;
	      }
	    });
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);

	  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

	  return C;
	};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(7);
	var createDesc = __webpack_require__(28);

	module.exports = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(20);
	var gOPS = __webpack_require__(45);
	var pIE = __webpack_require__(27);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 130 */
/***/ (function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	  var un = that === undefined;
	  switch (args.length) {
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return fn.apply(that, args);
	};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(31);
	var descriptor = __webpack_require__(28);
	var setToStringTag = __webpack_require__(29);
	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(11)(IteratorPrototype, __webpack_require__(4)('iterator'), function () { return this; });

	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(3);
	var macrotask = __webpack_require__(80).set;
	var Observer = global.MutationObserver || global.WebKitMutationObserver;
	var process = global.process;
	var Promise = global.Promise;
	var isNode = __webpack_require__(24)(process) == 'process';

	module.exports = function () {
	  var head, last, notify;

	  var flush = function () {
	    var parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };

	  // Node.js
	  if (isNode) {
	    notify = function () {
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
	  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
	    var toggle = true;
	    var node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    var promise = Promise.resolve();
	    notify = function () {
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    } last = task;
	  };
	};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys = __webpack_require__(20);
	var gOPS = __webpack_require__(45);
	var pIE = __webpack_require__(27);
	var toObject = __webpack_require__(21);
	var IObject = __webpack_require__(41);
	var $assign = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(13)(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(7);
	var anObject = __webpack_require__(9);
	var getKeys = __webpack_require__(20);

	module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(15);
	var gOPN = __webpack_require__(71).f;
	var toString = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	var getKeys = __webpack_require__(20);
	var toIObject = __webpack_require__(15);
	var isEnum = __webpack_require__(27).f;
	module.exports = function (isEntries) {
	  return function (it) {
	    var O = toIObject(it);
	    var keys = getKeys(O);
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;
	    while (length > i) if (isEnum.call(O, key = keys[i++])) {
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-setmap-offrom/
	var $export = __webpack_require__(2);
	var aFunction = __webpack_require__(23);
	var ctx = __webpack_require__(10);
	var forOf = __webpack_require__(25);

	module.exports = function (COLLECTION) {
	  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
	    var mapFn = arguments[1];
	    var mapping, A, n, cb;
	    aFunction(this);
	    mapping = mapFn !== undefined;
	    if (mapping) aFunction(mapFn);
	    if (source == undefined) return new this();
	    A = [];
	    if (mapping) {
	      n = 0;
	      cb = ctx(mapFn, arguments[2], 2);
	      forOf(source, false, function (nextItem) {
	        A.push(cb(nextItem, n++));
	      });
	    } else {
	      forOf(source, false, A.push, A);
	    }
	    return new this(A);
	  } });
	};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-setmap-offrom/
	var $export = __webpack_require__(2);

	module.exports = function (COLLECTION) {
	  $export($export.S, COLLECTION, { of: function of() {
	    var length = arguments.length;
	    var A = new Array(length);
	    while (length--) A[length] = arguments[length];
	    return new this(A);
	  } });
	};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(6);
	var anObject = __webpack_require__(9);
	var check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = __webpack_require__(10)(Function.call, __webpack_require__(70).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(49);
	var defined = __webpack_require__(38);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(49);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ctx = __webpack_require__(10);
	var $export = __webpack_require__(2);
	var toObject = __webpack_require__(21);
	var call = __webpack_require__(67);
	var isArrayIter = __webpack_require__(65);
	var toLength = __webpack_require__(32);
	var createProperty = __webpack_require__(128);
	var getIterFn = __webpack_require__(82);

	$export($export.S + $export.F * !__webpack_require__(68)(function (iter) { Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    var O = toObject(arrayLike);
	    var C = typeof this == 'function' ? this : Array;
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var index = 0;
	    var iterFn = getIterFn(O);
	    var length, result, step, iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(119);
	var step = __webpack_require__(69);
	var Iterators = __webpack_require__(26);
	var toIObject = __webpack_require__(15);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(42)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(2);

	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(133) });


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(2);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(31) });


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(2);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(8), 'Object', { defineProperty: __webpack_require__(7).f });


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(21);
	var $getPrototypeOf = __webpack_require__(72);

	__webpack_require__(74)('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
	});


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(21);
	var $keys = __webpack_require__(20);

	__webpack_require__(74)('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(2);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(139).set });


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(30);
	var global = __webpack_require__(3);
	var ctx = __webpack_require__(10);
	var classof = __webpack_require__(37);
	var $export = __webpack_require__(2);
	var isObject = __webpack_require__(6);
	var aFunction = __webpack_require__(23);
	var anInstance = __webpack_require__(36);
	var forOf = __webpack_require__(25);
	var speciesConstructor = __webpack_require__(79);
	var task = __webpack_require__(80).set;
	var microtask = __webpack_require__(132)();
	var newPromiseCapabilityModule = __webpack_require__(44);
	var perform = __webpack_require__(75);
	var promiseResolve = __webpack_require__(76);
	var PROMISE = 'Promise';
	var TypeError = global.TypeError;
	var process = global.process;
	var $Promise = global[PROMISE];
	var isNode = classof(process) == 'process';
	var empty = function () { /* empty */ };
	var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
	var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1);
	    var FakePromise = (promise.constructor = {})[__webpack_require__(4)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch (e) { /* empty */ }
	}();

	// helpers
	var isThenable = function (it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function (promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v;
	    var ok = promise._s == 1;
	    var i = 0;
	    var run = function (reaction) {
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value);
	            if (domain) domain.exit();
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        reject(e);
	      }
	    };
	    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function (promise) {
	  task.call(global, function () {
	    var value = promise._v;
	    var unhandled = isUnhandled(promise);
	    var result, handler, console;
	    if (unhandled) {
	      result = perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if (unhandled && result.e) throw result.v;
	  });
	};
	var isUnhandled = function (promise) {
	  return promise._h !== 1 && (promise._a || promise._c).length === 0;
	};
	var onHandleUnhandled = function (promise) {
	  task.call(global, function () {
	    var handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function (value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function (value) {
	  var promise = this;
	  var then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};

	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(46)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
	    return C === $Promise || C === Wrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(29)($Promise, PROMISE);
	__webpack_require__(78)(PROMISE);
	Wrapper = __webpack_require__(1)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    var $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(68)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var values = [];
	      var index = 0;
	      var remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  }
	});


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(125);
	var validate = __webpack_require__(81);
	var SET = 'Set';

	// 23.2 Set Objects
	module.exports = __webpack_require__(127)(SET, function (get) {
	  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value) {
	    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
	  }
	}, strong);


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(3);
	var has = __webpack_require__(14);
	var DESCRIPTORS = __webpack_require__(8);
	var $export = __webpack_require__(2);
	var redefine = __webpack_require__(77);
	var META = __webpack_require__(43).KEY;
	var $fails = __webpack_require__(13);
	var shared = __webpack_require__(48);
	var setToStringTag = __webpack_require__(29);
	var uid = __webpack_require__(33);
	var wks = __webpack_require__(4);
	var wksExt = __webpack_require__(52);
	var wksDefine = __webpack_require__(51);
	var enumKeys = __webpack_require__(129);
	var isArray = __webpack_require__(66);
	var anObject = __webpack_require__(9);
	var isObject = __webpack_require__(6);
	var toIObject = __webpack_require__(15);
	var toPrimitive = __webpack_require__(50);
	var createDesc = __webpack_require__(28);
	var _create = __webpack_require__(31);
	var gOPNExt = __webpack_require__(135);
	var $GOPD = __webpack_require__(70);
	var $DP = __webpack_require__(7);
	var $keys = __webpack_require__(20);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(71).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(27).f = $propertyIsEnumerable;
	  __webpack_require__(45).f = $getOwnPropertySymbols;

	  if (DESCRIPTORS && !__webpack_require__(30)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(2);
	var $values = __webpack_require__(136)(false);

	$export($export.S, 'Object', {
	  values: function values(it) {
	    return $values(it);
	  }
	});


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-promise-finally
	'use strict';
	var $export = __webpack_require__(2);
	var core = __webpack_require__(1);
	var global = __webpack_require__(3);
	var speciesConstructor = __webpack_require__(79);
	var promiseResolve = __webpack_require__(76);

	$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
	  var C = speciesConstructor(this, core.Promise || global.Promise);
	  var isFunction = typeof onFinally == 'function';
	  return this.then(
	    isFunction ? function (x) {
	      return promiseResolve(C, onFinally()).then(function () { return x; });
	    } : onFinally,
	    isFunction ? function (e) {
	      return promiseResolve(C, onFinally()).then(function () { throw e; });
	    } : onFinally
	  );
	} });


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-promise-try
	var $export = __webpack_require__(2);
	var newPromiseCapability = __webpack_require__(44);
	var perform = __webpack_require__(75);

	$export($export.S, 'Promise', { 'try': function (callbackfn) {
	  var promiseCapability = newPromiseCapability.f(this);
	  var result = perform(callbackfn);
	  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
	  return promiseCapability.promise;
	} });


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
	__webpack_require__(137)('Set');


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
	__webpack_require__(138)('Set');


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(2);

	$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(126)('Set') });


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(51)('asyncIterator');


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(51)('observable');


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
	(function (window, document, Math) {
	var rAF = window.requestAnimationFrame	||
		window.webkitRequestAnimationFrame	||
		window.mozRequestAnimationFrame		||
		window.oRequestAnimationFrame		||
		window.msRequestAnimationFrame		||
		function (callback) { window.setTimeout(callback, 1000 / 60); };

	var utils = (function () {
		var me = {};

		var _elementStyle = document.createElement('div').style;
		var _vendor = (function () {
			var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
				transform,
				i = 0,
				l = vendors.length;

			for ( ; i < l; i++ ) {
				transform = vendors[i] + 'ransform';
				if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
			}

			return false;
		})();

		function _prefixStyle (style) {
			if ( _vendor === false ) return false;
			if ( _vendor === '' ) return style;
			return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
		}

		me.getTime = Date.now || function getTime () { return new Date().getTime(); };

		me.extend = function (target, obj) {
			for ( var i in obj ) {
				target[i] = obj[i];
			}
		};

		me.addEvent = function (el, type, fn, capture) {
			el.addEventListener(type, fn, !!capture);
		};

		me.removeEvent = function (el, type, fn, capture) {
			el.removeEventListener(type, fn, !!capture);
		};

		me.prefixPointerEvent = function (pointerEvent) {
			return window.MSPointerEvent ?
				'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8):
				pointerEvent;
		};

		me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
			var distance = current - start,
				speed = Math.abs(distance) / time,
				destination,
				duration;

			deceleration = deceleration === undefined ? 0.0006 : deceleration;

			destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
			duration = speed / deceleration;

			if ( destination < lowerMargin ) {
				destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
				distance = Math.abs(destination - current);
				duration = distance / speed;
			} else if ( destination > 0 ) {
				destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
				distance = Math.abs(current) + destination;
				duration = distance / speed;
			}

			return {
				destination: Math.round(destination),
				duration: duration
			};
		};

		var _transform = _prefixStyle('transform');

		me.extend(me, {
			hasTransform: _transform !== false,
			hasPerspective: _prefixStyle('perspective') in _elementStyle,
			hasTouch: 'ontouchstart' in window,
			hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
			hasTransition: _prefixStyle('transition') in _elementStyle
		});

		/*
		This should find all Android browsers lower than build 535.19 (both stock browser and webview)
		- galaxy S2 is ok
	    - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
	    - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	   - galaxy S3 is badAndroid (stock brower, webview)
	     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	   - galaxy S4 is badAndroid (stock brower, webview)
	     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	   - galaxy S5 is OK
	     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
	   - galaxy S6 is OK
	     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
	  */
		me.isBadAndroid = (function() {
			var appVersion = window.navigator.appVersion;
			// Android browser is not a chrome browser.
			if (/Android/.test(appVersion) && !(/Chrome\/\d/.test(appVersion))) {
				var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
				if(safariVersion && typeof safariVersion === "object" && safariVersion.length >= 2) {
					return parseFloat(safariVersion[1]) < 535.19;
				} else {
					return true;
				}
			} else {
				return false;
			}
		})();

		me.extend(me.style = {}, {
			transform: _transform,
			transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
			transitionDuration: _prefixStyle('transitionDuration'),
			transitionDelay: _prefixStyle('transitionDelay'),
			transformOrigin: _prefixStyle('transformOrigin')
		});

		me.hasClass = function (e, c) {
			var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
			return re.test(e.className);
		};

		me.addClass = function (e, c) {
			if ( me.hasClass(e, c) ) {
				return;
			}

			var newclass = e.className.split(' ');
			newclass.push(c);
			e.className = newclass.join(' ');
		};

		me.removeClass = function (e, c) {
			if ( !me.hasClass(e, c) ) {
				return;
			}

			var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
			e.className = e.className.replace(re, ' ');
		};

		me.offset = function (el) {
			var left = -el.offsetLeft,
				top = -el.offsetTop;

			// jshint -W084
			while (el = el.offsetParent) {
				left -= el.offsetLeft;
				top -= el.offsetTop;
			}
			// jshint +W084

			return {
				left: left,
				top: top
			};
		};

		me.preventDefaultException = function (el, exceptions) {
			for ( var i in exceptions ) {
				if ( exceptions[i].test(el[i]) ) {
					return true;
				}
			}

			return false;
		};

		me.extend(me.eventType = {}, {
			touchstart: 1,
			touchmove: 1,
			touchend: 1,

			mousedown: 2,
			mousemove: 2,
			mouseup: 2,

			pointerdown: 3,
			pointermove: 3,
			pointerup: 3,

			MSPointerDown: 3,
			MSPointerMove: 3,
			MSPointerUp: 3
		});

		me.extend(me.ease = {}, {
			quadratic: {
				style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				fn: function (k) {
					return k * ( 2 - k );
				}
			},
			circular: {
				style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',	// Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
				fn: function (k) {
					return Math.sqrt( 1 - ( --k * k ) );
				}
			},
			back: {
				style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				fn: function (k) {
					var b = 4;
					return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
				}
			},
			bounce: {
				style: '',
				fn: function (k) {
					if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
						return 7.5625 * k * k;
					} else if ( k < ( 2 / 2.75 ) ) {
						return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
					} else if ( k < ( 2.5 / 2.75 ) ) {
						return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
					} else {
						return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
					}
				}
			},
			elastic: {
				style: '',
				fn: function (k) {
					var f = 0.22,
						e = 0.4;

					if ( k === 0 ) { return 0; }
					if ( k == 1 ) { return 1; }

					return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
				}
			}
		});

		me.tap = function (e, eventName) {
			var ev = document.createEvent('Event');
			ev.initEvent(eventName, true, true);
			ev.pageX = e.pageX;
			ev.pageY = e.pageY;
			e.target.dispatchEvent(ev);
		};

		me.click = function (e) {
			var target = e.target,
				ev;

			if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
				ev = document.createEvent('MouseEvents');
				ev.initMouseEvent('click', true, true, e.view, 1,
					target.screenX, target.screenY, target.clientX, target.clientY,
					e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
					0, null);

				ev._constructed = true;
				target.dispatchEvent(ev);
			}
		};

		return me;
	})();
	function IScroll (el, options) {
		this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
		this.scroller = this.wrapper.children[0];
		this.scrollerStyle = this.scroller.style;		// cache style for better performance

		this.options = {

			resizeScrollbars: true,

			mouseWheelSpeed: 20,

			snapThreshold: 0.334,

	// INSERT POINT: OPTIONS
			disablePointer : !utils.hasPointer,
			disableTouch : utils.hasPointer || !utils.hasTouch,
			disableMouse : utils.hasPointer || utils.hasTouch,
			startX: 0,
			startY: 0,
			scrollY: true,
			directionLockThreshold: 5,
			momentum: true,

			bounce: true,
			bounceTime: 600,
			bounceEasing: '',

			preventDefault: true,
			preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },

			HWCompositing: true,
			useTransition: true,
			useTransform: true,
			bindToWrapper: typeof window.onmousedown === "undefined"
		};

		for ( var i in options ) {
			this.options[i] = options[i];
		}

		// Normalize options
		this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

		this.options.useTransition = utils.hasTransition && this.options.useTransition;
		this.options.useTransform = utils.hasTransform && this.options.useTransform;

		this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
		this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

		// If you want eventPassthrough I have to lock one of the axes
		this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
		this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

		// With eventPassthrough we also need lockDirection mechanism
		this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
		this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

		this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

		this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

		if ( this.options.tap === true ) {
			this.options.tap = 'tap';
		}

		if ( this.options.shrinkScrollbars == 'scale' ) {
			this.options.useTransition = false;
		}

		this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

	// INSERT POINT: NORMALIZATION

		// Some defaults
		this.x = 0;
		this.y = 0;
		this.directionX = 0;
		this.directionY = 0;
		this._events = {};

	// INSERT POINT: DEFAULTS

		this._init();
		this.refresh();

		this.scrollTo(this.options.startX, this.options.startY);
		this.enable();
	}

	IScroll.prototype = {
		version: '5.2.0',

		_init: function () {
			this._initEvents();

			if ( this.options.scrollbars || this.options.indicators ) {
				this._initIndicators();
			}

			if ( this.options.mouseWheel ) {
				this._initWheel();
			}

			if ( this.options.snap ) {
				this._initSnap();
			}

			if ( this.options.keyBindings ) {
				this._initKeys();
			}

	// INSERT POINT: _init

		},

		destroy: function () {
			this._initEvents(true);
			clearTimeout(this.resizeTimeout);
	 		this.resizeTimeout = null;
			this._execEvent('destroy');
		},

		_transitionEnd: function (e) {
			if ( e.target != this.scroller || !this.isInTransition ) {
				return;
			}

			this._transitionTime();
			if ( !this.resetPosition(this.options.bounceTime) ) {
				this.isInTransition = false;
				this._execEvent('scrollEnd');
			}
		},

		_start: function (e) {
			// React to left mouse button only
			if ( utils.eventType[e.type] != 1 ) {
			  // for button property
			  // http://unixpapa.com/js/mouse.html
			  var button;
		    if (!e.which) {
		      /* IE case */
		      button = (e.button < 2) ? 0 :
		               ((e.button == 4) ? 1 : 2);
		    } else {
		      /* All others */
		      button = e.button;
		    }
				if ( button !== 0 ) {
					return;
				}
			}

			if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
				return;
			}

			if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
				e.preventDefault();
			}

			var point = e.touches ? e.touches[0] : e,
				pos;

			this.initiated	= utils.eventType[e.type];
			this.moved		= false;
			this.distX		= 0;
			this.distY		= 0;
			this.directionX = 0;
			this.directionY = 0;
			this.directionLocked = 0;

			this.startTime = utils.getTime();

			if ( this.options.useTransition && this.isInTransition ) {
				this._transitionTime();
				this.isInTransition = false;
				pos = this.getComputedPosition();
				this._translate(Math.round(pos.x), Math.round(pos.y));
				this._execEvent('scrollEnd');
			} else if ( !this.options.useTransition && this.isAnimating ) {
				this.isAnimating = false;
				this._execEvent('scrollEnd');
			}

			this.startX    = this.x;
			this.startY    = this.y;
			this.absStartX = this.x;
			this.absStartY = this.y;
			this.pointX    = point.pageX;
			this.pointY    = point.pageY;

			this._execEvent('beforeScrollStart');
		},

		_move: function (e) {
			if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
				return;
			}

			if ( this.options.preventDefault ) {	// increases performance on Android? TODO: check!
				e.preventDefault();
			}

			var point		= e.touches ? e.touches[0] : e,
				deltaX		= point.pageX - this.pointX,
				deltaY		= point.pageY - this.pointY,
				timestamp	= utils.getTime(),
				newX, newY,
				absDistX, absDistY;

			this.pointX		= point.pageX;
			this.pointY		= point.pageY;

			this.distX		+= deltaX;
			this.distY		+= deltaY;
			absDistX		= Math.abs(this.distX);
			absDistY		= Math.abs(this.distY);

			// We need to move at least 10 pixels for the scrolling to initiate
			if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
				return;
			}

			// If you are scrolling in one direction lock the other
			if ( !this.directionLocked && !this.options.freeScroll ) {
				if ( absDistX > absDistY + this.options.directionLockThreshold ) {
					this.directionLocked = 'h';		// lock horizontally
				} else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
					this.directionLocked = 'v';		// lock vertically
				} else {
					this.directionLocked = 'n';		// no lock
				}
			}

			if ( this.directionLocked == 'h' ) {
				if ( this.options.eventPassthrough == 'vertical' ) {
					e.preventDefault();
				} else if ( this.options.eventPassthrough == 'horizontal' ) {
					this.initiated = false;
					return;
				}

				deltaY = 0;
			} else if ( this.directionLocked == 'v' ) {
				if ( this.options.eventPassthrough == 'horizontal' ) {
					e.preventDefault();
				} else if ( this.options.eventPassthrough == 'vertical' ) {
					this.initiated = false;
					return;
				}

				deltaX = 0;
			}

			deltaX = this.hasHorizontalScroll ? deltaX : 0;
			deltaY = this.hasVerticalScroll ? deltaY : 0;

			newX = this.x + deltaX;
			newY = this.y + deltaY;

			// Slow down if outside of the boundaries
			if ( newX > 0 || newX < this.maxScrollX ) {
				newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
			}
			if ( newY > 0 || newY < this.maxScrollY ) {
				newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
			}

			this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
			this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

			if ( !this.moved ) {
				this._execEvent('scrollStart');
			}

			this.moved = true;

			this._translate(newX, newY);

	/* REPLACE START: _move */

			if ( timestamp - this.startTime > 300 ) {
				this.startTime = timestamp;
				this.startX = this.x;
				this.startY = this.y;
			}

	/* REPLACE END: _move */

		},

		_end: function (e) {
			if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
				return;
			}

			if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
				e.preventDefault();
			}

			var point = e.changedTouches ? e.changedTouches[0] : e,
				momentumX,
				momentumY,
				duration = utils.getTime() - this.startTime,
				newX = Math.round(this.x),
				newY = Math.round(this.y),
				distanceX = Math.abs(newX - this.startX),
				distanceY = Math.abs(newY - this.startY),
				time = 0,
				easing = '';

			this.isInTransition = 0;
			this.initiated = 0;
			this.endTime = utils.getTime();

			// reset if we are outside of the boundaries
			if ( this.resetPosition(this.options.bounceTime) ) {
				return;
			}

			this.scrollTo(newX, newY);	// ensures that the last position is rounded

			// we scrolled less than 10 pixels
			if ( !this.moved ) {
				if ( this.options.tap ) {
					utils.tap(e, this.options.tap);
				}

				if ( this.options.click ) {
					utils.click(e);
				}

				this._execEvent('scrollCancel');
				return;
			}

			if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
				this._execEvent('flick');
				return;
			}

			// start momentum animation if needed
			if ( this.options.momentum && duration < 300 ) {
				momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
				momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
				newX = momentumX.destination;
				newY = momentumY.destination;
				time = Math.max(momentumX.duration, momentumY.duration);
				this.isInTransition = 1;
			}


			if ( this.options.snap ) {
				var snap = this._nearestSnap(newX, newY);
				this.currentPage = snap;
				time = this.options.snapSpeed || Math.max(
						Math.max(
							Math.min(Math.abs(newX - snap.x), 1000),
							Math.min(Math.abs(newY - snap.y), 1000)
						), 300);
				newX = snap.x;
				newY = snap.y;

				this.directionX = 0;
				this.directionY = 0;
				easing = this.options.bounceEasing;
			}

	// INSERT POINT: _end

			if ( newX != this.x || newY != this.y ) {
				// change easing function when scroller goes out of the boundaries
				if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
					easing = utils.ease.quadratic;
				}

				this.scrollTo(newX, newY, time, easing);
				return;
			}

			this._execEvent('scrollEnd');
		},

		_resize: function () {
			var that = this;

			clearTimeout(this.resizeTimeout);

			this.resizeTimeout = setTimeout(function () {
				that.refresh();
			}, this.options.resizePolling);
		},

		resetPosition: function (time) {
			var x = this.x,
				y = this.y;

			time = time || 0;

			if ( !this.hasHorizontalScroll || this.x > 0 ) {
				x = 0;
			} else if ( this.x < this.maxScrollX ) {
				x = this.maxScrollX;
			}

			if ( !this.hasVerticalScroll || this.y > 0 ) {
				y = 0;
			} else if ( this.y < this.maxScrollY ) {
				y = this.maxScrollY;
			}

			if ( x == this.x && y == this.y ) {
				return false;
			}

			this.scrollTo(x, y, time, this.options.bounceEasing);

			return true;
		},

		disable: function () {
			this.enabled = false;
		},

		enable: function () {
			this.enabled = true;
		},

		refresh: function () {
			var rf = this.wrapper.offsetHeight;		// Force reflow

			this.wrapperWidth	= this.wrapper.clientWidth;
			this.wrapperHeight	= this.wrapper.clientHeight;

	/* REPLACE START: refresh */

			this.scrollerWidth	= this.scroller.offsetWidth;
			this.scrollerHeight	= this.scroller.offsetHeight;

			this.maxScrollX		= this.wrapperWidth - this.scrollerWidth;
			this.maxScrollY		= this.wrapperHeight - this.scrollerHeight;

	/* REPLACE END: refresh */

			this.hasHorizontalScroll	= this.options.scrollX && this.maxScrollX < 0;
			this.hasVerticalScroll		= this.options.scrollY && this.maxScrollY < 0;

			if ( !this.hasHorizontalScroll ) {
				this.maxScrollX = 0;
				this.scrollerWidth = this.wrapperWidth;
			}

			if ( !this.hasVerticalScroll ) {
				this.maxScrollY = 0;
				this.scrollerHeight = this.wrapperHeight;
			}

			this.endTime = 0;
			this.directionX = 0;
			this.directionY = 0;

			this.wrapperOffset = utils.offset(this.wrapper);

			this._execEvent('refresh');

			this.resetPosition();

	// INSERT POINT: _refresh

		},

		on: function (type, fn) {
			if ( !this._events[type] ) {
				this._events[type] = [];
			}

			this._events[type].push(fn);
		},

		off: function (type, fn) {
			if ( !this._events[type] ) {
				return;
			}

			var index = this._events[type].indexOf(fn);

			if ( index > -1 ) {
				this._events[type].splice(index, 1);
			}
		},

		_execEvent: function (type) {
			if ( !this._events[type] ) {
				return;
			}

			var i = 0,
				l = this._events[type].length;

			if ( !l ) {
				return;
			}

			for ( ; i < l; i++ ) {
				this._events[type][i].apply(this, [].slice.call(arguments, 1));
			}
		},

		scrollBy: function (x, y, time, easing) {
			x = this.x + x;
			y = this.y + y;
			time = time || 0;

			this.scrollTo(x, y, time, easing);
		},

		scrollTo: function (x, y, time, easing) {
			easing = easing || utils.ease.circular;

			this.isInTransition = this.options.useTransition && time > 0;
			var transitionType = this.options.useTransition && easing.style;
			if ( !time || transitionType ) {
					if(transitionType) {
						this._transitionTimingFunction(easing.style);
						this._transitionTime(time);
					}
				this._translate(x, y);
			} else {
				this._animate(x, y, time, easing.fn);
			}
		},

		scrollToElement: function (el, time, offsetX, offsetY, easing) {
			el = el.nodeType ? el : this.scroller.querySelector(el);

			if ( !el ) {
				return;
			}

			var pos = utils.offset(el);

			pos.left -= this.wrapperOffset.left;
			pos.top  -= this.wrapperOffset.top;

			// if offsetX/Y are true we center the element to the screen
			if ( offsetX === true ) {
				offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
			}
			if ( offsetY === true ) {
				offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
			}

			pos.left -= offsetX || 0;
			pos.top  -= offsetY || 0;

			pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
			pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;

			time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;

			this.scrollTo(pos.left, pos.top, time, easing);
		},

		_transitionTime: function (time) {
			time = time || 0;

			var durationProp = utils.style.transitionDuration;
			this.scrollerStyle[durationProp] = time + 'ms';

			if ( !time && utils.isBadAndroid ) {
				this.scrollerStyle[durationProp] = '0.0001ms';
				// remove 0.0001ms
				var self = this;
				rAF(function() {
					if(self.scrollerStyle[durationProp] === '0.0001ms') {
						self.scrollerStyle[durationProp] = '0s';
					}
				});
			}


			if ( this.indicators ) {
				for ( var i = this.indicators.length; i--; ) {
					this.indicators[i].transitionTime(time);
				}
			}


	// INSERT POINT: _transitionTime

		},

		_transitionTimingFunction: function (easing) {
			this.scrollerStyle[utils.style.transitionTimingFunction] = easing;


			if ( this.indicators ) {
				for ( var i = this.indicators.length; i--; ) {
					this.indicators[i].transitionTimingFunction(easing);
				}
			}


	// INSERT POINT: _transitionTimingFunction

		},

		_translate: function (x, y) {
			if ( this.options.useTransform ) {

	/* REPLACE START: _translate */

				this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

	/* REPLACE END: _translate */

			} else {
				x = Math.round(x);
				y = Math.round(y);
				this.scrollerStyle.left = x + 'px';
				this.scrollerStyle.top = y + 'px';
			}

			this.x = x;
			this.y = y;


		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this.indicators[i].updatePosition();
			}
		}


	// INSERT POINT: _translate

		},

		_initEvents: function (remove) {
			var eventType = remove ? utils.removeEvent : utils.addEvent,
				target = this.options.bindToWrapper ? this.wrapper : window;

			eventType(window, 'orientationchange', this);
			eventType(window, 'resize', this);

			if ( this.options.click ) {
				eventType(this.wrapper, 'click', this, true);
			}

			if ( !this.options.disableMouse ) {
				eventType(this.wrapper, 'mousedown', this);
				eventType(target, 'mousemove', this);
				eventType(target, 'mousecancel', this);
				eventType(target, 'mouseup', this);
			}

			if ( utils.hasPointer && !this.options.disablePointer ) {
				eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
				eventType(target, utils.prefixPointerEvent('pointermove'), this);
				eventType(target, utils.prefixPointerEvent('pointercancel'), this);
				eventType(target, utils.prefixPointerEvent('pointerup'), this);
			}

			if ( utils.hasTouch && !this.options.disableTouch ) {
				eventType(this.wrapper, 'touchstart', this);
				eventType(target, 'touchmove', this);
				eventType(target, 'touchcancel', this);
				eventType(target, 'touchend', this);
			}

			eventType(this.scroller, 'transitionend', this);
			eventType(this.scroller, 'webkitTransitionEnd', this);
			eventType(this.scroller, 'oTransitionEnd', this);
			eventType(this.scroller, 'MSTransitionEnd', this);
		},

		getComputedPosition: function () {
			var matrix = window.getComputedStyle(this.scroller, null),
				x, y;

			if ( this.options.useTransform ) {
				matrix = matrix[utils.style.transform].split(')')[0].split(', ');
				x = +(matrix[12] || matrix[4]);
				y = +(matrix[13] || matrix[5]);
			} else {
				x = +matrix.left.replace(/[^-\d.]/g, '');
				y = +matrix.top.replace(/[^-\d.]/g, '');
			}

			return { x: x, y: y };
		},
		_initIndicators: function () {
			var interactive = this.options.interactiveScrollbars,
				customStyle = typeof this.options.scrollbars != 'string',
				indicators = [],
				indicator;

			var that = this;

			this.indicators = [];

			if ( this.options.scrollbars ) {
				// Vertical scrollbar
				if ( this.options.scrollY ) {
					indicator = {
						el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
						interactive: interactive,
						defaultScrollbars: true,
						customStyle: customStyle,
						resize: this.options.resizeScrollbars,
						shrink: this.options.shrinkScrollbars,
						fade: this.options.fadeScrollbars,
						listenX: false
					};

					this.wrapper.appendChild(indicator.el);
					indicators.push(indicator);
				}

				// Horizontal scrollbar
				if ( this.options.scrollX ) {
					indicator = {
						el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
						interactive: interactive,
						defaultScrollbars: true,
						customStyle: customStyle,
						resize: this.options.resizeScrollbars,
						shrink: this.options.shrinkScrollbars,
						fade: this.options.fadeScrollbars,
						listenY: false
					};

					this.wrapper.appendChild(indicator.el);
					indicators.push(indicator);
				}
			}

			if ( this.options.indicators ) {
				// TODO: check concat compatibility
				indicators = indicators.concat(this.options.indicators);
			}

			for ( var i = indicators.length; i--; ) {
				this.indicators.push( new Indicator(this, indicators[i]) );
			}

			// TODO: check if we can use array.map (wide compatibility and performance issues)
			function _indicatorsMap (fn) {
				if (that.indicators) {
					for ( var i = that.indicators.length; i--; ) {
						fn.call(that.indicators[i]);
					}
				}
			}

			if ( this.options.fadeScrollbars ) {
				this.on('scrollEnd', function () {
					_indicatorsMap(function () {
						this.fade();
					});
				});

				this.on('scrollCancel', function () {
					_indicatorsMap(function () {
						this.fade();
					});
				});

				this.on('scrollStart', function () {
					_indicatorsMap(function () {
						this.fade(1);
					});
				});

				this.on('beforeScrollStart', function () {
					_indicatorsMap(function () {
						this.fade(1, true);
					});
				});
			}


			this.on('refresh', function () {
				_indicatorsMap(function () {
					this.refresh();
				});
			});

			this.on('destroy', function () {
				_indicatorsMap(function () {
					this.destroy();
				});

				delete this.indicators;
			});
		},

		_initWheel: function () {
			utils.addEvent(this.wrapper, 'wheel', this);
			utils.addEvent(this.wrapper, 'mousewheel', this);
			utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

			this.on('destroy', function () {
				clearTimeout(this.wheelTimeout);
				this.wheelTimeout = null;
				utils.removeEvent(this.wrapper, 'wheel', this);
				utils.removeEvent(this.wrapper, 'mousewheel', this);
				utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
			});
		},

		_wheel: function (e) {
			if ( !this.enabled ) {
				return;
			}

			e.preventDefault();

			var wheelDeltaX, wheelDeltaY,
				newX, newY,
				that = this;

			if ( this.wheelTimeout === undefined ) {
				that._execEvent('scrollStart');
			}

			// Execute the scrollEnd event after 400ms the wheel stopped scrolling
			clearTimeout(this.wheelTimeout);
			this.wheelTimeout = setTimeout(function () {
				if(!that.options.snap) {
					that._execEvent('scrollEnd');
				}
				that.wheelTimeout = undefined;
			}, 400);

			if ( 'deltaX' in e ) {
				if (e.deltaMode === 1) {
					wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
					wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
				} else {
					wheelDeltaX = -e.deltaX;
					wheelDeltaY = -e.deltaY;
				}
			} else if ( 'wheelDeltaX' in e ) {
				wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
				wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
			} else if ( 'wheelDelta' in e ) {
				wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
			} else if ( 'detail' in e ) {
				wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
			} else {
				return;
			}

			wheelDeltaX *= this.options.invertWheelDirection;
			wheelDeltaY *= this.options.invertWheelDirection;

			if ( !this.hasVerticalScroll ) {
				wheelDeltaX = wheelDeltaY;
				wheelDeltaY = 0;
			}

			if ( this.options.snap ) {
				newX = this.currentPage.pageX;
				newY = this.currentPage.pageY;

				if ( wheelDeltaX > 0 ) {
					newX--;
				} else if ( wheelDeltaX < 0 ) {
					newX++;
				}

				if ( wheelDeltaY > 0 ) {
					newY--;
				} else if ( wheelDeltaY < 0 ) {
					newY++;
				}

				this.goToPage(newX, newY);

				return;
			}

			newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
			newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

			this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
			this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

			if ( newX > 0 ) {
				newX = 0;
			} else if ( newX < this.maxScrollX ) {
				newX = this.maxScrollX;
			}

			if ( newY > 0 ) {
				newY = 0;
			} else if ( newY < this.maxScrollY ) {
				newY = this.maxScrollY;
			}

			this.scrollTo(newX, newY, 0);

	// INSERT POINT: _wheel
		},

		_initSnap: function () {
			this.currentPage = {};

			if ( typeof this.options.snap == 'string' ) {
				this.options.snap = this.scroller.querySelectorAll(this.options.snap);
			}

			this.on('refresh', function () {
				var i = 0, l,
					m = 0, n,
					cx, cy,
					x = 0, y,
					stepX = this.options.snapStepX || this.wrapperWidth,
					stepY = this.options.snapStepY || this.wrapperHeight,
					el;

				this.pages = [];

				if ( !this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight ) {
					return;
				}

				if ( this.options.snap === true ) {
					cx = Math.round( stepX / 2 );
					cy = Math.round( stepY / 2 );

					while ( x > -this.scrollerWidth ) {
						this.pages[i] = [];
						l = 0;
						y = 0;

						while ( y > -this.scrollerHeight ) {
							this.pages[i][l] = {
								x: Math.max(x, this.maxScrollX),
								y: Math.max(y, this.maxScrollY),
								width: stepX,
								height: stepY,
								cx: x - cx,
								cy: y - cy
							};

							y -= stepY;
							l++;
						}

						x -= stepX;
						i++;
					}
				} else {
					el = this.options.snap;
					l = el.length;
					n = -1;

					for ( ; i < l; i++ ) {
						if ( i === 0 || el[i].offsetLeft <= el[i-1].offsetLeft ) {
							m = 0;
							n++;
						}

						if ( !this.pages[m] ) {
							this.pages[m] = [];
						}

						x = Math.max(-el[i].offsetLeft, this.maxScrollX);
						y = Math.max(-el[i].offsetTop, this.maxScrollY);
						cx = x - Math.round(el[i].offsetWidth / 2);
						cy = y - Math.round(el[i].offsetHeight / 2);

						this.pages[m][n] = {
							x: x,
							y: y,
							width: el[i].offsetWidth,
							height: el[i].offsetHeight,
							cx: cx,
							cy: cy
						};

						if ( x > this.maxScrollX ) {
							m++;
						}
					}
				}

				this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

				// Update snap threshold if needed
				if ( this.options.snapThreshold % 1 === 0 ) {
					this.snapThresholdX = this.options.snapThreshold;
					this.snapThresholdY = this.options.snapThreshold;
				} else {
					this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
					this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
				}
			});

			this.on('flick', function () {
				var time = this.options.snapSpeed || Math.max(
						Math.max(
							Math.min(Math.abs(this.x - this.startX), 1000),
							Math.min(Math.abs(this.y - this.startY), 1000)
						), 300);

				this.goToPage(
					this.currentPage.pageX + this.directionX,
					this.currentPage.pageY + this.directionY,
					time
				);
			});
		},

		_nearestSnap: function (x, y) {
			if ( !this.pages.length ) {
				return { x: 0, y: 0, pageX: 0, pageY: 0 };
			}

			var i = 0,
				l = this.pages.length,
				m = 0;

			// Check if we exceeded the snap threshold
			if ( Math.abs(x - this.absStartX) < this.snapThresholdX &&
				Math.abs(y - this.absStartY) < this.snapThresholdY ) {
				return this.currentPage;
			}

			if ( x > 0 ) {
				x = 0;
			} else if ( x < this.maxScrollX ) {
				x = this.maxScrollX;
			}

			if ( y > 0 ) {
				y = 0;
			} else if ( y < this.maxScrollY ) {
				y = this.maxScrollY;
			}

			for ( ; i < l; i++ ) {
				if ( x >= this.pages[i][0].cx ) {
					x = this.pages[i][0].x;
					break;
				}
			}

			l = this.pages[i].length;

			for ( ; m < l; m++ ) {
				if ( y >= this.pages[0][m].cy ) {
					y = this.pages[0][m].y;
					break;
				}
			}

			if ( i == this.currentPage.pageX ) {
				i += this.directionX;

				if ( i < 0 ) {
					i = 0;
				} else if ( i >= this.pages.length ) {
					i = this.pages.length - 1;
				}

				x = this.pages[i][0].x;
			}

			if ( m == this.currentPage.pageY ) {
				m += this.directionY;

				if ( m < 0 ) {
					m = 0;
				} else if ( m >= this.pages[0].length ) {
					m = this.pages[0].length - 1;
				}

				y = this.pages[0][m].y;
			}

			return {
				x: x,
				y: y,
				pageX: i,
				pageY: m
			};
		},

		goToPage: function (x, y, time, easing) {
			easing = easing || this.options.bounceEasing;

			if ( x >= this.pages.length ) {
				x = this.pages.length - 1;
			} else if ( x < 0 ) {
				x = 0;
			}

			if ( y >= this.pages[x].length ) {
				y = this.pages[x].length - 1;
			} else if ( y < 0 ) {
				y = 0;
			}

			var posX = this.pages[x][y].x,
				posY = this.pages[x][y].y;

			time = time === undefined ? this.options.snapSpeed || Math.max(
				Math.max(
					Math.min(Math.abs(posX - this.x), 1000),
					Math.min(Math.abs(posY - this.y), 1000)
				), 300) : time;

			this.currentPage = {
				x: posX,
				y: posY,
				pageX: x,
				pageY: y
			};

			this.scrollTo(posX, posY, time, easing);
		},

		next: function (time, easing) {
			var x = this.currentPage.pageX,
				y = this.currentPage.pageY;

			x++;

			if ( x >= this.pages.length && this.hasVerticalScroll ) {
				x = 0;
				y++;
			}

			this.goToPage(x, y, time, easing);
		},

		prev: function (time, easing) {
			var x = this.currentPage.pageX,
				y = this.currentPage.pageY;

			x--;

			if ( x < 0 && this.hasVerticalScroll ) {
				x = 0;
				y--;
			}

			this.goToPage(x, y, time, easing);
		},

		_initKeys: function (e) {
			// default key bindings
			var keys = {
				pageUp: 33,
				pageDown: 34,
				end: 35,
				home: 36,
				left: 37,
				up: 38,
				right: 39,
				down: 40
			};
			var i;

			// if you give me characters I give you keycode
			if ( typeof this.options.keyBindings == 'object' ) {
				for ( i in this.options.keyBindings ) {
					if ( typeof this.options.keyBindings[i] == 'string' ) {
						this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
					}
				}
			} else {
				this.options.keyBindings = {};
			}

			for ( i in keys ) {
				this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
			}

			utils.addEvent(window, 'keydown', this);

			this.on('destroy', function () {
				utils.removeEvent(window, 'keydown', this);
			});
		},

		_key: function (e) {
			if ( !this.enabled ) {
				return;
			}

			var snap = this.options.snap,	// we are using this alot, better to cache it
				newX = snap ? this.currentPage.pageX : this.x,
				newY = snap ? this.currentPage.pageY : this.y,
				now = utils.getTime(),
				prevTime = this.keyTime || 0,
				acceleration = 0.250,
				pos;

			if ( this.options.useTransition && this.isInTransition ) {
				pos = this.getComputedPosition();

				this._translate(Math.round(pos.x), Math.round(pos.y));
				this.isInTransition = false;
			}

			this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

			switch ( e.keyCode ) {
				case this.options.keyBindings.pageUp:
					if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
						newX += snap ? 1 : this.wrapperWidth;
					} else {
						newY += snap ? 1 : this.wrapperHeight;
					}
					break;
				case this.options.keyBindings.pageDown:
					if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
						newX -= snap ? 1 : this.wrapperWidth;
					} else {
						newY -= snap ? 1 : this.wrapperHeight;
					}
					break;
				case this.options.keyBindings.end:
					newX = snap ? this.pages.length-1 : this.maxScrollX;
					newY = snap ? this.pages[0].length-1 : this.maxScrollY;
					break;
				case this.options.keyBindings.home:
					newX = 0;
					newY = 0;
					break;
				case this.options.keyBindings.left:
					newX += snap ? -1 : 5 + this.keyAcceleration>>0;
					break;
				case this.options.keyBindings.up:
					newY += snap ? 1 : 5 + this.keyAcceleration>>0;
					break;
				case this.options.keyBindings.right:
					newX -= snap ? -1 : 5 + this.keyAcceleration>>0;
					break;
				case this.options.keyBindings.down:
					newY -= snap ? 1 : 5 + this.keyAcceleration>>0;
					break;
				default:
					return;
			}

			if ( snap ) {
				this.goToPage(newX, newY);
				return;
			}

			if ( newX > 0 ) {
				newX = 0;
				this.keyAcceleration = 0;
			} else if ( newX < this.maxScrollX ) {
				newX = this.maxScrollX;
				this.keyAcceleration = 0;
			}

			if ( newY > 0 ) {
				newY = 0;
				this.keyAcceleration = 0;
			} else if ( newY < this.maxScrollY ) {
				newY = this.maxScrollY;
				this.keyAcceleration = 0;
			}

			this.scrollTo(newX, newY, 0);

			this.keyTime = now;
		},

		_animate: function (destX, destY, duration, easingFn) {
			var that = this,
				startX = this.x,
				startY = this.y,
				startTime = utils.getTime(),
				destTime = startTime + duration;

			function step () {
				var now = utils.getTime(),
					newX, newY,
					easing;

				if ( now >= destTime ) {
					that.isAnimating = false;
					that._translate(destX, destY);

					if ( !that.resetPosition(that.options.bounceTime) ) {
						that._execEvent('scrollEnd');
					}

					return;
				}

				now = ( now - startTime ) / duration;
				easing = easingFn(now);
				newX = ( destX - startX ) * easing + startX;
				newY = ( destY - startY ) * easing + startY;
				that._translate(newX, newY);

				if ( that.isAnimating ) {
					rAF(step);
				}
			}

			this.isAnimating = true;
			step();
		},
		handleEvent: function (e) {
			switch ( e.type ) {
				case 'touchstart':
				case 'pointerdown':
				case 'MSPointerDown':
				case 'mousedown':
					this._start(e);
					break;
				case 'touchmove':
				case 'pointermove':
				case 'MSPointerMove':
				case 'mousemove':
					this._move(e);
					break;
				case 'touchend':
				case 'pointerup':
				case 'MSPointerUp':
				case 'mouseup':
				case 'touchcancel':
				case 'pointercancel':
				case 'MSPointerCancel':
				case 'mousecancel':
					this._end(e);
					break;
				case 'orientationchange':
				case 'resize':
					this._resize();
					break;
				case 'transitionend':
				case 'webkitTransitionEnd':
				case 'oTransitionEnd':
				case 'MSTransitionEnd':
					this._transitionEnd(e);
					break;
				case 'wheel':
				case 'DOMMouseScroll':
				case 'mousewheel':
					this._wheel(e);
					break;
				case 'keydown':
					this._key(e);
					break;
				case 'click':
					if ( this.enabled && !e._constructed ) {
						e.preventDefault();
						e.stopPropagation();
					}
					break;
			}
		}
	};
	function createDefaultScrollbar (direction, interactive, type) {
		var scrollbar = document.createElement('div'),
			indicator = document.createElement('div');

		if ( type === true ) {
			scrollbar.style.cssText = 'position:absolute;z-index:9999';
			indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
		}

		indicator.className = 'iScrollIndicator';

		if ( direction == 'h' ) {
			if ( type === true ) {
				scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
				indicator.style.height = '100%';
			}
			scrollbar.className = 'iScrollHorizontalScrollbar';
		} else {
			if ( type === true ) {
				scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
				indicator.style.width = '100%';
			}
			scrollbar.className = 'iScrollVerticalScrollbar';
		}

		scrollbar.style.cssText += ';overflow:hidden';

		if ( !interactive ) {
			scrollbar.style.pointerEvents = 'none';
		}

		scrollbar.appendChild(indicator);

		return scrollbar;
	}

	function Indicator (scroller, options) {
		this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
		this.wrapperStyle = this.wrapper.style;
		this.indicator = this.wrapper.children[0];
		this.indicatorStyle = this.indicator.style;
		this.scroller = scroller;

		this.options = {
			listenX: true,
			listenY: true,
			interactive: false,
			resize: true,
			defaultScrollbars: false,
			shrink: false,
			fade: false,
			speedRatioX: 0,
			speedRatioY: 0
		};

		for ( var i in options ) {
			this.options[i] = options[i];
		}

		this.sizeRatioX = 1;
		this.sizeRatioY = 1;
		this.maxPosX = 0;
		this.maxPosY = 0;

		if ( this.options.interactive ) {
			if ( !this.options.disableTouch ) {
				utils.addEvent(this.indicator, 'touchstart', this);
				utils.addEvent(window, 'touchend', this);
			}
			if ( !this.options.disablePointer ) {
				utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
				utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
			}
			if ( !this.options.disableMouse ) {
				utils.addEvent(this.indicator, 'mousedown', this);
				utils.addEvent(window, 'mouseup', this);
			}
		}

		if ( this.options.fade ) {
			this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
			var durationProp = utils.style.transitionDuration;
			this.wrapperStyle[durationProp] = utils.isBadAndroid ? '0.0001ms' : '0ms';
			// remove 0.0001ms
			var self = this;
			if(utils.isBadAndroid) {
				rAF(function() {
					if(self.wrapperStyle[durationProp] === '0.0001ms') {
						self.wrapperStyle[durationProp] = '0s';
					}
				});
			}
			this.wrapperStyle.opacity = '0';
		}
	}

	Indicator.prototype = {
		handleEvent: function (e) {
			switch ( e.type ) {
				case 'touchstart':
				case 'pointerdown':
				case 'MSPointerDown':
				case 'mousedown':
					this._start(e);
					break;
				case 'touchmove':
				case 'pointermove':
				case 'MSPointerMove':
				case 'mousemove':
					this._move(e);
					break;
				case 'touchend':
				case 'pointerup':
				case 'MSPointerUp':
				case 'mouseup':
				case 'touchcancel':
				case 'pointercancel':
				case 'MSPointerCancel':
				case 'mousecancel':
					this._end(e);
					break;
			}
		},

		destroy: function () {
			if ( this.options.fadeScrollbars ) {
				clearTimeout(this.fadeTimeout);
				this.fadeTimeout = null;
			}
			if ( this.options.interactive ) {
				utils.removeEvent(this.indicator, 'touchstart', this);
				utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
				utils.removeEvent(this.indicator, 'mousedown', this);

				utils.removeEvent(window, 'touchmove', this);
				utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
				utils.removeEvent(window, 'mousemove', this);

				utils.removeEvent(window, 'touchend', this);
				utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
				utils.removeEvent(window, 'mouseup', this);
			}

			if ( this.options.defaultScrollbars ) {
				this.wrapper.parentNode.removeChild(this.wrapper);
			}
		},

		_start: function (e) {
			var point = e.touches ? e.touches[0] : e;

			e.preventDefault();
			e.stopPropagation();

			this.transitionTime();

			this.initiated = true;
			this.moved = false;
			this.lastPointX	= point.pageX;
			this.lastPointY	= point.pageY;

			this.startTime	= utils.getTime();

			if ( !this.options.disableTouch ) {
				utils.addEvent(window, 'touchmove', this);
			}
			if ( !this.options.disablePointer ) {
				utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
			}
			if ( !this.options.disableMouse ) {
				utils.addEvent(window, 'mousemove', this);
			}

			this.scroller._execEvent('beforeScrollStart');
		},

		_move: function (e) {
			var point = e.touches ? e.touches[0] : e,
				deltaX, deltaY,
				newX, newY,
				timestamp = utils.getTime();

			if ( !this.moved ) {
				this.scroller._execEvent('scrollStart');
			}

			this.moved = true;

			deltaX = point.pageX - this.lastPointX;
			this.lastPointX = point.pageX;

			deltaY = point.pageY - this.lastPointY;
			this.lastPointY = point.pageY;

			newX = this.x + deltaX;
			newY = this.y + deltaY;

			this._pos(newX, newY);

	// INSERT POINT: indicator._move

			e.preventDefault();
			e.stopPropagation();
		},

		_end: function (e) {
			if ( !this.initiated ) {
				return;
			}

			this.initiated = false;

			e.preventDefault();
			e.stopPropagation();

			utils.removeEvent(window, 'touchmove', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
			utils.removeEvent(window, 'mousemove', this);

			if ( this.scroller.options.snap ) {
				var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

				var time = this.options.snapSpeed || Math.max(
						Math.max(
							Math.min(Math.abs(this.scroller.x - snap.x), 1000),
							Math.min(Math.abs(this.scroller.y - snap.y), 1000)
						), 300);

				if ( this.scroller.x != snap.x || this.scroller.y != snap.y ) {
					this.scroller.directionX = 0;
					this.scroller.directionY = 0;
					this.scroller.currentPage = snap;
					this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
				}
			}

			if ( this.moved ) {
				this.scroller._execEvent('scrollEnd');
			}
		},

		transitionTime: function (time) {
			time = time || 0;
			var durationProp = utils.style.transitionDuration;
			this.indicatorStyle[durationProp] = time + 'ms';

			if ( !time && utils.isBadAndroid ) {
				this.indicatorStyle[durationProp] = '0.0001ms';
				// remove 0.0001ms
				var self = this;
				rAF(function() {
					if(self.indicatorStyle[durationProp] === '0.0001ms') {
						self.indicatorStyle[durationProp] = '0s';
					}
				});
			}
		},

		transitionTimingFunction: function (easing) {
			this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
		},

		refresh: function () {
			this.transitionTime();

			if ( this.options.listenX && !this.options.listenY ) {
				this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
			} else if ( this.options.listenY && !this.options.listenX ) {
				this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
			} else {
				this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
			}

			if ( this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ) {
				utils.addClass(this.wrapper, 'iScrollBothScrollbars');
				utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

				if ( this.options.defaultScrollbars && this.options.customStyle ) {
					if ( this.options.listenX ) {
						this.wrapper.style.right = '8px';
					} else {
						this.wrapper.style.bottom = '8px';
					}
				}
			} else {
				utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
				utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

				if ( this.options.defaultScrollbars && this.options.customStyle ) {
					if ( this.options.listenX ) {
						this.wrapper.style.right = '2px';
					} else {
						this.wrapper.style.bottom = '2px';
					}
				}
			}

			var r = this.wrapper.offsetHeight;	// force refresh

			if ( this.options.listenX ) {
				this.wrapperWidth = this.wrapper.clientWidth;
				if ( this.options.resize ) {
					this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
					this.indicatorStyle.width = this.indicatorWidth + 'px';
				} else {
					this.indicatorWidth = this.indicator.clientWidth;
				}

				this.maxPosX = this.wrapperWidth - this.indicatorWidth;

				if ( this.options.shrink == 'clip' ) {
					this.minBoundaryX = -this.indicatorWidth + 8;
					this.maxBoundaryX = this.wrapperWidth - 8;
				} else {
					this.minBoundaryX = 0;
					this.maxBoundaryX = this.maxPosX;
				}

				this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));
			}

			if ( this.options.listenY ) {
				this.wrapperHeight = this.wrapper.clientHeight;
				if ( this.options.resize ) {
					this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
					this.indicatorStyle.height = this.indicatorHeight + 'px';
				} else {
					this.indicatorHeight = this.indicator.clientHeight;
				}

				this.maxPosY = this.wrapperHeight - this.indicatorHeight;

				if ( this.options.shrink == 'clip' ) {
					this.minBoundaryY = -this.indicatorHeight + 8;
					this.maxBoundaryY = this.wrapperHeight - 8;
				} else {
					this.minBoundaryY = 0;
					this.maxBoundaryY = this.maxPosY;
				}

				this.maxPosY = this.wrapperHeight - this.indicatorHeight;
				this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
			}

			this.updatePosition();
		},

		updatePosition: function () {
			var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
				y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

			if ( !this.options.ignoreBoundaries ) {
				if ( x < this.minBoundaryX ) {
					if ( this.options.shrink == 'scale' ) {
						this.width = Math.max(this.indicatorWidth + x, 8);
						this.indicatorStyle.width = this.width + 'px';
					}
					x = this.minBoundaryX;
				} else if ( x > this.maxBoundaryX ) {
					if ( this.options.shrink == 'scale' ) {
						this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
						this.indicatorStyle.width = this.width + 'px';
						x = this.maxPosX + this.indicatorWidth - this.width;
					} else {
						x = this.maxBoundaryX;
					}
				} else if ( this.options.shrink == 'scale' && this.width != this.indicatorWidth ) {
					this.width = this.indicatorWidth;
					this.indicatorStyle.width = this.width + 'px';
				}

				if ( y < this.minBoundaryY ) {
					if ( this.options.shrink == 'scale' ) {
						this.height = Math.max(this.indicatorHeight + y * 3, 8);
						this.indicatorStyle.height = this.height + 'px';
					}
					y = this.minBoundaryY;
				} else if ( y > this.maxBoundaryY ) {
					if ( this.options.shrink == 'scale' ) {
						this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
						this.indicatorStyle.height = this.height + 'px';
						y = this.maxPosY + this.indicatorHeight - this.height;
					} else {
						y = this.maxBoundaryY;
					}
				} else if ( this.options.shrink == 'scale' && this.height != this.indicatorHeight ) {
					this.height = this.indicatorHeight;
					this.indicatorStyle.height = this.height + 'px';
				}
			}

			this.x = x;
			this.y = y;

			if ( this.scroller.options.useTransform ) {
				this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
			} else {
				this.indicatorStyle.left = x + 'px';
				this.indicatorStyle.top = y + 'px';
			}
		},

		_pos: function (x, y) {
			if ( x < 0 ) {
				x = 0;
			} else if ( x > this.maxPosX ) {
				x = this.maxPosX;
			}

			if ( y < 0 ) {
				y = 0;
			} else if ( y > this.maxPosY ) {
				y = this.maxPosY;
			}

			x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
			y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

			this.scroller.scrollTo(x, y);
		},

		fade: function (val, hold) {
			if ( hold && !this.visible ) {
				return;
			}

			clearTimeout(this.fadeTimeout);
			this.fadeTimeout = null;

			var time = val ? 250 : 500,
				delay = val ? 0 : 300;

			val = val ? '1' : '0';

			this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

			this.fadeTimeout = setTimeout((function (val) {
				this.wrapperStyle.opacity = val;
				this.visible = +val;
			}).bind(this, val), delay);
		}
	};

	IScroll.utils = utils;

	if ( typeof module != 'undefined' && module.exports ) {
		module.exports = IScroll;
	} else if ( true ) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () { return IScroll; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.IScroll = IScroll;
	}

	})(window, document, Math);


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g = (function() { return this })() || Function("return this")();

	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;

	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;

	module.exports = __webpack_require__(163);

	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}


/***/ }),
/* 163 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	!(function(global) {
	  "use strict";

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[toStringTagSymbol] = "Generator";

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }

	      return ContinueSentinel;
	    }
	  };
	})(
	  // In sloppy mode, unbound `this` refers to the global object, fallback to
	  // Function constructor if we're in global strict mode. That is sadly a form
	  // of indirect eval which violates Content Security Policy.
	  (function() { return this })() || Function("return this")()
	);


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))(28);

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))(51);

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 25.4.1.5 NewPromiseCapability(C)
	var aFunction = __webpack_require__(165);

	function PromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	}

	module.exports.f = function (C) {
	  return new PromiseCapability(C);
	};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(173);
	var invoke = __webpack_require__(180);
	var html = __webpack_require__(194);
	var cel = __webpack_require__(190);
	var global = __webpack_require__(164);
	var process = global.process;
	var setTask = global.setImmediate;
	var clearTask = global.clearImmediate;
	var MessageChannel = global.MessageChannel;
	var Dispatch = global.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var defer, channel, port;
	var run = function () {
	  var id = +this;
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function (event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [];
	    var i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(168)(process) == 'process') {
	    defer = function (id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	    defer = function (id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function (id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))(25);

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))(26);

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))(33);

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))(34);

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))(42);

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))(50);

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.fetchDataList = undefined;

	var _regenerator = __webpack_require__(62);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(61);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _isomorphicFetch = __webpack_require__(86);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	__webpack_require__(85);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 获取请求服务器数据方法,以后有其他方法可以往里面继续添加
	var fetchDataList = exports.fetchDataList = {
	    fetchJson: function fetchJson(url) {
	        var _this = this;

	        var getData = function () {
	            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
	                var fetUrl, json;
	                return _regenerator2.default.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                _context.next = 2;
	                                return (0, _isomorphicFetch2.default)(url);

	                            case 2:
	                                fetUrl = _context.sent;
	                                _context.next = 5;
	                                return fetUrl.json();

	                            case 5:
	                                json = _context.sent;
	                                return _context.abrupt('return', json);

	                            case 7:
	                            case 'end':
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, _this);
	            }));

	            return function getData() {
	                return _ref.apply(this, arguments);
	            };
	        }();
	        return getData();
	    }
	};

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _regenerator = __webpack_require__(62);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _stringify = __webpack_require__(56);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _asyncToGenerator2 = __webpack_require__(61);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	var _extends2 = __webpack_require__(57);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(12);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(16);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(17);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(19);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(18);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(22);

	var _react2 = _interopRequireDefault(_react);

	var _city = __webpack_require__(55);

	var _city2 = _interopRequireDefault(_city);

	var _fetchGetJson = __webpack_require__(174);

	var _tips = __webpack_require__(58);

	var _tips2 = _interopRequireDefault(_tips);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//引入消息提示组件

	// 引入城市组件
	var AddCar = function (_Component) {
	    (0, _inherits3.default)(AddCar, _Component);

	    function AddCar() {
	        (0, _classCallCheck3.default)(this, AddCar);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (AddCar.__proto__ || (0, _getPrototypeOf2.default)(AddCar)).call(this));

	        _this.state = {
	            value: null, //默认手机输入框内容为空
	            isShowAlert: false, //
	            isTouch: false,
	            currentCity: '请选择所在城市',
	            isClick: false,
	            isShowCityContent: false,
	            isClickSureBtn: false,
	            alertText: null,
	            isAddCarOk: true,
	            isShowTips: false,
	            tipsText: null,
	            option: {
	                source: window.source,
	                phone: '',
	                city: ''
	            },
	            isShow: false //默认不显示城市组件
	        };
	        return _this;
	    }

	    //改变input的value值


	    (0, _createClass3.default)(AddCar, [{
	        key: 'ChangeValue',
	        value: function ChangeValue(e) {
	            this.setState({ value: e.target.value });
	        }

	        //获取当前城市

	    }, {
	        key: 'chooseCity',
	        value: function chooseCity(cityName) {
	            this.setState({ currentCity: cityName });
	        }

	        //所在城市右边的icon颜色改变

	    }, {
	        key: 'changIconColor',
	        value: function changIconColor() {
	            this.setState({
	                isClick: true,
	                isShow: true
	            });
	        }

	        //点击添加车源按钮获取服务器反馈

	    }, {
	        key: 'fetchData',
	        value: function fetchData() {
	            var _this2 = this;

	            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	            var obj = (0, _extends3.default)({}, this.state.option, opts),
	                getData = function () {
	                var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
	                    var dataJson, data;
	                    return _regenerator2.default.wrap(function _callee$(_context) {
	                        while (1) {
	                            switch (_context.prev = _context.next) {
	                                case 0:
	                                    _context.next = 2;
	                                    return fetch('/dealer/auction/signup', {
	                                        method: 'post',
	                                        headers: new Headers({
	                                            "Content-Type": "application/json; charset=utf-8"
	                                        }),
	                                        body: (0, _stringify2.default)(obj)
	                                    });

	                                case 2:
	                                    dataJson = _context.sent;
	                                    _context.next = 5;
	                                    return dataJson.json();

	                                case 5:
	                                    data = _context.sent;

	                                    if ('code' in data && data.code == 200) {
	                                        _this2.isShowAlertContent('车源添加成功', true);
	                                    } else {
	                                        _this2.isShowAlertContent(data.message, false);
	                                    };

	                                case 8:
	                                case 'end':
	                                    return _context.stop();
	                            }
	                        }
	                    }, _callee, _this2);
	                }));

	                return function getData() {
	                    return _ref.apply(this, arguments);
	                };
	            }();
	            return getData(opts);
	        }

	        //添加车源成功或者失败弹出框

	    }, {
	        key: 'isShowAlertContent',
	        value: function isShowAlertContent(text, isAddCarOk) {
	            this.setState({
	                isShowAlert: true,
	                alertText: text,
	                isAddCarOk: isAddCarOk
	            });
	        }

	        //点击添加车源按钮先判断城市和手机号是否填写，如果是，则再调用fetchData()这个函数请求服务器

	    }, {
	        key: 'ClickAddCarBtn',
	        value: function ClickAddCarBtn() {
	            var _this3 = this;

	            var setTipsText = function setTipsText(text) {
	                _this3.setState({
	                    isShowTips: true,
	                    tipsText: text,
	                    isTouch: false
	                });
	                return false;
	            };
	            var _state = this.state,
	                currentCity = _state.currentCity,
	                value = _state.value;

	            if (currentCity == '请选择所在城市') {
	                return setTipsText('请选择所在城市');
	            };
	            if (!value) {
	                return setTipsText('请填写手机号码');
	            };
	            if (currentCity != '请选择所在城市' && value) {
	                var opts = {
	                    source: '4-1141-1143',
	                    phone: value,
	                    city: currentCity
	                };
	                this.fetchData(opts);
	                this.setState({ isTouch: false });
	            };
	        }

	        //隐藏车源添加成功或失败的弹出框

	    }, {
	        key: 'hideAlertContent',
	        value: function hideAlertContent() {
	            this.setState({
	                isShowAlert: false,
	                isClickSureBtn: false
	            });
	        }

	        //显示弹出的文字提示

	    }, {
	        key: 'hideTips',
	        value: function hideTips(data) {
	            this.setState(data);
	        }

	        //是否显示城市组件的方法

	    }, {
	        key: 'showCity',
	        value: function showCity(ops) {
	            this.setState(ops);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this4 = this;

	            var _state2 = this.state,
	                value = _state2.value,
	                isShowAlert = _state2.isShowAlert,
	                isTouch = _state2.isTouch,
	                currentCity = _state2.currentCity,
	                isClick = _state2.isClick,
	                isShowCityContent = _state2.isShowCityContent,
	                isClickSureBtn = _state2.isClickSureBtn,
	                alertText = _state2.alertText,
	                isAddCarOk = _state2.isAddCarOk,
	                isShowTips = _state2.isShowTips,
	                tipsText = _state2.tipsText,
	                isShow = _state2.isShow;

	            return _react2.default.createElement(
	                'div',
	                { className: 'add-car-content' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'list-content' },
	                    _react2.default.createElement('div', { className: 'city-content' }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'city-input-content city-input-content-zindex' },
	                        _react2.default.createElement(
	                            'div',
	                            { 'class': 'addcar-input-content' },
	                            _react2.default.createElement(
	                                'p',
	                                { 'class': 'input-tit' },
	                                '\u57CE\u5E02'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                {
	                                    className: 'input-wrap',
	                                    onTouchStart: function onTouchStart() {
	                                        return _this4.changIconColor();
	                                    } },
	                                _react2.default.createElement(
	                                    'div',
	                                    { 'class': 'currentCity' },
	                                    currentCity
	                                ),
	                                _react2.default.createElement('div', { 'class': isClick ? 'city-icon triangle changecolor' : 'city-icon triangle' })
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'city-input-content' },
	                        _react2.default.createElement(
	                            'div',
	                            { 'class': 'addcar-input-content' },
	                            _react2.default.createElement(
	                                'p',
	                                { 'class': 'input-tit' },
	                                '\u624B\u673A'
	                            ),
	                            _react2.default.createElement('input', {
	                                type: 'text',
	                                onChange: function onChange(e) {
	                                    return _this4.ChangeValue(e);
	                                },
	                                className: 'input-item',
	                                value: value,
	                                placeholder: '\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801'
	                            })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        {
	                            onTouchStart: function onTouchStart() {
	                                return _this4.setState({ isTouch: true });
	                            },
	                            onTouchEnd: function onTouchEnd() {
	                                return _this4.ClickAddCarBtn();
	                            },
	                            className: 'addcar-input-content input-add-content' },
	                        _react2.default.createElement(
	                            'button',
	                            { className: isTouch ? 'add-background input-add' : 'input-add' },
	                            '\u6DFB\u52A0\u8F66\u6E90'
	                        )
	                    )
	                ),
	                isShowAlert ? _react2.default.createElement(
	                    'div',
	                    { 'class': 'wrap-alert' },
	                    _react2.default.createElement('div', { className: 'alert-content' }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'alert' },
	                        _react2.default.createElement('p', { className: isAddCarOk ? 'yes-icon' : 'yes-icon not-icon' }),
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            alertText
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            {
	                                onTouchStart: function onTouchStart() {
	                                    return _this4.setState({ isClickSureBtn: true });
	                                },
	                                onTouchEnd: function onTouchEnd() {
	                                    return _this4.hideAlertContent();
	                                },
	                                className: isClickSureBtn ? 'yes-btn yes-background' : 'yes-btn' },
	                            '\u786E\u5B9A'
	                        ),
	                        ' '
	                    )
	                ) : null,
	                _react2.default.createElement(_tips2.default, {
	                    isShowTips: isShowTips,
	                    text: tipsText,
	                    isAutoClose: true,
	                    time: 1000,
	                    setParentState: function setParentState(data) {
	                        return _this4.hideTips(data);
	                    }
	                }),
	                _react2.default.createElement(_city2.default, {
	                    isWantGoBackBtn: true,
	                    isShow: isShow,
	                    setParentState: function setParentState(data) {
	                        _this4.showCity({
	                            isShow: false,
	                            isClick: false
	                        });
	                        _this4.setState({ currentCity: data.city });
	                    },
	                    clickGoBackBtn: function clickGoBackBtn(data) {
	                        return _this4.showCity(data);
	                    },
	                    isLocation: true
	                })
	            );
	        }
	    }]);
	    return AddCar;
	}(_react.Component); // 引入公共fetch方法


	exports.default = AddCar;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _getPrototypeOf = __webpack_require__(12);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(16);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(17);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(19);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(18);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(22);

	var _react2 = _interopRequireDefault(_react);

	var _tips = __webpack_require__(58);

	var _tips2 = _interopRequireDefault(_tips);

	var _city = __webpack_require__(55);

	var _city2 = _interopRequireDefault(_city);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 引入城市组件

	//顶部三个tab标签之三：车牌号
	var CarId = function (_Component) {
	    (0, _inherits3.default)(CarId, _Component);

	    function CarId() {
	        (0, _classCallCheck3.default)(this, CarId);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (CarId.__proto__ || (0, _getPrototypeOf2.default)(CarId)).call(this));

	        _this.state = {
	            value: null,
	            isTouch: false,
	            isClickReset: false,
	            isClickSearchBtn: false,
	            isShowTips: false,
	            tipsText: null
	        };
	        return _this;
	    }

	    //改变input输入框的value


	    (0, _createClass3.default)(CarId, [{
	        key: 'ChangeValue',
	        value: function ChangeValue(e) {
	            this.setState({ value: e.target.value });
	        }

	        //点击搜索按钮

	    }, {
	        key: 'clickSearchBtn',
	        value: function clickSearchBtn() {
	            var _props = this.props,
	                changeTabIndex = _props.changeTabIndex,
	                isClickTab = _props.isClickTab,
	                isClickDropContentCloseBtn = _props.isClickDropContentCloseBtn,
	                getListData = _props.getListData;

	            if (!this.state.value) {
	                this.setState({
	                    isShowTips: true,
	                    tipsText: '请输入车牌号',
	                    isTouch: false
	                });
	                return false;
	            } else {

	                this.setState({
	                    isShowTips: false,
	                    isTouch: false
	                });
	                var opts = {
	                    currentPage: 1,
	                    dealStatus: 1,
	                    cityId: '',
	                    licenseNum: this.state.value
	                };
	                getListData(opts);

	                //点击搜索按钮后遮罩层和下拉菜单隐藏
	                changeTabIndex({ currentTabIndex: null });
	                isClickTab(false);
	                isClickDropContentCloseBtn(null);

	                //让input输入框失去焦点
	                this.refs.currentInput.blur();
	            };
	        }

	        //显示或隐藏弹出的文本提示

	    }, {
	        key: 'hideTips',
	        value: function hideTips(data) {
	            this.setState(data);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            //传递获取的input元素
	            this.props.getCarIdInputRef(this.refs.currentInput);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                'div',
	                { 'class': 'drop' },
	                _react2.default.createElement(
	                    'div',
	                    { 'class': 'search-list' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'search-content-list' },
	                        _react2.default.createElement('input', {
	                            type: 'text',
	                            onChange: function onChange(e) {
	                                return _this2.ChangeValue(e);
	                            },
	                            className: 'search-input',
	                            value: this.state.value,
	                            placeholder: '\u8BF7\u8F93\u5165\u8F66\u724C\u53F7',
	                            ref: 'currentInput'
	                            // value={this.state.value} 
	                        })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'search-btn-list' },
	                    _react2.default.createElement(
	                        'p',
	                        {
	                            onTouchStart: function onTouchStart() {
	                                return _this2.setState({ isClickReset: true });
	                            },
	                            onTouchEnd: function onTouchEnd() {
	                                return _this2.setState({
	                                    isClickReset: false,
	                                    value: ''
	                                });
	                            },
	                            className: this.state.isClickReset ? 'btn-reset btn-reset-add-background' : 'btn-reset' },
	                        '\u91CD\u7F6E'
	                    ),
	                    _react2.default.createElement(
	                        'p',
	                        {
	                            onTouchStart: function onTouchStart() {
	                                return _this2.setState({ isTouch: true });
	                            },
	                            onTouchEnd: function onTouchEnd() {
	                                return _this2.clickSearchBtn();
	                            },
	                            className: this.state.isTouch ? 'btn-search btn-search-add-background' : 'btn-search'
	                        },
	                        '\u641C\u7D22'
	                    )
	                ),
	                _react2.default.createElement('div', { 'class': 'select-cont-close', onTouchEnd: function onTouchEnd() {
	                        _this2.props.changeTabIndex({ currentTabIndex: null });
	                        _this2.props.isClickDropContentCloseBtn(null);
	                        _this2.props.isClickTab(false);
	                    } }),
	                _react2.default.createElement(_tips2.default, {
	                    isShowTips: this.state.isShowTips,
	                    text: this.state.tipsText,
	                    isAutoClose: true,
	                    time: 1000,
	                    setParentState: function setParentState(data) {
	                        return _this2.hideTips(data);
	                    }
	                })
	            );
	        }
	    }]);
	    return CarId;
	}(_react.Component);

	//顶部三个tab标签之一：成交状态
	//引入消息提示组件


	var DealStatus = function (_Component2) {
	    (0, _inherits3.default)(DealStatus, _Component2);

	    function DealStatus(props) {
	        (0, _classCallCheck3.default)(this, DealStatus);

	        var _this3 = (0, _possibleConstructorReturn3.default)(this, (DealStatus.__proto__ || (0, _getPrototypeOf2.default)(DealStatus)).call(this, props));

	        _this3.state = {
	            currentIndex: null,
	            tabList: [{
	                text: '报价中',
	                dealStatus: 1
	            }, {
	                text: '确认报价',
	                dealStatus: 2
	            }, {
	                text: '已重拍',
	                dealStatus: 3
	            }, {
	                text: '成交成功',
	                dealStatus: 4
	            }, {
	                text: '成交失败',
	                dealStatus: 5

	            }, {
	                text: '车主暂不出售',
	                dealStatus: 6
	            }]
	        };
	        return _this3;
	    }

	    //显示边框颜色


	    (0, _createClass3.default)(DealStatus, [{
	        key: 'clickShowBoder',
	        value: function clickShowBoder(num) {
	            this.setState({ currentIndex: num });
	        }

	        //隐藏边框颜色，同时显示已点击的筛选条件并获取数据

	    }, {
	        key: 'clickHideBoder',
	        value: function clickHideBoder(text, dealStatus) {
	            var _props2 = this.props,
	                cityName = _props2.cityName,
	                cityId = _props2.cityId,
	                resetCarList = _props2.resetCarList,
	                getListData = _props2.getListData,
	                getChooseText = _props2.getChooseText,
	                changeTabIndex = _props2.changeTabIndex,
	                isClickTab = _props2.isClickTab,
	                isClickDropContentCloseBtn = _props2.isClickDropContentCloseBtn;

	            //点击筛选条件清空当前默认车源列表

	            resetCarList();

	            //请求数据方法
	            var opts = {
	                currentPage: 1,
	                dealStatus: dealStatus,
	                cityId: cityId,
	                licenseNum: ''
	            };
	            getListData(opts);

	            //获取筛选条件文字方法
	            // console.log('byd',this.props.cityName)
	            getChooseText(text, cityName, cityId, dealStatus);
	            // this.showCity();

	            //选择当前某个成交状态后遮罩层和下拉菜单隐藏
	            changeTabIndex({ currentTabIndex: null });
	            isClickTab(false);;
	            isClickDropContentCloseBtn(null);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this4 = this;

	            // console.log(this.props.carList)
	            var _state = this.state,
	                currentIndex = _state.currentIndex,
	                tabList = _state.tabList;

	            //顶部成交状态标签的下拉菜单数据

	            var renderTab = tabList.map(function (item, index) {
	                var itemText = item.text,
	                    dealStatus = item.dealStatus;
	                return _react2.default.createElement(
	                    'li',
	                    {
	                        key: index,
	                        className: index == currentIndex ? 'hot-city-tit hot-city-tit-border' : 'hot-city-tit'
	                        // onTouchEnd={() => this.getFilterData(item.dealStatus, itemText)}
	                        , onTouchEnd: function onTouchEnd() {
	                            return _this4.clickHideBoder(itemText, dealStatus);
	                        },
	                        onTouchStart: function onTouchStart() {
	                            return _this4.clickShowBoder(index);
	                        } },
	                    item.text
	                );
	            });
	            return _react2.default.createElement(
	                'div',
	                { 'class': 'drop' },
	                _react2.default.createElement(
	                    'ul',
	                    { 'class': 'hot-city' },
	                    renderTab
	                ),
	                _react2.default.createElement('div', { 'class': 'select-cont-close', onTouchEnd: function onTouchEnd() {
	                        _this4.props.changeTabIndex({ currentTabIndex: null });
	                        _this4.props.isClickDropContentCloseBtn(null);
	                        _this4.props.isClickTab(false);
	                    } })
	            );
	        }
	    }]);
	    return DealStatus;
	}(_react.Component);

	//下拉菜单


	var DropContent = function (_Component3) {
	    (0, _inherits3.default)(DropContent, _Component3);

	    function DropContent(props) {
	        (0, _classCallCheck3.default)(this, DropContent);

	        var _this5 = (0, _possibleConstructorReturn3.default)(this, (DropContent.__proto__ || (0, _getPrototypeOf2.default)(DropContent)).call(this, props));

	        _this5.state = {
	            isShowCity: false
	        };
	        return _this5;
	    }

	    //点击城市组件里的城市执行的方法


	    (0, _createClass3.default)(DropContent, [{
	        key: 'getCity',
	        value: function getCity(cityName, cityId) {
	            var dealStatus = this.props.dealStatus;
	            var opts = {
	                currentPage: 1,
	                dealStatus: dealStatus,
	                cityId: cityId,
	                licenseNum: ''
	            };
	            var _props3 = this.props,
	                resetCarList = _props3.resetCarList,
	                getListData = _props3.getListData,
	                getChooseText = _props3.getChooseText,
	                getCity = _props3.getCity,
	                text = _props3.text;
	            //清空现有数据

	            resetCarList();

	            //清空现有数据后再重新获取数据
	            getListData(opts);

	            //获取筛选条件文字方法
	            getChooseText(text, cityName, cityId, dealStatus);

	            getCity(cityName, cityId);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this6 = this;

	            var _props4 = this.props,
	                changeTabIndex = _props4.changeTabIndex,
	                isClickDropContentCloseBtn = _props4.isClickDropContentCloseBtn,
	                isClickTab = _props4.isClickTab,
	                resetCarList = _props4.resetCarList,
	                getListData = _props4.getListData,
	                getChooseText = _props4.getChooseText,
	                cityName = _props4.cityName,
	                currentCityName = _props4.currentCityName,
	                cityId = _props4.cityId,
	                isShowCity = _props4.isShowCity,
	                dealStatus = _props4.dealStatus,
	                text = _props4.text,
	                tabIndex = _props4.tabIndex,
	                hideCity = _props4.hideCity;

	            var DropContentList = [
	            //成交状态下拉菜单
	            _react2.default.createElement(DealStatus, {
	                changeTabIndex: changeTabIndex,
	                isClickDropContentCloseBtn: isClickDropContentCloseBtn,
	                isClickTab: isClickTab,
	                resetCarList: resetCarList,
	                getListData: getListData,
	                getChooseText: getChooseText,
	                cityName: cityName,
	                currentCityName: currentCityName,
	                cityId: cityId
	                // changeTabIndex({ currentTabIndex: null });
	                // isClickDropContentCloseBtn(null);
	                // isClickTab(false);
	            }),

	            //城市组件
	            _react2.default.createElement(_city2.default, {
	                isShow: isShowCity,
	                setParentState: function setParentState(data) {
	                    _this6.getCity(data.city, data.id);
	                    hideCity(false);
	                    changeTabIndex({ currentTabIndex: null });
	                    isClickDropContentCloseBtn(null);
	                    isClickTab(false);
	                },

	                dealStatus: dealStatus,
	                resetCarList: resetCarList,
	                getChooseText: getChooseText,
	                text: text,
	                cityName: cityName,
	                isLocation: false
	            }),

	            //车牌号    
	            _react2.default.createElement(CarId, {
	                changeTabIndex: changeTabIndex,
	                isClickDropContentCloseBtn: isClickDropContentCloseBtn,
	                isClickTab: isClickTab,
	                getListData: getListData,
	                getCarIdInputRef: function getCarIdInputRef(data) {
	                    return _this6.props.getCarIdInputRef(data);
	                }
	            })],
	                // 渲染当前标签的下拉菜单
	            renderDropContent = DropContentList.map(function (ele, index) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: tabIndex == index ? 'is-show' : 'no-show' },
	                    ele
	                );
	            });
	            return _react2.default.createElement(
	                'div',
	                { className: 'drop-wrapper' },
	                renderDropContent,
	                _react2.default.createElement('div', {
	                    className: tabIndex == null ? null : 'wrap-pro'

	                    //点击灰色遮罩层后下拉菜单和当前遮罩层隐藏
	                    , onTouchEnd: function onTouchEnd() {
	                        changeTabIndex({ currentTabIndex: null });
	                        isClickDropContentCloseBtn(null);
	                        isClickTab(false);
	                    }
	                })
	            );
	        }
	    }]);
	    return DropContent;
	}(_react.Component);

	exports.default = DropContent;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _getPrototypeOf = __webpack_require__(12);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(16);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(17);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(19);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(18);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(22);

	var _react2 = _interopRequireDefault(_react);

	var _city = __webpack_require__(55);

	var _city2 = _interopRequireDefault(_city);

	var _isomorphicFetch = __webpack_require__(86);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	__webpack_require__(85);

	var _tips = __webpack_require__(58);

	var _tips2 = _interopRequireDefault(_tips);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//引入消息提示组件


	//顶部三个tab标签
	var Nav = function (_Component) {
	    (0, _inherits3.default)(Nav, _Component);

	    function Nav() {
	        (0, _classCallCheck3.default)(this, Nav);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (Nav.__proto__ || (0, _getPrototypeOf2.default)(Nav)).call(this));

	        _this.state = {
	            isShowBorder: false, // 默认不显示下边框
	            currentIndex: null, //初始索引
	            city: null,
	            specialCity: null,
	            id: null

	        };
	        _this.isClickDropContentCloseBtn = _this.isClickDropContentCloseBtn.bind(_this);
	        return _this;
	    }

	    // 点击显示当前标签的下边框、透明遮罩层和下拉菜单


	    (0, _createClass3.default)(Nav, [{
	        key: 'showBorder',
	        value: function showBorder(num) {
	            var _props = this.props,
	                changeTabIndex = _props.changeTabIndex,
	                isClickDropContentCloseBtn = _props.isClickDropContentCloseBtn,
	                isClickTab = _props.isClickTab,
	                showCity = _props.showCity;

	            changeTabIndex({ currentTabIndex: num == this.state.currentIndex ? null : num });
	            this.setState({
	                currentIndex: num == this.state.currentIndex ? null : num
	            });
	            isClickDropContentCloseBtn(this.isClickDropContentCloseBtn);

	            isClickTab(num == this.state.currentIndex ? false : true);

	            //因为城市的索引是1，当点击了城市标签，显示下拉城市组件
	            if (num == 1) {
	                showCity({ isShowCity: true });
	            } else {
	                showCity({ isShowCity: false });
	            }

	            //点击顶部三个tab标签让车牌号下拉菜单里的input输入框失去焦点
	            this.props.carIdInputRef.blur();
	        }
	    }, {
	        key: 'isClickDropContentCloseBtn',


	        //将此方法传递给drop-content组件，下拉菜单里的关闭按钮调用此方法
	        value: function isClickDropContentCloseBtn(isNull) {
	            this.setState({
	                currentIndex: isNull
	            });
	        }
	        //此函数由当前父组件传递给子组件，子组件使用此方法设置属性currentIndex为null来隐藏下拉菜单

	    }, {
	        key: 'hideDropContent',
	        value: function hideDropContent(data) {
	            this.setState({
	                currentIndex: data,
	                isTabClick: false
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _state = this.state,
	                isShowBorder = _state.isShowBorder,
	                currentIndex = _state.currentIndex,
	                city = _state.city,
	                specialCity = _state.specialCity,
	                id = _state.id,
	                isTabClick = _state.isTabClick,
	                _props2 = this.props,
	                getListData = _props2.getListData,
	                carList = _props2.carList,
	                getChooseText = _props2.getChooseText,
	                cityName = _props2.cityName,
	                cityId = _props2.cityId,
	                dealStatus = _props2.dealStatus,
	                resetCarList = _props2.resetCarList,
	                currentCityName = _props2.currentCityName;

	            // 头部 tab标签

	            var html1 = _react2.default.createElement(
	                'div',
	                { 'class': 'nav-content' },
	                _react2.default.createElement(
	                    'div',
	                    { 'class': 'nav-item nav-item-left' },
	                    '\u6210\u4EA4\u72B6\u6001'
	                )
	            ),
	                html2 = _react2.default.createElement(
	                'div',
	                { 'class': 'nav-content' },
	                _react2.default.createElement(
	                    'div',
	                    { 'class': 'nav-item nav-item-mid' },
	                    currentCityName
	                )
	            ),
	                html3 = _react2.default.createElement(
	                'div',
	                { 'class': 'nav-content' },
	                _react2.default.createElement(
	                    'div',
	                    { 'class': 'nav-item nav-item-right' },
	                    '\u8F66\u724C\u53F7'
	                )
	            ),
	                navData = [html1, html2, html3];
	            var navContent = navData.map(function (item, index) {
	                return _react2.default.createElement(
	                    'div',
	                    { 'class': 'current-content' },
	                    _react2.default.createElement(
	                        'div',
	                        {
	                            'class': index == currentIndex ? 'content-border content-wrap ' : 'content-wrap',
	                            onTouchEnd: function onTouchEnd() {
	                                return _this2.showBorder(index);
	                            } },
	                        item,
	                        _react2.default.createElement('div', { 'class': index == currentIndex ? 'triangle changecolor' : 'triangle' })
	                    )
	                );
	            });
	            return _react2.default.createElement(
	                'div',
	                { className: 'wrap-nav' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'nav' },
	                    navContent
	                )
	            );
	        }
	    }]);
	    return Nav;
	}(_react.Component); // 引入城市组件


	exports.default = Nav;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _getPrototypeOf = __webpack_require__(12);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(16);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(17);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(19);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(18);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(22);

	var _react2 = _interopRequireDefault(_react);

	var _isomorphicFetch = __webpack_require__(86);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	__webpack_require__(85);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ProductList = function (_Component) {
	    (0, _inherits3.default)(ProductList, _Component);

	    function ProductList(props) {
	        (0, _classCallCheck3.default)(this, ProductList);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (ProductList.__proto__ || (0, _getPrototypeOf2.default)(ProductList)).call(this, props));

	        _this.state = {
	            carNum: null, //初始车源数量
	            carDataList: [], //初始车源列表为空 
	            isAddBorder: false,
	            isScroll: false,
	            isBottom: false,
	            currentIndex: null
	        };
	        return _this;
	    }

	    //下拉刷新获取车源列表数据


	    (0, _createClass3.default)(ProductList, [{
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            var self = this,
	                that = self;
	            window.onscroll = function () {
	                var lastLi = document.getElementById('lastLi'),
	                    toTop = lastLi.getBoundingClientRect().top;
	                if (toTop <= window.innerHeight + 100) {
	                    var opts = {
	                        currentPage: that.props.currentPage + 1,
	                        dealStatus: '',
	                        cityId: that.props.cityId,
	                        licenseNum: ''
	                    };
	                    setTimeout(function () {
	                        that.props.getListData(opts, that.props.carList);
	                    }, 100);
	                };
	                if (that.props.currentPage == that.props.totalPage) {
	                    that.setState({
	                        isBottom: true
	                    });
	                };
	            };
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var opts = {
	                source: window.source,
	                currentPage: 1,
	                dealStatus: 0,
	                cityId: '',
	                licenseNum: ''
	            };
	            this.props.getListData(opts);
	        }
	        //渲染车源列表方法

	    }, {
	        key: 'renderCarList',
	        value: function renderCarList(arrData) {
	            var productList = arrData.map(function (item, index) {
	                var auctionPrice = item.auctionPrice,
	                    carDevice = item.carDevice,
	                    carExterior = item.carExterior,
	                    carInterior = item.carInterior,
	                    carName = item.carName,
	                    carSkeleton = item.carSkeleton,
	                    city = item.city,
	                    dealCity = item.dealCity,
	                    dealDate = item.dealDate,
	                    dealStatus = item.dealStatus,
	                    licensePlate = item.licensePlate,
	                    signDateStr = item.signDateStr,
	                    testDate = item.testDate,
	                    key = item.key;

	                //如果没数据显示--

	                var newDealStatus = dealStatus || '--',
	                    newAuctionPrice = auctionPrice || '--',
	                    newCarName = carName || '--',
	                    newCity = city || '--',
	                    newLicensePlate = licensePlate || '--',
	                    newDealCity = dealCity || '--',
	                    newCarSkeleton = carSkeleton || '--',
	                    newCarDevice = carDevice || '--',
	                    newCarExterior = carExterior || '--',
	                    newCarInterior = carInterior || '--',
	                    newSignDateStr = signDateStr || '--',
	                    newTestDate = testDate || '--',
	                    newDealDate = dealDate || '--';
	                return _react2.default.createElement(
	                    'li',
	                    { key: index },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'status-content' },
	                        _react2.default.createElement(
	                            'span',
	                            null,
	                            _react2.default.createElement('b', { className: key == 'green' ? 'green-icon' : 'green-icon red-icon' }),
	                            _react2.default.createElement(
	                                'b',
	                                { className: 'dealStatus-text' },
	                                newDealStatus
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'b',
	                            { className: 'auctionPrice' },
	                            '\u7ADE\u62CD\u4EF7\u683C: ',
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'price-text' },
	                                newAuctionPrice
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'other-content' },
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'car-name' },
	                            newCarName
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'city-carinfo' },
	                            newCity,
	                            _react2.default.createElement(
	                                'b',
	                                { className: 'icon-fenge' },
	                                '|'
	                            ),
	                            newLicensePlate,
	                            _react2.default.createElement(
	                                'b',
	                                { className: 'icon-fenge' },
	                                '|'
	                            ),
	                            newDealCity
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'city-carinfo carinfo' },
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                '\u9AA8\u67B6: ',
	                                newCarSkeleton
	                            ),
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                '\u88C5\u7F6E: ',
	                                newCarDevice
	                            ),
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                '\u5916\u89C2: ',
	                                newCarExterior
	                            ),
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                '\u5185\u9970: ',
	                                newCarInterior
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'city-carinfo carinfo date-list' },
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                '\u62A5\u540D: ',
	                                newSignDateStr
	                            ),
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                '\u68C0\u6D4B: ',
	                                newTestDate
	                            ),
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                '\u6210\u4EA4: ',
	                                newDealDate
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'call-img' },
	                        _react2.default.createElement('img', { src: 'http://cdn01.ttpaicdn.com/fronth5/common/images/call.png' })
	                    )
	                );
	            });
	            return productList;
	        }

	        //显示边框颜色

	    }, {
	        key: 'clickShowBoder',
	        value: function clickShowBoder(num) {
	            this.setState({
	                currentIndex: num
	            });
	        }

	        //点击 × 减少筛选条件

	    }, {
	        key: 'clickReduceIcon',
	        value: function clickReduceIcon(index, length) {
	            if (length == 1) {
	                //成交状态文件消失
	                this.props.getChooseText(null);
	                var opts = {
	                    currentPage: 1,
	                    dealStatus: 0,
	                    cityId: '',
	                    licenseNum: ''
	                };

	                //请求数据方法
	                this.props.getListData(opts);
	            };
	            if (length == 2 && index == 0) {
	                this.props.getChooseText(null, this.props.cityName, this.props.cityId);
	                // console.log(this.props.cityId)
	                var _opts = {
	                    currentPage: 1,
	                    dealStatus: 0,
	                    cityId: this.props.cityId,
	                    licenseNum: ''
	                };
	                //请求数据方法
	                this.props.getListData(_opts);
	            };
	            if (length == 2 && index == 1) {
	                this.props.getChooseText(this.props.text, null);

	                var _opts2 = {
	                    currentPage: 1,
	                    dealStatus: this.props.dealStatus,
	                    cityId: this.props.cityId,
	                    licenseNum: ''
	                };
	                //请求数据方法
	                this.props.getListData(_opts2);
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            //已选择的筛选条件数据（成交状态类型和城市）
	            var tipsData = this.props.chooseTextList.map(function (item, index) {
	                var legth = _this2.props.chooseTextList.length;
	                return _react2.default.createElement(
	                    'li',
	                    {
	                        key: index,
	                        onTouchStart: function onTouchStart() {
	                            return _this2.clickShowBoder(index);
	                        },
	                        onTouchEnd: function onTouchEnd() {
	                            return _this2.setState({
	                                currentIndex: null
	                            });
	                        },
	                        className: _this2.state.currentIndex == index ? 'no-border add-border' : 'no-border' },
	                    item,
	                    _react2.default.createElement(
	                        'span',
	                        {
	                            onTouchEnd: function onTouchEnd() {
	                                return _this2.clickReduceIcon(index, legth);
	                            },
	                            className: _this2.state.currentIndex == index ? 'dele-btn dele-btn-border' : 'dele-btn' },
	                        '\xD7'
	                    )
	                );
	            });
	            var _props = this.props,
	                carList = _props.carList,
	                totalNum = _props.totalNum,
	                newTotalNum = totalNum || 0;

	            return (
	                // <div className={tabClick ? 'pro-list pro-list-auto' : 'pro-list'}>
	                _react2.default.createElement(
	                    'div',
	                    { className: carList.length ? 'pro-list' : 'pro-list pro-list-background' },
	                    _react2.default.createElement(
	                        'ul',
	                        { className: 'tip-list' },
	                        tipsData
	                    ),
	                    _react2.default.createElement(
	                        'h1',
	                        { className: 'tit' },
	                        '\u5171\u6709',
	                        newTotalNum,
	                        '\u8F86\u8F66\u6E90'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { 'class': 'wrapper' },
	                        carList.length ? _react2.default.createElement(
	                            'ul',
	                            { className: 'all-car-list' },
	                            this.renderCarList(carList),
	                            this.state.isBottom ? _react2.default.createElement(
	                                'li',
	                                { className: 'loadmore-text' },
	                                '\u6CA1\u6709\u66F4\u591A\u6570\u636E'
	                            ) : _react2.default.createElement(
	                                'li',
	                                { className: 'loadmore-text' },
	                                '\u4E0B\u62C9\u52A0\u8F7D\u66F4\u591A'
	                            ),
	                            _react2.default.createElement('li', { id: 'lastLi' })
	                        ) : _react2.default.createElement(
	                            'p',
	                            { 'class': 'def-content' },
	                            _react2.default.createElement('img', { 'class': 'def-img', src: 'http://cdn01.ttpaicdn.com/fronth5/common/images/def.png' }),
	                            _react2.default.createElement(
	                                'b',
	                                { 'class': 'nocar-text' },
	                                '\u5F88\u62B1\u6B49\uFF0C\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u8F66\u6E90'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	    return ProductList;
	}(_react.Component);

	exports.default = ProductList;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(188);
	__webpack_require__(191);
	__webpack_require__(196);
	__webpack_require__(185);
	module.exports = __webpack_require__(172).Promise;


/***/ }),
/* 180 */
/***/ (function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	  var un = that === undefined;
	  switch (args.length) {
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return fn.apply(that, args);
	};


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(164);
	var macrotask = __webpack_require__(167).set;
	var Observer = global.MutationObserver || global.WebKitMutationObserver;
	var process = global.process;
	var Promise = global.Promise;
	var isNode = __webpack_require__(168)(process) == 'process';

	module.exports = function () {
	  var head, last, notify;

	  var flush = function () {
	    var parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };

	  // Node.js
	  if (isNode) {
	    notify = function () {
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
	  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
	    var toggle = true;
	    var node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    var promise = Promise.resolve();
	    notify = function () {
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    } last = task;
	  };
	};


/***/ }),
/* 182 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return { e: false, v: exec() };
	  } catch (e) {
	    return { e: true, v: e };
	  }
	};


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(170);
	var isObject = __webpack_require__(171);
	var newPromiseCapability = __webpack_require__(166);

	module.exports = function (C, x) {
	  anObject(C);
	  if (isObject(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(170);
	var aFunction = __webpack_require__(165);
	var SPECIES = __webpack_require__(169)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(192);
	var global = __webpack_require__(164);
	var ctx = __webpack_require__(173);
	var classof = __webpack_require__(189);
	var $export = __webpack_require__(193);
	var isObject = __webpack_require__(171);
	var aFunction = __webpack_require__(165);
	var anInstance = __webpack_require__(198);
	var forOf = __webpack_require__(199);
	var speciesConstructor = __webpack_require__(184);
	var task = __webpack_require__(167).set;
	var microtask = __webpack_require__(181)();
	var newPromiseCapabilityModule = __webpack_require__(166);
	var perform = __webpack_require__(182);
	var promiseResolve = __webpack_require__(183);
	var PROMISE = 'Promise';
	var TypeError = global.TypeError;
	var process = global.process;
	var $Promise = global[PROMISE];
	var isNode = classof(process) == 'process';
	var empty = function () { /* empty */ };
	var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
	var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1);
	    var FakePromise = (promise.constructor = {})[__webpack_require__(169)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch (e) { /* empty */ }
	}();

	// helpers
	var isThenable = function (it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function (promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v;
	    var ok = promise._s == 1;
	    var i = 0;
	    var run = function (reaction) {
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value);
	            if (domain) domain.exit();
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        reject(e);
	      }
	    };
	    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function (promise) {
	  task.call(global, function () {
	    var value = promise._v;
	    var unhandled = isUnhandled(promise);
	    var result, handler, console;
	    if (unhandled) {
	      result = perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if (unhandled && result.e) throw result.v;
	  });
	};
	var isUnhandled = function (promise) {
	  return promise._h !== 1 && (promise._a || promise._c).length === 0;
	};
	var onHandleUnhandled = function (promise) {
	  task.call(global, function () {
	    var handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function (value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function (value) {
	  var promise = this;
	  var then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};

	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(197)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
	    return C === $Promise || C === Wrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(195)($Promise, PROMISE);
	__webpack_require__(200)(PROMISE);
	Wrapper = __webpack_require__(172)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    var $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(201)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var values = [];
	      var index = 0;
	      var remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  }
	});


/***/ }),
/* 186 */
/***/ (function(module, exports) {

	(function(self) {
	  'use strict';

	  if (self.fetch) {
	    return
	  }

	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }

	  if (support.arrayBuffer) {
	    var viewClasses = [
	      '[object Int8Array]',
	      '[object Uint8Array]',
	      '[object Uint8ClampedArray]',
	      '[object Int16Array]',
	      '[object Uint16Array]',
	      '[object Int32Array]',
	      '[object Uint32Array]',
	      '[object Float32Array]',
	      '[object Float64Array]'
	    ]

	    var isDataView = function(obj) {
	      return obj && DataView.prototype.isPrototypeOf(obj)
	    }

	    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
	      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
	    }
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }

	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }

	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }

	    return iterator
	  }

	  function Headers(headers) {
	    this.map = {}

	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)
	    } else if (Array.isArray(headers)) {
	      headers.forEach(function(header) {
	        this.append(header[0], header[1])
	      }, this)
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }

	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var oldValue = this.map[name]
	    this.map[name] = oldValue ? oldValue+','+value : value
	  }

	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }

	  Headers.prototype.get = function(name) {
	    name = normalizeName(name)
	    return this.has(name) ? this.map[name] : null
	  }

	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }

	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = normalizeValue(value)
	  }

	  Headers.prototype.forEach = function(callback, thisArg) {
	    for (var name in this.map) {
	      if (this.map.hasOwnProperty(name)) {
	        callback.call(thisArg, this.map[name], name, this)
	      }
	    }
	  }

	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }

	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }

	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }

	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsArrayBuffer(blob)
	    return promise
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsText(blob)
	    return promise
	  }

	  function readArrayBufferAsText(buf) {
	    var view = new Uint8Array(buf)
	    var chars = new Array(view.length)

	    for (var i = 0; i < view.length; i++) {
	      chars[i] = String.fromCharCode(view[i])
	    }
	    return chars.join('')
	  }

	  function bufferClone(buf) {
	    if (buf.slice) {
	      return buf.slice(0)
	    } else {
	      var view = new Uint8Array(buf.byteLength)
	      view.set(new Uint8Array(buf))
	      return view.buffer
	    }
	  }

	  function Body() {
	    this.bodyUsed = false

	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (!body) {
	        this._bodyText = ''
	      } else if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	        this._bodyArrayBuffer = bufferClone(body.buffer)
	        // IE 10-11 can't handle a DataView body.
	        this._bodyInit = new Blob([this._bodyArrayBuffer])
	      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	        this._bodyArrayBuffer = bufferClone(body)
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }

	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }

	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyArrayBuffer) {
	          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }

	      this.arrayBuffer = function() {
	        if (this._bodyArrayBuffer) {
	          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
	        } else {
	          return this.blob().then(readBlobAsArrayBuffer)
	        }
	      }
	    }

	    this.text = function() {
	      var rejected = consumed(this)
	      if (rejected) {
	        return rejected
	      }

	      if (this._bodyBlob) {
	        return readBlobAsText(this._bodyBlob)
	      } else if (this._bodyArrayBuffer) {
	        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
	      } else if (this._bodyFormData) {
	        throw new Error('could not read FormData body as text')
	      } else {
	        return Promise.resolve(this._bodyText)
	      }
	    }

	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }

	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }

	    return this
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }

	  function Request(input, options) {
	    options = options || {}
	    var body = options.body

	    if (input instanceof Request) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body && input._bodyInit != null) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = String(input)
	    }

	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }

	  Request.prototype.clone = function() {
	    return new Request(this, { body: this._bodyInit })
	  }

	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }

	  function parseHeaders(rawHeaders) {
	    var headers = new Headers()
	    rawHeaders.split(/\r?\n/).forEach(function(line) {
	      var parts = line.split(':')
	      var key = parts.shift().trim()
	      if (key) {
	        var value = parts.join(':').trim()
	        headers.append(key, value)
	      }
	    })
	    return headers
	  }

	  Body.call(Request.prototype)

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }

	    this.type = 'default'
	    this.status = 'status' in options ? options.status : 200
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = 'statusText' in options ? options.statusText : 'OK'
	    this.headers = new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }

	  Body.call(Response.prototype)

	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }

	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }

	  var redirectStatuses = [301, 302, 303, 307, 308]

	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }

	    return new Response(null, {status: status, headers: {location: url}})
	  }

	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response

	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request = new Request(input, init)
	      var xhr = new XMLHttpRequest()

	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	        }
	        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }

	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.open(request.method, request.url, true)

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }

	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))(22);

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))(23);

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))(24);

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))(38);

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))(43);

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))(48);

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))(49);

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))(65);

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))(66);

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))(69);

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))(75);

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))(76);

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))(77);

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))(81);

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))(85);

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(5))(90);

/***/ })
/******/ ]);