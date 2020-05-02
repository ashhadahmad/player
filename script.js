document.addEventListener('DOMContentLoaded', () => {
  const player = new Plyr('#player');
  window.player = player;
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }
});

function changesrc(){
  var newSourceURL = document.getElementById("url").value;
  var video = document.getElementById("player");
  console.log(newSourceURL);
  if(newSourceURL !== null) {
    video.src = "https://cors-anywhere.herokuapp.com/" + newSourceURL;
  }
}

document.getElementById("playbtn").addEventListener("click", changesrc);
