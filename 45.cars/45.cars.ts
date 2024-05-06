// // Cars: Write a function that stores information about a car in an Object.
// // The function should always receive a manufacturer and a model name.
// // It should then accept an arbitrary number of keyword arguments.
// // Call the function with the required information and two other name-value pairs,
// // such as a color or an optional feature.
// // Print the Object that’s returned to make sure all the information was stored correctly.

// Define a type for the car object
type Car = {
  manufacturer: string;
  model: string;
  [key: string]: any; // Allow any other optional properties
};

// const car = make_car('Toyota', 'Corolla', { color: '

// Function to store information about a car
function storeCarInfo(
  manufacturer: string,
  model: string,
  ...details: { [key: string]: any }[]
): Car {
  const carInfo: Car = {
    manufacturer: manufacturer,
    model: model,
  };
  // Add optional details to the car object
  details.forEach((detail) => {
    Object.keys(detail).forEach((key) => {
      carInfo[key] = detail[key];
    });
  });
  return carInfo;
}

// Call the function with required and optional information
const myCar = storeCarInfo(
  "Toyota",
  "Camry",
  { color: "Silver" },
  { year: 2022 },
  { features: ["Navigation", "Leather Seats"] }
);

// Print the object returned by the function
console.log(myCar);
