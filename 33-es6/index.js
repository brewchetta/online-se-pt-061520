// default argument
function defaultArgs(a = 1, b = 2) {
  console.log(a)
  console.log(b)
}

// arguments rest parameter
function restArgs(previousThing, ...things) {
  console.log("Previous Thing: ", previousThing)
  things.forEach(thing => {
    console.log(thing)
  })
}

// spread operator

const object = {
  name: "Object 1",
  description: "This is an object like OMG",
  rating: 2
}

const object2 = {...object}
object === object2 // false

// assign key / value with variable

const number = 1
const string = "Yay I'm a string"

const objectTwo = {
  id: 1,
  number,
  string
}

// destructure arguments

function getObjectName({name, rating}) {
  console.log(rating);
  return name
}

function printCoordinates([x, y]) {
  console.log("x", x)
  console.log("y", y)
}

// destructure variable assignments

const array = [100,200,300]
const [one, two, three] = array

// arrow functions

const myArrowFunction = () => "I am an arrow function!"

const onePlusOne = () => 1 + 1
