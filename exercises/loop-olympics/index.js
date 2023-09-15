for (i = 0; i <= 9; i++){
    console.log(i)
}


for (i = 9; i >= 0; i--){
    console.log(i)
}


const fruit = ["banana", "orange", "apple", "kiwi"]
    for (i = 0; i < 1; i++){
        console.log(fruit)
    }


var arr = [];    
for (i = 0; i < 10; i++){
    arr.push(i)
}
    console.log(arr)


const evenArray = [];
for (i = 0; i <= 100; i+=2){
    evenArray.push(i)
}
console.log(evenArray)
// or
const evenArr = [];
for (i = 0; i <= 100; i++){
    if(i % 2 === 0)
    evenArr.push(i)
}
console.log(evenArr)


const newArr = []
const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
    for (i = 0; i < fruit.length; i++){
        if (i % 2 === 0){
            newArr.push(fruit[i])
        }
    }
    console.log(newArr)

