const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];




function makePairs(studentsArr = []) {

    let boys = [];
    let girls = [];

    for (let i = 0; i < studentsArr.length; i++) {
        let gender = studentsArr[i];
        if (gender[gender.length - 1] == "а") {
            girls.push(studentsArr[i]);
        } else {
            boys.push(studentsArr[i]);
        }

    }

    let allPairs = [];

    for (let i = 0; i < girls.length; i++) {
        allPairs.push([boys[i], girls[i]])
    }


    return allPairs;
}
const newAllPairs = makePairs(students)
console.log(newAllPairs);


function addThemes(themesArr = []) {
    let pairAddTheme = [];

    for (let i = 0; i < themesArr.length; i++) {
        const pairWithThame = `${newAllPairs[i][0]} i ${newAllPairs[i][1]}`;
        pairAddTheme.push([pairWithThame, themesArr[i]])
    }
    console.log(pairAddTheme);
    return pairAddTheme;
}
let studentWithTheme = addThemes(themes);


function addMarks(studentsArr = [], marksArr = []) {
    let result = [];
    for (let i = 0; i < studentsArr.length; i++) {
        result.push([studentsArr[i], marksArr[i]])

    }


    return result;
}

const studentWithResult = addMarks(students, marks);
console.log(studentWithResult);

function pairWithRandomResult(studentsArr = [], marksArr = []) {

    let result = [];
    for (let i = 0; i <studentWithTheme.length; i++) {
        result.push([...studentWithTheme[i], Math.floor(Math.random() * 4 + 1)])


    }
    console.log(result);

    return result;
}

pairWithRandomResult(students, marks);
