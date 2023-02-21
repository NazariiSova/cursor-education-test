const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

function getSubjects(obj) {
    let subjects = Object.keys(obj['subjects']);
    subjects = subjects.map((subject, i, arr) => {
        let l = subject.split('');
        for (let e = 0; e < subject.length; e++) {

            if (l[e] === "_") {
                l[e] = ' '
            };


        };
        l[0] = l[0].toLocaleUpperCase();
        l = l.join('');

        return l;

    });
    console.log(subjects);

}
getSubjects(students[0]);



function getAverageMark(obj) {
    let result = 0;
    let iteration = 0;

    for (let ch of Object.values(obj.subjects)) {
        ch.map((el, i, arr) => {
            result += arr[i];
            iteration += 1;
        });

    };
    result = result / iteration;
    result = result.toFixed(2);
    return result;
};
console.log(getAverageMark(students[0]));



function getStudentInfo(obj) {
    const result = { course: obj.course, name: obj.name, averageMark: getAverageMark(obj) };
    return result;
};
console.log(getStudentInfo(students[0]));



function getStudentsNames(studentsObj) {
    const arr = studentsObj.map((el, i, arr) => {
        return el['name'];
    });


    console.log(arr.sort());
}



function getBestStudent(studentsObect) {
    let result = [];
    for (student of studentsObect) {
        result.push(getStudentInfo(student))
    }
    result.sort((a, b) => (b.averageMark - a.averageMark));
    return result[0].name;
}
console.log(getBestStudent(students));



function calculateWordLetters(str) {

    const arr = str.split('');
 

    const res = {};
    arr.forEach((key, i,) =>  {
        !res[key] ? res[key] = 1: res[key]++;
        });
    console.log(res)
}

calculateWordLetters("тест");