class Candies {

    constructor(candies) {
        this.candies = candies;
        this.candies.name = candies.name;
    }

    searchCandies(firstLetters, maxPrice) {
        return this.candies.filter((filteredCandies) => {
            if (filteredCandies.name.startsWith(firstLetters) && filteredCandies.price < maxPrice) {
                return filteredCandies.name;
        } 
        }).map((candy) => {
            return candy.name;
        });
    }
}


module.exports = Candies;