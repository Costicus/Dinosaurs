const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    dinosaur = new Dinosaur("dinosaur", "herbivore", 100)
    dinosaur2 = new Dinosaur("dinosaur2", "herbivore", 10)
    park = new Park("Jurassic Park", 10)
  })

  it('should have a name', function() {
    const actual = park.name
    assert.strictEqual(actual, "Jurassic Park")
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice
    assert.strictEqual(actual, 10)
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur)
    const actual = park.numberOfDinosaurs()
    assert.strictEqual(actual, 1)

  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur2)
    park.removeDinosaurByName(dinosaur2)
    const expected = [dinosaur]
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, expected)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur2)
    const actual = park.findHighestVisitors()
    assert.strictEqual(actual, dinosaur)
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
