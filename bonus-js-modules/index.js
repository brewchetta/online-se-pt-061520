import { fnOne } from "./module-one.js"
import { fnTwo, fnThree } from "./module-two.js"
import FancyClass from "./fancy-class.js"

console.log("loaded things...")

fnOne()
fnTwo()
fnThree()

new FancyClass

console.log("All functions have run!")

document.querySelector('h1').innerText = "OMG MODULES"
