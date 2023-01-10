const Park = function (name, ticketPrice) {
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurs = []
}

Park.prototype.numberOfDinosaurs = function() {
    return this.dinosaurs.length
}

Park.prototype.addDinosaur = function(dinosaur) {
    this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaurByName = function(dinosaur) {
    this.dinosaurs.pop(dinosaur)
}

Park.prototype.findHighestVisitors = function() {
    let highestDinosaur = this.dinosaurs[0]
    for (let i = 1; i < park.numberOfDinosaurs(); i++) {
        if (this.dinosaurs[i].guestsAttractedPerDay > highestDinosaur.guestsAttractedPerDay) {
            highestDinosaur = this.dinosaurs[i]
        }
      }
    return highestDinosaur
}

Park.prototype.ShowAllSpecies = function(species) {
    list = []
    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {
            list.push(dinosaur)
        }
    }
    return list
}

module.exports = Park;
