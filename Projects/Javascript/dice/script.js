function dice() {
  let player1 = Math.trunc(Math.random() * 6) + 1;
  let player2 = Math.trunc(Math.random() * 6) + 1;
  let result = document.querySelector("#result");
  document.querySelector("#player1").src = "images/image" + player1 + ".png";
  document.querySelector("#player2").src = "images/image" + player2 + ".png";
  if (player1 > player2) {
    result.innerHTML = "Player 1 Wins!";
  } else if (player1 == player2) {
    result.innerHTML = "It's a Tie!";
  } else {
    result.innerHTML = "Player 2 Wins!";
  }
}
document.querySelector("#roll").addEventListener("click", dice);
