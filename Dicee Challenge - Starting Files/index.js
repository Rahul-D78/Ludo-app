var randomNumber1 = Math.floor(Math.random()*6)+1;


var randomDice = "dice" + randomNumber1 +".png"; //dice1.png - dice6.png

var imageSrc =  "images/" + randomDice; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",imageSrc);

var randomNumber2 = Math.floor(Math.random()*6) +1;

var imageSrc2 = "images/dice" + randomNumber2 +".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src",imageSrc2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player1 Wins";
}
else if(randomNumber2 === randomNumber1) {
    document.querySelector("h1").innerText = "Draw";
}
else {
    document.querySelector("h1").innerText = "Player2 Wins";
}


