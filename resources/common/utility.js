define(['jquery'], function ($){

    var utility = {
        // 단순한 dom 요소 선택을 위한 용도
        uiEnhancements: function (element) {
            var elementString = this.element || element || "html",
                uiObject = this.ui || this;

            // dom이 갱신되는 경우에 다시 dom를 탐색하기 위해서 string객체저장
            if(!uiObject.__elementString){ uiObject.__elementString = $.extend(true, {}, elementString); }
            if(!uiObject.__uiString)     { uiObject.__uiString      = $.extend(true, {}, uiObject); }

            this.element = $(this.__elementString);
            for (var key in this.__uiString) {
                if (key === "__uiString") {
                    continue;
                }
                uiObject[key] = (typeof this.__uiString[key] === "function") ? this.__uiString[key]()
                    : $(this.__elementString).find(this.__uiString[key]);
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
