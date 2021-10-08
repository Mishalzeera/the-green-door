// wait until DOM is ready
$(document).ready(function() {
  
  // wait until images, links, fonts, stylesheets, scripts, and other media assets are loaded

  $(window).bind("load", function() {
  headingAnim();
  slidesAnim();
  tikiManAnim();
  });
  
  
});



// mobile icon nav toggle

$(".toggle-button").on("click", () => {
  $(".nav-li-flex-parent").slideToggle()
})

// Music logic 

const muzak = new Audio("assets/music/the-green-door.mp3")
const muzak2 =new Audio("assets/music/muzak-2.mp3")
$("#music-button").on("click", playMusic)

function playMusic(){
  let i = muzak2;

  i.play();
  i.volume = 0.3;
  i.loop = true;
  i.muted = false;

  $("#music-button").on("click", () => {
    if (i.volume === 0.3) {
      i.volume = 0;
    } else if (i.volume === 0) {
      i.volume = 0.3;
    }
  });

}

// animates the header elements


function headingAnim() {
  gsap.from("#the-green-door", {opacity: 0, x: "-50vw", duration: 2})
}

function tikiManAnim() {
  let tl = gsap.timeline({repeat: 8, yoyo : true})
  tl.fromTo("#tiki-man", {rotate: -3}, {rotate: +3, duration: .08})
  .fromTo("#tiki-man", {rotate: +3}, {rotate: 0, duration: .08})
  
}

function slidesAnim() {
  gsap.to("#slides", {rotate: 2, duration: 3})
}
 


   

// }
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 