const button = document.getElementById("btn")
const goombainput = document.getElementById("goombainput")
const bombinput = document.getElementById("bombinput")
const cheepinput = document.getElementById("cheepinput")

function calc (){
    const result = (goombainput.valueAsNumber * 5) + (bombinput.valueAsNumber * 7) + (cheepinput.valueAsNumber * 11)
    const h1 = document.createElement("h1")
    h1.textContent = result
    document.getElementById("earnings").append(result + " Coins")
}

button.addEventListener("click", calc)