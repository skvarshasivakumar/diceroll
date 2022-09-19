var randomNumber1=Math.floor(Math.random()*6)+1;
var source="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",source);


var randomNumber2=Math.floor((Math.random()*6)+1);
var str="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",str);
 if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="Player 1 WINS !";
 }
 else if(randomNumber2>randomNumber1){
  document.querySelector("h1").textContent="Player 2 WINS !";
 }
else{
  document.querySelector("h1").textContent="DRAW";
}
