// Function to generate a random number between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Function to generate a random word from an array of words
function getRandomWord(arrayOfWords: string[]) {
  return arrayOfWords[getRandomNumber()];
}

// Example usage
const arrayOfWords = ["apple", "banana", "cherry"];
console.log(getRandomWord(arrayOfWords)); // Output: "apple"
