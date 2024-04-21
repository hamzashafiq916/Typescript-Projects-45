"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a 
// copy of the array of magicians’ names. Because the original array will be unchanged, return the 
// new array and store it in a separate array. Call show_magicians() with each array to show that you 
// have one array of the original names and one array with the Great added to each 
// magician’s name.
/////////////////////////41///////////////////////////////////////////
function show_Magicians(magicians_names) {
    // Print the name of each magician in the list
    for (let i = 0; i < magicians_names.length; i++) {
        console.log(magicians_names[i]);
    }
}
let magicians_names = ['hamza', 'umer', 'ali'];
console.log("\nOriginal List");
show_Magicians(magicians_names);
/////////////////42//////////////////////////////
function makeGreat(magicians_names) {
    // Add "the Great" to each magician's name
    return magicians_names.map(magicians_names => "the Great " + magicians_names);
}
// Modify the list to add "the Great" to each magician's name
const greatMagicians = makeGreat(magicians_names);
// Show modified list
console.log("\nModified List with 'the Great':");
show_Magicians(greatMagicians);
//////////////////43/////////////////////////////////////////////////////////
// Call makeGreat with a copy of the original array to keep the original unchanged
const great_Magicians = makeGreat([...magicians_names]);
// Show that the original list remains unchanged
console.log("\nOriginal List (Unchanged):");
show_Magicians(magicians_names);
