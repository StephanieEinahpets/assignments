var sq = document.getElementById("box");
sq.addEventListener("dblclick", function(){
    sq.style.backgroundColor = "#008000"
})
sq.addEventListener("mouseover", function(){
    sq.style.backgroundColor = "#0000ff"
})
sq.addEventListener("mousedown", function(){
    sq.style.backgroundColor = "#ff0000"
})
sq.addEventListener("mouseup", function(){
    sq.style.backgroundColor = "#ffff00"
})
document.addEventListener("scroll", function (){
    document.body.style.backgroundColor = "#ff8c00"
})
document.addEventListener("keydown", function (event){
    if (event.code === "KeyR") {
      sq.style.backgroundColor = "red";
    }
    if (event.code === "KeyO") {
      sq.style.backgroundColor = "orange";
    }
    if (event.code === "KeyY") {
      sq.style.backgroundColor = "yellow";
    }
    if (event.code === "KeyG") {
      sq.style.backgroundColor = "green";
    }
    if (event.code === "KeyB") {
      sq.style.backgroundColor = "blue";
    }})

