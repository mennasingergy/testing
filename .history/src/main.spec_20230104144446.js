const request = require('supertest');
const main = require('./main');
const mockReservationApiStub = require('./reservation/reservation.api.stub.json');

const BASE_URL = 'http://localhost:3000'

// Mocks the weather service for all tests in this file
jest.mock('./reservation/reservation.service', () => ({
    getReservedTickets: jest.fn((id) => mockReservationApiStub.data),
}));


// Import the mocked methods so we can call them and assert the mock response is returned
const { getReservedTickets } = require('./reservation/reservation.service');

// beforeEach(() => {
//     getCountryInfo.mockImplementation((location) => mockCountryApiStub.data[0]);
// });

describe('Main', () => {
    // Weather Endpoint
    test('Expected Reservation Response', async () => {
        const response = await request(BASE_URL).get('/reservation?id=d86d3b54-fdc1-414d-96dd-d3dfd33fc74c')
        expect(response.body).toEqual(mockReservationApiStub.data);
        expect(getReservedTickets).toHaveBeenCalled();
    });
    test('Incorrect Reservation Arguments', async () => {
        const response = await request(BASE_URL).get('/reservation?matchNumber=d86d3b54-fdc1-414d-96dd-d3dfd33fc74c')
        expect(response.error.text).toContain("Expected id argument");
    });
    test('No Reservation Response', async () => {
        getReservedTickets.mockImplementationOnce((id) => null);
        const response = await request(BASE_URL).get('/reservation?id=d34566-fgc2-478f-86ff-d3dfd33fc74c')
        expect(response.error.text).toContain("Could not process request");
    });

    // Country Info Endpoint
    test('Expected Country Info Response', async () => {
        const response = await request(BASE_URL).get('/info?country=TR')
        expect(response.body).toEqual(mockCountryApiStub.data[0]);
        expect(getCountryInfo).toHaveBeenCalled();
    });
    test('Incorrect Country Arguments', async () => {
        const response = await request(BASE_URL).get('/info?code=EG')
        expect(response.error.text).toContain("Expected country code arguments");
    });
    test('Incorrect Country Code Length', async () => {
        const response = await request(BASE_URL).get('/info?country=ZZZ')
        expect(response.error.text).toContain("Country must be an ISO alpha-2 code");
    });
    test('No Country Info Response', async () => {
        getCountryInfo.mockImplementation((location) => null);
        const response = await request(BASE_URL).get('/info?country=EG')
        expect(response.error.text).toContain("Could not process request");
    });

});