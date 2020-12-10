// Acc
$(document).on("click", ".use .menu div", function() {
  var numberIndex = $(this).index();

  if (!$(this).is("active")) {
    $(".use .menu div").removeClass("active");
    $(".use ul li").removeClass("active");

    $(this).addClass("active");
    $(".use ul").find("li:eq(" + numberIndex + ")").addClass("active");

    var listItemHeight = $(".use ul")
      .find("li:eq(" + numberIndex + ")")
      .innerHeight();
    $(".use ul").height(listItemHeight + "px");
  }
});
