console.log("JS file is connected to HTML! Woo!")
/*  comment out the old cards ;)
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "King";
var cardFour = "King";
*/
// replace them with an Array what we learned ;

var cards = ['queen', 'queen', 'king', 'king'];



 /*if (cardOne === cardTwo) {window.alert("You found a mach");} else window.alert("Ohh Boy try it again");*/

 

/*
var element = document.getElementById('game-board');
 
 for (var i = 0; i < 4; i++) {
 var divElement = document.createElement('Div');
 	divElement.className = ("card");
 element.appendChild(divElement);
  }

*/



function createCards () {
 	var element = document.getElementById('game-board');
 
 for (var i = 0; i < 4; i++) {
 	var divElement = document.createElement('Div');
 	divElement.className = ("card");
  element.appendChild(divElement);
 }
 }

 // after ten min I found out I havent called the function yet :)

createCards();


