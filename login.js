function login() {
  var emailInput = document.getElementById("email");
  var emailErrorMessage = document.getElementById("email-error-message");

  if (!emailInput.checkValidity()) {
    emailErrorMessage.textContent = emailInput.validationMessage;
    emailInput.focus();
    return false;
  }

  // Redirect to introduktion.html
  window.location.href = "introduktion.html";
}
