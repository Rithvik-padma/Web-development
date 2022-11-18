player1 = Math.floor(Math.random()*6) + 1;
player2 = Math.floor(Math.random()*6) + 1;

function number(player, dice){
  switch(player){
    case 1: document.getElementById(dice).setAttribute("src", "images/dice1.png");break;
    case 2: document.getElementById(dice).setAttribute("src", "images/dice2.png");break;
    case 3: document.getElementById(dice).setAttribute("src", "images/dice3.png");break;
    case 4: document.getElementById(dice).setAttribute("src", "images/dice4.png");break;
    case 5: document.getElementById(dice).setAttribute("src", "images/dice5.png");break;
    case 6: document.getElementById(dice).setAttribute("src", "images/dice6.png");break;
    default: document.getElementById(dice).setAttribute("src", "images/dice6.png");
  }
}
number(player1, "dice1");
number(player2, "dice2");

if(player1>player2){
  document.querySelector("h1").innerHTML = "<span>🏁</span>Player 1 wins";
}
else if(player1<player2){
  document.querySelector("h1").innerHTML = "Player 2 wins<span>🏁</span>";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
