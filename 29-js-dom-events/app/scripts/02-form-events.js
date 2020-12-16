const catForm = document.querySelector('#do-not-submit')
const submitButton = document.querySelectorAll('input')[1]
const imagesCattainer = document.querySelector('#images-cattainer')

catForm.addEventListener("submit", function(event) {
  event.preventDefault()
  const newImg = document.createElement('img')
  const url = document.querySelector('#text-field').value
  newImg.src = url
  imagesCattainer.appendChild(newImg)
  document.querySelector('#text-field').value = ""
})
