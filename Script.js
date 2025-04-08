document.getElementById('submitButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const messageElement = document.getElementById('message');
    
    if (name) {
      messageElement.textContent = `Olá, ${name}! Bem-vindo ao nosso site!`;
      messageElement.style.color = 'green';
    } else {
      messageElement.textContent = 'Por favor, digite seu nome!';
      messageElement.style.color = 'red';
    }
  });