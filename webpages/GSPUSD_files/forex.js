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
/******/ 	return __webpack_require__(__webpack_require__.s = "./jssrc/forex.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./jssrc/forex.ts":
/*!************************!*\
  !*** ./jssrc/forex.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * 外汇主JS
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var gotowap_1 = __importDefault(__webpack_require__(/*! ../src/modules/gotowap */ "./src/modules/gotowap/index.ts"));
var addzx_1 = __importDefault(__webpack_require__(/*! ../src/modules/addzx */ "./src/modules/addzx/index.ts")); //加自选模块引入
addzx_1["default"].init();
gotowap_1["default"](kLine.stockCode, newmarket);
__webpack_require__(/*! ../src/modules/old_forex/main */ "./src/modules/old_forex/main.js");


/***/ }),

/***/ "./src/modules/addzx/addstyle.ts":
/*!***************************************!*\
  !*** ./src/modules/addzx/addstyle.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 *
 *@Title: js
 *@params1: css
 *@description: 动态注入css
 *@return:
 *@author: qiuhongyang
 *@date: 2020-03-24 16:25:53
 *
*/
exports.__esModule = true;
function default_1(css) {
    var head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    }
    else {
        style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
}
exports["default"] = default_1;


/***/ }),

/***/ "./src/modules/addzx/addzixuan.css":
/*!*****************************************!*\
  !*** ./src/modules/addzx/addzixuan.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#addMyStock{\r\n    display:inline-block;\r\n    margin-left:5px;\r\n    border-radius:12px;\r\n    overflow: hidden;\r\n    vertical-align:middle;\r\n    height:24px;\r\n    line-height:24px;\r\n    margin: 0;\r\n}\r\n\r\n#addMyStock .linktab{\r\n    float: none !important;\r\n    padding:0 10px;\r\n    margin: 0;\r\n    width:70px;\r\n    height:24px;\r\n    line-height: 24px;\r\n    background-color:#ff4a03;\r\n    color:#fff;\r\n    text-align:center;\r\n    text-decoration:none;\r\n    font-weight:700;\r\n    font-size:15px;\r\n    display: block;\r\n    cursor:pointer;\r\n    font-family: \"宋体\";\r\n}\r\n"

/***/ }),

/***/ "./src/modules/addzx/index.ts":
/*!************************************!*\
  !*** ./src/modules/addzx/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var stylestr = __webpack_require__(/*! ./addzixuan.css */ "./src/modules/addzx/addzixuan.css");
var addstyle_1 = __importDefault(__webpack_require__(/*! ./addstyle */ "./src/modules/addzx/addstyle.ts"));
addstyle_1["default"](stylestr);
/*
 *
 *@Title: js
 *@params1: 参数1
 *@description:加自选模块,注意区分登陆未登陆状态
 *@return:
 *@author: qiuhongyang
 *@date: 2020-03-24 16:24:42
 *
*/
var addFunObj = {
    //Cookie Common Class
    getCookie: function (key) {
        var result = document.cookie.match(new RegExp("(^| )" + key + "=([^;]*)"));
        return result != null ? unescape(decodeURI(result[2])) : null;
    },
    //判断是否登陆
    getLoginStatus: function () {
        var _this = this;
        if (_this.getCookie('ut') && _this.getCookie('ct') && _this.getCookie('uidal')) {
            return true;
        }
        return false;
    },
    //初始化判断状态
    getstatus: function (code, market) {
        var _this = this;
        var quotecode = market + "." + code;
        var islogin = _this.getLoginStatus();
        var zxgurl = '//myfavor1.eastmoney.com/'; //f=gsaandcheck
        var addzx = function (zxgparams) {
            var apistr = 'mystock_web';
            if (!islogin) {
                apistr = 'mystock_webanonym';
            }
            return $.ajax({
                type: "GET",
                url: zxgurl + '' + apistr,
                data: zxgparams,
                dataType: "jsonp",
                jsonp: 'cb'
            });
        };
        addzx({ f: 'gsaandcheck', sc: quotecode }).then(function (res) {
            if (res.result == "1") {
                var checkstatus = res.data.check;
                _this.changeStatus(checkstatus);
            }
        });
    },
    addFavorEvent: function (code, market) {
        var _this = this;
        var islogin = _this.getLoginStatus();
        var url_status = 'mystock_web';
        if (!islogin) {
            url_status = 'mystock_webanonym';
        }
        var _html = $("#addZXTag").html();
        if (_html == "+加自选") {
            var f = "asz";
            var check = "True";
            var win = window.open(); //解决ajax在ie下的异步问题
        }
        else {
            var f = "dsz";
            var check = "False";
        }
        var _url = "//myfavor1.eastmoney.com/" + url_status + "?f=" + f + "&sc=" + market + "." + code;
        $.ajax({
            async: false,
            url: _url,
            dataType: "jsonp",
            jsonp: "cb",
            success: function (json) {
                if (json.result == "1") {
                    if (check == 'False') {
                        $("#addZXTag").html("+加自选");
                        $("#addZXTag").css("background", "#ff4a03");
                        window.location.reload();
                    }
                    if (check == "True") {
                        $("#addZXTag").html("-删自选");
                        $("#addZXTag").css("background", "#999");
                        win.location = "//quote.eastmoney.com/zixuan/?from=add";
                    }
                }
                else {
                    if (check == "True") {
                        // win.close();
                        win.location = "//quote.eastmoney.com/zixuan/?from=add";
                    }
                }
            }
        });
    },
    changeStatus: function (checkstatus) {
        if (checkstatus == "True") { //加自选
            $("#addZXTag").html("-删自选");
            $("#addZXTag").css("background", "#999");
        }
        else {
            $("#addZXTag").html("+加自选");
            $("#addZXTag").css("background", "#ff4a03");
        }
    },
    init: function () {
        var _this = this;
        var code = $("#addZXTag").attr("data-code");
        var market = $("#addZXTag").attr("data-market");
        if (!code)
            return;
        if (market == undefined)
            return;
        $("#addZXTag").on('click', function () {
            _this.addFavorEvent(code, market);
        });
        _this.getstatus(code, market);
    }
};
exports["default"] = addFunObj;


/***/ }),

/***/ "./src/modules/cookie/index.ts":
/*!*************************************!*\
  !*** ./src/modules/cookie/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * 浏览器操作cookie
 */
exports.__esModule = true;
exports["default"] = {
    /**
     * 获取cookie
     * @param name cookie名称
     */
    get: function (name) {
        var xarr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
        if (xarr != null)
            return decodeURIComponent(xarr[2]);
        return null;
    },
    /**
     * 设置cookie
     * @param key cookie名称
     * @param value cookie的值
     * @param expiredays 过期时间（天）
     * @param domain cookie的domain
     */
    set: function (key, value, expiredays, domain) {
        var cookiestr = key + "=" + escape(value);
        if (expiredays != undefined) {
            var exdate = new Date();
            exdate.setDate(exdate.getDate() + expiredays);
            cookiestr += ";expires=" + exdate.toUTCString();
        }
        if (domain != undefined) {
            cookiestr += ";domain=" + domain;
        }
        cookiestr += ';path=/';
        document.cookie = cookiestr;
    },
    /**
     * 删除cookie
     * @param key cookie名称
     * @param domain cookie的domain
     */
    del: function (key, domain) {
        var exdate = new Date((new Date).getTime() - 1);
        if (domain) {
            document.cookie = key + '=;path=/;expires=' + exdate.toUTCString() + ';domain=' + domain;
        }
        else {
            document.cookie = key + '=;path=/;expires=' + exdate.toUTCString();
        }
    }
};


/***/ }),

/***/ "./src/modules/gotowap/index.ts":
/*!**************************************!*\
  !*** ./src/modules/gotowap/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * 跳转wap网站
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var cookie_1 = __importDefault(__webpack_require__(/*! ../cookie */ "./src/modules/cookie/index.ts"));
function isMobile() {
    var ua = navigator.userAgent;
    var res = false;
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/), isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/), isAndroid = ua.match(/(Android)\s+([\d.]+)/) && ua.match(/(Mobile)\s+/), isMobile = isIphone || isAndroid;
    if (isMobile) {
        res = true;
    }
    else {
        res = false;
    }
    return res;
}
/**
 * 跳转wap
 * @param code 代码
 * @param market 市场
 */
function gotowap(code, market) {
    var isJump = cookie_1["default"].get("has_jump_to_web");
    // console.info(isJump)
    if (isJump && isJump == "1") {
        return false;
    }
    if (isMobile()) {
        self.location.href = "https://wap.eastmoney.com/quota/hq/stock?id=" + code + "&mk=" + market;
    }
}
exports["default"] = gotowap;


/***/ }),

/***/ "./src/modules/old_forex/agiotage.js":
/*!*******************************************!*\
  !*** ./src/modules/old_forex/agiotage.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// define(['IOScript', 'agiotage_temp'], function(IO, temp){

    var IO = __webpack_require__(/*! ./ioscript */ "./src/modules/old_forex/ioscript.js")
    var temp = __webpack_require__(/*! ./agiotage_temp */ "./src/modules/old_forex/agiotage_temp.js")

    Function.prototype.Bind = function() { 
        var __m = this, object = arguments[0], args = new Array(); 
        for(var i = 1; i < arguments.length; i++){
            args.push(arguments[i]);
        }
        
        return function() {
            return __m.apply(object, args);
        }
    };

    var forex = {
        computeF: function () {
            var bsv = $("#bs").val();
            if (isNaN(bsv)) {
                alert("金额必须为数字.");
                return false;
            }
            $("#res").value = "正在计算..";
            var x = $("#c1")[0][$("#c1")[0].selectedIndex].value;
            var y = $("#c2")[0][$("#c2")[0].selectedIndex].value;
            var url = "http://hq.sinajs.cn/list=" + x + "," + y;
            var scriptLoader = new IO.Script();
            scriptLoader.load(url, forex.deal.Bind(forex, x, y, bsv));

        },
        deal: function (x, y, bsv) {
            var forex1 = forex.dealSpe(x, eval("hq_str_" + x).split(",")[8]);
            var forex2 = forex.dealSpe(y, eval("hq_str_" + y).split(",")[8]);
            var result = (forex2 / forex1) * bsv;
            result = result.toFixed(4);
            $("#res").val(result);
        },

        dealSpe: function (type, val) {
            switch (type) {
                case 'US':
                    return 1;
                    break;
                case 'GBP':
                case 'EUR':
                case 'AUD':
                    return (1 / val).toFixed(4);
                    break;
                default:
                    return val;
                    break;
            }
        },

        addListener: function(){
            var computeF = this.computeF;
            $('#agiotage_btn').on('click',function(){
                computeF();
            })
        },

        temp: function(){
            $('#agiotage').html(temp);
        },

        init: function(){
            this.temp();
            this.addListener();
        }

    }

    module.exports = forex;
// })

/***/ }),

/***/ "./src/modules/old_forex/agiotage_tasks.js":
/*!*************************************************!*\
  !*** ./src/modules/old_forex/agiotage_tasks.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// define(function () {
    var $l = $("#tab_wyzgzgp li");
    $l.on("click", function () {
        var $t = $(this);
        var ind = $t.prevAll("li").length;
        $l.removeClass("cur");
        $t.addClass("cur");

        var $tb = $t.parents(".wyzgzgp").next().find("tbody");
        $tb.hide().eq(ind).show();
    });
    $("#select3").hover(function (e) {
        $(this).children("dl").css("display", "block");
    }, function (e) {
        $(this).children("dl").css("display", "none");
    });
    $("#RefPR").on("click", function () {
        window.location.reload();
    });

    /**
    * @description get cookie with param(cookie.name)
    * @param {string} name
    * @return {string|null} .val
    */
    function getCookie(t) {
        var i = document.cookie;
        t += "=";
        for (var e = 0; e < i.length;) {
            var s = e + t.length;
            if (i.substring(e, s) == t) {
                var n = i.indexOf(";", s);
                return -1 == n && (n = i.length),
                    unescape(i.substring(s, n))
            }
            if (e = i.indexOf(" ", e) + 1, 0 === e) {
                break;
            }

        }
        return null
    }

    //@description  refresh 
    function GetRandomNum(e, t) {
        var s = t - e;
        var a = Math.random();
        return e + Math.round(a * s);
    }
    $("#refgbauls").on("click", function () { for (var e = $("#gbauls")[0].getElementsByTagName("dl"), t = GetRandomNum(0, e.length - 1), s = 0; s < e.length; s++)if (s == t) { if (e[s].hasChildNodes()) for (var a = e[s].childNodes, i = 0; i < a.length; i++)if (a[i].hasChildNodes()) { var n = a[i].childNodes[0].getElementsByTagName("img")[0]; n && !n.getAttribute("src") && n.setAttribute("src", n.getAttribute("data-value")) } e[s].style.display = "" } else e[s].style.display = "none" });

    window.hotpersonafp = function hotpersonafp(e, t, s) {
        var a = !1;
        if (getCookie("pi")) {
            var i = getCookie("pi");
            if (i.split(";").length >= 3) {

                var n = i.split(";")[2];

                if (/^[\u4E00-\u9FA5][0-9a-zA-Z]{6}$/g.test(n))
                    a = !0;
                else {
                    var r = "http://iguba.eastmoney.com/action.aspx?callback=&action=oaddfollowperson&uid2=" + e;
                    var now = new Date();

                    var script = document.createElement('script');
                    script.src = r + "&v=" + now.getDate() + "" + now.getHours() + "" + now.getMinutes() + "";
                    script.id = 'hotpersonafp';
                    document.getElementsByTagName('head')[0].appendChild(script);

                    function action(t) {
                        t.className = "allow",
                            t.innerHTML = "",
                            t.onclick = null;
                        document.getElementsByTagName('head')[0].removeChild(script || document.getElementById('rmb_script'));
                    }

                    if (!!window.ActiveXObject || "ActiveXObject" in window) {
                        script.onreadystatechange = function () {

                            if (script.readyState === 'complete' || script.readyState === 'loaded') {
                                action(t)
                            }
                        }
                    } else {
                        $(script).on('load', function () {
                            action(t)
                        })
                    }
                }
            } else {

                a = !0;
            }

        } else {

            a = !0;
        }
        // TODO
        t.className = "allow",
            t.innerHTML = "",
            t.onclick = null;
        // a && (location.href = "http://guba.eastmoney.com/login.aspx?url=http://quote.eastmoney.com/" + s + ".html");
    }

    //@description  vote
    // var date = new Date();
    // var _date = date.getUTCFullYear() +''+ (date.getUTCMonth() < 9 ? ( 0 + ''+ (date.getUTCMonth() + 1)) : date.getUTCMonth() + 1) + date.getUTCDate();

    // var url_vote = 'http://iguba.eastmoney.com/gubaapi/v3/read/Guba/GubaInfo.aspx?code='+ window.stockcode +'&pi=&deviceid=21163A425F7727789381D8356B6068E2&version=180&product=Eastmoney&plat=web&rt=' + _date;
    // $.ajax({type: "get", dataType: "jsonp", jsonpCallback: "callback", url: url_vote}).done(function (data){
    //     var countAgree,countOppose;

    //     var sum = parseInt(data.stockbar_look_high_count + data.stockbar_look_low_count, 10);
    //     countAgree = 100 * data.stockbar_look_high_count/sum;
    //     countOppose = 100 - countAgree;

    //     $("#ivap").text(countAgree + '%');
    //     $("#ivbp").text(countOppose + '%');
    //     $("#ivra").css("width", countAgree);
    //     $("#ivrb").css("width", countOppose);

    // });
    // window.smivckNew = function smivckNew(e, t, s) {
    //     var a = "";
    //     var i = $('input:radio[name="hqvote"]:checked').val();
    //     if (!i)
    //         return alert("请先选择投票方向！");
    //     getCookie("pi") && (a = getCookie("pi"));
    //     var n = "http://hqstat.eastmoney.com/vote/QuoteGuBaLookUpOrDown.aspx?code=" + e + "&islow=" + i + "&pi=" + a + "&cb=var%20res=[{0}]&&num=1&rt=" + formatm();

    //     //

    // }

    /**
    * @description  logout
    */
    window.dcookies = function dcookies(sName) {
        var date = new Date();
        document.cookie = "dcusername=;path=/;domain=eastmoney.com;expires=" + date.toGMTString();
        document.cookie = "dcuserinfo=;path=/;domain=eastmoney.com;expires=" + date.toGMTString();
        document.cookie = "dcusermingchen=;path=/;domain=eastmoney.com;expires=" + date.toGMTString();
        document.cookie = "dcuserpass=;path=/;domain=eastmoney.com;expires=" + date.toGMTString();
        document.cookie = "dcuserpubinfo=;path=/;domain=eastmoney.com;expires=" + date.toGMTString();
        document.cookie = "dcuserpubs=;path=/;domain=eastmoney.com;expires=" + date.toGMTString();
        document.cookie = "dcuserkeys=;path=/;domain=eastmoney.com;expires=" + date.toGMTString();
        document.cookie = "dcuser_name=;path=/;domain=eastmoney.com;expires=" + date.toGMTString();
        document.cookie = "dcuser_info=;path=/;domain=eastmoney.com;expires=" + date.toGMTString();
        document.cookie = "dcuser_mingchen=;path=/;domain=eastmoney.com;expires=" + date.toGMTString();
        document.cookie = "dcuser_pass=;path=/;domain=eastmoney.com;expires=" + date.toGMTString();
        document.cookie = "dcuser_pubinfo=;path=/;domain=eastmoney.com;expires=" + date.toGMTString();
        document.cookie = "dcuser_pubs=;path=/;domain=eastmoney.com;expires=" + date.toGMTString();
        document.cookie = "dcuser_keys=;path=/;domain=eastmoney.com;expires=" + date.toGMTString();
        document.cookie = "puser_pname=;path=/;domain=eastmoney.com;expires=" + date.toGMTString();
        document.cookie = "puser_pinfo=;path=/;domain=eastmoney.com;expires=" + date.toGMTString();
        document.cookie = "pi=;path=/;domain=eastmoney.com;expires=" + date.toGMTString();
        window.location.reload();
    }
// });

/***/ }),

/***/ "./src/modules/old_forex/agiotage_temp.js":
/*!************************************************!*\
  !*** ./src/modules/old_forex/agiotage_temp.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// define(function(){
	module.exports =  '<div class="exchange clear">' +
            '     <label>所持有货币：</label><p>' +
            '         <select id="c1" name="c1">' +
            '             <option value="US">美元</option>' +
            '             <option value="EUR">欧元</option>' +
            '             <option value="GBP">英镑</option>' +
            '             <option value="AUD">澳元</option>' +
            '             <option value="JPY">日元</option>' +
            '             <option value="CHF">瑞郎</option>' +
            '             <option value="CAD">加元</option>' +
            '             <option value="HKD">港币</option>' +
            '             <option value="USDCNY">人民币</option>' +
            '         </select>' +
            '     </p>' +
            '     <label>兑换的货币：</label><p>' +
            '         <select id="c2" name="c2">' +
            '             <option value="US">美元</option>' +
            '             <option value="EUR">欧元</option>' +
            '             <option value="GBP">英镑</option>' +
            '             <option value="AUD">澳元</option>' +
            '             <option value="JPY">日元</option>' +
            '             <option value="CHF">瑞郎</option>' +
            '             <option value="CAD">加元</option>' +
            '             <option value="HKD">港币</option>' +
            '             <option value="USDCNY">人民币</option>' +
            '         </select>' +
            '     </p>' +
            '     <label>资金额：</label><p><input name="bs" type="text" id="bs" value="100" size="8"></p>' +
            '     <label>兑换后金额：</label><p><input name="res" type="text" id="res" value="100" size="14" readonly="readonly"></p>' +
            ' </div>' +
            ' <div class="btnCalc" ><b id="agiotage_btn">计 算</b></div>'
    ;
// })

/***/ }),

/***/ "./src/modules/old_forex/brief.js":
/*!****************************************!*\
  !*** ./src/modules/old_forex/brief.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// define(['util'], function (util) {
     var util = __webpack_require__(/*! ./util */ "./src/modules/old_forex/util.js");
	/**
	*@description maybe there had some wrong with cross required
    */
    window.baseUrl = '//push2.eastmoney.com'
    window.ut = 'bd1d9ddb04089700cf9c27f6f7426281'
    var util = util;
    var brief = {
        fillquote: function () {


            $('.brief_left i, .brief_topP i, .brief_info li i').not('.brief_info li i:eq(3)').removeClass('green red black');
            var url = window.baseUrl + '/api/qt/stock/get?secid=' +  (window.itemCode.indexOf("CNY") > -1?121:window.itemCode.indexOf("USDCNH") > -1?133:119)+'.' + window.itemCode + '&ut=' + window.ut + '&fields=f532,f57,f58,f59,f107,f43,f44,f45,f46,f60,f152,f169,f170,f119,f120,f121,f122&invt=2'
            //57证券代码 58证券名称 107市场号 43最新价 44最高价 45最低价 46开盘价
            //60昨收  59小数 152小数 532 1档买卖盘  19买1价 39卖1价
            //119 5日涨跌幅 120	20日涨跌幅 121 60日涨跌幅 122 年初至今涨跌幅
            var param = {
                type: "GET",
                url: url,
                data: null,
                dataType: "jsonp",
                jsonp: 'cb'
            }
            $.ajax(param).done(function (res) {
                var data = res.data
                if(!data) return 
                var nowprice = data.f43 == '-' ? '-' : ((data.f43 / Math.pow(10, data.f59)).toFixed(data.f59))//最新
                var zsvalue = data.f60 == '-' ? '-' : ((data.f60 / Math.pow(10, data.f59)).toFixed(data.f59))//昨收
                var kpj = data.f46 == '-' ? '-' : ((data.f46 / Math.pow(10, data.f59)).toFixed(data.f59)) // 开盘
                var zdf = data.f170 == '-' ? '-' : ((data.f170 / Math.pow(10, data.f152)).toFixed(data.f152)) + '%'  //涨跌幅
                var zde = data.f169 == '-' ? '-' : ((data.f169 / Math.pow(10, data.f59)).toFixed(data.f59))  //涨跌额
                var zg = data.f44 == '-' ? '-' : ((data.f44 / Math.pow(10, data.f59)).toFixed(data.f59)) //最高
                var zd = data.f45 == '-' ? '-' : ((data.f45 / Math.pow(10, data.f59)).toFixed(data.f59)) // 最低
                var buy1 = data.f19 == '-' ? '-' : ((data.f19 / Math.pow(10, data.f59)).toFixed(data.f59))//买一
                var sell1 = data.f39 == '-' ? '-' : ((data.f39 / Math.pow(10, data.f59)).toFixed(data.f59))//卖一

                var zdf5 = data.f119 == '-' ? '-' : ((data.f119 / Math.pow(10, data.f152)).toFixed(data.f152)) + '%' //5日涨跌幅
                var zdf20 = data.f120 == '-' ? '-' : ((data.f120 / Math.pow(10, data.f152)).toFixed(data.f152)) + '%' //20日涨跌幅
                var zdf60 = data.f121 == '-' ? '-' : ((data.f121 / Math.pow(10, data.f152)).toFixed(data.f152)) + '%' //60日涨跌幅
                var zdfhalfyear = data.f122 == '-' ? '-' : ((data.f122 / Math.pow(10, data.f152)).toFixed(data.f152)) + '%' //半年涨跌幅、

                if (data.f58 && data.f58 != "-") {
                    $(".quote_title_0").html(data.f58)
                }

                 //防止默认填充 -
                var state = !!zde.match(/-[0-9]+/);
                if (state) { //负
                    $(".brief_topP em").attr('style', " ");
                    $(".brief_topP em").css('backgroundPosition', "0px -559px");
                    $(".brief_left i").addClass("green");
                } else if (zde == '-') { // 0 
                    $(".brief_topP em").css('background', "url('')");
                    $(".brief_left i").add(".brief_botP i").addClass("black");
                } else { //正
                    $(".brief_topP em").attr('style', " ");
                    $(".brief_topP em").css('backgroundPosition', "0 -536px");
                    $(".brief_left i").addClass("red");
                }

                /**
                 * 头部行情
                 */
                $(".brief_topP i").text(nowprice); //最新价
                $(".brief_botP i").eq(0).text(zdf); //涨跌幅
                $(".brief_botP i").eq(1).text(zde); //涨跌额
                var $i = $(".brief_info li i");
                $i.eq(0).text( kpj ); //今开
                $i.eq(1).addClass("black").text( zsvalue ); //昨收
                $i.eq(2).text( zg ); //最高
                $i.eq(3).text( zd ); //最低
                $i.eq(4).text( zdf );//涨幅
                $i.eq(5).text( zde );//涨跌
                $i.eq(6).text( buy1 );//买入
                $i.eq(7).text( sell1 );//卖出
                if (kpj < zsvalue) {
                    $i.eq(0).addClass('green');
                }
                if (zdf.match(/-[0-9]+/)) {
                    $i.eq(4).addClass('green');
                }
                if (zde.match(/-[0-9]+/)) {
                    $i.eq(5).addClass('green');
                }
                if (buy1< zsvalue) {
                    $i.eq(6).addClass('green');
                }
                if (sell1 < zsvalue) {
                    $i.eq(7).addClass('green');
                }

                /**
                 * 阶段涨跌幅
                 */
                var $j = $("#phase_increases tbody tr td")
                $j.eq(1).text(zdf5).addClass(data.f119>0?'red':data.f119<0?'green':'')
                $j.eq(3).text(zdf20).addClass(data.f120>0?'red':data.f120<0?'green':'')
                $j.eq(5).text(zdf60).addClass(data.f121>0?'red':data.f121<0?'green':'')
                $j.eq(7).text(zdfhalfyear).addClass(data.f122>0?'red':data.f122<0?'green':'')
            })
        },
        fillrelat:function (select,code) {
            var url = ""
            if(code == "CNY" || code == "CNH"){
                url = window.baseUrl + '/api/qt/clist/get?pn=1&pz=7&po=1&fid=f3&fs=m:121+t:1&invt=2'
            }else{
                url = window.baseUrl + '/api/qt/clist/get?pn=1&pz=7&po=1&fid=f3&fs=m:119+c:' + code +'&invt=2'
            }
            var param = {
                type: "GET",
                url: url,
                data: null,
                dataType: "jsonp",
                jsonp: 'cb'
            }
            $.ajax(param).done(function (res) {
                if(! res.data) return 
                var data = res.data.diff
                var htm = "<tr><th>名称</th><th>最新价</th><th>涨跌幅</th></tr>"
                for(var i in data){
                    var color = data[i].f3 > 0?'red':data[i].f3 < 0?'green': ''
                    htm += '<tr>'
                                + '<td><a target="_blank" title="'+ data[i].f14+'" href="http://quote.eastmoney.com/forex/'+ data[i].f12+'.html">'+(data[i].f14.length > 8? (data[i].f14.slice(0,8) + '...'):data[i].f14)+'</a></td>'
                                +'<td class="'+color+'">'+ (data[i].f2=='-'?'-':(data[i].f2/10000).toFixed(4))+'</td>'
                                +'<td class="'+color+'">'+ (data[i].f3=='-'?'-':((data[i].f3/100).toFixed(2)) + "%") +'</td>'
                            +'</tr>'
                }
                $(select).html(htm)
            })
        },
        baseForexQuote:function (select) {
            var url = window.baseUrl + '/api/qt/clist/get?pn=1&pz=5&po=1&np=1&ut='+ window.ut +'&fltt=2&invt=2&fid=f3&fs=b:MK0300&fields=f1,f2,f3,f12,f13,f14,f152'
            var param = {
                type: "GET",
                url: url,
                data: null,
                dataType: "jsonp",
                jsonp: 'cb'
            }
            $.ajax(param).done(function (res) {
                if(! res.data) return 
                var data = res.data.diff
                var htm = "<tr><th>名称</th><th>最新价</th><th>涨跌幅</th></tr>"
                for(var i = 0; i < data.length; i++){
                    var color = data[i].f3 > 0?'red':data[i].f3 < 0?'green': ''
                    htm += '<tr>'
                                + '<td><a target="_blank" title="'+ data[i].f14  +'" href="http://quote.eastmoney.com/forex/'+ data[i].f12+'.html">'+data[i].f14+'</a></td>'
                                +'<td class="'+color+'">'+ (data[i].f2=='-'?'-':(data[i].f2).toFixed(4))+'</td>'
                                +'<td class="'+color+'">'+ (data[i].f3=='-'?'-':((data[i].f3).toFixed(2)) + "%") +'</td>'
                            +'</tr>'
                }
                $(select).html(htm)
            })
        },
        crossForexQuote:function (select) {
            var url = window.baseUrl + '/api/qt/clist/get?pn=1&pz=5&po=1&np=1&ut='+ window.ut +'&fltt=2&invt=2&fid=f3&fs=b:MK0301&fields=f1,f2,f3,f12,f13,f14,f152'
            var param = {
                type: "GET",
                url: url,
                data: null,
                dataType: "jsonp",
                jsonp: 'cb'
            }
            $.ajax(param).done(function (res) {
                if(! res.data) return 
                var data = res.data.diff
                var htm = "<tr><th>名称</th><th>最新价</th><th>涨跌幅</th></tr>"
                for(var i = 0; i < data.length; i++){
                    var color = data[i].f3 > 0?'red':data[i].f3 < 0?'green': ''
                    htm += '<tr>'
                                + '<td><a target="_blank" title="'+ data[i].f14  +'" href="http://quote.eastmoney.com/forex/'+ data[i].f12+'.html">'+data[i].f14+'</a></td>'
                                +'<td class="'+color+'">'+ (data[i].f2=='-'?'-':(data[i].f2).toFixed(4))+'</td>'
                                +'<td class="'+color+'">'+ (data[i].f3=='-'?'-':((data[i].f3).toFixed(2)) + "%") +'</td>'
                            +'</tr>'
                }
                $(select).html(htm)
            })
        },
        metalrateQuote:function (select) {
            var url = window.baseUrl + '/api/qt/clist/get?pn=1&pz=7&po=1&np=1&ut='+ window.ut +'&fltt=2&invt=2&fid=f3&fs=m:102,m:103,m:108,m:109,m:111,m:112&fields=f1,f2,f3,f12,f13,f14,f152'
            var param = {
                type: "GET",
                url: url,
                data: null,
                dataType: "jsonp",
                jsonp: 'cb'
            }
            $.ajax(param).done(function (res) {
                var data = res.data.diff
                var htm = "<tr><th>名称</th><th>最新价</th><th>涨跌幅</th></tr>"
                for(var i = 0; i < data.length; i++){
                    var color = data[i].f3 > 0?'red':data[i].f3 < 0?'green': ''
                    htm += '<tr>'
                                + '<td><a target="_blank" title="'+ data[i].f14  +'" href="http://quote.eastmoney.com/globalfuture/'+ data[i].f12+'.html">'+data[i].f14+'</a></td>'
                                +'<td class="'+color+'">'+ (data[i].f2=='-'?'-':(data[i].f2).toFixed(data[i].f1))+'</td>'
                                +'<td class="'+color+'">'+ (data[i].f3=='-'?'-':((data[i].f3).toFixed(data[i].f152)) + "%") +'</td>'
                            +'</tr>'
                }
                $(select).html(htm)
            })
        },
        zjjRMB:function (select) {
            var url =  window.baseUrl +  '/api/qt/ulist.np/get?secids=120.AUDCNYC,120.NZDCNYC,120.CADCNYC,120.GBPCNYC,120.SGDCNYC,120.JPYCNYC,120.EURCNYC,120.HKDCNYC&ut=' + window.ut + '&fid=f3&fields=f1,f2,f3,f4,f12,f13,f14,f152'
            var param = {
                type: "GET",
                url: url,
                data: null,
                dataType: "jsonp",
                jsonp: 'cb'
            }
            $.ajax(param).done(function (res) {
                if(! res.data) return 
                var data = res.data.diff
                var htm = "<tr><th>币种</th><th>中间价</th><th>涨跌(bp)</th></tr>"
                for(var i = 0; i < data.length; i++){
                    var color = data[i].f3 > 0?'red':data[i].f3 < 0?'green': ''
                    htm += '<tr>'
                                + '<td>'+data[i].f14.replace("中间价","").replace("人民币","/人民币")+'</td>'
                                +'<td class="'+color+'">'+ (data[i].f2=='-'?'-':(data[i].f2/10000).toFixed(data[i].f1))+'</td>'
                                +'<td class="'+color+'">'+ (data[i].f4=='-'?'-':(data[i].f4)) +'</td>'
                            +'</tr>'
                }
                $(select).html(htm)
            })

        },
        init: function () {
            this.fillquote()//基本行情

            this.fillrelat("#forex0container tbody",forexCode[0])  //相关汇率
            this.fillrelat("#forex1container tbody",forexCode[1])  //相关汇率
            // if((forexCode[0] == 'GBP' && forexCode[1]=='USD') || (forexCode[0] == 'USD' && forexCode[1]=='CNH')){
            //     this.fillrelat("#forex0container tbody",forexCode[1])  //相关汇率
            //     this.fillrelat("#forex1container tbody",forexCode[0])  //相关汇率
            // }else{
            //     this.fillrelat("#forex0container tbody",forexCode[0])  //相关汇率
            //     this.fillrelat("#forex1container tbody",forexCode[1])  //相关汇率
            // }
            this.baseForexQuote("#base_rate tbody") // 基本汇率行情
            this.crossForexQuote("#cross_rate tbody") // 交叉汇率行情
            this.metalrateQuote("#metal_rate tbody") // 国际期货行情
            this.zjjRMB("#zhongjianjia tbody") // 国际期货行情
        }
    }

    module.exports = brief;
// });

/***/ }),

/***/ "./src/modules/old_forex/chart.js":
/*!****************************************!*\
  !*** ./src/modules/old_forex/chart.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// define(['util'], function (util){
    var util = __webpack_require__(/*! ./util */ "./src/modules/old_forex/util.js");
    /**
    * @description  指标配置
    */
    var pic_url = "//webquotepic.eastmoney.com/GetPic.aspx?id="; //+ imageOpition.ID+ "&imageType=KXL&token=44c9d251add88e27b65ed86506f6e5da&rt=" + formatm();
    var allUri = {
        imageURL:"//webquoteklinepic.eastmoney.com/GetPic.aspx?ImageType=KXL&"
    };
    var imageOpition = {
        ID:kLine.stockCode + kLine.stockMarket,
        // EF:"", 
        Formula:"RSI",
        unitwidth:-6,
        // FA:"",
        // BA:"", 
        type:"D",
        token: "44c9d251add88e27b65ed86506f6e5da"
    }; 

    if( itemCode.match(/USDCNH/i) ){
        imageOpition.ID = 'USDCNH_FOS';
    }
    $("#zkeyb,#zkeyc").children("li").on("click", function(e){
        var $t = $(this);
        var ind = $t.prevAll("li").length;

        // if($t.parent("ul").attr("id") !== "zkeya"){ 
            $("#zkeyb li").removeClass("at").eq(ind).addClass("at");
            $("#zkeyc li").removeClass("at").eq(ind).addClass("at");
        // }else{
            // $("#zkeya li").removeClass("at").eq(ind).addClass("at");
        // }
        
        //param
        // var ef;
        // $.each($("#zkeya li"), function (i, v, a){
        //     $(v).hasClass("at") ? (ef = $(v)[0].getAttribute("value")) : 0;
        // });

        var formula;
        $.each($("#zkeyb li"), function (i, v, a){
            $(v).hasClass("at") ? (formula = $(v)[0].getAttribute("value")) : 0;
        });

        // imageOpition.EF = ef;
        imageOpition.Formula = formula;

        $("#pick").attr("src",allUri.imageURL + $.param(imageOpition));

    });

    /**
    * @description  k线配置 
    */
    $("#pictit span").on("click", function(e){
        var $t = $(this);
        var val = $t[0].getAttribute("value");

        $t.siblings("span").add($t).removeClass("cur");
        $t.addClass("cur");
        imageOpition.type = val;
        $("#pick").attr("src",allUri.imageURL + $.param(imageOpition));
    });

    $("#picklc, #picksd").on("click", function(e){
        var $t = $(this);
        var ind = $t.prevAll("span").length;
        var num = imageOpition.unitwidth;

        ind === 1 ? num++ : num--;
        if(num > -3 || num < -9){
            return;
        }else{
            imageOpition.unitwidth = ~~num;
        }
      
        $("#pick").attr("src",allUri.imageURL + $.param(imageOpition));
    });
 
    //M暂时未用
    // $("#actTab4 span").on("click", function(e){
    //     var $t = $(this);
    //     var ind = $t.prevAll("span").length;

    //     $t.siblings("span").add($t).removeClass("cur");
    //     $t.addClass("cur");

    //     var e = new Date;
    //     var t = e.getDate()+""+e.getHours()+e.getMinutes();
    //     var arr = ["rc", "r", "M1", "M2", "M3", "M4"];

    //     if(ind > 1){
    //         $("#picr").attr("src",'http://pifm.dfcfw.com/EM_Finance2014PictureInterface/Index.aspx?imagetype=t&type=' + arr[ind] + '&id=' + '0000192' + '&token=beb0a0047196124721f56b0f0ff5a27c&rt=' + t);
        
    //     }else{
    //         $("#picr").attr("src",var pic_url + "0000192" + "&imageType=" +arr[ind] + "&token=44c9d251add88e27b65ed86506f6e5da&rt=" + t);
    //     }
        
    // });
    
    module.exports =  {
        init: function (){ 
            var e = new Date;
            $("#picr").attr("src",pic_url + window.stockcode + "&imageType=" +'RF' + "&token=44c9d251add88e27b65ed86506f6e5da");
            $("#pick").attr("src",allUri.imageURL + $.param(imageOpition));

            $(".to_img0").attr("href",pic_url + window.stockcode + "&imageType=" +'RF' + "&token=44c9d251add88e27b65ed86506f6e5da");
            $(".to_img1").attr("href",allUri.imageURL + $.param(imageOpition));
            setInterval(function (){
                $("#picr").attr("src",pic_url + window.stockcode + "&imageType=" +'RF' + "&token=44c9d251add88e27b65ed86506f6e5da");
                $("#pick").attr("src",allUri.imageURL + $.param(imageOpition));
                $(".to_img0").attr("href",pic_url + window.stockcode + "&imageType=" +'RF' + "&token=44c9d251add88e27b65ed86506f6e5da");
                $(".to_img1").attr("href",allUri.imageURL + $.param(imageOpition));
            }, 10 * 1000);
        }
    }
// })

/***/ }),

/***/ "./src/modules/old_forex/fill.js":
/*!***************************************!*\
  !*** ./src/modules/old_forex/fill.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// define(function (){

	/**
	* @constructor Fill 
	* @description Fill factory
	* @param {Function} temp 模板  
	* @param {Object} config  ajax配置
	* @param {Num} type 0,交叉;1,贵金属;2,人民币
	* @param{Function} callback 回调
	* @return {undefined}   
	*/

	/** 
	*@description  声明模板
	*/   
	var temp;
	var tempPhase;
	var forexUrl = 'http://quote.eastmoney.com/forex/$.html';
	//var metalUrl = [
	//	'http://quote.eastmoney.com/gjqh/OILC.html',
	//	'http://quote.eastmoney.com/gjqh/GLNC.html', 
	//	'http://quote.eastmoney.com/gjqh/LCPS.html',
	//	'http://quote.eastmoney.com/gjqh/RBTC.html',
	//	'http://quote.eastmoney.com/gjqh/CTNZ.html',
	//	'http://quote.eastmoney.com/gjqh/LTNS.html',
	//	'http://quote.eastmoney.com/gjqh/LZNS.html'
	//];

	var tempAD = '<iframe width="200" height="200" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" src="http://same.eastmoney.com/s?z=eastmoney&c=175&op=1" id="ifhqzcad3"></iframe>';

	function Fill (temp, config, type, callback){
		this.ajaxParam = $.extend({
				type : "get",
				contentType: "application/x-www-form-urlencoded;charset=utf-8",
				cache: false
			}, config);
		this.callback = callback;
		this.type = type; 

		this.init = function (isChanged){

			/**
			* @description 当采用人民币老接口时 ajax.fail
			* @example $.ajax(this.ajaxParam).done(temp.bind(this));	//'bind this' will be erroneous in ie6 //shouldnt do this for transmit the param
			*/

			if( type === 4 && itemCode.match(/CNY|CNH/i)){
				var script = document.createElement('script');

				function action(){
					var data = window.fxrc.rank;
					var _html = '';
					var len = $("#forex0container tbody tr").not(":first").length;
					
					_html += '<tr>' + $("#forex0container tbody tr:first").html() + '</tr>';
					for(var i = 0; i < len; i++){
						var _data = data[i].split(',');
						var isUp = !_data[18].match(/-[0-9]+/);
						var isFair = !!_data[18].match(/0.[0]{2,}/);
						var className = (isUp ? isFair ? 'black' : 'red' : 'green');

						_html += '<tr>'
						        +'  <td><a target="_blank" title="' + _data[2] + '" href="' + forexUrl.replace('$', _data[1]) + '">' + _data[2] + '</a></td>'
						        +'  <td class=" ' + className + ' ">' + _data[5] + '</td>'
						        +'  <td class=" ' + className + ' ">' + _data[18] + '</td>'
						        +'</tr>';
					}
					
					$("#forex0container tbody").html(_html);

					callback && callback(this);

					document.getElementsByTagName('head')[0].removeChild(script || document.getElementById('rmb_script'));
				}

				script.src = 'http://hq2gjqh.eastmoney.com/EM_Futures2010NumericApplication/Index.aspx?jsName=fxrc&Type=S&SortType=A&pageSize=20&page=1&style=28RMBRate&_g=' + Math.random(0,1);
				script.id = 'rmb_script';
				document.getElementsByTagName('head')[0].appendChild(script);
				
				if (!!window.ActiveXObject || "ActiveXObject" in window){
					script.onreadystatechange = function(){
						
						if(script.readyState === 'complete' || script.readyState === 'loaded'){
							action();
						}
					}
				}else{
					$(script).on('load', function(){
						action();
					})
				}
				
				return;
			}

			$.ajax(this.ajaxParam).done(temp).fail(function(){
				var $p = $(".toAD");

				if( type === 5 ){
					if(!$p.find('iframe').length && $p.children().length){
						var minus = $p.height() + +$p.css('margin-top').slice(0, -2) - 210;

						$p.html(tempAD).css({'margin-top': minus + 'px', 'margin-bottom': '10px'});
						$p.insertAfter(".quote_calculator");

					}
					
					return ;
				}
			}); 
			callback && callback(this); 
		}
		
		/**
		* @description  因在ajax.done中只能传递句柄，当绑定this时又会导致当前this->xhr失效，所以模板统一在此
		*/
		temp = function (data){ 
		
			var sizzle = ['#base_rate', '#metal_rate', '#forex_rate', '#phase_increases', '#forex0container', '#forex1container', '#cross_rate', '#zhongjianjia'];
			var j = 0; 
			var l = 0;
			var isNull = false;
			
			/**
			* @description  当5中有一个数据少于3时，替换为广告
			*/
			
			if( type === 5 && data.length <= 3 ){

				var $p = $(".toAD");
				
				if(!$p.find('iframe').length){
					var minus = $p.height() + +$p.css('margin-top').slice(0, -2) - 210;
			
					$p.html(tempAD).css({'margin-top': minus + 'px', 'margin-bottom': '10px'});
					$p.insertAfter(".quote_calculator");

				}
				
				return ;
			}

			if( $.isEmptyObject(data) ){
				isNull = true;
				data = ['-,-,-/-,-,-,-,-','-,-,-/-,-,-,-,-','-,-,-/-,-,-,-,-','-,-,-/-,-,-,-,-','-,-,-/-,-,-,-,-','-,-,-/-,-,-,-,-','-,-,-/-,-,-,-,-','-,-,-/-,-,-,-,-'];
			}
			
			if( type === 3 ) 
				var $itemParent = $(sizzle[type] + " tbody tr");
			else
				var $itemParent = $(sizzle[type] + " tbody tr").not(":first")
			
			var len = $itemParent.length;
			// var arrForex = ['Name', 'BuyP', 'SellP', 'TaxP'];
			// if( type === 2 ){
			// 	var _html = '<tr>' + $(sizzle[type] + " tbody tr:first").html() + '</tr>';
			// 	var data = data.data.diff;
			// 	for( var i = 0; i < len; i++ ){
			// 		var index = 0;
			// 		if(!data[0][i]) return;
			// 		_html += '<tr>'
			// 			+ '<td>' + data[0][i][arrForex[index++]] + '</td>'
			// 			+ '<td>' + data[0][i][arrForex[index++]] + '</td>'
			// 			+ '<td>' + data[0][i][arrForex[index++]] + '</td>'
			// 		    + '<td>' + data[0][i][arrForex[index++]] + '</td>'
			// 		    + '</tr>';
			// 	}

			// 	$(sizzle[type] + " tbody").html(_html);

			// 	return ;
			// }
			var arrForexnew = ['f14', 'f31', 'f32'];
			if (type === 2) {
				try {
					var _html = '<tr>' + $(sizzle[type] + " tbody tr:first").html() + '</tr>';
					if (!data || !data.data || data.data.diff.length < 1)return;
					var items = data.data.diff;
					for (var i = 0; i < len; i++) {
						var index = 0;
						if (!items[i]) return;
						_html += '<tr>'
							+ '<td>' + items[i][arrForexnew[index++]] + '</td>'
							+ '<td>' + items[i][arrForexnew[index++]] + '</td>'
							+ '<td>' + items[i][arrForexnew[index++]] + '</td>'
							+ '</tr>';
					}

					$(sizzle[type] + " tbody").html(_html);
				} catch (error) {
					
				}

				return;
			}
			if( type === 7 ){
				var _html = '<tr>' + $(sizzle[type] + " tbody tr:first").html() + '</tr>';

				for(var i = 0; i < len; i++){
					var index = 0;
					var _data = data[i].split(',');
					var name = _data[2];
					_data[2] = _data[2].slice(0, -3).replace(/人民币$/, "/人民币").replace(/^人民币/, "人民币/");

					var isUp = !_data[4].match(/-[0-9]+/);
					var isFair = !!_data[4].match(/^0.[0-9]?0$/) || !!_data[4].match(/^0$/);
					var className = (isUp ? isFair ? 'black' : 'red' : 'green');

					_html += '<tr>'
					    // +'        <td><a target="_blank" title="' + name + '" href="' + forexUrl.replace('$', _data[0].slice(0, -1)) + '">' + _data[2] + '</a></td>'
					    +'        <td >'+ _data[2] +'</td>'
					    +'        <td class="' + className + '">' + _data[3] + '</td>'
					    +'        <td class="' + className + '">' + parseInt(_data[4] * 10000, 10) + '</td>'
					    +'    </tr>';
				}

				$(sizzle[type] + " tbody").html(_html);

				return ;
			}

			$.each($itemParent, function(i, v, a){
				
				if(type === 3){
					try{
						var _data = data[0].split(",")[10].split('|');
					}catch(e){
						return ;
					}

					if(data !== undefined && data.stats !== false && +data[0].split(',')[10].length > 1){
						var $v = $($(v).find("td")[1]);
						var val = _data[l++];
						var isUp = !val.match(/-[0-9]+/);
						var isFair = !!val.match(/0.[0]{2,}/);
						var className = (isUp ? isFair ? 'black' : 'red' : 'green');

						$v.addClass(className).text(val);
					}
 					
				}else{
					var k = 0; 
					var _data = data[j++];

					$.each($(v).find("td"), function(j, v, a){
						if(_data !== undefined && _data.stats !== false){
                            var $v = $(v), items = _data.split(',');

							var val = _data.split(",").slice(2)[k++];
							
							if((type === 0 || type === 4 || type === 5 || type === 6) && j === 0){

								if(isNull){
									$v.text(val);
								}else{
									if(_data.split(',')[0].match('IND')){
										$v.html('<a target="_blank" title="' + val + '" href="' + 'http://forex.eastmoney.com' + '">' + val + '</a>');
										return;
									}

									$v.html('<a target="_blank" title="' + val + '" href="' + forexUrl.replace('$', _data.split(',')[0]) + '">' + val + '</a>');
								}

							}else if(type === 1 && j === 0){

								if(isNull){
									$v.text(val);
								}else{
									
                                    $v.html('<a target="_blank" href="//quote.eastmoney.com/globalfuture/' + items[0] + '.html">' + val + '</a>');
								}
							}else{
								$v.text(val);
							}

							if(j === 2 && val.match(/-[0-9]+/)){
								$v.add($v.prev('td')).addClass('green');
 
							}else if(j === 2){
								$v.add($v.prev('td')).addClass('red')
							}
						}

					});

				}

			});
		} 

	}

	module.exports = {
		Fill: Fill,
		temp : temp
	};

// })

/***/ }),

/***/ "./src/modules/old_forex/ioscript.js":
/*!*******************************************!*\
  !*** ./src/modules/old_forex/ioscript.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// define(function(){
	/**
	 * Bind Method
	 */

	var isIE = false;
	var userAgent = navigator.userAgent.toLowerCase();
	if ((userAgent.indexOf('msie') != -1) && (userAgent.indexOf('opera') == -1)) {
		isIE = true;
	}

	if(typeof IO == 'undefined' )IO = {};
	IO.Script = function(){
		this.Init.apply(this, arguments);
	};

	IO.Script.prototype = {
		_scriptCharset: 'gb2312',
		_oScript: null,
		
		/**
		 * Constructor
		 * 
		 * @param {Object} opts
		 */
		Init : function(opts){
			this._setOptions(opts);
		},
		
		_setOptions: function(opts) {
			if (typeof opts != 'undefined') {
				if (opts['script_charset']) {
					this._scriptCharset = opts['script_charset'];
				}
			}
		},
		
		_clearScriptObj: function() {
			if (this._oScript) {
				try {
					this._oScript.onload = null;
					if (this._oScript.onreadystatechange) {
						this._oScript.onreadystatechange = null;
					}
					
					this._oScript.parentNode.removeChild(this._oScript);
					//this._oScript = null;
				} catch (e) {
					// Do nothing here
				}
			}
		},
		
		_callbackWrapper: function(callback) {
			if (this._oScript.onreadystatechange) {
				if (this._oScript.readyState != 'loaded' && this._oScript.readyState != 'complete') {
					return;
				}
			}
			
			if (typeof callback != 'undefined') {
				callback();
			}
			
			this._clearScriptObj();
		},
		
		load: function(url, callback){
			this._oScript = document.createElement('SCRIPT');
			this._oScript.type = "text/javascript";
			
			if (isIE) {
				this._oScript.onreadystatechange = this._callbackWrapper.Bind(this, callback);
			} else {
				this._oScript.onload = this._callbackWrapper.Bind(this, callback);
			}
			
			this._oScript.charset = this._scriptCharset;
			this._oScript.src = url;
			
			document.body.appendChild(this._oScript);
		}
	} 
	module.exports = IO;
// })

/***/ }),

/***/ "./src/modules/old_forex/main.js":
/*!***************************************!*\
  !*** ./src/modules/old_forex/main.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(/*! ./util */ "./src/modules/old_forex/util.js")
var agiotage = __webpack_require__(/*! ./agiotage */ "./src/modules/old_forex/agiotage.js")
var chart = __webpack_require__(/*! ./chart */ "./src/modules/old_forex/chart.js")
var fill = __webpack_require__(/*! ./fill */ "./src/modules/old_forex/fill.js") 
var brief = __webpack_require__(/*! ./brief */ "./src/modules/old_forex/brief.js")
// var WdatePicker = require('./wdatepicker')
// !(function () {
    try {
        var suggest = new suggest2017({
            inputid: "search_box",
            offset: { left: -91, top: 5 },
            shownewtips: true,
            newtipsoffset: { top: -3, left: 0 }
        });
    } catch (e) {
        console.error(e);
    }
    /**
    * @description util
    */
    // require(['util'], function (util) {
        // var util = util;

        try {
            document.domain = 'eastmoney.com';
            //
            if (window.stockcode.match(/USDCNH/i)) {
                window.stockcode = 'USDCNH_FOS';
            }
        } catch (e) {

        }

        /**
        * @description 旧代码
        */
        // require(['old'], function () { });
        __webpack_require__(/*! ./old */ "./src/modules/old_forex/old.js")

        ///**
        //* @description 股吧列表数据
        //* @param {Object} gubalist 数据列表
        //*/
        //require(['guba_articlelist'], function (gubalist) {
        //    gubalist.init("gubalisttable", 'waihui',{listcount:18,titlecut:42});

        //    /**
        //    * @description 手动更换链接...
        //    */

        //     var $a = $("#link_guba");
        //     $a.text( window.forexName[0] + '吧' );
        //     $a.attr( 'href', 'http://guba.eastmoney.com/list,' + "forex" + window.itemCode.slice(0,3) + '.html' )
        //     $.each($("a[href^='http://guba.eastmoney.com/list,']"), function(i, v){
        //         var $v = $(v);
        //         var href = $v.attr('href').replace(/list\,[a-z0-9]{3,7}\.html/i, 'list,forex' + window.itemCode.slice(0,3) + '.html');
        //         if(href.match(/CNY/i)){
        //             href = 'http://guba.eastmoney.com/list,usdcnyc.html';
        //         }
        //         $v.attr('href', href);
        //     });
        //});

        ///**
        //* @description 股吧发布框
        //* @param {Object} postbox 发布框
        //*/
        //require(['guba_postbox'], function (postbox) {
        //    postbox.init('sendnew', 'waihui' || util.code);   //TODO  目前看这个接口不支持到外汇某币种(后值) 先发到waihui(前值)
        //});

        ///**
        //* @description logout
        //* @param {Object} guba_user 用户
        //*/
        //require(['guba_user'], function (guba_user) {
        //    if (guba_user.get() != null) {
        //        var thisuser = guba_user.get();
        //        $("#loginstate").html("<span class=\"fr f12\">"+ thisuser.nick + "&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"javascript:void(0);\" onclick=\"dcookies()\">退出</a></span>");
        //    }
        //});

        /**
        * @description agiotage
        * @param {Object} agiotage 兑换器构建
        * @param {Object} agiotage_tasks 兑换器重置
        */
        // require(['agiotage', 'agiotage_tasks'], function (agiotage) {
        //     agiotage.init();
        // });

        __webpack_require__(/*! ./agiotage_tasks */ "./src/modules/old_forex/agiotage_tasks.js")
        agiotage.init();

        /**
        * @description chart
        * @param {Object} chart 图标构建
        */
        // require(['chart'], function (chart) {
        //     chart.init();
        // });
        chart.init();

        /**
        * @description Fill
        * @example var urlBase = '//...com'; var configBase = {ajax param}
        */
        // require(['fill'], function (fill) {
            var Fill = fill.Fill;
            var temp = fill.temp;

            //@description 其中这里的callback名称必须不同，否则在jq内部作为同一xhr对象处理

            /**
            * @description 基本汇率
            */
            var urlBase = 'http://nufm.dfcfw.com/EM_Finance2014NumericApplication/JS.aspx?type=CT&cmd=C._FX_USD&sty=E1II&st=(ChangePercent)&sr=-1&p=1&ps=5&cb=callback0&js=&token=049db06d2bc9c947062f56de8b3b5648';
            var configBase = { type: "get", dataType: "jsonp", jsonpCallback: "callback0", url: urlBase };

            /**
            * @description 国际期货
            */

            var urlMetal = 'http://nufm.dfcfw.com/EM_Finance2014NumericApplication/JS.aspx?type=CT&cmd=C._UF&sty=E1II&st=(ChangePercent)&sr=-1&p=1&ps=7&cb=' + 'callback1' + '&js=&token=049db06d2bc9c947062f56de8b3b5648';
            var configMetal = { type: "get", dataType: "jsonp", jsonpCallback: "callback1", url: urlMetal };
            /**
            * @description 外汇牌价
            */

            // var urlForex = '//nuexd.eastmoney.com/EM_UBG_Finance2016TransferExtendInterface/js.ashx?type=ForexPrevailingPrice&cmd=12&js=' + 'callback2' + '&cb=';
            // var configForex = { type: "get", dataType: "jsonp", jsonpCallback: "callback2", url: urlForex };
            /**
            * @description 外汇牌价新接口 --马
            */
            var urlForex = '//push2.eastmoney.com/api/qt/ulist.np/get?ut=bd1d9ddb04089700cf9c27f6f7426281&fltt=2&invt=2&secids=162.BOCUSD,162.BOCEUR,162.BOCGBP,162.BOCJPY,162.BOCHKD,162.BOCRUB,162.BOCKRW,162.BOCCHF,162.BOCNZD,162.BOCSGD,162.BOCCAD&fields=f1,f12,f13,f14,f31,f32&cb=?';
            var configForex = { type: "get", dataType: "jsonp", jsonpCallback: "cb", url: urlForex };

            /**
            * @description 阶段涨幅
            */
            var urlPhase = 'http://nufm.dfcfw.com/EM_Finance2014NumericApplication/JS.aspx?type=CT&cmd=' + window.stockcode + '&sty=FDPSUD&st=z&sr=&p=&ps=&cb=' + 'callback3' + '&js=&token=049db06d2bc9c947062f56de8b3b5648';
            var configPhase = { type: "get", dataType: "jsonp", jsonpCallback: "callback3", url: urlPhase };

            /**
            * @description 相关币种汇率0
            */
            var urlCountry_0 = 'http://nufm.dfcfw.com/EM_Finance2014NumericApplication/JS.aspx?type=CT&cmd=C._' + (util.country[0].match(/CNYi|CNH/i) ? 'CNY' : ('FX_' + util.country[0])) + '&sty=E1II&st=(ChangePercent)&sr=-1&p=1&ps=7&cb=' + 'callback4' + '&js=&token=049db06d2bc9c947062f56de8b3b5648';
            var configCountry_0 = { type: "get", dataType: "jsonp", jsonpCallback: "callback4", url: urlCountry_0 };

            /**
            * @description 相关币种汇率1
            */

            var urlCountry_1 = 'http://nufm.dfcfw.com/EM_Finance2014NumericApplication/JS.aspx?type=CT&cmd=C._FX_' + util.country[1] + '&sty=E1II&st=(ChangePercent)&sr=-1&p=1&ps=7&cb=' + 'callback5' + '&js=&token=049db06d2bc9c947062f56de8b3b5648';
            var configCountry_1 = { type: "get", dataType: "jsonp", jsonpCallback: "callback5", url: urlCountry_1 };

            /**
            * @description 交叉汇率
            */

            var urlCross = 'http://nufm.dfcfw.com/EM_Finance2014NumericApplication/JS.aspx?type=CT&cmd=C._FX_NOT_USD&sty=E1II&st=d&sr=-1&p=1&ps=5&cb=' + 'callback6' + '&js=&token=049db06d2bc9c947062f56de8b3b5648';
            var configCross = { type: "get", dataType: "jsonp", jsonpCallback: "callback6", url: urlCross };

            /**
            * @description 人民币中间价
            */

            var urlRmb = 'http://nufm.dfcfw.com/EM_Finance2014NumericApplication/JS.aspx?type=CT&cmd=AUDCNYC0,NZDCNYC0,CADCNYC0,GBPCNYC0,SGDCNYC0,JPYCNYC0,EURCNYC0,HKDCNYC0&sty=DCMFB&st=z&sr=-1&p=1&ps=8&cb=' + 'callback7' + '&js=&token=049db06d2bc9c947062f56de8b3b5648';
            var configRmb = { type: "get", dataType: "jsonp", jsonpCallback: "callback7", url: urlRmb };
            // console.log(util.forexName)
            $("#forex0container").parents(".side_box").find("h2 a").attr("href", 'http://forex.eastmoney.com/news/a' + util.country[0] + '.html').end().find("h2 i").text(util.forexName[0]);
            $("#forex1container").parents(".side_box").find("h2 a").attr("href", 'http://forex.eastmoney.com/news/a' + util.country[1] + '.html').end().find("h2 i").text(util.forexName[1]);

            var isChanged = true;
            function init() {

                //var baseRate = new Fill(temp, configBase, 0).init();
                // var metalRate = new Fill(temp, configMetal, 1).init();
                //外汇牌价
                var forexRate = new Fill(temp, configForex, 2).init(); //注意更换了新接口处理
                // var phase = new Fill(temp, configPhase, 3).init();
                //var country_0 = new Fill(temp, configCountry_0, 4).init();
                // var country_1 = new Fill(temp, configCountry_1, 5).init(isChanged);
                // var crossRate = new Fill(temp, configCross, 6).init();
                // var rmbRate = new Fill(temp, configRmb, 7).init();

                setTimeout(function () {
                    if (isChanged) {
                        $(".report .news").css('marginTop', $("#cross_rate").offset().top - $(".report .news .news_list").eq(0).find('.article_list').offset().top + 3 + 'px');
                        isChanged = false;
                    }
                }, 400);
            };
            init();
            setInterval(init, 20 * 1000);

        // });

        /**
        * @description 顶部摘要
        * @param {Object} brief 顶部构建
        */

        // require(['brief'], function (brief) {
            brief.init(function () {
                // var text = $(".quote_title_1").text();
                // if( text.length > 6 ){
                //     $(".quote_title_1").text(text.slice(0, -1));
                // }

            });

            //TODO


        // });

        $.each($(".calendar_event"), function (i, v, a) {
            var $v = $(v);
            var t = $v.text();
            if (t.length > 15) {
                $v.text(t.slice(0, 14));
            }
        }); 

        /**
        * @description 日历
        */

        // require(['WdatePicker'], function (WdatePicker) {
            //财经日历
            // var $querydate = $("#querydate");
            // var $submitdate = $("#submitdate");
            // $querydate.on('click', function () {

            //     WdatePicker({ dateFmt: 'yyyy-MM-dd' });
            // });
            // $submitdate.on('click', function () {
            //     var date = $querydate.val();

            //     var re = /(\d{4})(\d{2})(\d{2})/;
            //     var matches = re.exec(date);
            //     if (date === "") { return; }
            //     if (matches !== null) {
            //         //window.open('http://forex.eastmoney.com/fc' + matches[1] + '-' + matches[2] + '-' + matches[3] + '.html', '_blank');
            //         window.open('http://forex.eastmoney.com/FC.html?Date=' + date, '_blank');

            //     } else {
            //         //window.open('http://forex.eastmoney.com/fc' + date + '.html', '_blank');
            //         window.open('http://forex.eastmoney.com/FC.html?Date=' + date, '_blank');
            //     }
            // });
        // });
    // });
// })();


/***/ }),

/***/ "./src/modules/old_forex/old.js":
/*!**************************************!*\
  !*** ./src/modules/old_forex/old.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// define(function (){
    var win = window;

    //更新图片
    function updateImage(img) {
        var re = /rt=([\d\.]+)(?:&|$)/
             , matchs = re.exec(img.src)
             , rt = Math.random()
             , src = img.src;
        if (matchs) {
            rt = matchs[0].replace(matchs[1], rt);
            img.src = src.replace(re, rt);
        } else {
            rt = "rt=" + rt;
            img.src = src + (src.indexOf("?") !== -1 ? "&" : "?") + rt;
        }
    }

    //图片自刷时间
    var IMG_TIMER_DELAY = 1000 * 60 * 3;
    var DATA_TIMER_DELAY = 1000 * 15;
    var dataUpate = [];

    //最近访问
    function addHistoryItem(container, code, name) {
        var arg = { def: "", set: "k-0-" + code + "-" + name };
        try{
            new HistoryViews(container, arg);
        }catch(e){
            //throw new Error("NOT FIND CONTAINER");
        }
        
    }
    addHistoryItem("historyest", itemCode, itemName);

    //全球时间
    //override _GlobalTime.prototype.show
    _GlobalTime.prototype.show = function() {
        var a = this;
        var f = a.Option;
        var b = f.citys.length;
        var l = [],
            k = [];
        var el = document.getElementById("wordtime").getElementsByTagName("i");
        
        var h = function() {
            var d = a.utils.now() + a.deviation - (3600000 * 8);
            for (var c = 0; c < b; c++) {
                var j = a.utils.formatTime(d, f.citys[c].utc);

                el[c].innerHTML = a.utils.dateFromat(j, f.display);
            }
        };
        h();
        var g = setInterval(h, 1000);
    };
    var globalTime = new _GlobalTime("wordtime");

    //R图
    (function() {
        var picr = document.getElementById("picr");
        if (picr === null) return;
        var src = picr.src;
        var rpic = {
            load: function() {
                updateImage(picr);
            }
        };

        document.getElementById('RefPR').onclick = function() {
            updateImage(picr);
        };

        win.rpic = rpic;

        picr && rpic.load();
    } ());

    function getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
        return currentdate;
    }

    // 财经日历
    // var querydate = document.getElementById("querydate");
    // var submitdate = document.getElementById("submitdate");

    // querydate.value = getNowFormatDate();
    // querydate.onclick = function() {
    //     new Calendar(1990, new Date().getFullYear()).show(this);
    // };
    // submitdate.onclick = function() {
    //     var date = querydate.value;
    //     var re = /(\d{4})(\d{2})(\d{2})/;
    //     var matches = re.exec(date);
    //     if (date === "") { return; }
    //     if (matches !== null) {
    //         //window.open('http://forex.eastmoney.com/fc' + matches[1] + '-' + matches[2] + '-' + matches[3] + '.html', '_blank');
    //         window.open('http://forex.eastmoney.com/FC.html?Date=' + matches[1] + '-' + matches[2] + '-' + matches[3], '_blank');
            
    //     } else {
    //         //window.open('http://forex.eastmoney.com/fc' + date + '.html', '_blank');
    //         window.open('http://forex.eastmoney.com/FC.html?Date=' + matches[1] + '-' + matches[2] + '-' + matches[3], '_blank');
    //     }
    // };

    //图片自刷
    (function(){
        setInterval(function() {
            rpic.load();
            // pick.load();   //TODO
        }, IMG_TIMER_DELAY);
    })()


    //数据自刷
    setInterval(function() {

        for (var i = 0; i < dataUpate.length; i++) {
            dataUpate[i].load();
        }
    }, DATA_TIMER_DELAY); 

    function formatm(){
        var now=new Date();
        return now.getDate()+""+now.getHours()+""+now.getMinutes()+"";
    }

    var scrollLoad = (function () {
        var getClient=function(){
            var l,t,w,h;
            l=document.documentElement.scrollLeft || document.body.scrollLeft;t=document.documentElement.scrollTop || document.body.scrollTop;w=document.documentElement.clientWidth;h=document.documentElement.clientHeight;
             return {'left':l,'top':t,'width':w,'height':h};
        };
        var getSubClient=function(p){
            var l = 0,t = 0,w,h;
            w = p.offsetWidth ;h = p.offsetHeight;
            while(p.offsetParent){l += p.offsetLeft ;t += p.offsetTop ;p = p.offsetParent;}
            return {'left':l,'top':t,'width':w,'height':h };
        };
        var intens=function(rec1,rec2){
            var lc1,lc2,tc1,tc2,w1,h1;
            lc1 = rec1.left + rec1.width/2;lc2 = rec2.left + rec2.width/2;
            tc1 = rec1.top + rec1.height/2 ; tc2 = rec2.top + rec2.height/2;
            w1 = (rec1.width + rec2.width)/2 ;h1 = (rec1.height + rec2.height)/2;
            return Math.abs(lc1 - lc2) < w1 && Math.abs(tc1 - tc2) < h1 ;
        };
        var jiance=function(prec1,callback){
              var arr = document.getElementsByTagName("del");
                for(var i = arr.length - 1 ; i >= 0 ;i--){
                      if(arr[i]){
                        if(arr[i].children[0].src!=arr[i].children[0].getAttribute("xsrc")){
                            var prec2 =  getSubClient(arr[i].children[0]);
                            if(intens(prec1,prec2)){callback(arr[i].children[0]);}
                          }
                      }
                }
          };
          var jiancev=function(prec1,callback){
              var arr = document.getElementsByTagName("kbd");
                for(var i = arr.length - 1 ; i >= 0 ;i--){
                      if(arr[i]){
                        if(arr[i].children[0].getAttribute("xsrc")=="0"){
                            var prec2 =  getSubClient(arr[i].children[0]);
                            if(intens(prec1,prec2)){callback(arr[i].children[0]);}
                          }
                      }
                }
          };
        var autocheck=function(){
           var prec1 = getClient(); 
           jiance(prec1,function(obj){
            var attrSrc=obj.getAttribute("xsrc");
                    if(attrSrc){var vr=formatm();obj.src = attrSrc+"?r="+vr;obj.setAttribute("xsrc",attrSrc+"?r="+vr);}
           });
           jiancev(prec1,function(obj){
            var attrSrc=obj.getAttribute("xsrc");
                    if(attrSrc=="0"){_this.GetVote("");obj.setAttribute("xsrc","1");}
           })
        };
        window.onscroll = function(){autocheck();};
        window.onresize = function(){autocheck();};
        window.onload = function(){setTimeout(autocheck,200);};
    });
    scrollLoad();
// })

/***/ }),

/***/ "./src/modules/old_forex/util.js":
/*!***************************************!*\
  !*** ./src/modules/old_forex/util.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// define(function (){
    var stockcode = window.stockcode;
    var country = [];
    country[0] = window.itemCode.slice(0, 3);
    country[1] = window.itemCode.slice(3); 

    var forexName = [];
    forexName[0] = window.forexName[0];
    forexName[1] = window.forexName[1];
    var forexMap = ['USD', 'CNY', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'NZD'];

    var code = window.itemCode + '';

    if(code.length < 7 && code.match(/cny/i) ){
        code += 'i';
    }

    // if(country[1].match(/USD/i) || country[1].match(/CNY|CNH/i)){
    //     var exc;
    //     if(!country[0].match('CNY')){
    //         exc = country[0];
    //         country[0] = country[1];
    //         country[1] = exc; 
    //     }
    // }

    // if(forexName[1].match(/人民币/) || forexName[1] === '美元'){
    //     var exc;
    //     if(!forexName[0].match(/人民币/)){ 
    //         exc = forexName[0];
    //         forexName[0] = forexName[1];
    //         forexName[1] = exc;
    //     }
    // }
    

    function hasForex (name){
        for(var i = 0;i<forexMap.length;i++){
            if(forexMap[i] === name)
                return true;
        }
    }

    module.exports =  {
        stockcode: stockcode, 
        kLine: window.kLine, 
        country: country, 
        forexMap: forexMap,
        hasForex: hasForex,
        forexName: forexName,
        code: code
    }
   
// });

/***/ })

/******/ });
//# sourceMappingURL=forex.js.map