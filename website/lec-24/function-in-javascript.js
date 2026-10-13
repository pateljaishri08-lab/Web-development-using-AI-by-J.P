

// // Example 1 Function declaration

// function greet() {
//     console.log("Hello, world!");
// }

// greet();




// //example 2 Function with parameters

// function greetMe(name) {
//     console.log("Hello, " + name + "!");
// }

// greetMe("marrion");

// // Example 3 arrow function
// const todaysDate = () => {
//     console.log("Today's date is Monday!");
// }

// todaysDate();

// // everthing in this life is a function 


// ============================================
// Function 1: addNumbers
// ============================================
// Function that takes two numbers as parameters,
// returns their sum, and prints the result

function addNumbers(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

// Call the function and print the result
const result = addNumbers(15, 25);
console.log("The sum of 15 and 25 is: " + result);

// Alternative way to call and print in one line
console.log("The sum of 10 and 20 is: " + addNumbers(10, 20));


// ============================================
// Function 2: studentGrade
// ============================================
// Function that takes student marks and
// returns a grade (A+, A, B, C, D, or F)
// using if-else statements

function studentGrade(marks) {
    let grade;

    // Determine grade based on marks
    if (marks >= 90) {
        grade = "A+";
    } else if (marks >= 80) {
        grade = "A";
    } else if (marks >= 70) {
        grade = "B";
    } else if (marks >= 60) {
        grade = "C";
    } else if (marks >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    return grade;
}

// Call the function with different marks and print the results
const studentMarks1 = 95;
const studentMarks2 = 85;
const studentMarks3 = 72;
const studentMarks4 = 68;
const studentMarks5 = 55;
const studentMarks6 = 40;

console.log("Student with marks " + studentMarks1 + " got grade: " + studentGrade(studentMarks1));
console.log("Student with marks " + studentMarks2 + " got grade: " + studentGrade(studentMarks2));
console.log("Student with marks " + studentMarks3 + " got grade: " + studentGrade(studentMarks3));
console.log("Student with marks " + studentMarks4 + " got grade: " + studentGrade(studentMarks4));
console.log("Student with marks " + studentMarks5 + " got grade: " + studentGrade(studentMarks5));
console.log("Student with marks " + studentMarks6 + " got grade: " + studentGrade(studentMarks6));


