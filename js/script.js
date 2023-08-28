var email = document.getElementById("email").value;
var emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
var Form = document.getElementById("form");

var errorMsg = document.querySelector("error-msg");
function validateEmail() {
  if (!email.match(emailRegex)) {
    errorMsg.innerHTML = "Please provide a valid email";
    return false;
  }
}
