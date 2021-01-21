let flightsImport = require('../models/flight.js')
let ticketImport = require('../models/ticket.js')

function index(req,res,next) {
    flightsImport.flightModel.find({}, function(err,results) {
        res.render('allFlights', {results})
    })
}

function addFlightPage(req,res,next) {
    res.render('addFlight')
}

async function create(req,res,next) {

        flightsImport.flightModel.create({
        airline: req.body.airline,
        airport: req.body.airport,
        flightNo: parseInt(req.body.flightNo),
        departs: req.body.departs,
    }, function(err, result) {
        res.render('success')
    })
}

async function show(req,res,next) {
    let flight = await flightsImport.flightModel.findById(req.params.id)
    let ticket = await ticketImport.ticketModel.find({flight: flight.id})

    res.render('show', {flight,ticket})
}

async function addDestination(req,res) {
    let add = await flightsImport.flightModel.findById(req.params.id)

    add.destinations.push({
        airport: req.body.destAirport,
        arrival: req.body.destArrival,
    })
    add.save()
    res.redirect('back')
}

async function newTicketPage(req,res) {
    let flight = await flightsImport.flightModel.findById(req.params.id)
    let ticket = await ticketImport.ticketModel.find({flight: flight.id})

    res.render('addTicket', {flight,ticket})
}

async function addTicket(req,res) {
    let flight = await flightsImport.flightModel.findById(req.params.id)
    let ticket = await ticketImport.ticketModel.find({flight: flight.id})
    console.log(req.body.seat)
    console.log(req.body.price)

        ticketImport.ticketModel.create({
        seat: req.body.seat,
        price: req.body.price,
        flight: flight.id,
        })
    res.redirect('/flights/'+flight.id)
}

module.exports = {
    index,
    create,
    addFlightPage,
    show,
    addDestination,
    newTicketPage,
    addTicket,
}