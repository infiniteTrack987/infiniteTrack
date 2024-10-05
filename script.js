// script.js
document.addEventListener("DOMContentLoaded", function() {
    
   const contactForm = document.getElementById('contact-form');
   
   contactForm.addEventListener('submit', function(event) {
       event.preventDefault(); // Prevent default form submission
       alert("Thank you for your message! We'll get back to you soon.");
       contactForm.reset(); // Reset form fields after submission
   });

   console.log("Welcome to InfiniteTrack! Explore our content and subscribe.");
});
