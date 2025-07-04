document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Mobile menu toggle (would be added for mobile responsiveness)
    // Currently the site is responsive without JS for mobile
    
    // Any other interactive elements can be added here
});
// Add this to your existing script.js file
document.addEventListener('DOMContentLoaded', function() {
    // Existing smooth scrolling code...
    
    // Product Search Functionality
    if (document.getElementById('searchInput')) {
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.getElementById('searchButton');
        const productCards = document.querySelectorAll('.product-card');
        
        function filterProducts() {
            const searchTerm = searchInput.value.toLowerCase();
            let hasResults = false;
            
            productCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                    hasResults = true;
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Show "no results" message if needed
            const noResults = document.querySelector('.no-results');
            if (!hasResults) {
                if (!noResults) {
                    const productGrid = document.querySelector('.product-grid');
                    const message = document.createElement('div');
                    message.className = 'no-results';
                    message.textContent = 'No products found matching your search.';
                    productGrid.appendChild(message);
                }
            } else if (noResults) {
                noResults.remove();
            }
        }
        
        // Search when typing
        searchInput.addEventListener('input', filterProducts);
        
        // Search when button is clicked
        searchButton.addEventListener('click', filterProducts);
        
        // Search when Enter is pressed
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                filterProducts();
            }
        });
    }
});

