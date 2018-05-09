$(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.js-nav-bar-fake').height($('.js-nav-bar').height());
        $('.js-nav-bar').addClass('nav__bar--fixed');
    } else {
        $('.js-nav-bar-fake').height(0);
        $('.js-nav-bar').removeClass('nav__bar--fixed');
    }
});

$(window).trigger('scroll');

$('.js-nav-other-popup-link').on('click', function () {
    $('.nav__other-popup').slideToggle();
})

$('.js-nav-other-popup-button').on('click', function () {
    $('.nav__other-popup').slideToggle();
})