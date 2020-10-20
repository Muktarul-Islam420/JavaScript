class Animal{
    static category = "Tiger";
    location = "Dhaka"
    constructor(name,speed){
        this.name = name;
        this.speed = speed;
    }
    static compare(animal1,animal2){
        if(animal1.speed >animal2.speed){
            return `${animal1.name} is faster than ${animal2.name}`
        }
        return `${animal2.name} is faster than ${animal1.name}`
    }
}
const myAnimal = new Animal('Wolf', 1200)
const myCat = new Animal('Cat', 1100)
// console.log(Animal.category)
// console.log(Animal.location)
// console.log(myAnimal.category)
// console.log(myAnimal.location)

console.log(Animal.compare(myAnimal,myCat));
