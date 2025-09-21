const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const calculateBtn = document.getElementById('calculate-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsContainer = document.getElementById('results-container');
const resultsList = document.getElementById('results-list');
const errorMessage = document.getElementById('error-message');

/**
 * Função para limpar os campos de input, a lista de resultados e as mensagens de erro.
 * Deixa a calculadora no estado inicial.
 */
function clearCalculator() {
    number1Input.value = '';
    number2Input.value = '';
    resultsContainer.classList.add('hidden'); 
    errorMessage.textContent = ''; 
}

/**
 * Função para exibir mensagens de erro para o usuário de forma clara.
 * @param {string} message - A mensagem de erro a ser exibida.
 */
function displayError(message) {
    errorMessage.textContent = message; 
    resultsContainer.classList.add('hidden'); 
}

/**
 * Função principal que executa os cálculos e atualiza a tela.
 */
function performCalculations() {

    errorMessage.textContent = '';

    const num1 = parseFloat(number1Input.value);
    const num2 = parseFloat(number2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        displayError("Por favor, digite números válidos em ambos os campos.");
        return; 
    }

    const soma = num1 + num2;
    const subtracao = num1 - num2;
    const multiplicacao = num1 * num2;
    let divisao; 

    if (num2 === 0) {
        divisao = "Não é possível dividir por zero";
    } else {
    
        divisao = (num1 / num2).toFixed(4); 
    }
    
    resultsList.innerHTML = `
        <li>Soma ( + ): <span>${soma.toLocaleString('pt-BR')}</span></li>
        <li>Subtração ( - ): <span>${subtracao.toLocaleString('pt-BR')}</span></li>
        <li>Multiplicação ( * ): <span>${multiplicacao.toLocaleString('pt-BR')}</span></li>
        <li>Divisão ( / ): <span>${divisao.toLocaleString('pt-BR')}</span></li>
    `;

    resultsContainer.classList.remove('hidden');
}

calculateBtn.addEventListener('click', performCalculations);

clearBtn.addEventListener('click', clearCalculator);

number1Input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        performCalculations();
    }
});

number2Input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        performCalculations();
    }
});