const form = document.querySelector("form");
const emailInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", () => {
  
  const email = emailInput.value.trim();
  
  if (!validateEmail(email)) {
    emailInput.setCustomValidity(
      "Por favor, insira um endereço de e-mail válido."
    );
    emailInput.reportValidity();
    return;
  }

  const password = passwordInput.value;

  if (!isValidPassword(password)) {
    passwordInput.setCustomValidity(
      "Por favor, insira uma senha válida \n A senha deve ter pelo menos 8 caracteres\n Uma letra maiúscula e uma combinação de letras e números"
    );
    passwordInput.reportValidity();
  } else {
    window.location.href = "https://www.futfanatics.com.br/almanaqueflamengo";
  }
});
function isValidPassword(password){
const passwordRegex =  /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

return passwordRegex.test(password)
}

function validateEmail(email) {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return emailRegex.test(email);
}

/*const form = document.querySelector("form");
const emailInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const submitButton = document.querySelector("#submit");


submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  
  const email = emailInput.value.trim();
  if (!validateEmail(email)) {
    alert("Por favor, insira um endereço de e-mail válido.");
    return;
  }
  
  const password = passwordInput.value.trim();
  if (!validatePassword(password)) {
    alert(
      "Por favor, insira uma senha válida \n A senha deve ter pelo menos 8 caracteres\n Uma letra maiúscula e uma combinação de letras e números"
    );
    return;
  }
    
  submitButton.addEventListener("click", function () {
    window.location.href = "https://www.futfanatics.com.br/almanaqueflamengo";
  });
});

function validateEmail(email) {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  return passwordRegex.test(password);
}*/
