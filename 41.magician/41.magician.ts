// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician
//  in the array.

function show_Magicians(magicians: string[]) {
  // Print the name of each magician in the list
  magicians.forEach(word => {
      console.log(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
});
}

const magicians_names = ['hamza', 'uMEr', 'ALI'];
show_Magicians(magicians_names);
