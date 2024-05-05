// Sandwiches: Write a function that accepts an array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered.

// Call the function three times, using a different number of arguments each time.
function make_sandwich(...items: string[]) {
  console.log("Making a sandwich with the following items:\n");

  // for (let i = 0; i < items.length; i++) {
  //   console.log(`- ${items[i]}`);
  // }

items.forEach(singleitem => console.log(singleitem));



  console.log("\nSandwich is ready!\n");
}

make_sandwich('lettuce', 'tomato', 'cheese');
make_sandwich('ham', 'mayo');
make_sandwich('turkey',`jelly`);
