function Cat(name) {
    this.name = name;
}
Cat.prototype.talk = function(){
    console.log('Meou meou');
}

const MyCat = new Cat('White pussy');
console.log(MyCat);
MyCat.talk();