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