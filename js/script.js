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
  $(".opt6").hide();
  $(".opt8").hide();
  $("#success").hide();
  $("#error").hide();
  $("#discountStore").hide();
  
  var DISCOUNT_CODE = "GAYLOVE";

  $(document).bind("mobileinit", function() {
    $.mobile.ajaxEnabled = false;
  });
  
  
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
  
  $("#safariPostDiscountDropdown").change(function() {
	  var selected = $("#safariPostDiscountDropdown :selected").text();
	  if (selected.charAt(0) == '1') {
		  $("#postDiscountPriceSafari").html("<strike>$5</strike> $3.75");
	  }
	  else {
		$("#postDiscountPriceSafari").html("<strike>$12</strike> $9.00");
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
  
  $("#safariPostDiscountDropdown").change(function() {
	 var selected = $("#safariPostDiscountDropdown :selected").text();
	 if (selected.charAt(0) == '1') {
		$("#postDiscountPriceSafari").html("<strike>$5</strike> $3.75");
		$(".opt6").hide();
		$(".opt5").show();
	 }
	 else {
		 $("#postDiscountPriceSafari").html("<strike>$12</strike> $9");
		 $(".opt5").hide();
		 $(".opt6").show();
	 }
  });
  
  
  $("#safariAccountDiscountDropdown").change(function() {
	 var selected = $("#safariAccountDiscountDropdown :selected").text();
	 if (selected.charAt(0) == '3') {
		$("#safariAccountDiscountPrice").html("<strike>$15</strike> $11.25");
		$(".opt8").hide();
		$(".opt7").show();
	 }
	 else {
		 $("#safariAccountDiscountPrice").html("<strike>$20</strike> $15");
		 $(".opt7").hide();
		 $(".opt8").show();
	 }
  });
  
  $("#accountDiscountDropdown").change(function () {
	  var selected = $("#accountDiscountDropdown :selected").text();
	  if (selected.charAt(0) == '3') {
		  $("#accountDiscountPrice").html("<strike>$15</strike> $11.25");
	  }
	  else {
		  $("#accountDiscountPrice").html("<strike>$20</strike> $15");
	  }
  });
  
  $("#discountButton").click(function() {
	  var discount = $("#discount").val().toUpperCase();
	  if (discount == DISCOUNT_CODE)
	  {
		  $("#success").show();
		  $("#error").hide();
		  $("#discountStore").show();
		  $("#store").hide();
		  $("#discountDiv").hide();
	  }
	  else {
		  $("#error").show();
		  $("#success").hide();
		  $("#store").show();
		  $("#discountStore").hide();
	  }
  });
})
