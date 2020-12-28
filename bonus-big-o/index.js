// get elements
const runtimeText = document.getElementById('runtime-text')
const functionDisplay = document.getElementById('function-display')
const graphDisplay = document.getElementById('graph-display')
const runFunctionButton = document.getElementById('run-function-button')
const navbar = document.querySelector('nav')

// build an array and object with 100 values
const array = []
const object = {}
for (var i = 1; i <= 100; i++) {
  array.push(i)
  object[i] = i
}

// time explanation objects

const linear = {
  name: "linear",
  src: "https://i.ytimg.com/vi/OMInLBKYAWg/hqdefault.jpg",
  text: "The time it takes grows consistently with the number of items",
  functionText: `function() {<br>
    &nbsp;for (let i = 0; i < array.length; i++) {<br>
      &nbsp;&nbsp;console.log(i)<br>
    &nbsp;}<br>
  }`,
  functionRun: function() {
    for (let i = 0; i < array.length; i++) {
      console.log(`Ran ${i + 1} times`)
    }
  }
}

const quadratic = {
  name: "quadratic",
  src: "https://i.ytimg.com/vi/mIjuDg8ky4U/hqdefault.jpg",
  text: "The time it takes grows exponentially with the number of items",
  functionText: `function() {<br>
    &nbsp;let k = 0<br>
    &nbsp;for (let i = 0; i < array.length; i++) {<br>
      &nbsp;&nbsp;for (let j = 0; j < array.length; j++) {<br>
        &nbsp;&nbsp;&nbsp;k++<br>
        &nbsp;&nbsp;&nbsp;console.log(k)<br>
      &nbsp;&nbsp;}<br>
    &nbsp;}<br>
  }`,
  functionRun: function() {
    let k = 0
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        k++
        console.log(`Ran ${k} times`)
      }
    }
  }
}

const logarithmic = {
  name: "logarithmic",
  src: "https://i.ytimg.com/vi/Hatl0qrT0bI/sddefault.jpg",
  text: "The time it takes grows exponentially faster with each item",
  functionText: `function() {<br>
    &nbsp;let k = 0<br>
    &nbsp;function testMidpoint(array, value) {<br>
      &nbsp;&nbsp;k++<br>
      &nbsp;&nbsp;console.log(k)<br>
      &nbsp;&nbsp;const midpoint = array[Math.floor(array.length / 2)]<br>
      &nbsp;&nbsp;if (array.length === 1 && midpoint !== value) {<br>
        &nbsp;&nbsp;&nbsp;return false<br>
      &nbsp;&nbsp;} else if (midpoint === value) {<br>
        &nbsp;&nbsp;&nbsp;return value<br>
      &nbsp;&nbsp;} else if (value > midpoint) {<br>
        &nbsp;&nbsp;&nbsp;console.log(array)<br>
        &nbsp;&nbsp;&nbsp;return testMidpoint(array.slice(Math.floor(array.length / 2), array.length), value)<br>
      &nbsp;&nbsp;} else if (value < midpoint) {<br>
        &nbsp;&nbsp;&nbsp;console.log(array)<br>
        &nbsp;&nbsp;&nbsp;return testMidpoint(array.slice(0, Math.floor(array.length / 2)), value)<br>
      &nbsp;&nbsp;}<br>
    &nbsp;}<br>
    <br>
    &nbsp;testMidpoint(array, 1000)<br>
  }`,
  functionRun: function() {
    let k = 0
    function testMidpoint(array, value) {
      k++
      console.log(`Ran ${k} times`)
      const midpoint = array[Math.floor(array.length / 2)]
      if (array.length === 1 && midpoint !== value) {
        return false
      } else if (midpoint === value) {
        return value
      } else if (value > midpoint) {
        console.log(array)
        return testMidpoint(array.slice(Math.floor(array.length / 2), array.length), value)
      } else if (value < midpoint) {
        console.log(array)
        return testMidpoint(array.slice(0, Math.floor(array.length / 2)), value)
      }
    }

    testMidpoint(array, 1000)
  }
}

const constant = {
  name: "constant",
  src: "https://www.101computing.net/wp/wp-content/uploads/Big-O-Notation-Constant-Algorithm.png",
  text: "The time it takes is always the same no matter how many items",
  functionText: `function(i) {<br>
    &nbsp;console.log(object[i])<br>
  }`,
  functionRun: function() {
    console.log(`Ran 1 times`)
    return object[99]
  }
}

// collate run time objects into a single object
const runTimes = {linear, quadratic, logarithmic, constant}

// declare currentTime for later
let currentTime

// callback to change the runtime and change the text
const selectNewRuntime = (event) => {
  currentTime = runTimes[event.target.name]
  if (currentTime) {
    runtimeText.innerText = currentTime.text
    functionDisplay.innerHTML = currentTime.functionText
    graphDisplay.src = currentTime.src
  }
}

// runs the current runtime's example function
const runFunction = () => {
  currentTime.functionRun()
}

// add event listeners
navbar.addEventListener("click", selectNewRuntime)
runFunctionButton.addEventListener("click", runFunction)
