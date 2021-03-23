const URL = 'http://localhost:3000/'
const usersURL = URL + 'users'

const parseJSON = res => res.json()

const authHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem('jwt')}`
})

const loginHeaders = {
  'Accepts': 'application/json',
  'Content-Type': 'application/json'
}

export function authRequest(credentials) {
  return fetch(URL + 'authenticate', {
    method: "POST",
    headers: loginHeaders,
    body: JSON.stringify(credentials)
  })
  .then(parseJSON)
}

export function profileRequest() {
  console.log(authHeaders())
  return fetch(URL + 'profile', {
    headers: authHeaders()
  })
  .then(parseJSON)
}
