let students =[];

function createStudent(name, age, mark){
    return {name: name, age: age, mark: mark};

}
students.push(createStudent("batool", 20, 70));
students.push(createStudent("sadeel", 20, 90));
students.push(createStudent("khatab", 20, 55));
students.push(createStudent("masa", 21, 40));
students.push(createStudent("sara", 20, 10));
let successStudents =[];
let failedStudents =[];
for (let i=0; i<students.length; i++){
    if (students[i].mark >= 50){
        successStudents.push(students[i]);
    }else{
        failedStudents.push(students[i]);
    }
}
console.log("Success students  ", successStudents);
console.log("Failed students  ", failedStudents);