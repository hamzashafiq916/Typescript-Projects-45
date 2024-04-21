"use strict";
// ////////////////////////////////////41//////////////////////////////
// function showMagicians(magicians: string[]): void {
//   // Print the name of each magician in the list
//   magicians.forEach(magician => {
//       console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
//   });
// }
// const magicians: string[] = ['hamza', 'umer', 'ali'];
// // Show original list
// console.log("Original List:");
// showMagicians(magicians);
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician
//  in the array.
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
