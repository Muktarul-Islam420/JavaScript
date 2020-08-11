const person = {
        firstName: 'Rahim',
        lastName: 'Hasan',
        getFullName: function() {
            console.log(this.firstName, this.lastName)
        },
        salary: 20000,
        chargeWithdraw: function(amount, tips, tax) {
            this.salary = this.salary - amount - tips - tax
            return this.salary
        }
    }
    //chargeWithdraw(2000)
const Actress = {
        firstName: 'Salman',
        lastName: 'khan',
        salary: 10000
    }
    // person.chargeWithdraw(2000)
    // console.log(person.salary)


// const ActressWithdrawCharge = person.chargeWithdraw.bind(Actress)
// ActressWithdrawCharge(5000)
// console.log(Actress.salary)
// console.log(person.salary)


// person.chargeWithdraw.call(Actress, 1000, 500, 50)
// console.log(Actress.salary)

person.chargeWithdraw.apply(Actress, [1000, 500, 50])
console.log(Actress.salary)