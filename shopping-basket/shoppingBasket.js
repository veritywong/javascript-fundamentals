class ShoppingBasket {
    constructor() {
        this.basket = [];
    }

    getTotalPrice() {
        let total = 0;
        this.basket.forEach((candy) => {
            total += candy.getPrice();
        })
        return total;
    }

    addItem(candy) {
        this.basket.push(candy); 
    }
}

module.exports = ShoppingBasket;