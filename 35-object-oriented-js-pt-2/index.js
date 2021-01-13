// Monkey Patching //

Object.prototype.getPrototype = function() {
  return Object.getPrototypeOf(this)
}

// Robot Class //

class Robot {

  constructor(name, directive, catchphrase) {
    this.name = name
    this.directive = directive
    this.catchphrase = catchphrase
  }

  // When reading a name, converts it from binary into a normal string
  get name() {
    return binaryToString(this._name)
  }

  // When writing a name, converts it from a normal string into a binary
  set name(string) {
    this._name = stringToBinary(string)
  }

  // we can use setters and getters even with things that aren't normal attributes
  get profile() {
    return `Directive: ${this.directive} // Catchphrase: ${this.catchphrase}`
  }

}

// Robot Seed Data //

const terminator = new Robot("T-1000", "exterminate all humans", "I'll be back")
const c3po = new Robot("C3PO", "human cyborg relations", "we're doomed")

// Functions For Converting To And From Binary //

function stringToBinary(input) {
  var characters = input.split('');
  return characters.map(char => {
    const binary = char.charCodeAt(0).toString(2)
    const pad = Math.max(8 - binary.length, 0);
    return '0'.repeat(pad) + binary;
  }).join('');
}


function binaryToString(input) {
  let bytesLeft = input;
  let result = '';
  while (bytesLeft.length) {
    const byte = bytesLeft.substr(0, 8);
    bytesLeft = bytesLeft.substr(8);
    result += String.fromCharCode(parseInt(byte, 2));
  }
  return result;
}
