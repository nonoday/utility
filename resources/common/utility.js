define(['jquery'], function ($){

    var utility = {
        // 단순한 dom 요소 선택을 위한 용도
        uiEnhancements: function (element) {
            var $element = $(this.element || element || document),
                uiObject = this.ui || this;

            // dom 갱신되는 경우에 다시 dom를 탐색하기 위해서 string객체저장
            if(!uiObject.__uiString){
                uiObject.__uiString = $.extend(true, {}, uiObject);
            }

            if(this.ui){ this.element = $element; }
            for (var key in uiObject.__uiString) {
                if (key === "__uiString"){ continue; }
                uiObject[key] = (typeof uiObject.__uiString[key] === "function") ? uiObject.__uiString[key]()
                                                                                 : $element.find(uiObject.__uiString[key]);
            }
        },

        price: {
            /**
             * 숫자를 3자리씩 점을 찍어 통화 단위로 리턴
             * @param number
             * @returns string
             */
            addComma: function (number) {
                var reg = /(^[+-]?\d+)(\d{3})/;
                if (isNaN(number)) {
                    return 0;
                }
                number += '';
                while (reg.test(number)) {
                    number = number.replace(reg, '$1' + ',' + '$2');
                }
                return number;
            },

            /**
             * ,이 있는 통화 단위를 숫자로 리턴
             * @param string
             * @returns number
             */
            removeComma: function (string) {
                var value = '';
                string = string.replace(/,/g, "");
                (isNaN(string)) ? value = 0 : value = Number(string);
                return value;
            }
        },

        cookie: {
            /**
             * 쿠키 생성하기
             * @param name
             * @param value
             * @param max_age 일(day)단위, 값이 없는 경우 Session 종료시 캐시값도 같이 삭제됨
             * @param path
             * @param domain
             */
            set: function(name,value,max_age,path,domain){
                var cookieString = encodeURIComponent(name) + "=" + encodeURIComponent(value)
                    + "; path=" + (path ? path : "/")
                    + "; domain=" + (domain ? domain : document.domain);

                // max_age 값이 있는 경우만 저장일을 설정하고
                // max_age 값이 없는 경우 Session 종료될때 쿠키도 삭제될 수 있도록 설정
                if(max_age){
                    var today = new Date();
                    var expires = new Date();
                    expires.setTime( today.getTime() + (1000*60*60*24*max_age) );
                    cookieString += "; expires=" + expires.toGMTString();
                }
                document.cookie = cookieString;
            },
            get: function(name){
                var allCookies = document.cookie;
                var strCnt = name.length;
                var pos = allCookies.indexOf(name+"=");

                if(pos == -1) return undefined;

                var start = pos + strCnt+1;
                var end = allCookies.indexOf(";", start);
                if(end == -1) end = allCookies.length;
                var value = allCookies.substring(start, end);
                return decodeURIComponent(value);
            },
            /**
             * set 메소드와 같은 param 를 가진다.
             * @param name
             * @param path
             * @param domain
             */
            remove: function(name,path,domain){
                path   = path ? path : "/";
                domain = domain ? domain : document.domain;
                utility.cookie.set(name, "", -1, path, domain);
            }
        },

        format : {
            // 날짜(Date 객체)를 포맷팅한다. 포맷 패턴을 지정하지 않으면 기본 패턴 yyyy/MM/dd HH:mm:ss 가 지정된다.
            // Date (Date object) Formatting.
            // If format pattern is not defined, then default pattern will be yyyy/MM/dd HH:mm:ss.
            // {{formatDate useStartDate "yyyy-MM-dd"}} -> 2012.05.23
            date: function(value, type){

            },

            // 숫자를 포맷팅한다. 포맷 패턴을 지정하지 않으면 기본 패턴 ###,### 가 지정된다.
            // {{formatNumber deliveryPrice}}원           -> 1,243,239
            // {{formatNumber remainingTime.hours "00"}} -> 01, 03, 11
            number: function(value, type){

            }
        }
    }
    return utility;
});
