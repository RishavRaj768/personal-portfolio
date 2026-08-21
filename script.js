// MOBILE MENU

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if(menuToggle && navLinks){

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if(navLinks.classList.contains("active")){
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        }else{
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

}

// Auto Close Menu On Link Click

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    });

});

// TYPING EFFECT


const textArray = [
    "Python Developer",
    "Frontend Web Developer",
    "B.Tech CSE Student",
    "Open To Internship Opportunities",
    "Aspiring Software Engineer"
];

let textIndex = 0;
let charIndex = 0;
let typingElement = document.getElementById("typing-text");

function typeText() {

    if (charIndex < textArray[textIndex].length) {

        typingElement.textContent +=
            textArray[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText, 100);

    } else {

        setTimeout(eraseText, 1500);

    }
}

function eraseText() {

    if (charIndex > 0) {

        typingElement.textContent =
            textArray[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseText, 50);

    } else {

        textIndex++;

        if (textIndex >= textArray.length) {
            textIndex = 0;
        }

        setTimeout(typeText, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {

    if (textArray.length) {
        setTimeout(typeText, 500);
    }

});


// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".project-card, .skill-card, .timeline-item, .achievement-card, .contact-card"
);

const observer = new IntersectionObserver(
(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},
{
    threshold: 0.2
});

revealElements.forEach(el => {
    observer.observe(el);
});

 //COUNTER ANIMATION

const counters =
document.querySelectorAll(".counter");

const speed = 100;

counters.forEach(counter => {

    const updateCount = () => {

        const target =
        +counter.getAttribute("data-target");

        const count =
        +counter.innerText;

        const increment =
        target / speed;

        if (count < target) {

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(updateCount, 20);

        } else {

            counter.innerText = target;

        }
    };

    updateCount();

});

// SCROLL TO TOP BUTTON


const scrollBtn =
document.createElement("button");

scrollBtn.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

scrollBtn.id = "scrollTopBtn";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.style.display = "flex";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// CONTACT FORM
// EMAILJS
// EMAILJS

emailjs.init({
    publicKey: "C4dS7gqV8dlkhsrrl",
});

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const formData = new FormData(this);

        console.log("Name:", formData.get("name"));
        console.log("Email:", formData.get("email"));
        console.log("Subject:", formData.get("subject"));
        console.log("Message:", formData.get("message"));

        emailjs.sendForm(
            "service_1nzo105",
            "template_ff7717l",
            this
        )
        .then((response) => {
            console.log("SUCCESS:", response);
            alert("Message Sent Successfully!");
            contactForm.reset();
        })
        .catch((error) => {
            console.error("FAILED:", error);
            alert("Failed To Send Message");
        });

    });

}
// IMAGE HOVER EFFECT

const profileImage =
document.querySelector(".hero-image img");

if(profileImage){

profileImage.addEventListener(
"mouseenter",
() => {

profileImage.style.transform =
"scale(1.05)";

profileImage.style.transition =
"0.4s";

});

profileImage.addEventListener(
"mouseleave",
() => {

profileImage.style.transform =
"scale(1)";

});

}


// PRELOADER REMOVE


window.addEventListener("load", () => {

document.body.classList.add("loaded");

});


// PARALLAX EFFECT


window.addEventListener("scroll", () => {

const heroImage =
document.querySelector(".hero-image");

if(heroImage){

let scroll =
window.pageYOffset;

heroImage.style.transform =
`translateY(${scroll * 0.1}px)`;

}

});