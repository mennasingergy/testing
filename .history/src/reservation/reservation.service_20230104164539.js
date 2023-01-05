const api = require('axios')
const RESERVATION_API = ('https://reservation-new.vercel.app/api/reservation')


async function getReservedTickets(id) {
    return api.get(`${RESERVATION_API}/${id}`)
        .then(({ data }) => data)
        .catch((e) => null);
}
async function createNewUser() {
    return api.post().then(({ data }=> data))
}

module.exports = {
    getReservedTickets
};