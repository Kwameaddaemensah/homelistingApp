let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text',  {
    strings: ['Physical Fitness', 'Weight Gain', 'Strength Training', 'Fat Lose', 'Weightlifting', 'Running'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
 });

 // Get elements
const joinButton = document.querySelector('.nav-btn');
const modal = document.getElementById('join-modal');
const closeModal = document.getElementById('close-modal');

// Show modal
joinButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent scrolling
    modal.style.display = 'flex';
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Submit form
document.getElementById('join-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    alert(`Thank you, ${name}! We'll contact you at ${email}.`);
    modal.style.display = 'none'; // Hide modal after submission

    // Here, you can add code to send data to a server if needed.
});
