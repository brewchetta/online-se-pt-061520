let catArray = []
const imgContainer = document.querySelector('#images-cattainer')
const loadButton = document.querySelector('#load-cats-button')
const newCatForm = document.querySelector('#new-cat-form')

const headers = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json'
}

function parseJSON(res) {
  return res.json()
}

function fetchCallback(data) {
  imgContainer.innerHTML = ""
  catArray = data
  catArray.forEach(cat => {
    const newImg = document.createElement('img')
    newImg.src = cat.img_url
    newImg.alt = cat.name
    imgContainer.append(newImg)
  })
}

function catchError(error) {
  console.log(error)
}

function loadCats(event) {
  fetch('http://localhost:3000/cats')
  .then(parseJSON)
  .then(fetchCallback)
  .catch(catchError)
}

function handleSubmit(event) {
  event.preventDefault()

  const newCat = {
    img_url: Array.from(event.target.children)[2].value,
    name: event.target.children[3].value
  }

  fetch('http://localhost:3000/cats', {

    method: 'POST',

    headers,

    body: JSON.stringify(newCat)

  })
  .then(parseJSON)
  .then(console.log)

}

loadButton.addEventListener('click', loadCats)

newCatForm.addEventListener('submit', handleSubmit)
