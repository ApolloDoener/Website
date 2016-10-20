$(document).ready(function () {
    var window = $(document);
    var nav = $("nav .navbar");

    var button = $("nav .navbar-toggle");
    var navbar = $("nav .collapsed");

    window.on("scroll", function () {
        var top = window.scrollTop();
        if(top == 0) {
            nav.removeClass("affix");
            nav.addClass("affix-top");
        } else {
            nav.removeClass("affix-top");
            nav.addClass("affix");
        }
    });

    button.click(function () {
        if(navbar.hasClass("collapsed")) {
            navbar.removeClass("collapsed");
            navbar.addClass("collapse");
        } else {
            navbar.removeClass("collapse");
            navbar.addClass("collapsed");
        }
    });
});