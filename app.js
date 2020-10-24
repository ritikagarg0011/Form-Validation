let form = document.querySelector("#form");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let smallPassword = document.querySelector("#passwordSmall");
let formGroup = document.querySelector(".form-group");
let button = document.querySelector("button");

username.addEventListener("input", validate);
password.addEventListener("input", validate);

let reg_password = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

button.disabled = true;

form.addEventListener("submit", (e) => {
  //   console.log(e);
  // e.preventDefault();
  console.log(username.value);
  console.log(password.value);
});

function validate(e) {
  let target = e.target;
  if (target.name === "password") {
    //should test regular expression
    if (reg_password.test(target.value)) {
      target.classList.add("text-success");
      target.classList.remove("text-danger");

      smallPassword.innerHTML = "valid password";
      smallPassword.classList.add("text-success");
      smallPassword.classList.remove("text-danger");
      button.disabled = false;
    } else {
      target.classList.add("text-danger");
      target.classList.remove("text-success");

      smallPassword.innerHTML = "invalid password";
      smallPassword.classList.add("text-danger");
      smallPassword.classList.remove("text-success");
      button.disabled = true;
    }
  }
}

//   let errorMessages = [];
//   if (username.value === "" || username.value === undefined) {
//     errorMessages.push(`<p>Username is Required</p>`);
//   }
//   if (password.value==="" && password.value <= 5) {
//     errorMessages.push(`<p>Password should be minimum of 5 characters!</p>`);
//   }
//   if(errorMessages.length > 0){
//     e.preventDefault(); //to stop default behaviour (refresh of page) of the browser upon submitting form
//       errorBlock.innerHTML = errorMessages.join("");
//   }
// //   console.log(errorMessages);
// /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/
