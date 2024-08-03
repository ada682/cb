// cart.js
class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
    }

    addItem(item) {
        const existingItem = this.items.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({ ...item, quantity: 1 });
        }
        this.saveCart();
    }

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.saveCart();
    }

    updateQuantity(id, quantity) {
        const item = this.items.find(i => i.id === id);
        if (item) {
            item.quantity = quantity;
            this.saveCart();
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }
}

const cart = new Cart();

// Tambahkan event listener untuk tombol "Tambah ke Keranjang"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const id = parseInt(e.target.dataset.id);
        const item = menuItems.find(item => item.id === id);
        if (item) {
            cart.addItem(item);
            updateCartIcon();
        }
    });
});

function updateCartIcon() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.items.reduce((total, item) => total + item.quantity, 0);
}

updateCartIcon();
