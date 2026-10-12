const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

/* SWITCH FORMS */

function showSignup(){

    loginForm.classList.add("hidden");

    signupForm.classList.remove("hidden");
}

function showLogin(){

    signupForm.classList.add("hidden");

    loginForm.classList.remove("hidden");
}

/* LOGIN VALIDATION */

const loginBtn = document.querySelector("#loginForm .auth-btn");

loginBtn.addEventListener("click", function(){

    const email =
    document.querySelector(
    "#loginForm input[type='email']"
    );

    const password =
    document.querySelector(
    "#loginForm input[type='password']"
    );

    if(
        email.value.trim() === "" ||
        password.value.trim() === ""
    ){

        alert("Please fill all login fields");

        return;
    }

    alert("Login Successful");
});

/* SIGNUP VALIDATION */

const signupBtn = document.querySelector("#signupForm .auth-btn");

signupBtn.addEventListener("click", function(){

    const name =
    document.querySelector(
    "#signupForm input[type='text']"
    );

    const email =
    document.querySelector(
    "#signupForm input[type='email']"
    );

    const password =
    document.querySelector(
    "#signupForm input[type='password']"
    );

    if(
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        password.value.trim() === ""
    ){

        alert("Please fill all signup fields");

        return;
    }

    alert("Account Created Successfully");
});