(function ($) {
		var count = $('.nav span').size();
        var myswiper = new Swiper('.content', {
            onTransitionEnd: function (e) {
                var ind = e.activeIndex;
                for(var i = 0; i < count; i++) {
                    $('.nav span').eq(ind).addClass('on').siblings().removeClass('on');
                }
            }
        })
        $('.nav span').on('click', function() {
            var ind = $(this).index();
            $(this).addClass('on').siblings().removeClass('on');
            myswiper.slideTo(ind);
        })
})(jQuery)
