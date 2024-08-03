// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi komponen-komponen utama
    initializeHeader();
    initializeMenu();
    initializeCart();
    initializeReviews();
    
    // Animasi scroll halus untuk link anchor
    smoothScrolling();
});

function initializeHeader() {
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Toggle menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

function initializeMenu() {
    const menuItems = [
        { id: 1, name: 'Bakso Spesial', category: 'bakso', price: 25000, image: 'images/bakso-spesial.jpg' },
        { id: 2, name: 'Nastar', category: 'kue-kering', price: 50000, image: 'images/nastar.jpg' },
        { id: 3, name: 'Risoles', category: 'jajanan-pasar', price: 15000, image: 'images/risoles.jpg' },
        { id: 4, name: 'Bolu Kukus', category: 'kue-basah', price: 20000, image: 'images/bolu-kukus.jpg' },
        { id: 5, name: 'Es Teh', category: 'minuman', price: 5000, image: 'images/es-teh.jpg' },
        // Tambahkan lebih banyak item menu sesuai kebutuhan
    ];

    const menuGrid = document.querySelector('.menu-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function renderMenuItems(items) {
        menuGrid.innerHTML = '';
        items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item', item.category);
            menuItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p class="price">Rp ${item.price.toLocaleString()}</p>
                <button class="add-to-cart" data-id="${item.id}">Tambah ke Keranjang</button>
            `;
            menuGrid.appendChild(menuItem);
        });
    }

    function filterMenu(category) {
        if (category === 'all') {
            renderMenuItems(menuItems);
        } else {
            const filteredItems = menuItems.filter(item => item.category === category);
            renderMenuItems(filteredItems);
        }
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.getAttribute('data-filter');
            filterMenu(category);
        });
    });

    // Render menu awal
    renderMenuItems(menuItems);
}

function initializeCart() {
    const cartIcon = document.querySelector('.cart-icon');
    const cartCount = document.querySelector('.cart-count');
    
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }

    // Event listener untuk tombol "Tambah ke Keranjang"
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const itemId = parseInt(e.target.getAttribute('data-id'));
            addToCart(itemId);
            updateCartCount();
        }
    });

    function addToCart(itemId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.id === itemId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id: itemId, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    updateCartCount();
}

function initializeReviews() {
    const reviewsContainer = document.querySelector('.reviews-container');
    if (reviewsContainer) {
        // Simulasi data ulasan (ganti dengan data sebenarnya dari backend)
        const reviews = [
            { name: 'Andi', rating: 5, comment: 'Bakso terenak yang pernah saya coba!' },
            { name: 'Budi', rating: 4, comment: 'Pelayanan cepat dan ramah.' },
        ];

        const reviewsList = reviewsContainer.querySelector('.reviews-list');
        reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review-item');
            reviewElement.innerHTML = `
                <h4>${review.name}</h4>
                <div class="stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
                <p>${review.comment}</p>
            `;
            reviewsList.appendChild(reviewElement);
        });
    }
}

function smoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
