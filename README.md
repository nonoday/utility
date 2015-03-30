# utility

## utility.uiEnhancement
매소드마다 복잡하게 삽입되어 있는 dom 접근 코드 관리를 위한 매쏘드

## 사용법1. 객체의 프로퍼티로 사용하기(추천)
        
    var object = {
        initialize : function(){
            utility.uiEnhancements.call(this);
            this.test();
        },
        
        element : "#uiEnhancements1",
        ui : {
            test1 : ".test1",
            test2 : ".test2",
            radioChecked : 'input[type=radio]:checked'
        },
        
        test: function(){
            this.ui.test1.text("hahaha");
        }
    };
    object.initialize();

## 사용법2. 변수로 사용하기
    
    var $element = $('#uiEnhancements1');
    var ui = {
        test1 : '.test1',
        test2 : '.test2',
        radioChecked : 'input[type=radio]:checked'
    };
    utility.uiEnhancements.call(ui, $element);
    
    ui.test1.text('hahaha');

***

## addComma, removeComma
### addComma
    양수일 경우
    utility.price.addComma(12345) -> 12,345 (typeof==string)
    utility.price.addComma('12345') -> '12,345' (typeof==string)
    
    음수일 경우
    utility.price.addComma(-12345) -> -12,345 (typeof==string)
    utility.price.addComma('-12345')  -> -12,345 (typeof==string)
    
    문자 및 단위 포함일 경우
    

### removeComma
    
    utility.price.removeComma('12,345') -> 12345; (typeof==number)
    utility.price.removeComma('-12,345') -> -12345; (typeof==number)
    
    문자 및 단위 포함일 경우
    
