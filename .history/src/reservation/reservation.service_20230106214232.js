const api = require('axios')
const RESERVATION_API = ('https://reservation-new.vercel.app/api/reservation')
const mockReservationApiStub2 = require('./reservation2.api.stub.json');



async function getReservedTickets(id) {
    return api.get(`${RESERVATION_API}/${id}`)
        .then(({ data }) => data)
        .catch((e) => null);
}
async function createNewReservation() {

    return api.post(`${RESERVATION_API}`, mockReservationApiStub2).then(({ data }) => mockReservationApiStub2.data)
        .catch((e) => null);
}

module.exports = {
    getReservedTickets,
    createNewReservation
};