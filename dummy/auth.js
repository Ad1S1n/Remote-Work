const signInBtn = document.getElementById("signIn");  
const signUpBtn = document.getElementById("signUp");  
const fistForm = document.getElementById("signup-form");  
const secondForm = document.getElementById("login-form");  
const container = document.querySelector(".container");  



signInBtn.addEventListener("click", () => {  
     container.classList.remove("right-panel-active");  
});  
signUpBtn.addEventListener("click", () => {  
     container.classList.add("right-panel-active");  
});  
fistForm.addEventListener("submit", (e) => e.preventDefault());  
secondForm.addEventListener("submit", (e) => e.preventDefault());





//LOGIN
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const loginEmail = loginForm['login-email'].value;
    const loginPassword = loginForm['login-password'].value;
    // console.log(loginEmail, loginPassword);
    auth.signInWithEmailAndPassword(loginEmail, loginPassword).then(() => {
        // console.log('login success');
        location = "main.html";
    }).catch(err => {
        const loginError = document.getElementById("loginError");
        loginError.innerText = err.message;
    })
})

function success() {
    container.classList.remove("right-panel-active"); 
}

// SIGNUP
const signupForm = document.getElementById("signup-form");
signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = signupForm['name'].value;
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;
    // console.log(name, email, password);
    signupForm.reset();
    auth.createUserWithEmailAndPassword(email, password).then((cred) => {
        // console.log(cred);
        return db.collection('users').doc(cred.user.uid).set({
            Name: name,
            Email: email,
            Password: password
        })
    }).then(success()).catch(err => {
        console.log(err.message);
        const signupError2 = document.getElementById('signupError');
        signupError2.innerText = err.message;
    })
})

