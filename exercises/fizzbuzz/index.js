let newArr = []

for (i = 0; i <= 100; i++){
    if(i % 3 === 0)
            newArr.push("fizz")
    if(i % 5 === 0)
            newArr.push("buzz")
    if(i % 5 !==0 && i % 3 !== 0)
            newArr.push(i)
}    

console.log(newArr)