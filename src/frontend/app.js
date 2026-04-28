document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('calc-display');
    const errorDisplay = document.getElementById('error-message');
    const buttons = document.querySelectorAll('.btn');

    // Change this to your production backend URL when deploying
    const API_URL = 'http://localhost:3000/api/calculate';
    let currentExpression = '';
    let isWaitingForResponse = false;

    const updateDisplay = (value) => { display.value = value || '0'; };

    const setError = (message) => {
        errorDisplay.textContent = message;
        setTimeout(() => { errorDisplay.textContent = ''; }, 4000);
    };

    const toggleLoading = (isLoading) => {
        isWaitingForResponse = isLoading;
        buttons.forEach(btn => btn.disabled = isLoading);
        if (isLoading) { display.value = 'Calculating...'; }
    };

    const handleCalculate = async () => {
        if (!currentExpression) return;

        toggleLoading(true);
        errorDisplay.textContent = '';

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ expression: currentExpression })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Calculation failed');
            }

            currentExpression = String(data.result);
            updateDisplay(currentExpression);
        } catch (error) {
            setError(error.message);
            updateDisplay(currentExpression);
        } finally {
            toggleLoading(false);
        }
    };

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (isWaitingForResponse) return;

            const action = button.dataset.action;
            const value = button.dataset.value;

            if (action === 'clear') {
                currentExpression = '';
                updateDisplay(currentExpression);
            } else if (action === 'backspace') {
                currentExpression = currentExpression.slice(0, -1);
                updateDisplay(currentExpression);
            } else if (action === 'calculate') {
                handleCalculate();
            } else if (value) {
                currentExpression += value;
                updateDisplay(currentExpression);
            }
        });
    });
});
