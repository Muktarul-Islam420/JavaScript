class Parent{
    constructor(){
        this.fatherName = "Rajib hawladar";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}


const Baby = new Child('Anowar');
const Baby2 = new Child('Ajaira');

console.log(Baby, Baby2);
