export const getToken = () => {
  localStorage.getItem('jwt')
}

export const setToken = token => {
  localStorage.setItem('jwt')
}

export const clearToken = () => {
  localStorage.removeItem('jwt')
}
