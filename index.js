// Every time A player earns a blackjack his/her chips get increased by 10 dollars
// and gets reduced by 5 dollars each time he/she looses the game


// When we start the new game the two cards are automatically drawn 
let player = {

    Name: "Player",
    Chips: 0,  //initial chips

    sayHello: function () {
        console.log("Hey Player")
    }

}
//cards Array
let cards = []
let sum = 0
let hasblackJack = false;
let isAlive = false;
let message = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.querySelector("#sum-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")

// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.Name + " : " + "$" + player.Chips

let playerEl = document.getElementById("player-el")
//this function will return random numbers between 1 and 13
function getRandomcard() {

    let randomNumber = Math.floor(Math.random() * 13) + 1

    if (randomNumber === 1) {
        return 11
    }
    else if (randomNumber >= 11) {
        return 10
    }
    else {
        return randomNumber
    }
}



function startGame() {
    isAlive = true
    let firstNumber = getRandomcard()
    let secondNumber = getRandomcard()

    cards = [firstNumber, secondNumber]
    sum = firstNumber + secondNumber

    renderGame()
}




function renderGame() {

    sumEl.textContent = "sum: " + sum;
    cardEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }


    if (sum <= 20) {

        message = "Do you want to draw a new card?"
        isAlive = true;
        playerEl.textContent = player.Name + " : " + player.Chips + "$"

    } else if (sum === 21) {

        message = "Wohoo!! you've got a blackjack"
        isAlive = false
        hasblackJack = true
        player.Chips += 10;

        playerEl.textContent = player.Name + " : " + player.Chips + "$"



    } else {

        message = "Damn!! You've lost the game!"
        isAlive = false
        player.Chips -= 5;

        playerEl.textContent = player.Name + " : " + player.Chips + "$"
    }



    messageEl.textContent = message;


}



function newcard() {

    // console.log("Drawing a new card")
    if (isAlive === true && (hasblackJack === false || hasblackJack === true)) {
        let card = getRandomcard()
        sum += card
        cards.push(card)
        renderGame()

    }


}




























