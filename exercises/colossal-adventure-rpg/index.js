const readline = require("readline-sync")

let gameover = false

let player = {
    hp: 100,
    name: "",
    attack: 5,
    inventory: []
}

let enemies = [
    {
        name: "goblin",
        hp: 15,
        attack: 5
    },
    {
        name: "orc",
        hp: 20,
        attack: 7
    },
    {
        name: "troll",
        hp: 25,
        attack: 10
    }
]

function fight(randomenemy) {
    while(randomenemy.hp > 0 && player.hp > 0){
        let max = randomenemy.attack
        let min = 1
        let mathAttack = Math.floor(Math.random() * (max - min + 1)) + min
        let playerMax = 8
        let playerMin = player.attack
        let playerMathAttack = Math.floor(Math.random() * (playerMax - playerMin + 1) + playerMin)
        player.hp -= mathAttack
        console.log(`The ${randomenemy.name} has done ${mathAttack} damage, and ${player.name} has ${player.hp}HP remaining.`)
        if(player.hp > 0 && randomenemy.hp >= 0){
            randomenemy.hp -= playerMathAttack
            if(randomenemy.hp >= 0){
                console.log(`${player.name} has done ${playerMathAttack} damage to the ${randomenemy.name}, and it has ${randomenemy.hp}HP remaining.`)
            }else{
                console.log(`${player.name} has done ${playerMathAttack} damage to the ${randomenemy.name}, and it has 0HP remaining, slaying the ${randomenemy.name}. You gain experience and a small amount of health. `)
                player.attack = player.attack + 1
                player.hp = player.hp + 3
            }
        }}
    }
    
player.name = readline.question("Welcome, adventurer! What is your name? ")

while person(!gameover) {
    var action = readline.question("You find yourself on a trail in the forest. To walk, press 'w'. To access your person, press 'p' ") 
        enemies[0].hp = 15
        enemies[1].hp = 20
        enemies[2].hp = 25

        if(action === "p"){
            console.log("Player: " + player.name + ", HP: " + player.hp + ", Attack: " + player.attack)
        }
        if(action === "w"){
            
            var encounter = Math.floor(Math.random() * 3)
            if(encounter !== 0){
                console.log("You have progressed further down your path safely, and there is not an enemy in sight. ")
            }
            if (encounter === 0){
                let randomenemy = enemies[Math.floor(Math.random() * enemies.length)]
                const fightresponse = readline.question(`You have been attacked by ${randomenemy.name}. Choose 'a' to attack or 'r' to run. `)
                if(fightresponse === "a"){
                    fight(randomenemy)
                }
                if(fightresponse === "r"){
                    let runchance = Math.floor(Math.random() * 2)
                    if(runchance === 0){
                        console.log(`${player.name} was unable to run away. `)
                        fight(randomenemy)
                        
                    }else{
                        function runAttack (){
                            let max = randomenemy.attack
                            let min = 1
                            let mathAttack = Math.floor(Math.random() * (max - min + 1)) + min
                            player.hp -= mathAttack
                            console.log(`As you try to escape, the enemy hits ${player.name} in the back for ${mathAttack} damage. ${player.name} continues running until they reach safety. `)
                        }
                        runAttack()
                    }
                }
            }

        }
        if(player.hp <= 0){
            gameover = true
            console.log ("You have died, " + player.name + ". Your adventure is over. ")
        }
    }




const names = [ "Jerry", "Adam" ]
const person = { firstName: "Robert", lastName: "Jones", age: 37 }
//Expected Output: [ "Jerry", "Adam", "Robert"]

names.push(person.firstName)
console.log(names)