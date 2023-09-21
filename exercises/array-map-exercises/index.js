function doubleNumbers(arr){
    return arr.map(function(num){
        return num * 2
    })
  }

console.log(doubleNumbers([2, 5, 100]))


  
function stringItUp(arr){
    return arr.map(function(num){
        return num.toString()
    })
  }
  
console.log(stringItUp([2, 5, 100]));



function capitalizeNames(arr){
    return arr.map(function(name){
        return name[0].toUpperCase() + name.slice(1).toLowerCase()
    })
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 



function namesOnly(arr){
    return arr.map(function(person){
        return person.name
    })
}

console.log(namesOnly([
     {
         name: "Angelina Jolie",
         age: 80
     },
     {
         name: "Eric Jones",
         age: 2
     },
     {
         name: "Paris Hilton",
         age: 5
     },
     {
         name: "Kayne West",
         age: 16
     },
     {
         name: "Bob Ziroll",
         age: 100
     }
]));



function readyToPutInTheDOM(arr){
    return arr.map(function(person){
        if(person.age <= 17){
            return person.name + " is under age!!"
        }
        if(person.age >=18){
            return person.name + " can go to The Matrix"
        }
    })
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));



function readyToPutInTheDOM(arr){
    return arr.map(function(person){
    return "<h1>" + person.name + "</h1>" + "<h2>" + person.age + "</h2>"
   })
}
console.log(readyToPutInTheDOM([
     {
         name: "Angelina Jolie",
         age: 80
     },
     {
         name: "Eric Jones",
         age: 2
     },
     {
         name: "Paris Hilton",
         age: 5
     },
     {
         name: "Kayne West",
         age: 16
     },
     {
        name: "Bob Ziroll",
         age: 100
     }
]));