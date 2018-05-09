$('.brand-box__link').slice(10,-1).hide();

$('.brand-box__show-more').on('click', function () {
    $('.brand-box__link').slice(10).slideDown();
    $('.brand-box__show-more').hide();
})