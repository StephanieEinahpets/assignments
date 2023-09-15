var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


vegetables.pop()
console.log(vegetables)

fruit.shift()
console.log(fruit)

var orangeIndex = fruit.indexOf("orange")
console.log (orangeIndex)

fruit.push(1)
console.log(fruit)

console.log(vegetables.length)

vegetables.push(3)
console.log(vegetables)

const food = fruit.concat(vegetables)
console.log(food)

food.splice(4,2)
console.log(food)

food.reverse()
console.log(food)

const reversedFood = food.join()
console.log(reversedFood)