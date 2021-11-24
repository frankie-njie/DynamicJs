let form = document.getElementsByTagName("form")[0];
let allInputs = document.querySelectorAll("input");
let formErrors = document.getElementById("formError");

allInputs.forEach((input, i) => {
  input.addEventListener("input", function (e) {
    if (input.validity.valid) {
      formErrors.textContent = "valid input";
      formErrors.classList.remove("wrong");
      formErrors.classList.add("correct");
      input.classList.add("passed");
    } else {
      showErrors(i);
      input.classList.add("failed");
    }
  });
});

form.addEventListener("submit", function (e) {
  allInputs.forEach((input, i) => {
    e.preventDefault();
    if (!input.validity.valid) {
      showErrors(i);
      console.log("not valid");
      formErrors.classList.remove("correct");
      formErrors.classList.add("wrong");
    } else {
      formErrors.textContent = "All inputs are valid";
      formErrors.classList.add("correct");
      input.value = "";
      input.classList.remove("passed");
      input.classList.remove("failed");
    }
  });
});

function showErrors(index) {
  //check all error cases
  let expression = allInputs[index].validity;

  if (expression.valueMissing) {
    formErrors.textContent = `You need to enter ${allInputs[index].getAttribute(
      "type"
    )} field.`;
    formErrors.classList.add("wrong");
  } else if (expression.typeMismatch) {
    formErrors.textContent = "The entered values must be an e-mail address";
    formErrors.classList.add("wrong");
  } else if (expression.tooShort) {
    formErrors.textContent = `The value entered should be at least ${allInputs[index].minLength} characters; you entered ${allInputs[index].value.length}.`;
    formErrors.classList.add("wrong");
  } else if (expression.patternMismatch) {
    formErrors.textContent =
      "Your password needs needs to include at least a small letter(a), number(0), capital letter(A) and special digit(#) ";
    formErrors.classList.add("wrong");
  }
}
