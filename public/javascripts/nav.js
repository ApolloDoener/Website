$(document).ready(function () {
    var window = $(document);
    var nav = $("nav");

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
});