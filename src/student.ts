// const grade = ["A", "B", "C", "D", "F"]
// let age: number = 20;
// if (age < 50)
//     age += 10;
// console.log(age)
type Grade = "A" | "B" | "C" | "D" | "F";

interface Student {
  name: string;
  age: number;
  grade: Grade;
}

function displayStudentInfo(student: Student): void {
  const greetingElement = document.getElementById("greeting")!;
  greetingElement.textContent = `Student: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`;
}

const student1: Student = { name: "Sbonelo", age: 23, grade: "A" };
const student2: Student = { name: "Moloi", age: 21, grade: "C" };

displayStudentInfo(student1);









