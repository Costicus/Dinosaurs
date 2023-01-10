// 1. Create a new file - pet.js
// 2. Create a Pet constructor
// 2. Assign values to the following properties in your Pet constructor via parameters:
// name
// species
// 3. Add an eat method to your Pet's prototype. This method should accept a food parameter and output a string containing the name property and the food that was eaten. For example: 'Scooby Doo ate a Scooby Snack'.

const Pet = function(name, species) {
    this.name = name
    this.species = species
}

Pet.prototype.eat = function(food) {
    console.log(`${this.name} ate ${food}, good boy!`)
}

module.exports = Pet

// const rover = new Pet("Rover", "dog")
// console.log(rover)
// rover.eat("a cat")