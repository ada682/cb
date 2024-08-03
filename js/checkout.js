// checkout.js
document.addEventListener('DOMContentLoaded', function() {
    const orderItems = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');
    const checkoutForm = document.getElementById('checkout-form');

    function displayOrderSummary() {
        orderItems.innerHTML = '';
        cart.items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} x ${item.quantity} - Rp ${(item.price * item.quantity).toLocaleString()}`;
            orderItems.appendChild(li);
        });
        orderTotal.textContent = `Rp ${cart.getTotal().toLocaleString()}`;
    }

    displayOrderSummary();

    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(checkoutForm);
        const orderData = {
            items: cart.items,
            total: cart.getTotal(),
            customerInfo: Object.fromEntries(formData)
        };
        // Kirim orderData ke server (implementasi tergantung pada backend Anda)
        console.log('Order placed:', orderData);
        alert('Pesanan Anda telah diterima! Terima kasih telah berbelanja di Happy Kitchen.');
        // Clear cart and redirect to home page
        localStorage.removeItem('cart');
        window.location.href = 'index.html';
    });
});
