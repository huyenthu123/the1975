// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3t60_tDxyUIq9qXghXffdQjl2hKdT7lM",
  authDomain: "login-example-2446c.firebaseapp.com",
  projectId: "login-example-2446c",
  storageBucket: "login-example-2446c.appspot.com",
  messagingSenderId: "38971595443",
  appId: "1:38971595443:web:994063862b9220d49caec6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// inputs
const email = document.getElementById('email').Value;
const password = document.getElementById('password').value;

// submit button

const submit = document.getElementById('submit');
submit.addEventListener("click",function (event){
  event.preventDefault()
  // alert()
})
