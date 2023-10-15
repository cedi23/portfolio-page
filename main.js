// scripts.js

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You can now use these values to send the data to a server or perform other actions.
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);