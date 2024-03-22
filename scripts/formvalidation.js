document.getElementById("registrationForm").addEventListener("submit", function(event) {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        
        event.preventDefault();
        
        document.getElementById("passwordMismatchError").style.display = "block";
        
        document.getElementById("password").value = "";
        document.getElementById("confirmPassword").value = "";
        document.getElementById("password").focus();
    }
});

    function checkPasswordMatch() {
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    if (password !== confirm_password) {
        document.getElementById("passwordMatchMessage").innerHTML = "Passwords do not match!";
        document.getElementById("password").value = "";
        document.getElementById("confirm_password").value = "";
        document.getElementById("password").focus();
    } else {
        document.getElementById("passwordMatchMessage").innerHTML = "";
    }
} 

function updateValue() {
    var rating = document.getElementById("pageRating").value;
    document.getElementById("displayValue").innerText = rating;
}