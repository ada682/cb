document.addEventListener('DOMContentLoaded', function() {
    // Menu category filtering
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            menuItems.forEach(item => {
                if (category === 'all' || item.classList.contains(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Implementasi fitur lainnya di sini
});
