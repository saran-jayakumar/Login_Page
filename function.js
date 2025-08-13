const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkPassword = document.getElementById("check-password");

form.addEventListener("submit", (e) => {
    
    if(validateInputs()) {
        e.preventDefault();
    }
});

function validateInputs() {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const checkPasswordValue = checkPassword.value.trim();
    let success = true;

    if (usernameValue === "") {
        success = false;    
        setError(username, "Username cannot be blank");
    }else {
        setSucess(username);
    }
    if (passwordValue === "") {
        success = false;
        setError(password, "Password cannot be blank");
    } else if (passwordValue.length < 8) {
        setError(password, "Password must be at least 8 characters");
    } 
    else if(!/[0-9]/.test(passwordValue)){
        setError(password, "Password must contain at least one number");
    }
    else if(!/[a-z]/.test(passwordValue)){
        setError(password,"Must contain at least one lowercase letter")
    }
    else if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
        setError(password,"Must contain at least one special character")}
        else if(!/[0-9]/.test(password)){
            setError(password,"Must contain at least one uppercase letter")
        }
    else{
        setSucess(password);
    }
    if (checkPasswordValue === "") {
        success = false;
        setError(checkPassword, "Please confirm your password");
    } else if (checkPasswordValue !== passwordValue) {
        setError(checkPassword, "Passwords do not match");
    } else {
        setSucess(checkPassword);
    }
    return success;
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error");
    errorElement.innerText = message;
    inputGroup.classList.add("error");
    inputGroup.classList.remove("success");
}
function setSucess (element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error");
    errorElement.innerText = '';
    inputGroup.classList.add("success");
    inputGroup.classList.remove("error");
}