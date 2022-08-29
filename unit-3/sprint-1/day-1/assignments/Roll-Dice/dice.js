function rolldice(){
var play1=Math.floor(Math.random() * 6 )+1;

var play1dice = "images/dice" + play1 +".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",play1dice)


var play2=Math.floor(Math.random() * 6 )+1;
var play2dice = "images/dice" + play2 +".png";
var img1=document.querySelectorAll("img")[1];
img1.setAttribute("src",play2dice)

var play3=Math.floor(Math.random() * 6 )+1;
var play3dice = "images/dice" + play3 +".png";
var img1=document.querySelectorAll("img")[2];
img1.setAttribute("src",play3dice)

if(play1>play2 && play1>play3){
    document.querySelector("h2").innerHTML="PLAYER 1 WON"
    document.querySelector("h2").style.color="green"
 
}
else if(play2>play1 && play2>play3){
    document.querySelector("h2").innerHTML="PLAYER 2 WON"
    document.querySelector("h2").style.color="yellow"
}

else if(play3>play1 && play3>play2){
    document.querySelector("h2").innerHTML="PLAYER 3 WON"
    document.querySelector("h2").style.color="red"
   
}
else if(play1==play2&&play2==play3){
    document.querySelector("h2").innerHTML="DRAW"
    document.querySelector("h2").style.color="blue"
}

}