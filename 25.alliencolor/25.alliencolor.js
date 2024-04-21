"use strict";
// Define the variable alien_color and assign it a value of 'green', 'yellow', or 'red'.
const alien_color = 'green';
// Version that passes the if test
if (alien_color === 'green') {
    // If the alien's color is green, print a message that the player just earned 5 points.
    console.log("Congratulations! You just earned 5 points.");
}
// Version that fails the if test (no output)
if (alien_color === 'blue') {
    // This block will not be executed because the condition is not true.
    console.log("no output");
}
