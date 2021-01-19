class Game {

  constructor() {
    this.cards = []
    this.firstFlip = true
    this.badGuesses = 0
    this.timer = 0.0
    this.createGameBoard()
    this.createCards(["W","X","Y","Z"])
    this.timerInterval = setInterval(this.timerTick, 1000)
  }

  // Getters //

  get flippedCards() {
    return this.cards.filter(card => card.flipped)
  }

  // Creation Methods //

  createGameBoard = () => {
    this.gameBoard = document.createElement('div')
    this.gameBoard.id = "game-board"
    main.append(this.gameBoard)
    this.clock = document.createElement('span')
    this.clock.innerText = 0
    this.gameBoard.append(this.clock)
  }

  randomizeCardOrder = array => {
    const combinedArray = [...array,...array]
    const shuffledArray = []
    while (combinedArray.length) {
      const randomIndex = Math.floor(Math.random() * combinedArray.length)
      shuffledArray.push(combinedArray[randomIndex])
      combinedArray.splice(randomIndex, 1)
    }
    return shuffledArray
  }

  createCards = (array) => {
    const shuffledCards = this.randomizeCardOrder(array)
    for (var i = 0; i < shuffledCards.length; i++) {
      const card = new Card(shuffledCards[i], this.gameBoard)
      this.cards.push(card)
      card.html.addEventListener("click", () => this.handleCardFlip(card))
    }
  }

  timerTick = () => {
    this.timer = this.timer + 1
    this.clock.innerText = this.timer
  }

  // Card Flip Event Handlers //

  handleCardFlip = card => {
    const cardCanBeFlipped = !this.locked && !card.matched && !card.flipped
    if (cardCanBeFlipped) {
      card.flip()
      if (this.previousCard && card.image === this.previousCard.image) {
        this.handleCorrectGuess(card)
      } else if (this.firstFlip) {
        this.previousCard = card
        this.firstFlip = false
      } else {
        this.handleWrongGuess(card)
      }
    }
  }

  handleWrongGuess = card => {
    this.locked = true
    setTimeout(() => {
      card.flip()
      this.previousCard.flip()
      this.previousCard = null
      this.badGuesses++
      this.firstFlip = true
      this.locked = false
    }, 700)
  }

  handleCorrectGuess = card => {
    card.matched = true
    this.previousCard.matched = true
    this.firstFlip = true
    this.checkWinCondition()
  }

  checkWinCondition = () => {
    if (this.flippedCards.length === this.cards.length) {
      clearInterval(this.timerInterval)
      alert(`You won! You made ${this.badGuesses} wrong guesses!`)
    }
  }

  // End Game Methods //

  removeGameBoard = () => this.gameBoard.remove()

} // End Game Class
