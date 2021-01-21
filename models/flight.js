const mongoose = require('mongoose')
const Schema = mongoose.Schema

let destinationSchema = new Schema({
  airport: String,
  arrival: Date,
})

let flightSchema = new Schema({
  airline: String,
  airport: String,
  flightNo: Number,
  departs: Date,
  destinations: [destinationSchema],
})

let flightModel = mongoose.model('flight', flightSchema)

module.exports = {
    flightModel,
}