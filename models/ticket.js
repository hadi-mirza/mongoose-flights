const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ticketSchema = new Schema ({
    seat: {type: String, match: /[A-F][1-9]\d?/},
    price: Number,
    flight: [
        {
            type: Schema.Types.ObjectId, 
            ref: 'Flight'
        }
        ],
})

let ticketModel = mongoose.model('ticket', ticketSchema)

module.exports = {
    ticketModel,
}