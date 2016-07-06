jQuery(document).ready(function($) {
    $('#plus').click(function() {
        // NAV BUTTON ROTATE
        $('#plus').toggleClass('rotate');
        // SHOW MENU
        $('nav').toggleClass('show');
    });

    $('#scroll').click(function() {
        var center = $('#center');
        $('html,body').animate({ scrollTop: center.offset().top }, 600);
    });
    // HIDE SCROLL BUTTON ON SCROLL
    $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
            $('#scrollButton').addClass('hide');

        } else {
            $('#scrollButton').removeClass('hide');
        }
    });
    $(window).scroll(function() {
        if ($(document).scrollTop() > 500) {
            // HIDE MENU / RESET BUTTON IF VISIBLE ON SCROLL
            $('nav').removeClass('show');
            $('#plus').removeClass('rotate');
        }
    });
    $('#footerLogo').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });




});