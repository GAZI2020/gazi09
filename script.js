// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Scroll to the target element
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form submission handling
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return; // Stop the submission if the email is invalid
    }

    // Display the message in a designated area instead of an alert
    const messageDisplay = document.querySelector('.message-display');
    messageDisplay.innerHTML = `Thank you for your message, ${name}!<br>Your email: ${email}<br>Your message: ${message}`;

    // Optionally, clear the form fields
    this.reset();
});
// Display a success message when the contact form is submitted
// Display a success message when the contact form is submitted
// JavaScript for the contact form submission
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    // Display message in the message-display div
    const messageDisplay = document.querySelector('.message-display');
    messageDisplay.innerHTML = `
        <h4>Thank you, ${name}!</h4>
        <p>Your message has been sent successfully.</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;
    
    // Clear form fields
    this.reset();
});


