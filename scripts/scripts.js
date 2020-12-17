var jWindow, imageFrame1;

var Elements = (function (j) {
    return {
        Page: j('.landing-page'),
        PageLoader: j('.page-loader')
    }
})(jQuery);

;(function (j) {
    j(function () {
        jWindow = j(window);

        jWindow.load(function () {
            Elements.Page.animate({
                'opacity': 1
            }, 600);

            Elements.PageLoader.fadeOut(function () {
                imageFrame1 = j('.image-frame1').imageframe({
                    interval: 600,
                    duration: 300
                });
            });
        }).resize(function () {
            Elements.PageLoader.height(jWindow.height());
        }).resize();
    });
})(jQuery);
