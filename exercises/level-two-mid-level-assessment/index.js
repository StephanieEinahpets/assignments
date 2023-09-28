const numbers = [4, 2, 7, 1, 9, 5];
const sortedNumbers = sortNumbers(numbers);

function sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b)
}

console.log(sortedNumbers);




const strings = ['hello', 'world', 'javascript'];
const uppercaseStrings = convertToUppercase(strings);

function convertToUppercase(strings) {
    return strings.map(string => string.toUpperCase())
}

console.log(uppercaseStrings);
