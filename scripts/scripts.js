// fluent typography
causeRepaintsOn = $("h1, h2, p");

$(window).resize(function() {
  causeRepaintsOn.css("z-index", 1);
});