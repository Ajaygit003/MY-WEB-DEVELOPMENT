// Array of random text
const texts = [
    "Hello, World!",
    "Welcome to the random text generator!",
    "Stay positive and keep moving forward!",
    "The sky is the limit!",
    "Make today amazing!",
    "Embrace the journey!",
    "Live, laugh, love!",
    "Dream big, work hard!",
    "Keep calm and carry on!",
    "You are doing great!"
];

// Get a random index
const randomIndex = Math.floor(Math.random() * texts.length);

// Set the random text in the h1 element
document.getElementById("random-text").textContent = texts[randomIndex];