// profile.js
document.addEventListener('DOMContentLoaded', function() {
    // Simulasi data pengguna (ganti dengan data sebenarnya dari backend)
    const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        orderHistory: [
            { id: 1, date: '2024-08-01', total: 150000 },
            { id: 2, date: '2024-08-05', total: 75000 }
        ],
        favoriteAddresses: [
            '123 Jalan bunga, metro barat',
            '456 Jalan kamboja, metro pusat'
        ],
        loyaltyPoints: 500
    };

    document.getElementById('user-name').textContent = userData.name;
    document.getElementById('user-email').textContent = userData.email;
    document.getElementById('loyalty-points').textContent = userData.loyaltyPoints;

    const orderHistoryList = document.getElementById('order-history-list');
    userData.orderHistory.forEach(order => {
        const li = document.createElement('li');
        li.textContent = `Pesanan #${order.id} - ${order.date} - Rp ${order.total.toLocaleString()}`;
        orderHistoryList.appendChild(li);
    });

    const favoriteAddressesList = document.getElementById('favorite-addresses-list');
    userData.favoriteAddresses.forEach(address => {
        const li = document.createElement('li');
        li.textContent = address;
        favoriteAddressesList.appendChild(li);
    });
});
