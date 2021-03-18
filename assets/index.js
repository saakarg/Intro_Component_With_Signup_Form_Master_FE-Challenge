const fName = document.getElementById("first_name");
const lName = document.getElementById("last_name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.querySelector(".submit_btn");

const validateInput = (el) => {
  // Checking if input class is empty
  console.log(el);
  if (el.children[0].value === "") {
    el.classList.add("error_field");
    if (el.id === "first_name") {
      el.children[2].textContent = "First Name cannot be empty";
    }
    if (el.id === "last_name") {
      el.children[2].textContent = "Last Name cannot be empty";
    }
    if (el.id === "password") {
      el.children[2].textContent = "Password cannot be empty";
    }
  }

  // if not empty REMOVE error_field Class
  if (el.children[0].value !== "") {
    el.classList.remove("error_field");
    el.children[2].textContent = "";
  }
};

const validateEmail = (email) => {
  const emailInput = email.children[0];
  const errorField = email.children[2];
  const regEx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // Matching the REGEXP with emailInput Value
  const match = regEx.test(emailInput.value);
  if (!match) {
    email.classList.add("error_field");
    errorField.textContent = "Looks like this is not an email";
  }

  // Checking if the Input IS EMPTY
  if (emailInput.value === "") {
    email.classList.add("error_field");
    errorField.textContent = "Email field cannot be empty";
  }

  // if the input is NOT Empty
  if (match && email.children[0].value !== "") {
    email.classList.remove("error_field");
    errorField.textContent = "";
  }
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Validating Inputs :-)
  validateInput(fName);
  validateInput(lName);
  validateInput(password);
  validateEmail(email);
});
