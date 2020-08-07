/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ClientApp/gridlist3.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ClientApp/Apiconfig.js":
/*!********************************!*\
  !*** ./ClientApp/Apiconfig.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var utils = __webpack_require__(/*! ./modules/utils */ "./ClientApp/modules/utils.js");

/**
 * 获取url参数
 * @param {string} variable 参数名
 */
function getQueryString(variable) {
    try {
        var query = window.location.search.substring(1);
        // var query = window.location.url
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return false;
    } catch (error) {
        return false;
    }
}


module.exports = {
    "development":{
        commonApi:"//push2.eastmoney.com/",
        tsApi:"//"+(Math.floor(Math.random() * 99) + 1)+".push2.eastmoney.com/"
    },
    "production":{
        commonApi:"//push2.eastmoney.com/",
        tsApi:"//"+(Math.floor(Math.random() * 99) + 1)+".push2.eastmoney.com/"
    },
    "test":{
        commonApi:"http://61.129.249.233:18665/",
        tsApi:"http://61.129.249.233:18665/"
    },
    getEnvPath:function(name,value){
        
        //特殊情况设置默认值
        if(!!value){
            return value;
        }
        //防止名称误传
        if(!this.production[name]){
            return this.production.commonApi
        }
        //根据参数hq-env值，来区分环境
        var env = getQueryString("hq-env");
        // console.log("env:"+env)
        if(!env){
            return this.production[name] || "";
        }
        if(env === "development" || env === "production" || env === "test" ){
            return this[env][name]
        }else{
            return  this.production[name] || "";
        }
    }
}

/***/ }),

/***/ "./ClientApp/config/index.square.cfg.json":
/*!************************************************!*\
  !*** ./ClientApp/config/index.square.cfg.json ***!
  \************************************************/
/*! exports provided: ops, ops2, ops3, ops4, opsKcb, opsnewgu, abgu, ahgu, ahgu2, ahgu3, ops5, ops6, ops7, ops8, ops9, hkstocks, hkshstocks, hkindex, hkindexNXZ, usstocks, usindex, globalamerica, globalamerica2, globalamericaOz, globalamerica3, globalamerica4, conceptboard, conceptboardDatil, hsgt, qhsc_jq, fundcloseend, fundcloseend2, fundcloseend2d, bond, bondnew, forex, forex2, qqsc, gold, gold2, hsbk, hsbkd, hsbklz, hszs, hszs2, ggsc, ggscd, mgsc, mgscd, mgsc3, bondmine, indexqh, indexqhNew, indexqh_gjs, zjs, gjqh, hjqh, whpj, Zqzqzs, hkadr, fullscreenlist, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"ops\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"bankuai\",\"thclick\":false},\"ops2\":{\"order\":\"f62\",\"orderDur\":false,\"type\":\"zijinliu\",\"thclick\":false},\"ops3\":{\"order\":\"f62\",\"orderDur\":true,\"type\":\"zijinliu\",\"thclick\":false},\"ops4\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"hushenAStock\",\"zixuan\":true},\"opsKcb\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"hushenStockKcb\",\"zixuan\":true},\"opsnewgu\":{\"order\":\"f26\",\"orderDur\":false,\"type\":\"opsnewgu\",\"zixuan\":true},\"abgu\":{\"order\":\"f199\",\"orderDur\":false,\"type\":\"abgu\",\"zixuan\":true},\"ahgu\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"ahgu\",\"zixuan\":true,\"thclick\":false},\"ahgu2\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"ahgu2\",\"zixuan\":true},\"ahgu3\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"ahgu3\",\"zixuan\":true,\"thclick\":false},\"ops5\":{\"order\":\"f26\",\"orderDur\":false,\"type\":\"shhkBoard\",\"zixuan\":true},\"ops6\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"staqnetBoard\"},\"ops7\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"indexsh\"},\"ops8\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"indexsz\"},\"ops9\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"neeqstocks\"},\"hkstocks\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"hkstocks\",\"zixuan\":true},\"hkshstocks\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"hkshstocks\",\"zixuan\":true},\"hkindex\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"hkindex\"},\"hkindexNXZ\":{\"order\":\"f6\",\"orderDur\":false,\"type\":\"hkindex\"},\"usstocks\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"usstocks\"},\"usindex\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"usindex\"},\"globalamerica\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"globalamerica\"},\"globalamerica2\":{\"orderDur\":false,\"type\":\"globalamerica2\",\"thclick\":false},\"globalamericaOz\":{\"orderDur\":false,\"type\":\"globalamericaOz\",\"thclick\":false},\"globalamerica3\":{\"orderDur\":false,\"type\":\"globalamerica3\",\"thclick\":false},\"globalamerica4\":{\"orderDur\":false,\"type\":\"globalamerica4\",\"thclick\":false},\"conceptboard\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"conceptboard\"},\"conceptboardDatil\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"conceptboardDatil\",\"zixuan\":true},\"hsgt\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"hsgt\",\"zixuan\":true,\"thclick\":false},\"qhsc_jq\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"qhsc_jq\",\"zixuan\":true,\"thclick\":false},\"fundcloseend\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"fundcloseend\"},\"fundcloseend2\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"fundcloseend2\",\"thclick\":false},\"fundcloseend2d\":{\"order\":\"f3\",\"orderDur\":true,\"type\":\"fundcloseend2\",\"thclick\":false},\"bond\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"bond\"},\"bondnew\":{\"order\":\"f6\",\"orderDur\":false,\"type\":\"bondnew\"},\"forex\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"forex\"},\"forex2\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"forex2\",\"thclick\":false},\"qqsc\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"qqsc\"},\"gold\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"gold\"},\"gold2\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"gold2\",\"thclick\":false},\"hsbk\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"hsbk\",\"thclick\":false},\"hsbkd\":{\"order\":\"f3\",\"orderDur\":true,\"type\":\"hsbkd\",\"thclick\":false},\"hsbklz\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"hsbklz\",\"thclick\":false},\"hszs\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"hszs\",\"thclick\":false},\"hszs2\":{\"order\":\"\",\"orderDur\":false,\"type\":\"hszs2\",\"thclick\":false},\"ggsc\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"ggsc\",\"zixuan\":true,\"thclick\":false},\"ggscd\":{\"order\":\"f3\",\"orderDur\":true,\"type\":\"ggsc\",\"zixuan\":true,\"thclick\":false},\"mgsc\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"mgsc\",\"thclick\":false},\"mgscd\":{\"order\":\"f3\",\"orderDur\":true,\"type\":\"mgsc\",\"thclick\":false},\"mgsc3\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"mgsc3\",\"thclick\":false},\"bondmine\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"bondmine\",\"thclick\":false},\"indexqh\":{\"order\":\"f14\",\"orderDur\":true,\"type\":\"indexqh\"},\"indexqhNew\":{\"order\":\"f14\",\"orderDur\":true,\"type\":\"indexqhNew\"},\"indexqh_gjs\":{\"order\":\"f14\",\"orderDur\":true,\"type\":\"indexqh\"},\"zjs\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"zjs\"},\"gjqh\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"gjqh\"},\"hjqh\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"hjqh\",\"thclick\":false},\"whpj\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"whpj\"},\"Zqzqzs\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"Zqzqzs\",\"thclick\":false},\"hkadr\":{\"order\":\"f3\",\"orderDur\":false,\"type\":\"hkadr\"},\"fullscreenlist\":{\"order\":\"f243\",\"orderDur\":false,\"type\":\"fullscreenlist\",\"zixuan\":true}}");

/***/ }),

/***/ "./ClientApp/cookie/index.js":
/*!***********************************!*\
  !*** ./ClientApp/cookie/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * cookie
 */

var cookie = {
	get: function (name) {
		var xarr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
		if (xarr != null)
			return decodeURIComponent(xarr[2]);
		return null;
	},
	set: function(key,value,expiredays,domain){
		var exdate = new Date();
		exdate.setDate(exdate.getDate() + expiredays);
		document.cookie = key + "=" + escape(value) + ";expires=" + exdate.toGMTString() + ";path=/;domain=" + domain;
	},
	del: function (key, domain) {
		var exdate = new Date((new Date).getTime() - 1);
		if (domain) {
			document.cookie = key + '=;path=/;expires=' + exdate.toGMTString() + ';domain=' + domain;
		}
		else{
			document.cookie = key + '=;path=/;expires=' + exdate.toGMTString();
		}
		
	}
};

module.exports = cookie;

/***/ }),

/***/ "./ClientApp/favstock/index.js":
/*!*************************************!*\
  !*** ./ClientApp/favstock/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 自选股
 */

var user = __webpack_require__(/*! ../user */ "./ClientApp/user/index.js")
var islogin = user.get() ? true: false


var zxgurl = 'http://myfavor1.eastmoney.com/' //f=gsaandcheck
var zxgurl2 = 'http://myfavor1.eastmoney.com/' //f=gsaandcheck


var zxg = {
    data: function(zxgparams){
        var apistr = 'mystock_web'
        if(!islogin){
            apistr = 'mystock_webanonym'
        }
        return $.ajax({
            type: "GET",
            url: zxgurl + apistr + '?cb=?',
            data: zxgparams,
            dataType: "jsonp"
        });
    }
}


var zxg2 = {
    data: function(zxgparams){
        var apistr = 'mystock_web'
        if(!islogin) {
            apistr = 'mystock_webanonym'
        }
        return $.ajax({
            type: "GET",
            url: zxgurl2 + apistr,
            data: zxgparams,
            dataType: "jsonp",
            jsonp:'cb'
        });
    }
}




module.exports = {
    /**
     * 获取默认分组的自选股列表
     */
    getDefaultStocks: function(){
        
        return zxg.data({
            f: 'gsaandcheck'
        }).then(function(list){
            // console.log('原 list')
            // console.log(list)
            window._myFavor_list = list.data.list;
            return list.data.list
        })
    },
    /**
     * 添加自选
     *
     */
    add: function(code){
        return zxg2.data({
            f: 'asz',
            sc: code
        }).then(function(list){
            // console.log(list)
           // return list.result
            if (list.result == 1) {
                return true
            }
            else{
                return false
            }
        })
    },
    del: function(code){
        return zxg2.data({
            f: 'dsz',
            sc: code
        }).then(function(list){
            // console.log(list)
            //return list.result
            if (list.result == 1) {
                return true
            }
            else{
                return false
            }
        })
    },
    get: function(code){
        // return new jpromise(function(resolve, reject){
        //     resolve(false)
        // })
        return zxg2.data({
            f: 'gsaandcheck',
            sc: code
        }).then(function(list){
            // console.log(list)
            //return list.result
            //return false;
            if (list.data.check == 'True') {
                return true
            }
            else{
                return false
            }
        })

    },
    newget: function (code) {
        var url = 'https://myfavor.eastmoney.com/mystock?f=gsaandcheck&t=undefined&cb=jsonp1553678369631';

        $.ajax({
            type: "get",
            data: '',
            url: url,
            dataType: "jsonp",
            jsonp: "js",
            success: function (msg) {
                console.log(msg)

            }
    
        });

        



    }
}

/***/ }),

/***/ "./ClientApp/formatNum.js":
/*!********************************!*\
  !*** ./ClientApp/formatNum.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function formatNum(num) {
    if (num == 0) {
        return num
    }
    if (num == undefined || num == '' || isNaN(num)) {
        return '';
    }

    var hz = '';
    if (num >= 100000000 || num <= -100000000) {
        num = num / 100000000;
        hz = '亿';
    } else if (num >= 10000 || num <= -10000) {
        num = num / 10000;
        hz = '万';
    } else {
        return num;
    }

    var num2 = num.toFixed(2);

    // if(parseInt(num) >= 1000){ //整数部分超过4位
    //   num2 = num.toFixed(1);
    // }

    return num2.toString() + hz;
}

/***/ }),

/***/ "./ClientApp/gridlist3.js":
/*!********************************!*\
  !*** ./ClientApp/gridlist3.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// console.log('gridlist3')
__webpack_require__(/*! ./modules/jquery-plugins/jquery.ba-hashchange */ "./ClientApp/modules/jquery-plugins/jquery.ba-hashchange.js");
/**
 * 接新接口，重写一个table
 * 
 */
__webpack_require__(/*! ./modules/polyfills/json-polyfill.js */ "./ClientApp/modules/polyfills/json-polyfill.js");

var gridlist3 = __webpack_require__(/*! ./gridlist3/index */ "./ClientApp/gridlist3/index.js");

gridlist3();


$(window).hashchange(function (e) {
    //将分页清空dom
    // $("#table_wrapper").remove();
    $('.qqiframe').remove();
    gridlist3();
    // location.reload();
});

/***/ }),

/***/ "./ClientApp/gridlist3/config.js":
/*!***************************************!*\
  !*** ./ClientApp/gridlist3/config.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__(/*! ./heads */ "./ClientApp/gridlist3/heads.js");

module.exports = {

    futures: config["futures"],
    stocks: config["stocks"],

    bankuai: config["bankuai"],
    zijinliu: config["zijinliu"],
    zijinliuGegu: config["zijinliuGegu"],
    hushenAStock: config["hushenAStock"],
    hushenStockKcb: config["hushenStockKcb"],
    shhkBoard: config["shhkBoard"],
    staqnetBoard: config["staqnetBoard"],
    indexsh: config["indexsh"],
    neeqstocks: config["neeqstocks"],
    hkstocks: config["hkstocks"],
    hkshstocks: config["hkshstocks"],
    abgu: config["abgu"],
    ahgu: config["ahgu"],
    ahgu2: config["ahgu2"],
    ahgu3: config["ahgu3"],
    hkindex: config["hkindex"],
    usstocks: config["usstocks"],
    usindex: config["usindex"],
    globalamerica: config["globalamerica"],
    globalamerica2: config["globalamerica2"],
    globalamericaOz: config["globalamericaOz"],
    globalamerica3: config["globalamerica3"],
    globalamerica4: config["globalamerica4"],
    conceptboard: config["conceptboard"],
    conceptboardDatil: config["conceptboardDatil"],
    hsgt: config["hsgt"],
    qhsc_jq: config["qhsc_jq"],
    fundcloseend: config["fundcloseend"],
    fundcloseend2: config["fundcloseend2"],
    bond: config["bond"],
    bondnew: config["bondnew"],
    forex: config["forex"],
    forex2: config["forex2"],
    qqsc: config["qqsc"],
    gold: config["gold"],
    gold2: config["gold2"],
    hsbk: config["hsbk"],
    hsbkd: config["hsbkd"],
    hsbklz: config["hsbklz"],
    hszs: config["hszs"],
    hszs2: config["hszs2"],
    mgsc: config["mgsc"],
    mgsc3: config["mgsc3"],
    bondmine: config["bondmine"],
    indexqh: config["indexqh"],
    indexqhNew: config["indexqhNew"],
    zjs: config["zjs"],
    gjqh: config["gjqh"],
    hjqh: config["hjqh"],
    whpj: config["whpj"],
    ggsc: config["ggsc"],
    Zqzqzs: config["Zqzqzs"],
    opsnewgu: config["opsnewgu"],
    hkadr: config["hkadr"],
    hkstocks_cp_asc: config["hkstocks_cp_asc"],
    sh_a_cp_desc: config["sh_a_cp_desc"],
    AB5MinChangePercent: config["AB5MinChangePercent"],
    ABTurnoverRate: config["ABTurnoverRate"],
    ABVolumeRate: config["ABVolumeRate"],
    ABAmplitude: config["ABAmplitude"],
    ABAmount: config["ABAmount"],
    ABPE: config["ABPE"],
    ABPB: config["ABPB"],
    ABFlowCapitalValue: config["ABFlowCapitalValue"],
    ABMarketValue: config["ABMarketValue"],
    AB60DayChangePercent: config["AB60DayChangePercent"],
    AB360DayChangePercent: config["AB360DayChangePercent"],
    ABSpeed: config["ABSpeed"],
    BoardsCPAsc: config["BoardsCPAsc"],
    BoardsCPAscd: config["BoardsCPAscd"],
    BoardsTurnoverRate: config["BoardsTurnoverRate"],
    BoardsSpeed: config["BoardsSpeed"],
    BoardsAmount: config["BoardsAmount"],
    CommonVolume: config["CommonVolume"],
    CommonAmount: config["CommonAmount"],
    BoardsPosition: config["BoardsPosition"],
    MainCaptialFlow: config["MainCaptialFlow"],
    FFRanking: config["FFRanking"],
    BoardsCaptialFlow: config["BoardsCaptialFlow"],
    fullscreenlist: config["fullscreenlist"]
    
};

/***/ }),

/***/ "./ClientApp/gridlist3/css/square.css":
/*!********************************************!*\
  !*** ./ClientApp/gridlist3/css/square.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./ClientApp/gridlist3/getData.js":
/*!****************************************!*\
  !*** ./ClientApp/gridlist3/getData.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var tools = __webpack_require__(/*! ../modules/tools */ "./ClientApp/modules/tools.js");
var hqConfig = __webpack_require__(/*! ../Apiconfig */ "./ClientApp/Apiconfig.js");

module.exports = function (pars, callback) {
    //61.152.230.207

    // http://61.152.230.32:38618/api/qt/clist/get?pi=0&pz=20&po=1&fs=m:113+t:15&fid=f3&fields=f1,f2,f3,f4,f5,f6,f15,f16,f17,f28,f34,f35,f108&ut=fa5fd1943c7b386f172d6893dbfba10b

    //http://61.152.230.32:38618/api/qt/clist/get


    //外牌汇价
    // var url = "http://61.129.249.233:18665/api/qt/clist/get"

    var url = window.location.href;
    var hu_plag = url.split("#")[1];


    //统一接口  测试地址 
    // var url = "http://61.152.230.191/api/qt/clist/get"


    //测试接口
    // var url = "http://61.129.249.233:18665/api/qt/clist/get"

    //正式接口
     //    var url = "http://" + Math.floor(Math.random()*100+1) +  ".push2.eastmoney.com/api/qt/clist/get";
        var url = hqConfig.getEnvPath("tsApi") + "api/qt/clist/get";

    var par = {
        pn: 0,
        pz: 20, // 每页大小
        // fs: "m:113+t:15",       // 证券过滤器
        // fs: "m:1+t:2",       // 证券过滤器
        po: 1, // 排序方向（正序填0，倒序填1，默认为1。）
        // fid: "f3",      // 排序字段
        np: 1,
        // fields: "f1,f12,f14,f2,f4,f3,f17,f15,f16,f28,f5,f6,f34,f35,f108",       // 需要获取的字段
        ut: "bd1d9ddb04089700cf9c27f6f7426281",
        fltt: 2,
        invt: 2
    }

    par = $.extend(par, pars);

    $.ajax({
        url: url,
        method: "GET",
        data: tools.objToPars(par),
        dataType: "jsonp",
        jsonp: "cb",
        success: function (msg) {
            // console.log('------------------')
            // console.log(msg);
            // console.log('------------------')
            // if (msg.rc === 0) {
            callback(msg);
            // }
        },
        error: function (err) {

        }
    });


};

/***/ }),

/***/ "./ClientApp/gridlist3/heads.js":
/*!**************************************!*\
  !*** ./ClientApp/gridlist3/heads.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * 
 * {
 *      title: {String} 显示的表头名称
 *      type: {String} 特殊类型，当前只有一个序列
 *      key: {string} 接口返回的字段名称
 *      order: {Boolean} 字段是否可排序 
 *      color: {int | String} 字段时候标记颜色， int表示个当前的数值比较，字符串表示用指定的Key和0比较，_开头的字段表示当前字段减去_key这个字段在比较
 *      suffix: {String} 单位
 *      href: {String} 跳转链接。需要和data一起使用，href中 使用 {{index}} 使用data中的数据
 *      data：{Array} href中要使用的数据
 * }
 * 
 */


var tools = __webpack_require__(/*! ./tools */ "./ClientApp/gridlist3/tools.js");


module.exports = {

    //首页板块
    bankuai: {
        fields: "f1,f2,f3,f14,f12,f13,f62,f128,f136,f152",
        head: [
            {
                title: "名称",
                key: "f14",
                order: false,
                href: "<a href='/center/boardlist.html#boards2-{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13", "f12","f14"],
                show: true,
                newcb: function(value){
                    return tools.txtPoint(value);
                }
                
            },
            {
                title: "涨跌幅",
                key: "f3",
                // suffix: "%",
                color: "f3",
                order: false,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: true
            },
            {
                title: "主力净流入",
                key: "f62",
                color: "f62",
                order: false,
                cb: function(that, row){
                    return tools.formatNumberIndex(that);
                },
                show: true
            },
            {
                title: "领涨股",
                key: "f128",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f141","f140","f128"],
                show: true,
                // cb: function(that, row){
                //     return tools.formatNumber3(that);
                // }
                newcb:  function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "涨跌幅",
                key: "f136",
                // suffix: "%",
                color: "f136",
                order: false,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: true
            },
        ],
        sumcount: 5
            
    },


    //首页资金流
    zijinliu: {
        fields: "f1,f2,f3,f14,f12,f13,f62,f128,f136,f152,f184",
        head: [
            {
                title: "名称",
                key: "f14",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13","f12","f14"],
                show: true,
                newcb:  function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "f3",
                order: false,
                show: true
            },
            {
                title: "涨跌幅",
                key: "f3",
                // suffix: "%",
                color: "f3",
                order: false,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: true
            },
            {
                title: "主力净流入",
                key: "f62",
                color: "f62",
                order: false,
                cb: function(that, row){
                    return tools.formatNumberIndex(that);
                },
                show: true
            },
            //净占比 字段需要修改
            {
                title: "主力净占比",
                key: "f184",
                color: "f184",
                order: false,
                cb: function(that, row){
                    return tools.formatNumber4(that);
                },
                show: true
            }
        ],
        sumcount: 5
            
    },

    //沪深A股
    hushenAStock: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Name'
            },
            {
                title: "相关链接",
                key: "",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Links'
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                color: "f4",
                order: true,
                show: true,
                name: 'Change',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                }
            },
            {
                title: "成交量(手)",
                key: "f5",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "成交额",
                key: "f6",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            },
            {
                title: "振幅",
                key: "f7",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber2(that);
                },
                show: true,
                name: 'Amplitude'
            },
            {
                title: "最高",
                key: "f15",
                fixedkey: 'f1',
                color: "_f18",
                order: true,
                // cb: function(that, row){
                //     return tools.formatNumber4(that);
                // },
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                show: true,
                name: 'Hign'
            },
            {
                title: "最低",
                key: "f16",
                fixedkey: 'f1',
                color: "_f18",
                order: true,
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                show: true,
                name: 'Low'
            },
            {
                title: "今开",
                key: "f17",
                fixedkey: 'f1',
                color: "_f18",
                order: true,
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                show: true,
                name: 'Open'
            },
            {
                title: "昨收",
                key: "f18",
                fixedkey: 'f1',
                order: true,
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "量比",
                key: "f10",
                order: true,
                cb: function(that, row){
                    return tools.formatNumberHSGGLB(that);
                },
                show: true,
                name: 'VolumeRate'
            },
            {
                title: "换手率",
                key: "f8",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber2(that);
                },
                show: true,
                name: 'TurnoverRate'
            },
            {
                title: "市盈率(动态)",
                key: "f9",
                order: true,
                show: true,
                cb: function(that, row){
                    return tools.formatNumberSyl(that);
                },
                name: 'PERation'
            },
            {
                title: "市净率",
                key: "f23",
                order: true,
                show: true,
                cb: function(that, row){
                    return tools.formatNumberSyl(that);
                },
                name: 'PB'
            },
            {
                title: "总市值",
                key: "f20",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: false
            },
            {
                title: "流通市值",
                key: "f21",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: false
            },
            {
                title: "60日涨跌幅",
                key: "f24",
                order: true,
                // suffix: "%",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                color: "f24",
                show: false
            },
            {
                title: "年初至今涨跌幅",
                key: "f25",
                // suffix: "%",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                color: "f25",
                order: true,
                show: false
            },
            {
                title: "涨速",
                key: "f22",
                // suffix: "%",
                color: "f22",
                order: true,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: false
            },
            {
                title: "5分钟涨跌",
                key: "f11",
                color: "f11",
                order: true,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: false
            },
            {
                title: "加自选",
                key: "addzixuan",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Links'
            }
        ],
        sumcount: 20


    },


     //沪深个股---科创板
     hushenStockKcb: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Name'
            },
            {
                title: "相关链接",
                key: "",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Links'
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                color: "f4",
                order: true,
                show: true,
                name: 'Change',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                }
            },
            {
                title: "成交量(手)",
                key: "f5",
                order: true,
                cb: function(that, row){
                    return tools.kcbMyformatNum(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "成交额",
                key: "f6",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            },
            {
                title: "振幅",
                key: "f7",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber2(that);
                },
                show: true,
                name: 'Amplitude'
            },
            {
                title: "最高",
                key: "f15",
                fixedkey: 'f1',
                color: "_f18",
                order: true,
                // cb: function(that, row){
                //     return tools.formatNumber4(that);
                // },
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                show: true,
                name: 'Hign'
            },
            {
                title: "最低",
                key: "f16",
                fixedkey: 'f1',
                color: "_f18",
                order: true,
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                show: true,
                name: 'Low'
            },
            {
                title: "今开",
                key: "f17",
                fixedkey: 'f1',
                color: "_f18",
                order: true,
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                show: true,
                name: 'Open'
            },
            {
                title: "昨收",
                key: "f18",
                fixedkey: 'f1',
                order: true,
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "量比",
                key: "f10",
                order: true,
                cb: function(that, row){
                    return tools.formatNumberHSGGLB(that);
                },
                show: true,
                name: 'VolumeRate'
            },
            {
                title: "换手率",
                key: "f8",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber2(that);
                },
                show: true,
                name: 'TurnoverRate'
            },
            {
                title: "市盈率(动态)",
                key: "f9",
                order: true,
                show: true,
                cb: function(that, row){
                    return tools.formatNumberSyl(that);
                },
                name: 'PERation'
            },
            {
                title: "市净率",
                key: "f23",
                order: true,
                show: true,
                cb: function(that, row){
                    return tools.formatNumberSyl(that);
                },
                name: 'PB'
            },
            {
                title: "总市值",
                key: "f20",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: false
            },
            {
                title: "流通市值",
                key: "f21",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: false
            },
            {
                title: "60日涨跌幅",
                key: "f24",
                order: true,
                // suffix: "%",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                color: "f24",
                show: false
            },
            {
                title: "年初至今涨跌幅",
                key: "f25",
                // suffix: "%",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                color: "f25",
                order: true,
                show: false
            },
            {
                title: "涨速",
                key: "f22",
                // suffix: "%",
                color: "f22",
                order: true,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: false
            },
            {
                title: "5分钟涨跌",
                key: "f11",
                color: "f11",
                order: true,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: false
            },
            {
                title: "加自选",
                key: "addzixuan",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Links'
            }
        ],
        sumcount: 20


    },


     //沪深个股 --新股
     opsnewgu: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f11,f62,f128,f136,f115,f152",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Name'
            },
            {
                title: "相关链接",
                key: "",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Links'
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                color: "f4",
                order: true,
                show: true,
                name: 'Change',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                }
            },
            {
                title: "成交量(手)",
                key: "f5",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "成交额",
                key: "f6",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            },
            {
                title: "振幅",
                key: "f7",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber2(that);
                },
                show: true,
                name: 'Amplitude'
            },
            {
                title: "最高",
                key: "f15",
                fixedkey: 'f1',
                color: "_f18",
                order: true,
                // cb: function(that, row){
                //     return tools.formatNumber4(that);
                // },
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                show: true,
                name: 'Hign'
            },
            {
                title: "最低",
                key: "f16",
                fixedkey: 'f1',
                color: "_f18",
                order: true,
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                show: true,
                name: 'Low'
            },
            {
                title: "今开",
                key: "f17",
                fixedkey: 'f1',
                color: "_f18",
                order: true,
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                show: true,
                name: 'Open'
            },
            {
                title: "昨收",
                key: "f18",
                fixedkey: 'f1',
                order: true,
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "换手率",
                key: "f8",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber2(that);
                },
                show: true,
                name: 'TurnoverRate'
            },
            {
                title: "市盈率(动态)",
                key: "f9",
                order: true,
                show: true,
                cb: function(that, row){
                    return tools.formatNumberSyl(that);
                },
                name: 'PERation'
            },
            {
                title: "市净率",
                key: "f23",
                order: true,
                show: true,
                cb: function(that, row){
                    return tools.formatNumberSyl(that);
                },
                name: 'PB'
            },
            {
                title: "上市时间",
                key: "f26",
                order: true,
                show: true,
                name: 'shtime',
                cb: function(that, row){
                    return tools.formatNumber3(that);
                }
            },
            {
                title: "总市值",
                key: "f20",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: false
            },
            {
                title: "流通市值",
                key: "f21",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: false
            },
            {
                title: "60日涨跌幅",
                key: "f24",
                order: true,
                // suffix: "%",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                color: "f24",
                show: false
            },
            {
                title: "年初至今涨跌幅",
                key: "f25",
                // suffix: "%",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                color: "f25",
                order: true,
                show: false
            },
            {
                title: "涨速",
                key: "f22",
                // suffix: "%",
                color: "f22",
                order: true,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: false
            },
            {
                title: "5分钟涨跌",
                key: "f11",
                color: "f11",
                order: true,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: false
            },
            {
                title: "量比",
                key: "f10",
                order: true,
                cb: function(that, row){
                    return tools.formatNumberHSGGLB(that);
                },
                show: false,
                name: 'VolumeRate'
            },
            {
                title: "加自选",
                key: "addzixuan",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Links'
            }
        ],
        sumcount: 20


    },

    //AB股比价
    abgu: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f201,f202,f203,f196,f197,f199,f195,f200",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "B股代码",
                key: "f201",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f202","f201"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f203",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f202","f201"],
                show: true,
                name: 'Name'
            },
            {
                title: "相关链接",
                key: "",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f202","f201"],
                show: true,
                name: 'Links_abgu'
            },
            {
                title: "最新价",
                key: "f196",
                fixedkey: 'f200',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f195",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f197",
                color: "f197",
                order: true,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "A股代码",
                key: "f12",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Name'
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                color: "f3",
                order: true,
                // cb: function(that, row){
                //     return tools.formatNumber2(that);
                // },
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "比价（A/B）",
                key: "f199",
                // suffix: "%",
                color: "",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber4(that);
                },
                show: true,
                name: 'ChangePercent'
            }
            
        ],
        sumcount: 20


    },

    //港股市场---Ah股比价
    ahgu: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f191,f192,f193,f186,f185,f187,f189,f188",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "名称",
                key: "f193",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f192","f191"],
                show: true,
                name: 'Name'
            },
            {
                title: "H股代码",
                key: "f12",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "最新价(HKD)",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: false,
                show: true,
                // cb: function(that, row){
                //     return tools.formatNumberNewPri(that);
                // },
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                // suffix: "%",
                color: "f3",
                order: false,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "港股吧",
                key: "",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'>A股吧</a>",
                data: ["f13","f12"],
                show: true,
                name: ''
            },
            {
                title: "A股代码",
                key: "f191",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f192","f191"],
                show: true,
                name: 'Code'
            },
            {
                title: "最新价(RMB)",
                key: "f186",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f185",
                order: false,
                show: true,
                // cb: function(that, row){
                //     return tools.formatNumberNewPri(that);
                // },
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f187",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f187",
                order: false,
                // cb: function(that, row){
                //     return tools.formatNumber2(that);
                // },
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "A股吧",
                key: "",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'>A股吧</a>",
                data: ["f192","f191"],
                show: true,
                name: 'gangguba'
            },
           
            {
                title: "比价（A/H）",
                key: "f189",
                // suffix: "%",
                color: "",
                order: false,
                cb: function(that, row){
                    return tools.formatNumber4(that);
                },
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "溢价（A/H）%",
                key: "f188",
                // suffix: "%",
                color: "",
                order: false,
                cb: function(that, row){
                    return tools.formatNumber4(that);
                },
                show: true,
                name: 'ChangePercent'
            }
            
        ],
        sumcount: 5


    },

    //沪深港通---AH股比价
    ahgu2: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f191,f192,f193,f186,f185,f187,f189,f188",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "名称",
                key: "f193",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f192","f191"],
                show: true,
                name: 'Name'
            },
            {
                title: "H股代码",
                key: "f12",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "最新价(HKD)",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                // cb: function(that, row){
                //     return tools.formatNumberNewPri(that);
                // },
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "港股吧",
                key: "",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'>A股吧</a>",
                data: ["f13","f12"],
                show: true,
                name: ''
            },
            {
                title: "A股代码",
                key: "f191",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f192","f191"],
                show: true,
                name: 'Code'
            },
            {
                title: "最新价(RMB)",
                key: "f186",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f185",
                order: true,
                show: true,
                // cb: function(that, row){
                //     return tools.formatNumberNewPri(that);
                // },
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f187",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f187",
                order: true,
                // cb: function(that, row){
                //     return tools.formatNumber2(that);
                // },
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "A股吧",
                key: "",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'>A股吧</a>",
                data: ["f192","f191"],
                show: true,
                name: 'gangguba'
            },
           
            {
                title: "比价（A/H）",
                key: "f189",
                // suffix: "%",
                color: "",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber4(that);
                },
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "溢价（A/H）%",
                key: "f188",
                // suffix: "%",
                color: "f188",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber4(that);
                },
                show: true,
                name: 'ChangePercent'
            }
            
        ],
        sumcount: 20


    },

    //沪深港通---AH股比价  centerv2 小标签
    ahgu3: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f191,f192,f193,f186,f185,f187,f189,f188",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "名称",
                key: "f193",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f192","f191"],
                show: true,
                name: 'Name'
            },
            {
                title: "H股代码",
                key: "f12",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "最新价(HKD)",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: false,
                show: true,
                // cb: function(that, row){
                //     return tools.formatNumberNewPri(that);
                // },
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: false,
                // cb: function(that, row){
                //     return tools.formatNumber2(that);
                // },
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "港股吧",
                key: "",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'>A股吧</a>",
                data: ["f13","f12"],
                show: true,
                name: ''
            },
            {
                title: "A股代码",
                key: "f191",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f192","f191"],
                show: true,
                name: 'Code'
            },
            {
                title: "最新价(RMB)",
                key: "f186",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f185",
                order: false,
                show: true,
                // cb: function(that, row){
                //     return tools.formatNumberNewPri(that);
                // },
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f187",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f187",
                order: false,
                // cb: function(that, row){
                //     return tools.formatNumber2(that);
                // },
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "A股吧",
                key: "",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'>A股吧</a>",
                data: ["f192","f191"],
                show: true,
                name: 'gangguba'
            },
            {
                title: "比价（A/H）",
                key: "f189",
                // suffix: "%",
                color: "",
                order: false,
                cb: function(that, row){
                    return tools.formatNumber4(that);
                },
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "溢价（A/H）%",
                key: "f188",
                // suffix: "%",
                color: "",
                order: false,
                cb: function(that, row){
                    return tools.formatNumber4(that);
                },
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "加自选",
                key: "addzixuan",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Links'
            }
            
        ],
        sumcount: 5


    },


    //沪股通  深股通
    shhkBoard: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f11,f62,f128,f136,f115,f152",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Name'
            },
            {
                title: "相关链接",
                key: "",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Links'
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "成交量(手)",
                key: "f5",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "成交额",
                key: "f6",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            },
            {
                title: "振幅",
                key: "f7",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber2(that);
                },
                show: true,
                name: 'Amplitude'
            },
            {
                title: "最高",
                key: "f15",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                // cb: function(that, row){
                //     return tools.formatNumber4(that);
                // },
                show: true,
                name: 'Hign'
            },
            {
                title: "最低",
                key: "f16",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                // cb: function(that, row){
                //     return tools.formatNumber4(that);
                // },
                show: true,
                name: 'Low'
            },
            {
                title: "今开",
                key: "f17",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                // cb: function(that, row){
                //     return tools.formatNumber4(that);
                // },
                show: true,
                name: 'Open'
            },
            {
                title: "昨收",
                key: "f18",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: true,
                // cb: function(that, row){
                //     return tools.formatNumber4(that);
                // },
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "换手率",
                key: "f8",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber2(that);
                },
                show: true,
                name: 'TurnoverRate'
            },
            {
                title: "市盈率(动态)",
                key: "f9",
                order: true,
                show: true,
                cb: function(that, row){
                    return tools.formatNumberSyl(that);
                },
                name: 'PERation'
            },
            {
                title: "市净率",
                key: "f23",
                order: true,
                show: true,
                cb: function(that, row){
                    return tools.formatNumberSyl(that);
                },
                name: 'PB'
            },
            {
                title: "上市时间",
                key: "f26",
                order: true,
                show: true,
                name: 'shtime',
                cb: function(that, row){
                    return tools.formatNumber3(that);
                }
            },
            {
                title: "总市值",
                key: "f20",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: false
            },
            {
                title: "流通市值",
                key: "f21",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: false
            },
            {
                title: "60日涨跌幅",
                key: "f24",
                order: true,
                // suffix: "%",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                color: "f4",
                show: false
            },
            {
                title: "年初至今涨跌幅",
                key: "f25",
                // suffix: "%",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                color: "f4",
                order: true,
                show: false
            },
            {
                title: "涨速",
                key: "f22",
                // suffix: "%",
                color: "f22",
                order: true,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: false                
            },
            {
                title: "5分钟涨跌",
                key: "f11",
                color: "f11",
                order: true,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: false
            },
            {
                title: "加自选",
                key: "addzixuan",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Links'
            }
        ],
        sumcount: 20


    },


    //两网及退市
    staqnetBoard: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f33,f11,f62,f128,f136,f115,f152",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Name'
            },
            {
                title: "相关链接",
                key: "",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'neeq_stocks'
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "成交量(手)",
                key: "f5",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "成交额",
                key: "f6",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            },
            {
                title: "昨收",
                key: "f18",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: true,
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "今开",
                key: "f17",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Open'
            },
            {
                title: "最高",
                key: "f15",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Hign'
            },
            {
                title: "最低",
                key: "f16",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Low'
            },
            {
                title: "委比",
                key: "f33",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag2(value, fixednum);
                },
                order: true,
                show: true,
                name: 'weibi'
            }
           
        ],
        sumcount: 20

    },


    //沪深指数---上证系列指数   深证系列指数
    indexsh: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f33,f11,f62,f128,f136,f115,f152",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Name'
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "成交量(手)",
                key: "f5",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "成交额",
                key: "f6",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            },
            {
                title: "振幅",
                key: "f7",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber2(that);
                },
                show: true,
                name: 'Amplitude'
            },
            {
                title: "最高",
                key: "f15",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Hign'
            },
            {
                title: "最低",
                key: "f16",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Low'
            },
            {
                title: "今开",
                key: "f17",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Open'
            },
            {
                title: "昨收",
                key: "f18",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: true,
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "量比",
                key: "f10",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber4(that);
                },
                show: true,
                name: 'VolumeRate'
            }
           
        ],
        sumcount: 20

    },


    //新三板
    neeqstocks: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f33,f11,f62,f128,f136,f115,f152,f111",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                signIcon:"sanban",
                show: true,
                name: 'Name'
            },
            {
                title: "相关链接",
                key: "",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'neeq_stocks'
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: true,
                show: true,
                name: 'Change'
               
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "成交量",
                key: "f5",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "成交额",
                key: "f6",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            },
            {
                title: "昨收",
                key: "f18",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: true,
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "今开",
                key: "f17",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Open'
            },
            {
                title: "最高",
                key: "f15",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Hign'
            },
            {
                title: "最低",
                key: "f16",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Low'
            },
            {
                title: "委比",
                key: "f33",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag2(value, fixednum);
                },
                color: "f33",
                order: true,
                show: true,
                name: 'weibi'
            }
           
        ],
        sumcount: 20

    },


    //沪深港通---港股通 沪、深
    hkshstocks: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f11,f62,f128,f136,f115,f152",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Name'
            },
            {
                title: "相关链接",
                key: "",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'hk_stocks'
            },
            {
                title: "最新价(HKD)",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "今开",
                key: "f17",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Open'
            },
            {
                title: "最高",
                key: "f15",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Hign'
            },
            {
                title: "最低",
                key: "f16",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Low'
            },
            {
                title: "昨收",
                key: "f18",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: true,
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "成交量(股)",
                key: "f5",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "成交额(港元)",
                key: "f6",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            },
            {
                title: "加自选",
                key: "addzixuan",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Links'
            }
        ],
        sumcount: 20


    },


    //港股--全部
    hkstocks: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f19,f20,f21,f23,f24,f25,f26,f22,f33,f11,f62,f128,f136,f115,f152",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Name'
            },
            {
                title: "相关链接",
                key: "",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'hk_stocks'
            },
            {
                title: "最新价(HKD)",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "今开",
                key: "f17",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Open'
            },
            {
                title: "最高",
                key: "f15",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Hign'
            },
            {
                title: "最低",
                key: "f16",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Low'
            },
            {
                title: "昨收",
                key: "f18",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: true,
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "成交量(股)",
                key: "f5",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "成交额(港元)",
                key: "f6",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            },
            {
                title: "加自选",
                key: "addzixuan",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Links'
            }
           
        ],
        sumcount: 20

    },

    //港股 --香港指数
    hkindex: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f33,f11,f62,f128,f136,f115,f152",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Name'
            },
            {
                title: "最新价(HKD)",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "今开",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                key: "f17",
                color: "_f18",
                order: true,
                show: true,
                name: 'Open'
            },
            {
                title: "最高",
                key: "f15",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Hign'
            },
            {
                title: "最低",
                key: "f16",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Low'
            },
            {
                title: "昨收",
                key: "f18",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: true,
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "成交量(股)",
                key: "f5",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "成交额(港元)",
                key: "f6",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            }
           
        ],
        sumcount: 20

    },

    //美股
    usstocks:  {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f33,f11,f62,f128,f136,f115,f152",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Name'
            },
            {
                title: "最新价(美元)",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "开盘价",
                key: "f17",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Open'
            },
            {
                title: "最高价",
                key: "f15",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Hign'
            },
            {
                title: "最低价",
                key: "f16",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Low'
            },
            {
                title: "昨收价",
                key: "f18",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: true,
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "总市值(美元)",
                key: "f20",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true
            },
            {
                title: "市盈率",
                key: "f115",
                order: true,
                cb: function(that, row){
                    return tools.formatNumberSyl(that);
                },
                show: true
            }
           
           
        ],
        sumcount: 20

    },


    //美股指数 
    usindex:  {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f33,f11,f62,f128,f136,f115,f152,f124,f107",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型 <em class="circle " title="已收盘">●</em>
                show: true,
                name: 'number'

            },
            {
                title: "名称",
                key: "f14",
                order: true,
                href: '<a href="//quote.eastmoney.com/unify/r/{{0}}.{{1}}"></a>',
                data: ["f13","f12"],
                show: true,
                name: 'usindex_name'
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "开盘价",
                key: "f17",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Open'
            },
            {
                title: "最高价",
                key: "f15",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Hign'
            },
            {
                title: "最低价",
                key: "f16",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Low'
            },
            {
                title: "昨收价",
                key: "f18",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: true,
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "振幅",
                key: "f7",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber2(that);
                },
                show: true,
                name: 'zhenfu'
            },
            {
                title: "最新行情时间",
                key: "f124",
                order: true,
                show: true,
                cb: function(that, row){
                    return tools.formatNumberTime(that);
                },
                name: 'newtime'
            }
           
        ],
        sumcount: 20

    },

    //全球股市
    globalamerica: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f33,f11,f62,f128,f136,f115,f152,f124,f107",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型 <em class="circle " title="已收盘">●</em>
                show: true,
                name: 'number'

            },
            {
                title: "名称",
                key: "f14",
                order: true,
                href: '<a href="//quote.eastmoney.com/unify/r/{{0}}.{{1}}"></a>',
                data: ["f13","f12"],
                show: true,
                name: 'usindex_name'
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "开盘价",
                key: "f17",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Open'
            },
            {
                title: "最高价",
                key: "f15",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Hign'
            },
            {
                title: "最低价",
                key: "f16",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Low'
            },
            {
                title: "昨收价",
                key: "f18",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: true,
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "振幅",
                key: "f7",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber2(that);
                },
                show: true,
                name: 'zhenfu'
            },
            {
                title: "最新行情时间",
                key: "f124",
                order: true,
                show: true,
                cb: function(that, row){
                    return tools.formatNumberTime(that);
                },
                name: 'newtime'
            }
           
        ],
        sumcount: 20

    },

    //全球股市  centerv2
    globalamerica2: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f33,f11,f62,f128,f136,f115,f152,f124,f107",
        head: [
            {
                title: "名称",
                key: "f14",
                order: false,
                href: '<a href="//quote.eastmoney.com/unify/r/{{0}}.{{1}}"></a>',
                data: ["f13","f12"],
                show: true,
                name: 'usindex_name'
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: false,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: false,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: false,
                show: true,
                name: 'ChangePercent'
            }
           
        ],
        sumcount: 21

    },

    
    globalamericaOz: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f33,f11,f62,f128,f136,f115,f152,f124,f107",
        head: [
            {
                title: "名称",
                key: "f14",
                order: false,
                href: '<a href="//quote.eastmoney.com/unify/r/{{0}}.{{1}}"></a>',
                data: ["f13","f12"],
                show: true,
                name: 'usindex_name',
                wenhaoFlag:'<span id="GDR_title3" style="background: url(http://hqres.eastmoney.com/EMQuote_Center3.0/images/ying_wen.png) no-repeat;display:inline-block;width:15px;height:14px;position:relative;top:2px;left: 4px;" title="" class="tooltip-f"></span>'
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: false,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: false,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: false,
                show: true,
                name: 'ChangePercent'
            }
           
        ],
        sumcount: 23

    },


    globalamerica3: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f33,f11,f62,f128,f136,f115,f152,f124,f107",
        head: [
            {
                title: "名称",
                key: "f14",
                order: false,
                href: '<a href="//quote.eastmoney.com/unify/r/{{0}}.{{1}}"></a>',
                data: ["f13","f12"],
                show: true,
                name: 'usindex_name'
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: false,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: false,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },

                // suffix: "%",
                color: "f3",
                order: false,
                show: true,
                name: 'ChangePercent'
            }
           
        ],
        sumcount: 6

    },

    globalamerica4: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f33,f11,f62,f128,f136,f115,f152,f124,f107",
        head: [
            {
                title: "名称",
                key: "f14",
                order: false,
                href: '<a href="//quote.eastmoney.com/unify/r/{{0}}.{{1}}"></a>',
                data: ["f13","f12"],
                show: true,
                name: 'usindex_name'
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: false,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: false,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },

                // suffix: "%",
                color: "f3",
                order: false,
                show: true,
                name: 'ChangePercent'
            }
           
        ],
        sumcount: 3

    },



    //沪深板块
    conceptboard : {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f33,f11,f62,f128,f136,f115,f152,f124,f107,f104,f105,f140,f141,f207,f208,f209,f222",
        head: [
            {
                title: "排名",
                type: "seq",    // type 表示特殊类型 <em class="circle " title="已收盘">●</em>
                show: true,
                name: 'number'

            },
            {
                title: "板块名称",
                key: "f14",
                order: true,
                href: '<a href="//quote.eastmoney.com/unify/r/{{0}}.{{1}}"></a>',
                data: ["f13","f12"],
                show: true,
                name: 'name'
            },
            {
                title: "相关链接",
                key: "",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'concept_board'
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "总市值",
                key: "f20",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true
            },
            {
                title: "换手率",
                key: "f8",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber2(that);
                },
                show: true
            },
            {
                title: "上涨家数",
                key: "f104",
                color: 'red',
                order: true,
                show: true
            },
            {
                title: "下跌家数",
                key: "f105",
                color: 'green',
                order: true,
                show: true
            },
            {
                title: "领涨股票",
                key: "f128",
                order: true,
                href: '<a href="//quote.eastmoney.com/unify/r/{{0}}.{{1}}"></a>',
                data: ["f141","f140"],
                show: true,
                name: 'name',
                cb: function(that, row){
                    return tools.formatNumber3(that);
                }
            },
            {
                title: "涨跌幅",
                key: "f136",
                // suffix: "%",
                color: "f136",
                order: true,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: true,
                name: 'ChangePercent'
            },
            
           
        ],
        sumcount: 20

    },


    //沪深板块--里面小标签
    conceptboardDatil: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f45",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Name'
            },
            {
                title: "相关链接",
                key: "",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Links'
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "成交量(手)",
                key: "f5",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "成交额",
                key: "f6",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            },
            {
                title: "振幅",
                key: "f7",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber2(that);
                },
                show: true,
                name: 'Amplitude'
            },
            {
                title: "最高",
                key: "f15",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Hign'
            },
            {
                title: "最低",
                key: "f16",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Low'
            },
            {
                title: "今开",
                key: "f17",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Open'
            },
            {
                title: "昨收",
                key: "f18",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: true,
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "量比",
                key: "f10",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'VolumeRate'
            },
            {
                title: "换手率",
                key: "f8",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber2(that);
                },
                show: true,
                name: 'TurnoverRate'
            },
            {
                title: "市盈率(动态)",
                key: "f9",
                order: true,
                show: true,
                cb: function(that, row){
                    return tools.formatNumberSyl(that);
                },
                name: 'PERation'
            },
            {
                title: "市净率",
                key: "f23",
                order: true,
                show: true,
                cb: function(that, row){
                    return tools.formatNumberSyl(that);
                },
                name: 'PB'
            },
            {
                title: "净利润",
                key: "f45",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: false
            },
            {
                title: "总市值",
                key: "f20",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: false
            },
            {
                title: "流通市值",
                key: "f21",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: false
            },
            {
                title: "60日涨跌幅",
                key: "f24",
                order: true,
                // suffix: "%",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                color: "f24",
                show: false
            },
            {
                title: "年初至今涨跌幅",
                key: "f25",
                // suffix: "%",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                color: "f25",
                order: true,
                show: false
            },
            {
                title: "涨速",
                key: "f22",
                // suffix: "%",
                color: "f22",
                order: true,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: false
            },
            {
                title: "5分钟涨跌",
                key: "f11",
                color: "f11",
                order: true,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: false
            },
            {
                title: "加自选",
                key: "addzixuan",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Links'
            }
        ],
        sumcount: 20


    },


   //沪深港通 
   hsgt:  {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: false,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: false,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: false,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "成交量(手)",
                key: "f5",
                order: false,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "加自选",
                key: "addzixuan",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Links'
            }
            
        ],
        sumcount: 5
            
    },

     //期货市场---金融期货--能源化工
   qhsc_jq:  {
    fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152",
    head: [
        {
            title: "序号",
            type: "seq",    // type 表示特殊类型
            show: true,
            name: 'number'

        },
        {
            title: "代码",
            key: "f12",
            order: false,
            href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
            data: ["f13","f12"],
            show: true,
            name: 'Code'
        },
        {
            title: "名称",
            key: "f14",
            order: false,
            href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
            data: ["f13","f12"],
            show: true
        },
        {
            title: "最新价",
            key: "f2",
            fixedkey: 'f1',
            newcb: function(value, fixednum){
                return tools.formatNumberFlag(value, fixednum);
            },
            // suffix: "%",
            color: "f3",
            order: false,
            show: true,
            name: 'Close'
        },
        {
            title: "涨跌额",
            key: "f4",
            fixedkey: 'f1',
            newcb: function(value, fixednum){
                return tools.formatNumberFlag(value, fixednum);
            },
            // suffix: "%",
            color: "f4",
            order: false,
            show: true,
            name: 'Change'
        },
        {
            title: "涨跌幅",
            key: "f3",
            fixedkey: 'f152',
            newcb: function(value, fixednum){
                return tools.formatNumberIndexZdf(value, fixednum);
            },
            // suffix: "%",
            color: "f3",
            order: false,
            show: true,
            name: 'ChangePercent'
        },
        {
            title: "所属交易所",
            key: "f13",
            order: false,
            data: ["f13"],
            newcb: function(value){
                return tools.formatNumberQhsc(value);
            },
            show: true
        }
       
        
    ],
    sumcount: 5
        
},

    //港股市场 centerv2
     //沪深港通 
     ggsc:  {
    fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152",
    head: [
        {
            title: "序号",
            type: "seq",    // type 表示特殊类型
            show: true,
            name: 'number'

        },
        {
            title: "代码",
            key: "f12",
            order: false,
            href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
            data: ["f13","f12"],
            show: true,
            name: 'Code'
        },
        {
            title: "名称",
            key: "f14",
            order: false,
            href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
            data: ["f13","f12"],
            show: true
        },
        {
            title: "最新价",
            key: "f2",
            fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
            },
            // suffix: "%",
            color: "_f18",
            order: false,
            show: true,
            name: 'Close'
        },
        {
            title: "涨跌额",
            key: "f4",
            fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
            // suffix: "%",
            color: "f4",
            order: false,
            show: true,
            name: 'Change'
        },
        {
            title: "涨跌幅",
            key: "f3",
            fixedkey: 'f152',
            newcb: function(value, fixednum){
                return tools.formatNumberIndexZdf(value, fixednum);
            },
            // suffix: "%",
            color: "f3",
            order: false,
            show: true,
            name: 'ChangePercent'
        },
        {
            title: "成交量(手)",
            key: "f5",
            order: false,
            cb: function(that, row){
                return tools.formatNumber(that);
            },
            show: true,
            name: 'Volume'
        },
        {
            title: "加自选",
            key: "addzixuan",
            order: false,
            href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
            data: ["f13","f12"],
            show: true,
            name: 'Links'
        }
        
    ],
    sumcount: 5
        
     },

     //港股市场--adr
     hkadr :  {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f213,f214,f220,f219,f217,f218",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'
            },
            {
                title: "港股名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true
            },
            {
                title: "港股代码",
                key: "f12",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "ADR代码",
                key: "f213",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f214","f213"],
                show: true,
                name: 'Code'
            },
            {
                title: "ADR收市价(USD)",
                key: "f219",
                fixedkey: 'f1',
                    newcb: function(value, fixednum){
                        return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f217",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f217",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f217",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f218",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f218",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "折合每股港元",
                key: "f220",
                fixedkey: 'f1',
                    newcb: function(value, fixednum){
                        return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                order: true,
                show: true,
                name: 'Close'
            },
            
        ],
        sumcount: 20
            
    },


    //基金市场
    fundcloseend: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true
            },
            {
                title: "相关链接",
                key: "",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'fundcloseend_Links'
            },
            {
                title: "最新价",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                key: "f2",
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "成交量",
                key: "f5",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "成交额",
                key: "f6",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            },
            {
                title: "开盘价",
                key: "f17",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Open'
            },
            {
                title: "最高价",
                key: "f15",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Hign'
            },
            {
                title: "最低价",
                key: "f16",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Low'
            },
            {
                title: "昨收",
                key: "f18",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: true,
                show: true,
                name: 'PreviousClose'
            }
        ],
        sumcount: 20
            
    },

    //基金市场  内部 小标签
    fundcloseend2: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true
            },
            {
                title: "相关链接",
                key: "",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'fundcloseend_Links'
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: false,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: false,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: false,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "成交量",
                key: "f5",
                order: false,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "成交额",
                key: "f6",
                order: false,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            },
            {
                title: "开盘价",
                key: "f17",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: false,
                show: true,
                name: 'Open'
            },
            {
                title: "最高价",
                key: "f15",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: false,
                show: true,
                name: 'Hign'
            },
            {
                title: "最低价",
                key: "f16",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: false,
                show: true,
                name: 'Low'
            },
            {
                title: "昨收",
                key: "f18",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: false,
                show: true,
                name: 'PreviousClose'
            }
        ],
        sumcount: 5
            
    },

    //债券市场-centerv2-债券指数
    Zqzqzs: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true
            },
            {
                title: "最新",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: false,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: false,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: false,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "今开",
                key: "f17",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: false,
                show: true,
                name: 'Open'
            },
            {
                title: "最高",
                key: "f15",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: false,
                show: true,
                name: 'Hign'
            },
            {
                title: "最低",
                key: "f16",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: false,
                show: true,
                name: 'Low'
            },
            {
                title: "昨收",
                key: "f18",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: false,
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "成交量",
                key: "f5",
                order: false,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "成交额",
                key: "f6",
                order: false,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            }
        ],
        sumcount: 5
            
    },


    //债券市场
    bond: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f33,f11,f62,f128,f136,f115,f152",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Name'
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "今开",
                key: "f17",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Open'
            },
            {
                title: "最高",
                key: "f15",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Hign'
            },
            {
                title: "最低",
                key: "f16",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Low'
            },
            {
                title: "昨收",
                key: "f18",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: true,
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "成交量(手)",
                key: "f5",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "成交额",
                key: "f6",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            }
           
        ],
        sumcount: 20

    },

     //债券市场  按市场额度 排序
     bondnew: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f33,f11,f62,f128,f136,f115,f152",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Name'
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "今开",
                key: "f17",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Open'
            },
            {
                title: "最高",
                key: "f15",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Hign'
            },
            {
                title: "最低",
                key: "f16",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Low'
            },
            {
                title: "昨收",
                key: "f18",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: true,
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "成交量(手)",
                key: "f5",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "成交额",
                key: "f6",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            }
           
        ],
        sumcount: 20

    },


    //债券市场 centerv2
    bondmine: {
        fields: "f1,f2,f3,f4,f14,f12,f13,f62,f128,f136,f152,f184",
        head: [
            {
                title: "名称",
                key: "f14",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: false,
                show: true
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: false,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: false,
                show: true,
                name: 'ChangePercent'
            }
        ],
        sumcount: 5
            
    },


    //外汇市场
    forex: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "今开",
                key: "f17",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Open'
            },
            {
                title: "最高",
                key: "f15",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Hign'
            },
            {
                title: "最低",
                key: "f16",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Low'
            },
            {
                title: "昨收",
                key: "f18",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: true,
                show: true,
                name: 'PreviousClose'
            }
        ],
        sumcount: 20
            
    },

    //外汇市场--外汇牌价
    whpj: {
        fields: "f1,f12,f13,f14,f31,f32,f142,f143,f124",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: true,
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: true,
                show: true
            },
            {
                title: "现汇买入价",
                key: "f31",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "现钞买入价",
                key: "f142",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "现汇卖出价",
                key: "f32",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "现钞卖出价",
                key: "f143",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "更新时间",
                key: "f124",
                order: true,
                cb: function(that, row){
                    return tools.formatNumberTime(that);
                },
                show: true,
                name: 'PreviousClose'
            }
   
        ],
        sumcount: 20
            
    },

    //外汇市场  centerv2
    forex2: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152",
        head: [
            {
                title: "代码",
                key: "f12",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: false,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: false,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: false,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "开盘",
                key: "f17",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: false,
                show: true,
                name: 'Open'
            },
            {
                title: "最高",
                key: "f15",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: false,
                show: true,
                name: 'Hign'
            },
            {
                title: "最低",
                key: "f16",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: false,
                show: true,
                name: 'Low'
            },
            {
                title: "昨收",
                key: "f18",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: false,
                show: true,
                name: 'PreviousClose'
            }
        ],
        sumcount: 5
            
    },


    //期权市场
    qqsc: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f28,f11,f62,f128,f136,f115,f152,f133,f108,f163,f161,f162",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f28",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "成交量",
                key: "f5",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "成交额",
                key: "f6",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            },
            {
                title: "持仓量",
                key: "f108",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            },
            {
                title: "行权价",
                key: "f161",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber4(that);
                },
                show: true,
                name: 'Amount'
            },
            {
                title: "剩余日",
                key: "f162",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            },
            {
                title: "日增",
                key: "f163",
                order: true,
                color: "f163",
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            },
            {
                title: "昨结",
                key: "f28",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: true,
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "今开",
                key: "f17",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f28",
                order: true,
                show: true,
                name: 'Open'
            }
        ],
        sumcount: 20
            
    },


    //黄金市场
    gold: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f28,f11,f62,f128,f136,f115,f152,f133,f124",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "品种",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f28",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "今开",
                key: "f17",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f28",
                order: true,
                show: true,
                name: 'Open'
            },
            {
                title: "最高",
                key: "f15",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f28",
                order: true,
                show: true,
                name: 'Hign'
            },
            {
                title: "最低",
                key: "f16",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f28",
                order: true,
                show: true,
                name: 'Low'
            },
            {
                title: "昨结",
                key: "f28",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: true,
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "更新时间",
                key: "f124",
                order: true,
                cb: function(that, row){
                    return tools.formatNumberTime(that);
                },
                show: true,
                name: 'PreviousClose'
            }
            
        ],
        sumcount: 20
            
    },


    //黄金市场--centerv2
    gold2: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f28,f11,f62,f128,f136,f115,f152,f133,f124",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "品种",
                key: "f14",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: false,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: false,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: false,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "今开",
                key: "f17",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f28",
                order: false,
                show: true,
                name: 'Open'
            },
            {
                title: "最高",
                key: "f15",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f28",
                order: false,
                show: true,
                name: 'Hign'
            },
            {
                title: "最低",
                key: "f16",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f28",
                order: false,
                show: true,
                name: 'Low'
            },
            {
                title: "昨结",
                key: "f28",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: false,
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "更新时间",
                key: "f124",
                order: false,
                cb: function(that, row){
                    return tools.formatNumberTime(that);
                },
                show: true,
                name: 'PreviousClose'
            }
            
        ],
        sumcount: 5
            
    },


    //沪深板块
    hsbk: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f133,f104,f105",
        head: [
            {
                title: "排名",
                type: "seq",    // type 表示特殊类型
                show: true,
                order: false,
                name: 'number'

            },
            {
                title: "板块名称",
                key: "f14",
                order: false,
                href: '<a href="//quote.eastmoney.com/unify/r/{{0}}.{{1}}" title="{{2}}"></a>',
                data: ["f13","f12","f14"],
                show: true,
                name: 'name'
            },
            {
                title: "相关链接",
                key: "",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'concept_board'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: false,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "换手率",
                key: "f8",
                order: false,
                cb: function(that, row){
                    return tools.formatNumber2(that);
                },
                show: true,
                name: 'TurnoverRate'
            },
            {
                title: "涨跌家数",
                key: "",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'zhangdiejia'
            },
            {
                title: "领涨股票",
                key: "f128",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f141","f140","f128"],
                show: true,
                cb: function(that, row){
                    return tools.formatNumber3(that);
                }
            },
            {
                title: "涨跌幅",
                key: "f136",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f136",
                order: false,
                show: true
            }


            
        ],
        sumcount: 10
            
    },

    //沪深板块 跌幅榜
    hsbkd: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f133,f104,f105,f128,f136,f207,f208,f209,f222",
        head: [
            {
                title: "排名",
                type: "seq",    // type 表示特殊类型
                show: true,
                order: false,
                name: 'number'

            },
            {
                title: "板块名称",
                key: "f14",
                order: false,
                href: '<a href="//quote.eastmoney.com/unify/r/{{0}}.{{1}}" title="{{2}}"></a>',
                data: ["f13","f12","f14"],
                show: true,
                name: 'name'
            },
            {
                title: "相关链接",
                key: "",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'concept_board'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: false,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "换手率",
                key: "f8",
                order: false,
                cb: function(that, row){
                    return tools.formatNumber2(that);
                },
                show: true,
                name: 'TurnoverRate'
            },
            {
                title: "涨跌家数",
                key: "",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'zhangdiejia'
            },
            {
                title: "领跌股票",
                key: "f207",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f209","f208","f207"],
                show: true,
                cb: function(that, row){
                    return tools.formatNumber3(that);
                }
            },
            {
                title: "涨跌幅",
                key: "f222",
                // suffix: "%",
                color: "f222",
                order: false,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: true
            },


            
        ],
        sumcount: 10
            
    },

    hsbklz: {
    fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f22,f11,f62,f128,f136,f115,f152,f133,f104,f105",
    head: [
        {
            title: "板块名称",
            key: "f14",
            order: false,
            href: "<a href='/center/boardlist.html#boards2-{{0}}.{{1}}' title='{{2}}'></a>",
            data: ["f13", "f12","f14"],
            show: true
        },
        {
            title: "涨跌幅",
            key: "f3",
            // suffix: "%",
            color: "f3",
            order: false,
            fixedkey: 'f152',
            newcb: function(value, fixednum){
                return tools.formatNumberIndexZdf(value, fixednum);
            },
            show: true
        },
        {
            title: "领涨股票",
            key: "f128",
            order: false,
            href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
            data: ["f141","f140","f128"],
            show: true,
            cb: function(that, row){
                return tools.formatNumber3(that);
            }
        },
        {
            title: "涨跌幅",
            key: "f136",
            fixedkey: 'f152',
            newcb: function(value, fixednum){
                return tools.formatNumberIndexZdf(value, fixednum);
            },
            // suffix: "%",
            color: "f136",
            order: false,
            show: true
        },
    ],
    sumcount: 5

    },


    //沪深指数 --上证系列  深圳系列
    hszs: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f11,f62,f128,f136,f115,f152",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Name'
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: false,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: false,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: false,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "成交量",
                key: "f5",
                order: false,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "成交额",
                key: "f6",
                order: false,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            },
            {
                title: "昨收",
                key: "f18",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: false,
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "今开",
                key: "f17",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: false,
                show: true,
                name: 'Open'
            },
            {
                title: "最高",
                key: "f15",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: false,
                show: true,
                name: 'Hign'
            },
            {
                title: "最低",
                key: "f16",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: false,
                show: true,
                name: 'Low'
            }
           
        ],
        sumcount: 5


    },

    //沪深指数 --沪深重要指数
    hszs2: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f11,f62,f128,f136,f115,f152",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Name'
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: false,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: false,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: false,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "成交量",
                key: "f5",
                order: false,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "成交额",
                key: "f6",
                order: false,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            },
            {
                title: "昨收",
                key: "f18",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: false,
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "今开",
                key: "f17",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: false,
                show: true,
                name: 'Open'
            },
            {
                title: "最高",
                key: "f15",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: false,
                show: true,
                name: 'Hign'
            },
            {
                title: "最低",
                key: "f16",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: false,
                show: true,
                name: 'Low'
            }
           
        ],
        sumcount: 50


    },



    //美股市场
    mgsc: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f11,f62,f128,f136,f115,f152",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'mgsc_name'
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: false,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: false,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: false,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "成交量",
                key: "f5",
                order: false,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            }
           
        ],
        sumcount: 5


    },


    mgsc3: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f11,f62,f128,f136,f115,f152",
        head: [
            {
                title: "名称",
                key: "f14",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'mgsc_name'
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: false,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: false,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: false,
                show: true,
                name: 'Change'
            }
           
            
           
        ],
        sumcount: 5


    },


    //期货市场--港交所--股票期货
    indexqh :{
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f28,f11,f62,f128,f136,f115,f152,f31,f32,f108,f163,f211,f212,f5,f30",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f28",
                order: true,
                show: true
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "买入价",
                key: "f31",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f28",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "卖出价",
                key: "f32",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f28",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "买量",
                key: "f211",
                // suffix: "%",
                color: "red",
                order: true,
                show: true,
                name: 'buycount',
                cb: function(that, row){
                    return tools.formatNumber(that);
                }
            },
            {
                title: "卖量",
                key: "f212",
                // suffix: "%",
                color: "green",
                order: true,
                show: true,
                name: 'sellcount',
                cb: function(that, row){
                    return tools.formatNumber(that);
                }
            },
            {
                title: "总量",
                key: "f5",
                // suffix: "%",
                color: "",
                order: true,
                show: true,
                name: 'Change',
                cb: function(that, row){
                    return tools.formatNumber(that);
                }
            },
            {
                title: "现量",
                key: "f30",
                // suffix: "%",
                color: "",
                order: true,
                show: true,
                name: 'Change',
                cb: function(that, row){
                    return tools.formatNumber(that);
                }
            },
            {
                title: "持仓量",
                key: "f108",
                show:true,
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                }
            },
            {
                title: "日增",
                key: "f163",
                order: true,
                color: "f163",
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            },
            {
                title: "昨结算",
                key: "f28",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: true,
                show: true,
                name: 'PreviousClose'
            }
        ],
        sumcount: 20
            
    },

   
    //期货市场--港交所--除了 股票期货  的其他期货
    indexqhNew :{
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f28,f11,f62,f128,f136,f115,f152,f31,f32,f108,f163,f211,f212,f5,f30",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: true,
                // href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                // data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: true,
                // href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                // data: ["f13","f12"],
                show: true
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f28",
                order: true,
                show: true
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "买入价",
                key: "f31",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f28",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "卖出价",
                key: "f32",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f28",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "买量",
                key: "f211",
                // suffix: "%",
                color: "red",
                order: true,
                show: true,
                name: 'buycount',
                cb: function(that, row){
                    return tools.formatNumber(that);
                }
            },
            {
                title: "卖量",
                key: "f212",
                // suffix: "%",
                color: "green",
                order: true,
                show: true,
                name: 'sellcount',
                cb: function(that, row){
                    return tools.formatNumber(that);
                }
            },
            {
                title: "总量",
                key: "f5",
                // suffix: "%",
                color: "",
                order: true,
                show: true,
                name: 'Change',
                cb: function(that, row){
                    return tools.formatNumber(that);
                }
            },
            {
                title: "现量",
                key: "f30",
                // suffix: "%",
                color: "",
                order: true,
                show: true,
                name: 'Change',
                cb: function(that, row){
                    return tools.formatNumber(that);
                }
            },
            {
                title: "持仓量",
                key: "f108",
                show:true,
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                }
            },
            {
                title: "日增",
                key: "f163",
                order: true,
                color: "f163",
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            },
            {
                title: "昨结算",
                key: "f28",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: true,
                show: true,
                name: 'PreviousClose'
            }
        ],
        sumcount: 20
            
    },



    //中金所
    zjs: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f28,f22,f11,f62,f128,f136,f115,f152,f34,f35,f108",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Name'
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f28",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "今开",
                key: "f17",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f28",
                order: true,
                show: true,
                name: 'Open'
            },
            {
                title: "最高",
                key: "f15",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f28",
                order: true,
                show: true,
                name: 'Hign'
            },
            {
                title: "最低",
                key: "f16",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f28",
                order: true,
                show: true,
                name: 'Low'
            },
            {
                title: "昨结",
                key: "f28",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: true,
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "成交量",
                key: "f5",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "成交额",
                key: "f6",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            },
            {
                title: "买盘(外盘)",
                key: "f34",
                show: true,
                order: true
            },
            {
                title: "卖盘(内盘)",
                key: "f35",
                show: true,
                order: true
            },
            {
                title: "持仓量",
                key: "f108",
                show: true,
                order: true
            }
            
            
        ],
        sumcount: 20


    },


    //期货市场--国际期货
    gjqh: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f28,f11,f62,f128,f136,f115,f152,f34,f35,f108",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Name'
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "今开",
                key: "f17",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Open'
            },
            {
                title: "最高",
                key: "f15",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Hign'
            },
            {
                title: "最低",
                key: "f16",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: true,
                show: true,
                name: 'Low'
            },
            {
                title: "昨结",
                key: "f28",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: true,
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "成交量",
                key: "f5",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "买盘(外盘)",
                key: "f34",
                show: true,
                order: true
            },
            {
                title: "卖盘(内盘)",
                key: "f35",
                show: true,
                order: true
            },
            {
                title: "持仓量",
                key: "f108",
                show: true,
                order: true
            }
            
            
        ],
        sumcount: 20


    },


   //黄金市场--上海黄金期货
    hjqh: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f28,f11,f62,f128,f136,f115,f152,f34,f35,f108,f211,f212",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "f12",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "f14",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Name'
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: false,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: false,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: false,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "今开",
                key: "f17",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: false,
                show: true,
                name: 'Open'
            },
            {
                title: "最高",
                key: "f15",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: false,
                show: true,
                name: 'Hign'
            },
            {
                title: "最低",
                key: "f16",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_f18",
                order: false,
                show: true,
                name: 'Low'
            },
            {
                title: "昨结",
                key: "f28",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: false,
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "成交量(手)",
                key: "f5",
                order: false,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "买量(手)",
                key: "f211",
                // suffix: "%",
                color: "red",
                order: false,
                show: true,
                name: 'buycount',
                cb: function(that, row){
                    return tools.formatNumber(that);
                }
            },
            {
                title: "卖量(手)",
                key: "f212",
                // suffix: "%",
                color: "green",
                order: false,
                show: true,
                name: 'sellcount',
                cb: function(that, row){
                    return tools.formatNumber(that);
                }
            },
            {
                title: "持仓(手)",
                key: "f108",
                show: true,
                order: false
            }
            
            
        ],
        sumcount: 5


    },



    //开始首页的自选指标  模块
    //全部港股跌幅
    hkstocks_cp_asc: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f28,f11,f62,f128,f136,f115,f152,f34,f35,f108",
        head: [
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13","f12","f14"],
                show: true,
                name: 'Name',
                newcb: function(value){
                    return tools.txtPoint(value);
                }

            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: true,
                show: true,
                name: 'Change'
            }
            
        ],
        sumcount: 5
            
    },


    //全部港股  成交量
    CommonVolume: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f28,f11,f62,f128,f136,f115,f152,f34,f35,f108",
        head: [
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13","f12","f14"],
                show: true,
                name: 'Name',
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "成交量",
                key: "f5",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            }
        ],
        sumcount: 5
            
    },

     // 成交额
    CommonAmount: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f28,f11,f62,f128,f136,f115,f152,f34,f35,f108",
        head: [
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13","f12","f14"],
                show: true,
                name: 'Name',
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "成交额",
                key: "f6",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            }
        ],
        sumcount: 5
            
    },


    //沪A涨幅
    sh_a_cp_desc: {
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f28,f11,f62,f128,f136,f115,f152,f34,f35,f108",
        head: [
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13","f12","f14"],
                show: true,
                name: 'Name',
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "涨跌额",
                key: "f4",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f4",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "加自选",
                key: "addzixuan",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Links'
            }
        ],
        sumcount: 5
            
    },


    //沪5分钟涨幅
    AB5MinChangePercent :{
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f28,f11,f62,f128,f136,f115,f152,f34,f35,f108",
        head: [
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13","f12","f14"],
                show: true,
                name: 'Name',
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "五分钟涨跌幅",
                key: "f11",
                color: "f11",
                order: true,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: true
            },
            {
                title: "加自选",
                key: "addzixuan",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Links'
            }
        ],
        sumcount: 5
            
    },


    //换手率
    ABTurnoverRate:{
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f28,f11,f62,f128,f136,f115,f152,f34,f35,f108",
        head: [
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13","f12","f14"],
                show: true,
                name: 'Name',
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "换手率",
                key: "f8",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber2(that);
                },
                show: true,
                name: 'TurnoverRate'
            },
            {
                title: "加自选",
                key: "addzixuan",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Links'
            }
        ],
        sumcount: 5
            
    },


    //量比
    ABVolumeRate:{
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f28,f11,f62,f128,f136,f115,f152,f34,f35,f108",
        head: [
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13","f12","f14"],
                show: true,
                name: 'Name',
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "量比",
                key: "f10",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber4(that);
                },
                show: true,
                name: 'TurnoverRate'
            },
            {
                title: "加自选",
                key: "addzixuan",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Links'
            }
        ],
        sumcount: 5
            
    },


    //振幅
    ABAmplitude:{
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f28,f11,f62,f128,f136,f115,f152,f34,f35,f108",
        head: [
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13","f12","f14"],
                show: true,
                name: 'Name',
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "振幅",
                key: "f7",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber2(that);
                },
                show: true,
                name: 'Amplitude'
            },
            {
                title: "加自选",
                key: "addzixuan",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Links'
            }
        ],
        sumcount: 5
            
    },


    //成交额
    ABAmount:{
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f28,f11,f62,f128,f136,f115,f152,f34,f35,f108",
        head: [
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13","f12","f14"],
                show: true,
                name: 'Name',
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "成交额",
                key: "f6",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            },
            {
                title: "加自选",
                key: "addzixuan",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Links'
            }
        ],
        sumcount: 5
            
    },


    //市盈率 
    ABPE:{
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f28,f11,f62,f128,f136,f115,f152,f34,f35,f108",
        head: [
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13","f12","f14"],
                show: true,
                name: 'Name',
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "市盈率",
                key: "f9",
                order: true,
                show: true,
                cb: function(that, row){
                    return tools.formatNumberSyl(that);
                },
                name: 'PERation'
            },
            {
                title: "加自选",
                key: "addzixuan",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Links'
            }
        ],
        sumcount: 5
            
    },


    //市净率
    ABPB:{
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f28,f11,f62,f128,f136,f115,f152,f34,f35,f108",
        head: [
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13","f12","f14"],
                show: true,
                name: 'Name',
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "市净率",
                key: "f23",
                order: true,
                show: true,
                cb: function(that, row){
                    return tools.formatNumberSyl(that);
                },
                name: 'PB'
            },
            {
                title: "加自选",
                key: "addzixuan",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Links'
            }
        ],
        sumcount: 5
            
    },


    //流通市值
    ABFlowCapitalValue:{
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f28,f11,f62,f128,f136,f115,f152,f34,f35,f108",
        head: [
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13","f12","f14"],
                show: true,
                name: 'Name',
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "流通市值",
                key: "f21",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true
            },
            {
                title: "加自选",
                key: "addzixuan",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Links'
            }
        ],
        sumcount: 5
            
    },


    //总市值
    ABMarketValue:{
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f28,f11,f62,f128,f136,f115,f152,f34,f35,f108",
        head: [
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13","f12","f14"],
                show: true,
                name: 'Name',
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "总市值",
                key: "f20",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true
            },
            {
                title: "加自选",
                key: "addzixuan",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Links'
            }
        ],
        sumcount: 5
            
    },


    //60日涨跌幅
    AB60DayChangePercent:{
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f28,f11,f62,f128,f136,f115,f152,f34,f35,f108",
        head: [
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13","f12","f14"],
                show: true,
                name: 'Name',
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "60日涨跌幅",
                key: "f24",
                order: true,
                // suffix: "%",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                color: "f24",
                show: true
            },
            {
                title: "加自选",
                key: "addzixuan",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Links'
            }
        ],
        sumcount: 5
            
    },


    //年初至今涨跌幅
    AB360DayChangePercent:{
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f28,f11,f62,f128,f136,f115,f152,f34,f35,f108",
        head: [
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13","f12","f14"],
                show: true,
                name: 'Name',
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "年初至今涨跌幅",
                key: "f25",
                order: true,
                suffix: "%",
                color: "f25",
                show: true
            },
            {
                title: "加自选",
                key: "addzixuan",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Links'
            }
        ],
        sumcount: 5
            
    },


    //涨速
    ABSpeed:{
        fields: "f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f12,f13,f14,f15,f16,f17,f18,f20,f21,f23,f24,f25,f26,f22,f28,f11,f62,f128,f136,f115,f152,f34,f35,f108",
        head: [
            {
                title: "名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13","f12","f14"],
                show: true,
                name: 'Name',
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "_f18",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "涨速",
                key: "f22",
                order: true,
                suffix: "%",
                color: "f22",
                show: true
            },
            {
                title: "加自选",
                key: "addzixuan",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Links'
            }
        ],
        sumcount: 5
            
    },


    //行业涨跌幅  概念 地域   涨
    BoardsCPAsc:{
        fields: "f1,f2,f3,f14,f12,f13,f62,f128,f136,f152",
        head: [
            {
                title: "名称",
                key: "f14",
                order: false,
                href: "<a href='/center/boardlist.html#boards2-{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13", "f12","f14"],
                show: true,
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "涨跌幅",
                key: "f3",
                // suffix: "%",
                color: "f3",
                order: false,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: true
            },
            {
                title: "主力净流入",
                key: "f62",
                color: "f62",
                order: false,
                cb: function(that, row){
                    return tools.formatNumberIndex(that);
                },
                show: true
            },
            {
                title: "领涨股",
                key: "f128",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f141","f140","f128"],
                show: true,
                // cb: function(that, row){
                //     return tools.formatNumber3(that);
                // }
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "涨跌幅",
                key: "f136",
                // suffix: "%",
                color: "f136",
                order: false,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: true
            },
        ],
        sumcount: 5
            
    },


    //行业涨跌幅  概念 地域   跌幅
    BoardsCPAscd:{
        fields: "f1,f2,f3,f14,f12,f13,f62,f128,f136,f152,f207,f208,f209,f222",
        head: [
            {
                title: "名称",
                key: "f14",
                order: false,
                href: "<a href='/center/boardlist.html#boards2-{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13", "f12","f14"],
                show: true,
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "涨跌幅",
                key: "f3",
                // suffix: "%",
                color: "f3",
                order: false,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: true
            },
            {
                title: "主力净流入",
                key: "f62",
                color: "f62",
                order: false,
                cb: function(that, row){
                    return tools.formatNumberIndex(that);
                },
                show: true
            },
            {
                title: "领跌股",
                key: "f207",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f209","f208","f207"],
                show: true,
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "涨跌幅",
                key: "f222",
                // suffix: "%",
                color: "f222",
                order: false,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: true
            },
        ],
        sumcount: 5
            
    },



    //行业 概念  地域  换手率
    BoardsTurnoverRate: {
        fields: "f1,f2,f3,f8,f14,f12,f13,f62,f128,f136,f152",
        head: [
            {
                title: "名称",
                key: "f14",
                order: false,
                href: "<a href='/center/boardlist.html#boards2-{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13", "f12","f14"],
                show: true,
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "涨跌幅",
                key: "f3",
                // suffix: "%",
                color: "f3",
                order: false,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: true
            },
            {
                title: "换手率",
                key: "f8",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber2(that);
                },
                show: true,
                name: 'TurnoverRate'
            },
            {
                title: "领涨股",
                key: "f128",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f141","f140","f128"],
                show: true,
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "涨跌幅",
                key: "f136",
                // suffix: "%",
                color: "f136",
                order: false,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: true
            },
        ],
        sumcount: 5
            
    },




    //行业 概念 地域 涨速
    BoardsSpeed: {
        fields: "f1,f2,f3,f8,f14,f12,f13,f22,f62,f128,f136,f152",
        head: [
            {
                title: "名称",
                key: "f14",
                order: false,
                href: "<a href='/center/boardlist.html#boards2-{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13", "f12","f14"],
                show: true,
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "涨跌幅",
                key: "f3",
                // suffix: "%",
                color: "f3",
                order: false,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: true
            },
            {
                title: "涨速",
                key: "f22",
                color: 'f22',
                order: true,
                cb: function(that, row){
                    return tools.formatNumber2(that);
                },
                show: true,
                name: 'TurnoverRate'
            },
            {
                title: "领涨股",
                key: "f128",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f141","f140","f128"],
                show: true,
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "涨跌幅",
                key: "f136",
                // suffix: "%",
                color: "f136",
                order: false,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: true
            },
        ],
        sumcount: 6
            
    },


    //行业 概念 地域  成交额
    BoardsAmount: {
        fields: "f1,f2,f3,f6,f8,f14,f12,f13,f22,f62,f128,f136,f152",
        head: [
            {
                title: "名称",
                key: "f14",
                order: false,
                href: "<a href='/center/boardlist.html#boards2-{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13", "f12","f14"],
                show: true,
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "涨跌幅",
                key: "f3",
                // suffix: "%",
                color: "f3",
                order: false,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: true
            },
            {
                title: "成交额",
                key: "f6",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Amount'
            },
            {
                title: "领涨股",
                key: "f128",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f141","f140","f128"],
                show: true,
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "涨跌幅",
                key: "f136",
                // suffix: "%",
                color: "f136",
                order: false,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: true
            },
        ],
        sumcount: 6
            
    },


    //行业板块 增仓
    BoardsPosition: {
        fields: "f1,f2,f3,f6,f8,f14,f12,f13,f22,f62,f128,f136,f152,f184,f225,f226",
        head: [
            {
                title: "名称",
                key: "f14",
                order: false,
                href: "<a href='/center/boardlist.html#boards2-{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13", "f12","f14"],
                show: true,
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "涨跌幅",
                key: "f3",
                // suffix: "%",
                color: "f3",
                order: false,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: true
            },
            {
                title: "增仓占比",
                key: "f184",
                color: "f184",
                order: true,
                cb: function(that, row){
                    return tools.formatNumberZCZB(that);
                },
                show: true,
                name: 'zczb'
            },
            {
                title: "排名",
                key: "f225",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'paim'
            },
            {
                title: "排行变化",
                key: "f226",
                color: "f226",
                order: true,
                cb: function(that, row){
                    return tools.formatPaiming(that);
                },
                show: true,
                name: 'pmchange'
            }
        ],
        sumcount: 6
            
    },


    //大盘资金流向
    MainCaptialFlow: {
        fields: "f1,f2,f3,f14,f12,f13,f62,f128,f136,f152,f184",
        head: [
            {
                title: "名称",
                key: "f14",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13","f12","f14"],
                show: true,
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "f3",
                order: false,
                show: true
            },
            {
                title: "涨跌幅",
                key: "f3",
                // suffix: "%",
                color: "f3",
                order: false,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: true
            },
            {
                title: "主力净流入",
                key: "f62",
                color: "f62",
                order: false,
                cb: function(that, row){
                    return tools.formatNumberIndex(that);
                },
                show: true
            },
            //净占比 字段需要修改
            {
                title: "净占比",
                key: "f184",
                color: "f184",
                order: false,
                cb: function(that, row){
                    return tools.formatNumberJZB(that);
                },
                show: true
            }
        ],
        sumcount: 5
            
    },


    //主力排名
    FFRanking: {
        fields: "f1,f2,f3,f14,f12,f13,f62,f128,f136,f152,f184,f223",
        head: [
            {
                title: "名称",
                key: "f14",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13","f12","f14"],
                show: true,
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "f3",
                order: false,
                show: true
            },
            //净占比 字段需要修改
            {
                title: "净占比",
                key: "f184",
                color: "f184",
                order: false,
                cb: function(that, row){
                    return tools.formatNumberJZB(that);
                },
                show: true
            },
            {
                title: "排名",
                key: "f223",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'paim'
            },
            {
                title: "涨跌幅",
                key: "f3",
                // suffix: "%",
                color: "f3",
                order: false,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: true
            }
            
        ],
        sumcount: 5
            
    },


    //行业资金流
    BoardsCaptialFlow: {
        fields: "f1,f2,f3,f6,f8,f14,f12,f13,f22,f62,f128,f136,f152,f204,f184",
        head: [
            {
                title: "名称",
                key: "f14",
                order: false,
                href: "<a href='/center/boardlist.html#boards2-{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13", "f12","f14"],
                show: true,
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "涨跌幅",
                key: "f3",
                // suffix: "%",
                color: "f3",
                order: false,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: true
            },
            {
                title: "主力净流入",
                key: "f62",
                color: "f62",
                order: false,
                cb: function(that, row){
                    return tools.formatNumberIndex(that);
                },
                show: true
            },
            //净占比 字段需要修改
            {
                title: "净占比",
                key: "f184",
                color: "f184",
                order: false,
                cb: function(that, row){
                    return tools.formatNumberJZB(that);
                },
                show: true
            },
            {
                title: "主力流入最大股",
                key: "f204",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f206", "f205","f204"],
                show: true,
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            }
        ],
        sumcount: 5
            
    },


     //个股资金流 流入和流出
     zijinliuGegu: {
        fields: "f1,f2,f3,f14,f12,f13,f62,f128,f136,f152,f184",
        head: [
            {
                title: "名称",
                key: "f14",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}' title='{{2}}'></a>",
                data: ["f13","f12","f14"],
                show: true,
                newcb: function(value){
                    return tools.txtPoint(value);
                }
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "f3",
                order: false,
                show: true
            },
            {
                title: "涨跌幅",
                key: "f3",
                // suffix: "%",
                color: "f3",
                order: false,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: true
            },
            {
                title: "主力净流入",
                key: "f62",
                color: "f62",
                order: false,
                cb: function(that, row){
                    return tools.formatNumberIndex(that);
                },
                show: true
            },
            //净占比 字段需要修改
            {
                title: "净占比",
                key: "f184",
                color: "f184",
                order: false,
                cb: function(that, row){
                    return tools.formatNumberJZB(that);
                },
                show: true
            }
        ],
        sumcount: 5
            
    },




    //债券市场  可转债比价表
    fullscreenlist: {
        fields: "f1,f152,f2,f3,f12,f13,f14,f227,f228,f229,f230,f231,f232,f233,f234,f235,f236,f237,f238,f239,f240,f241,f242,f26,f243",
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "转债代码",
                key: "f12",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Code'
            },
            {
                title: "转债名称",
                key: "f14",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'Name'
            },
            {
                title: "最新价",
                key: "f2",
                fixedkey: 'f1',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f3",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                // suffix: "%",
                color: "f3",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "相关链接",
                key: "",
                order: false,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f13","f12"],
                show: true,
                name: 'fullscreen_Links'
            },
            {
                title: "正股代码",
                key: "f232",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f233","f232"],
                show: true,
                name: 'Code'
            },
            {
                title: "正股名称",
                key: "f234",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["f233","f232"],
                show: true,
                name: 'Name'
            },
            {
                title: "最新价",
                key: "f229",
                fixedkey: 'f1',
                cb: function(that, row){
                    return tools.formatNumberJiaZ(that, 2);
                },
                color: "f230",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "f230",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                color: "f230",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "转股价",
                key: "f235",
                order: true,
                cb: function(that, row){
                    return tools.formatNumberSyl(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "转股价值",
                key: "f236",
                order: true,
                cb: function(that, row){
                    return tools.formatNumberJiaZ(that, 4);
                },
                show: true,
                name: 'zgValue'
            },
            {
                title: "转股溢价率",
                key: "f237",
                order: true,
                color: "f237",
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: true,
                name: 'zgYjb'
            },
            {
                title: "纯债溢价率",
                key: "f238",
                color: "f238",
                order: true,
                fixedkey: 'f152',
                newcb: function(value, fixednum){
                    return tools.formatNumberIndexZdf(value, fixednum);
                },
                show: true,
                name: 'czYjl'
            },
            {
                title: "回售触发价",
                key: "f239",
                order: true,
                cb: function(that, row){
                    return tools.formatNumberSyl(that);
                },
                show: true,
                name: 'hsCfj'
            },
            {
                title: "强赎触发价",
                key: "f240",
                order: true,
                cb: function(that, row){
                    return tools.formatNumberSyl(that);
                },
                show: true,
                name: 'qsCfj'
            },
            {
                title: "到期赎回价",
                key: "f241",
                order: true,
                cb: function(that, row){
                    return tools.formatNumberSyl(that);
                },
                show: true,
                name: 'dqShj'
            },
            {
                title: "纯债价值",
                key: "f227",
                order: true,
                cb: function(that, row){
                    return tools.formatNumberSyl(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "开始转股日",
                key: "f242",
                order: true,
                show: true,
                name: 'shtime',
                cb: function(that, row){
                    return tools.formatNumber3(that);
                }
            },
            {
                title: "上市日期",
                key: "f26",
                order: true,
                show: true,
                name: 'shtime',
                cb: function(that, row){
                    return tools.formatNumber3(that);
                }
            },
            {
                title: "申购日期",
                key: "f243",
                order: true,
                show: true,
                name: 'shtime',
                cb: function(that, row){
                    return tools.formatNumber3(that);
                }
            },
            {
                title: "加自选",
                key: "addzixuan",
                order: false,
                // href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                // data: ["f13","f12"],
                show: true,
                name: 'Links'
            }
        ],
        sumcount: 50


    },


    //债券市场  可转债比价表
    txbj: {
        fields: 'f1,f2,f3,f4,f5,f12,f13,f14,f108,f152,f161,f249,f250,f330,f339,f340,f341,f342,f343,f344,f345,f346,f347',
        head: [
            {
                title: "名称",
                key: "f14",
                order: false,
                name: 'gouName',
                tips:"非标准合约第一次调整，行权价增加标识A；第二次调整，行权价增加标识B"
            },
            {
                title: "最新",
                key: "f2",
                order: true,
                name: 'gouZxj'
            },
            {
                title: "涨跌幅",
                key: "f3",
                order: true,
                name: 'gouZdf'
            },
            {
                title: "涨跌额",
                key: "f4",
                order: true,
                name: 'gouZde'
            },
            {
                title: "持仓量",
                key: "f108",
                order: true,
                name: 'gouCcl'
            },
            {
                title: "成交量",
                key: "f5",
                order: true,
                name: 'gouCjl'
            },
            {
                title: "隐含波动率",
                key: "f249",
                order: true,
                name: 'gouYxbd',
                tips:"隐含波动率(Implied Volatility)是将市场上的期权或权证交易价格代入权证理论价格模型<Black-Scholes模型>，反推出来的波动率数值"
            },
            {
                title: "折溢价率",
                key: "f250",
                order: true,
                name: 'gouYxbd',
                tips:'期权到期前，标的物价格需要变动多少百分比才可让期权投资者在到期日实现损益平衡。溢价率衡量期权风险高低，该值越高，实现损益平衡越不容易，投资风险越高'
            },
            {
                title: "行权价",
                key: "f161",
                order: true,
                name: 'xqj',
                tips:"T型报价的行权价以同一行权价格为中心，左侧为认购期权的相关行情，右侧为认沽期权相关行情"
            },
            {
                title: "名称",
                key: "f340",
                order: false,
                name: 'guName',
                tips:"非标准合约第一次调整，行权价增加标识A；第二次调整，行权价增加标识B"
            },
            {
                title: "最新",
                key: "f339",
                order: true,
                name: 'guZxj'
            },
            {
                title: "涨跌幅",
                key: "f341",
                order: true,
                name: 'guZdf'
            },
            {
                title: "涨跌额",
                key: "f342",
                order: true,
                name: 'guZde'
            },
            {
                title: "持仓量",
                key: "f345",
                order: true,
                name: 'guCcl'
            },
            {
                title: "成交量",
                key: "f344",
                order: true,
                name: 'guCjl'
            },
            {
                title: "隐含波动率",
                key: "f346",
                order: true,
                name: 'guYxbd',
                tips:"隐含波动率(Implied Volatility)是将市场上的期权或权证交易价格代入权证理论价格模型<Black-Scholes模型>，反推出来的波动率数值"
            },
            {
                title: "折溢价率",
                key: "f347",
                order: true,
                name: 'guYxbd',
                tips:'期权到期前，标的物价格需要变动多少百分比才可让期权投资者在到期日实现损益平衡。溢价率衡量期权风险高低，该值越高，实现损益平衡越不容易，投资风险越高'
            },
           
        ],
        sumcount: 50


    }


};

/***/ }),

/***/ "./ClientApp/gridlist3/index.js":
/*!**************************************!*\
  !*** ./ClientApp/gridlist3/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var bankuai = __webpack_require__(/*! ./newbankuai */ "./ClientApp/gridlist3/newbankuai.js");
var indexjson = __webpack_require__(/*! ../config/index.square.cfg.json */ "./ClientApp/config/index.square.cfg.json");

var qihuo = __webpack_require__(/*! ../qihuo/newQihuo */ "./ClientApp/qihuo/newQihuo.js");
var TXingBaoJia = __webpack_require__(/*! ./txbj */ "./ClientApp/gridlist3/txbj.js");
var QhTXingBaoJia = __webpack_require__(/*! ../qihuo/txbj */ "./ClientApp/qihuo/txbj.js");

var urlconfig = __webpack_require__(/*! ../qihuo/urlConfig */ "./ClientApp/qihuo/urlConfig.js");

var user = __webpack_require__(/*! ../user */ "./ClientApp/user/index.js")
var islogin = user.get() ? true: false

function addQqAds(){
    if($('.qqiframe').length){
        return;
    }
    $('.page-wrapper').prepend('<iframe class="qqiframe" width="1200" height="60" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" src="http://same.eastmoney.com/s?z=eastmoney&c=1659&op=1" ></iframe>')
}



module.exports = function() {


    // console.log('新的方法');
    //沪深个股 
    var url = window.location.href;
    var hu_plag = url.split("#")[1];
    // console.log(hu_plag);

    //统一 延迟声明 隐藏
    $("#yssm").hide();
    $('.linkToApp').remove();

    switch(hu_plag) {
        //沪深a股
        case 'hs_a_board':
           var new_bankuai = new bankuai(indexjson.ops4);
           new_bankuai.Bankuai("#table_wrapper", "m:0+t:6,m:0+t:13,m:0+t:80,m:1+t:2,m:1+t:23");
           break;
        //上证a股
        case 'sh_a_board':
            var new_bankuai = new bankuai(indexjson.ops4);
            new_bankuai.Bankuai("#table_wrapper", "m:1+t:2,m:1+t:23");
            break;
        //深证a股
        case 'sz_a_board':
            var new_bankuai = new bankuai(indexjson.ops4);
            new_bankuai.Bankuai("#table_wrapper", "m:0+t:6,m:0+t:13,m:0+t:80");
            break;
        //新股
        case 'newshares':
            var new_bankuai = new bankuai(indexjson.opsnewgu);
            new_bankuai.Bankuai("#table_wrapper", "m:0+f:8,m:1+f:8");
            break;
        //中小板
        case 'sme_board':
            var new_bankuai = new bankuai(indexjson.ops4);
            new_bankuai.Bankuai("#table_wrapper", "m:0+t:13");
            break;
        //创业板
        case 'gem_board':
            var new_bankuai = new bankuai(indexjson.ops4);
            new_bankuai.Bankuai("#table_wrapper", "m:0+t:80");
            break;

        //注册制创业板
        case 'gem_board_zcz':
            var new_bankuai = new bankuai(indexjson.ops4);
            new_bankuai.Bankuai("#table_wrapper", "m:0+t:80+s:131072");
            break;
        //核准制创业板
        case 'gem_board_hzz':
            var new_bankuai = new bankuai(indexjson.ops4);
            new_bankuai.Bankuai("#table_wrapper", "m:0+t:80+s:!131072");
            break;


        //科创板
        case 'kcb_board':
            var new_bankuai = new bankuai(indexjson.opsKcb);
            new_bankuai.Bankuai("#table_wrapper", "m:1+t:23");
            break;

        //沪股通
        case 'sh_hk_board':
            var new_bankuai_sh_hk_board = new bankuai(indexjson.ops5);
            new_bankuai_sh_hk_board.Bankuai("#table_wrapper", "b:BK0707");
            break;

        //深股通
        case 'sz_hk_board':
            var new_bankuai_sz_hk_board = new bankuai(indexjson.ops5);
            new_bankuai_sz_hk_board.Bankuai("#table_wrapper", "b:BK0804");
            break;

        //b股
        case 'b_board':
            var new_bankuai = new bankuai(indexjson.ops4);
            new_bankuai.Bankuai("#table_wrapper", "m:0+t:7,m:1+t:3");
            break;

        //上证ab股比价
        case 'ab_comparison_sh':
            var new_bankuai = new bankuai(indexjson.abgu);
            new_bankuai.Bankuai("#table_wrapper", "m:1+b:BK0498");
            break;

        //深圳ab股比价
        case 'ab_comparison_sz':
            var new_bankuai = new bankuai(indexjson.abgu);
            new_bankuai.Bankuai("#table_wrapper", "m:0+b:BK0498");
            break;

         //风险警示板
         case 'st_board':
            var new_bankuai = new bankuai(indexjson.ops4);
            new_bankuai.Bankuai("#table_wrapper", "m:0+f:4,m:1+f:4");
            break;

         //上证风险
         case 'st_board_sh':
            var new_bankuai = new bankuai(indexjson.ops4);
            new_bankuai.Bankuai("#table_wrapper", "m:1+f:4");
            break;

         //深证风险
         case 'st_board_sz':
            var new_bankuai = new bankuai(indexjson.ops4);
            new_bankuai.Bankuai("#table_wrapper", "m:0+f:4");
            break;        
                
         //科创板风险
         case 'st_board_kcb':
            var new_bankuai = new bankuai(indexjson.ops4);
            new_bankuai.Bankuai("#table_wrapper", "m:1+t:23+f:4");
            break;  

         //创业板风险
         case 'st_board_cyb':
            var new_bankuai = new bankuai(indexjson.ops4);
            new_bankuai.Bankuai("#table_wrapper", "m:0+t:80+f:4");
            break;             
            

         //两网及退市
         case 'staq_net_board':
            var new_staq_net_board = new bankuai(indexjson.ops6);
            new_staq_net_board.Bankuai("#table_wrapper", "m:0+s:3");
            break;

        //沪深指数  --- 上证系列指数
        case 'index_sh':
            var index_sh = new bankuai(indexjson.ops7);
            index_sh.Bankuai("#table_wrapper", "m:1+s:2");
            break;


        //沪深指数  --- 深圳系列指数
        case 'index_sz':
            var index_sz = new bankuai(indexjson.ops7);
            index_sz.Bankuai("#table_wrapper", "m:0+t:5");
            break;

        //沪深指数  --- 指数成分
        case 'index_components':
            var index_sz = new bankuai(indexjson.ops7);
            index_sz.Bankuai("#table_wrapper", "m:1+s:3,m:0+t:5");
            break;

        //沪深指数  --- 中证系列指数
        case 'index_zzzs':
            var index_sz = new bankuai(indexjson.ops7);
            index_sz.Bankuai("#table_wrapper", "m:2");
            break;

        //沪深港通  --- 港股通（沪）
        case 'hk_sh_stocks':
            var index_sz = new bankuai(indexjson.hkshstocks);
            index_sz.Bankuai("#table_wrapper", "b:MK0144");
            break;

        //沪深港通  --- 港股通（深）
        case 'hk_sz_stocks':
            var index_sz = new bankuai(indexjson.hkshstocks);
            index_sz.Bankuai("#table_wrapper", "b:MK0146");
            break;


        //沪深港通  --- ah股比价
        case 'ah_comparison':
        case 'hkah_comparison':

            var index_sz = new bankuai(indexjson.ahgu2);
            index_sz.Bankuai("#table_wrapper", "b:DLMK0101");

            //显示延时数据的时候 显示延时声明
            $("#yssm").show();
            break;

            //请求接口 判断是否是国外ip
            // var fullurl = 'http://push2.eastmoney.com/api/qt/clist/get?pn=1&pz=20&po=1&np=1&ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&invt=2&fid=f3&fs=b:MK0101&fields=f1,f2,f3,f4,f5,f6,f7,f8,f9,f10'
            
            // $.ajax({
            //     type: "get",
            //     data: '',
            //     url: fullurl,
            //     dataType: "jsonp",
            //     jsonp: 'cb',
            //     success: function (msg) {
            //         if(msg && msg.lt) {
            //             var lt = msg.lt
            //             //大陆 & 登录用户 显示实时行情
            //             if(lt == 1 && islogin) {
            //                 var index_sz = new bankuai(indexjson.ahgu2);
            //                 index_sz.Bankuai("#table_wrapper", "b:MK0101");
            //                 $("#yssm").hide();

            //             } 
            //             //否则显示 延时行情
            //             else {
            //                 var index_sz = new bankuai(indexjson.ahgu2);
            //                 index_sz.Bankuai("#table_wrapper", "b:DLMK0101");
            
            //                 //显示延时数据的时候 显示延时声明
            //                 $("#yssm").show();

            //             }
            //         }
                    
            //     }

            // });

          


        //新三板 ---全部
        case 'neeq_stocks':
            var index_sz = new bankuai(indexjson.ops9);
            index_sz.Bankuai("#table_wrapper", "m:0+t:81+s:!4");
            break;

        //新三板 ---精选层
        case 'neeq_selected':
            var index_sz = new bankuai(indexjson.ops9);
            index_sz.Bankuai("#table_wrapper", "m:0+t:81+s:2048");
            break;

         //新三板 ---创新层
         case 'neeq_innovate':
            var index_sz = new bankuai(indexjson.ops9);
            index_sz.Bankuai("#table_wrapper", "m:0+s:512");
            break;
        
        //新三板 ---基础层
        case 'neeq_basic':
            var index_sz = new bankuai(indexjson.ops9);
            index_sz.Bankuai("#table_wrapper", "m:0+s:256");
            break;

        //新三板 ---连续竞价
        case 'neeq_agreement':
            var index_sz = new bankuai(indexjson.ops9);
            index_sz.Bankuai("#table_wrapper", "m:0+s:64");
            break;

        //新三板 ---集合竞价
        case 'neeq_marketmaking':
            var index_sz = new bankuai(indexjson.ops9);
            index_sz.Bankuai("#table_wrapper", "m:0+s:128");
            break;

        //新三板 ---做市转让
        case 'neeq_bidding':
            var index_sz = new bankuai(indexjson.ops9);
            index_sz.Bankuai("#table_wrapper", "m:0+s:32");
            break;


        //港股市场 ---全部
        case 'hk_stocks':
            var index_sz = new bankuai(indexjson.hkstocks);
            index_sz.Bankuai("#table_wrapper", "m:128+t:3,m:128+t:4,m:128+t:1,m:128+t:2");
            // 显示延迟声明
            $("#yssm").show();
            break;


        //港股市场--港股主板
        case 'hk_mainboard':
            var index_sz = new bankuai(indexjson.hkstocks);
            index_sz.Bankuai("#table_wrapper", "m:128+t:3");
            // 显示延迟声明
            $("#yssm").show();
            break;

        //港股市场--港股创业板
        case 'hk_gem':
            var index_sz = new bankuai(indexjson.hkstocks);
            index_sz.Bankuai("#table_wrapper", "m:128+t:4");
            // 显示延迟声明
            $("#yssm").show();
            break;
        

        //港股市场--知名港股  
        case 'hk_wellknown':
            var index_sz = new bankuai(indexjson.hkstocks);
            index_sz.Bankuai("#table_wrapper", "b:DLMK0106");
            // 显示延迟声明
            $("#yssm").show();
            break;

         //港股市场--蓝筹股  
         case 'hk_bluechips':
            var index_sz = new bankuai(indexjson.hkstocks);
            index_sz.Bankuai("#table_wrapper", "b:DLMK0104");
            // 显示延迟声明
            $("#yssm").show();
            break;

        //港股市场--红筹股  
        case 'hk_redchips':
            var index_sz = new bankuai(indexjson.hkstocks);
            index_sz.Bankuai("#table_wrapper", "b:DLMK0102");
            // 显示延迟声明
            $("#yssm").show();
            break;


        //港股市场-红筹指数成分股
        case 'hk_redchips_components':
            var index_sz = new bankuai(indexjson.hkstocks);
            index_sz.Bankuai("#table_wrapper", "b:DLMK0111");
            // 显示延迟声明
            $("#yssm").show();
            break;


         //港股市场---国企股
         case 'hk_stateowned':
            var index_sz = new bankuai(indexjson.hkstocks);
            index_sz.Bankuai("#table_wrapper", "b:DLMK0103");
            // 显示延迟声明
            $("#yssm").show();
            break;
        
        //港股市场---国企指数成分股
        case 'hk_stateowned_components':
            var index_sz = new bankuai(indexjson.hkstocks);
            index_sz.Bankuai("#table_wrapper", "b:DLMK0112");
            // 显示延迟声明
            $("#yssm").show();
            break;


        //港股市场---港股通成份股
        case 'hk_components':
            var index_sz = new bankuai(indexjson.hkstocks);
            index_sz.Bankuai("#table_wrapper", "b:DLMK0146,b:DLMK0144");
            // 显示延迟声明
            $("#yssm").show();
            break;



        //  //港股市场---港股通成分股
        //  case 'hk_components':
        //     var index_sz = new bankuai(indexjson.hkstocks);
        //     index_sz.Bankuai("#table_wrapper", "111");
        //     break;


        //港股市场---恒新综合大型成分股
        case 'hsi_large_components':
            var index_sz = new bankuai(indexjson.hkstocks);
            index_sz.Bankuai("#table_wrapper", "b:DLMK0141");
            // 显示延迟声明
            $("#yssm").show();
            break;


        //港股市场---恒生综合中型成份股
        case 'hsi_medium_components':
            var index_sz = new bankuai(indexjson.hkstocks);
            index_sz.Bankuai("#table_wrapper", "b:DLMK0142");
            // 显示延迟声明
            $("#yssm").show();
            break;



         //港股市场---ADR
         case 'hk_adr':
            var index_sz = new bankuai(indexjson.hkadr);
            index_sz.Bankuai("#table_wrapper", "m:128+s:1");
            // 显示延迟声明
            $("#yssm").show();
            break;
        

        
        //港股市场---香港指数
        case 'hk_index':
            var index_sz = new bankuai(indexjson.hkindex);
            index_sz.Bankuai("#table_wrapper", "m:124,m:125,m:305");
            break;


         //港股市场---香港涡轮
         case 'hk_warrants':
            var index_sz = new bankuai(indexjson.hkindex);
            index_sz.Bankuai("#table_wrapper", "m:128+t:6");
            // 显示延迟声明
            $("#yssm").show();
            break;


         //港股市场---港股牛熊证
         case 'hk_CBBCs':
            var index_sz = new bankuai(indexjson.hkindexNXZ);
            index_sz.Bankuai("#table_wrapper", "m:128+t:5");
            // 显示延迟声明
            $("#yssm").show();
            break;
        
        

        //美股市场---全部美股
        case 'us_stocks':
            var index_sz = new bankuai(indexjson.usstocks);
            index_sz.Bankuai("#table_wrapper", "m:105,m:106,m:107");
            break;


        //美股市场---中国概念股
        case 'us_chinese':
            var index_sz = new bankuai(indexjson.usstocks);
            index_sz.Bankuai("#table_wrapper", "b:MK0201");
            break;
        
        
         //美股市场---美股指数
        case 'us_index':
            var index_sz = new bankuai(indexjson.usindex);
            index_sz.Bankuai("#table_wrapper", "i:100.NDX,i:100.DJIA,i:100.SPX");
            break;


         //美股市场---知名美股
         case 'us_wellknown':
            var index_sz = new bankuai(indexjson.usstocks);
            index_sz.Bankuai("#table_wrapper", "b:MK0001");
            break;


        //美股市场---知名美股--科技类
        case 'us_technology':
            var index_sz = new bankuai(indexjson.usstocks);
            index_sz.Bankuai("#table_wrapper", "b:MK0216");
            break;


        //美股市场---知名美股--金融类
        case 'us_financial':
            var index_sz = new bankuai(indexjson.usstocks);
            index_sz.Bankuai("#table_wrapper", "b:MK0217");
            break;


        //美股市场---知名美股--医药食品类
        case 'us_medicine_food':
            var index_sz = new bankuai(indexjson.usstocks);
            index_sz.Bankuai("#table_wrapper", "b:MK0218");
            break;

        //美股市场---知名美股--媒体类
        case 'us_media':
            var index_sz = new bankuai(indexjson.usstocks);
            index_sz.Bankuai("#table_wrapper", "b:MK0220");
            break;

        
        //美股市场---知名美股--汽车能源类
        case 'us_automotive_energy':
            var index_sz = new bankuai(indexjson.usstocks);
            index_sz.Bankuai("#table_wrapper", "b:MK0219");
            break;


         //美股市场---知名美股--制造零售类
         case 'us_manufacture_retail':
            var index_sz = new bankuai(indexjson.usstocks);
            index_sz.Bankuai("#table_wrapper", "b:MK0221");
            break;


        //美股市场---互联网中国
         case 'us_chinese_internet':
            var index_sz = new bankuai(indexjson.usstocks);
            index_sz.Bankuai("#table_wrapper", "b:MK0202");
            break;


        //全球指数---亚洲股市
        case 'global_asia':
            var index_sz = new bankuai(indexjson.globalamerica);
            index_sz.Bankuai("#table_wrapper", "i:1.000001,i:0.399001,i:0.399005,i:0.399006,i:1.000300,i:100.HSI,i:100.HSCEI,i:124.HSCCI,i:100.TWII,i:100.N225,i:100.KOSPI200,i:100.KS11,i:100.STI,i:100.SENSEX,i:100.KLSE,i:100.SET,i:100.PSI,i:100.KSE100,i:100.VNINDEX,i:100.JKSE,i:100.CSEALL");
            break;
        

        //全球指数---美洲股市
        case 'global_america':
            var index_sz = new bankuai(indexjson.globalamerica);
            index_sz.Bankuai("#table_wrapper", "i:100.DJIA,i:100.SPX,i:100.NDX,i:100.TSX,i:100.BVSP,i:100.MXX");
            break;

        //全球指数---欧洲股市
        case 'global_euro':
            var index_sz = new bankuai(indexjson.globalamerica);
            index_sz.Bankuai("#table_wrapper", "i:100.SX5E,i:100.FTSE,i:100.MCX,i:100.AXX,i:100.FCHI,i:100.GDAXI,i:100.RTS,i:100.IBEX,i:100.PSI20,i:100.OMXC20,i:100.BFX,i:100.AEX,i:100.WIG,i:100.OMXSPI,i:100.SSMI,i:100.HEX,i:100.OSEBX,i:100.ATX,i:100.MIB,i:100.ASE,i:100.ICEXI,i:100.PX,i:100.ISEQ");
            break;

        //全球指数---澳洲股市
        case 'global_australia':
            var index_sz = new bankuai(indexjson.globalamerica);
            index_sz.Bankuai("#table_wrapper", "i:100.AS51,i:100.AORD,i:100.NZ50");
            break;

        //全球指数---其他指数
        case 'global_qtzs':
            var index_sz = new bankuai(indexjson.globalamerica);
            index_sz.Bankuai("#table_wrapper", "i:100.UDI,i:100.BDI,i:100.CRB");
            break;


        //期货市场 -- 中金所
        case 'futures_cffex':
            // var index_sz = new bankuai(indexjson.zjs);
            // index_sz.Bankuai("#table_wrapper", "m:8+f:!8192");

            var obj = {
                type: 'zjs',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/8'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");

        break;


         //期货市场 -- 中金所 --2年期国债
        case 'futures_cffex-_TS':
            // var index_sz = new bankuai(indexjson.zjs);
            // index_sz.Bankuai("#table_wrapper", "m:8+s:32+f:!8192");

            var obj = {
                type: 'zjs',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/variety/8/6'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");
        break;



         //期货市场 -- 中金所 -- 10年期国债
        case 'futures_cffex-_T':
            // var index_sz = new bankuai(indexjson.zjs);
            // index_sz.Bankuai("#table_wrapper", "m:8+s:8+f:!8192");
            var obj = {
                type: 'zjs',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/variety/8/4'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");
        break;


        //期货市场 -- 中金所 -- 5年期国债
        case 'futures_cffex-_TF':
            // var index_sz = new bankuai(indexjson.zjs);
            // index_sz.Bankuai("#table_wrapper", "m:8+s:16+f:!8192");
            var obj = {
                type: 'zjs',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/variety/8/5'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");
        break;


        //期货市场 -- 中金所 -- 沪深300
        case 'futures_cffex-_IF':
            // var index_sz = new bankuai(indexjson.zjs);
            // index_sz.Bankuai("#table_wrapper", "m:8+s:2");
            var obj = {
                type: 'zjs',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/variety/8/2'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");
        break;

        //期货市场 -- 中金所 -- 上证50
        case 'futures_cffex-_IH':
            // var index_sz = new bankuai(indexjson.zjs);
            // index_sz.Bankuai("#table_wrapper", "m:8+s:4");
            var obj = {
                type: 'zjs',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/variety/8/3'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");
        break;


        //期货市场 -- 中金所 -- 中正500
        case 'futures_cffex-_IC':
            // var index_sz = new bankuai(indexjson.zjs);
            // index_sz.Bankuai("#table_wrapper", "m:8+s:1");

            var obj = {
                type: 'zjs',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/variety/8/1'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");
        break;


        //期货市场 -- 港交所 -- 指数期货  indexqhNew
        case 'hk_index_futures':
            // var index_sz = new bankuai(indexjson.indexqhNew);
            // index_sz.Bankuai("#table_wrapper", "m:134");

            var obj = {
                type: 'gjs',
                order: 'name',
                orderDur: '1', //正序
                url: urlconfig.qihuourl + '/list/HKINDEXF'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");

        break;


         //期货市场 -- 港交所 --股票期货
        case 'hk_stock_futures':
            // var index_sz = new bankuai(indexjson.indexqh);
            // index_sz.Bankuai("#table_wrapper", "m:130");

            var obj = {
                type: 'gjs_gpqh',
                order: 'name',
                orderDur: '1', //正序
                url: urlconfig.qihuourl + '/list/HKSTOCKF'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");

        break;


        //期货市场 -- 港交所 --外汇
        case 'HCF_CUS':
            // var index_sz = new bankuai(indexjson.indexqhNew);
            // index_sz.Bankuai("#table_wrapper", "m:131+t:4");

            var obj = {
                type: 'gjs',
                order: 'name',
                orderDur: '1', //正序
                url: urlconfig.qihuourl + '/list/HKCNYF'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");

        break;


        //期货市场 -- 港交所 --商品
        case 'HMFS_LRP':
            // var index_sz = new bankuai(indexjson.indexqhNew);
            // index_sz.Bankuai("#table_wrapper", "m:131+t:5");
            var obj = {
                type: 'gjs',
                order: 'name',
                orderDur: '1', //正序
                url: urlconfig.qihuourl + '/list/HKMETALFS'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");

        break;


        //  //日元兑人民币
        // case 'HCF_CJP':
        //     var index_sz = new bankuai(indexjson.indexqhNew);
        //      index_sz.Bankuai("#table_wrapper", "m:131+t:3");
        // break;

        // //欧元兑人民币
        //     case 'HCF_CEU':
        //         var index_sz = new bankuai(indexjson.indexqhNew);
        //         index_sz.Bankuai("#table_wrapper", "m:131+t:2");
        //     break;

        //     //澳元兑人民币
        //     case 'HCF_CAU':
        //         var index_sz = new bankuai(indexjson.indexqhNew);
        //         index_sz.Bankuai("#table_wrapper", "m:131+t:1");
        //     break;


        //     //轮签
        //     case 'HMFS_LRP':
        //         var index_sz = new bankuai(indexjson.indexqhNew);
        //         index_sz.Bankuai("#table_wrapper", "m:132+t:4");
        //     break;


        //      //轮铜
        //     case 'HMFS_LRC':
        //         var index_sz = new bankuai(indexjson.indexqhNew);
        //         index_sz.Bankuai("#table_wrapper", "m:132+t:2");
        //     break;

        //      //伦镍
        //     case 'HMFS_LRS':
        //         var index_sz = new bankuai(indexjson.indexqhNew);
        //         index_sz.Bankuai("#table_wrapper", "m:132+t:5");
        //     break;


        //     //轮吕
        //     case 'HMFS_LRA':
        //         var index_sz = new bankuai(indexjson.indexqhNew);
        //         index_sz.Bankuai("#table_wrapper", "m:132+t:1");
        //     break;


        //     //轮锌
        //     case 'HMFS_LRZ':
        //         var index_sz = new bankuai(indexjson.indexqhNew);
        //         index_sz.Bankuai("#table_wrapper", "m:132+t:6");
        //     break;


        //      //轮锡
        //     case 'HMFS_LRN':
        //         var index_sz = new bankuai(indexjson.indexqhNew);
        //         index_sz.Bankuai("#table_wrapper", "m:132+t:3");
        //     break;


        //     //铁矿石期货月
        //     case 'HMFS_FEM':
        //         var index_sz = new bankuai(indexjson.indexqhNew);
        //         index_sz.Bankuai("#table_wrapper", "m:132+t:7");
        //     break;


        //      //铁矿石期货季
        //     case 'HMFS_FEQ':
        //         var index_sz = new bankuai(indexjson.indexqhNew);
        //         index_sz.Bankuai("#table_wrapper", "m:132+t:8");
        //     break;




        //期货市场 -- 国际期货 --
        case 'futures_global':
            // var index_sz = new bankuai(indexjson.gjqh);
            // index_sz.Bankuai("#table_wrapper", "m:102,m:103,m:108,m:109,m:111,m:112");

            var obj = {
                type: 'gjqh',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/COMEX,NYMEX,COBOT,SGX,NYBOT,LME,MDEX,TOCOM,IPE'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");

        break;

        //期货市场 -- CME金属期货
        case 'futures_global-comex':
            var obj = {
                type: 'gjqh',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/COMEX'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");
        break;

         //期货市场 -- CME能源期货	
         case 'futures_global-nymex':
            var obj = {
                type: 'gjqh',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/NYMEX'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");
             
         break;


         //期货市场 -- CME农业期货	
         case 'futures_global-cobot':
            var obj = {
                type: 'gjqh',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/COBOT'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");
         
             
         break;


         //期货市场 -- 新加坡交易所		
         case 'futures_global-sgx':
            var obj = {
                type: 'gjqh',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/SGX'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");
             
         break;


         //期货市场 -- ICE农业期货		
         case 'futures_global-nybot':
            var obj = {
                type: 'gjqh',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/NYBOT'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");
             
         break;


         //期货市场 -- 伦敦金属交易所			
         case 'futures_global-lme':
            var obj = {
                type: 'gjqh',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/LME'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");
             
         break;


         //期货市场 -- 马来西亚交易所				
         case 'futures_global-mdex':
            var obj = {
                type: 'gjqh',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/MDEX'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");
             
         break;


          //期货市场 -- 东京商品期货					
          case 'futures_global-tocom':
            var obj = {
                type: 'gjqh',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/TOCOM'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");
             
          break;


         //期货市场 -- ICE能源期货					
         case 'futures_global-ipe':
            var obj = {
                type: 'gjqh',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/IPE'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");
             
         break;


        //期货市场 -- 金融期货
        case 'futures_finance':
            // var index_sz = new bankuai(indexjson.gjqh);
            // index_sz.Bankuai("#table_wrapper", "b:MK0019"); 
            var obj = {
                blockName: 'financial',
                type: 'gjqh',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/block'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");

            if(!$('.linkToApp').length){
                $("#table_wrapper-table").after('<a class="linkToApp"  tracker-eventcode="hqzx_jrqh_ckgdjrqh_dj" style="display:block;margin-top:10px;" href="https://zqhd.eastmoney.com/Html/aghd/pc/20170918/html/activity2.html?tz=xxlout_dfcfappweb_random_0001447a" target="_blank">剩余28个国际金融期货，请至东方财富APP内查看 》</a>')
            }
        break;


        //期货市场 -- 能源化工
        case 'futures_energy':
            // var index_sz = new bankuai(indexjson.gjqh);
            // index_sz.Bankuai("#table_wrapper", "b:MK0016");
            var obj = {
                blockName: 'energy',
                type: 'gjqh',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/block'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");
        break;


        //期货市场 -- 金属钢材
        case 'futures_metal':
            // var index_sz = new bankuai(indexjson.gjqh);
            // index_sz.Bankuai("#table_wrapper", "b:MK0017");
            var obj = {
                blockName: 'metal',
                type: 'gjqh',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/block'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");
        break;


        //期货市场 -- 农产品食品原料
            case 'futures_farmproduce':
                // var index_sz = new bankuai(indexjson.gjqh);
                // index_sz.Bankuai("#table_wrapper", "b:MK0018");

                var obj = {
                    blockName: 'agricultural',
                    type: 'gjqh',
                    order: 'zdf',
                    url: urlconfig.qihuourl + '/list/block'
                }
                var index_sz = new qihuo(obj);
                index_sz.Qihuo("#table_wrapper");
            break;



        //基金市场 --封闭基金行情
        case 'fund_close_end':
            var index_sz = new bankuai(indexjson.fundcloseend);
            index_sz.Bankuai("#table_wrapper", "e:19");
            break;

        //基金市场 --eft
        case 'fund_etf':
            var index_sz = new bankuai(indexjson.fundcloseend);
            index_sz.Bankuai("#table_wrapper", "b:MK0021,b:MK0022,b:MK0023,b:MK0024");
            break;


        //基金市场 --lof
        case 'fund_lof':
            var index_sz = new bankuai(indexjson.fundcloseend);
            index_sz.Bankuai("#table_wrapper", "b:MK0404,b:MK0405,b:MK0406,b:MK0407");
            break;


        //债券市场 --债券指数
        case 'bond_index':
            var index_sz = new bankuai(indexjson.bond);
            index_sz.Bankuai("#table_wrapper", "i:1.000012,i:1.000013,i:1.000022,i:1.000061,i:0.395021,i:0.395022,i:0.395031,i:0.395032,i:0.399481");
            break;


        //债券市场 --上海债券
        case 'bond_sh':
            var index_sz = new bankuai(indexjson.bond);
            index_sz.Bankuai("#table_wrapper", "m:1+t:4");
            break;


        //债券市场 --沪国债券  bondnew
        case 'bond_national_sh':
            var index_sz = new bankuai(indexjson.bondnew);
            index_sz.Bankuai("#table_wrapper", "m:1+b:MK0351");
            break;


        //债券市场 --沪启债
        case 'bond_enterprise_sh':
            var index_sz = new bankuai(indexjson.bondnew);
            index_sz.Bankuai("#table_wrapper", "m:1+b:MK0353");
            break;


        //债券市场 --沪转债
        case 'bond_convertible_sh':
            var index_sz = new bankuai(indexjson.bond);
            index_sz.Bankuai("#table_wrapper", "m:1+b:MK0354");
            break;

        //债券市场 -深圳国债
        case 'bond_sz':
            var index_sz = new bankuai(indexjson.bond);
            index_sz.Bankuai("#table_wrapper", "m:0+t:8");
            break;


        //债券市场 -深国债
        case 'bond_national_sz':
            var index_sz = new bankuai(indexjson.bondnew);
            index_sz.Bankuai("#table_wrapper", "m:0+b:MK0351");
            break;


        //债券市场 -深启债
        case 'bond_enterprise_sz':
            var index_sz = new bankuai(indexjson.bondnew);
            index_sz.Bankuai("#table_wrapper", "m:0+b:MK0353");
            break;


        //债券市场 -深转债
        case 'bond_convertible_sz':
            var index_sz = new bankuai(indexjson.bond);
            index_sz.Bankuai("#table_wrapper", "m:0+b:MK0354");
            break;


        //债券市场 -上证回购
        case 'bond_sh_buyback':
            var index_sz = new bankuai(indexjson.bondnew);
            index_sz.Bankuai("#table_wrapper", "m:1+b:MK0356");
            break;


        //债券市场 -深证回购
        case 'bond_sz_buyback':
            var index_sz = new bankuai(indexjson.bondnew);
            index_sz.Bankuai("#table_wrapper", "m:0+b:MK0356");
            break;


        //外汇市场 -所有汇率
        case 'forex_all':
            var index_sz = new bankuai(indexjson.forex);
            index_sz.Bankuai("#table_wrapper", "m:119,m:120,m:121,m:133");
            break;


         //外汇市场 -基本汇率
        case 'forex_basic':
            var index_sz = new bankuai(indexjson.forex);
            index_sz.Bankuai("#table_wrapper", "b:MK0300");
            break;


         //外汇市场 -交叉汇率
        case 'forex_cross':
            var index_sz = new bankuai(indexjson.forex);
            index_sz.Bankuai("#table_wrapper", "b:MK0301");
            break;


        //外汇市场 -人名币品种
        case 'forex_cny':
            var index_sz = new bankuai(indexjson.forex);
            index_sz.Bankuai("#table_wrapper", "m:120,m:121+t:!2,m:133");
            break;

        //外汇市场 -人名币品种中间件
        case 'forex_cnyc':
            var index_sz = new bankuai(indexjson.forex);
            index_sz.Bankuai("#table_wrapper", "m:120");
            break;


        //外汇市场 -人民币询价
        case 'forex_cnyi':
            var index_sz = new bankuai(indexjson.forex);
            index_sz.Bankuai("#table_wrapper", "m:121+t:1");
            break;


        //外汇市场 -人民币竞价
        case 'forex_cnyb':
            location.href="/center/gridlist.html#forex_cny";
            // var index_sz = new bankuai(indexjson.forex);
            // index_sz.Bankuai("#table_wrapper", "m:121+t:2");
            break;

        //外汇市场 -离岸人民币外币
        case 'forex_cnh':
            var index_sz = new bankuai(indexjson.forex);
            index_sz.Bankuai("#table_wrapper", "m:133");
            break;


        //外汇市场 -外汇牌价
        case 'forex_exchange_icbc':
            var index_sz = new bankuai(indexjson.whpj);
            index_sz.Bankuai("#table_wrapper", "m:162+s:1");
            break;


        //外汇市场 -农业银行报价
        case 'forex_exchange_abc':
            var index_sz = new bankuai(indexjson.whpj);
            index_sz.Bankuai("#table_wrapper", "m:162+s:2");
            break;

        //外汇市场 -中国银行报价
        case 'forex_exchange_boc':
            var index_sz = new bankuai(indexjson.whpj);
            index_sz.Bankuai("#table_wrapper", "m:162+s:4");
            break;


         //外汇市场 -建设银行报价
        case 'forex_exchange_ccb':
            var index_sz = new bankuai(indexjson.whpj);
            index_sz.Bankuai("#table_wrapper", "m:162+s:8");
            break;


        //外汇市场 -交通银行报价
        case 'forex_exchange_bcm':
            var index_sz = new bankuai(indexjson.whpj);
            index_sz.Bankuai("#table_wrapper", "m:162+s:16");
            break;


        //外汇市场 -招商银行报价
        case 'forex_exchange_cmb':
            var index_sz = new bankuai(indexjson.whpj);
            index_sz.Bankuai("#table_wrapper", "m:162+s:32");
            break;

        
        //期权市场 -上交所   和  上证50
        case 'options_sh50etf_all':
            var index_sz = new bankuai(indexjson.qqsc);
            index_sz.Bankuai("#table_wrapper", "m:10");
            addQqAds();
            break;

        //期权市场 -上交所 - 上证50ETF
        case 'options_sz50etf_txbj':
            new TXingBaoJia({
                name:"50ETF",
                type:"1.510050"
            });
            addQqAds();
            break;

        //期权市场 -上交所 - 上证50ETF全部合约
        case 'options_sz50etf_all':
            var index_sz = new bankuai(indexjson.qqsc);
            index_sz.Bankuai("#table_wrapper", "m:10+c:510050");
            addQqAds();
            break;

        //期权市场 -上交所 - 上证50ETF认购合约
        case 'options_sz50etf_rengou':
            var index_sz = new bankuai(indexjson.qqsc);
            index_sz.Bankuai("#table_wrapper", "m:10+c:510050+t:173");
            addQqAds();
            break;

        //期权市场 -上交所 - 上证50ETF认沽合约
        case 'options_sz50etf_rengu':
            var index_sz = new bankuai(indexjson.qqsc);
            index_sz.Bankuai("#table_wrapper", "m:10+c:510050+t:174");
            addQqAds();
            break;


        //期权市场 -上交所 - 沪深300ETF
        case 'options_sahs300etf_txbj':
            new TXingBaoJia({
                type:"1.510300",
                name:"300ETF"
            });
            addQqAds();
            break;

        //期权市场 -上交所 - 沪深300ETF全部合约
        case 'options_sahs300etf_all':
            var index_sz = new bankuai(indexjson.qqsc);
            index_sz.Bankuai("#table_wrapper", "m:10+c:510300");
            addQqAds();
            break;

        //期权市场 -上交所 - 沪深300ETF认购合约
        case 'options_sahs300etf_rengou':
            var index_sz = new bankuai(indexjson.qqsc);
            index_sz.Bankuai("#table_wrapper", "m:10+c:510300+t:173");
            addQqAds();
            break;

        //期权市场 -上交所 - 沪深300ETF认沽合约
        case 'options_sahs300etf_rengu':
            var index_sz = new bankuai(indexjson.qqsc);
            index_sz.Bankuai("#table_wrapper", "m:10+c:510300+t:174");
            addQqAds();
            break;


        //期权市场 -深交所 - 沪深300ETF
        case 'options_sehs300etf_txbj':
            new TXingBaoJia({
                type:"0.159919",
                name:"300ETF"
            });
            addQqAds();
            break;

        //期权市场 -深交所 - 沪深300ETF全部合约
        case 'options_sehs300etf_all':
            var index_sz = new bankuai(indexjson.qqsc);
            index_sz.Bankuai("#table_wrapper", "m:12+c:159919");
            addQqAds();
            break;

        //期权市场 -深交所 - 沪深300ETF认购合约
        case 'options_sehs300etf_rengou':
            var index_sz = new bankuai(indexjson.qqsc);
            index_sz.Bankuai("#table_wrapper", "m:12+c:159919+t:178");
            addQqAds();
            break;

        //期权市场 -深交所 - 沪深300ETF认沽合约
        case 'options_sehs300etf_rengu':
            var index_sz = new bankuai(indexjson.qqsc);
            index_sz.Bankuai("#table_wrapper", "m:12+c:159919+t:179");
            addQqAds();
            break;


        //期权市场 -深交所 
        case 'options_szetf_all':
            var index_sz = new bankuai(indexjson.qqsc);
            index_sz.Bankuai("#table_wrapper", "m:12");
            addQqAds();
            break;
        
        //期权市场 -深交所 -300ETF
        case 'options_sz300etf_all':
            var index_sz = new bankuai(indexjson.qqsc);
            index_sz.Bankuai("#table_wrapper", "m:12");
            break;


        //期权市场 -上期所---上交所  认购
        case 'options_sh50etf_call':
            var index_sz = new bankuai(indexjson.qqsc);
            index_sz.Bankuai("#table_wrapper", "m:10+t:173");
            addQqAds();
            break;


        //期权市场 -上期所---上交所  认沽
        case 'options_sh50etf_put':
            var index_sz = new bankuai(indexjson.qqsc);
            index_sz.Bankuai("#table_wrapper", "m:10+t:174");
            addQqAds();
            break;



        //期权市场 -上期所
        case 'options_shfe_all':
            // var index_sz = new bankuai(indexjson.qqsc);
            // index_sz.Bankuai("#table_wrapper", "m:151");

            var obj = {
                type: 'qqsc',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/SHFEOPTION'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");


            break;
        


        //期权市场 -上期所---铜
        case 'options_cu_all':
            // var index_sz = new bankuai(indexjson.qqsc);
            // index_sz.Bankuai("#table_wrapper", "m:151+t:1");

            var obj = {
                type: 'qqsc',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/variety/SHFEOPTION/1'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");


            break;


        //期权市场 -上期所---橡胶
        case 'options_ru_all':
            // var index_sz = new bankuai(indexjson.qqsc);
            // index_sz.Bankuai("#table_wrapper", "m:151+t:2");

            var obj = {
                type: 'qqsc',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/variety/SHFEOPTION/2'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");

            break;
        
         //期权市场 -上期所---黄金
         case 'options_au_all':
            // var index_sz = new bankuai(indexjson.qqsc);
            // index_sz.Bankuai("#table_wrapper", "m:151+t:2");

            var obj = {
                type: 'qqsc',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/variety/151/3'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");

            break;



        //期权市场 -大商所  m:140
        case 'options_dce_all':
            // var index_sz = new bankuai(indexjson.qqsc);
            // index_sz.Bankuai("#table_wrapper", "m:140");

            var obj = {
                type: 'qqsc',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/DCEOPTION'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");

            break;



        //期权市场 -大商所---豆泊
        case 'options_beanpulp_all':
            // var index_sz = new bankuai(indexjson.qqsc);
            // index_sz.Bankuai("#table_wrapper", "m:140+t:1");

            var obj = {
                type: 'qqsc',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/variety/DCEOPTION/1'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");


            break;


        //期权市场 -大商所---玉米
        case 'options_c_all':
            // var index_sz = new bankuai(indexjson.qqsc);
            // index_sz.Bankuai("#table_wrapper", "m:140+t:2");

            var obj = {
                type: 'qqsc',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/variety/DCEOPTION/2'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");


            break;



        //期权市场 -大商所---铁矿石
        case 'options_t_all':
            // var index_sz = new bankuai(indexjson.qqsc);
            // index_sz.Bankuai("#table_wrapper", "m:140+t:2");

            var obj = {
                type: 'qqsc',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/variety/DCEOPTION/3'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");


            break;

        //期权市场 -大商所---液化石油气
        case 'options_lpg_all':
            // var index_sz = new bankuai(indexjson.qqsc);
            // index_sz.Bankuai("#table_wrapper", "m:140+t:2");

            var obj = {
                type: 'qqsc',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/variety/DCEOPTION/4'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");


            break;


        //期权市场 -郑商所
        case 'options_czce_all':
            // var index_sz = new bankuai(indexjson.qqsc);
            // index_sz.Bankuai("#table_wrapper", "m:141");

            var obj = {
                type: 'qqsc',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/CZCEOPTION'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");



            break;



        //期权市场 -郑商所---白糖
        case 'options_sugar_all':
            // var index_sz = new bankuai(indexjson.qqsc);
            // index_sz.Bankuai("#table_wrapper", "m:141+t:1");


            var obj = {
                type: 'qqsc',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/variety/CZCEOPTION/1'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");

            break;


         //期权市场 -郑商所---棉花
        case 'options_cf_all':
            // var index_sz = new bankuai(indexjson.qqsc);
            // index_sz.Bankuai("#table_wrapper", "m:141+t:2");

            var obj = {
                type: 'qqsc',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/variety/CZCEOPTION/2'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");


            break;
        //期权市场 -郑商所---PTA期权
        case 'options_cf_ta':
            // var index_sz = new bankuai(indexjson.qqsc);
            // index_sz.Bankuai("#table_wrapper", "m:141+t:2");

            var obj = {
                type: 'qqsc',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/variety/CZCEOPTION/4'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");


            break;
        //期权市场 -郑商所---甲醇
        case 'options_cf_ma':
            // var index_sz = new bankuai(indexjson.qqsc);
            // index_sz.Bankuai("#table_wrapper", "m:141+t:2");

            var obj = {
                type: 'qqsc',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/variety/CZCEOPTION/3'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");


            break;
        
        //期权市场 -郑商所---菜粕
        case 'options_cf_cp':
            // var index_sz = new bankuai(indexjson.qqsc);
            // index_sz.Bankuai("#table_wrapper", "m:141+t:2");

            var obj = {
                type: 'qqsc',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/variety/CZCEOPTION/5'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");


            break;
        
        //期权市场 -中金所
        case 'options_cffex_all':
            // var index_sz = new bankuai(indexjson.qqsc);
            // index_sz.Bankuai("#table_wrapper", "m:141");

            var obj = {
                type: 'qqsc',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/option/11',
                sc:11
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");



            break;



        //期权市场 --中金所---沪深300
        case 'options_cffex_io':
            // var index_sz = new bankuai(indexjson.qqsc);
            // index_sz.Bankuai("#table_wrapper", "m:141+t:1");


            var obj = {
                type: 'qqsc',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/11',
                sc:11
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");

            break;


        //  //期权市场 --中金所---沪深300指数
         case 'options_zjcffex_txbj':
            new QhTXingBaoJia({
                cacheName:"zjstxbj"
            });
            break;
        
        //期权市场 --中金所---沪深300指数全部
        case 'options_zjcffex_all':
            var obj = {
                type: 'qqsc',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/option/11?variety=1',
                sc:11
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");
            break;

        //期权市场 --中金所---沪深300指数认购合约
        case 'options_zjcffex_rengou':
            var obj = {
                type: 'qqsc',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/option/11?variety=1&cp=c',
                sc:11
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");
            break;

        //期权市场 --中金所---沪深300指数认沽
        case 'options_zjcffex_rengu':
            var obj = {
                type: 'qqsc',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/option/11?variety=1&cp=p',
                sc:11
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");
            break;






         //期权市场 -香港交易所  和  美元兑人民币
        case 'options_uscny_all':
            // var index_sz = new bankuai(indexjson.qqsc);
            // index_sz.Bankuai("#table_wrapper", "m:139");

            var obj = {
                type: 'qqsc',
                order: 'zdf',
                url: urlconfig.qihuourl + '/list/HKUSDCNHOP'
            }
            var index_sz = new qihuo(obj);
            index_sz.Qihuo("#table_wrapper");


            break;



         //黄金市场 -上海黄金现货
        case 'gold_sh_spotgoods':
            var index_sz = new bankuai(indexjson.gold);
            index_sz.Bankuai("#table_wrapper", "m:118");
            break;



        //黄金市场 -上海黄金期货
        case 'gold_sh_futures':
            var index_sz = new bankuai(indexjson.zjs);
            index_sz.Bankuai("#table_wrapper", "m:113+t:5");
            break;


        //黄金市场 -国际贵金属现货
        case 'nobalmetal_spotgoods':
            var index_sz = new bankuai(indexjson.gold,"nobalmetal_spotgoods");
            index_sz.Bankuai("#table_wrapper", "m:122,m:123");
            break;


        //黄金市场 -国际贵金属期货
        case 'nobalmetal_futures':
            var index_sz = new bankuai(indexjson.gold);
            index_sz.Bankuai("#table_wrapper", "i:111.JAGC,i:101.QI00Y,i:111.JPAC,i:101.HG00Y,i:111.JAUC,i:111.JPLC,i:102.PL00Y,i:101.QO00Y,i:101.MGC00Y,i:101.GC00Y,i:101.SI00Y,i:102.PA00Y");
            break;


        //若没有配置 则显示沪深a股
        default:
            // var new_bankuai = new bankuai(indexjson.ops4);
            // new_bankuai.Bankuai("#table_wrapper", "m:0+t:6,m:0+t:13,m:0+t:80,m:1+t:2,m:1+t:23");
            window.location.href = "/center/gridlist.html#hs_a_board";
            break;
    }



   
};

/***/ }),

/***/ "./ClientApp/gridlist3/index.order.js":
/*!********************************************!*\
  !*** ./ClientApp/gridlist3/index.order.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
    ChangePercent: 'f3',
    Amount: 'f6',
    Volume: 'f5',
    TurnoverRate: 'f8',
    Speed: 'f22',
    ChangePercent360Day: 'f25',
    ChangePercent60Day: 'f24',
    MarketValue: 'f20',
    FlowCapitalValue: 'f21',
    PB: 'f23',
    PERation: 'f115',
    Amplitude: 'f7',
    VolumeRate: 'f10',
    FiveMinuteChangePercent: 'f11',
    PERation : 'f9',
    zxj:'f229', //最新价
    kzzZdf:'f230', //可转债对应的A股或A股对应的可转债的涨跌幅
    kzzZgj:'f235', //可转债的转股价
    zgValue:'f236',//可转债的转股价值
    zgYjb:'f237',//可转债的转股溢价率
    czYjl:'f238',//可转债的纯债溢价率
    hsCfj:'f239',//可转债的回售触发价
    qsCfj:'f240',//可转债的强赎触发价
    dqShj:'f241',//可转债的到期赎回价
    czjz:'f227',//可转债的纯债价值
    kszgr:'f242',//可转债的开始转股日
    ssrq:'f26',//上市日期
    sgrq:'f243'//可转债的申购日期
}

/***/ }),

/***/ "./ClientApp/gridlist3/newbankuai.js":
/*!*******************************************!*\
  !*** ./ClientApp/gridlist3/newbankuai.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/polyfills/json-polyfill.js */ "./ClientApp/modules/polyfills/json-polyfill.js");
__webpack_require__(/*! ../modules/jquery-plugins/jquery-tooltips/jquery.tooltip */ "./ClientApp/modules/jquery-plugins/jquery-tooltips/jquery.tooltip.js");

var changeNum = __webpack_require__(/*! ../readomNum */ "./ClientApp/readomNum/index.js");
var formatNum = __webpack_require__(/*! ../formatNum */ "./ClientApp/formatNum.js");

var getData = __webpack_require__(/*! ./getData */ "./ClientApp/gridlist3/getData.js");

var paging = __webpack_require__(/*! ./paging */ "./ClientApp/gridlist3/paging.js");


var config = __webpack_require__(/*! ./config */ "./ClientApp/gridlist3/config.js");
var index_order = __webpack_require__(/*! ./index.order.js */ "./ClientApp/gridlist3/index.order.js");


var favstock = __webpack_require__(/*! ../favstock */ "./ClientApp/favstock/index.js");


__webpack_require__(/*! ./css/square.css */ "./ClientApp/gridlist3/css/square.css");  //表格样式

function bankuai(ops,mdName) {
    this.config = config[ops.type];
    this.mdName = mdName || "";
    var head = this.config.head;
    this.tableHead = head;

    var dft = {
        container: "",
        orderDur: false,      //排序方向（正序填0,false ; 倒序填1, true，默认为1。）
        index: 1,
        pagesize: this.config.sumcount
    }
    this.ops = $.extend(dft, ops);
    // this.ops = dft;
    this.page = new paging();

    this.codearr = [];

    this.mycontent = '';
    this.myfs = '';

    //设置我的自选数据
    this._myFavor_list = null;

}

// bankuai.prototype.Bankuai = function(content, fs) {

bankuai.prototype.Bankuai = function(content, fs, codes) {
    //   console.log('bankuai 进来了')
    //   console.log(fs)
        this.fs = fs;
     //板块模块
        this.getBankuai(content, fs, codes);

        // this.pageClick(content, fs);
        if(this.ops.thclick != false) {
            $('.dataTable thead th').css('cursor', 'default');
            this.addEvent(content, fs, codes);
        }
       

        //select
        this.addEventSelect(content, fs, codes);


        //自选股 添加
        this.add(content);

        //删除
        this.del(content);

     
    


}



bankuai.prototype.pageClick = function(content, fs, sumpage,codes) {
    //paging 的点击事件
    var that = this;
    that.page.onPage = function (index) {
        that.ops.index = index;

        if(index > sumpage) {
            that.ops.index = sumpage;
        }
        that.getDataBank(content, fs, codes);
            
    }
    

}



bankuai.prototype.hoverFn = function() {
    //默认
    $("#digest-industry").show();
    $("#digest-concept").hide();
    $("#digest-region").hide();

    $("#digest-industry").hover(function() {
        $("#digest-industry").show();
        $("#digest-concept").hide();
        $("#digest-region").hide();
    })

    $("#digest-concept").hover(function() {
        $("#digest-industry").hide();
        $("#digest-concept").show();
        $("#digest-region").hide();
    })


    $("#digest-region").hover(function() {
        $("#digest-industry").hide();
        $("#digest-concept").hide();
        $("#digest-region").show();
    })

}



bankuai.prototype.getBankuai = function(content, fs, codes) {
    var that = this;

    //判断是否要倒序
    if(this.getParam('sr') == 0 || this.getParam('sr') == 1) {
        // console.log('倒序')
        this.ops.orderDur = true;
    }

    //是否正序
    if(this.getParam('sr') == -1) {
        this.ops.orderDur = false;
    }

    //获取url上面的 需要 排序字段  that.ops
    if(that.getParam('st')) {
        that.ops.order = index_order[that.getParam('st')];
    }


    //增加板块的 首页跳转 第一次默认加载
    var url = window.location.href;
    var hu_plag = url.split("#")[1];
    if(hu_plag == 'region_board' || hu_plag == 'concept_board' || hu_plag == 'industry_board') {

        if(that.ops.orderDur == false) {
            that.tableHead[10].title = '领涨股票';  //修改头部
            that.tableHead[10].key = 'f128';
            //涨跌幅
            that.tableHead[11].key = 'f136';
            that.tableHead[11].color = 'f136';
            that.createHead(content, fs);
            that.getDataBank(content, fs, codes);
        }
        if(that.ops.orderDur == true) {
            that.tableHead[10].title = '领跌股票';
            that.tableHead[10].key = 'f128';
            //涨跌幅
            that.tableHead[11].key = 'f136';
            that.tableHead[11].color = 'f222';
            that.createHead(content, fs);
            that.getDataBank(content, fs, codes);


        }


    }else {

    //第一次默认展示  自选指标  首页跳转链接
    var arr = {
        'PB': '市净率',
        'MarketValue': '总市值',
        'FlowCapitalValue': '流通市值',
        'FlowCapitalValue': '流通市值',
        'ChangePercent60Day': '60日涨跌幅',
        'ChangePercent360Day': '年初至今涨跌幅',
        'Speed': '涨速',
        'FiveMinuteChangePercent': '5分钟涨跌',
        'VolumeRate': '量比'
    }
    if(that.getParam('st')) {
            for(var i=0;i< that.tableHead.length; i++) {
                    var title =  that.tableHead[i].title;
                    //先全部置为false
                    if(title == '总市值' || title == '流通市值' || title == '60日涨跌幅' || title == '年初至今涨跌幅' || title == '涨速' || title == '5分钟涨跌' || title == '量比') {
                        that.tableHead[i].show = false;
                    }
                    if(title == arr[that.getParam('st')]) {
                        that.tableHead[i].show = true;
                    }
            }
                
            //重新渲染表格
            that.createHead(content, fs);
            that.getDataBank(content, fs, codes);
        
    }else {

        that.createHead(content, fs);
        that.getDataBank(content, fs, codes);
       
    }

}


    
    

}


bankuai.prototype.createHead = function (content, fs) {
    var head = this.tableHead;
    // console.log('w d head')
    // console.log(head)

    var tr = $('<tr role="row"></tr>');
    for (var i = 0; i < head.length; i++) {
        var item = head[i];

        if(item) {
        

        if(item.show == true) {
            // console.log(item.key, this.ops.order);

            if(item.title == '序号' || item.title == '加自选' || item.order == false) {
               var th = $('<th style="" class="listview-col-'+item.name +' sorting_disabled" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span style="color:#333">'+item.title+'</span><b class="icon"></b></th>');
            } 
            else if(item.key == this.ops.order) { 
                if(this.ops.orderDur == 1) {

                    //区分可转债比价页面
                    if(item.name == 'zgValue') {
                        var th = $('<th style="" class="listview-col-' + item.name +' sorting_asc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="转股价值=正股价/转股价*100" class="tooltip-f">转股价值<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
                    }
                    else if(item.name == 'zgYjb') {
                        var th = $('<th style="" class="listview-col-' + item.name +' sorting_asc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="转股溢价率 = （转债最新价 – 转股价值）/ 转股价值" class="tooltip-f">转股溢价率<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
                    }
                    else if(item.name == 'czYjl') {
                        var th = $('<th style="" class="listview-col-' + item.name +' sorting_asc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="纯债溢价率 = （转债最新价 – 纯债价值）/ 纯债价值" class="tooltip-f">纯债溢价率<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
                    }
                    else if(item.name == 'hsCfj') {
                        var th = $('<th style="" class="listview-col-' + item.name +' sorting_asc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="满足回售触发条件时，可转债持有人有权将其持有的可转债全部或部分按债券面值加上当期应计利息的价格回售给公司" class="tooltip-f">回售触发价<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
                    }
                    else if(item.name == 'qsCfj') {
                        var th = $('<th style="" class="listview-col-' + item.name +' sorting_asc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="满足赎回触发条件时，公司有权按照债券面值加当期应计利息的价格赎回全部或部分未转股的可转债" class="tooltip-f">强赎触发价<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
                    }
                    else if(item.name == 'dqShj') {
                        var th = $('<th style="" class="listview-col-' + item.name +' sorting_asc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="公司有权以债券发行说明书中规定的到期赎回价买回其发行在外债券" class="tooltip-f">到期赎回价<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
                    }
                    
                    else {
                       var th = $('<th style="" class="listview-col-' + item.name +' sorting_asc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>'+item.title+'</span><b class="icon"></b></th>');
                    }

                }  
                
                else {

                    if(item.name == 'zgValue') {
                        var th = $('<th style="" class="listview-col-' + item.name +' sorting_desc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="转股价值=正股价/转股价*100" class="tooltip-f">转股价值<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
                    }
                    else if(item.name == 'zgYjb') {
                        var th = $('<th style="" class="listview-col-' + item.name +' sorting_desc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="转股溢价率 = （转债最新价 – 转股价值）/ 转股价值" class="tooltip-f">转股溢价率<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
                    } 
                    else if(item.name == 'czYjl') {
                        var th = $('<th style="" class="listview-col-' + item.name +' sorting_desc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="纯债溢价率 = （转债最新价 – 纯债价值）/ 纯债价值" class="tooltip-f">纯债溢价率<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
                    }
                    else if(item.name == 'hsCfj') {
                        var th = $('<th style="" class="listview-col-' + item.name +' sorting_desc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="满足回售触发条件时，可转债持有人有权将其持有的可转债全部或部分按债券面值加上当期应计利息的价格回售给公司" class="tooltip-f">回售触发价<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
                    }
                    else if(item.name == 'qsCfj') {
                        var th = $('<th style="" class="listview-col-' + item.name +' sorting_desc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="满足赎回触发条件时，公司有权按照债券面值加当期应计利息的价格赎回全部或部分未转股的可转债" class="tooltip-f">强赎触发价<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
                    }
                    else if(item.name == 'dqShj') {
                        var th = $('<th style="" class="listview-col-' + item.name +' sorting_desc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="公司有权以债券发行说明书中规定的到期赎回价买回其发行在外债券" class="tooltip-f">到期赎回价<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
                    }
                    

                    else {
                      var th = $('<th style="" class="listview-col-' + item.name +' sorting_desc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>'+item.title+'</span><b class="icon"></b></th>');
                   }
               
                }

            //    $(".tooltip").hide();
               
           } 
           //可转债比价
           else if(item.name == 'zgValue') {
              var th = $('<th style="" class="listview-col-' + item.name +' sorting" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="转股价值=正股价/转股价*100" class="tooltip-f">转股价值<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
           }
           else if(item.name == 'zgYjb') {
            var th = $('<th style="" class="listview-col-' + item.name +' sorting" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="转股溢价率 = （转债最新价 – 转股价值）/ 转股价值" class="tooltip-f">转股溢价率<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
           }
           else if(item.name == 'czYjl') {
            var th = $('<th style="" class="listview-col-' + item.name +' sorting" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="纯债溢价率 = （转债最新价 – 纯债价值）/ 纯债价值" class="tooltip-f">纯债溢价率<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
           }
           else if(item.name == 'hsCfj') {
            var th = $('<th style="" class="listview-col-' + item.name +' sorting" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="满足回售触发条件时，可转债持有人有权将其持有的可转债全部或部分按债券面值加上当期应计利息的价格回售给公司" class="tooltip-f">回售触发价<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
           }
           else if(item.name == 'qsCfj') {
            var th = $('<th style="" class="listview-col-' + item.name +' sorting" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="满足赎回触发条件时，公司有权按照债券面值加当期应计利息的价格赎回全部或部分未转股的可转债" class="tooltip-f">强赎触发价<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
           }
           else if(item.name == 'dqShj') {
            var th = $('<th style="" class="listview-col-' + item.name +' sorting" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="公司有权以债券发行说明书中规定的到期赎回价买回其发行在外债券" class="tooltip-f">到期赎回价<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
           }

           else {
              var th = $('<th style="" class="listview-col-' + item.name +' sorting" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + item.title + '</span><b class="icon"></b></th>');
           }
        
            th.attr("data-key", item.key);
            
            tr.append(th)

        }


    }

        
    }
    $(content).find("table thead").html("");
    $(content).find("table thead").append(tr)
    // var thead1 = $("<thead></thead>").append(tr)
    // $(content).find("table").html("").append(thead1);

    // this.table.find("thead").html("").append(tr);      background-color: #fff;font-weight: bold;border: none;
}


bankuai.prototype.getDataBank = function (content, fs, codes) {
   
    var that = this;
    var ops = this.ops;
    var config = this.config;
    //增加首页的跳转问题
    // console.log(ops);
    // console.log(that.getParam('st'))
    // console.log(that.getParam('sr'))


    var par = {
        fid: ops.order,
        po: ops.orderDur ? "0" : "1",
        pn: ops.index,
        pz: config.sumcount,
        fs: fs,
        fields: config.fields
       
    }
    getData(par, function (msg) {
        // console.log('getData  进来了')
        var data = msg.data;
        // console.log(data)
        if(data){
            var list = data.diff;

            var total = data.total;
            var sumpage = Math.ceil(total / ops.pagesize);
            ops.sumPage = sumpage;
    
            if (sumpage > 1) {
                var page = that.page;
                page.setOps({
                    index: ops.index,
                    sumPage: ops.sumPage
                });

                that.pageClick(content, fs, sumpage, codes);
    
                $(".dataTables_paginate").show();
            }else {
                //若是不足以分页 将分页隐藏
                $(".dataTables_paginate").hide();
            }
    
            that.setBody(content, list, codes);

        } else {

            //若数据为空 则将表格置为空
            list = [];
            $(".dataTables_paginate").hide();
            that.setBody(content, list, codes)

        }
       
    });
}


bankuai.prototype.addEvent = function (content, fs, codes) {
    var that = this;
    // console.log('that.ops.orderDur', that.ops.orderDur)
    // console.log(fs)
    //解除事件绑定
    $(content).find("thead").off();

    $(content).find("thead").on("click", "th", function () {
        var key = $(this).attr("data-key");
        //加自选不可点击
        if (key && key!= 'addzixuan') {
            if (key == that.ops.order) {
                that.ops.orderDur = !that.ops.orderDur;
            } else {
                that.ops.order = key;
                that.ops.orderDur = true;
            }

            //点击  增加板块的涨跌幅排序问题
            var url = window.location.href;
            var hu_plag = url.split("#")[1];
            if(hu_plag == 'region_board' || hu_plag == 'concept_board' || hu_plag == 'industry_board') {
                // console.log('region_board');
                // console.log(that.ops.orderDur);
                // console.log(that.tableHead)
                // console.log(that.config)

                if(that.ops.orderDur == false) {
                    that.tableHead[10].title = '领涨股票';  //修改头部
                    that.tableHead[10].key = 'f128';
                    that.tableHead[10].data =["f141","f140"];
                    //涨跌幅
                    that.tableHead[11].key = 'f136';
                    that.tableHead[11].color = 'f136';
                    that.createHead(content, fs);
                    that.getDataBank(content, fs, codes);
                }
                if(that.ops.orderDur == true) {
                    that.tableHead[10].title = '领跌股票';
                    that.tableHead[10].key = 'f207';
                    that.tableHead[10].data =["f209","f208"];
                    
                    //涨跌幅
                    that.tableHead[11].key = 'f222';
                    that.tableHead[11].color = 'f222';
                    that.createHead(content, fs);
                    that.getDataBank(content, fs, codes);
                }

            }else {
                that.createHead(content, fs);
                that.getDataBank(content, fs, codes);
            }

            
        }

        


    });
}


bankuai.prototype.addEventSelect = function (content, fs) {
    var that = this;


    $('#custom-fields').change(function(){ 
        var p2 = $(this).val();//这就是selected的值 
        var arr = {
            'PB': '市净率',
            "JLV":"净利润",
            'MarketValue': '总市值',
            'FlowCapitalValue': '流通市值',
            'ChangePercent60Day': '60日涨跌幅',
            'ChangePercent360Day': '年初至今涨跌幅',
            'Speed': '涨速',
            'FiveMinuteChangePercent': '5分钟涨跌',
            'VolumeRate': '量比'
        }
        for(var i=0;i< that.tableHead.length; i++) {
            var title =  that.tableHead[i].title;
            //先全部置为false
            if(title == '市净率' || title == '总市值' || title == '流通市值' || title == '60日涨跌幅' || title == '年初至今涨跌幅' || title == '涨速' || title == '5分钟涨跌'|| title == '量比' || title=="净利润") {
                that.tableHead[i].show = false;
            }
            if(title == arr[p2]) {
                that.tableHead[i].show = true;
                that.config.selectVal = p2;
            }
        }


        //重新渲染表格
        that.createHead(content, fs);
        that.createBody(content, fs);


    });

    

}


bankuai.prototype.setBody = function (content, list, codes) {
    var that = this;
    that.body = list;  //纯列表的数据  没有加自选的选项
    
   
    if (that.ops.zixuan == true) {
        // console.log('获取加自选的数据');
        // window._myFavor_list

        //若传入第三个参数的话  就表示之前请求过自选List ==codes  不用再请求
        if(codes) {
            ShowZixuan(codes);

        }else {
            var data1 = favstock.getDefaultStocks();
            data1.then(function (res) {
                ShowZixuan(res);
                
            });

    }



    function ShowZixuan(res) {
        if(res) {
                
            that.zixuanList = res.split(',');

            //遍历之前的数据 将加自选的数据 添加上去
            for(var i = 0; i < that.body.length; i++) {
                var item = that.body[i];
                var makScode = item.f13 + '.' + item.f12;
                if(item.f13 == "128"){
                    makScode = '116.'+ item.f12;
                }
                var isZisuan = false;
        
                if(that.in_array(makScode, that.zixuanList)) {
                    isZisuan = true;
                } else {
                    isZisuan = false;
                }
                item.isZisuan = isZisuan;
            }

            // console.log(that.body);
            that.createBody(content);

        }

    }


  }


    that.createBody(content);
}


//加自选
bankuai.prototype.add = function(content) {
    var tabcontent = content+ '-table';

    $(tabcontent).on('click', '.addzx', function() {
        console.log('add')
        var _that = $(this);
        var myscode = $(this).attr("data-myscode");
        // console.log('myscode', myscode)
        var data = favstock.add(myscode);
        data.then(function(res) {
            // console.log('add: ' + res)
            if(res == true) {
                _that.addClass('hide');
                _that.removeClass('show');
                _that.siblings('.delzx').addClass('show');
                _that.siblings('.delzx').removeClass('hide');

            }
        })
    });


    //增加首页的加自选功能
    $("#optional-blocks-wrapper").off();
    $("#optional-blocks-wrapper").on('click', '.addzx', function(e) {
        var _that = $(this);
        var myscode = $(this).attr("data-myscode");
        // console.log('myscode', myscode)
        var data = favstock.add(myscode);
        data.then(function(res) {
            // console.log('add: ' + res)
            if(res == true) {
                _that.addClass('hide');
                _that.removeClass('show');
                _that.siblings('.delzx').addClass('show');
                _that.siblings('.delzx').removeClass('hide');

            }
        })

        e.stopPropagation();//停止事件冒泡
       
        
    });

}


//删自选
bankuai.prototype.del =  function(content) {
    var tabcontent = content+ '-table'
    $(tabcontent).on('click', '.delzx', function() {
        // console.log('del')   #table_wrapper-table
        var _that = $(this);
        var myscode = $(this).attr("data-myscode");
        var data = favstock.del(myscode);
        data.then(function(res) {
            _that.addClass('hide');
            _that.removeClass('show');
            _that.siblings('.addzx').addClass('show');
            _that.siblings('.addzx').removeClass('hide');
        })
    });

    //增加首页的删自选
    $("#optional-blocks-wrapper").on('click', '.delzx', function() {
        // console.log('del')   #table_wrapper-table
        var _that = $(this);
        var myscode = $(this).attr("data-myscode");
        var data = favstock.del(myscode);
        data.then(function(res) {
            _that.addClass('hide');
            _that.removeClass('show');
            _that.siblings('.addzx').addClass('show');
            _that.siblings('.addzx').removeClass('hide');
        })
    })

}



//科创板行情数据---加自选 数据
bankuai.prototype.getKcbHQData = function (secides) {

    var url = "http://push2.eastmoney.com/api/qt/ulist/get?";

    var pars = {
        secids: secides,
        pz: 20,
        pi: 0,
        ut: 'bd1d9ddb04089700cf9c27f6f7426281',
        po: 1,
        fields: 'f2,f3,f4,f5,f6,f12',
        fltt: 2,
        invt: 2,
        np: 1
    }

    return $.ajax({
        type: "get",
        data: pars,
        url: url,
        dataType: "jsonp",
        jsonp: "cb"

    });

}


//获取url上面的参数
bankuai.prototype.getParam = function (name) {
    var urlpara = location.search;
    var par = {};
    if (urlpara != "") {
        urlpara = urlpara.substring(1, urlpara.length);
        var para = urlpara.split("&");
        var parname;
        var parvalue;
        for (var i = 0; i < para.length; i++) {
            parname = para[i].substring(0, para[i].indexOf("="));
            parvalue = para[i].substring(para[i].indexOf("=") + 1, para[i].length);
            par[parname] = parvalue;
        }
    }
    if (typeof (par[name]) != "undefined") {
        return par[name];
    } else {
        return null;
    }
}


bankuai.prototype.formatData = function () {
    var list = this.body;

    // 这些字段会根据f1 进行缩放
    var fks = ["f2", "f4", "f15", "f16", "f17", "f18", "f28", "f31", "f32"];
    // 这些字段会固定放大100倍
    var fk100 = ["f3", "f7", "f8", "f9", "f10", "f11", "f22", "f23", "f24", "f25", "f33"];
    // 这些字段会根据f152 进行缩放
    var fk152 = ["f115"];

    var fksstr = fks.join(",") + ",";
    var fk100str = fk100.join(",") + ",";
    var fk152str = fk152.join(",") + ",";

    for (var i = 0, len = list.length; i < len; i++) {
        var item = list[i];
        var f1 = Math.pow(10, item.f1);
        for (var key in item) {
            if (fksstr.indexOf(key + ",") > -1) {
                item[key] = (item[key] / f1).toFixed(item.f1);
            }
            if (fk100str.indexOf(key + ",") > -1) {
                item[key] = (item[key] / 100).toFixed(2);
            }
            if (fk152str.indexOf(key + ",") > -1) {
                var sf = Math.pow(10, item.f152)
                item[key] = (item[key] / sf).toFixed(item.f152);
            }
        }
    }

}


bankuai.prototype.createBody = function (content) {
    var that = this;
    var cont = content + '-table';
    var contbody = $(cont).find("tbody");

    //分两种情况 可传table外面的div id  但要求tableid = div id + '-table'   第二种情况可直接传table的id
    if(contbody.length == 0) {
        contbody = $(content).find("tbody");
    }
    if(that.config.selectVal && $("#custom-fields").length){
        $("#custom-fields").val(that.config.selectVal)
    }

    var body = $(contbody);

    body.html("");
    var list = this.body;
    var head = this.tableHead;

    for (var i = 0; i < list.length; i++) {
        var item = list[i];

        var tr = $("<tr></tr>");
        if (i % 2 == 0) {
            tr.addClass("odd")
        } else {
            tr.addClass("even")
        }
        
        for (var j = 0; j < head.length; j++) {
            var row = head[j];
            // console.log(row)

            if(row) {

            if(row.show == true) {
            var sp = "";
            var td = $("<td></td>");
            if(row.title == '名称' || row.title == '领涨股' || row.title == '领跌股' || row.title == '主力流入最大股') {
                var td = $("<td class='mywidth'></td>");
            }
            if(row.title == '板块名称' || row.title == '领涨股票' || row.title == '领跌股票') {
                var td = $("<td class='mywidth3'></td>");

            }
            if(row.title == '名称' && row.name == 'usindex_name') {
                if(item.f107 == 5) {
                    var td = $("<td class='mywidth' style='text-align:left;padding-left:5px;'><em class='circle' title='已收盘'>●</em></td>");
                }else if(item.f107 == 3) {
                    var td = $("<td class='mywidth' style='text-align:left;padding-left:5px;'><em class='circle' title='盘中休息'>●</em></td>");
                }
                else {
                    var td = $("<td class='mywidth' style='text-align:left;padding-left:5px;'><em class='trading' title='交易中'>●</em></td>");
                }
                
            }
            if(row.title == '最新价' || row.title == '涨跌幅') {
                var td = $("<td class='mywidth2'></td>");
            }
            if(row.title == '相关链接' && row.name == 'Links') {
                var td = $('<td class=" listview-col-Links"><a href="http://guba.eastmoney.com/list,'+ item.f12 +'.html">股吧</a>&nbsp;<a href="http://data.eastmoney.com/zjlx/'+ item.f12 +'.html">资金流</a>&nbsp;<a href="http://data.eastmoney.com/stockdata/'+ item.f12 +'.html">数据</a></td>');
            }
            //abgu
            if(row.title == '相关链接' && row.name == 'Links_abgu') {
                var td = $('<td class=" listview-col-Links"><a href="http://guba.eastmoney.com/list,'+ item.f201 +'.html">股吧</a>&nbsp;<a href="http://data.eastmoney.com/zjlx/'+ item.f201 +'.html">资金流</a>&nbsp;<a href="http://data.eastmoney.com/stockdata/'+ item.f201 +'.html">数据</a></td>');
            }

            if(row.title == '相关链接' && row.name == 'neeq_stocks') {
                var td = $('<td class=" listview-col-neeq_stocks"><a href="http://guba.eastmoney.com/list,'+ item.f12 +'.html">股吧</a>&nbsp;<a href="http://so.eastmoney.com/Web/s?keyword='+ item.f14 +'">资讯</a></td>');
            }

            if(row.title == '相关链接' && row.name == 'hk_stocks') {
                if((item.f19 == 3 || item.f19 == 4)) {
                    var td = $('<td class=" listview-col-Links"><a href="http://guba.eastmoney.com/list,hk'+ item.f12 +'.html">股吧</a>&nbsp;<a href="http://so.eastmoney.com/Web/s?keyword='+ item.f14 +'">资讯</a>&nbsp;<a href="http://emweb.securities.eastmoney.com/PC_HKF10/CoreReading/index?type=web&code='+ item.f12 +'&color=b">档案</a></td>');
                }else {
                    var td = $('<td class=" listview-col-Links">&nbsp;<a href="http://so.eastmoney.com/Web/s?keyword='+ item.f14 +'">资讯</a>&nbsp;</td>');
                }
            }
            if(row.title == '相关链接' && row.name == 'concept_board') {
                var td = $('<td class=" listview-col-Links"><a href="http://guba.eastmoney.com/list,'+ item.f12 +'.html">股吧</a>&nbsp;<a href="http://data.eastmoney.com/bkzj/'+ item.f12 +'.html">资金流</a>&nbsp;<a href="http://data.eastmoney.com/report/'+ (item.f12).substr(3,3) +'yb.html">研报</a></td>');
            }

            
            if(row.title == '相关链接' && row.name == 'fullscreen_Links') {
                var td = $('<td class=" listview-col-Links"><a href="http://guba.eastmoney.com/list,'+ item.f12 +'.html">股吧</a>&nbsp;<a href="http://data.eastmoney.com/kzz/detail/'+ item.f12 +'.html">详细</a>&nbsp;</td>');
            }

            if(row.title == '相关链接' && row.name == 'fundcloseend_Links') {
                var td = $('<td class=" listview-col-Links"><a href="http://fund.eastmoney.com/'+ item.f12 +'.html">估算图</a>&nbsp;<a href="http://guba.eastmoney.com/list,of'+ item.f12 +'.html">基金吧</a>&nbsp;<a href="http://fund.eastmoney.com/f10/'+ (item.f12) +'.html">档案</a></td>');
            }
            if(row.title == '涨跌家数' && row.name == 'zhangdiejia') {
                var td = $('<td><span style="color: red;">'+item['f104']+'</span>/<span style="color: green;">'+item['f105']+'</span></td>');
            }

            if(row.title == '买量' && row.name == 'buycount') {
                var td = $('<td style="color: red;"></td>');
            }
            if(row.title == '上涨家数') {
                var td = $('<td style="color: red;"></td>');
            }
            if(row.title == '下跌家数') {
                var td = $('<td style="color: green;"></td>');
            }
            if(row.title == '卖量' && row.name == 'sellcount') {
                var td = $('<td style="color: green;"></td>');
            }

            if(row.title == '港股吧') {
                var td = $('<td class=" listview-col-Links"><a href="http://guba.eastmoney.com/list,hk'+ item.f12 +'.html">港股吧</a></td>');
            }

            if(row.title == 'A股吧') {
                var td = $('<td class=" listview-col-Links"><a href="http://guba.eastmoney.com/topic,'+ item.f191 +'.html">A股吧</a></td>');
            }


            if(row.title == '名称' && row.name == 'mgsc_name') {
                var td = $("<td class='text_overflow' title='"+item.f14+"'></td>");
            }
           
            var mycode1 = item.f13 + '.' + item.f12;
            // 128市场不支持加自选
            if(item.f13 == "128"){
                mycode1 = '116.'+ item.f12;
            }
            if(row.title == '加自选') {
                if(item.isZisuan == false) {
                    var td = $('<td class=" listview-col-add"><a class="addzx show" target="_self" onclick="return false;" href="javascript:void(0);" data-myscode='+ mycode1 +'></a><a class="delzx hide" target="_self" onclick="return false;" href="javascript:void(0);" data-myscode='+ mycode1 +'></a></td>');
                } else if(item.isZisuan == true) {
                    var td = $('<td class=" listview-col-add"><a class="addzx hide" target="_self" onclick="return false;" href="javascript:void(0);" data-myscode='+ mycode1 +'></a><a class="delzx show" target="_self" onclick="return false;" href="javascript:void(0);" data-myscode='+ mycode1 +'></a></td>');
                } else {
                    var td = $('<td class=" listview-col-add"><a class="addzx show" target="_self" onclick="return false;" href="javascript:void(0);" data-myscode='+ mycode1 +'></a><a class="delzx hide" target="_self" onclick="return false;" href="javascript:void(0);" data-myscode='+ mycode1 +'></a></td>');

                }
            }

            // 新三板添加市场层级和定价方式 标识
            if(row.title === "名称" && row.signIcon === "sanban"){
                var signIcon = "";

                if (item.f111 & 256) { 
                    // 基础层
                    signIcon += '<i class="icon_sb jc"></i>'
                 } else if (item.f111 & 512) {
                    //  是创新层 
                    signIcon+= '<i class="icon_sb chuang"></i>'
                }else if (item.f111 & 2048) { 
                    // 是精选层
                    signIcon+= '<i class="icon_sb jing"></i>'
                 }


                if (item.f111 & 32) { 
                    // 是三板做市 
                    signIcon+= '<i class="icon_sb shi"></i>'
                 }else if (item.f111 & 64) { 
                    //  是连续竞价
                    signIcon+= '<i class="icon_sb lian"></i>'
                  }
                if (item.f111 & 128) { 
                    // 是集合竞价
                    signIcon+= '<i class="icon_sb jh"></i>'
                 }
                 var td = $('<td style="text-align:left;padding-left:6px;"><span class="signIcon">'+signIcon+'</span></td>');
            }


            if (row.type) {
                if (row.type == "seq") {
                    td.text((i + 1)+ (that.ops.pagesize*(this.ops.index -1)))
                }
            } else {
                var txt = "";
                if (row.key) {
                    txt = item[row.key];
                }

                if (row.cb) {
                    txt = row.cb(item[row.key], item);
                }

                if(row.newcb) {
                    txt = row.newcb(item[row.key], item[row.fixedkey]);
                }

                if (row.suffix) {
                    txt += row.suffix;
                }

                if (row.color !== undefined) {
                    sp = $("<span></span>");
                    var c = row.color;
                    var f1, f2;
                    if (typeof c == "number") {
                        f1 = item[row.key];
                        f2 = c;
                    } else if (c.indexOf("_") == 0) {
                        f1 = item[row.key];
                        f2 = item[c.substr(1)];
                    }
                    else {
                        f1 = item[c];
                        f2 = 0;
                    }
                    var diff = f1 - f2;
                    if (diff > 0) {
                        sp.addClass("red")
                    } else if (diff < 0) {
                        sp.addClass("green")
                    }
                    else {
                        sp.addClass("fair")
                    }
                }

                // //国际贵金属现货去除链接
                // if(that.mdName === "nobalmetal_spotgoods"){
                //     row.href = "";
                // }

                if (row.href) {
                    var data = row.data;
                    var href = row.href;

                    for (var ii = 0; ii < data.length; ii++) {
                        var reg = RegExp("\\{\\{" + ii + "\\}\\}");

                        var newcode = item[data[ii]];

                        //处理延时港股市场问题
                        if(newcode == '128') {
                            newcode = '116'
                        }
                        href = href.replace(reg, newcode);

                        
                    }
                   
                    
                    sp = $(href);
                }

                if (sp) {
                    sp.text(txt)
                    td.append(sp);

                    //给欧洲斯托克50
                    if(row.wenhaoFlag && item[row.key] == '欧洲斯托克50') {
                        td.append($(row.wenhaoFlag));

                    }
                } else {
                    td.text(txt);
                }
            }
            tr.append(td);

            }

        }
            
        }
        body.append(tr);
    }


}


bankuai.prototype.in_array = function(stringToSearch, arrayToSearch) {
    for (s = 0; s < arrayToSearch.length; s++) {
     thisEntry = arrayToSearch[s].toString();
     if (thisEntry == stringToSearch) {
      return true;
     }
    }
    return false;
}


module.exports = bankuai;

/***/ }),

/***/ "./ClientApp/gridlist3/paging.js":
/*!***************************************!*\
  !*** ./ClientApp/gridlist3/paging.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



function paging(ops) {
    this.ops = {
        container: ".dataTables_paginate",
        sumPage: 20,
        index: 10
    }

    this.ops = $.extend(this.ops, ops);
    this.box = $(this.ops.container);
    this.onPage = function(){}
    
    // this.init();
    // this.create();

    this.addEvn();
}

paging.prototype.init = function () {
    this.box.html("");
    var index = this.ops.index;
    
    var arr = [
        {
            title: index,
            index: index,
            cls: "current"
        }
    ];

    var index1 = index;
    var len = index - 3;
    while (--index1 > len) {
        if (index1 > 0) {
            arr.unshift({
                title: index1,
                index: index1
            });
        }
    }
    if (index1 >= 2) {
        arr.unshift({
            title: "…",
            index: ""
        });
    }
    if (index1 >= 1) {
        arr.unshift({
            title: 1,
            index: 1
        });
    }
    arr.unshift({
        title: "上一页",
        index: (index - 1) > 0 ? (index - 1) : 1
    });


    var sumPage = this.ops.sumPage;
    var index2 = index;
    len = index + 3;
    if (index2 > sumPage) {
        index2 = sumPage;
    }
    while (++index2 < len) {
        if (index2 <= sumPage) {
            arr.push({
                title: index2,
                index: index2
            });
        }
    }
    if (index2 <= sumPage - 1) {
        arr.push({
            title: "…",
            index: ""
        });
    }

    if (index2 <= sumPage) {
        arr.push({
            title: sumPage,
            index: sumPage
        });
    }
    arr.push({
        title: "下一页",
        index: (index + 1) > sumPage ? sumPage : (index + 1)
    });
    this.btns = arr;
}


paging.prototype.setOps = function(ops){
    this.ops = $.extend(this.ops, ops);

    if (this.ops.sumPage > 1) {
        this.init();
        this.create();
    }
}


paging.prototype.addEvn = function() {
    var that = this;
    this.box.off();
    this.box.on("click", ".paginate_button", function(){
        var index = $(this).attr("data-index");
        if (index) {
            that.onPage(index / 1);
        }

        return false
    });

    //增加go点击事件
    this.box.on("click", ".paginte_go", function() {
        var index = $(".paginate_input").val();
        if (index) {
            that.onPage(index / 1);
        }

    });

}


paging.prototype.create = function () {
    var box = this.box;
    box.html("");

    var arr = this.btns;

    var paginate_page;
    for (var i = 0, len = arr.length; i < len; i++) {
        var item = arr[i];

        if (i == 0) {
            var previous = $('<a class="previous paginate_button">上一页</a>')
            previous.attr("data-index", item.index);
            if (item.index == 1 && arr[item.index].cls) {
                previous.addClass("disabled")
            }
            box.append(previous);
        } else if (i == len - 1) {
            var next = $('<a class="next paginate_button">下一页</a>');
            next.attr("data-index", item.index);
           
            // if (item.index === this.ops.sumPage) {
            //     next.addClass("disabled")
            // }
            if (this.ops.index === this.ops.sumPage) {
                next.addClass("disabled")
            }

            box.append(next);
        } else {
            if (!paginate_page) {
                paginate_page = $("<span></span>").addClass("paginate_page");
                box.append(paginate_page);
            }
            var pbtn = $('<a class="paginate_button"></a>');
            pbtn.text(item.title);
            pbtn.attr("data-index", item.index);
            if (item.cls) {
                pbtn.addClass(item.cls);
            }

            //增加 判断若为... 设为不可点击
            if(item.title == "…") {
                pbtn.addClass("disabled")
            }

            paginate_page.append(pbtn);
        }
    }

    var html = $('<span class="paginate_of">  转到</span><input class="paginate_input" type="text"><a class="paginte_go">GO</a>');
    box.append(html);
    box.find("input").val(this.ops.index);

}



module.exports = paging;

/***/ }),

/***/ "./ClientApp/gridlist3/tools.js":
/*!**************************************!*\
  !*** ./ClientApp/gridlist3/tools.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {

    formatNumber: function (num) {
        if (num == 0) {
            return '0.00'
        }

        var res = "";
        try {
            var n = Math.abs(num / 1);
            if (typeof n == "number") {
                if (n > 10000 && n < 100000000) {
                    res = (num / 10000).toFixed(2) + "万";
                } else if (n > 100000000) {
                    res = (num / 100000000).toFixed(2) + "亿";
                } else if (n == 0) {
                    res = '-';
                } else {
                    res = num.toFixed(0);
                }
            }
        } catch (error) {
            res = "-"
        }

        return res;
    },

    //沪深个股 保留两位小数
    formatNumberHSGGLB: function (num) {
        if (num == 0) {
            return '0.00'
        }

        try {
            return num.toFixed(2);
        } catch (error) {
            return "-"
        }


    },

    //主力净流入  新 首页保留2位小数
    formatNumberIndex: function (item) {
        if (item == '-') {
            return '-';

        }

        if (item == 0) {
            return '0.00'
        }

        var res = "";
        try {
            var fixed = typeof fixed === "number" && fixed >= 0 ? fixed : NaN;
            try {
                var n = Math.abs(item / 1);
                if (typeof item == "number") {

                    if ((n >= 0 && n < 1)) {
                        return item.toFixed(2);
                    } else if ((n >= 1 && n < 1e2)) {
                        return item.toFixed(2);
                    } else if ((n >= 1e2 && n < 1e3)) {
                        return item.toFixed(1);
                    } else if ((n >= 1e3 && n < 1e4) ) {
                        return item.toFixed(0);
                    } else if ((n >= 1e4 && n < 1e6) ) {
                        item = item / 10000;
                        return item.toFixed(fixed || 2) + "万";
                    } else if ((n >= 1e6 && n < 1e7) ) {
                        item = item / 10000;
                        return item.toFixed(fixed || 1) + "万";
                    } else if ((n >= 1e7 && n < 1e8) ) {
                        item = item / 10000;
                        return item.toFixed(fixed || 0) + "万";
                    } else if ((n >= 1e8 && n < 1e10) ) {
                        item = item / 1e8;
                        return item.toFixed(fixed || 2) + "亿";
                    } else if ((n >= 1e10 && n < 1e11) ) {
                        item = item / 1e8;
                        return item.toFixed(fixed || 1) + "亿";
                    } else if ((n >= 1e11 && n < 1e12) ) {
                        item = item / 1e8;
                        return item.toFixed(fixed || 0) + "亿";
                    } else if ((n >= 1e12 && n < 1e13) ) {
                        item = item / 1e12;
                        return item.toFixed(fixed || 1) + "万亿";
                    } else if ((n >= 1e13) || (n < 0 && n > -1e16)) {
                        item = item / 1e12;
                        return item.toFixed(fixed || 0) + "万亿";
                    } else {
                        return item.toFixed(0);
                    }
                }
            } catch (error) {
                item = "-"
            }

            return item;

        } catch (error) {
            return "-"
        }


    },

    //科创板全屏 成交量new
    kcbMyformatNum: function (num) {
        if (num == '-') {
            return '-';
        }

        if (num == undefined || num == '' || isNaN(num) || num == '-') {
            return '';
        }


        var hz = '';
        var num2 = '';
        try {
            if (num >= 0 && num <= 99.999999999) {
                num2 = parseFloat(num).toFixed(2);
            } else if (num >= 100 && num <= 999) {
                num2 = parseFloat(num).toFixed(1);
            } else if (num >= 1000) {
                // num2 = parseFloat(num).toFixed(0);
                if (num > 10000 && num < 100000000) {
                    num2 = (num / 10000).toFixed(2) + "万";
                } else if (num > 100000000) {
                    num2 = (num / 100000000).toFixed(2) + "亿";
                } else if (num == 0) {
                    num2 = '-';
                } else {
                    num2 = num.toFixed(0);
                }
            }


            //处理小于0
            if (num < 0) {
                num = Math.abs(num);

                if (num >= 0 && num <= 99) {
                    num2 = parseFloat(num).toFixed(2);
                } else if (num >= 100 && num <= 999) {
                    num2 = parseFloat(num).toFixed(1);
                } else if (num >= 1000) {
                    num2 = parseFloat(num).toFixed(0);
                }

                num2 = '-' + num2;

            }

            return num2.toString() + hz;

        } catch (error) {
            return '-';
        }


    },

    formatNumber_0: function (num) {
        var res = "";
        try {
            var n = Math.abs(num / 1);
            if (typeof n == "number") {
                if (n > 10000 && n < 100000000) {
                    res = (num / 10000).toFixed(0) + "万";
                } else if (n > 100000000) {
                    res = (num / 100000000).toFixed(2) + "亿";
                } else {
                    res = num;
                }
            }
        } catch (error) {
            res = "-"
        }

        return res;
    },

    //振幅
    formatNumber2: function (num) {
        var res = "";
        try {
            var n = Math.abs(num / 1);
            if (typeof n == "number") {
                res = n.toFixed(2)
            }
        } catch (error) {
            res = "-"
        }

        if (num >= 0) {
            return res + '%';
        } else {
            return '-';
        }


    },

    //净占比
    formatNumberJZB: function (num) {
        var res = "";
        try {
            var n = Math.abs(num / 1);
            if (typeof n == "number") {
                res = n.toFixed(2)
            }
        } catch (error) {
            res = "-"
        }

        if (num >= 0) {
            return res + '%';
        } else if (num < 0) {

            return '-' + res + '%';


        } else {
            return '-';
        }


    },

    //增仓占比
    formatNumberZCZB: function (num) {
        var res = "";
        try {
            var n = Math.abs(num / 1);
            if (typeof n == "number") {
                res = n.toFixed(2)
            }
        } catch (error) {
            res = "-"
        }

        if (num >= 0) {
            return res + '%';
        } else if (num < 0) {
            return '-' + res + '%';;
        } else {
            return '-'
        }


    },

    //市盈率
    formatNumberSyl: function (num) {

        if (num > 0) {
            return num.toFixed(2);
        } else if (num < 0) {
            return num.toFixed(2);
        } else {
            return '-'
        }


    },


    //转股价值
    formatNumberJiaZ: function (num, number) {

        if (num > 0) {
            return num.toFixed(number);
        } else if (num < 0) {
            return num.toFixed(number);
        } else {
            return '-'
        }


    },

    formatNumber3: function (num) {
        var str = num;
        if (typeof str == "number") {
            return str.toString().substr(0, 4) + '-' + str.toString().substr(4, 2) + '-' + str.toString().substr(6, 2);
        } else if (typeof str == "string") {
            return str
        } else {
            return '-'
        }


    },

    //涨跌额 最新价 2位小数
    formatNumber4: function (num) {
        var res = "";
        try {
            var n = Math.abs(num / 1);
            if (typeof n == "number") {
                res = n.toFixed(2)
            }
        } catch (error) {
            res = "-"
        }

        if (num > 0) {
            return res;
        } else if (num < 0) {
            return '-' + res;
        } else if (num == 0) {
            return '0.00';
        } else {
            return '-'
        }


    },



    formatNumberTime: function (shijianchuo) {
        var time = new Date(shijianchuo * 1000);
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);


        function add0(m) {
            return m < 10 ? '0' + m : m
        }
    },


    //港股 涨跌额  2位
    formatNumberZde: function (num) {
        var res = "";
        try {
            var n = Math.abs(num / 1);
            if (typeof n == "number") {
                res = n.toFixed(2)
            }
        } catch (error) {
            res = "-"
        }

        if (num > 0) {
            return res;
        } else if (num < 0) {
            return '-' + res;
        } else if (num == 0) {
            return '0.00';
        } else {
            return '-'
        }


    },

    //排名
    formatPaiming: function (num) {
        if (num == 0) {
            return '-'
        }

        var res = "";
        try {
            var n = Math.abs(num / 1);
            if (typeof n == "number") {
                if (n > 10000 && n < 100000000) {
                    res = (num / 10000).toFixed(2) + "万";
                } else if (n > 100000000) {
                    res = (num / 100000000).toFixed(2) + "亿";
                } else if (n == 0) {
                    res = '-';
                } else {
                    res = num.toFixed(0);
                }
            }
        } catch (error) {
            res = "-"
        }

        if (res > 0) {
            res = "+" + res;
        }

        return res;
    },


    //根据参数 f1 f152 进行保留小数位数  最新价 涨跌额
    formatNumberFlag: function (value, fixednum) {
        // console.log(value)
        // console.log(fixednum)
        var res = "";
        try {
            var n = Math.abs(value / 1);
            if (typeof n == "number") {
                res = n.toFixed(fixednum)
            }
        } catch (error) {
            res = "-"
        }

        if (value > 0) {
            return res;
        } else if (value < 0) {
            return '-' + res;
        } else if (value == 0) {
            return (0).toFixed(fixednum);
        } else {
            return '-'
        }


    },


    //委比
    formatNumberFlag2: function (value, fixednum) {
        // console.log(value)
        // console.log(fixednum)
        var res = "";
        try {
            var n = Math.abs(value / 1);
            if (typeof n == "number") {
                res = n.toFixed(fixednum)
            }
        } catch (error) {
            res = "-"
        }

        if (value > 0) {
            return res + '%';
        } else if (value < 0) {
            return '-' + res + '%';
        } else if (value == 0) {
            return '-';
        } else {
            return '-'
        }


    },


    //首页 流通市值 涨跌幅 涨跌幅为0  显示0.00%
    formatNumberIndexZdf: function (value, fixednum) {
        // console.log(value)
        // console.log(fixednum)
        var res = "";
        try {
            var n = Math.abs(value / 1);
            if (typeof n == "number") {
                res = n.toFixed(fixednum)
            }
        } catch (error) {
            res = "-"
        }

        if (value > 0) {
            return res + '%';
        } else if (value < 0) {
            return '-' + res + '%';
        } else if (value == 0) {
            return '0.00%';
        } else {
            return '-'
        }


    },

    txtPoint: function (value) {
        var len = value.length,
            charCode = -1,
            realLength = 0
            strChar=[];
        for (var i = 0; i < len; i++) {
            charCode = value.charCodeAt(i);
            strChar[realLength]=value.charAt(i);
            if (charCode >= 0 && charCode <= 128)
            {
                realLength += 1; // 英文                
            }
            else{
                strChar[realLength+1]="";
                realLength += 2; // 中文
            }
        }
        if (realLength > 8) {
            value = strChar.slice(0,6).join("")+ '..';
        }

        return value
    },

    formatNumberQhsc: function (value) {
        var obj = {
            '1': '上交所',
            '8': '中金所',
            '113': '上期所',
            '114': '大商所',
            '115': '郑商所',
            '116': '港交所',
            '142': '上期能源'
        }

        var markentname = '';
        if (value) {
            if (obj[value]) {
                markentname = obj[value];
            } else {
                markentname = '国际期货';
            }
        }

        return markentname;

    },
    /**
     * 用于对比判断色值
     * 
     * @param {Number} one 数值1
     * @param {Number} two 数值2 
     * @param {String[]} arr 颜色数组
     */
    getColor:function(one,two,arr){
        if(!arr){
            arr = ["red","green"]
        }
        var diff = !!two ? parseFloat(one) - parseFloat(two) : parseFloat(one);
        return !!diff ? (diff == 0 ? '' : diff > 0 ? arr[0] : arr[1]) : '';
    },
    
    
    quoteLink: function (code, market) {
        return 'http://quote.eastmoney.com/unify/r/' + market + '.' + code;
    },
    toFixed: function (data, num) {
        if (data === '' || data === undefined || data === null || data === '-' || isNaN(data)) {
            return '-';
        }
        num = isNaN(parseInt(num)) ? 2 : parseInt(num);
        return parseFloat(data).toFixed(num);
    },
    toPercent: function (data,num) {
        if (data === '' || data === undefined || data === null || data === '-' || isNaN(data)) {
            return '-';
        }
        num = isNaN(parseInt(num)) ? 2 : parseInt(num);
        return !isNaN(parseFloat(data)) ? parseFloat(data).toFixed(num) + '%' : '-';
    }
};

/***/ }),

/***/ "./ClientApp/gridlist3/txbj.js":
/*!*************************************!*\
  !*** ./ClientApp/gridlist3/txbj.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** 
 * T型报价
 *
 * @Author: xujun  
 * @Date: 2020-02-10 16:12:36   
 */

var hqConfig = __webpack_require__(/*! ../Apiconfig */ "./ClientApp/Apiconfig.js");
var tools = __webpack_require__(/*! ./tools */ "./ClientApp/gridlist3/tools.js");
var heads = __webpack_require__(/*! ./heads */ "./ClientApp/gridlist3/heads.js")

var paging = __webpack_require__(/*! ./paging */ "./ClientApp/gridlist3/paging.js");
// //http://61.152.230.191/api/qt/slist/get?secid=1.510300&exti=202009&spt=9&fltt=2&fields=f1,f2,f3,f4,f5,f12,f13,f14,f108,f152,f249,f250,f330,f339,f340,f341,f342,f343,f344,f345,f346,f347&fid=f161&pn=1&pz=20&po=0

// http://61.152.230.191/api/qt/stock/get?mspt=1&secid=1.510300
function TXingBaoJia(options){
    var default_options = {
        container:"#table_wrapper",
        name:"",
        type:"",//品种
        time:0,//时间 等于0 代表所有所有期权
        fields:'f1,f2,f3,f4,f5,f12,f13,f14,f108,f152,f161,f249,f250,f330,f334,f339,f340,f341,f342,f343,f344,f345,f346,f347',
        px:"f161",//排序字段
        pageIndex:1,
        pageSize:20,
        po:0, //正序  倒叙
        ut: "bd1d9ddb04089700cf9c27f6f7426281", //行情utoken
        orderBy:"xqj",
        sort:"asc",
        cp:'c'
    }
    this.options = $.extend({},default_options,options);

    this.page = new paging();
    this.cacheName = this.options.name + (this.options.type+"").substring(2);
    this.heads = heads.txbj;
    this.initDom(); 
}

TXingBaoJia.prototype.initDom = function(){
    if($('.tx_header').length){
       $(".tx_header").remove();
    }
    var html = '<div class="tx_header"><div>'+
    '<div class="left">'+this.options.name+'认购期权</div>'+
    '<div class="center"><select class="tx_dete" id="tx_dete"></select></div>'+
    '<div class="right">'+this.options.name+'认沽期权</div>'+
   '</div></div>';
    $(this.options.container).prepend(html);
   
    this.$table = $(this.options.container).find("#table_wrapper-table");
    this.$table.addClass("tx_table");
    this.loadDate();
    this.event();
    
}

TXingBaoJia.prototype.pageClick = function() {
    //paging 的点击事件
    var that = this;
    that.page.onPage = function (index) {
        that.options.pageIndex = index;

        if(index > that.options.sumPage){
            that.options.pageIndex = that.options.sumPage;
        }
        that.update();

    }
}

TXingBaoJia.prototype.loadDate = function(){
    var that = this;
    var url = hqConfig.getEnvPath("tsApi") + "api/qt/stock/get";
    $.ajax({
        url: url,
        method: "GET",
        data:{
            mspt:1,
            secid:this.options.type,
            ut:this.options.ut
        },
        dataType: "jsonp",
        jsonp: "cb",
        success: function (json) {
            if(json && json.data && json.data.optionExpireInfo){
                var data = json.data.optionExpireInfo || [];
                var html = "";
                var firstVal = 0;
                for(var i = 0;i<data.length;i++){
                    var date = data[i].date + "";
                    var val = date.substring(0,6);
                    var name = date.substring(0,4) + "年" + parseInt( date.substring(4,6) )+ "月(" + data[i].days+"天)";

                    var isSelected = "";

                    if(localStorage.getItem(that.cacheName) === val){
                        isSelected = "selected";
                        that.options.time = val
                    }

                    html += '<option value="'+val+'" '+isSelected+'>'+name+'</option>';
                    if(i === 0){
                        firstVal = val;
                    }
                }

                $("#tx_dete").html(html)

                if(!that.options.time){
                    that.options.time = firstVal;
                }
            }
            that.update();
        },
        error: function (err) {
            console && console.log(err)
            that.update();
        }
    })
}
// sorting_asc
TXingBaoJia.prototype.createThead = function(){

    var head = this.heads.head;
    var html = [];
    for(var i = 0;i<head.length;i++){
        var item = head[i];
        if(!item) {continue;}
        var className = item.order ? "sorting" : "";
        var sortClassName = "";
        if(this.options.px === item.key){
            sortClassName = this.options.po === 0 ? "sorting_asc" : "sorting_desc";
        }
        if(item.tips){
            html.push('<th class="'+className+' '+sortClassName+'"  data-key="'+item.key+'"><span title="'+item.tips+'"><span>'+item.title+'</span><b class="icon_yiwen"></b></span><b class="icon"></b></th>')
        }else{
            html.push('<th class="'+className+' '+sortClassName+'"  data-key="'+item.key+'"><span>'+item.title+'</span><b class="icon"></b></th>')
        }
    }
    this.$table.find("thead").html(html.join(""))
}

TXingBaoJia.prototype.update = function(){
    var that =this;
    that.createThead();
    that.gehqtData(function(json){
        if(json && json.data && json.data.diff){
            var total = json.data.total;
            var sumpage = Math.ceil(total / that.options.pageSize);
            that.options.sumPage = sumpage;
            if(sumpage > 1){
                that.page.setOps({
                    index: that.options.pageIndex,
                    sumPage: that.options.sumPage
                });

                that.pageClick();
                $(".dataTables_paginate").show();
            }else{
                //若是不足以分页 将分页隐藏
                $(".dataTables_paginate").hide();
            }

            that.loadTable(json.data.diff)
        }else{
            that.errorLoad();
        }
    })
}

TXingBaoJia.prototype.errorLoad = function(){
    // this.$table.find("thead").html("")
    this.$table.find("tbody").html("")
    $(".dataTables_paginate").hide();
}


// &fid=f161&pn=1&pz=20&po=0
TXingBaoJia.prototype.gehqtData = function(callback){
    var that =this;
    var url = hqConfig.getEnvPath("tsApi") + "api/qt/slist/get";
    var params = {
        secid:this.options.type,//品种
        exti:this.options.time,//时间
        spt:9,//固定
        fltt: 2,
        invt: 2,
        np:1,
        ut: this.options.ut,
        fields:this.options.fields,
        fid:this.options.px,//排序
        pn:this.options.pageIndex,
        pz:this.options.pageSize,
        po:this.options.po //降序 升序
    }

    $.ajax({
        url: url,
        method: "GET",
        data:params,
        dataType: "jsonp",
        jsonp: "cb",
        success: function (msg) {
            callback && callback(msg);
        },
        error: function (err) {
            that.errorLoad();
            console && console.log(err)
        }
    })
}

TXingBaoJia.prototype.loadTable = function(data){
    var html = "";
    for(var i = 0;i<data.length;i++){
        var item = data[i];
        // 多个接口，数据统一处理
        var obj = {
            gouName:item.f14,//认购名称
            gouCode:item.f12,//认购代码
            gouMarket:item.f13,//认购市场
            gouZxj:tools.formatNumberFlag(item.f2,item.f1) ,//认购最新价
            gouZdf:tools.formatNumberIndexZdf(item.f3,item.f152),//认购涨跌幅
            gouZde:tools.formatNumberFlag(item.f4,item.f1),//认购涨跌额
            gouCcl:tools.formatNumber(item.f108),//认购持仓量
            gouCjl:tools.formatNumber(item.f5),//认购成交量
            gouYxbd:tools.toPercent(item.f249,2) ,//认购隐形波动
            gouZYjl:tools.toPercent(item.f250,2),//认购折溢价率

            Xqj:tools.formatNumberFlag(item.f161,item.f330),//行权价

            guName:item.f340,//认沽名称
            guCode:item.f339,//认沽代码
            guMarket:item.f13,//认沽市场
            guZxj:tools.formatNumberFlag(item.f341,item.f1),//认沽最新价
            guZdf:tools.formatNumberIndexZdf(item.f343,item.f152),//认沽涨跌幅
            guZde:tools.formatNumberFlag(item.f342,item.f1),//认沽涨跌额
            guCcl:tools.formatNumberFlag(item.f345),//认沽持仓量
            guCjl:tools.formatNumber(item.f344),//认沽成交量
            guYxbd:tools.toPercent(item.f346,2),//认沽隐形波动
            guZYjl:tools.toPercent(item.f347,2),//认沽折溢价率
        }

        // "#fff1f1","#f2faf6" 浅红浅绿
        // 认购及认沽背景颜色
        var bgColorLeft = tools.getColor(item.f161,item.f334,["bgLightGreen","bgLightRed"])
        var bgColorRight = tools.getColor(item.f161,item.f334,["bgLightRed","bgLightGreen"])
        // 涨跌幅颜色
        var colorLeft  = tools.getColor(item.f4);
        var colorRight  = tools.getColor(item.f342);


        html += '<tr>'+

                    '<td class="'+bgColorLeft+'"><a href="'+tools.quoteLink(obj.gouCode,obj.gouMarket)+'" target="_blank">'+obj.gouName+'</a></td>'+
                    '<td class="'+bgColorLeft+'"><span class="'+colorLeft+'">'+obj.gouZxj+'</span></td>'+
                    '<td class="'+bgColorLeft+'"><span class="'+colorLeft+'">'+obj.gouZdf+'</span></td>'+
                    '<td class="'+bgColorLeft+'"><span class="'+colorLeft+'">'+obj.gouZde+'</span></td>'+
                    '<td class="'+bgColorLeft+'"><span >'+obj.gouCcl+'</span></td>'+
                    '<td class="'+bgColorLeft+'"><span >'+obj.gouCjl+'</span></td>'+
                    '<td class="'+bgColorLeft+'"><span >'+obj.gouYxbd+'</span></td>'+
                    '<td class="'+bgColorLeft+'"><span >'+obj.gouZYjl+'</span></td>'+
                    
                    '<td class="xq_orange"><span >'+obj.Xqj+'</span></td>'+

                    '<td class="'+bgColorRight+'"><a href="'+tools.quoteLink(obj.guCode,obj.guMarket)+'" target="_blank">'+obj.guName+'</a></td>'+
                    '<td class="'+bgColorRight+'"><span class="'+colorRight+'">'+obj.guZxj+'</span></td>'+
                    '<td class="'+bgColorRight+'"><span class="'+colorRight+'">'+obj.guZdf+'</span></td>'+
                    '<td class="'+bgColorRight+'"><span class="'+colorRight+'">'+obj.guZde+'</span></td>'+
                    '<td class="'+bgColorRight+'"><span >'+obj.guCcl+'</span></td>'+
                    '<td class="'+bgColorRight+'"><span >'+obj.guCjl+'</span></td>'+
                    '<td class="'+bgColorRight+'"><span >'+obj.guYxbd+'</span></td>'+
                    '<td class="'+bgColorRight+'"><span >'+obj.guZYjl+'</span></td>'+

                '</tr>'

    }
    this.$table.find("tbody").html(html)
    localStorage.setItem(this.cacheName,this.options.time);
    // return html
}

TXingBaoJia.prototype.event = function(){
    var that = this;
    $("#tx_dete").change(function(){
        that.options.time = $(this).val();
        that.options.pageIndex = 1
        that.update();
    })
    that.$table.find("thead").off();
    that.$table.find("thead").on("click","th.sorting",function(e){
        e.stopPropagation();
        e.preventDefault();
        var sortVal = $(this).data("key");
        if(sortVal){
            if(that.options.px === sortVal){
                that.options.po = 1 - that.options.po;
            }else{
                that.options.px = sortVal
            }
            that.update();
        }

    })

    $(window).hashchange(function (e) {

        if(location.hash.indexOf("_txbj") === -1){
            $("#table_wrapper-table").removeClass("tx_table");
            $('.tx_header').remove();
        }

    });
}


module.exports = TXingBaoJia;

/***/ }),

/***/ "./ClientApp/modules/jquery-plugins/jquery-tooltips/jquery.parser.js":
/*!***************************************************************************!*\
  !*** ./ClientApp/modules/jquery-plugins/jquery-tooltips/jquery.parser.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * EasyUI for jQuery 1.5.4.2
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: http://www.jeasyui.com/license_freeware.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
/**
 * parser - EasyUI for jQuery
 * 
 */

module.exports = (function($){
	$.easyui = {
		/**
		 * Get the index of array item, return -1 when the item is not found.
		 */
		indexOfArray: function(a, o, id){
			for(var i=0,len=a.length; i<len; i++){
				if (id == undefined){
					if (a[i] == o){return i;}
				} else {
					if (a[i][o] == id){return i;}
				}
			}
			return -1;
		},
		/**
		 * Remove array item, 'o' parameter can be item object or id field name.
		 * When 'o' parameter is the id field name, the 'id' parameter is valid.
		 */
		removeArrayItem: function(a, o, id){
			if (typeof o == 'string'){
				for(var i=0,len=a.length; i<len; i++){
					if (a[i][o] == id){
						a.splice(i, 1);
						return;
					}
				}
			} else {
				var index = this.indexOfArray(a,o);
				if (index != -1){
					a.splice(index, 1);
				}
			}
		},
		/**
		 * Add un-duplicate array item, 'o' parameter is the id field name, if the 'r' object is exists, deny the action.
		 */
		addArrayItem: function(a, o, r){
			var index = this.indexOfArray(a, o, r ? r[o] : undefined);
			if (index == -1){
				a.push(r ? r : o);
			} else {
				a[index] = r ? r : o;
			}
		},
		getArrayItem: function(a, o, id){
			var index = this.indexOfArray(a, o, id);
			return index==-1 ? null : a[index];
		},
		forEach: function(data, deep, callback){
			var nodes = [];
			for(var i=0; i<data.length; i++){
				nodes.push(data[i]);
			}
			while(nodes.length){
				var node = nodes.shift();
				if (callback(node) == false){return;}
				if (deep && node.children){
					for(var i=node.children.length-1; i>=0; i--){
						nodes.unshift(node.children[i]);
					}
				}
			}
		}
	};

	$.parser = {
		auto: true,
		onComplete: function(context){},
		plugins:['draggable','droppable','resizable','pagination','tooltip',
		         'linkbutton','menu','menubutton','splitbutton','switchbutton','progressbar',
				 'tree','textbox','passwordbox','filebox','combo','combobox','combotree','combogrid','combotreegrid','tagbox','numberbox','validatebox','searchbox',
				 'spinner','numberspinner','timespinner','datetimespinner','calendar','datebox','datetimebox','slider',
				 'layout','panel','datagrid','propertygrid','treegrid','datalist','tabs','accordion','window','dialog','form'
		],
		parse: function(context){
			var aa = [];
			for(var i=0; i<$.parser.plugins.length; i++){
				var name = $.parser.plugins[i];
				var r = $('.easyui-' + name, context);
				if (r.length){
					if (r[name]){
						r.each(function(){
							$(this)[name]($.data(this, 'options')||{});
						});
					} else {
						aa.push({name:name,jq:r});
					}
				}
			}
			if (aa.length && window.easyloader){
				var names = [];
				for(var i=0; i<aa.length; i++){
					names.push(aa[i].name);
				}
				easyloader.load(names, function(){
					for(var i=0; i<aa.length; i++){
						var name = aa[i].name;
						var jq = aa[i].jq;
						jq.each(function(){
							$(this)[name]($.data(this, 'options')||{});
						});
					}
					$.parser.onComplete.call($.parser, context);
				});
			} else {
				$.parser.onComplete.call($.parser, context);
			}
		},
		
		parseValue: function(property, value, parent, delta){
			delta = delta || 0;
			var v = $.trim(String(value||''));
			var endchar = v.substr(v.length-1, 1);
			if (endchar == '%'){
				v = parseFloat(v.substr(0, v.length-1));
				if (property.toLowerCase().indexOf('width') >= 0){
					v = Math.floor((parent.width()-delta) * v / 100.0);
				} else {
					v = Math.floor((parent.height()-delta) * v / 100.0);
				}
			} else {
				v = parseInt(v) || undefined;
			}
			return v;
		},
		
		/**
		 * parse options, including standard 'data-options' attribute.
		 * 
		 * calling examples:
		 * $.parser.parseOptions(target);
		 * $.parser.parseOptions(target, ['id','title','width',{fit:'boolean',border:'boolean'},{min:'number'}]);
		 */
		parseOptions: function(target, properties){
			var t = $(target);
			var options = {};
			
			var s = $.trim(t.attr('data-options'));
			if (s){
				if (s.substring(0, 1) != '{'){
					s = '{' + s + '}';
				}
				options = (new Function('return ' + s))();
			}
			$.map(['width','height','left','top','minWidth','maxWidth','minHeight','maxHeight'], function(p){
				var pv = $.trim(target.style[p] || '');
				if (pv){
					if (pv.indexOf('%') == -1){
						pv = parseInt(pv);
						if (isNaN(pv)){
							pv = undefined;
						}
					}
					options[p] = pv;
				}
			});
				
			if (properties){
				var opts = {};
				for(var i=0; i<properties.length; i++){
					var pp = properties[i];
					if (typeof pp == 'string'){
						opts[pp] = t.attr(pp);
					} else {
						for(var name in pp){
							var type = pp[name];
							if (type == 'boolean'){
								opts[name] = t.attr(name) ? (t.attr(name) == 'true') : undefined;
							} else if (type == 'number'){
								opts[name] = t.attr(name)=='0' ? 0 : parseFloat(t.attr(name)) || undefined;
							}
						}
					}
				}
				$.extend(options, opts);
			}
			return options;
		}
	};
	$(function(){
		var d = $('<div style="position:absolute;top:-1000px;width:100px;height:100px;padding:5px"></div>').appendTo('body');
		$._boxModel = d.outerWidth()!=100;
		d.remove();
		d = $('<div style="position:fixed"></div>').appendTo('body');
		$._positionFixed = (d.css('position') == 'fixed');
		d.remove();
		
		if (!window.easyloader && $.parser.auto){
			$.parser.parse();
		}
	});
	
	/**
	 * extend plugin to set box model width
	 */
	$.fn._outerWidth = function(width){
		if (width == undefined){
			if (this[0] == window){
				return this.width() || document.body.clientWidth;
			}
			return this.outerWidth()||0;
		}
		return this._size('width', width);
	};
	
	/**
	 * extend plugin to set box model height
	 */
	$.fn._outerHeight = function(height){
		if (height == undefined){
			if (this[0] == window){
				return this.height() || document.body.clientHeight;
			}
			return this.outerHeight()||0;
		}
		return this._size('height', height);
	};
	
	$.fn._scrollLeft = function(left){
		if (left == undefined){
			return this.scrollLeft();
		} else {
			return this.each(function(){$(this).scrollLeft(left)});
		}
	};
	
	$.fn._propAttr = $.fn.prop || $.fn.attr;
	
	$.fn._size = function(options, parent){
		if (typeof options == 'string'){
			if (options == 'clear'){
				return this.each(function(){
					$(this).css({width:'',minWidth:'',maxWidth:'',height:'',minHeight:'',maxHeight:''});
				});
			} else if (options == 'fit'){
				return this.each(function(){
					_fit(this, this.tagName=='BODY' ? $('body') : $(this).parent(), true);
				});
			} else if (options == 'unfit'){
				return this.each(function(){
					_fit(this, $(this).parent(), false);
				});
			} else {
				if (parent == undefined){
					return _css(this[0], options);
				} else {
					return this.each(function(){
						_css(this, options, parent);
					});
				}
			}
		} else {
			return this.each(function(){
				parent = parent || $(this).parent();
				$.extend(options, _fit(this, parent, options.fit)||{});
				var r1 = _setSize(this, 'width', parent, options);
				var r2 = _setSize(this, 'height', parent, options);
				if (r1 || r2){
					$(this).addClass('easyui-fluid');
				} else {
					$(this).removeClass('easyui-fluid');
				}
			});
		}
		
		function _fit(target, parent, fit){
			if (!parent.length){return false;}
			var t = $(target)[0];
			var p = parent[0];
			var fcount = p.fcount || 0;
			if (fit){
				if (!t.fitted){
					t.fitted = true;
					p.fcount = fcount + 1;
					$(p).addClass('panel-noscroll');
					if (p.tagName == 'BODY'){
						$('html').addClass('panel-fit');
					}
				}
				return {
					width: ($(p).width()||1),
					height: ($(p).height()||1)
				};
			} else {
				if (t.fitted){
					t.fitted = false;
					p.fcount = fcount - 1;
					if (p.fcount == 0){
						$(p).removeClass('panel-noscroll');
						if (p.tagName == 'BODY'){
							$('html').removeClass('panel-fit');
						}
					}
				}
				return false;
			}
		}
		function _setSize(target, property, parent, options){
			var t = $(target);
			var p = property;
			var p1 = p.substr(0,1).toUpperCase() + p.substr(1);
			var min = $.parser.parseValue('min'+p1, options['min'+p1], parent);// || 0;
			var max = $.parser.parseValue('max'+p1, options['max'+p1], parent);// || 99999;
			var val = $.parser.parseValue(p, options[p], parent);
			var fluid = (String(options[p]||'').indexOf('%') >= 0 ? true : false);
			
			if (!isNaN(val)){
				var v = Math.min(Math.max(val, min||0), max||99999);
				if (!fluid){
					options[p] = v;
				}
				t._size('min'+p1, '');
				t._size('max'+p1, '');
				t._size(p, v);
			} else {
				t._size(p, '');
				t._size('min'+p1, min);
				t._size('max'+p1, max);
			}
			return fluid || options.fit;
		}
		function _css(target, property, value){
			var t = $(target);
			if (value == undefined){
				value = parseInt(target.style[property]);
				if (isNaN(value)){return undefined;}
				if ($._boxModel){
					value += getDeltaSize();
				}
				return value;
			} else if (value === ''){
				t.css(property, '');
			} else {
				if ($._boxModel){
					value -= getDeltaSize();
					if (value < 0){value = 0;}
				}
				t.css(property, value+'px');
			}
			function getDeltaSize(){
				if (property.toLowerCase().indexOf('width') >= 0){
					return t.outerWidth() - t.width();
				} else {
					return t.outerHeight() - t.height();
				}
			}
		}
	};
	
})(jQuery);

/**
 * support for mobile devices
 */
(function($){
	var longTouchTimer = null;
	var dblTouchTimer = null;
	var isDblClick = false;
	
	function onTouchStart(e){
		if (e.touches.length != 1){return}
		if (!isDblClick){
			isDblClick = true;
			dblClickTimer = setTimeout(function(){
				isDblClick = false;
			}, 500);
		} else {
			clearTimeout(dblClickTimer);
			isDblClick = false;
			fire(e, 'dblclick');
//			e.preventDefault();
		}
		longTouchTimer = setTimeout(function(){
			fire(e, 'contextmenu', 3);
		}, 1000);
		fire(e, 'mousedown');
		if ($.fn.draggable.isDragging || $.fn.resizable.isResizing){
			e.preventDefault();
		}
	}
	function onTouchMove(e){
		if (e.touches.length != 1){return}
		if (longTouchTimer){
			clearTimeout(longTouchTimer);
		}
		fire(e, 'mousemove');
		if ($.fn.draggable.isDragging || $.fn.resizable.isResizing){
			e.preventDefault();
		}
	}
	function onTouchEnd(e){
//		if (e.touches.length > 0){return}
		if (longTouchTimer){
			clearTimeout(longTouchTimer);
		}
		fire(e, 'mouseup');
		if ($.fn.draggable.isDragging || $.fn.resizable.isResizing){
			e.preventDefault();
		}
	}
	
	function fire(e, name, which){
		var event = new $.Event(name);
		event.pageX = e.changedTouches[0].pageX;
		event.pageY = e.changedTouches[0].pageY;
		event.which = which || 1;
		$(e.target).trigger(event);
	}
	
	if (document.addEventListener){
		document.addEventListener("touchstart", onTouchStart, true);
		document.addEventListener("touchmove", onTouchMove, true);
		document.addEventListener("touchend", onTouchEnd, true);
	}
});



/***/ }),

/***/ "./ClientApp/modules/jquery-plugins/jquery-tooltips/jquery.tooltip.js":
/*!****************************************************************************!*\
  !*** ./ClientApp/modules/jquery-plugins/jquery-tooltips/jquery.tooltip.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * EasyUI for jQuery 1.5.4.2
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: http://www.jeasyui.com/license_freeware.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
var jq = __webpack_require__(/*! jquery */ "jquery");
__webpack_require__(/*! ./jquery.parser */ "./ClientApp/modules/jquery-plugins/jquery-tooltips/jquery.parser.js");
module.exports = (function ($) {
    function _1(_2) {
        $(_2).addClass("tooltip-f");
    };

    function _3(_4) {
        var _5 = $.data(_4, "tooltip").options;
        $(_4).unbind(".tooltip").bind(_5.showEvent + ".tooltip", function (e) {
            $(_4).tooltip("show", e);
        }).bind(_5.hideEvent + ".tooltip", function (e) {
            $(_4).tooltip("hide", e);
        }).bind("mousemove.tooltip", function (e) {
            if (_5.trackMouse) {
                _5.trackMouseX = e.pageX;
                _5.trackMouseY = e.pageY;
                $(_4).tooltip("reposition");
            }
        });
    };

    function _6(_7) {
        var _8 = $.data(_7, "tooltip");
        if (_8.showTimer) {
            clearTimeout(_8.showTimer);
            _8.showTimer = null;
        }
        if (_8.hideTimer) {
            clearTimeout(_8.hideTimer);
            _8.hideTimer = null;
        }
    };

    function _9(_a) {
        var _b = $.data(_a, "tooltip");
        if (!_b || !_b.tip) {
            return;
        }
        var _c = _b.options;
        var _d = _b.tip;
        var _e = {
            left: -100000,
            top: -100000
        };
        if ($(_a).is(":visible")) {
            _e = _f(_c.position);
            if (_c.position == "top" && _e.top < 0) {
                _e = _f("bottom");
            } else {
                if ((_c.position == "bottom") && (_e.top + _d._outerHeight() > $(window)._outerHeight() + $(document).scrollTop())) {
                    _e = _f("top");
                }
            }
            if (_e.left < 0) {
                if (_c.position == "left") {
                    _e = _f("right");
                } else {
                    $(_a).tooltip("arrow").css("left", _d._outerWidth() / 2 + _e.left);
                    _e.left = 0;
                }
            } else {
                if (_e.left + _d._outerWidth() > $(window)._outerWidth() + $(document)._scrollLeft()) {
                    if (_c.position == "right") {
                        _e = _f("left");
                    } else {
                        var _10 = _e.left;
                        _e.left = $(window)._outerWidth() + $(document)._scrollLeft() - _d._outerWidth();
                        $(_a).tooltip("arrow").css("left", _d._outerWidth() / 2 - (_e.left - _10));
                    }
                }
            }
        }
        _d.css({
            left: _e.left,
            top: _e.top,
            zIndex: (_c.zIndex != undefined ? _c.zIndex : ($.fn.window ? $.fn.window.defaults.zIndex++ : ""))
        });
        _c.onPosition.call(_a, _e.left, _e.top);

        function _f(_11) {
            _c.position = _11 || "bottom";
            _d.removeClass("tooltip-top tooltip-bottom tooltip-left tooltip-right").addClass("tooltip-" + _c.position);
            var _12, top;
            var _13 = $.isFunction(_c.deltaX) ? _c.deltaX.call(_a, _c.position) : _c.deltaX;
            var _14 = $.isFunction(_c.deltaY) ? _c.deltaY.call(_a, _c.position) : _c.deltaY;
            if (_c.trackMouse) {
                t = $();
                _12 = _c.trackMouseX + _13;
                top = _c.trackMouseY + _14;
            } else {
                var t = $(_a);
                _12 = t.offset().left + _13;
                top = t.offset().top + _14;
            }
            switch (_c.position) {
                case "right":
                    _12 += t._outerWidth() + 12 + (_c.trackMouse ? 12 : 0);
                    top -= (_d._outerHeight() - t._outerHeight()) / 2;
                    break;
                case "left":
                    _12 -= _d._outerWidth() + 12 + (_c.trackMouse ? 12 : 0);
                    top -= (_d._outerHeight() - t._outerHeight()) / 2;
                    break;
                case "top":
                    _12 -= (_d._outerWidth() - t._outerWidth()) / 2;
                    top -= _d._outerHeight() + 12 + (_c.trackMouse ? 12 : 0);
                    break;
                case "bottom":
                    _12 -= (_d._outerWidth() - t._outerWidth()) / 2;
                    top += t._outerHeight() + 12 + (_c.trackMouse ? 12 : 0);
                    break;
            }
            return {
                left: _12,
                top: top
            };
        };
    };

    function _15(_16, e) {
        var _17 = $.data(_16, "tooltip");
        var _18 = _17.options;
        var tip = _17.tip;
        if (!tip) {
            tip = $("<div tabindex=\"-1\" class=\"tooltip\">" + "<div class=\"tooltip-content\"></div>" + "<div class=\"tooltip-arrow-outer\"></div>" + "<div class=\"tooltip-arrow\"></div>" + "</div>").appendTo("body");
            _17.tip = tip;
            _19(_16);
        }
        _6(_16);
        _17.showTimer = setTimeout(function () {
            $(_16).tooltip("reposition");
            tip.show();
            _18.onShow.call(_16, e);
            var _1a = tip.children(".tooltip-arrow-outer");
            var _1b = tip.children(".tooltip-arrow");
            var bc = "border-" + _18.position + "-color";
            _1a.add(_1b).css({
                borderTopColor: "",
                borderBottomColor: "",
                borderLeftColor: "",
                borderRightColor: ""
            });
            _1a.css(bc, tip.css(bc));
            _1b.css(bc, tip.css("backgroundColor"));
        }, _18.showDelay);
    };

    function _1c(_1d, e) {
        var _1e = $.data(_1d, "tooltip");
        if (_1e && _1e.tip) {
            _6(_1d);
            _1e.hideTimer = setTimeout(function () {
                _1e.tip.hide();
                _1e.options.onHide.call(_1d, e);
            }, _1e.options.hideDelay);
        }
    };

    function _19(_1f, _20) {
        var _21 = $.data(_1f, "tooltip");
        var _22 = _21.options;
        if (_20) {
            _22.content = _20;
        }
        if (!_21.tip) {
            return;
        }
        var cc = typeof _22.content == "function" ? _22.content.call(_1f) : _22.content;
        _21.tip.children(".tooltip-content").html(cc);
        _22.onUpdate.call(_1f, cc);
    };

    function _23(_24) {
        var _25 = $.data(_24, "tooltip");
        if (_25) {
            _6(_24);
            var _26 = _25.options;
            if (_25.tip) {
                _25.tip.remove();
            }
            if (_26._title) {
                $(_24).attr("title", _26._title);
            }
            $.removeData(_24, "tooltip");
            $(_24).unbind(".tooltip").removeClass("tooltip-f");
            _26.onDestroy.call(_24);
        }
    };
    $.fn.tooltip = function (_27, _28) {
        if (typeof _27 == "string") {
            return $.fn.tooltip.methods[_27](this, _28);
        }
        _27 = _27 || {};
        return this.each(function () {
            var _29 = $.data(this, "tooltip");
            if (_29) {
                $.extend(_29.options, _27);
            } else {
                $.data(this, "tooltip", {
                    options: $.extend({}, $.fn.tooltip.defaults, $.fn.tooltip.parseOptions(this), _27)
                });
                _1(this);
            }
            _3(this);
            _19(this);
        });
    };
    $.fn.tooltip.methods = {
        options: function (jq) {
            return $.data(jq[0], "tooltip").options;
        },
        tip: function (jq) {
            return $.data(jq[0], "tooltip").tip;
        },
        arrow: function (jq) {
            return jq.tooltip("tip").children(".tooltip-arrow-outer,.tooltip-arrow");
        },
        show: function (jq, e) {
            return jq.each(function () {
                _15(this, e);
            });
        },
        hide: function (jq, e) {
            return jq.each(function () {
                _1c(this, e);
            });
        },
        update: function (jq, _2a) {
            return jq.each(function () {
                _19(this, _2a);
            });
        },
        reposition: function (jq) {
            return jq.each(function () {
                _9(this);
            });
        },
        destroy: function (jq) {
            return jq.each(function () {
                _23(this);
            });
        }
    };
    $.fn.tooltip.parseOptions = function (_2b) {
        var t = $(_2b);
        var _2c = $.extend({}, $.parser.parseOptions(_2b, ["position", "showEvent", "hideEvent", "content", {
            trackMouse: "boolean",
            deltaX: "number",
            deltaY: "number",
            showDelay: "number",
            hideDelay: "number"
        }]), {
            _title: t.attr("title")
        });
        t.attr("title", "");
        if (!_2c.content) {
            _2c.content = _2c._title;
        }
        return _2c;
    };
    $.fn.tooltip.defaults = {
        position: "bottom",
        content: null,
        trackMouse: false,
        deltaX: 0,
        deltaY: 0,
        showEvent: "mouseenter",
        hideEvent: "mouseleave",
        showDelay: 200,
        hideDelay: 100,
        onShow: function (e) {},
        onHide: function (e) {},
        onUpdate: function (_2d) {},
        onPosition: function (_2e, top) {},
        onDestroy: function () {}
    };
})(jq);

/***/ }),

/***/ "./ClientApp/modules/jquery-plugins/jquery.ba-hashchange.js":
/*!******************************************************************!*\
  !*** ./ClientApp/modules/jquery-plugins/jquery.ba-hashchange.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: jQuery hashchange event
//
// *Version: 1.3, Last updated: 7/21/2010*
// 
// Project Home - http://benalman.com/projects/jquery-hashchange-plugin/
// GitHub       - http://github.com/cowboy/jquery-hashchange/
// Source       - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.js
// (Minified)   - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.min.js (0.8kb gzipped)
// 
// About: License
// 
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
// 
// About: Examples
// 
// These working examples, complete with fully commented code, illustrate a few
// ways in which this plugin can be used.
// 
// hashchange event - http://benalman.com/code/projects/jquery-hashchange/examples/hashchange/
// document.domain - http://benalman.com/code/projects/jquery-hashchange/examples/document_domain/
// 
// About: Support and Testing
// 
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
// 
// jQuery Versions - 1.2.6, 1.3.2, 1.4.1, 1.4.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-4, Chrome 5-6, Safari 3.2-5,
//                   Opera 9.6-10.60, iPhone 3.1, Android 1.6-2.2, BlackBerry 4.6-5.
// Unit Tests      - http://benalman.com/code/projects/jquery-hashchange/unit/
// 
// About: Known issues
// 
// While this jQuery hashchange event implementation is quite stable and
// robust, there are a few unfortunate browser bugs surrounding expected
// hashchange event-based behaviors, independent of any JavaScript
// window.onhashchange abstraction. See the following examples for more
// information:
// 
// Chrome: Back Button - http://benalman.com/code/projects/jquery-hashchange/examples/bug-chrome-back-button/
// Firefox: Remote XMLHttpRequest - http://benalman.com/code/projects/jquery-hashchange/examples/bug-firefox-remote-xhr/
// WebKit: Back Button in an Iframe - http://benalman.com/code/projects/jquery-hashchange/examples/bug-webkit-hash-iframe/
// Safari: Back Button from a different domain - http://benalman.com/code/projects/jquery-hashchange/examples/bug-safari-back-from-diff-domain/
// 
// Also note that should a browser natively support the window.onhashchange 
// event, but not report that it does, the fallback polling loop will be used.
// 
// About: Release History
// 
// 1.3   - (7/21/2010) Reorganized IE6/7 Iframe code to make it more
//         "removable" for mobile-only development. Added IE6/7 document.title
//         support. Attempted to make Iframe as hidden as possible by using
//         techniques from http://www.paciellogroup.com/blog/?p=604. Added 
//         support for the "shortcut" format $(window).hashchange( fn ) and
//         $(window).hashchange() like jQuery provides for built-in events.
//         Renamed jQuery.hashchangeDelay to <jQuery.fn.hashchange.delay> and
//         lowered its default value to 50. Added <jQuery.fn.hashchange.domain>
//         and <jQuery.fn.hashchange.src> properties plus document-domain.html
//         file to address access denied issues when setting document.domain in
//         IE6/7.
// 1.2   - (2/11/2010) Fixed a bug where coming back to a page using this plugin
//         from a page on another domain would cause an error in Safari 4. Also,
//         IE6/7 Iframe is now inserted after the body (this actually works),
//         which prevents the page from scrolling when the event is first bound.
//         Event can also now be bound before DOM ready, but it won't be usable
//         before then in IE6/7.
// 1.1   - (1/21/2010) Incorporated document.documentMode test to fix IE8 bug
//         where browser version is incorrectly reported as 8.0, despite
//         inclusion of the X-UA-Compatible IE=EmulateIE7 meta tag.
// 1.0   - (1/9/2010) Initial Release. Broke out the jQuery BBQ event.special
//         window.onhashchange functionality into a separate plugin for users
//         who want just the basic event & back button support, without all the
//         extra awesomeness that BBQ provides. This plugin will be included as
//         part of jQuery BBQ, but also be available separately.

module.exports = (function ($, window) {
    // Reused string.
    var str_hashchange = 'hashchange',

        // Method / object references.
        doc = document,
        fake_onhashchange,
        special = $.event.special,

        // Does the browser support window.onhashchange? Note that IE8 running in
        // IE7 compatibility mode reports true for 'onhashchange' in window, even
        // though the event isn't supported, so also test document.documentMode.
        doc_mode = doc.documentMode,
        supports_onhashchange = 'on' + str_hashchange in window && (doc_mode === undefined || doc_mode > 7);

    // Get location.hash (or what you'd expect location.hash to be) sans any
    // leading #. Thanks for making this necessary, Firefox!
    function get_fragment(url) {
        url = url || location.href;
        return '#' + url.replace(/^[^#]*#?(.*)$/, '$1');
    };

    // Method: jQuery.fn.hashchange
    // 
    // Bind a handler to the window.onhashchange event or trigger all bound
    // window.onhashchange event handlers. This behavior is consistent with
    // jQuery's built-in event handlers.
    // 
    // Usage:
    // 
    // > jQuery(window).hashchange( [ handler ] );
    // 
    // Arguments:
    // 
    //  handler - (Function) Optional handler to be bound to the hashchange
    //    event. This is a "shortcut" for the more verbose form:
    //    jQuery(window).bind( 'hashchange', handler ). If handler is omitted,
    //    all bound window.onhashchange event handlers will be triggered. This
    //    is a shortcut for the more verbose
    //    jQuery(window).trigger( 'hashchange' ). These forms are described in
    //    the <hashchange event> section.
    // 
    // Returns:
    // 
    //  (jQuery) The initial jQuery collection of elements.

    // Allow the "shortcut" format $(elem).hashchange( fn ) for binding and
    // $(elem).hashchange() for triggering, like jQuery does for built-in events.
    $.fn[str_hashchange] = function (fn) {
        return fn ? this.on(str_hashchange, fn) : this.trigger(str_hashchange);
    };

    // Property: jQuery.fn.hashchange.delay
    // 
    // The numeric interval (in milliseconds) at which the <hashchange event>
    // polling loop executes. Defaults to 50.

    // Property: jQuery.fn.hashchange.domain
    // 
    // If you're setting document.domain in your JavaScript, and you want hash
    // history to work in IE6/7, not only must this property be set, but you must
    // also set document.domain BEFORE jQuery is loaded into the page. This
    // property is only applicable if you are supporting IE6/7 (or IE8 operating
    // in "IE7 compatibility" mode).
    // 
    // In addition, the <jQuery.fn.hashchange.src> property must be set to the
    // path of the included "document-domain.html" file, which can be renamed or
    // modified if necessary (note that the document.domain specified must be the
    // same in both your main JavaScript as well as in this file).
    // 
    // Usage:
    // 
    // jQuery.fn.hashchange.domain = document.domain;

    // Property: jQuery.fn.hashchange.src
    // 
    // If, for some reason, you need to specify an Iframe src file (for example,
    // when setting document.domain as in <jQuery.fn.hashchange.domain>), you can
    // do so using this property. Note that when using this property, history
    // won't be recorded in IE6/7 until the Iframe src file loads. This property
    // is only applicable if you are supporting IE6/7 (or IE8 operating in "IE7
    // compatibility" mode).
    // 
    // Usage:
    // 
    // jQuery.fn.hashchange.src = 'path/to/file.html';

    $.fn[str_hashchange].delay = 50;
    /*
    $.fn[ str_hashchange ].domain = null;
    $.fn[ str_hashchange ].src = null;
    */

    // Event: hashchange event
    // 
    // Fired when location.hash changes. In browsers that support it, the native
    // HTML5 window.onhashchange event is used, otherwise a polling loop is
    // initialized, running every <jQuery.fn.hashchange.delay> milliseconds to
    // see if the hash has changed. In IE6/7 (and IE8 operating in "IE7
    // compatibility" mode), a hidden Iframe is created to allow the back button
    // and hash-based history to work.
    // 
    // Usage as described in <jQuery.fn.hashchange>:
    // 
    // > // Bind an event handler.
    // > jQuery(window).hashchange( function(e) {
    // >   var hash = location.hash;
    // >   ...
    // > });
    // > 
    // > // Manually trigger the event handler.
    // > jQuery(window).hashchange();
    // 
    // A more verbose usage that allows for event namespacing:
    // 
    // > // Bind an event handler.
    // > jQuery(window).bind( 'hashchange', function(e) {
    // >   var hash = location.hash;
    // >   ...
    // > });
    // > 
    // > // Manually trigger the event handler.
    // > jQuery(window).trigger( 'hashchange' );
    // 
    // Additional Notes:
    // 
    // * The polling loop and Iframe are not created until at least one handler
    //   is actually bound to the 'hashchange' event.
    // * If you need the bound handler(s) to execute immediately, in cases where
    //   a location.hash exists on page load, via bookmark or page refresh for
    //   example, use jQuery(window).hashchange() or the more verbose 
    //   jQuery(window).trigger( 'hashchange' ).
    // * The event can be bound before DOM ready, but since it won't be usable
    //   before then in IE6/7 (due to the necessary Iframe), recommended usage is
    //   to bind it inside a DOM ready handler.

    // Override existing $.event.special.hashchange methods (allowing this plugin
    // to be defined after jQuery BBQ in BBQ's source code).
    special[str_hashchange] = $.extend(special[str_hashchange], {

        // Called only when the first 'hashchange' event is bound to window.
        setup: function () {
            // If window.onhashchange is supported natively, there's nothing to do..
            if (supports_onhashchange) {
                return false;
            }

            // Otherwise, we need to create our own. And we don't want to call this
            // until the user binds to the event, just in case they never do, since it
            // will create a polling loop and possibly even a hidden Iframe.
            $(fake_onhashchange.start);
        },

        // Called only when the last 'hashchange' event is unbound from window.
        teardown: function () {
            // If window.onhashchange is supported natively, there's nothing to do..
            if (supports_onhashchange) {
                return false;
            }

            // Otherwise, we need to stop ours (if possible).
            $(fake_onhashchange.stop);
        }

    });

    // fake_onhashchange does all the work of triggering the window.onhashchange
    // event for browsers that don't natively support it, including creating a
    // polling loop to watch for hash changes and in IE 6/7 creating a hidden
    // Iframe to enable back and forward.
    fake_onhashchange = (function () {
        var self = {},
            timeout_id,

            // Remember the initial hash so it doesn't get triggered immediately.
            last_hash = get_fragment(),

            fn_retval = function (val) {
                return val;
            },
            history_set = fn_retval,
            history_get = fn_retval;

        // Start the polling loop.
        self.start = function () {
            timeout_id || poll();
        };

        // Stop the polling loop.
        self.stop = function () {
            timeout_id && clearTimeout(timeout_id);
            timeout_id = undefined;
        };

        // This polling loop checks every $.fn.hashchange.delay milliseconds to see
        // if location.hash has changed, and triggers the 'hashchange' event on
        // window when necessary.
        function poll() {
            var hash = get_fragment(),
                history_hash = history_get(last_hash);

            if (hash !== last_hash) {
                history_set(last_hash = hash, history_hash);

                $(window).trigger(str_hashchange);

            } else if (history_hash !== last_hash) {
                location.href = location.href.replace(/#.*/, '') + history_hash;
            }

            timeout_id = setTimeout(poll, $.fn[str_hashchange].delay);
        };

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        // vvvvvvvvvvvvvvvvvvv REMOVE IF NOT SUPPORTING IE6/7/8 vvvvvvvvvvvvvvvvvvv
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        !supports_onhashchange && (function () {
            // Not only do IE6/7 need the "magical" Iframe treatment, but so does IE8
            // when running in "IE7 compatibility" mode.

            var iframe,
                iframe_src;

            // When the event is bound and polling starts in IE 6/7, create a hidden
            // Iframe for history handling.
            self.start = function () {
                if (!iframe) {
                    iframe_src = $.fn[str_hashchange].src;
                    iframe_src = iframe_src && iframe_src + get_fragment();

                    // Create hidden Iframe. Attempt to make Iframe as hidden as possible
                    // by using techniques from http://www.paciellogroup.com/blog/?p=604.
                    iframe = $('<iframe tabindex="-1" title="empty"/>').hide()

                        // When Iframe has completely loaded, initialize the history and
                        // start polling.
                        .one('load', function () {
                            iframe_src || history_set(get_fragment());
                            poll();
                        })

                        // Load Iframe src if specified, otherwise nothing.
                        .attr('src', iframe_src || 'javascript:0')

                        // Append Iframe after the end of the body to prevent unnecessary
                        // initial page scrolling (yes, this works).
                        .insertAfter('body')[0].contentWindow;

                    // Whenever `document.title` changes, update the Iframe's title to
                    // prettify the back/next history menu entries. Since IE sometimes
                    // errors with "Unspecified error" the very first time this is set
                    // (yes, very useful) wrap this with a try/catch block.
                    doc.onpropertychange = function () {
                        try {
                            if (event.propertyName === 'title') {
                                iframe.document.title = doc.title;
                            }
                        } catch (e) {}
                    };

                }
            };

            // Override the "stop" method since an IE6/7 Iframe was created. Even
            // if there are no longer any bound event handlers, the polling loop
            // is still necessary for back/next to work at all!
            self.stop = fn_retval;

            // Get history by looking at the hidden Iframe's location.hash.
            history_get = function () {
                return get_fragment(iframe.location.href);
            };

            // Set a new history item by opening and then closing the Iframe
            // document, *then* setting its location.hash. If document.domain has
            // been set, update that as well.
            history_set = function (hash, history_hash) {
                var iframe_doc = iframe.document,
                    domain = $.fn[str_hashchange].domain;

                if (hash !== history_hash) {
                    // Update Iframe with any initial `document.title` that might be set.
                    iframe_doc.title = doc.title;

                    // Opening the Iframe's document after it has been closed is what
                    // actually adds a history entry.
                    iframe_doc.open();

                    // Set document.domain for the Iframe document as well, if necessary.
                    domain && iframe_doc.write('<script>document.domain="' + domain + '"</script>');

                    iframe_doc.close();

                    // Update the Iframe's hash, for great justice.
                    iframe.location.hash = hash;
                }
            };

        })();
        // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        // ^^^^^^^^^^^^^^^^^^^ REMOVE IF NOT SUPPORTING IE6/7/8 ^^^^^^^^^^^^^^^^^^^
        // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

        return self;
    })();

})(__webpack_require__(/*! jquery */ "jquery"), window);

/***/ }),

/***/ "./ClientApp/modules/polyfills/json-polyfill.js":
/*!******************************************************!*\
  !*** ./ClientApp/modules/polyfills/json-polyfill.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!window.JSON) {
    window.JSON = {
        parse: function (sJSON) {
            return eval('(' + sJSON + ')');
        },
        stringify: (function () {
            var toString = Object.prototype.toString;
            var isArray = Array.isArray || function (a) {
                return toString.call(a) === '[object Array]';
            };
            var escMap = {
                '"': '\\"',
                '\\': '\\\\',
                '\b': '\\b',
                '\f': '\\f',
                '\n': '\\n',
                '\r': '\\r',
                '\t': '\\t'
            };
            var escFunc = function (m) {
                return escMap[m] || '\\u' + (m.charCodeAt(0) + 0x10000).toString(16).substr(1);
            };
            var escRE = /[\\"\u0000-\u001F\u2028\u2029]/g;
            return function stringify(value) {
                if (value == null) {
                    return 'null';
                } else if (typeof value === 'number') {
                    return isFinite(value) ? value.toString() : 'null';
                } else if (typeof value === 'boolean') {
                    return value.toString();
                } else if (typeof value === 'object') {
                    if (typeof value.toJSON === 'function') {
                        return stringify(value.toJSON());
                    } else if (isArray(value)) {
                        var res = '[';
                        for (var i = 0; i < value.length; i++)
                            res += (i ? ', ' : '') + stringify(value[i]);
                        return res + ']';
                    } else if (toString.call(value) === '[object Object]') {
                        var tmp = [];
                        for (var k in value) {
                            if (value.hasOwnProperty(k))
                                tmp.push(stringify(k) + ': ' + stringify(value[k]));
                        }
                        return '{' + tmp.join(', ') + '}';
                    }
                }
                return '"' + value.toString().replace(escRE, escFunc) + '"';
            };
        })()
    };
}
module.exports = window.JSON;

/***/ }),

/***/ "./ClientApp/modules/tools.js":
/*!************************************!*\
  !*** ./ClientApp/modules/tools.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {

    objToPars: function(data){
        var arr = [];
        for (var key in data) {
            arr.push(key + "=" + data[key]);
        }
        return arr.join("&");
    }
    
    
};

/***/ }),

/***/ "./ClientApp/modules/utils.cache.js":
/*!******************************************!*\
  !*** ./ClientApp/modules/utils.cache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(/*! ./utils.extend */ "./ClientApp/modules/utils.extend.js");
module.exports = ObjectCache;
/**
 * 对象缓存容器
 * @param {object} obj 缓存对象
 */
function ObjectCache(obj) {
    if (obj) extend(this, obj || {}, false);
    this.getOrAdd = function (key, val) {
        if (typeof this[key] === "undefined") {
            this[key] = val;
        }
        return this[key];
    };
    this.set = function (key, val) {
        if (typeof val !== "undefined") {
            this[key] = val;
        }
        return this[key];
    };
    this.remove = function (key) {
        var value = this[key];
        if (typeof value === 'function') return value;
        try {
            delete this[key];
        } catch (e) {
            this[key] = undefined;
        }
        return value;
    };
    this.clear = function () {
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                this.remove(key);
            }
        }
        return this;
    }
};
ObjectCache['default'] = new ObjectCache();



/***/ }),

/***/ "./ClientApp/modules/utils.extend.js":
/*!*******************************************!*\
  !*** ./ClientApp/modules/utils.extend.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend;

/**
 * 扩展方法
 * @param {Object} target 目标对象。 
 * @param {Object} source 源对象。 
 * @param {boolean} deep 是否复制(继承)对象中的对象。 
 * @returns {Object} 返回继承了source对象属性的新对象。 
 */
function extend(target, /*optional*/ source, /*optional*/ deep) {
    target = target || {};
    var sType = typeof source,
        i = 1,
        options;
    if (sType === 'undefined' || sType === 'boolean') {
        deep = sType === 'boolean' ? source : false;
        source = target;
        target = this;
    }
    if (typeof source !== 'object' && Object.prototype.toString.call(source) !== '[object Function]')
        source = {};
    while (i <= 2) {
        options = i === 1 ? target : source;
        if (options != null) {
            for (var name in options) {
                var src = target[name],
                    copy = options[name];
                if (target === copy)
                    continue;
                if (deep && copy && typeof copy === 'object' && !copy.nodeType)
                    target[name] = extend(src || (copy.length != null ? [] : {}), copy, deep);
                else if (copy !== undefined)
                    target[name] = copy;
            }
        }
        i++;
    }
    return target;
}

/***/ }),

/***/ "./ClientApp/modules/utils.js":
/*!************************************!*\
  !*** ./ClientApp/modules/utils.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var extend = __webpack_require__(/*! ./utils.extend */ "./ClientApp/modules/utils.extend.js");
var cacheManager = __webpack_require__(/*! ./utils.cache */ "./ClientApp/modules/utils.cache.js");
module.exports = {
    extend: extend,
    isDOM: isDOM,
    ObjectCache: cacheManager,
    formatDate: formatDate,
    getQueryString: getQueryString,
    cutstr: cutstr,
    getMarketCode: getMarketCode,
    getStockStatus: getStockStatus,
    getColor: getColor,
    fixMarket: fixMarket,
    numbericFormat: numbericFormat,
    blinker: blinker,
    toFixedFun: toFixedFun ,
    addPercent: addPercent
};


/** 
 * js截取字符串，中英文都能用 
 * @param {string} str: 需要截取的字符串 
 * @param {number} len: 需要截取的长度
 * @param {string} ellipsis: 溢出文字
 * @returns {string} 截取后的字符串
 */
function cutstr(str, len, ellipsis) {
    if (typeof ellipsis != "string") ellipsis = "...";
    var str_length = 0;
    var str_len = 0;
    str_cut = new String();
    for (var i = 0; i < str.length; i++) {
        a = str.charAt(i);
        str_length++;
        if (escape(a).length > 4) {
            //中文字符的长度经编码之后大于4  
            str_length++;
        }
        //str_cut = str_cut.concat(a);
        if (str_length <= len) {
            str_len++;
        }
    }
    //如果给定字符串小于指定长度，则返回源字符串；  
    if (str_length <= len) {
        return str.toString();
    } else {
        return str.substr(0, str_len).concat(ellipsis);
    }
}

/**
 * 格式化时间
 * @param {String|Date} date 时间
 * @param {string} fmt 时间格式
 * @param {string} 默认值
 * @returns {string} 格式化时间
 */
function formatDate(date, fmt, dft) {
    fmt = fmt || "yyyy-MM-dd HH:mm:ss"
    if (typeof date === "string")
        date = new Date(date.replace(/-/g, '/').replace('T', ' ').split('+')[0]);
    if (isNaN(date.getTime())) return dft || '';
    var o = {
        "M+": date.getMonth() + 1, //月份         
        "d+": date.getDate(), //日         
        "h+": date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, //小时         
        "H+": date.getHours(), //小时         
        "m+": date.getMinutes(), //分         
        "s+": date.getSeconds(), //秒         
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度         
        "S": date.getMilliseconds() //毫秒         
    };
    var week = {
        "0": "\u65e5",
        "1": "\u4e00",
        "2": "\u4e8c",
        "3": "\u4e09",
        "4": "\u56db",
        "5": "\u4e94",
        "6": "\u516d"
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "\u661f\u671f" : "\u5468") : "") + week[date.getDay() + ""]);
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

/**
 * unicode转中文字符串
 * @param {string} str unicode
 */
function reconvert(str) {
    str = str.replace(/(\\u)(\w{4})/gi, function ($0) {
        return (String.fromCharCode(parseInt((escape($0).replace(/(%5Cu)(\w{4})/g, "$2")), 16)));
    });

    str = str.replace(/(&#x)(\w{4});/gi, function ($0) {
        return String.fromCharCode(parseInt(escape($0).replace(/(%26%23x)(\w{4})(%3B)/g, "$2"), 16));
    });
    return str;
}

/**
 * 获取链接地址中的参数
 * @param {string} name 参数名
 * @returns {string} 参数值
 */
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

/**
 * (弃用的)根据股票代码获取股票名称
 * @param {string} code 
 * @returns {"1"|"2"} 市场代码，上海1，深圳2
 */
function getMarketCode(code) {
    var i = sc.substring(0, 1);
    var j = sc.substring(0, 3);
    if (i == "5" || i == "6" || i == "9") {
        return "1"; //上证股票
    } else {
        if (j == "009" || j == "126" || j == "110") {
            return "1"; //上证股票
        } else {
            return "2"; //深圳股票
        }
    }
}

/**
 * 根据数据获取颜色样式
 * @returns {"red"|"green"|""} 颜色样式
 */
function getColor() {
    var num = 0;
    if (arguments[1]) {
        num = parseFloat(arguments[0]) - parseFloat(arguments[1]);
    } else if (arguments[0]) {
        num = parseFloat(arguments[0]);
    }
    return num > 0 ? "red" : num < 0 ? "green" : "";
}

/**
 * 个股状态
 * @param {number} code 代码
 * @returns {string} 状态
 */
function getStockStatus(code) {
    var status = parseInt(code);
    switch (status) {
        case -2:
            return "额度不可用";
        case -1:
            return "已停牌";
        case 0:
            return "额度可用";
        case 1:
            return "已收盘";
        case 2:
            return "午盘";
        case 3:
            return "休市";
        case 4:
            return "早盘清空";
        case 5:
            return "限制买入";
        case 6:
            return "限制卖出";
        case 7:
            return "暂停交易";
        case 8:
            return "上涨熔断5%";
        case 9:
            return "上涨熔断7%";
        case 10:
            return "下跌熔断5%";
        case 11:
            return "下跌熔断7%";
        default:
            return "不存在/额度不可用";
    }
};

/**
 * 判断对象是否为dom
 * @param {object} obj 对象
 * @returns {Boolean} true表示是dom对象，否则不是
 */
function isDOM(obj) {
    //首先要对HTMLElement进行类型检查，因为即使在支持HTMLElement
    //的浏览器中，类型却是有差别的，在Chrome,Opera中HTMLElement的
    //类型为function，此时就不能用它来判断了
    if (typeof HTMLElement === 'object') {
        return obj instanceof HTMLElement;
    } else {
        return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
    }
}

/**
 * 科学计数格式化数据(加单位)
 * @param {string|number} data 数据
 * @returns {string} 格式化结果
 */
function numbericFormat(data) {
    var item = parseFloat(data);
    if (!isNaN(item)) {
        var symbol = item < 0 ? -1 : item > 0 ? 1 : 0;
        if (item < 0) item = item * -1;
        if ((item > 0 && item < 1e4) || (item < 0 && item > -1e4)) {
            return (item * symbol).toString();
        } else if ((item > 0 && item < 1e6) || (item < 0 && item > -1e6)) {
            item = item / 10000;
            return item.toFixed(2) * symbol + "万";
        } else if ((item > 0 && item < 1e7) || (item < 0 && item > -1e7)) {
            item = item / 10000;
            return item.toFixed(1) * symbol + "万";
        } else if ((item > 0 && item < 1e8) || (item < 0 && item > -1e8)) {
            item = item / 10000;
            return item.toFixed(0) * symbol + "万";
        } else if ((item > 0 && item < 1e10) || (item < 0 && item > -1e10)) {
            item = item / 1e8;
            return item.toFixed(2) * symbol + "亿";
        } else if ((item > 0 && item < 1e11) || (item < 0 && item > -1e11)) {
            item = item / 1e8;
            return item.toFixed(1) * symbol + "亿";
        } else if ((item > 0 && item < 1e12) || (item < 0 && item > -1e12)) {
            item = item / 1e8;
            return item.toFixed(0) * symbol + "亿";
        } else if ((item > 0 && item < 1e14) || (item < 0 && item > -1e14)) {
            item = item / 1e12;
            return item.toFixed(2) + "万亿";
        } else if ((item > 0 && item < 1e15) || (item < 0 && item > -1e15)) {
            item = item / 1e12;
            return item.toFixed(1) * symbol + "万亿";
        } else if ((item > 0 && item < 1e16) || (item < 0 && item > -1e16)) {
            item = item / 1e12;
            return item.toFixed(0) * symbol + "万亿";
        } else {
            return item;
        }
    }
    return '-';
}

/**
 * 添加百分号
 * 
 */
function addPercent(vs) {
    var num = parseFloat(vs), item;
    if (num == 0) {
        item = num.toFixed(2) + "%";
    } else if (num) {
        item = num.toFixed(2) + "%";
    } else {
        item = vs;
    }
    return item
}

/**
 * 保留两位小数
 * 
 */
 function toFixedFun(vs, tfx) {
    var num = parseFloat(vs), item = "-";
    var tofixed = tfx ? tfx : 2;
    if (num >= 0 || num <= 0) {
        item = num.toFixed(tofixed);
    }
    return item;
}

/**
 * 闪烁器
 * @param {object} options 配置
 */
function blinker(options) {
    var _opt = extend({
        doms: [],
        color: {
            up: ["#FFDDDD", "#FFEEEE", ""], //红
            down: ["#b4f7af", "#ccffcc", ""], //绿
            others: ["#b2c3ea", "#cedaf5", ""] //浅蓝
        },
        interval: 300,
        blinktime: 150, //每帧时间 毫秒
        circle: 2 //闪烁次数
    }, options);
    var instance = this;
    instance.raise = false, instance.loop = 0;
    var tid;
    var _doms = [];
    for (var i = 0; i < _opt.doms.length; i++) {
        var obj = _opt.doms[i];
        if (isDOM(obj)) _doms.push(obj);
        else if (typeof _opt.doms[i] === "string") {
            obj = mini(_opt.doms[i]);
            if (obj) _doms.push(obj);
        }
    }
    tid = setInterval(function () {
        if (!instance.raise) return;
        var color = instance.comparer > 0 ? _opt.color.up : instance.comparer < 0 ?
            _opt.color.down : _opt.color.others;
        for (var i = 0; i < color.length * _opt.circle; i++) {
            setTimeout(function () {
                for (var i = 0; i < _doms.length; i++) {
                    _doms[i].style["background-color"] = color[instance.loop];
                    //_options.doms[i].css("background-color", color[instance.loop]);
                }
                instance.loop++;
                instance.loop = instance.loop % color.length;
            }, _opt.blinktime * i);
        }
        instance.raise = false;
    }, _opt.interval);
    this.stop = function () {
        clearInterval(tid);
    }
}

function fixMarket(code) {
    var one = code.substr(0, 1);
    var three = code.substr(0, 3);
    if (one == "5" || one == "6" || one == "9") {
        //上证股票
        return "1";
    } else {
        if (three == "009" || three == "126" || three == "110" || three == "201" || three == "202" || three == "203" || three == "204") {
            //上证股票
            return "1";
        } else {
            //深圳股票
            return "2";
        }
    }
}




Number.prototype.toFixedFit = function (num) {
    var s = this.toPrecision(num + 1);
    return s.substr(0, s.indexOf('.') + num);
}

String.prototype.cutstr = function (len, ellipsis) {
    return cutstr(this, len, ellipsis);
}

/**
 * 判断数据是否为正数
 * @returns {boolen} true表示正数,false表示负数,NaN表示非数字
 */
String.prototype.isPositive = function () {
    var context = this;
    if (typeof (context).toLowerCase() === "string") {
        context = context.replace("%", "");
        var regNum = new RegExp("^([\\-\\+]?\\d+(\\.\\d+)?)$");
        if (regNum.test(context)) {
            var reg = new RegExp("^-");
            return !reg.test(context);
        } else return Number.NaN;
    }
}

String.prototype.numbericFormat = function () {
    return numbericFormat(this.toString());
}

Date.prototype.pattern = function (format) {
    return formatDate(this, format);
}

/***/ }),

/***/ "./ClientApp/qihuo/config.js":
/*!***********************************!*\
  !*** ./ClientApp/qihuo/config.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var tools = __webpack_require__(/*! ../gridlist3/tools */ "./ClientApp/gridlist3/tools.js");

module.exports = {
    //期货市场---金融期货--能源化工
    gjqh: {
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "dm",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["sc","dm"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "name",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["sc","dm"],
                show: true,
                iconSign:"hot",
                name: 'Name'
            },
            {
                title: "最新价",
                key: "p",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_zjsj",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "zde",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "zdf",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "zdf",
                fixedkey: 'f152',
                newcb: function(value){
                    if(value !== '-') {
                        return (value).toFixed(2) + "%";
                    } else {
                        return '-';
                    }
                    
                },
                // suffix: "%",
                color: "zdf",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "今开",
                key: "o",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_zjsj",
                order: true,
                show: true,
                name: 'Open'
            },
            {
                title: "最高",
                key: "h",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_zjsj",
                order: true,
                show: true,
                name: 'Hign'
            },
            {
                title: "最低",
                key: "l",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_zjsj",
                order: true,
                show: true,
                name: 'Low'
            },
            {
                title: "昨结",
                key: "zjsj",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: true,
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "成交量",
                key: "vol",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "买盘(外盘)",
                key: "wp",
                show: true,
                order: true
            },
            {
                title: "卖盘(内盘)",
                key: "np",
                show: true,
                order: true
            },
            {
                title: "持仓量",
                key: "ccl",
                show: true,
                order: true
            }
            
            
        ],
        sumcount: 20


    },

    //上期所
    sqs: {
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "dm",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["sc","dm"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "name",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["sc","dm"],
                show: true,
                name: 'Name'
            },
            {
                title: "最新价",
                key: "p",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_zjsj",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "zde",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "zdf",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "zdf",
                fixedkey: 'f152',
                newcb: function(value){
                    if(value !== '-') {
                        return (value).toFixed(2) + "%";
                    } else {
                        return '-';
                    }
                    
                },
                // suffix: "%",
                color: "zdf",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "今开",
                key: "o",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_zjsj",
                order: true,
                show: true,
                name: 'Open'
            },
            {
                title: "最高",
                key: "h",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_zjsj",
                order: true,
                show: true,
                name: 'Hign'
            },
            {
                title: "最低",
                key: "l",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_zjsj",
                order: true,
                show: true,
                name: 'Low'
            },
            {
                title: "昨结",
                key: "zjsj",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: true,
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "成交量",
                key: "vol",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "成交额",
                key: "cje",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "买盘(外盘)",
                key: "wp",
                show: true,
                order: true
            },
            {
                title: "卖盘(内盘)",
                key: "np",
                show: true,
                order: true
            },
            {
                title: "持仓量",
                key: "ccl",
                show: true,
                order: true
            }
            
            
        ],
        sumcount: 20


    },


    //港交所 --非股票期货--不带链接
    gjs: {
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "dm",
                order: true,
                // href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                // data: ["sc","dm"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "name",
                order: true,
                // href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                // data: ["sc","dm"],
                show: true,
                name: 'Name'
            },
            {
                title: "最新价",
                key: "p",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_zjsj",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "zdf",
                fixedkey: 'f152',
                newcb: function(value){
                    if(value !== '-') {
                        return (value).toFixed(2) + "%";
                    } else {
                        return '-';
                    }
                    
                },
                // suffix: "%",
                color: "zdf",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "涨跌额",
                key: "zde",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "zdf",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "买入价",
                key: "mrj",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                //增加期货买入卖出价格的颜色判断
                color: "qihuo_zjsj",  //增加期货买入卖出价格的颜色判断
                order: true,
                show: true,
                name: 'mrj'
            },
            {
                title: "卖出价",
                key: "mcj",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "qihuo_zjsj",
                order: true,
                show: true,
                name: 'mcj'
            },
            {
                title: "买量",
                key: "mrl",
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                color: "red",
                order: true,
                show: true,
                name: 'ml'
            },
            {
                title: "卖量",
                key: "mcl",
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                color: "green",
                order: true,
                show: true,
                name: 'mll'
            },
            {
                title: "总量",
                key: "vol",
                color: "",
                order: true,
                show: true,
                name: 'zl',
                cb: function(that, row){
                    return tools.formatNumber(that);
                }
            },
            {
                title: "现量",
                key: "xs",
                color: "",
                order: true,
                show: true,
                name: 'xl',
                cb: function(that, row){
                    return tools.formatNumber(that);
                }
            },
            {
                title: "持仓量",
                key: "ccl",
                color: "",
                order: true,
                show: true,
                name: 'ccl',
                cb: function(that, row){
                    return tools.formatNumber(that);
                }
            },
            {
                title: "日增",
                key: "rz",
                color: "rz",
                order: true,
                show: true,
                name: 'rz',
                cb: function(that, row){
                    return tools.formatNumber(that);
                }
            },
            {
                title: "昨结算",
                key: "zjsj",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "",
                order: true,
                show: true,
                name: 'zjs'
            }
            
            
        ],
        sumcount: 20


    },

    //港交所 --股票期货--带链接
    gjs_gpqh:  {
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "dm",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["sc","dm"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "name",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["sc","dm"],
                show: true,
                name: 'Name'
            },
            {
                title: "最新价",
                key: "p",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_zjsj",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌幅",
                key: "zdf",
                fixedkey: 'f152',
                newcb: function(value){
                    if(value !== '-') {
                        return (value).toFixed(2) + "%";
                    } else {
                        return '-';
                    }
                    
                },
                // suffix: "%",
                color: "zdf",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "涨跌额",
                key: "zde",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "zdf",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "买入价",
                key: "mrj",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                //增加期货买入卖出价格的颜色判断
                color: "qihuo_zjsj",  //增加期货买入卖出价格的颜色判断
                order: true,
                show: true,
                name: 'mrj'
            },
            {
                title: "卖出价",
                key: "mcj",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "qihuo_zjsj",
                order: true,
                show: true,
                name: 'mcj'
            },
            {
                title: "买量",
                key: "mrl",
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                color: "red",
                order: true,
                show: true,
                name: 'ml'
            },
            {
                title: "卖量",
                key: "mcl",
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                color: "green",
                order: true,
                show: true,
                name: 'mll'
            },
            {
                title: "总量",
                key: "vol",
                color: "",
                order: true,
                show: true,
                name: 'zl',
                cb: function(that, row){
                    return tools.formatNumber(that);
                }
            },
            {
                title: "现量",
                key: "xs",
                color: "",
                order: true,
                show: true,
                name: 'xl',
                cb: function(that, row){
                    return tools.formatNumber(that);
                }
            },
            {
                title: "持仓量",
                key: "ccl",
                color: "",
                order: true,
                show: true,
                name: 'ccl',
                cb: function(that, row){
                    return tools.formatNumber(that);
                }
            },
            {
                title: "日增",
                key: "rz",
                color: "rz",
                order: true,
                show: true,
                name: 'rz',
                cb: function(that, row){
                    return tools.formatNumber(that);
                }
            },
            {
                title: "昨结算",
                key: "zjsj",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "",
                order: true,
                show: true,
                name: 'zjs'
            }
            
            
        ],
        sumcount: 20


    },


     //期货市场--中金所
     zjs: {
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "dm",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["sc","dm"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "name",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["sc","dm"],
                show: true,
                name: 'Name'
            },
            {
                title: "最新价",
                key: "p",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_zjsj",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "zde",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "zdf",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "zdf",
                fixedkey: 'f152',
                newcb: function(value){
                    if(value !== '-') {
                        return (value).toFixed(2) + "%";
                    } else {
                        return '-';
                    }
                    
                },
                // suffix: "%",
                color: "zdf",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "今开",
                key: "o",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_zjsj",
                order: true,
                show: true,
                name: 'Open'
            },
            {
                title: "最高",
                key: "h",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_zjsj",
                order: true,
                show: true,
                name: 'Hign'
            },
            {
                title: "最低",
                key: "l",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_zjsj",
                order: true,
                show: true,
                name: 'Low'
            },
            {
                title: "昨结",
                key: "zjsj",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: true,
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "成交量",
                key: "vol",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "成交额",
                key: "cje",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'cje'
            },
            {
                title: "买盘(外盘)",
                key: "wp",
                show: true,
                order: true
            },
            {
                title: "卖盘(内盘)",
                key: "np",
                show: true,
                order: true
            },
            {
                title: "持仓量",
                key: "ccl",
                show: true,
                order: true
            }
            
            
        ],
        sumcount: 20


    },


    //期权市场--上期所
    qqsc: {
        head: [
            {
                title: "序号",
                type: "seq",    // type 表示特殊类型
                show: true,
                name: 'number'

            },
            {
                title: "代码",
                key: "dm",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["sc","dm"],
                show: true,
                name: 'Code'
            },
            {
                title: "名称",
                key: "name",
                order: true,
                href: "<a href='//quote.eastmoney.com/unify/r/{{0}}.{{1}}'></a>",
                data: ["sc","dm"],
                show: true,
                name: 'Name'
            },
            {
                title: "最新价",
                key: "p",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_zjsj",
                order: true,
                show: true,
                name: 'Close'
            },
            {
                title: "涨跌额",
                key: "zde",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "zdf",
                order: true,
                show: true,
                name: 'Change'
            },
            {
                title: "涨跌幅",
                key: "zdf",
                fixedkey: 'f152',
                newcb: function(value){
                    if(value !== '-') {
                        return (value).toFixed(2) + "%";
                    } else {
                        return '-';
                    }
                    
                },
                // suffix: "%",
                color: "zdf",
                order: true,
                show: true,
                name: 'ChangePercent'
            },
            {
                title: "成交量",
                key: "vol",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "成交额",
                key: "cje",
                order: true,
                cb: function(that, row){
                    return tools.formatNumber(that);
                },
                show: true,
                name: 'Volume'
            },
            {
                title: "持仓量",
                key: "ccl",
                show: true,
                order: true,
                name: 'ccl'
            },
            {
                title: "行权价",
                key: "xqj",
                show: true,
                order: true,
                name: 'xqj'
            },
            {
                title: "剩余日",
                key: "syr",
                show: true,
                order: true,
                name: 'syr'
            },
            {
                title: "日增",
                key: "rz",
                color: "rz",
                show: true,
                order: true,
                name: 'rz'
            },
            {
                title: "昨结",
                key: "zjsj",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                order: true,
                show: true,
                name: 'PreviousClose'
            },
            {
                title: "今开",
                key: "o",
                fixedkey: 'zsjd',
                newcb: function(value, fixednum){
                    return tools.formatNumberFlag(value, fixednum);
                },
                color: "_zjsj",
                order: true,
                show: true,
                name: 'Open'
            }
            
            
        ],
        sumcount: 20


    },

    // T型报价
    txbj: {
        head: [
            {
                title: "名称",
                key: "name",
                order: false,
                show: true,
                type:"c",
                name: 'gouName',
                tips:"非标准合约第一次调整，行权价增加标识A；第二次调整，行权价增加标识B"
            },
            {
                title: "最新",
                key: "p",
                order: true,
                type:"c",
                show: true,
                name: 'gouZxj'
            },
            {
                title: "涨跌幅",
                key: "zdf",
                order: true,
                type:"c",
                show: true,
                name: 'gouZdf'
            },
            {
                title: "涨跌额",
                key: "zde",
                order: true,
                type:"c",
                show: true,
                name: 'gouZde'
            },
            {
                title: "持仓量",
                key: "ccl",
                show: true,
                order: true,
                type:"c",
                name: 'gouCcl'
            },
            {
                title: "成交量",
                key: "vol",
                order: true,
                show: true,
                type:"c",
                name: 'gouCjl'
            },
            {
                title: "隐含波动率",
                key: "yhbdl",
                order: true,
                name: 'gouYxbd',
                type:"c",
                tips:"隐含波动率(Implied Volatility)是将市场上的期权或权证交易价格代入权证理论价格模型<Black-Scholes模型>，反推出来的波动率数值"
            },
            {
                title: "折溢价率",
                key: "zyjl",
                order: true,
                type:"c",
                name: 'gouYxbd',
                tips:'期权到期前，标的物价格需要变动多少百分比才可让期权投资者在到期日实现损益平衡。溢价率衡量期权风险高低，该值越高，实现损益平衡越不容易，投资风险越高'
            },
            {
                title: "行权价",
                key: "xqj",
                order: true,
                type:"c",
                name: 'xqj',
                tips:"T型报价的行权价以同一行权价格为中心，左侧为认购期权的相关行情，右侧为认沽期权相关行情"
            },
            {
                title: "名称",
                key: "name",
                order: false,
                show: true,
                type:"p",
                name: 'guName',
                tips:"非标准合约第一次调整，行权价增加标识A；第二次调整，行权价增加标识B"
            },
            {
                title: "最新",
                key: "p",
                order: true,
                type:"p",
                show: true,
                name: 'guZxj'
            },
            {
                title: "涨跌幅",
                key: "zdf",
                order: true,
                type:"p",
                show: true,
                name: 'guZdf'
            },
            {
                title: "涨跌额",
                key: "zde",
                order: true,
                type:"p",
                show: true,
                name: 'guZde'
            },
            {
                title: "持仓量",
                key: "ccl",
                show: true,
                order: true,
                type:"p",
                name: 'guCcl'
            },
            {
                title: "成交量",
                key: "vol",
                order: true,
                show: true,
                type:"p",
                name: 'guCjl'
            },
            {
                title: "隐含波动率",
                key: "yhbdl",
                order: true,
                name: 'guYxbd',
                type:"p",
                tips:"隐含波动率(Implied Volatility)是将市场上的期权或权证交易价格代入权证理论价格模型<Black-Scholes模型>，反推出来的波动率数值"
            },
            {
                title: "折溢价率",
                key: "zyjl",
                order: true,
                type:"p",
                name: 'guYxbd',
                tips:'期权到期前，标的物价格需要变动多少百分比才可让期权投资者在到期日实现损益平衡。溢价率衡量期权风险高低，该值越高，实现损益平衡越不容易，投资风险越高'
            }
        ],
        sumcount: 20


    },



}

/***/ }),

/***/ "./ClientApp/qihuo/newQihuo.js":
/*!*************************************!*\
  !*** ./ClientApp/qihuo/newQihuo.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/polyfills/json-polyfill.js */ "./ClientApp/modules/polyfills/json-polyfill.js");
__webpack_require__(/*! ../modules/jquery-plugins/jquery-tooltips/jquery.tooltip */ "./ClientApp/modules/jquery-plugins/jquery-tooltips/jquery.tooltip.js");

var changeNum = __webpack_require__(/*! ../readomNum */ "./ClientApp/readomNum/index.js");
var formatNum = __webpack_require__(/*! ../formatNum */ "./ClientApp/formatNum.js");

var getData = __webpack_require__(/*! ./qihuoGetdata */ "./ClientApp/qihuo/qihuoGetdata.js");

var paging = __webpack_require__(/*! ../gridlist3/paging */ "./ClientApp/gridlist3/paging.js");


var config = __webpack_require__(/*! ./config */ "./ClientApp/qihuo/config.js");
// var index_order = require('./index.order.js');


var favstock = __webpack_require__(/*! ../favstock */ "./ClientApp/favstock/index.js");


__webpack_require__(/*! ../gridlist3/css/square.css */ "./ClientApp/gridlist3/css/square.css");  //表格样式

function qihuo(ops) {
    // this.config = ops.type;
    var type = ops.type;

    var head = config[type].head;
    this.tableHead = head;

    var dft = {
        orderBy: 'zdf',
        sort: 'desc',
        pageSize: config[type].sumcount,
        pageIndex: 0,
        index: 1
    }

    this.ops = $.extend(dft, ops);
    // this.ops = dft;

    // console.log(ops.url)

    this.page = new paging();

    this.codearr = [];

    this.mycontent = '';
    this.myfs = '';

}



qihuo.prototype.Qihuo = function(content, fs, codes) {
    //   console.log('bankuai 进来了')
    //   console.log(fs)
     //板块模块
        this.getQihuo(content, fs, codes);

        if(this.ops.thclick != false) {
            $('.dataTable thead th').css('cursor', 'default');
            this.addEvent(content, fs, codes);
        }
       

}



qihuo.prototype.pageClick = function(content, fs, sumpage,codes) {
    //paging 的点击事件
    var that = this;
    that.page.onPage = function (index) {
        that.ops.index = index;
        console.log(that.ops.index)

        if(index > sumpage) {
            that.ops.index = sumpage;
        }
        that.getDataBank(content, fs, codes);
            
    }
    

}



qihuo.prototype.hoverFn = function() {
    //默认
    $("#digest-industry").show();
    $("#digest-concept").hide();
    $("#digest-region").hide();

    $("#digest-industry").hover(function() {
        $("#digest-industry").show();
        $("#digest-concept").hide();
        $("#digest-region").hide();
    })

    $("#digest-concept").hover(function() {
        $("#digest-industry").hide();
        $("#digest-concept").show();
        $("#digest-region").hide();
    })


    $("#digest-region").hover(function() {
        $("#digest-industry").hide();
        $("#digest-concept").hide();
        $("#digest-region").show();
    })

}



qihuo.prototype.getQihuo = function(content, fs, codes) {
    var that = this;

    //判断是否要倒序
    if(this.getParam('sr') == 0 || this.getParam('sr') == 1) {
        // console.log('倒序')
        this.ops.orderDur = true;
    }

    //是否正序
    if(this.getParam('sr') == -1) {
        this.ops.orderDur = false;
    }

    //获取url上面的 需要 排序字段  that.ops
    // if(that.getParam('st')) {
    //     that.ops.order = index_order[that.getParam('st')];
    // }


    //增加板块的 首页跳转 第一次默认加载
    var url = window.location.href;
    var hu_plag = url.split("#")[1];
    if(hu_plag == 'region_board' || hu_plag == 'concept_board' || hu_plag == 'industry_board') {

        if(that.ops.orderDur == false) {
            that.tableHead[10].title = '领涨股票';  //修改头部
            that.tableHead[10].key = 'f128';
            //涨跌幅
            that.tableHead[11].key = 'f136';
            that.tableHead[11].color = 'f136';
            that.createHead(content, fs);
            that.getDataBank(content, fs, codes);
        }
        if(that.ops.orderDur == true) {
            that.tableHead[10].title = '领跌股票';
            that.tableHead[10].key = 'f128';
            //涨跌幅
            that.tableHead[11].key = 'f136';
            that.tableHead[11].color = 'f222';
            that.createHead(content, fs);
            that.getDataBank(content, fs, codes);


        }


    }else {

    //第一次默认展示  自选指标  首页跳转链接
    var arr = {
        'PB': '市净率',
        'MarketValue': '总市值',
        'FlowCapitalValue': '流通市值',
        'FlowCapitalValue': '流通市值',
        'ChangePercent60Day': '60日涨跌幅',
        'ChangePercent360Day': '年初至今涨跌幅',
        'Speed': '涨速',
        'FiveMinuteChangePercent': '5分钟涨跌',
        'VolumeRate': '量比'
    }
    if(that.getParam('st')) {
            for(var i=0;i< that.tableHead.length; i++) {
                    var title =  that.tableHead[i].title;
                    //先全部置为false
                    if(title == '总市值' || title == '流通市值' || title == '60日涨跌幅' || title == '年初至今涨跌幅' || title == '涨速' || title == '5分钟涨跌' || title == '量比') {
                        that.tableHead[i].show = false;
                    }
                    if(title == arr[that.getParam('st')]) {
                        that.tableHead[i].show = true;
                    }
            }
                
            //重新渲染表格
            that.createHead(content, fs);
            that.getDataBank(content, fs, codes);
        
    }else {
        that.createHead(content, fs);
        that.getDataBank(content, fs, codes);
    }

}

    
    

}


qihuo.prototype.createHead = function (content, fs) {
    var head = this.tableHead;
    // console.log('w d head')
    // console.log(head)

    var tr = $('<tr role="row"></tr>');
    for (var i = 0; i < head.length; i++) {
        var item = head[i];

        if(item) {
        

        if(item.show == true) {
            // console.log(item.key, this.ops.order);

            if(item.title == '序号' || item.title == '加自选' || item.order == false) {
               var th = $('<th style="" class="listview-col-'+item.name +' sorting_disabled" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span style="color:#333">'+item.title+'</span><b class="icon"></b></th>');
            } 
            else if(item.key == this.ops.order) { 
                if(this.ops.orderDur == 1) {

                    //区分可转债比价页面
                    if(item.name == 'zgValue') {
                        var th = $('<th style="" class="listview-col-' + item.name +' sorting_asc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="转股价值=正股价/转股价*100" class="tooltip-f">转股价值<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
                    }
                    else if(item.name == 'zgYjb') {
                        var th = $('<th style="" class="listview-col-' + item.name +' sorting_asc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="转股溢价率 = （转债最新价 – 转股价值）/ 转股价值" class="tooltip-f">转股溢价率<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
                    }
                    else if(item.name == 'czYjl') {
                        var th = $('<th style="" class="listview-col-' + item.name +' sorting_asc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="纯债溢价率 = （转债最新价 – 纯债价值）/ 纯债价值" class="tooltip-f">纯债溢价率<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
                    }
                    else if(item.name == 'hsCfj') {
                        var th = $('<th style="" class="listview-col-' + item.name +' sorting_asc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="满足回售触发条件时，可转债持有人有权将其持有的可转债全部或部分按债券面值加上当期应计利息的价格回售给公司" class="tooltip-f">回售触发价<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
                    }
                    else if(item.name == 'qsCfj') {
                        var th = $('<th style="" class="listview-col-' + item.name +' sorting_asc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="满足赎回触发条件时，公司有权按照债券面值加当期应计利息的价格赎回全部或部分未转股的可转债" class="tooltip-f">强赎触发价<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
                    }
                    else if(item.name == 'dqShj') {
                        var th = $('<th style="" class="listview-col-' + item.name +' sorting_asc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="公司有权以债券发行说明书中规定的到期赎回价买回其发行在外债券" class="tooltip-f">到期赎回价<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
                    }
                    
                    else {
                       var th = $('<th style="" class="listview-col-' + item.name +' sorting_asc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>'+item.title+'</span><b class="icon"></b></th>');
                    }

                }  
                
                else {

                    if(item.name == 'zgValue') {
                        var th = $('<th style="" class="listview-col-' + item.name +' sorting_desc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="转股价值=正股价/转股价*100" class="tooltip-f">转股价值<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
                    }
                    else if(item.name == 'zgYjb') {
                        var th = $('<th style="" class="listview-col-' + item.name +' sorting_desc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="转股溢价率 = （转债最新价 – 转股价值）/ 转股价值" class="tooltip-f">转股溢价率<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
                    } 
                    else if(item.name == 'czYjl') {
                        var th = $('<th style="" class="listview-col-' + item.name +' sorting_desc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="纯债溢价率 = （转债最新价 – 纯债价值）/ 纯债价值" class="tooltip-f">纯债溢价率<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
                    }
                    else if(item.name == 'hsCfj') {
                        var th = $('<th style="" class="listview-col-' + item.name +' sorting_desc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="满足回售触发条件时，可转债持有人有权将其持有的可转债全部或部分按债券面值加上当期应计利息的价格回售给公司" class="tooltip-f">回售触发价<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
                    }
                    else if(item.name == 'qsCfj') {
                        var th = $('<th style="" class="listview-col-' + item.name +' sorting_desc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="满足赎回触发条件时，公司有权按照债券面值加当期应计利息的价格赎回全部或部分未转股的可转债" class="tooltip-f">强赎触发价<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
                    }
                    else if(item.name == 'dqShj') {
                        var th = $('<th style="" class="listview-col-' + item.name +' sorting_desc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="公司有权以债券发行说明书中规定的到期赎回价买回其发行在外债券" class="tooltip-f">到期赎回价<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
                    }
                    

                    else {
                      var th = $('<th style="" class="listview-col-' + item.name +' sorting_desc" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>'+item.title+'</span><b class="icon"></b></th>');
                   }
               
                }

            //    $(".tooltip").hide();
               
           } 
           //可转债比价
           else if(item.name == 'zgValue') {
              var th = $('<th style="" class="listview-col-' + item.name +' sorting" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="转股价值=正股价/转股价*100" class="tooltip-f">转股价值<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
           }
           else if(item.name == 'zgYjb') {
            var th = $('<th style="" class="listview-col-' + item.name +' sorting" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="转股溢价率 = （转债最新价 – 转股价值）/ 转股价值" class="tooltip-f">转股溢价率<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
           }
           else if(item.name == 'czYjl') {
            var th = $('<th style="" class="listview-col-' + item.name +' sorting" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="纯债溢价率 = （转债最新价 – 纯债价值）/ 纯债价值" class="tooltip-f">纯债溢价率<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
           }
           else if(item.name == 'hsCfj') {
            var th = $('<th style="" class="listview-col-' + item.name +' sorting" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="满足回售触发条件时，可转债持有人有权将其持有的可转债全部或部分按债券面值加上当期应计利息的价格回售给公司" class="tooltip-f">回售触发价<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
           }
           else if(item.name == 'qsCfj') {
            var th = $('<th style="" class="listview-col-' + item.name +' sorting" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="满足赎回触发条件时，公司有权按照债券面值加当期应计利息的价格赎回全部或部分未转股的可转债" class="tooltip-f">强赎触发价<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
           }
           else if(item.name == 'dqShj') {
            var th = $('<th style="" class="listview-col-' + item.name +' sorting" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + '<span  title="公司有权以债券发行说明书中规定的到期赎回价买回其发行在外债券" class="tooltip-f">到期赎回价<em class="help-icon"></em></span>' + '</span><b class="icon"></b></th>');
           }

           else {
              var th = $('<th style="" class="listview-col-' + item.name +' sorting" rowspan="1" colspan="1" aria-label="'+ item.title +'"><span>' + item.title + '</span><b class="icon"></b></th>');
           }
        
            th.attr("data-key", item.key);
            
            tr.append(th)

        }


    }

        
    }
    $(content).find("table thead").html("");
    $(content).find("table thead").append(tr)
    // var thead1 = $("<thead></thead>").append(tr)
    // $(content).find("table").html("").append(thead1);

    // this.table.find("thead").html("").append(tr);      background-color: #fff;font-weight: bold;border: none;
}


qihuo.prototype.getDataBank = function (content, fs, codes) {
   
    var that = this;
    var ops = this.ops;
    var config = this.config;
   
    var par = {
        orderBy: ops.order,
        sort: ops.orderDur ? "asc" : "desc",
        pageSize: ops.pageSize,
        pageIndex: ops.index - 1,
        blockName: ops.blockName
    }

    getData(par, ops.url, function (msg) {
        // console.log('getData  进来了')
        // console.log(msg)
        var data = msg.list;
        // console.log(data)
        if(data){
            var list = data;

            try {
                // 期权强制转行市场
                if(ops.sc != undefined){
                    list = data.map(function(item){
                        item.sc = ops.sc
                        return item;
                    });
                }
            } catch (error) {
                
            }
            var total = msg.total;
            var sumpage = Math.ceil(total / ops.pageSize);
            
            ops.sumPage = sumpage;
    
            if (sumpage > 1) {
                var page = that.page;
                page.setOps({
                    index: ops.index,
                    sumPage: ops.sumPage
                });

                that.pageClick(content, fs, sumpage, codes);
    
                $(".dataTables_paginate").show();
            }else {
                //若是不足以分页 将分页隐藏
                $(".dataTables_paginate").hide();
            }
    
            that.setBody(content, list, codes);

        } else {

            //若数据为空 则将表格置为空
            list = [];
            $(".dataTables_paginate").hide();
            that.setBody(content, list, codes)

        }
       
    });
}


qihuo.prototype.addEvent = function (content, fs, codes) {
    var that = this;
    // console.log('that.ops.orderDur', that.ops.orderDur)
    // console.log(fs)
    //解除事件绑定
    $(content).find("thead").off();

    $(content).find("thead").on("click", "th", function () {
        var key = $(this).attr("data-key");
        //加自选不可点击
        if (key && key!= 'addzixuan') {
            if (key == that.ops.order) {
                that.ops.orderDur = !that.ops.orderDur;
            } else {
                that.ops.order = key;
                that.ops.orderDur = true;
            }

           
            that.createHead(content, fs);
            that.getDataBank(content, fs, codes);
            

            
        }

        


    });
}




qihuo.prototype.setBody = function (content, list, codes) {
    var that = this;
    that.body = list;  //纯列表的数据  没有加自选的选项
    
   
    if (that.ops.zixuan == true) {
        // console.log('获取加自选的数据');
        // window._myFavor_list

        //若传入第三个参数的话  就表示之前请求过自选List ==codes  不用再请求
        if(codes) {
            ShowZixuan(codes);

        }else {
            var data1 = favstock.getDefaultStocks();
            data1.then(function (res) {
                ShowZixuan(res);
                
            });

    }



    function ShowZixuan(res) {
        if(res) {
                
            that.zixuanList = res.split(',');

            //遍历之前的数据 将加自选的数据 添加上去
            for(var i = 0; i < that.body.length; i++) {
                var item = that.body[i];
                var makScode = item.f13 + '.' + item.f12;
                var isZisuan = false;
        
                if(that.in_array(makScode, that.zixuanList)) {
                    isZisuan = true;
                } else {
                    isZisuan = false;
                }
                item.isZisuan = isZisuan;
            }

            // console.log(that.body);
            that.createBody(content);

        }

    }


  }


    that.createBody(content);
}



//获取url上面的参数
qihuo.prototype.getParam = function (name) {
    var urlpara = location.search;
    var par = {};
    if (urlpara != "") {
        urlpara = urlpara.substring(1, urlpara.length);
        var para = urlpara.split("&");
        var parname;
        var parvalue;
        for (var i = 0; i < para.length; i++) {
            parname = para[i].substring(0, para[i].indexOf("="));
            parvalue = para[i].substring(para[i].indexOf("=") + 1, para[i].length);
            par[parname] = parvalue;
        }
    }
    if (typeof (par[name]) != "undefined") {
        return par[name];
    } else {
        return null;
    }
}


qihuo.prototype.formatData = function () {
    var list = this.body;

    // 这些字段会根据f1 进行缩放
    var fks = ["f2", "f4", "f15", "f16", "f17", "f18", "f28", "f31", "f32"];
    // 这些字段会固定放大100倍
    var fk100 = ["f3", "f7", "f8", "f9", "f10", "f11", "f22", "f23", "f24", "f25", "f33"];
    // 这些字段会根据f152 进行缩放
    var fk152 = ["f115"];

    var fksstr = fks.join(",") + ",";
    var fk100str = fk100.join(",") + ",";
    var fk152str = fk152.join(",") + ",";

    for (var i = 0, len = list.length; i < len; i++) {
        var item = list[i];
        var f1 = Math.pow(10, item.f1);
        for (var key in item) {
            if (fksstr.indexOf(key + ",") > -1) {
                item[key] = (item[key] / f1).toFixed(item.f1);
            }
            if (fk100str.indexOf(key + ",") > -1) {
                item[key] = (item[key] / 100).toFixed(2);
            }
            if (fk152str.indexOf(key + ",") > -1) {
                var sf = Math.pow(10, item.f152)
                item[key] = (item[key] / sf).toFixed(item.f152);
            }
        }
    }

}


qihuo.prototype.createBody = function (content) {
    var that = this;
    var cont = content + '-table';
    var contbody = $(cont).find("tbody");

    //分两种情况 可传table外面的div id  但要求tableid = div id + '-table'   第二种情况可直接传table的id
    if(contbody.length == 0) {
        contbody = $(content).find("tbody");
    }

    var body = $(contbody);

    body.html("");
    var list = this.body;
    var head = this.tableHead;
    for (var i = 0; i < list.length; i++) {
        var item = list[i];

        var tr = $("<tr></tr>");
        if (i % 2 == 0) {
            tr.addClass("odd")
        } else {
            tr.addClass("even")
        }
        
        for (var j = 0; j < head.length; j++) {
            var row = head[j];
            // console.log(row)

            if(row) {

            if(row.show == true) {
            var sp = "";
            var td = $("<td></td>");
            if(row.title == '名称' || row.title == '领涨股' || row.title == '领跌股' || row.title == '主力流入最大股') {
                var td = $("<td class='mywidth'></td>");
            }
            if(row.title == '板块名称' || row.title == '领涨股票' || row.title == '领跌股票') {
                var td = $("<td class='mywidth3'></td>");

            }
            if(row.title == '名称' && row.name == 'usindex_name') {
                if(item.f107 == 5) {
                    var td = $("<td class='mywidth' style='text-align:left;padding-left:5px;'><em class='circle' title='已收盘'>●</em></td>");
                }else if(item.f107 == 3) {
                    var td = $("<td class='mywidth' style='text-align:left;padding-left:5px;'><em class='circle' title='盘中休息'>●</em></td>");
                }
                else {
                    var td = $("<td class='mywidth' style='text-align:left;padding-left:5px;'><em class='trading' title='交易中'>●</em></td>");
                }
                
            }
            if(row.title == '最新价' || row.title == '涨跌幅') {
                var td = $("<td class='mywidth2'></td>");
            }


            if(row.title == '名称' && row.name == 'mgsc_name') {
                var td = $("<td class='text_overflow' title='"+item.f14+"'></td>");
            }

            if(row.title == "名称" && row.iconSign == "hot" ){
                if(item.name == "小型道指当月连续"){
                    var td = $("<td class='mywidth'><i class='icon_mini_hot'></i></td>");
                }
            }

            var mycode1 = item.f13 + '.' + item.f12;
            if(row.title == '加自选') {
                if(item.isZisuan == false) {
                    var td = $('<td class=" listview-col-add"><a class="addzx show" target="_self" onclick="return false;" href="javascript:void(0);" data-myscode='+ mycode1 +'></a><a class="delzx hide" target="_self" onclick="return false;" href="javascript:void(0);" data-myscode='+ mycode1 +'></a></td>');
                } else if(item.isZisuan == true) {
                    var td = $('<td class=" listview-col-add"><a class="addzx hide" target="_self" onclick="return false;" href="javascript:void(0);" data-myscode='+ mycode1 +'></a><a class="delzx show" target="_self" onclick="return false;" href="javascript:void(0);" data-myscode='+ mycode1 +'></a></td>');
                } else {
                    var td = $('<td class=" listview-col-add"><a class="addzx show" target="_self" onclick="return false;" href="javascript:void(0);" data-myscode='+ mycode1 +'></a><a class="delzx hide" target="_self" onclick="return false;" href="javascript:void(0);" data-myscode='+ mycode1 +'></a></td>');

                }
            }
            if (row.type) {
                if (row.type == "seq") {
                    td.text((i + 1)+ (that.ops.pageSize*(this.ops.index -1)))
                }
            } else {
                //默认txt显示 '-'
                var txt = "-";
                if (row.key) {
                    txt = item[row.key];
                }

                if (row.cb) {
                    txt = row.cb(item[row.key], item);
                }

                if(row.newcb) {
                    txt = row.newcb(item[row.key], item[row.fixedkey]);
                }

                if (row.suffix) {
                    txt += row.suffix;
                }

                if (row.color !== undefined) {
                    sp = $("<span></span>");
                    var c = row.color;
                    var f1, f2;
                    if (typeof c == "number") {
                        f1 = item[row.key];
                        f2 = c;
                    } else if (c.indexOf("_") == 0) {
                        f1 = item[row.key];
                        f2 = item[c.substr(1)];
                    }  
                    else {
                        f1 = item[c];
                        f2 = 0;
                    }

                    var diff = f1 - f2;
                    if (diff > 0) {
                        sp.addClass("red")
                    } else if (diff < 0) {
                        sp.addClass("green")
                    }
                    else {
                        sp.addClass("fair")
                    }


                    //start 增加期货买入卖出价格的颜色判断
                    if(c.indexOf("qihuo_") !== -1) {
                        var zjsj = item.zjsj;
                        if(txt > zjsj) {
                            sp.addClass("red")
                        } else if(txt < zjsj) {
                            sp.addClass("green")
                        }

                    }else if(c == 'red') {
                        sp.addClass("red")
                    }else if(c == 'green') {
                        sp.addClass("green")
                    }
                    //end



                }

                if (row.href) {
                    var data = row.data;
                    var href = row.href;
                    for (var ii = 0; ii < data.length; ii++) {
                        var reg = RegExp("\\{\\{" + ii + "\\}\\}");
                        href = href.replace(reg, item[data[ii]]);
                    }
                    sp = $(href);
                }

                if (sp) {
                    sp.text(txt)
                    td.append(sp);
                } else {
                    
                    td.text(txt);
                    
                    
                }
            }
            tr.append(td);

            }

        }
            
        }
        body.append(tr);
    }


}


qihuo.prototype.in_array = function(stringToSearch, arrayToSearch) {
    for (s = 0; s < arrayToSearch.length; s++) {
     thisEntry = arrayToSearch[s].toString();
     if (thisEntry == stringToSearch) {
      return true;
     }
    }
    return false;
}


module.exports = qihuo;

/***/ }),

/***/ "./ClientApp/qihuo/qihuoGetdata.js":
/*!*****************************************!*\
  !*** ./ClientApp/qihuo/qihuoGetdata.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var tools = __webpack_require__(/*! ../modules/tools */ "./ClientApp/modules/tools.js");
var hqConfig = __webpack_require__(/*! ../Apiconfig */ "./ClientApp/Apiconfig.js");

module.exports = function (pars, myurl, callback) {
    // var suijisu = Math.floor(Math.random()*100+1);
    if(pars.blockName) {
        pars.blockName = pars.blockName
    } else {
        pars.blockName = 'callback'
    }

    var par = {
        orderBy: 'zdf',
        sort: 'desc',
        pageSize: 5,
        pageIndex: 0,
        callbackName: 'aaa_'+ pars.blockName
    }

    par = $.extend(par, pars);
    

    $.ajax({
        url: myurl,
        method: "GET",
        data: tools.objToPars(par),
        dataType: "jsonp",
        jsonp: "cb",
        jsonpCallback: 'aaa_'+ pars.blockName,
        success: function (msg) {
            // console.log('------------------')
            // console.log(msg);
            // console.log('------------------')
            // if (msg.rc === 0) {
            callback(msg);
            // }
        },
        error: function (err) {
            console.log('errerrerr')

        }
    });


};

/***/ }),

/***/ "./ClientApp/qihuo/txbj.js":
/*!*********************************!*\
  !*** ./ClientApp/qihuo/txbj.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** 
 * 期货T型报价
 *
 * @Author: xujun  
 * @Date: 2020-02-10 16:12:36   
 */

var urlconfig = __webpack_require__(/*! ./urlConfig */ "./ClientApp/qihuo/urlConfig.js");
var tools = __webpack_require__(/*! ../gridlist3/tools */ "./ClientApp/gridlist3/tools.js");
var heads = __webpack_require__(/*! ./config */ "./ClientApp/qihuo/config.js")
var getData = __webpack_require__(/*! ./qihuoGetdata */ "./ClientApp/qihuo/qihuoGetdata.js");

var paging = __webpack_require__(/*! ../gridlist3/paging */ "./ClientApp/gridlist3/paging.js");
//http://futssetest.eastmoney.com/list/variety/option/151/2?orderBy=zdf&sort=asc&pageSize=100&pageIndex=0&cp=c
function TXingBaoJia(options){
    var default_options = {
        container:"#table_wrapper",
        urlPath:'/list/variety/option/11/1',
        time:'0',//时间 等于0 代表所有所有期权
        pageIndex:1,
        pageSize:20,
        orderBy:"xqj",//排序字段
        sort:"asc",//正序  倒叙
        cp:'c'
    }
    this.options = $.extend({},default_options,options);

    this.url = urlconfig.qihuourl + this.options.urlPath;
    this.page = new paging();
    this.cacheName = this.options.cacheName;
    this.heads = heads.txbj;
    this.initDom(); 
}

TXingBaoJia.prototype.initDom = function(){
    if($('.tx_header').length === 0){
        var html = '<div class="tx_header"><div>'+
        '<div class="left">认购期权</div>'+
        '<div class="center"><select class="tx_dete" id="tx_dete"></select></div>'+
        '<div class="right">认沽期权</div>'+
       '</div></div>';
        $(this.options.container).prepend(html);
    }else{
        $('.tx_header').show();
    }
   
    this.$table = $(this.options.container).find("#table_wrapper-table");
    this.$table.addClass("tx_table");
    this.loadDate();
    this.event();
    
}

TXingBaoJia.prototype.pageClick = function() {
    //paging 的点击事件
    var that = this;
    that.page.onPage = function (index) {
        that.options.pageIndex = index;

        if(index > that.options.sumPage){
            that.options.pageIndex = that.options.sumPage;
        }
        that.update();

    }
}

TXingBaoJia.prototype.loadDate = function(){
    var that = this;
    var params = {
        orderBy:this.options.orderBy,
        sort:this.options.sort,
        pageSize:this.options.pageSize,
        pageIndex:this.options.pageIndex -1,
        cp:this.options.cp,
        blockName:"txdate"
    }

    getData(params,this.url,function(json){
        if(json && json.date && json.date.length){
            var data = json.date || [];
            var html = "";
            var firstVal = 0;
            for(var i = 0;i<data.length;i++){
                var date = data[i].date + "";
                var name = date.substring(0,4) + "年" + parseInt( date.substring(4,6) )+ "月(" + data[i].remainDay+"天)" 

                var isSelected = "";
                if(localStorage.getItem(that.cacheName) === date){
                    isSelected = "selected";
                    that.options.time = date
                }

                html += '<option value="'+date+'" '+isSelected+'>'+name+'</option>';
                if(i === 0){
                    firstVal = date;
                }
            }
            $("#tx_dete").html(html);
            if(!that.options.time){
                that.options.time = firstVal;
            }
        }
        that.update();
    })
}
// sorting_asc
TXingBaoJia.prototype.createThead = function(){

    var head = this.heads.head;
    var html = [];
    for(var i = 0;i<head.length;i++){
        var item = head[i];
        var className = item.order ? "sorting" : "";
        var sortClassName = "";
        // console.log(this.options.orderBy,item.key,this.options.cp,item.type)
        if(this.options.orderBy === item.key && this.options.cp === item.type){
            sortClassName = this.options.sort === "asc" ? "sorting_asc" : "sorting_desc";
        }
        if(item.tips){
            html.push('<th class="'+className+' '+sortClassName+'"  data-key="'+item.key+'|'+item.type+'"><span title="'+item.tips+'"><span>'+item.title+'</span><b class="icon_yiwen"></b></span><b class="icon"></b></th>')
        }else{
            html.push('<th class="'+className+' '+sortClassName+'"  data-key="'+item.key+'|'+item.type+'"><span>'+item.title+'</span><b class="icon"></b></th>')
        }
    }
    this.$table.find("thead").html(html.join(""))
}

TXingBaoJia.prototype.update = function(){
    var that =this;
    that.createThead();
    that.gehqtData(function(json){
        if(json && json.list && json.list.length){
            var total = json.total;
            var sumpage = Math.ceil(total / that.options.pageSize);
            that.options.sumPage = sumpage;
            if(sumpage > 1){
                that.page.setOps({
                    index: that.options.pageIndex ,
                    sumPage: that.options.sumPage
                });

                that.pageClick();
                $(".dataTables_paginate").show();
            }else{
                //若是不足以分页 将分页隐藏
                $(".dataTables_paginate").hide();
            }

            that.loadTable(json.list)
        }else{
            that.errorLoad();
        }
    })
}
TXingBaoJia.prototype.errorLoad = function(){
    // this.$table.find("thead").html("")
    this.$table.find("tbody").html("")
    $(".dataTables_paginate").hide();
}

// &fid=f161&pn=1&pz=20&po=0
TXingBaoJia.prototype.gehqtData = function(callback){
    var params = {
        orderBy:this.options.orderBy,
        sort:this.options.sort,
        pageSize:this.options.pageSize,
        pageIndex:this.options.pageIndex-1,
        cp:this.options.cp,
        date:this.options.time,
        blockName:"txdata"
    }

    getData(params,this.url,function(json){
        callback && callback(json);
    })
}

TXingBaoJia.prototype.loadTable = function(data){
    var html = "";
    for(var i = 0;i<data.length;i++){
        var cItem = data[i].callQt; //购
        var pItem = data[i].putQt; //沽
        // 多个接口，数据统一处理
        var obj = {
            gouName:cItem.name,//认购名称
            gouCode:cItem.sc,//认购代码
            gouMarket:cItem.dm,//认购市场
            gouZxj:tools.formatNumberFlag(cItem.p,cItem.zsjd) ,//认购最新价
            gouZdf:tools.formatNumberIndexZdf(cItem.zdf,2),//认购涨跌幅
            gouZde:tools.formatNumberFlag(cItem.zde,cItem.zsjd),//认购涨跌额
            gouCcl:tools.formatNumber(cItem.ccl),//认购持仓量
            gouCjl:tools.formatNumber(cItem.vol),//认购成交量
            gouYxbd:tools.toPercent(cItem.yhbdl,2) ,//认购隐形波动
            gouZYjl:tools.toPercent(cItem.zyjl,2),//认购折溢价率

            Xqj:tools.formatNumberFlag(cItem.xqj,0),//行权价

            guName:pItem.name,//认沽名称
            guCode:pItem.sc,//认沽代码
            guMarket:pItem.dm,//认沽市场
            guZxj:tools.formatNumberFlag(pItem.p,pItem.zsjd),//认沽最新价
            guZdf:tools.formatNumberIndexZdf(pItem.zdf,2),//认沽涨跌幅
            guZde:tools.formatNumberFlag(pItem.zde,pItem.zsjd),//认沽涨跌额
            guCcl:tools.formatNumberFlag(pItem.ccl),//认沽持仓量
            guCjl:tools.formatNumber(pItem.vol),//认沽成交量
            guYxbd:tools.toPercent(pItem.yhbdl,2),//认沽隐形波动
            guZYjl:tools.toPercent(pItem.zyjl,2),//认沽折溢价率
        }

        // "#fff1f1","#f2faf6" 浅红浅绿
        // 认购及认沽背景颜色
        var bgColorLeft = tools.getColor(cItem.bddqj,cItem.xqj,["bgLightRed","bgLightGreen"])
        var bgColorRight = tools.getColor(pItem.bddqj,cItem.xqj,["bgLightRed","bgLightGreen"])
        // 涨跌幅颜色
        var colorLeft  = tools.getColor(cItem.zde);
        var colorRight  = tools.getColor(pItem.zde);


        html += '<tr>'+

                    '<td class="'+bgColorLeft+'"><a href="'+tools.quoteLink(obj.gouMarket,obj.gouCode)+'" target="_blank">'+obj.gouName+'</a></td>'+
                    '<td class="'+bgColorLeft+'"><span class="'+colorLeft+'">'+obj.gouZxj+'</span></td>'+
                    '<td class="'+bgColorLeft+'"><span class="'+colorLeft+'">'+obj.gouZdf+'</span></td>'+
                    '<td class="'+bgColorLeft+'"><span class="'+colorLeft+'">'+obj.gouZde+'</span></td>'+
                    '<td class="'+bgColorLeft+'"><span >'+obj.gouCcl+'</span></td>'+
                    '<td class="'+bgColorLeft+'"><span >'+obj.gouCjl+'</span></td>'+
                    '<td class="'+bgColorLeft+'"><span >'+obj.gouYxbd+'</span></td>'+
                    '<td class="'+bgColorLeft+'"><span >'+obj.gouZYjl+'</span></td>'+
                    
                    '<td class="xq_orange"><span >'+obj.Xqj+'</span></td>'+

                    '<td class="'+bgColorRight+'"><a href="'+tools.quoteLink(obj.guMarket,obj.guCode)+'" target="_blank">'+obj.guName+'</a></td>'+
                    '<td class="'+bgColorRight+'"><span class="'+colorRight+'">'+obj.guZxj+'</span></td>'+
                    '<td class="'+bgColorRight+'"><span class="'+colorRight+'">'+obj.guZdf+'</span></td>'+
                    '<td class="'+bgColorRight+'"><span class="'+colorRight+'">'+obj.guZde+'</span></td>'+
                    '<td class="'+bgColorRight+'"><span >'+obj.guCcl+'</span></td>'+
                    '<td class="'+bgColorRight+'"><span >'+obj.guCjl+'</span></td>'+
                    '<td class="'+bgColorRight+'"><span >'+obj.guYxbd+'</span></td>'+
                    '<td class="'+bgColorRight+'"><span >'+obj.guZYjl+'</span></td>'+

                '</tr>'

    }
    this.$table.find("tbody").html(html)
    localStorage.setItem(this.cacheName,this.options.time);
    // return html
}

TXingBaoJia.prototype.event = function(){
    var that = this;
    $("#tx_dete").change(function(){
        that.options.time = $(this).val();
        that.update();
    })
    that.$table.find("thead").off();
    that.$table.find("thead").on("click","th.sorting",function(e){
        e.stopPropagation();
        e.preventDefault();
        var sortVal = $(this).data("key");
        if(sortVal){
            
            var preSortVal = that.options.orderBy + "|" + that.options.cp;
            if( preSortVal === sortVal){
                that.options.sort = that.options.sort === "asc" ? "desc" : "asc";
            }else{
                sortVal = sortVal.split('|');
                that.options.orderBy = sortVal[0];
                that.options.cp = sortVal[1];
            }
            that.update();
        }

    })

    $(window).hashchange(function (e) {

        if(location.hash.indexOf("_txbj") === -1){
            $("#table_wrapper-table").removeClass("tx_table");
            $('.tx_header').hide();
        }

    });
}


module.exports = TXingBaoJia;

/***/ }),

/***/ "./ClientApp/qihuo/urlConfig.js":
/*!**************************************!*\
  !*** ./ClientApp/qihuo/urlConfig.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function getQueryString(variable) {
    try {
        var query = window.location.search.substring(1);
        // var query = window.location.url
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return false;
    } catch (error) {
        return false;
    }
}


var qihuourl,qihuo_static_url;
if(getQueryString("hq-env")) {
    // console.log(getQueryString("hq-env"));
    qihuourl = 'http://futssetest.eastmoney.com',
    qihuo_static_url = 'http://static.futssetest.eastmoney.com'
    
}else {
     qihuourl = 'http://futsse.eastmoney.com',
     qihuo_static_url =  'http://futsse-static.eastmoney.com'
}


module.exports =  {
    qihuourl: qihuourl,
    qihuo_static_url: qihuo_static_url

}

/***/ }),

/***/ "./ClientApp/readomNum/index.js":
/*!**************************************!*\
  !*** ./ClientApp/readomNum/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {


//生成1-99的随机数
module.exports = function () {
    return Math.floor(Math.random()*100+1)
}

/***/ }),

/***/ "./ClientApp/user/index.js":
/*!*********************************!*\
  !*** ./ClientApp/user/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 用户信息
 */

var cookie = __webpack_require__(/*! ../cookie/ */ "./ClientApp/cookie/index.js");

/**
 * 用户
 */
var user = {
    /**
     * 获取用户信息
     */
    get: function(){
        if (cookie.get('ut') && cookie.get('ct') && cookie.get('uidal')) {
            
            //获取加v信息
            var jiav = {vtype:null, state: null, name: ''};
            if (cookie.get('vtpst') && cookie.get('vtpst') != '|') {
                var jiavarr = cookie.get('vtpst').split('|');
                if( jiavarr.length > 1 ){
                    //console.info(typeof jiavarr[0]);
                    if (jiavarr[1] == "0" || jiavarr[1] == "3") {
                        switch (jiavarr[0]) {
                            case "301":
                                jiav.vtype = 1;
                                jiav.name = '理财师';
                                break;
                            case "302":
                                jiav.vtype = 2;
                                jiav.name = '非理财师';
                                break;
                            case "303":
                                jiav.vtype = 3;
                                jiav.name = '企业';
                                break;
                            default:
                                break;
                        }
                    }

                    switch (jiavarr[1]) {
                        case "0":
                            jiav.state = 0; //审核通过
                            break;                        
                        case "1":
                            jiav.state = 11; //审核未通过
                            break;
                        case "2":
                            jiav.state = 12; //审核中
                            break;
                        case "3":
                            jiav.state = 13; //加v用户修改审核
                            break;
                        case "8":
                            jiav.state = 18; //加v用户修改审核
                            break;
                        case "9":
                            jiav.state = 19; //加v用户修改审核
                            break;
                        default:
                            break;
                    }
                    
                    //console.info(jiav);

                }
            }
            
            return {
              id: cookie.get('uidal').substring(0,16),
              nick: cookie.get('uidal').substring(16),
              jiav: jiav
            };
        }
        return null; 
    },
    /**
     * 退出登录
     * @param  {function} 退出之后回调
     */
    logOut: function (callback) {
        var date = new Date();
        document.cookie = "pi=;path=/;domain=eastmoney.com;expires=" + date.toGMTString();
        document.cookie = "ct=;path=/;domain=eastmoney.com;expires=" + date.toGMTString();
        document.cookie = "ut=;path=/;domain=eastmoney.com;expires=" + date.toGMTString();
        document.cookie = "uidal=;path=/;domain=eastmoney.com;expires=" + date.toGMTString();
        if (callback) {
            callback();
        }
    },
    isLogin: function (){
        if( this.get() ){
            return true;
        }
        else{
            return false;
        }
    }
};

module.exports = user;





/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=gridlist3.js.map