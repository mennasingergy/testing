const express = require('express');
const supertest = require('supertest');
jest.mock('express');

describe("mock api endpoint", () => {

    test("mocking get endpoint", async () => {
        const id = '1a44ff66-a942-48f4-a9c1-77184c4469cb'
        const data = {
            data: {
                id: "1a44ff66-a942-48f4-a9c1-77184c4469cb", email: "menna@gmail.com",
                matchNumber: 37, category: 1, quantity: 2, price: 75
            }
        }
        await supertest().get(`/api/reservation/${id}`).expect(data)

        //arrange
        // const mockResponse = {
        //     data: {
        //         id: "1a44ff66-a942-48f4-a9c1-77184c4469cb", email: "menna@gmail.com",
        //         matchNumber: 37, category: 1, quantity: 2, price: 75
        //     }
        // }

        // const index = require('/api/index.js')
        // index.getReservedTicket()

    })
})