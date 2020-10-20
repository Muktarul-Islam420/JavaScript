class Animals {
    constructor(){

    }
    talk(){
        console.log("Make some noise");
    }
}

class Cat extends Animals {
     talk(){
         console.log("mew mew");
     }
}

class Dog extends Animals {
    talks(){
        console.log("Gheu Gheu");
    }
}

const MyCat = new Cat();
MyCat.talk();
const MyDog = new Dog();
MyDog.talks();