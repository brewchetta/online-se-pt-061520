class VictoryScreen {
  constructor(gameInfo) {
    this.gameInfo = gameInfo
    main.innerHTML = ""

    this.html = document.createElement('div')
    this.html.id = "victory-container"

    this.renderVictoryMessage()

    this.renderForm()

    this.renderButtons()

    main.append(this.html)
  }

  // RENDER METHODS //

  renderVictoryMessage = () => {
    const victoryMessage = document.createElement('p')
    victoryMessage.innerText = `Congratulations! You finished the game with ${this.gameInfo.badGuesses} wrong guesses in ${this.gameInfo.timer} seconds! Let's post your score!`
    this.html.append(victoryMessage)
  }

  renderForm = () => {
    const nameForm = document.createElement('form')

    const nameLabel = document.createElement('label')
    nameLabel.innerText = "Name: "

    this.nameInput = document.createElement('input')
    this.nameInput.type = "text"

    const submitButton = document.createElement('input')
    submitButton.type = "submit"
    submitButton.value = "Post Your Score!"

    nameForm.append(nameLabel, this.nameInput, submitButton)
    this.html.append(nameForm)

    nameForm.addEventListener("submit", this.handleSubmit)
  }

  renderButtons = () => {
    const seeScoresButton = document.createElement('button')
    seeScoresButton.innerText = "See All Scores"
    seeScoresButton.addEventListener("click", this.handleClickSeeScores)

    const newGameButton = document.createElement('button')
    newGameButton.innerText = "New Game"
    newGameButton.addEventListener("click", this.handleClickNewGame)

    this.html.append(newGameButton, seeScoresButton)
  }

  // EVENT LISTENERS //

  handleSubmit = event => {
    event.preventDefault()
    api.postUserScore({
      user: { name: this.nameInput.value },
      score: { time_in_seconds: this.gameInfo.timer, num_cards: 8, guesses: this.gameInfo.badGuesses }
    })
    event.target.remove()
  }

  handleClickSeeScores = () => {
    new ScoresScreen
  }

  handleClickNewGame = () => {
    new Game
  }
}
