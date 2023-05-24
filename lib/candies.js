class Candies {

    constructor(candies) {
        this.candies = candies;

    }

    searchCandies(firstLetters, maxPrice) {
        return this.candies.filter((filteredCandies) => {
            if (filteredCandies.name.toLowerCase().startsWith(firstLetters.toLowerCase()) && filteredCandies.price < maxPrice) {
                return filteredCandies.name;
        } 
        }).map((candy) => {
            return candy.name;
        });
    }
}


module.exports = Candies;