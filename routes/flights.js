var express = require('express');
var router = express.Router();
let flightCtrl = require('../controllers/flights.js')

/* GET users listing. */
router.get('/', flightCtrl.index)
router.get('/add', flightCtrl.addFlightPage)
router.post('/add', flightCtrl.create)
router.get('/:id', flightCtrl.show)
router.post('/:id/addDestination', flightCtrl.addDestination)
router.get('/:id/tickets/new', flightCtrl.newTicketPage)
router.post('/:id/tickets/new/add', flightCtrl.addTicket)


module.exports = router;
