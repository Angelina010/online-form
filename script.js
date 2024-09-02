function checkPassword(event){
    const password = document.querySelector("#password");
    const confiPassword = document.querySelector("#password_confirmation");
    const message = document.querySelector(".message");

    if (password.value.length > 0){
        if (password.value != confiPassword.value){
            message.textContent = "Passwords do not match";
            password.style.borderColor = "red";
            confiPassword.style.borderColor = "red";
            event.preventDefault();
        }
    }
}

const button = document.querySelector("button");
button.addEventListener("click", checkPassword);