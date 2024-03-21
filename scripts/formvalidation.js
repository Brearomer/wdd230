const form = document.getElementById("form");

form.addEventListener("focusin", (event)=>{
    event.target.style.background = "lightgray";
}); 

form.addEventListener("focusout", (event)=>{
    event.target.style.background="";
}); 

function validateEmail(){
    var emailInput = document.getElementById("email");
    var emailPattern = /^[a-zA-ZO-9._%+-]+@byui\.edu$/;

    if(!isValid){
      emailInput.setCustomValidity("Please enter a vaild email address.")

    } else{
        emailInput.setCustomValidity("");
    }
} 

function updateValue(){
    var rangeValue = document.getElementById("ageRating").value;
    document.getElementById("displayValue").textContent = rangeValue;
}
