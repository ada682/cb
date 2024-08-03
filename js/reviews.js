// reviews.js
document.addEventListener('DOMContentLoaded', function() {
    const reviewList = document.getElementById('review-list');
    const reviewForm = document.getElementById('review-form');

    // Simulasi data ulasan (ganti dengan data sebenarnya dari backend)
    const reviews = [
        { id: 1, name: 'Andi', rating: 5, comment: 'Bakso terenak yang pernah saya coba!' },
        { id: 2, name: 'Budi', rating: 4, comment: 'Pelayanan cepat dan ramah.' }
    ];

    function displayReviews() {
        reviewList.innerHTML = '';
        reviews.forEach(review => {
            const reviewItem = document.createElement('div');
            reviewItem.classList.add('review-item');
            reviewItem.innerHTML = `
                <h4>${review.name}</h4>
                <div class="stars">
                    ${getStarIcons(review.rating)}
