// Cars: Write a function that stores information about a car in an Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs,
// such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly.
function make_car(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { manufacturer: string, model: string, options: { [key: string]: any } } {
  const car: { manufacturer: string, model: string, options: { [key: string]: any } } = {
    manufacturer: manufacturer,
    model: model,
    options: {}
  };

  for (const option of options) {
    for (const key in option) {
      car.options[key] = option[key];
    }
  }

  return car;
}

const car = make_car('Toyota', 'Corolla', { color: 'blue' }, { sunroof: true });
console.log(car);

