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

  $("#a").click(function() {
    count(5, "bf post");
  })

  $("#b").click(function() {
    count(10, "bf highlight");
  })

  $("#c").click(function() {
    count(10, "promo1");
  })

  $("#d").click(function() {
    count(15, "promo2");
  })

  $(document).bind("mobileinit", function() {
    $.mobile.ajaxEnabled = false;
  })

  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  function safari(iS) {
    if (iS) {
      $(".other").addClass("hidden");
      $(".safari").removeClass("hidden");
    }
  }

  safari(isSafari);
  console.log(isSafari);
})
