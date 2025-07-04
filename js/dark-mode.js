document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const darkModeStyle = document.getElementById('darkModeStyle');
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Check for saved theme preference or use the system preference
    let darkMode = localStorage.getItem('darkMode') === 'true' || 
                  (localStorage.getItem('darkMode') === null && prefersDarkMode);
    
    // Apply the initial theme
    updateTheme(darkMode);
    
    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', function() {
        darkMode = !darkMode;
        localStorage.setItem('darkMode', darkMode);
        updateTheme(darkMode);
    });
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (localStorage.getItem('darkMode') === null) {
            darkMode = e.matches;
            updateTheme(darkMode);
        }
    });
    
    function updateTheme(isDark) {
        if (isDark) {
            darkModeStyle.disabled = false;
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            darkModeStyle.disabled = true;
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }
});