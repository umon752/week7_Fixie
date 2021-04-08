const time = 1000;

$(document).ready(function () {
    /* loading */
    // 進度百分比動態顯示
    let progress = 0;

    function countTime() {
        $('.js-loading-text').text(progress + '%');
        progress += 1;

        // 跑 0~100%
        if (progress >= 0 && progress <= 100) {
            setTimeout(countTime, time / 100);
        }
    }
    countTime();


    /* 1 秒後開始執行 */
    setTimeout(function () {
        // loading 畫面消失
        $('.js-loading').addClass('loading--fadeOut');


        /* AOS */
        AOS.init({
            duration: 300,
            once: true
        });


        /* 頁面動態效果 */
        // 螢幕寬度 >= 1200px 時執行
        if ($(window).width() >= 992) {

            $(window).scroll(function () {
                var scrollPos = $(window).scrollTop();
                var windowHeight = $(window).height();

                $('.js-stripped').each(function () {
                    var thisPos = $(this).offset().top;
                    if ((windowHeight + scrollPos) >= thisPos) {
                        $('.js-onegear-img').addClass('bg-position-left');
                        $('.js-onegear-item-title').addClass('translate-left');
                    }
                });

                $('.js-stripped').each(function () {
                    var thisPos = $(this).offset().top;
                    if ((windowHeight + scrollPos) >= (thisPos + 500)) {
                        $('.js-stripped-img').addClass('bg-position-right');
                    }
                });
                $('.js-stripped-item-title').css('transform', 'translateX( ' + -(scrollPos / 15) + 'px )');
                $('.js-stripped-item-title-second').css('transform', 'translateX( ' + (scrollPos / 15) + 'px )');
            });
        }
    }, time);
});