






// Program: Personalized User Message
// This program collects user information using prompt() and displays a personalized message

// Example 1: Get user's name and age using prompt()
const userName = prompt("Enter your name:");
const userAge = prompt("Enter your age:");

console.log("Hello, " + userName + "!");
console.log("You are " + userAge + " years old!");

// Example 2: Display personalized message
console.log("\n--- Personalized Welcome Message ---");
console.log("Welcome to our application, " + userName + "!");
console.log("Thank you for providing your information.");

// Example 3: More detailed personalized message
const age = parseInt(userAge);
if (age >= 18) {
    console.log(userName + ", you are an adult. Welcome!");
} else {
    console.log(userName + ", you are a young person. We hope you enjoy our platform!");
}





