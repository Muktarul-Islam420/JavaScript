class Tiger{
    #speed = 100;             //private
    location = 'Sundorbon'   //Public
    constructor(name){
        this.name = name;
    }
    run(){
        console.log(`I am ${this.name}. I am running ${this.#speed} mph. I am live in ${this.location}`);
    }
}
const tiger = new Tiger('Royal Bangle');
tiger.run();

