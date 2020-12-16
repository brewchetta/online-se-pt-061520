const cat = document.querySelector('#cat-square')
let fromRight = 100
let fromTop = 100

document.addEventListener("keyup", function(event) {
  // console.log(event)
  switch (event.keyCode) {
    case 38:
      // goes up
      fromTop -= 10
      cat.style.top = fromTop + "px"
      break;
    case 40:
      // goes down
      fromTop += 10
      cat.style.top = fromTop + "px"
      break;
    case 37:
      // goes left
      fromRight += 10
      cat.style.right = fromRight + "px"
      break;
    case 39:
      // goes right
      fromRight -= 10
      cat.style.right = fromRight + "px"
      break;
  }

  // if (event.keycode === 38) {
  //   // do stuff for going up
  // } else if (event.keycode === 40) {
  //   // go down
  // } else if (event.keycode === 37) {
  //   // go left
  // } else if (event.keycode === 39) {
  //   // go right
  // }
})

// arrow up 38
// arrow down 40
// arrow left 37
// arrow right 39
