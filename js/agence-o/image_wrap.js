(function ($) {

    $(document).ready(function () {
        $("#zone2 .block-page.list-articles .la-item img").wrap("<div class='wrappedimage'></div>");
        $("<div class='la-item-pointers'></div>").appendTo($("#zone2 .list-articles .la-item .wrappedimage"));


        $("#main #zone4 .article-focus").wrapInner("<div class='af-wrap'></div>");
        $("#main #zone4 .article-focus .af-wrap .af-title").prependTo($("#main #zone4 .article-focus"));

        $(".front #main #zone2 .main-title-with-link a.link-view-all").appendTo($(".front #main #zone2 .list-articles:nth-of-type(2)"));

$( "<div class='whiteTitleTriangle'></div>" ).insertAfter( "#zone2 .article-title .at-illust" );
    });


})(jQuery);