var newHeader = document.getElementById("header")
newHeader.innerHTML = "<h1> This header was made with JavaScript </h1>"
newHeader.style.textAlign = "center"

var headerTwo = document.createElement("h3")
headerTwo.textContent = "Stephanie Blackman"
newHeader.append(headerTwo)
headerTwo.style.color = "purple"

var span = document.createElement("span")
span.textContent = " wrote the JavaScript"
headerTwo.append(span)
span.style.color = "black"

var firstMessage = document.getElementById("firstLeft")
firstMessage.textContent = "In West Philidelphia, born and raised"
var secondMessage = document.getElementById("firstRight")
secondMessage.textContent = "On the playground is where I spent most of my days"
var thirdMessage = document.getElementById("secondLeft")
thirdMessage.textContent = "Chillin' out max, and relaxin, all cool"
var fourthMessage = document.getElementById("secondRight")
fourthMessage.textContent = "And shootin' some B ball outside of school"

var msgElements = document.getElementsByClassName("message")
var clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", function(){
    for (var i = 0; i < msgElements.length; i++) {
        msgElements[i].textContent = ""
    }
})

var rightMessages = document.querySelectorAll(".right")
var leftMessages = document.querySelectorAll(".left")
var dropDownElement = document.getElementById("theme-drop-down")
dropDownElement.addEventListener("change", function(){
    if (dropDownElement.value == "theme-two"){
        rightMessages.forEach(function(item){
            item.style.backgroundColor = "red"
        })
        leftMessages.forEach(function(item){
            item.style.backgroundColor = "black"
            item.style.color = "white"
    })
    if (dropDownElement.value == "theme-one"){
            rightMessages.forEach(function(item){
                item.style.backgroundColor = "blue"
            })
            leftMessages.forEach(function(item){
                item.style.backgroundColor = "brown"
            })
    }
    
}})


