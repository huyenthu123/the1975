const buyBtns = document.querySelectorAll('.js-buy-tickets');
const modal = document.querySelector('.modal')
const modalContainer = document.querySelector('.modal-container')
const modalClose = document.querySelector('.modal-close')
// Hàm hiển thị modal mua vé (Thêm class open vào modal)    
function showBuyTickets() {

    modal.classList.add('open')
}
// Hàm ẩn modal mua vé (Gỡ bỏ class open của modal)   
function hideBuyTickets() {
    modal.classList.remove('open')
}
// Lặp qua từng thẻ buttton và nghe hành vi click 
for (const buyBtn of buyBtns) {
    console.log("12321")
    buyBtn.addEventListener('click', showBuyTickets)
}
//Nghe hành vi click vào button close  
modalClose.addEventListener('click', hideBuyTickets)
modal.addEventListener('click', hideBuyTickets)
// Ngăn chặn việc nổi bọt
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})



//  nút back to top
var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

// phần pupop send message
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");


document.getElementById("submit").addEventListener("click", function (e) {
    if (contactName.value != "" && contactEmail.value != "") {
        e.preventDefault();
        alert("Message sent successfully")
    }
});

var buttonSignIn = document.getElementById("login");

buttonSignIn.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "http://127.0.0.1:5500/sign/SignIn.html";
})