//Write a function called **`filterAnagrams`** that filters an array of words to find and return an 
//array containing only the words that are anagrams of a given target word.


function filterAnagrams(arr, target) {
    function sortString(str) {
        return str.split('').sort().join('')
      }
    const anagrams = arr.filter(word => sortString(word) === sortString(target))
    return anagrams
}

const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
const target = 'enlist';
console.log(filterAnagrams(words, target))



//Write a function called sortByMultipleCriteria that takes an array of objects representing 
//people, each with a name (string) and age (number) property. The function should return a new 
//array with the people sorted first by age in ascending order, and then by name in alphabetical order.

function sortByMultipleCriteria(people) {
    // const sortedAge = people.sort((a, b) => a.age - b.age)
    // const sortedName = sortedAge.sort((a, b) => a.name - b.name)
    // return sortedName
    return people.sort((a, b) => a.age - b.age).sort((a,b) => a.name - b.name)
}

const people = [
{ name: 'Alice', age: 30 },
{ name: 'Bob', age: 25 },
{ name: 'Charlie', age: 35 },
{ name: 'David', age: 25 },
]

console.log(sortByMultipleCriteria(people))

// Expected outcome: [
//  { name: 'Bob', age: 25 },
//  { name: 'David', age: 25 },
//  { name: 'Alice', age: 30 },
//  { name: 'Charlie', age: 35 }
// ]



// Write a function called calculateTotalPrice that calculates the total price for each 
//product in an array of objects representing products, where each object has a name (string), 
//price (number), and quantity (number) property. The function should return a new array containing 
//objects with the name and totalPrice properties, where totalPrice is the result of multiplying the 
//price with the quantity for each product.

function calculateTotalPrice(products) {
    let total = 0
    products.map(fruit => {
        total += fruit.price*fruit.quantity
    })
    return total
}

const products = [
  { name: 'Apple', price: 1.5, quantity: 3 },
  { name: 'Banana', price: 0.75, quantity: 5 },
  { name: 'Orange', price: 1.25, quantity: 2 },
];

const totalPriceArray = calculateTotalPrice(products);
console.log(totalPriceArray);
