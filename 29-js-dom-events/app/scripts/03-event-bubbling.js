const bubblingDiv = document.getElementById('bubbling-div')
const outerDiv = document.getElementById('outer-div')
const middleDiv = document.getElementById('middle-div')
const innerDiv = document.getElementById('inner-div')

seeBubblingAndCapturing(bubblingDiv)

function seeBubblingAndCapturing(parentElement) {
  for(let elem of parentElement.querySelectorAll('*')) {

    elem.addEventListener("click",
      function(event) {
        this.style.backgroundColor = 'blue'
        // alert(`Capturing: ${elem.id}\n event.target: ${event.target.id}`)
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
