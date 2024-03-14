document.addEventListener("DOMContentLoaded", function () {
  // burger menu

  const menuButton = document.getElementById('menu_button');
  const icon = menuButton.querySelector('i');
  const nav = document.querySelector("nav");

  menuButton.addEventListener("click", () => {
    if (nav.style.display === "block") {
      nav.style.display = "none";
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    } else {
      nav.style.display = "block";
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    }
  });


  // auth menu
  const userButton = document.getElementById("user_button");
  const userMenu = document.getElementById("user_menu");
  const authLinks = document.getElementById("auth_links");
  const msgLoggedIn = document.getElementById("msg_logged_in");
  const greetingMsg = document.getElementById("greeting_message");

  if (sessionStorage.getItem('isLoggedIn')){
    authLinks.style.display = "none";
    greetingMsg.innerText = `Hello ${sessionStorage.getItem('activeUser')}`;
    msgLoggedIn.style.display = "block";
  }

  userButton.addEventListener("click", () => {
    if (userMenu.style.display === "flex") {
      userMenu.style.display = "none";
    } else {
      userMenu.style.display = "flex";
    }
  });
});

var isLoggedIn = false;
var activeUser = '';

// register function

function validateRegistrationForm() {
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirm_password').value;
  var registerMessageSpan = document.getElementById('register_message');

  // check if any fields are empty
  if (username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
    registerMessageSpan.innerText = 'Please fill in all fields.';
  }

  // check if two passwords match
  if (password !== confirmPassword) {
    registerMessageSpan.innerText = 'Passwords do not match.';
  }

  // check if user already exists
  if (localStorage.getItem(email)) {
    registerMessageSpan.innerText = 'User with this email already exists.';
  }

  // store user in local storage
  var user = { username: username, password: password };
  localStorage.setItem(email, JSON.stringify(user));

  registerMessageSpan.innerText = 'Registration successful.';
}

// sign in function

function validateSignInForm() {
  var emailInput = document.getElementById('email');
  var passwordInput = document.getElementById('password');
  var email = emailInput.value;
  var password = passwordInput.value;
  var signInMessageSpan = document.getElementById('sign_in_message');

  // check if any fields are empty
  if (email.trim() === '' || password.trim() === '') {
    signInMessageSpan.innerText = 'Please enter both email and password.';
  }

  // check if user already exists
  var storedUser = JSON.parse(localStorage.getItem(email));
  if (storedUser && storedUser.password === password) {
    signInMessageSpan.innerText = 'Sign-in successful.';
    sessionStorage.setItem('isLoggedIn', '1');
    sessionStorage.setItem('activeUser', storedUser.username);
    emailInput.value = '';
    passwordInput.value = '';
  } else {
    signInMessageSpan.innerText = 'Invalid email or password.';
    passwordInput.value = '';
  }
}