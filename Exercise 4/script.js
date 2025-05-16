document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('text-form');
    const userInput = document.getElementById('user-input');
    const displayArea = document.getElementById('display-area');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        const text = userInput.value.trim();
        
        if (text) {
            displayArea.textContent = `You entered: "${text}"`;
            userInput.value = ''; 
            userInput.focus(); 
        } else {
            displayArea.textContent = 'Please enter some text first!';
        }
    });
});