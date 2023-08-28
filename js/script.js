// const form = document.getElementById("form");
// const email = document.getElementById("email");

// form.addEventListener("submit", (e) => {
//   let emailValue = email.value;
//   if (validateEmail(emailValue)) {
//     form.classList.remove("error-msg");
//     form.classList.remove("error-icon");
//   } else {
//     form.classList.add("error-msg");
//     form.classList.add("error-icon");
//   }
// });

// function validateEmail(email) {
//   var re =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }

var email = document.getElementById("email");
var errorMsg = document.getElementById("error-msg");

function validateEmail() {
  if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    errorMsg.innerHTML = "Please provide a valid email";
    errorMsg.style.color = "red";
    email.style.border = "1px solid red";
    email.style.background = "#e9988b";
    return false;
  }
  errorMsg.innerHTML = "";
  errorMsg.style.color = "#000";
  email.style.border = "#36384e";
  email.style.background = "#fff";
  return true;
}
