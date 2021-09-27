const muzak = new Audio("assets/music/the-show-no-poem.mp3")

const toggleButton = document.getElementsByClassName("toggle-button")[0]
const toggleClass = document.getElementsByClassName("nav-li-flex-parent")[0]

toggleButton.addEventListener("click", ()=>{


 toggleClass.classList.toggle("active");

})


$("#music-button").on("click", playMusic)

function playMusic(){

  console.log("play")
  muzak.play();
  muzak.volume = 0.5;
  muzak.loop = true;
  muzak.muted = false;
  $("#music-button").on("click", checkMute);

}


function checkMute(){
  if (muzak.volume === 0.5) {
    muzak.volume = 0;
  } else if (muzak.volume === 0) {
    muzak.volume = 0.5;
  }
}