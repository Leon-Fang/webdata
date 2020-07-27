var trackPoints = {
    'searchOfHome': {                           //埋点名：可以随便取，只作为标识符，可能会用到
        trackType: '3',                             //1：点击事件触发 2：界面载入完毕延时触发。3:手动调用接口方法触发。 必传。4：手动重新绑定埋点，适用于模板被替换之后之前绑定的埋点失效的情况，重新绑定运行bindTrack方法进行绑定
        elementsStr: '',       //要绑定的元素筛选str，例如'#id.class',参照jquery选择器语法。 必传
        paramsRank: ["logCode", "webId", "seId", "domain", "pageCode", "accountId", "guid", "ip", "cusParam"],   //参数字符串的拼接顺序，必传
        params: {
        //发请求传递的参数，按顺序填写，若参数取值方式特殊，则传为空'',下个参数会做特殊处理。 必传
            logCode: "17",
            webId: "2",
            seId: "4",
            domain: 'www.51job.com'
        },
        dealParamsBeforeEvent: function(params){
        //参数特殊处理方法，参数特殊处理后，会将该方法返回的参数合并到params参数中，覆盖掉原参数。 可以不传，默认返回原参数数组。
            params['pageCode'] = $("#language").val() == "e" ? "02" : "01";
            params['accountId'] = window.cfg.tracedata.accountid;
            params['guid'] = window.cfg.tracedata.guid;
            params['ip'] = window.cfg.tracedata.ip;
            
            return params;
        },
        dealParamsAfterEvent: function(params, e){
        //点击事件之后传入事件处理参数  可以不传，默认返回原参数数组。
            return params;
        },
        rankParamsToStr: function(params, rankArr){
        //最终排序参数并拼成字符串  可以不传
            var paramsStr = "";
            $.each(rankArr, function(i, n){
                paramsStr += n + "=" + encodeURIComponent(params[n]) + "&";
            });
            return ["_trackSearch", paramsStr.substr(0, paramsStr.length - 1)];
        },
        requestFunc: function(params){
        //调用的函数。 可以不传，默认_tkd.push()
            _tkd.push(params);
        }
    },
    'recommendKeywordClick': {
        trackType: '1',
        elementsStr: "p[track-type='recommendKeyword']>a",
        paramsRank: ["logCode", "webId", "accountId", "guid", "ip", "domain", "pageCode", "actionType", "recType", "seKw", "recKws", "clickKw"],
        params: {
            logCode: "15",
            webId: "2",
            domain: 'www.51job.com',
            actionType: '2'
        },
        dealParamsBeforeEvent: function(params){
            params['pageCode'] = $("#language").val() == "e" ? "02" : "01";
            params['accountId'] = window.cfg.tracedata.accountid;
            params['guid'] = window.cfg.tracedata.guid;
            params['ip'] = window.cfg.tracedata.ip;
            params['seKw'] = window.cfg.tracedata.searchkeyword;
            params['recType'] = $("p[track-type='recommendKeyword']").length == 0 ? "":$("p[track-type='recommendKeyword']").attr("recommend-type");
            var recKws = "";
            $("p[track-type='recommendKeyword']>a").each(function(){
                recKws += $(this).text() + ",";
            });
            params['recKws'] = recKws.substr(0, recKws.length-1);
            return params;
        },
        dealParamsAfterEvent: function(params, e){
            params['clickKw'] = $(e).text();
            return params;
        }
    },
    'recommendKeywordAll': {
        trackType: '2',
        elementsStr: "",
        paramsRank: ["logCode", "webId", "accountId", "guid", "ip", "domain", "pageCode", "actionType", "recType", "seKw", "recKws", "clickKw"],
        params: {
            logCode: "15",
            webId: "2",
            domain: 'www.51job.com',
            actionType: '1',
            clickKw: ''
        },
        dealParamsBeforeEvent: function(params){
            params['pageCode'] = $("#language").val() == "e" ? "02" : "01";
            params['accountId'] = window.cfg.tracedata.accountid;
            params['guid'] = window.cfg.tracedata.guid;
            params['ip'] = window.cfg.tracedata.ip;
            params['seKw'] = window.cfg.tracedata.searchkeyword;
            params['recType'] = $("p[track-type='recommendKeyword']").length > 0 ? $("p[track-type='recommendKeyword']").attr("recommend-type") : "";
            var recKws = "";
            $("p[track-type='recommendKeyword']>a").each(function(){
                recKws += $(this).text() + ",";
            });
            params['recKws'] = recKws.substr(0, recKws.length-1);
            return params;
        }
    },
    'industryKeyword': {
        trackType: '1',
        elementsStr: "a[track-type='indKeyword'],a[track-type='indSubKeyword'],a[track-type='companyKeyword']",
        paramsRank: ["logCode", "webId", "ip", "guid", "domain", "pageCode", "eventType","traceName", "cusParam"],
        params: {
            logCode: "81",
            webId: "2",
            domain: 'www.51job.com'
        },
        dealParamsBeforeEvent: function(params){
            params['pageCode'] = $("#language").val() == "e" ? "02" : "01";
            params['guid'] = window.cfg.tracedata.guid;
            params['ip'] = window.cfg.tracedata.ip;
            params['cusParam'] = "1" + String.fromCharCode(22) + window.cfg.tracedata.accountid;
            
            return params;
        },
        dealParamsAfterEvent: function(params, e){
            if($(e).attr("track-type") == "indKeyword")
            {
                params['eventType'] = "1";
                params['traceName'] = $.trim($(e).text());
            }
            if($(e).attr("track-type") == "indSubKeyword")
            {
                params['eventType'] = "2";
                params['traceName'] = $.trim($(e).siblings("p.tie").find("a").text()) + "-" + $.trim($(e).children("span").text());
            }
            if($(e).attr("track-type") == "companyKeyword")
            {
                params['eventType'] = "3";
                params['traceName'] = $.trim($(e).text());
            }
            return params;
        }
    },
    'trackButtonClick': {
        trackType: '1',
        elementsStr: "[track-type='trackButtonClick']",
        paramsRank: ["logCode", "webId", "version", "logTime", "ip", "guid", "domain", "pageCode", "eventType","traceName", "cusParam"],
        params: {
            logCode: "81",
            webId: "2",
            version: "1",
            domain: 'www.51job.com',
            traceName: ''
        },
        dealParamsBeforeEvent: function(params){
            params['pageCode'] = $("#language").val() == "e" ? "02" : "01";
            params['guid'] = window.cfg.tracedata.guid;
            params['ip'] = window.cfg.tracedata.ip;
            params['cusParam'] = "1" + String.fromCharCode(22) + window.cfg.tracedata.accountid;
            
            return params;
        },
        dealParamsAfterEvent: function(params, e){
            params['eventType'] = $(e).attr('event-type');
            params['logTime'] = new Date().getTime() + d_system_client_time;
            return params;
        }
    },
    'trackButtonClickNew': {
        trackType: '1',
        elementsStr: "[track-type='trackButtonClickNew']",
        paramsRank: ["VerType", "webId", "version", "logTime", "ip", "guid", "domain", "pageCode", "eventType","traceName", "cusParam"],
        params: {
            VerType: "81",
            webId: "2",
            version: "1",
            domain: 'www.51job.com',
            traceName: ''
        },
        dealParamsBeforeEvent: function(params){
            params['ip'] = trackConfig.ip;
            params['guid'] = trackConfig.guid;
            params['pageCode'] = $("#pageCode").val();
            
            return params;
        },
        dealParamsAfterEvent: function(params, e){
            params['eventType'] = $(e).attr('event-type');
            params['logTime'] = new Date().getTime() + d_system_client_time;
            params['cusParam'] = ["1", trackConfig.accountid, "51job_web", trackConfig.partner, typeof($(e).attr("track-resumeid")) == 'undefined' ? '' : $(e).attr("track-resumeid"), ''].join(String.fromCharCode(22));
            return params;
        }
    },
}