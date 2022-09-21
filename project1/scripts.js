$(function(){
    var interval = 3000;
    // 간격은 3초
    $('.slideshow').each(function(){
        // 슬라이드쇼 안에 있는 요소를 반복적으로 사용
        var container = $(this);
        function switchImg(){
            // 페이드 전환 1회분
            var imgs = container.find('img')
            // img 요소를 전부 취득
            var first = imgs.eq(0);
            // 첫번째 img 요소
            var second = imgs.eq(1);
            // 두번째 img 요소
            first.appendTo(container).fadeOut();
            // 처음의 img 요소를 페이드아웃시켜 가장 뒤로 이동
            second.fadeIn();
            // 두번째 img 요소를 페이드인 시킨다

        };
    setInterval(switchImg,interval);
    // 3초마다 switchImg를 실행
    });
});

$(function(){
    var now = 1;
    var max = 3;
    var w = 600;
    var slide;

    slide = setInterval(function(){
        $('.box1_l > div >  span:nth-child(1)').animate({'margin-left':(w*(-1))+'px'},800,function(){
            $('.box1_l > div').append($('.box1_l  > div > span:nth-child(1)'));
            $('.box1_l  > div > span:nth-child(3)').css('margin-left','0px');
        });


    },2500);
});


$(function(){
    var now = 1;
    var max = 3;
    var w = 600;
    var slide;

    slide = setInterval(function(){
        $('.sub3_box1_l > div >  span:nth-child(1)').animate({'margin-left':(w*(-1))+'px'},800,function(){
            $('.sub3_box1_l > div').append($('.sub3_box1_l  > div > span:nth-child(1)'));
            $('.sub3_box1_l  > div > span:nth-child(3)').css('margin-left','0px');
        });


    },2500);
});
