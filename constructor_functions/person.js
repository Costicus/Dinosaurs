// const Pet = require('./pet')

const Person = function (name, pet) {
    this.name = name
    this.pet = pet
}

// const rover = new Pet("Rover", "dog")
// const charles = new Person("Charles", rover)

Person.prototype.greet = function() {
    console.log(`Hi! My name is ${this.name}`)
}

Person.prototype.feedPet = function(food) {
    console.log(`${this.name} fed ${this.pet.name} a ${food}`)
    this.pet.eat(food)
}

module.exports = Person

// - Assign a pet property in the `Person` constructor via a parameter
// - Add a `feedPet` method to `Person.prototype` which:
// 	- Accepts a `food` parameter
// 	- Outputs a string containing the person and pet's names and the food. For example: `'Shaggy Rogers fed Scooby Doo a Scooby Snack'`
// 	- Invokes the pet's `eat` method and passes the `food` to it



// const shaggy = new Person("Shaggy")
// const charles = new Person("Charles")

// console.log(Object.getPrototypeOf(shaggy))

// shaggy.greet()
// console.log(shaggy)
// charles.greet()
// console.log(charles)