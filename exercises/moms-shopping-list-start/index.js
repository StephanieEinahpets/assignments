const form = document.addItem

form.addEventListener("submit", e => {
    e.preventDefault()
    
    const newItem = form.title.value
    form.title.value = ""
    

    const li = document.createElement("li")
    li.textContent = newItem
    document.getElementById("list").appendChild(li)

    const button = document.createElement("button")
    button.innerHTML = " X "
    li.append(button)
    button.addEventListener("click", e => {
        li.remove()
    })
})

// ** Extra credit attempt **
    // const editButton = document.createElement("button")
    // editButton.innerHTML = "edit"
    // li.append(editButton)
    // edit.addEventListener("click", e => {
    //     edit.innerHTML = "save"
    //     li.innerHTML = "<input />"

// })