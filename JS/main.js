
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const studentsGrid = document.getElementById('students-grid');
    const studentCards = studentsGrid.querySelectorAll('.student-card');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        studentCards.forEach(card => {
            const name = card.querySelector('h2').textContent.toLowerCase();
            if (name.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

   
    const listaBtn = document.querySelector('.lista-btn');
    listaBtn.addEventListener('click', () => {
        studentsGrid.classList.toggle('list-view');
    });
});

