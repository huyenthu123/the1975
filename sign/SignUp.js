var form = document.getElementById("form")
// fullname
var inputfullname = document.getElementById("input-name");
var fullNamespan = document.getElementById("fullname-span");

// age
var inputage = document.getElementById("input-age");
var ageSpan = document.getElementById("fullname-span1")

//phone
var inputphone = document.getElementById("input-phone");
var phoneSpan = document.getElementById("fullname-span2")

// gender
var inputgender = document.getElementById("input-gender");
var genderSpan = document.getElementById("fullname-span3");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(inputfullname.value);
// name
    if (inputfullname.value == "") {
        // console.log("Bạn chưa nhập gì");
        fullNamespan.classList.add("error-fullname");
    } else {
        // console.log("Bạn đã nhập");
        fullNamespan.classList.remove("error-fullname");
    }
});
// Age
form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(inputage.value);

    if (inputage.value == "") {
        // console.log("Bạn chưa nhập gì");
        ageSpan.classList.add("error-fullname");
    } else {
        // console.log("Bạn đã nhập");
        ageSpan.classList.remove("error-fullname");
    }
});
// phone
form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(inputphone.value);

    if (inputphone.value == "") {
        // console.log("Bạn chưa nhập gì");
        phoneSpan.classList.add("error-fullname");
    } else {
        // console.log("Bạn đã nhập");
        phoneSpan.classList.remove("error-fullname");
    }
});
// gender
form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(inputgender.value);

    if (inputgender.value == "") {
        // console.log("Bạn chưa nhập gì");
        genderSpan.classList.add("error-fullname");
    } else {
        // console.log("Bạn đã nhập");
        genderSpan.classList.remove("error-fullname");
    }
});
