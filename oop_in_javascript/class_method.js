class Hero {
    constructor(name,power){
        this.name = name;
        this.power = power;
    }
    getPower(){
        if(this.power){
            return this.power;
        }
        return "I've no Power";
    }
    goForGrocery(){
        if(this.power){
            console.log(this.getPower())
        }
        return "Price is too high,I return back"
    }
}
const BadMan = new Hero('BadMan','killing');
console.log(BadMan.power);
console.log(BadMan.getPower());
console.log(BadMan.goForGrocery());