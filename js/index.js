// NAV BUTTON ROTATE
jQuery(document).ready(function($) {
    $('#plus').click(function() {
        $('#plus').toggleClass('rotate');
        // SHOW MENU
        $('nav').toggleClass('show');
        // CHANGE LOGO COLOR
        // $('#heroLogo img#pink').toggleClass('show');
    });

});