class User {
    constructor(name, surname, status) {
        this.name = name;
        this.surname = surname;
        this.status = status
    }
    getFullName() {
        console.log(this.name, this.surname)
    }
}

let ron = new User('Ron', 'Weasley', 'student');
// console.log(ron)
// ron.getFullName()

class Student extends User{
    constructor(name, surname, status, year ) {
        super (name, surname, status);
        this.year = year;
    }
    getCourse() {
        let currentYear = new Date().getFullYear() // для нахождения текущего года
        let admissionYear = currentYear - this.year
        console.log(admissionYear)
    }
};

let harry = new Student('Harry', 'Potter', 'student', 2019);
// console.log(harry)
//harry.getCourse()

class Teacher extends User{
    constructor(name, surname, status, subject, salary) {
        super(name, surname, status);
        this.subject = subject;
        this.salary = salary;
    }

    getCourse() {
        console.log(this.subject)
    }
}
let teacher = new Teacher('Minerva', 'McGonagall', 'teacher', ['transfiguration'], 2000);
//console.log(teacher);
//teacher.getCourse()