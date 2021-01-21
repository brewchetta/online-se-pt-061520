class APIAdapter {

  constructor(port = 3000) {
    this.port = port
    this.url = `http://localhost:${port}`
  }

  // Helpers //

  parseJSON = res => res.json()

  headers = {"Accepts":"application/json", "Content-Type": "application/json"}

  // URL GETTERS //

  get usersURL() {
    return this.url + `/users`
  }

  get scoresURL() {
    return this.url + `/scores`
  }

  // GET //

  getUsers = () => fetch(this.usersURL).then(this.parseJSON)
  getUser = (userID) => fetch(this.usersURL + `/${userID}`).then(this.parseJSON)

  getScores = () => fetch(this.scoresURL).then(this.parseJSON)
  getScore = (scoreID) => fetch(this.scoresURL + `/${scoreID}`).then(this.parseJSON)

  // POST //

  postUser = body => fetch(this.usersURL, {
    method: "POST",
    headers: this.headers,
    body: JSON.stringify(body)
  }).then(this.parseJSON)

  // fetch post new score + user

}
