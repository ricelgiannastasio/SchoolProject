function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
const minValue = 10; // Lower bound of the range
const maxValue = 50; // Upper bound of the range
console.log(getRandomInt(minValue, maxValue)); // Output a random number within the specified range
