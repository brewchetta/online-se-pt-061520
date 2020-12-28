let games
const URL = `http://localhost:3000`
const headers = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json'
}

const parseJSON = res => res.json()

const highscoreList = document.querySelector(`#high-score-list`)
const highscoreForm = document.querySelector(`#high-score-form`)

// initial load of games
fetch('http://localhost:3000/games')
.then(parseJSON)
.then(res => {
  games = res
  games.forEach(loadGame)
})

// given a game will load all that game's highscores
function loadGame(game) {
  game.highscores.forEach(function(highscore){
    const li = document.createElement('li')
    li.innerText = `${game.title} - ${highscore.user_initials} - ${highscore.score}`
    highscoreList.append(li)
  })
}

// handles adding a new high score
function handleSubmit(event) {
  event.preventDefault()
  const title = document.querySelector('select').value
  const body = {
    title,
    highscore: {
      score: document.querySelectorAll('input')[0].value,
      user_initials: document.querySelectorAll('input')[1].value
    }
  }
  postHighscore(body, title)
}

// actually posts the highscore and then renders it on the page with the return information
function postHighscore(body, title) {
  fetch(`${URL}/highscores`, {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  })
  .then(parseJSON)
  .then(function(highscore) {
    if (highscore.status === 200) {
      const li = document.createElement('li')
      li.innerText = `${title} - ${highscore.user_initials} - ${highscore.score}`
      highscoreList.append(li)
    }
  })
}

highscoreForm.addEventListener("submit", handleSubmit)
