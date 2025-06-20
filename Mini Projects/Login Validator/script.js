"use script";

const email = document.querySelector(".email");
const password = document.querySelector(".password");
const submitButton = document.querySelector(".form");
const eye = document.querySelector(".form i");

// email validate
function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// password validate
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
function validatePassword(password) {
  return passwordRegex.test(password);
}

// events
submitButton.addEventListener("submit", (e) => {
  e.preventDefault();

  // get the email
  const emailVal = email.value;
  const passVal = password.value;

  // validate the email and passVal
  if (!validateEmail(emailVal)) {
    alert("The email doesn't have proper format");
  } else if (!validatePassword(passVal)) {
    alert(
      "Password must contain at least 8 characters with one digit, uppercase letter and special character"
    );
  } else {
    alert("Successfuly Logged In!");
  }
});

let hidden = true;
eye.addEventListener("click", (e) => {
  if (hidden) {
    password.type = "text";
    eye.className = "fa-solid fa-eye-slash fa-sm";
    hidden = false;
  } else {
    password.type = "password";
    eye.className = "fa-solid fa-eye fa-sm";
    hidden = true;
  }
});
