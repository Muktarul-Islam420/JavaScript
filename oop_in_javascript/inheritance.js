class smartDevices {
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    charging(){
        console.log('I am eating electrons ... they yummy');
    }
}

class Phone extends smartDevices{
    constructor(name,price,camera){
        super(name,price);
        this.camera = camera;
    }
}

class Laptop extends smartDevices{
    constructor(name,price,storage){
        super(name,price);
        this.storage = storage;
    }
}

const oPpo = new Phone('OPpo F17','17000Tk','64MP');
console.log(oPpo)
oPpo.charging();

const Dell = new Laptop('Del vivoBook','17000Tk','1TB');
Dell.charging();
console.log(Dell)
