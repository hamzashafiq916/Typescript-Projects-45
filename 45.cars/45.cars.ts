// // Cars: Write a function that stores information about a car in an Object.
// // The function should always receive a manufacturer and a model name.
// // It should then accept an arbitrary number of keyword arguments.
// // Call the function with the required information and two other name-value pairs,
// // such as a color or an optional feature.
// // Print the Object that’s returned to make sure all the information was stored correctly.

function storeCarInfo(
  manufacturer: string,
  model: string, //index signature properties ke naam aur quantity nai pata
  ...extraOption: { [key: string]: any }[] ///////... SPREAD OPERATOR Receive krke array ke andr define krta hai
): object {
  const carInfo = {
    manufacturer,
    model,
    ...Object.assign({}, ...extraOption),
  };
  return carInfo;
}

const myCar = storeCarInfo(
  "Toyota",
  "Camry",
  { color: "Silver" }, //bcoz it is object and key:value
  { year: 2022 },
  { features: ["Navigation", "Leather Seats"] }
);

// Print the object returned by the function
console.log(myCar);
