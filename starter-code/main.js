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

				// add a function for the click , 
			    cardElement.addEventListener('click', isTwoCards);

			 // we add the element to our board
			    
			    board.appendChild(cardElement);

			   
			  }
			
			}

			function isTwoCards() {
			  // We fill up our Cardsin play array with the "this what is new 
			  cardsInPlay.push(this.getAttribute('data-card'));
			  // lets make the images visible 
				console.log(this.getAttribute('data-card'));
				if (this.getAttribute('data-card') === 'king') {
					this.innerHTML = "<img src='http://i.imgur.com/Ou79B5C.png'>"; // If the Data card is King , this image should be too :)
				} else {
					this.innerHTML = "<img src='http://i.imgur.com/Xf3ubmM.png'>"; // God bless the Queen :)
				}
			           // we have a pair or no ? 
			  if (cardsInPlay.length === 2) {
			  

			  // Lets start our function to check is the same or not

			    isMatch(cardsInPlay);   // is match not created yet


			    //  Lets Start again :) 
			    cardsInPlay = [];
			  }
			}




			// lets make our last function 

			function isMatch(cards) {
			 


			  if (cards[0] === cards[1]) {
			    alert("You found a match! Whao you are Good"); // We let them know 
			  } else {
			    alert("Sorry, try again. Use the Force please");  // We give a sorry message 
			
			   }
			}
			 
			
			// maybe its working 















 /*if (cardOne === cardTwo) {window.alert("You found a mach");} else window.alert("Ohh Boy try it again");*/

 

/*
var element = document.getElementById('game-board');
 
 for (var i = 0; i < 4; i++) {
 var divElement = document.createElement('Div');
 	divElement.className = ("card");
 element.appendChild(divElement);
  }

*/

/*

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
*/


