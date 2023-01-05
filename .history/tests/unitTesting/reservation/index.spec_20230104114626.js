const express = require('express');
jest.mock('express');

describe("mock api endpoint", () => {

    test("mocking get endpoint", () => {

        //arrange
        const mockResponse = {
            data: {
                id: "1a44ff66-a942-48f4-a9c1-77184c4469cb", email: "menna@gmail.com",
                matchNumber: 37, category: 1, quantity: 2, price: 75
            }
        }
        express.get.mockResponse
        const index = require('/api/index.js')
        index.getReservedTicket()

    })
})