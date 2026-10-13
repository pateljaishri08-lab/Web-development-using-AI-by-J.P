// Program: Driving Qualification Checker
// This program uses prompt() to get user's age and checks if they are qualified to drive

// Get user's age using prompt()
const age = prompt("Enter your age:");

// Convert age to a number
const userAge = parseInt(age);

// Check driving qualification
console.log("\n--- Driving Qualification Check ---");
console.log("Your age: " + userAge + " years old");

if (userAge >= 18) {
    console.log("You are qualified to drive a car!");
    console.log("Remember to follow traffic rules and drive safely.");
} else {
    console.log("You are not qualified to drive a car yet.");
    console.log("You need to wait " + (18 - userAge) + " more year(s) to drive.");
}
