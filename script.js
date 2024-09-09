const email = document.getElementById("email");
const message = document.getElementById("message");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const form = document.getElementById("form");
const submitBtn = document.getElementById("submit-btn");
const errorMessage = document.getElementById("error-message")
const usernameError = document.querySelectorAll(".username-error");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");


function validateForm(){
    let validation = true;
    if(email.value === "" || message.value === ""){
        emailError.textContent = "Email is required";
        messageError.textContent = "Message input field cannot be empty."
        return validation = false

    }
    if(email.value.length < 10){
        messageError.textContent = "";
        emailError.textContent = "Invalid email address,"
        return validation = false;
    }

    if(firstName.value === "" || lastName.value === ""){
        usernameError[0].textContent = "First name is required";
        usernameError[1].textContent = "Last name is required";
        messageError.textContent = "";
        emailError.textContent = "";
        return validation = false;
    }

   

  

    
}



