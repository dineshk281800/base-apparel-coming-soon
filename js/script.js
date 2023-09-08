const emailEl = document.getElementById("email");
const errorIconEl = document.getElementById("error-icon");
const errorMsgEl = document.getElementById("error-msg");
const emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

function validateEmail() {
  if (!emailEl.value.match(emailRegex)) {
    errorMsgEl.innerHTML = "Please provide a valid email";
    errorIconEl.style.display = "block";
    emailEl.style.border = "2px solid hsl(0, 93%, 68%)";
    return false;
  }
  errorMsgEl.innerHTML = "";
  errorIconEl.style.display = "none";
  emailEl.style.border = "1px solid hsl(0, 36%, 70%)";
  return true;
}
