const express = require('express');
const reservationService = require('./reservation/reservation.service');
const getReservedTickets = require('./reservation/reservation.service')

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.listen(4000, async (req, res) => {
    console.log('HTTP Web Server Running On Port 4000');

    app.get('/reservation', async (req, res) => {
        const { id } = req.query;
        // Validate expected arguments were passed
        if (!id) {
            return res.status(400).send('Expected id argument');
        }
        const reservation = await reservationService.getReservedTickets(id);
        if (reservation) {
            return res.status(200).json(reservation);
        }
        return res.status(400).send('Could not process request');
    });

    app.post('/reservation', async (req, res) => {
        const reservation = await reservationService.createNewReservation();
        if (reservation) {
            return res.status(200).json({
                message: 'Ticket Purchase Successful',
                ...reservation,
            });
        }
        return res.status(400).send('Could not process request');
    })

});


