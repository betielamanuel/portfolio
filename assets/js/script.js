//Contact form 
function sendMail() {
    var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    };

    const serviceID = "service_gn688d4";
    const templateID = "template_gpiqoz1";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}


// Landing page transition
const tl = gsap.timeline({defaults:{ease:'power1.out'}});

tl.to('.text',{
    y:'0%',
    duration:1,
    stagger: 0.25
})

tl.to('.landing-transition',{
    y:"-100%",
    duration: 1.5,
    delay: 0.5
})

tl.to('.intro', {
    y: "-100%",
    duration:1
}, "-=1")

tl.fromTo('.clickable-butt', {opacity:0}, {opacity: 1, duration:1})
tl.fromTo('.content', {opacity:0}, {opacity: 1, duration:0.5})
tl.fromTo('.scroll', {opacity:0}, {opacity: 1, duration:0.5})
// tl.fromTo('#text', {opacity:0}, {opacity: 1, duration:0.5})
// tl.fromTo('#text-intro', {opacity:0}, {opacity: 1, duration:0.5})


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
// document.addEventListener("DOMContentLoaded", function () {
//     // Get references to all buttons and the audio element
//     const buttons = document.querySelectorAll(".clickable-butt");
//     const audio = document.getElementById("click-sound");

//     // Add a click event listener to each button
//     buttons.forEach((button) => {
//         button.addEventListener("click", () => {
//             // Play the audio when any button is clicked
//             audio.play();
//         });
//     });
// });

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




// The cursor elements
// create instance of kinet with custom settings
let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav a');

window.addEventListener('mousemove', cursor);
function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left =  e.pageX + 'px';
}

navLinks.forEach(link => {
    link.addEventListener('mouseleave', () =>{
        mouseCursor.classList.remove("link-grow");
        link.classList.remove('hovered-link');
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add("link-grow");
        link.classList.add('hovered-link');
    });
});

const run = () => {
    console.log("Hello World");
}