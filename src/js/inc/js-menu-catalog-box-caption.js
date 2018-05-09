$(".js-menu-catalog-box-caption").on("click", function () {

    var $this = $(this);

    if ($this.hasClass("is-active")) {
        $this.removeClass("is-active");
        $this.removeClass('icon-minus').addClass("icon-plus");;
        $this.parents(".menu-catalog-box__row").removeClass("is-active-border").find(".menu-catalog-box__list").slideUp();
    } else {
        $this.addClass("is-active");
        $this.removeClass('icon-plus').addClass("icon-minus");;
        $this.parents(".menu-catalog-box__row").addClass("is-active-border").find(".menu-catalog-box__list").slideDown();
    }

})