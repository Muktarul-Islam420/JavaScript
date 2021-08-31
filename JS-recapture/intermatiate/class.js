class Brand{
    constructor(bId, bName) {
        this.id = bId;
        this.name = bName;
    }
}

const brand = new Brand(1, 'Intel');
const brand1 = new Brand(2, 'Samsung');
const brand2 = new Brand(5, 'Apple');

console.log(brand, brand1, brand2);