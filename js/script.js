$(document).ready(function () {
    $(".categories").find("h4").click(function () {
        $(this).parent("li").toggleClass("visio").children(".tags").slideToggle().children("article").find("li").children(".article-body").css("display", "none");
    } );
    $(".tags").find("h5").click(function () {
       	$(this).stop().parents("article").children(".article-body").slideToggle();
    } );
} );
