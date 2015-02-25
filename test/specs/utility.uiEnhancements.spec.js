define([
    'jquery',
    'underscore',
    'handlebars',

    'utility',
    'helper',

    'jasmine-jquery'

],function ($, _, Handlebars, utility, helper){

    describe('utility.uiEnHancements', function(){
        beforeEach(function(){
            loadFixtures('utility.uiEnhancements.spec.html');
        });

        it('var ui={} 형태로 사용', function() {
            // 사용법1
            var $element = $('#uiEnhancements1');
            var ui = {
                test1 : '.test1',
                test2 : '.test2',
                radios : ':radio[name=type1]'
            };
            utility.uiEnhancements.call(ui, $element);

            expect(ui.test1.text()).toBe('text1-1-txt 입니다.');
            expect(ui.test2.text()).toBe('text1-2-txt 입니다.');

            expect(ui.radios.filter(":checked").attr("id")).toBe('cart1');
            $("#cart1").removeProp('checked');
            $("#order1").prop('checked', true);
            expect(ui.radios.filter(":checked").attr("id")).toBe('order1');
        });

        it("var object={ ui:{} } 형태로 사용", function() {
            // 사용법2
            var object = {
                element : "#uiEnhancements2",
                ui : {
                    test1 : ".test1",
                    test2 : ".test2",
                    radios : 'input[type=radio]'
                }
            };
            utility.uiEnhancements.call(object);

            expect(object.ui.test1.text()).toBe("text2-1-txt 입니다.");
            expect(object.ui.test2.text()).toBe("text2-2-txt 입니다.");

            expect(object.ui.radios.filter(":checked").attr("id")).toBe('cart2');
            $("#cart2").removeProp('checked');
            $("#order2").prop('checked', true);
            expect(object.ui.radios.filter(":checked").attr("id")).toBe('order2');
        });
    });
});
