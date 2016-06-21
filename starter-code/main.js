console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var board = document.getElementById('game-board');
var createBoard = function() {
  for (i=0; i<cards.length; i++) {
 var cardElement = document.createElement('div');
cardElement.className = 'card';
 cardElement.setAttribute('data-card', cards[i]);
 cardElement.addEventListener('click', isTwoCards);
board.appendChild(cardElement);
board.appendChild(cardElement);
 }
}

var isTwoCards = function(){
  cardsInPlay.push(this.getAttribute('data-card'));
  console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>";
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>";
  }
  if (cardsInPlay.length === 2) {
  isMatch(cardsInPlay);
  cardsInPlay = [];
}
}

var isMatch = function(){
  if (cards[0] === cards[1]) {
  alert("You found a match!");
}
else {
  alert("Sorry, try again.");
}
}

createBoard();





/*var cardOne = document.getElementById('card-one');
var cardTwo = document.getElementById('card-two');

var changeColorOne = function(newColorOne) {

  cardOne.style.backgroundColor = newColorOne;
}

var changeColorTwo = function(newColorTwo) {
  cardTwo.style.backgroundColor = newColorTwo;
}


cardOne.addEventListener('click', function() {
  console.log('clicked');
  changeColorOne('black');
});

cardTwo.addEventListener('click', function(){
  console.log('Is this working');
  changeColorTwo('purple');
});*/
