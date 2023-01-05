const api = require('axios')
const RESERVATION_API = ('https://reservation-new.vercel.app/api/reservation')


export default async function getReservedTickets(id) {
    return api.get(`${RESERVATION_API}/${id}`)
        .then(({ data }) => data)
        .catch((e) => null);
}
export default async function createNewReservation() {
    return api.post(`${RESERVATION_API}`, data).then(({ data }) => data)
        .catch((e) => null);
}

// module.exports = {
//     getReservedTickets,
//     createNewReservation
// };