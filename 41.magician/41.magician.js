"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician
//  in the array.
function showMagicians(magicians) {
    // Print the name of each magician in the list
    magicians.forEach(magician => {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    });
}
const magicians = ['hamza', 'umer', 'ali'];
showMagicians(magicians);
