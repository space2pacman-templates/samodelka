$('.ordering-table__checkbox').on('change', function () {
    if ($(this).is(':checked')) {
        $('.ordering-table__row:nth-child(odd)').css("background-color", "#fafafa");
        $('.ordering-table__row:nth-child(even)').css("background-color", "#ffffff");
        $(this).parents('.ordering-table__row').css("background-color", "#e5eef1");
    }
})