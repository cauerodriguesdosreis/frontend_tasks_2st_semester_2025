document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const termsCheckbox = document.getElementById("remember");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // impede o envio automático do form

    // VALIDAÇÕES SIMPLES COM ALERTAS

    if (nameInput.value.trim() === "") {
      alert("O campo 'Name' é obrigatório.");
      nameInput.focus();
      return;
    }

    if (emailInput.value.trim() === "") {
      alert("O campo 'Email address' é obrigatório.");
      emailInput.focus();
      return;
    }

    if (passwordInput.value.trim() === "") {
      alert("O campo 'Password' é obrigatório.");
      passwordInput.focus();
      return;
    }

    if (passwordInput.value.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres.");
      passwordInput.focus();
      return;
    }

    if (!termsCheckbox.checked) {
      alert("Você deve concordar com os termos e políticas antes de continuar.");
      termsCheckbox.focus();
      return;
    }

    // Se passou em todas as validações
    alert("Cadastro realizado com sucesso!");
    form.reset();
  });
});
