function displayStudentInfo(student) {
    var greetingElement = document.getElementById("greeting");
    greetingElement.textContent = "Student: ".concat(student.name, ", Age: ").concat(student.age, ", Grade: ").concat(student.grade);
}
var student1 = { name: "Sbonelo", age: 23, grade: "A" };
var student2 = { name: "Moloi", age: 21, grade: "C" };
displayStudentInfo(student1);
