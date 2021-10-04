// wait until DOM is ready
$(document).ready(function() {
  
  // wait until images, links, fonts, stylesheets, scripts, and other media assets are loaded

  $(window).bind("load", function() {
  headingAnim();
  imgCarousel()
  });
  
  
});



// mobile icon nav toggle

$(".toggle-button").on("click", () => {
  $(".nav-li-flex-parent").slideToggle()
})

// Music logic 

const muzak = new Audio("assets/music/the-green-door.mp3")
$("#music-button").on("click", playMusic)

function playMusic(){

  muzak.play();
  muzak.volume = 0.3;
  muzak.loop = true;
  muzak.muted = false;

  $("#music-button").on("click", () => {
    if (muzak.volume === 0.3) {
      muzak.volume = 0;
    } else if (muzak.volume === 0) {
      muzak.volume = 0.3;
    }
  });

}

// animates the header elements


function headingAnim() {
  gsap.from("#the-green-door", {opacity: 0, x: "-50vw", duration: 2})
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