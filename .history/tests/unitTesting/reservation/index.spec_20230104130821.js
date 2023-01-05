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
describe('trial', () => {
    test('bismillah', async () => {
        const id = '1a44ff66-a942-48f4-a9c1-77184c4469cb';
        await supertest().get(`/api/reservation/${id}`).expect(404)
    })
})
