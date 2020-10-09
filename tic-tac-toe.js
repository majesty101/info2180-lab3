window.onload = function () {
  //var newgame = document.querySelector(".btn");
  var boardgame = document.getElementById("board").children;
  for (let i = 0; i < boardgame.length; i++) {
    var brdgame = boardgame[i];
    brdgame.classList.add("square");
    console.log(brdgame.classList);
  }

  var player1turn = 10;
  for (let i = 0; i < boardgame.length; i++) {
    boardgame.item(i).addEventListener("click", function () {
      if (player1turn % 2 == 0) {
        boardgame.item(i).innerHTML = "X";
        boardgame.item(i).classList.add("X");
        player1Array.push(1);
      } else {
        boardgame.item(i).innerHTML = "O";
        boardgame.item(i).classList.add("O");
        player2Array.push(1);
      }
      player1turn--;
      //player2turn--;

      console.log("you clicked box number" + i);
      console.log(player1Array);
      console.log(player2Array);
    });
  }

  //let box = boardgame[i];
  var player1Array = new Array(5);
  var player2Array = new Array(4);
};
