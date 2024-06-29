const bar = document.querySelector('.bar');
const close = document.querySelector('.close');
const nav = document.querySelector('.navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
// if (close){
//     bar.addEventListener('click', () => {
//         nav.classList.remove('active');
//     })
// }

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Simple validation
        if (name === "" || email === "" || message === "") {
            alert("Please fill all details");
            return;
        }

        // If all fields are filled
        alert("Your message has been submitted!");

        // You can add code here to send the form data to a server if needed
        // For example, using fetch or AJAX

        // Reset the form fields
        form.reset();
    });
});