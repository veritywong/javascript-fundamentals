const multiply = require('./multiply')

describe('multiplies', () => {   
    it('multiplies 2 and 2', () => {
        let result = multiply(2, 2)

        expect(result).toBe(4)
    });
    it('multiplies 3 and 5', () => {
        let result = multiply(3, 5)
        expect(result).toBe(15)
    })
});