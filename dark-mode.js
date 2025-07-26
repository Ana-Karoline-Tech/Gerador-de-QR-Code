function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

function toggleTheme() {
            const body = document.body;
            const themeToggle = document.querySelector('.theme-toggle');
            
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                themeToggle.innerHTML = '☀️ Light Mode';
            } else {
                themeToggle.innerHTML = '🌙 Dark Mode';
            }
        }

        // Detectar preferência do sistema (opcional)
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
            document.querySelector('.theme-toggle').innerHTML = '☀️ Light Mode';
        }