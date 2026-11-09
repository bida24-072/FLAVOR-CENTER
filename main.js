// --- WHATSAPP ORDER INTEGRATION ---
const whatsappNumber = "267XXXXXXXXX"; // REPLACE WITH ACTUAL NUMBER

function orderViaWhatsApp(productName, price) {
    const message = `Hello Flavor Centre! I would like to order the "${productName}" for ${price}. Is it available for delivery to Riverwalk/Gaborone?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
}

// --- PRODUCT FILTER LOGIC (For Shop Page) ---
const filterButtons = document.querySelectorAll('.category-nav button');
const productCards = document.querySelectorAll('.product-card');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 2. Add active class to clicked button
            button.classList.add('active');

            // 3. Get the filter category
            const filterValue = button.getAttribute('data-filter');

            // 4. Show/Hide products based on category
            productCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    // Add a small fade-in animation
                    card.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}
