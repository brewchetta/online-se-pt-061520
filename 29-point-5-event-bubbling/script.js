const bubbleParent = document.getElementById('button-parent')
const bubbleButton = document.getElementById('child-button')
const bubblingDiv = document.getElementById('bubbling-div')
const capturingDiv = document.getElementById('capturing-div')

handleClick(bubbleParent)
seeBubbling(bubblingDiv)
seeBubblingAndCapturing(capturingDiv)

function handleClick(element) {
  element.addEventListener("click", function(event) {
    alert(`${event.target.id} has been clicked!`)
    alert(`${this.id} has been clicked!`)
  })
}

function seeBubbling(parentElement) {
  for(let elem of parentElement.querySelectorAll('*')) {

    elem.addEventListener("click",
      function(event) {
        this.style.backgroundColor = 'blue'
        alert(`Bubbling: ${elem.id}\n event.target: ${event.target.id}`)
        this.style.backgroundColor = 'white'
      }
    );
  }
}

function seeBubblingAndCapturing(parentElement) {
  for(let elem of parentElement.querySelectorAll('*')) {

    elem.addEventListener("click",
      function(event) {
        if (this.style.backgroundColor !== 'blue') {
          this.style.backgroundColor = 'blue'
        } else {
          this.style.backgroundColor = 'white'
        }
        alert(`Capturing: ${elem.id}\n event.target: ${event.target.id}`)
      },
    true)

    elem.addEventListener("click",
      function(event) {
        this.style.backgroundColor = 'white'
        alert(`Bubbling: ${elem.id}\n event.target: ${event.target.id}`)
      }
    );
  }
}
