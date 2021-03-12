const BACKEND_URL = 'http://localhost:3000/api/v1/'
const headers = {'Content-Type': 'application/json', 'Accepts': 'application/json'}
const parseJSON = res => res.json()

export const fetchLogin = credentials => {
  return fetch(BACKEND_URL + 'auth', {
    method: 'POST',
    headers,
    body: JSON.stringify(credentials)
  })
  .then(parseJSON)
}

export fetch(BACKEND_URL + 'users', {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('jwt')}`
  }
})
.then(parseJSON)
