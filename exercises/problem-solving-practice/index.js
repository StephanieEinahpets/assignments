function largest(arr){
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        let big = arr[i];
        if(big > max){
            max = big;
        }
    }
    return max;
}
console.log(largest([6, 13, 250, 3]))
console.log(largest([3, 5, 2, 8, 1])) 
console.log(largest([-13, 40, 3, 0, 19, 22]))



function lettersWithStrings(arr, string){
    const result = arr.filter(element => {
       return element.includes(string)
    })
    return result
}
console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!")) 
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!")) 
console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h")) 



function isDivisible (num1, num2){
    return (num1 % num2 === 0)
}
console.log(isDivisible(4, 2)) // => true
console.log(isDivisible(9, 3)) // => true
console.log(isDivisible(15, 4)) // => false