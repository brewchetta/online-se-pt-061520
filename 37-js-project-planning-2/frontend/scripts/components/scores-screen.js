class ScoresScreen {
  constructor() {
    main.innerHTML = ""

    this.scoresContainer = document.createElement('ol')

    api.getUsers()
    .then(this.renderScores)
    .catch(() => console.log("Error! Error Will Robinson!"))

    main.append(this.scoresContainer)
    this.renderNewGameButton()
  }

  // RENDER METHODS //

  renderScores = users => {
    users.forEach(user => {
      const li = document.createElement('li')
      li.className = "user-listing"
      user.scores.forEach(score => {
        const p = document.createElement('p')
        p.className = "score-listing"
        p.innerText = `${user.name} - Time: ${score.time_in_seconds} seconds - Wrong Guesses: ${score.guesses} - Cards: ${score.num_cards}`
        li.append(p)
      })
      this.scoresContainer.append(li)
    })
  }

  renderNewGameButton = () => {
    const newGameButton = document.createElement('button')
    newGameButton.innerText = "New Game"
    newGameButton.addEventListener("click", this.handleClickNewGame)
    main.append(newGameButton)
  }

  // EVENT LISTENERS //

  handleClickNewGame = () => {
    new Game
  }
}
