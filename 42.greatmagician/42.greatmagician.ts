// Great Magicians: Start with a copy of your program from Exercise 39. Write a
//  function called make_great() that modifies the array of magicians by adding
//   the phrase the Great to each magician’s name. Call show_magicians() to see 
//   that the list has actually been modified.


/////////////////////////41///////////////////////////////////////////

function show_Magicians(magicians_names: string[]): void {
  // Print the name of each magician in the list

  for (let i = 0; i < magicians_names.length; i++) {
      console.log(magicians_names[i]);
  }
}
let magicians_names: string[] = ['hamza', 'umer', 'ali'];
console.log("\nOriginal List");
show_Magicians(magicians_names);


/////////////////42//////////////////////////////
function makeGreat(magicians_names: string[]): string[] {
  // Add "the Great" to each magician's name
  return magicians_names.map(magicians_names => "the Great " + magicians_names);
}

// Modify the list to add "the Great" to each magician's name
const greatMagicians: string[] = makeGreat(magicians_names);

// Show modified list
console.log("\nModified List with 'the Great':");
show_Magicians(greatMagicians);
