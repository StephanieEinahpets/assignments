// challenge one

function Book (title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getDetails = () => {
        console.log(
            `Title: ${this.title}. Author: ${this.author}. Year Published: ${this.year}`)
}}

const book1 = new Book ("The Great Gatsby", "F. Scott Fitzgerald", 1925)
    book1.getDetails()


const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960)
    book2.getDetails()

// challenge two

function removeDuplicates(arr){
    var result = []
    for(var i = 0; i < arr.length; i++)
        if (result.indexOf(arr[i]) === -1) // if (!result.includes(arr[i]))
            result.push(arr[i])
    return result       
        }

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))
console.log(removeDuplicates([5, 5, 5, 5, 5]))

function findEvenNumbers(arr){
    let newArr = []
    for (i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i])
        }
    } 
    return newArr
}

console.log(findEvenNumbers([1,2,3,4,5,6,7,8,9,10])) // [2,4,6,8,10]

//step 1 loop through array
//step 2  if the number your on is even or odd..  if if its even ?
//step 3 return new arr with even numbers
// talk it out ask ?

// break it down // psuedo code

// solve