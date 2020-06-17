let cors = "https://cors-anywhere.herokuapp.com/";

function changesrc(){
  var newSourceURL = document.getElementById("url").value;
  var playerElement = document.getElementById("player");

  console.log(newSourceURL);
  var player = new Clappr.Player({
    source:newSourceURL,
    plugins: {
      container: [ResponsiveContainer]
    }
  });
  player.attachTo(playerElement);
}

document.getElementById("playbtn").addEventListener("click", changesrc);
