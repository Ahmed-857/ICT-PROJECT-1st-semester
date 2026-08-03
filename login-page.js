// ================= PASSWORD TOGGLE =================

const toggleButtons =
document.querySelectorAll(".togglePassword");

toggleButtons.forEach(button => {

    button.addEventListener("click", () => {

        const passwordField =
        button.previousElementSibling;

        if(passwordField.type === "password"){

            passwordField.type = "text";
            button.textContent = "🙈";

        }
        else{

            passwordField.type = "password";
            button.textContent = "👁";

        }

    });

});

// ================= LOGIN FORM =================

const loginForm =
document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event){

    event.preventDefault();

    alert(
        "Welcome back to Crustz n' Bites!"
    );

    window.location.href = "index.html";

});

// ================= SIGNUP FORM =================

const signupForm =
document.getElementById("signupForm");

signupForm.addEventListener("submit", function(event){

    event.preventDefault();

    alert(
        "Account created successfully!"
    );

    window.location.href = "index.html";

});

// ================= PASSWORD STRENGTH =================

const passwordField =
document.getElementById("signupPassword");

const strengthText =
document.getElementById("passwordStrength");

passwordField.addEventListener("input", () => {

    const password =
    passwordField.value;

    if(password.length < 6){

        strengthText.textContent =
        "Weak Password";

        strengthText.style.color =
        "#ff4d4d";
    }

    else if(password.length < 10){

        strengthText.textContent =
        "Medium Password";

        strengthText.style.color =
        "#f0c040";
    }

    else{

        strengthText.textContent =
        "Strong Password";

        strengthText.style.color =
        "#4CAF50";
    }

});