const add = require('../lib/add')

describe('add', () => {   
    it('adds 2 and 2', () => {
        let result = add(2, 2)

        expect(result).toBe(4)
    });
    it('adds 3 and 5', () => {
        let result = add(3, 5)
        expect(result).toBe(8)
    });
});