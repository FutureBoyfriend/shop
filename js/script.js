$(document).ready(function() {
  $(".item").hide();
  $("#logo").fadeIn(600);
  $(".text").fadeIn(700);
  $("#insta").fadeIn(800);
  $("#follow").fadeIn(900);
  $(".a").fadeIn(800);
  $(".b").fadeIn(825);
  $(".c").fadeIn(850);
  $(".d").fadeIn(875);

  $(document).bind("mobileinit", function() {
    $.mobile.ajaxEnabled = false;
  });
  
  console.log($(window).width());
  
  $(".gay_carousel").slick({
	  autoplay: true,
	  arrows: true,
	  centerMode: true,
	  dots: false,
	  draggable: true,
	  focusOnSelect: true,
	  infinite: true,
	  slidesToShow: 3,
	  adaptiveHeight: true,
	  responsive: [
		{
			breakpoint: 700,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1
			}
		}
	  ]
  });
})
