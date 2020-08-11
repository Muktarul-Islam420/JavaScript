class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName
        this.lastName = lastName
        this.salary = salary
    }
}
const LovelyPerson = new Person('Ishita', 'Raka', 50000000)
console.log(LovelyPerson)

class Person2 {
    constructor(name, address, email, phone) {
        this.name = name
        this.address = address
        this.email = email
        this.phone = phone
    }
}
Person = new Person2('Raka', 'Thakurgaon', 'raka420@gmail.com', '017xx')
console.log(Person)