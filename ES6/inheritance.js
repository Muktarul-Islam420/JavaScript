class Parent {
    constructor() {
        this.fatherName = "Ali Akbar Ruku"
    }
}
class Child extends Parent {
    constructor(name) {
        super()
        this.name = name;
    }
    getFullName() {
        return this.name + " " + this.fatherName
    }

}
const Sons = new Child("Imtiaz")
const Sons1 = new Child("Riyaz")
console.log(Sons.getFullName())
console.log(Sons1)