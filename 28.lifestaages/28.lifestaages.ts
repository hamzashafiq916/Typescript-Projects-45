// Define the variable age and set a value
const age: number = 95;

// If-else chain to determine the person's stage of life
if (age < 2) {
    // If the person is less than 2 years old, print a message that the person is a baby.
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    // If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    // If the person is at least 4 years old but less than 13, print a message that the person is a kid.
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    // If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    // If the person is at least 20 years old but less than 65, print a message that the person is an adult.
    console.log("The person is an adult.");
} else {
    // If the person is age 65 or older, print a message that the person is an elder.
    console.log("The person is an elder.");
}
