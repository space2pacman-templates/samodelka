$('.js-filter-box-more-brand').on('click', function () {

    var filterBoxRow = $('.filter-box__row-brand');
    var currentHeight = filterBoxRow.height();
    var autoHeight = filterBoxRow.css('height', 'auto').height();

    filterBoxRow.height(currentHeight).animate({ height: autoHeight }, 1000);
    $(this).hide();
})