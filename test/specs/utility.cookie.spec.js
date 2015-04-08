define([
    'jquery',
    'underscore',
    'handlebars',

    'utility',
    'helper',

    'jasmine-jquery'

],function ($, _, Handlebars, utility, helper){

    describe('utility.cookie', function(){
        it('set, get, remove', function() {
            utility.cookie.set("test1", "hahaha");
            expect(utility.cookie.get("test1")).toBe('hahaha');

            utility.cookie.set("test2", "%^&%$%#@$$RFDSY^%& dsaf543276y 4tgFDG $#@%^T$#^%T");
            expect(utility.cookie.get("test2")).toBe('%^&%$%#@$$RFDSY^%& dsaf543276y 4tgFDG $#@%^T$#^%T');

            utility.cookie.remove("test1");
            utility.cookie.remove("test2");

            expect(utility.cookie.get("test1")).toBe(undefined);
            expect(utility.cookie.get("test2")).toBe(undefined);
        });

    });
    
});
