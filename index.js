var randomNumber1 = Math.floor(6*Math.random())+1;
document.querySelector('.img1').setAttribute('src','images/dice'+randomNumber1+'.png');
var randomNumber2 = Math.floor(6*Math.random())+1;
document.querySelector('.img2').setAttribute('src','images/dice'+randomNumber2+'.png');
if (randomNumber1>randomNumber2){
  var winer = "Player 1 Wins!"
  document.querySelector(".container h1").innerHTML = winer;
}
else if (randomNumber1 < randomNumber2){
  var winer = "Player 2 Wins!"
  document.querySelector(".container h1").innerHTML = winer;
}
else{
  var winer = "Draw!"
  document.querySelector(".container h1").innerHTML = winer;

}
