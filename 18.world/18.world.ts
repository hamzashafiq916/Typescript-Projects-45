// Define an array of places to visit
let placesToVisit: string[] = ["Tokyo", "Paris", "New York", "Rome", "Sydney"];

// Print the original array
console.log("Original Order:", placesToVisit);

// Print the array in alphabetical order without modifying the original list
console.log("Alphabetical Order:", [...placesToVisit].sort());

// Print the array to show it's still in its original order
console.log("Original Order:", placesToVisit);

// Print the array in reverse alphabetical order without modifying the original list
console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());

// Print the array to show it's still in its original order
console.log("Original Order:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);

// Reverse the order of the list again to get back to original order
placesToVisit.reverse();
console.log("Original Order:", placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);

// Sort the array in reverse alphabetical order
// placesToVisit.sort((a, b) => b.localeCompare(a));
// console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
placesToVisit.sort().reverse();
console.log("Sorted in Reverse Alphabetical Order: " , placesToVisit);
