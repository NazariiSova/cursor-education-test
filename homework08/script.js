

class Student {

    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;

    }

    marks = [5, 4, 4, 5];
    isActive = true;

    getInfo() {
        return `студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
    }

    getAverageMark() {
        let num = 0;
        this.marks.forEach((el) => {
            num += el
        });

        return num / this.marks.length;
    }

    get getStudentMarks() {
        if (this.isActive == true) {
            return this.marks;
        }
        return null;

    }

    set setStudentMarks(value) {
        if (this.isActive == true) {
            this.marks.push(value);
            return this.marks;
        }
        return null;

    }

    dismiss() {
        this.isActive = false;
    }

    recover() {
        this.isActive = true;
    }

}


const person = new Student("Вищої Школи Психотерапії м.Одеса", 1, "Остап Родоманський Бендер");


console.log(person.getInfo());
console.log(person.getStudentMarks);

person.setStudentMarks = 5;
console.log(person.getStudentMarks);

console.log(person.getAverageMark());

person.dismiss()

person.setStudentMarks = 2;
console.log(person.getStudentMarks);

person.recover()

person.setStudentMarks = 4;
console.log(person.getStudentMarks);



class BudgetStudent extends Student {
    constructor(...args) {
        super(...args)
    setInterval(()=> {
        this.getScholarship()
    }, 30000)}


    getScholarship() {
        if(this.getAverageMark >= 4){
              if (this.isActive == true) {
            console.log('Ви отримали 1400 грн. стипендії');
        }
        }
      
    }



}

const scholarshipPerson = new BudgetStudent("Вищої Школи Психотерапії м.Одеса", 1, "Остап Родоманський Бендер");

scholarshipPerson.getScholarship()
