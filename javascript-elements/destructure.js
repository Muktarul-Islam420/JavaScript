//Object  destructure
const person = { name: 'Mark jugurburg', age: 35, job: 'Facebook owner', mobile: '017xxxxxx', gfName: 'Jecklin' }
const { job, age } = person
const owner = person.name
console.log(owner, age, job)


friends = ['Shakib khan', 'Arman khan', 'Amir khan', 'Salman khan', 'Sharukh khna']
const [firstFriends, ...Others] = friends
console.log(firstFriends, Others)