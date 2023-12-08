//You are given an array a containing integers. Your task is to implement the solution function 
//to sort the array in ascending order, while preserving the original index positions of -1 values.

function solution(arr){
    const nonNegatives = arr
        .map((value, index) => ({ value, index }))
        .filter(({ value }) => value !== -1)
        .sort((a, b) => a.value - b.value)
    return arr.map((value) => (value === -1 ? -1 : nonNegatives.shift().value))
}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
console.log(solution([5, 3, 1]))
console.log(solution([-1, -1, -1, -1]))
console.log(solution([100, -1, 50, -1, 75]))



//Write a JavaScript function called **`countVowels`** that takes a string as input and counts 
//the number of vowels (a, e, i, o, u) in the string. The function should return the count.

Implement the **`countVowels`** function using either the provided example solutions or your own solution.

function countVowels(string) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            count++;
        }
    }
    return count;
}
const input = 'Hello, World!';
console.log(countVowels(input)); // Output: 3



//code challenge
function palindrome (word) {
    const wordarray = word.split("")
    const reversedword = wordarray.reverse()
    const stringreverse = reversedword.join("")
    if (stringreverse == word){
        return "true"
        
    }
    else if (stringreverse !== word)
        return "false"

}
console.log(palindrome("dog"))