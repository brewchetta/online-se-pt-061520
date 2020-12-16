// document.addEventListener("DOMContentLoaded", function() {

  const button1 = document.getElementById('button-1')
  const button2 = document.getElementById('button-2')

  button1.addEventListener("click", function(event) {
    const images = Array.from(document.getElementsByTagName('img'))
    images.forEach(function(img) {
      // console.log(img)
      img.style.animation = "rotate 5s infinite linear"
    })
  })

  button2.addEventListener("click", function(event) {
    const images = Array.from(document.getElementsByTagName('img'))
    images.forEach(function(img) {
      img.style.animation = ""
    })
  })

// })
