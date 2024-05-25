// youtube
var buttonSignIn = document.getElementById("youtube");

buttonSignIn.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "https://www.youtube.com/@the1975/featured";
})
// facebook
var buttonSignIn = document.getElementById("face");

buttonSignIn.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "https://www.facebook.com/the1975";
})
// twitter
var buttonSignIn = document.getElementById("twitter");

buttonSignIn.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "https://twitter.com/the1975";
})
// tiktok
var buttonSignIn = document.getElementById("tiktok");

buttonSignIn.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "https://www.tiktok.com/@the1975?lang=en";
})
// information 1975
var buttonSignIn = document.getElementById("informantion1975");

buttonSignIn.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "https://vi.wikipedia.org/wiki/The_1975";
})
// button-tickets
var buttonSignIn = document.getElementById("button-tickets");

buttonSignIn.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "http://127.0.0.1:5500/html/Tickets.html";
})
// store
var buttonSignIn = document.getElementById("store");

buttonSignIn.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "http://127.0.0.1:5500/html/The1975-index.html#";
})

// validation form contact
// const inputfullname = document.querySelector(".input-field-fullname");
// const inputemail_address = document.querySelector(".input-field-email_address");
// const inputphone_number = document.querySelector(".input-field-phone_number");
// const inputemail_Subject = document.querySelector(".input-field-email_Subject");
// const btnLogin = document.querySelector(".btn");

// validation form contact

// btnLogin.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (inputfullname.value === "" || inputemail_address.value === "") {
//     alert("vui lòng không để trống");
//   } else {
//     const user = JSON.parse(localStorage.getItem(inputfullname.value));
//     if (
//       user.username === inputfullname.value &&
//       user.email_address === inputemail_address.value
//     ) {
//       alert("Đăng Nhập Thành Công");
//       window.location.href = "";
//     } else {
//       alert("Đăng Nhập Thất Bại");
//     }
//   }
// });
