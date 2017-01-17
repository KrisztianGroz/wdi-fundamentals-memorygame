console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "King";
var cardFour = "King";


 /*if (cardOne === cardTwo) {window.alert("You found a mach");} else window.alert("Ohh Boy try it again");*/

 


var element = document.getElementById('game-board');
 
 for (var i = 0; i < 4; i++) {
 var divElement = document.createElement('Div');
 	divElement.className = ("card");
 element.appendChild(divElement);
  }

