class PenDrive{
    constructor(capacity,color,price){
        this.capacity = capacity;
        this.color = color;
        this.price = price;
    }
}

const first = new PenDrive('64GB','deepPink','9000TK');
console.log(first);

function Laptop(capacity,color,price){
    this.capacity = capacity;
    this.color = color;
    this.price = price;
}

const Asus = new Laptop('2TB','deepPink','10000TK')
console.log(Asus);