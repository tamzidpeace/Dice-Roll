var player1 = Math.random();
player1 = player1 * 6 + 1;
player1 = Math.floor(player1);

var player2 = Math.random();
player2 = player2 * 6 + 1;
player2 = Math.floor(player2);

if (player1 > player2) {
    document.querySelector("#title").innerText = "Player one wins";
    document.getElementById("pdice1").src = "image/dice/d" + player1+ ".jpg";
    document.getElementById("pdice2").src = "image/dice/d" + player2+ ".jpg";

}
else if (player2 > player1) {
    document.querySelector("#title").innerText = "Player two wins";
    document.getElementById("pdice1").src = "image/dice/d" + player1+ ".jpg";
    document.getElementById("pdice2").src = "image/dice/d" + player2+ ".jpg";
}
else {
    document.querySelector("#title").innerText = "Draw";
    document.getElementById("pdice1").src = "image/dice/d" + player1+ ".jpg";
    document.getElementById("pdice2").src = "image/dice/d" + player2+ ".jpg";
}


