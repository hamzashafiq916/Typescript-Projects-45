// Great Magicians: Start with a copy of your program from Exercise 39. Write a
//  function called make_great() that modifies the array of magicians by adding
//   the phrase the Great to each magician’s name. Call show_magicians() to see 
//   that the list has actually been modified.


/////////////////////////41///////////////////////////////////////////

// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician
//  in the array.

function showMagicians(magicians: string[]) {
  // Print the name of each magician in the list
  magicians.forEach(word => {
      console.log(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
});
}

const magicians_names = ['hamza', 'uMEr', 'ALI'];
showMagicians(magicians_names);


/////////////////42//////////////////////////////
function makeGreat(magicians_names: string[]) {
  // Add "the Great" to each magician's name
  return magicians_names.map(magicians_names => "the Great " + magicians_names);
}

// Modify the list to add "the Great" to each magician's name
const greatMagicians: string[] = makeGreat(magicians_names);

// Show modified list
console.log("\nModified List with 'the Great':");
showMagicians(greatMagicians);
