// const express = require('express');
const supertest = require('supertest');
// jest.mock('express');
const { app } = require('../../../api/index')
// const index = require('/api/index')
// // import express from 'express';
// // import supertest from 'supertest';
// // import index from '/api/index';



// describe("mock api endpoint", () => {

//     test("mocking get endpoint", async () => {
//         const id = '1a44ff66-a942-48f4-a9c1-77184c4469cb'
//         const response = {
//             data: {
//                 id: "1a44ff66-a942-48f4-a9c1-77184c4469cb", email: "menna@gmail.com",
//                 matchNumber: 37, category: 1, quantity: 2, price: 75
//             }
//         }
//         await supertest(index).get(`/api/reservation/${id}`).expect(response)

//         //arrange
//         // const mockResponse = {
//         //     data: {
//         //         id: "1a44ff66-a942-48f4-a9c1-77184c4469cb", email: "menna@gmail.com",
//         //         matchNumber: 37, category: 1, quantity: 2, price: 75
//         //     }
//         // }

//         // const index = require('/api/index.js')
//         // index.getReservedTicket()

//     })
// })
beforeAll(() => {
    app.disconnect();
});

describe('trial', () => {
    test('bismillah', async () => {
        const id = '1a44ff66-a942-48f4-a9c1-77184c4469cb';
        const response =
        {
            "email": "menna@gmail.com",
            "matchNumber": 37,
            "tickets": {
                "category": 1,
                "quantity": 2,
                "price": 75
            },
            "card": {
                "number": "4242424242424242",
                "expirationMonth": 12,
                "expirationYear": 2024,
                "cvc": "123"
            }
        }
        await supertest(app).get(`/api/reservation/${id}`).expect(response)
    })
})


