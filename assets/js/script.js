//typing effect 
var p = document.getElementById('text');
var texts = ['Front End Developer', 'React Developer', 'Web Developer', 'Junior Developer'];
var currentIndex = 0;
var currentText = texts[currentIndex];
var n = 0;
var typing = true;

function toggleCursor() {
    if (n % 2 === 0) {
        p.innerHTML = " " + currentText + "|";
    } else {
        p.innerHTML = " " + currentText ;
    }
}

function typeText() {
    if (typing) {
        if (n <= currentText.length) {
            p.innerHTML = "" + currentText.slice(0, n) + "";
            n++;
        } else {
            clearInterval(typeTimer);
            typing = false;
            setTimeout(function () {
                currentIndex = (currentIndex + 1) % texts.length;
                currentText = texts[currentIndex];
                n = 0;
                setTimeout(function () {
                    typing = true;
                    typeTimer = setInterval(typeText, 250); // Delay before starting next text
                }, 500); // Delay before switching to the next text
            }, 500); // Delay before starting next text
        }
    } else {
        toggleCursor();
    }
}

var typeTimer = setInterval(typeText, 100);

// button sound effect
document.addEventListener("DOMContentLoaded", function () {
    // Get references to all buttons and the audio element
    const buttons = document.querySelectorAll(".clickable-butt");
    const audio = document.getElementById("click-sound");

    // Add a click event listener to each button
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            // Play the audio when any button is clicked
            audio.play();
        });
    });
});

// profile-botton image transtion
// $(document).ready(function() {
//     var isImageVisible = true; // Keep track of whether the image is currently visible

//     // Function to toggle between image and button
//     function toggleImageAndButton() {
//     if (isImageVisible) {
//         // If the image is visible, fade it out and show the button
//         $('#profile-image').fadeOut(400, function() {
//         $('#learn-more-button').fadeIn(400);
//         });
//     } else {
//         // If the button is visible, fade it out and show the image
//         $('#learn-more-button').fadeOut(400, function() {
//         $('#profile-image').fadeIn(400);
//         });
//     }
//     isImageVisible = !isImageVisible; // Toggle the visibility flag
//     }

//     // Set an interval to trigger the toggle every 5 seconds (5000 milliseconds)
//     setInterval(toggleImageAndButton, 5000); // 5000 milliseconds (5 seconds)

//     // Add a click event handler to the "Learn More" button
//     $('#learn-more-button').click(function() {
//     // Redirect to a page with more information about you
//     window.location.href = 'your-profile-page.html';
//     });
// });

