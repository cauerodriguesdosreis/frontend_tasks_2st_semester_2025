document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // impede o envio do formulário

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    console.log('Tentando login com:', email, password);

    // Simulação simples de validação para campos vazios :)
    if (email === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Criei as minhas condições de login apenas para teste
    if (email === 'caue@gmail.com' && password === '123456') {
        alert('Login realizado com sucesso!');
    } else {
        alert('Email ou senha incorretos.');
    }
});
