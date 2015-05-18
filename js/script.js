$(document).ready(function () {
    $(".categories").find("h4").click(function () {
        $(this).parent("li").toggleClass("visio").children(".tags").slideToggle().children("article").find("li").children(".article-body").css("display", "none");
        $('html, body').animate({
	        scrollTop: $(this).offset().top-80
	    }, 700);
    } );
    $(".tags").find("h5").click(function () {
       	$(this).stop().parents("article").children(".article-body").slideToggle();
       	$('html, body').animate({
	        scrollTop: $(this).offset().top-60
	    }, 700);
    } );
    $(".tab-label").click(function () {
      var id = $(this).attr("value");
      $(".tab-label").each(function () {
        $(this).removeClass("active");
        $(this).parents(".article-body").find(".tab").each(function() {
          $(this).removeClass("active");
          if($(this).hasClass(id)) {
            $(this).addClass("active");
          }
        } );
      } );
      $(this).addClass("active");
    } );
    $( "#nav-toggle" ).click(function() {
        this.classList.toggle( "active" );
    });
    $(".search-button").click(function () {
        $("input[type='search']").toggleClass("open-search");
    } );
} );