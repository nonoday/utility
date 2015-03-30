define([
    'jquery',
    'underscore',
    'handlebars',

    'utility',
    'helper',

    'jasmine-jquery'

],function ($, _, Handlebars, utility, helper){

    describe('utility.price.addComma', function(){
        it('결과값 테스트', function() {
            expect(utility.price.addComma(12345)).toBe('12,345');
            expect(utility.price.addComma('12345')).toBe('12,345');
            
            expect(utility.price.addComma(-12345)).toBe('-12,345');
            expect(utility.price.addComma('-12345')).toBe('-12,345');
        });

        it('결과값 typeof 는 string 입니다.', function() {
            expect(typeof utility.price.addComma(12345)).toBe('string');
            expect(typeof utility.price.addComma('12345')).toBe('string');

            expect(typeof utility.price.addComma(-12345)).toBe('string');
            expect(typeof utility.price.addComma('-12345')).toBe('string');
        });
    });

    describe('utility.price.removeComma', function(){
        it('결과값 테스트', function() {
            expect(utility.price.removeComma('12,345')).toBe(12345);
            expect(utility.price.removeComma('-12,345')).toBe(-12345);
        });

        it('결과값 typeof 는 Number 입니다.', function() {
            expect(typeof utility.price.removeComma('-12345')).toBe('number');
            expect(typeof utility.price.removeComma('-12,345')).toBe('number');
        });
    });
    
});
