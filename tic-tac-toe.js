window.onload = function () {
  //var newgame = document.querySelector(".btn");
  var boardgame = document.getElementById("board").children;
  for (let i = 0; i < boardgame.length; i++) {
    var brdgame = boardgame[i];
    brdgame.classList.add("square");
    console.log(brdgame.classList);
  }
};
