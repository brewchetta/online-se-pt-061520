const someConstant = "I am a constant"
let someVariable = "I can be reassigned to anything"

// outer area / global scope
let myVar = "Outer scope"
{
  // middle block
  {
    // inner block
    // var myVar = "Inner scope"
    console.log(myVar)
  }
}

// console.log(myVar)
// var myVar = "I am a variable"
