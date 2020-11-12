(function () {
    $(document).ready(function () {
        // CLICK NAVIGATION
        $(".nav-link").click(function (e) {
            e.preventDefault();
            var $scroller = $(".main-wrapper");
            let pageId = $(e.currentTarget).data("page");
            var scrollTo = $("#" + pageId).position().left;
            $scroller.animate({ scrollLeft: scrollTo }, 200);
        });
    });
})();
