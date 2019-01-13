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
  $(".e").fadeIn(900);
  $(".opt2").hide();
  $(".opt4").hide();

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
  
  $("#postDropdown").change(function() {
	 var selected = $(".dropdown :selected").text();
	 if (selected.charAt(0) == '1') {
		$("#postPrice").text("$5");
	 }
	 else {
		 $("#postPrice").text("$12");
	 }
  });
  
  $("#accountDropdown").change(function() {
	 var selected = $("#accountDropdown :selected").text();
	 if (selected.charAt(0) == '3') {
		$("#accountPrice").text("$15");
	 }
	 else {
		 $("#accountPrice").text("$20");
	 }
  });
  
  
  $("#safariPostDropdown").change(function() {
	 var selected = $("#safariPostDropdown :selected").text();
	 if (selected.charAt(0) == '1') {
		$("#safariPostPrice").text("$5");
		$(".opt2").hide();
		$(".opt1").show();
	 }
	 else {
		 $("#safariPostPrice").text("$12");
		 $(".opt1").hide();
		 $(".opt2").show();
	 }
  });
  
  $("#safariAccountDropdown").change(function() {
	 var selected = $("#safariAccountDropdown :selected").text();
	 if (selected.charAt(0) == '3') {
		$("#safariAccountPrice").text("$15");
		$(".opt4").hide();
		$(".opt3").show();
	 }
	 else {
		 $("#safariAccountPrice").text("$20");
		 $(".opt3").hide();
		 $(".opt4").show();
	 }
  });
})
