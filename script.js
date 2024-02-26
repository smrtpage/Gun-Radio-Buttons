$("label").on("click", function () {
  if (!$(this).prev("input").is(":checked")) {
    var position = $(this).position();
    $(".wrapper").addClass("active");
    $(".gun").css({
      transform: "translateY(" + (position.top - 3) + "px)",
    });
    setTimeout(function () {
      $(".wrapper").removeClass("active");
      $(".gun").css({
        transform: "translateY(500px)",
      });
    }, 2000);
  }
});
