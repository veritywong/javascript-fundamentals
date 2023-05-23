const fizzbuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
    it('returns fizz when divisible by 3', () => {
        let result = fizzbuzz(3)

        expect(result).toBe('fizz')
    })
    it('returns buzz when divisible by 5', () => {
        let result = fizzbuzz(5)

        expect(result).toBe('buzz')
    })
    it('returns fizzbuzz when divisible by 3 & 5', () => {
        let result = fizzbuzz(15)

        expect(result).toBe('fizzbuzz')
    })
    it('returns number', () => {
        let result = fizzbuzz(2)

        expect(result).toBe(2)
    })
});