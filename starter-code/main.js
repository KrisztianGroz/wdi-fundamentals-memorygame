console.log("JS file is connected to HTML! Woo!")
/*  comment out the old cards ;)
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "King";
var cardFour = "King";
*/
// replace them with an Array what we learned ;

var cards = ['queen', 'queen', 'king', 'king'];

 var cardsInPlay =[] ;

 

			 function createBoard() {

			 	// loop in array cards 

			   
			   for (var i=0; i<cards.length; i++) {

			
			     // We make a Div element 
			    var cardElement = document.createElement('div');


			
			    // get a class name for css
			    cardElement.className = 'card';

				
			    
			    // Set an attribute what we can use 
			    cardElement.setAttribute('data-card', cards[i]);

				// add a function for the click , what I have not created yet :)
			    cardElement.addEventListener('click', isTwoCards);

			 // we add the element to our board
			    
			    board.appendChild(cardElement);

			   
			  }
			
			}















 /*if (cardOne === cardTwo) {window.alert("You found a mach");} else window.alert("Ohh Boy try it again");*/

 

/*
var element = document.getElementById('game-board');
 
 for (var i = 0; i < 12; i++) {
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


