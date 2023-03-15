/** @format */

const students = [
  {
    firstName: "Darren",
    lastName: "Chen",
    age: 30,
  },
  {
    firstName: "Gordon",
    lastName: "Chen",
    age: 28,
  },
  {
    firstName: "Peter",
    lastName: "Parker",
    age: 18,
  },
];

// Write a function that takes in an array of students and returns the total number of students: getNumStudents(students) => 3
const getNumberOfStudents = (students) => {
  return students.length;
};
console.log(getNumberOfStudents(students));
// Write a function that takes in an array of students and returns the average age of all the students: getAverageAge(students) => 25.333333333333332
const getAverageAge = (students) => {
  return students.reduce(
    (total, student) => total + student.age / students.length,
    0
  );
};

console.log(getAverageAge(students));
// Write a function that takes in an array of students and returns the oldest student: getOldestStudent(students) => { firstName: 'Darren', lastName: 'Chen', age: 30 }
function getOldestStudent(students) {
  let oldest = students[0];
  for (let i = 0; i < students.length; i++) {
    if (students[i].price > oldest.age) {
      oldest = students[i];
    }
  }
  return oldest;
}
console.log(getOldestStudent(students));
// Write a function that takes in an array of students and returns the youngest student: getYoungestStudent(students) => { firstName: 'Peter', lastName: 'Parker', age: 18 }
function getYoungestStudent(students) {
  let youngest = students[0];
  for (let i = 0; i < students.length; i++) {
    if (students[i].age < youngest.age) {
      youngest = students[i];
    }
  }
  return youngest;
}
console.log(getYoungestStudent(students));
// Write a function that takes in a student object and returns the full name of the student: getFullName(student) => 'Darren Chen'
const getFullName = (firstName, lastName) =>
  capitalized(firstName) + " " + capitalized(lastName);
const capitalized = (word) =>
  word[0].toUpperCase() + word.slice(1).toLowerCase();

const student = getFullName("darren", "chen");
console.log(student);
