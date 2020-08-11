class Student {
    constructor(sId, sName) {
        this.id = sId
        this.name = sName
        this.school = "Sonachaluni school"
    }
}
const student1 = new Student(12, "Shohag")
const student2 = new Student(23, "Riya")
console.log(student1, student2)