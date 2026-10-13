

// Program: Exception Handling with try...catch
// This program demonstrates exception handling by validating user input

// Get user input using prompt()
const userInput = prompt("Enter a number:");

try {
    // Check if the input is a valid number
    if (isNaN(userInput) || userInput === null || userInput === "") {
        throw new Error("Invalid number entered");
    }

    // If input is valid
    console.log("You entered a valid number");
    console.log("The number is: " + userInput);

} catch (error) {
    // Catch and display the error
    console.error("Error: " + error.message);
}




