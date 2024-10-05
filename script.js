document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Get the name and email values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        // Create the mailto link
        const mailtoLink = `mailto:InfiniteTrack987@gmail.com?subject=User%20Details&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}`;

        // Open the mailto link
        window.location.href = mailtoLink;
    });
});
