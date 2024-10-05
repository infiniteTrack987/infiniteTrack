document.addEventListener("DOMContentLoaded", function() {
    console.log("Welcome to InfiniteTrack! Explore our content and subscribe.");
    
    const newsletterForm = document.querySelector('.newsletter-form');
    
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.querySelector('input[type="email"]').value;
        if(email) {
            alert(`Thank you for subscribing with ${email}!`);
            document.querySelector('input[type="email"]').value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
});
