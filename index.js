
var name1=prompt("what is the name of the first player");
document.querySelector(".player1").innerHTML=(name1);

var name2=prompt("what is the name of the second player");
document.querySelector(".player2").innerHTML=(name2);



var randomNumber1 = Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;
console.log(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;
console.log(randomNumber2);

var image1="images/dice"+randomNumber1+".png";
var image2="images/dice"+randomNumber2+".png";

var mainimage1= document.querySelectorAll("img")[0];
mainimage1.setAttribute("src", image1);

var mainimage2 = document.querySelectorAll("img")[1];
mainimage2.setAttribute("src", image2);


if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML=(name1+" WINS");
  document.querySelector("h3").style.visibility="hidden";
  document.querySelector("player2").style.visibility="hidden";
  document.querySelector("player1").innerHTML=(name1+" WINS");
}
else if (randomNumber1==randomNumber2) {
  document.querySelector("h1").innerHTML=("MATCH    DRAWS");
  document.querySelector("h3").style.visibility="hidden";
}
else
{document.querySelector("h1").innerHTML=(name2+"   WINS");
document.querySelector("h3").style.visibility="hidden";
document.querySelector(".player1").style.visibility="hidden";
document.querySelector(".player2").innerHTML=(name2+" WINS");
}
