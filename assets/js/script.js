// JavaScript (script.js)
const textToType = "Hello World! Welcome to my portfolio." 

+ "I'm Betiel Amanuel, a recent graduate of a React Program at PerScholas powered by TEKsystems. "
+ "I specialize in creating responsive web applications using React, HTML, CSS, and JavaScript. "
+ "I'm passionate about building user-friendly interfaces and have a strong foundation in front-end development. " 
+ "Please take a moment to explore some of my projects and get to know my skills and experience.";
const typingSpeed = 50; // in milliseconds
const typingContainer = document.getElementById("typing-text");

let charIndex = 0;

function typeText() {
    if (charIndex < textToType.length) {
        typingContainer.innerHTML += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    }
}

// Start the typing effect when the page loads
window.addEventListener("load", typeText);
