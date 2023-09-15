const readline = require("readline-sync");
const name = readline.question("What is your name? ");

var gameOver = false
var key = false

while (!gameOver) {
    var action = readline.question("Choose an action: put hand in [hole], find the [key], open the [door] ");

    if (action != "key" && action != "hole" && action != "door"){
        console.log("Try again, " + name)
    }

    if (action === "hole"){
        console.log("You have died. Game over.")
        gameOver = true
    }

    if(action === "key"){
            console.log("You have found the key.")
            key = true
        }

    if(action === "door"){
        if(!key){
            console.log("The door is locked.")
        } else if (key = true){
            console.log("You have used the key to unlock the door and escape. Congratulations, " + name + "!")
            gameOver = true
        }
    }
}