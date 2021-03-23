const URL = 'http://localhost:3000/'
const usersURL = URL + 'users'
const parseJSON = res => res.json()
const loginHeaders = {
  'Accepts': 'application/json',
  'Content-Type': 'application/json'
}

export function loginRequest(credentials) {
  return fetch(URL + 'login', {
    method: "POST",
    headers: loginHeaders,
    body: JSON.stringify(credentials)
  })
  .then(parseJSON)
}
