define([
    'jquery',
    'underscore',
    'handlebars',

    'utility',
    'helper',

    'jasmine-jquery'

],function ($, _, Handlebars, utility, helper){

    describe('utility.cookie', function(){
        it('set,get,remove - 쿠키이름,쿠키값 두개로 설정 Sessing 종료시 같이 종료되는 쿠키', function() {
            utility.cookie.set('test1', 'haha');
            expect(utility.cookie.get("test1")).toBe('haha');

            utility.cookie.remove("test1");
            expect(utility.cookie.get("test1")).toBeUndefined();
        });

        it('set,get,remove - 쿠키이름,쿠키값,쿠키유지1일 설정', function() {
            utility.cookie.set("test2", "hoho", 1);
            expect(utility.cookie.get("test2")).toBe('hoho');

            utility.cookie.remove("test2");
            expect(utility.cookie.get("test2")).toBeUndefined();
        });

        it('set,get,remove - 쿠키이름,쿠키값,domain 설정', function() {
            /*
                karma.conf.js 의 설정은 아래와 같습니다.
                hostname: 'local.localhost.com'

                Karma v0.12.31 server started at http://local.localhost.com:9876/
             */
            utility.cookie.set("test3", "kaka1", "", "/", "local.localhost.com");
            utility.cookie.set("test4", "kaka2", "", "/", "localhost.com");

            expect(utility.cookie.get("test3")).toBe('kaka1');
            expect(utility.cookie.get("test4")).toBe('kaka2');
        });

        it('set,get,remove - 쿠키이름,쿠키값,domain 삭제', function() {
            utility.cookie.remove("test3");
            utility.cookie.remove("test4");

            expect(utility.cookie.get("test3")).toBeUndefined();
            expect(utility.cookie.get("test4")).toBe('kaka2');

            // 다른 도메인으로 쿠키가 등록된 경우 해당 도메인명을 정확히 같이 넣어 주어야 삭제됩니다.
            utility.cookie.remove("test4", "/", "localhost.com");
            expect(utility.cookie.get("test4")).toBeUndefined();
        });
    });

});
