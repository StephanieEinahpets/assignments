// Write a function called extractUniqueCharacters that takes an array 
// of strings and returns a new array containing only the unique characters 
// from all the strings.

function extractUniqueCharacters(strings) {
    const uniqueChars = new Set(strings.join(''))
    return [...uniqueChars]
}

const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']



// Write a function called sortByProperty that takes an array of objects and a 
// property name as input. The function should return a new array containing the 
// objects sorted in ascending order based on the specified property.

function sortByProperty(objects, propertyName) {
  return objects.sort((a, b) => a[propertyName] - b[propertyName])
}

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 28 },
]

const sortedByAge = sortByProperty(people, 'age');
console.log(sortedByAge)



// Write a program that generates a multiplication table for a given 
// number. The table should display the multiplication of the given 
// number with numbers from 1 to 10.

function generateMultiplicationTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
  }
}

// Test the function
console.log(generateMultiplicationTable(5))
// Expected Outcome:
/*
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
*/
generateMultiplicationTable(7)
generateMultiplicationTable(3)

