document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('interactive-table');
    let activeRow = null;

    const rows = table.querySelectorAll('tr:not(:first-child)');
    
    rows.forEach(row => {
        row.classList.add('normal');

        row.addEventListener('mouseover', () => {
            if (!row.classList.contains('active')) {
                row.classList.add('hover');
            }
        });
        
        
        row.addEventListener('mouseout', () => {
            row.classList.remove('hover');
        });
        
        
        row.addEventListener('click', () => {
            rows.forEach(r => {
                if (r !== row) r.classList.remove('active');
            });
            
            row.classList.toggle('active');
            if (row.classList.contains('active')) {
                row.classList.remove('hover');
                activeRow = row;
            } else {
                activeRow = null;
            }
        });
        
        
        row.addEventListener('dblclick', () => {
            row.className = 'normal';
            if (activeRow === row) {
                activeRow = null;
            }
        });
    });
});