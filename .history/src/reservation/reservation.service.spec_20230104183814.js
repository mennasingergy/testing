jest.mock("axios");
const axios = require('axios');
const reservationService = require('./reservation.service');
const mockReservationApiStub = require('./reservation.api.stub.json');

jest.mock("axios")

beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
});

describe('Reservation API', () => {
    test('Reservation', async () => {
        axios.get.mockResolvedValueOnce(mockReservationApiStub);
        const ticket = { id: 'd86d3b54-fdc1-414d-96dd-d3dfd33fc74c' };
        const results = await reservationService.getReservedTickets(ticket);
        expect(results).toEqual(mockReservationApiStub.data);
    });
});