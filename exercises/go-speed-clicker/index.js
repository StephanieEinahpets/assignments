function countClicks(){
    var count = localStorage.getItem('counter');
    if (count !== null){
        var newClick = parseInt(count) + 1;
        localStorage.setItem('counter', newClick);
    }
    else{
        localStorage.setItem('counter', "1");
    }
   document.getElementById("showCount").innerHTML = count;
 }