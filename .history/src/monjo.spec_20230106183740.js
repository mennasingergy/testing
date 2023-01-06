const { MongoClient } = require('mongodb');

describe('insert', () => {
    let connection;
    let db;

    beforeAll(async () => {
        connection = await MongoClient.connect('mongodb+srv://singergy:NoorandMenna@cluster0.spx7d20.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        db = await connection.db('Fifa22');
    });

    afterAll(async () => {
        await connection.close();
    });

    it('should insert a doc into collection', async () => {
        const reservation = db.collection('Reservation');

        const mockReservation = { id: '798798798798', matchNumber: 37 };
        await reservation.insertOne(mockReservation);

        const insertedTicket = await reservation.findOne({ id: '798798798798' });
        expect(insertedTicket).toEqual(mockReservation);
    });
});