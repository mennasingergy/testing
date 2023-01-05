jest.mock("axios");
const axios = require('axios');
const reservationService2 = require('./reservation.service');
const mockReservationApiStub = require('./reservation.api.stub.json');

beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
});

describe('Reservation API', () => {
    test('Reservation', async () => {
        axios.get.mockResolvedValueOnce(mockReservationApiStub);
        const ticket = { id: '1a44ff66-a942-48f4-a9c1-77184c4469cb' };
        const results = await reservationService2.getReservedTickets(ticket);
        expect(results).toEqual(mockReservationApiStub.data);
    });
});