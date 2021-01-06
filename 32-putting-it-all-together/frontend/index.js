const highscoreList = document.querySelector(`#high-score-list`)
const highscoreForm = document.querySelector(`#high-score-form`)
const gameInput = highscoreForm.children[0]
const scoreInput = highscoreForm.children[1]
const initialsInput = highscoreForm.children[2]

const URL = `http://localhost:3000`
const headers = { 'Accepts': 'application/json', 'Content-Type': 'application/json' }

// parses out json
function parseJSON(response) {
  return response.json()
}

// create an li and append it to the list
function loadHighscore(highscore, title) {
  const li = document.createElement('li')
  li.innerText = `${title} - ${highscore.user_initials} - ${highscore.score}`
  highscoreList.append(li)
}

// loads all highscores from their games
function loadHighscores() {
  fetch(URL + `/games`)
  .then(parseJSON)
  .then(games => {
    games.forEach(game => {
      game.highscores.forEach(highscore => {
        loadHighscore(highscore, game.title)
      })
    })
  })
  // .then(function(games) {
  //   games.forEach(game => {
  //     game.highscores.forEach(highscore => {
  //       loadHighscore(highscore, game.title)
  //     })
  //   })
  // })
}

// post a new highscore
function postScore(event) {
  event.preventDefault()
  const body = {
    title: gameInput.value,
    highscore: {
      score: scoreInput.value,
      user_initials: initialsInput.value
    }
  }
  fetch(URL + `/highscores`, {
    method: `POST`,
    headers,
    body: JSON.stringify(body)
  })
  // pessimistic rendering
  // we wait until the response comes back to post it
  .then(parseJSON)
  .then(highscore => {
    loadHighscore(highscore, body.title)
  })

  // optimistic rendering
  // we don't wait for the response, we immediately add the new highscore to the list
  // loadHighscore(body.highscore, body.title)
}

loadHighscores()

highscoreForm.addEventListener('submit', postScore)
