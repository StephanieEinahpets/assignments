const addButton = document.getElementById("addButton")
const subButton = document.getElementById("subButton")
const mulButton = document.getElementById("mulButton")
const addA = document.getElementById("addA")
const addB = document.getElementById("addB")
const subA = document.getElementById("subA")
const subB = document.getElementById("subB")
const mulA = document.getElementById("mulA")
const mulB = document.getElementById("mulB")
const divA = document.getElementById("divA")
const divB = document.getElementById("divB")

addButton.addEventListener("click", function(){
    const result = addA.valueAsNumber + addB.valueAsNumber
    const h6 = document.createElement("h6")
    h6.textContent = result
    document.getElementById("addDiv").append(result)
})

subButton.addEventListener("click", function(){
    const result = subA.valueAsNumber - subB.valueAsNumber
    const h6 = document.createElement("h6")
    h6.textContent = result
    document.getElementById("subDiv").append(result)
})

mulButton.addEventListener("click", function(){
    const result = mulA.valueAsNumber * mulB.valueAsNumber
    const h6 = document.createElement("h6")
    h6.textContent = result
    document.getElementById("mulDiv").append(result)
})

divButton.addEventListener("click", function(){
    const result = divA.valueAsNumber / divB.valueAsNumber
    const h6 = document.createElement("h6")
    h6.textContent = result
    document.getElementById("divDiv").append(result)
})