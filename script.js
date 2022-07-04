// Display Open & Close Messages
var objDate = new Date();
var hours = objDate.getHours();
if (hours >= 9 && hours <= 21) {
  $("#bulletPointMob").removeClass("close").addClass("open");
  $("#bulletPoint").removeClass("close").addClass("open");
  $(".openClose").empty();
  $(".openClose").append("We Are Open");
} else {
  $("#bulletPoint").removeClass("open").addClass("close");
  $("#bulletPointMob").removeClass("open").addClass("close");
  $(".openClose").empty();
  $(".openClose").append("We Are Closed");
}

// Hide and Show Navbar While Scrolling
document.addEventListener("DOMContentLoaded", function () {
  el_autohide = document.querySelector(".autohide");
  navbar_height = document.querySelector("#navbar").offsetHeight;
  document.body.style.paddingTop = navbar_height + "px";

  if (el_autohide) {
    var last_scroll_top = 0;
    window.addEventListener("scroll", function () {
      let scroll_top = window.scrollY;
      if (scroll_top > 0) {
        $("#navbar").removeClass("marginTop");
        $("#navbar").addClass("noMarginTop");
      } else {
        $("#navbar").removeClass("noMarginTop");
        $("#navbar").addClass("marginTop");
      }
      if (scroll_top > 800) {
        if (scroll_top < last_scroll_top) {
          el_autohide.classList.remove("scrolled-down");
          el_autohide.classList.add("scrolled-up");
        } else {
          el_autohide.classList.remove("scrolled-up");
          el_autohide.classList.add("scrolled-down");
        }
      }
      last_scroll_top = scroll_top;
    });
  }
});

// Block Scroll when Expand Navbar on Mobiles/Tablets
let clicked = false;

function disableScroll() {
  document.body.classList.add("stop-scrolling");
}

function enableScroll() {
  document.body.classList.remove("stop-scrolling");
}

$(".navbar-toggler").click(() => {
  clicked = !clicked;
  console.log(clicked);
  if (clicked) disableScroll();
  else enableScroll();
});
