"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a 
// copy of the array of magicians’ names. Because the original array will be unchanged, return the 
// new array and store it in a separate array. Call show_magicians() with each array to show that you 
// have one array of the original names and one array with the Great added to each 
// magician’s name.
/////////////////////////41///////////////////////////////////////////
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician
//  in the array.
function show_Magicians(magicians) {
    // Print the name of each magician in the list
    magicians.forEach(word => {
        console.log(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    });
}
const magicians_names = ['hamza', 'uMEr', 'ALI'];
// console.log("\nOriginal List:");
// show_Magicians(magicians_names);
/////////////////42//////////////////////////////
function makeGreat(magician) {
    // Add "the Great" to each magician's name
    return magician.map(name => `The Great ${name}`);
}
//------------For Ex 43
// // Modify the list to add "the Great" to each magician's name
// const greatMagicians = makeGreat(magicians_names);
// // Show modified list
// console.log("\nModified List with 'the Great':");
// show_Magicians(greatMagicians);
//////////////////43/////////////////////////////////////////////////////////
// Call makeGreat with a copy of the original array to keep the original unchanged
//Making a copy of oriiginal array through slice() function
let copy_magicians = magicians_names.slice();
//Moddify the copied array to include the "The great" with their names
let copyof_greatMagicians = makeGreat(copy_magicians);
//show both arrays original and copied array
console.log(`Original array list`);
show_Magicians(magicians_names);
console.log(`Mofified copy of Original array list`);
show_Magicians(copyof_greatMagicians);
