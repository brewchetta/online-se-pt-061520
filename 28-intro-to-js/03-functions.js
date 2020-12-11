function badFunc() {
  "I will not get returned"
}

function someFunc() {
  return "I will get returned"
}

someFunc // <- this will just be the function itself, uncalled

someFunc() // <- this will actually call the function
