jest.mock("axios");
const axios = require('axios');
const reservationService2 = require('./reservation.service');
const mockReservationApiStub = require('./reservation.api.stub.json');
const reservationService = require('./reservation2.service');
const mockReservationApiStub2 = require('./reservation2.api.stub.json');



beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
});

describe('Reservation API', () => {
    test('Reservation get endpoint', async () => {
        axios.get.mockResolvedValueOnce(mockReservationApiStub);
        const ticket = { id: '1a44ff66-a942-48f4-a9c1-77184c4469cb' };
        const results = await reservationService2.getReservedTickets(ticket);
        expect(results).toEqual(mockReservationApiStub.data);
    });
    test('Reservation post endpoint', async () => {
        axios.post.mockResolvedValueOnce(mockReservationApiStub2);
        // const ticket = { id: '1a44ff66-a942-48f4-a9c1-77184c4469cb' };
        const results = await reservationService.createNewReservation();
        expect(results).toEqual(mockReservationApiStub2.data);
    });

});

