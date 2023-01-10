const Pet = require('./pet')
const Person = require('./person')

// const johnny = new Person("Johnny")
// johnny.greet()

// const ronnieBarker = new Pet("Ronnie Barker", "Dog")
// ronnieBarker.eat("a cat")

const rover = new Pet("Rover", "dog")
const charles = new Person("Charles", rover)

charles.feedPet("steak")