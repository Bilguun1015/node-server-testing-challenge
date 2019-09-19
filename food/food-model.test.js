const Food = require('./food-model.js');
const db = require('../database/db-config.js');

describe('food model', () => {
    beforeEach(async () => {
        await db('food').truncate();
    });

    it('should set environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('insert', () => {
        it('should insert food name into the db', async () => {
            await Food.insert({name: 'Tsuivan'});
            await Food.insert({name: 'Buuz'});
            let food = await db('food');
            expect(food).toHaveLength(2);
        });
        it('should insert and the hobbit into the db', async () => {
            const [id1] = await Food.insert({name: 'Tsuivan'});
            const [id2] = await Food.insert({name: 'Buuz'});

            let food1 = await db('food').where({id : id1}).first();
            let food2 = await db('food').where({id : id2}).first();

            expect(food1.name).toBe('Tsuivan');
            expect(food2.name).toBe('Buuz');
        });
    });

    desribe('delete', () => {
        
    })
});