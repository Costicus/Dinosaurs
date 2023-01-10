const Taxi = function (manufacturer, model, driver) {
    this.manufacturer = manufacturer
    this.model = model
    this.driver = driver
    this.passengers = []
}

Taxi.prototype.numberOfPassengers = function() {
    return this.passengers.length
}

Taxi.prototype.addPassenger = function(passenger) {
    this.passengers.push(passenger)
}

Taxi.prototype.removePassengerByName = function(passenger) {
    this.passengers.pop(passenger)
}

Taxi.prototype.removeAllPassengers = function() {
    this.passengers.length = 0
}

module.exports = Taxi