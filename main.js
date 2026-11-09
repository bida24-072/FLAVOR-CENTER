// --- WHATSAPP ORDER INTEGRATION ---
// REPLACE '267XXXXXXXXX' WITH FLAVOR CENTRE'S ACTUAL WHATSAPP NUMBER
const whatsappNumber = "267XXXXXXXXX"; 

function orderViaWhatsApp(productName, price) {
    const message = `Hello Flavor Centre! I would like to order the "${productName}" for ${price}. Is it available?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
}

// --- SIMPLE STICKY HEADER ON SCROLL ---
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    } else {
        header.style.boxShadow = "none";
    }
});
