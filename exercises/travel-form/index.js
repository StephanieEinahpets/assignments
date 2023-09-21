var form = document.travelform
var submit = document.getElementById("submit");

function formAlert() {
    var firstName = form.firstName.value;
    var lastName = form.lastName.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form.location.value;
    var diet = [];
    for(let i = 0; i < form.restrictions.length; i++){
        if(form.restrictions[i].checked){
            diet.push(form.restrictions[i].value)
        }
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nLocation: " + location + "\nDiet: " + diet + "\nYour information has been received. Thank you!");
}


submit.addEventListener("click", formAlert)