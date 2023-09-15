function capilizeAndLowercase (string) {
    let upperCased = string.toUpperCase()
    let lowerCased = string.toLowerCase()
    return upperCased + lowerCased
} 
console.log(capilizeAndLowercase('hello'))



const findMiddleIndex = string => {
   return Math.floor(string.length / 2)
}
console.log(findMiddleIndex("Hello"))
console.log(findMiddleIndex("Hello World"))



const returnFirstHalf = string => {
    halvedString = Math.floor(string.length / 2)
    return string.slice(0, halvedString)
}
console.log(returnFirstHalf("Hello"))
console.log (returnFirstHalf("Hello World"))



const capilizeAndLowercased = string => {
    halvedString = Math.floor(string.length / 2)
    firstHalf = string.slice(0, halvedString)
    lastHalf = string.slice(halvedString)
    fh = firstHalf.toUpperCase()
    lh = lastHalf.toLowerCase()
    return fh + lh
}
console.log(capilizeAndLowercased("Hello")) 
console.log(capilizeAndLowercased("Hello World")) 