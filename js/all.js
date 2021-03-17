let time = 1000;

$(document).ready(function () {
    /* 處理 loading 畫面 */
    // loading 畫面進度百分比動態顯示
    let progress = 0;

    function countTime() {
        $('.loading__text').text(progress + '%');
        progress += 1;
        if (progress >= 0) {
            setTimeout(countTime, time / 100);
        }
    }
    countTime();


    /* 1 秒後開始執行 */
    setTimeout(function () {
        // 設定 loading 畫面消失
        $('.loading').addClass('loading--fadeOut');


        /* AOS */
        AOS.init({
            duration: 300,
            once: true
        });


        /* 處理頁面動態效果 */
        // 螢幕寬度 >= 1200px 時執行
        if ($(window).width() >= 992) {

            $(window).scroll(function () {
                var scrollPos = $(window).scrollTop();
                var windowHeight = $(window).height();

                $('.stripped').each(function () {
                    var thisPos = $(this).offset().top;
                    if ((windowHeight + scrollPos) >= thisPos) {
                        $('.onegear__img').addClass('bg-position-left');
                        $('.onegear__item__title').addClass('translate-left');
                    }
                });

                $('.stripped').each(function () {
                    var thisPos = $(this).offset().top;
                    if ((windowHeight + scrollPos) >= (thisPos + 500)) {
                        $('.stripped__img').addClass('bg-position-right');
                    }
                });
                $('.stripped__item__title').css('transform', 'translateX( ' + -(scrollPos / 15) + 'px )');
                $('.stripped__item__title--second').css('transform', 'translateX( ' + (scrollPos / 15) + 'px )');
            });
        }
    }, time);
});