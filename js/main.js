$(document).ready(function() {
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });
    
    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });
});