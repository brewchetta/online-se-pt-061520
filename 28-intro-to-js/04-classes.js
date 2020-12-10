class SomeClass {

  static classVariable = "I am a class variable"

  constructor(name) {
    this.name = name
  }

  instanceMethod() {
    return `I am an instance method for ${this.name}`
  }

  static classMethod() {
    return `I am a class method for ${this.name}`
  }

}

let aClass = new SomeClass("a new class")

console.log(SomeClass.classMethod())
