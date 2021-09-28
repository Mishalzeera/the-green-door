// wait until DOM is ready
$(document).ready(function() {
  
  // wait until images, links, fonts, stylesheets, scripts, and other media assets are loaded

  $(window).bind("load", function() {
   headingAnim()
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
  gsap.from("#top", {opacity: 0, x: "-50vw", duration: 2})
}


// carousel logic

const imgList = ["./assets/img/Beach 2.png", "./assets/img/Beach.png", "./assets/img/Bees Napping.jpg"]

function imgCarousel() {

  
  // let tl = gsap.timeline({repeat: -1})
  // tl.fromTo("#carousel-img", {src: imgList[0], opacity: 0}, {opacity: 1, duration: 1})
  // .fromTo("#carousel-img", {src: imgList[0], opacity: 1}, {opacity: 0, duration: 1})
  // .fromTo("#carousel-img", {src: imgList[1], opacity: 0}, {opacity: 1, duration: 1})
  // .fromTo("#carousel-img", {src: imgList[1], opacity: 1}, {opacity: 0, duration: 1})
  // .fromTo("#carousel-img", {src: imgList[2], opacity: 0}, {opacity: 1, duration: 1})
  // .to("#carousel-img", {src: imgList[0], opacity: 0, duration: 1})
 


   

}