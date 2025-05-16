document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('styled-table');
    
    document.addEventListener('keydown', (event) => {

        if (event.key === 'a' || event.key === 'A') {
            table.classList.add('red-border');
        }
        
        if (event.key === 'r' || event.key === 'R') {
            table.classList.remove('red-border');
        }
    });
});