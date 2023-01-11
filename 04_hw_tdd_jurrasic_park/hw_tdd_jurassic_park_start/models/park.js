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

Park.prototype.calculateDailyVisitors = function() {
    total = 0
    for (const dinosaur of this.dinosaurs) {
        total += dinosaur.guestsAttractedPerDay
    }
    return total
}

Park.prototype.calculateYearlyVisitors = function() {
    dailyVisitors = park.calculateDailyVisitors()
    return dailyVisitors * 365
}

Park.prototype.calculateYearlyRevenue = function() {
    yearlyVisitors = park.calculateYearlyVisitors()
    return yearlyVisitors * this.ticketPrice
}

Park.prototype.removeBySpecies = function(species) {
    for (let i = this.dinosaurs.length - 1; i >= 0; i--) {
        if (this.dinosaurs[i].species === species) {
            this.dinosaurs.splice(i, 1)
        }
    }
    return this.dinosaurs
}

module.exports = Park;
