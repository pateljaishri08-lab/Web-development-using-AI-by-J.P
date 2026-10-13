
// //example 1

// for (let i = 0; i < 10; i++) {
//     console.log(i);

// }



// //example 2 print an array of numbers

// const numbers = [10, 20, 30, 40, 50];

// for (let i = 0; i < numbers.length; i++) {
//     console.log("Number: ", numbers[i]);
// }




// //example 2 print an array of strings
// const fruits = ["apple", "banana", "cherry", "date", "grape"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log("Fruit: ", fruits[i]);
// }

// example 3 print the values of an array of fruits using for loop

const fruitsList = ["Orange", "Mango", "Strawberry", "Pineapple", "Watermelon"];

for (let i = 0; i < fruitsList.length; i++) {
    console.log(fruitsList[i]);
}

// example 4 print the values of 5 car objects using for loop

const carsList = [
    { make: "Toyota", model: "Camry", year: 2020 },
    { make: "Honda", model: "Civic", year: 2019 },
    { make: "Ford", model: "Mustang", year: 2021 },
    { make: "BMW", model: "X5", year: 2022 },
    { make: "Tesla", model: "Model 3", year: 2023 }
];

for (let i = 0; i < carsList.length; i++) {
    console.log("Car " + (i + 1) + ": " + carsList[i].make + " " + carsList[i].model + " (" + carsList[i].year + ")");
}




