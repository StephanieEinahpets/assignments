class player {
    constructor (){
        this.name = ""
        this.totalCoins = 0
        this.status = "Small"
        this.hasStar = false
    }

    setName(namePicked){
        this.name = namePicked
    }

    gotHit(){
        switch (this.status) {
            case "Powered Up":
                this.status = "Big"
                this.hasStar = false
                break
            case "Big":
                this.status = "Small"
                break
            case "Small":
                this.status = "Dead"
                break
        }
    }

    gotPowerup(){
        switch (this.status) {
            case "Small":
                this.status = "Big"
                break;
            case "Big":
                this.status = "Powered Up"
                break
            case "Powered Up":
                this.hasStar = true
                break
        }
    }

    addCoin(){
        this.totalCoins++
    }

    print(){
        console.log(`Name: ${this.name}`)
        console.log(`Total Coins: ${this.totalCoins}`)
        console.log(`Status: ${this.status}`)
        console.log(`Stars: ${this.hasStar}\n`)
    }
}
    

const user = new player();
user.setName("Mario")




function randomRange (){
    const num = Math.floor(Math.random() * 3)  
    switch (num){
        case 0:
            user.gotHit()
            break
        case 1:
            user.gotPowerup()
            break
        case 2:
            user.addCoin()
            break
    }
    user.print()
    if (user.status === "Dead"){
        clearInterval(setinterval)
        console.log(`${user.name} has died. Game Over.`)
    }
}


const setinterval = setInterval(randomRange, 500)