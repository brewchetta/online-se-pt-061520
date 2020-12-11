class SomeClass {

  constructor(name) {
    this.name = name
  }

  instanceMethod() {
    return `I am an intance method for ${this.name}`
  }

  static classVar = "I am a class var"

  static classMethod() {
    return `I am a class method`
  }

}
