
// =====================================
// SIDEBAR FUNCTIONALITY
// =====================================

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function toggleSidebar() {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("show");
}

function closeSidebar() {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
}


// =====================================
// NAVIGATION FUNCTIONALITY
// =====================================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", function() {

        // Remove active class from all links
        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        // Activate clicked link
        this.classList.add("active");

        // Close sidebar on mobile
        if (window.innerWidth <= 768) {
            closeSidebar();
        }

    });

});


// =====================================
// ACTIVE SECTION ON SCROLL
// =====================================

const sections = document.querySelectorAll("main section[id]");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const currentId = entry.target.getAttribute("id");

            navLinks.forEach(link => {

                link.classList.remove("active");

                if (link.getAttribute("href") === "#" + currentId) {
                    link.classList.add("active");
                }

            });

        }

    });

}, {
    rootMargin: "-30% 0px -60% 0px"
});

sections.forEach(section => {
    observer.observe(section);
});


// =====================================
// CONTACT FORM FUNCTIONALITY
// =====================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {

        formMessage.style.color = "red";
        formMessage.textContent = "Please complete all fields.";

        return;
    }

    formMessage.style.color = "#16a34a";

    formMessage.textContent =
        "Thank you, " + name + "! Your message has been validated.";

    contactForm.reset();

});


// =====================================
// WINDOW RESIZE
// =====================================

window.addEventListener("resize", function() {

    if (window.innerWidth > 768) {
        closeSidebar();
    }

});
