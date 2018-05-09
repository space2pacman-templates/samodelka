$(".js-product-table-input-minus").on("click", function () {

    var $this = $(this);
    var $input = $this.parents(".product-table__addcart").find(".js-product-table-input");

    if (parseInt($input.val()) <= 1) return;
    $input.val(parseInt($input.val()) - 1);

});

$(".js-product-table-input-plus").on("click", function () {

    var $this = $(this);
    var $input = $this.parents(".product-table__addcart").find(".js-product-table-input");

    if (parseInt($input.val()) >= 999) return;
    $input.val(parseInt($input.val()) + 1)

});