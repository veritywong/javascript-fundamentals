const searchCandies = require('../lib/candiesV2')

describe('searchCandies', () => {
    it('returns Mars and Maltesers', () => {
        
        expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ])
    });

    it('returns only Mars', () => {
        expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ])
    });

    it('returns three S items', () => {
        expect(searchCandies('S', 10)).toEqual([ 'Skitties', 
                                                  'Skittles', 
                                                  'Starburst' ])
    });

    it('returns two S items', () => {
        expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ])
    });

    it('returns Mars and Maltesers', () => {
        expect(searchCandies('ma', 10)).toEqual([ 'Mars', 'Maltesers' ])
    });

});