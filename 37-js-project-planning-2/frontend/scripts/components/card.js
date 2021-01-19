class Card {

  constructor(image, gameBoard) {
    this.image = image
    this.addToBoard(gameBoard)
    this.flipped = false
  }

  addToBoard = board => {
    this.html = document.createElement('div')
    this.html.className = "card unflipped"
    board.append(this.html)
  }

  flip = () => {
    // TODO: Change for images
    this.flipped = !this.flipped
    if (this.flipped) {
      this.html.innerText = this.image
      this.html.className = "card flipped"
    } else {
      this.html.innerText = ""
      this.html.className = "card unflipped"
    }
  }

}
