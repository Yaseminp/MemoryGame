document.addEventListener('DOMContentLoaded', () => {

  //card options
  const cardArray = [
    {
      name:'coconut',
      img:'images/coconut.png'
    },
     {
      name:'ice-cream',
      img:'images/ice-cream.png'
    },
     {
      name:'cupcake',
      img:'images/cupcake.png'
    },
     {
      name:'donut',
      img:'images/donut.png'
    },
     {
      name:'hamburger',
      img:'images/hamburger.png'
    },
     {
      name:'strawberry',
      img:'images/strawberry.png'
    },
    {
      name:'coconut',
      img:'images/coconut.png'
    },
     {
      name:'ice-cream',
      img:'images/ice-cream.png'
    },
     {
      name:'cupcake',
      img:'images/cupcake.png'
    },
     {
      name:'donut',
      img:'images/donut.png'
    },
     {
      name:'hamburger',
      img:'images/hamburger.png'
    },
     {
      name:'strawberry',
      img:'images/strawberry.png'
    },
  ]

  //randomize card array
cardArray.sort(() => 0.5 - Math.random())

  //with queryselector pick out class name of grid from html and define it as grid for JavaScript
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

//create board
function createBoard() {
  for(let i=0; i < cardArray.length; i++) {
    var card = document.createElement('img')
    card.setAttribute('src', 'images/star.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
  }
}

//check for matches
function checkForMatch(){
  const cards = document.querySelectorAll('img')
  const firstCard = cardsChosenId[0]
  const secondCard = cardsChosenId[1]

  
  if (cardsChosen[0] === cardsChosen[1]) {
    alert('You found a match')
    cards[firstCard].setAttribute('src', 'images/white.png')
    cards[secondCard].setAttribute('src', 'images/white.png')
    cards[firstCard].removeEventListener('click', flipCard)
    cards[secondCard].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
  } else{
    cards[firstCard].setAttribute('src', 'images/star.png')
    cards[secondCard].setAttribute('src', 'images/star.png')
    alert ('Sorry, try again')
  }
  cardsChosen = [];
  cardsChosenId = [];
  resultDisplay.textContent = cardsWon.length
  if (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = 'Congratulations! You found them all!'
  }
}

//flip your card
function flipCard() {
  let cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if ( cardsChosen.length ===2) 
  return;
  {
    setTimeout (checkForMatch, 1500)
  }
}



createBoard()

})