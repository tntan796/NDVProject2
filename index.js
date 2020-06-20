$(function() {
    new WOW().init();
    setHeight();
    $(window).resize(function() {
        setHeight();
    });
});

function setHeight() {
    var soluongmon = $('.motmon').length;
    var docao = soluongmon * $('.motmon').height();
    let isMobile = window.matchMedia("(max-width: 576px)").matches;
    let isTablet = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile && isTablet) {
        // Trường hợp mobile
        $('.thucdonct .noidungct').height(docao);
    } else if (!isMobile && isTablet) {
        // Trường hợp tablet
        $('.thucdonct .noidungct').height(docao/2);
    } else {
        // Trường hợp thường
        $('.thucdonct .noidungct').height(docao/3);
    }
}