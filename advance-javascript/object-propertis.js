const actress = [
    { id: 20, name: 'Suny leon' },
    { id: 25, name: 'Mia kholifa' },
    { id: 30, name: 'Natasha malcova' },
    { id: 35, name: "Priyanka chopra" },
    { id: 40, name: "Karina kapoor" },
    { id: 45, name: "Sonam kapoor" },
    { id: 50, name: "Ketrina kaif" }

]
const actressName = actress.map(s => s.name)
const actressId = actress.map(s => s.id)
const bigger = actress.filter(s => s.id > 40)
const biggerOne = actress.find(s => s.id > 40)
console.log(bigger)