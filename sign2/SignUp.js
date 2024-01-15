var buttonSignIn = document.getElementById("login");

buttonSignIn.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "http://127.0.0.1:5500/sign/SignIn.html";
})