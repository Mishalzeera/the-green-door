// wait until DOM is ready
$(document).ready(function() {
  
  // wait until images, links, fonts, stylesheets, scripts, and other media assets are loaded
  $(window).bind("load", function() {
    
    // GSAP custom code goes here
    gsap.from("#top", {opacity: 0, x: "-50vw", duration: 2})
  });
  
  
});

const muzak = new Audio("assets/music/the-green-door.mp3")

$(".toggle-button").on("click", () => {
  $(".nav-li-flex-parent").slideToggle()
})

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


