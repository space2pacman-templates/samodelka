$('.js-goods-box-img-group').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    },
    image: {
        titleSrc: function (item) {
            return '<span class="goods-box__img-title">' + item.el.attr('title') + '</span>';
        }
    }
});