window.$ = window.jQuery = require("jquery");
global.Popper = require("popper.js");
var bootstrap = require("bootstrap");
var magnificPopup = require("magnific-popup");
var matchHeight = require("jquery-match-height");

$(".dropdown-chevron-mobile").on("click", function(e) {
  e.preventDefault();

  // Toggles the arrow class on itself.
  $(this).toggleClass("open");

  // Get the parent list item and its id.
  var parent = $(e.target).parent("li");
  parent.children("ul").toggleClass("open");
});

/* Back to top */
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $(".back-to-top").fadeIn();
  } else {
    $(".back-to-top").fadeOut();
  }
});

$(".back-to-top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});

/* Match height */
$(".pricing-card-features").matchHeight();
$(".panel").matchHeight();

/* Magnific Popup */
$(".image-link").magnificPopup({
  type: "image",
  gallery: {
    enabled: true
  }
});


  // var color = ["#708284","#536870","#475B62","#0A2933","#042029","#FCF4DC","#EAE3CB","#A57706","#BD3613","#D11C24","#C61C6F","#595AB7","#2176C7","#259286","#738A05"];
  // var rand = color[Math.floor(Math.random() * color.length)];
  // $(".blog-post-img").each(function(i) {
  //   $(this).css("background-color", rand[i]);
  // });  
  

  var safeColors = ['0A','38','36','53','bd','aa'];
var rand = function() {
    return Math.floor(Math.random()*6);
};
var randomColor = function() {
    var r = safeColors[rand()];
    var g = safeColors[rand()];
    var b = safeColors[rand()];
    return "#"+r+g+b;
};

  $(".blog-post-img").each(function(i) {
    $(this).css("background-color", randomColor());
  });  