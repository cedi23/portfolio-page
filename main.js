document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;

    var emailBody = "Name: " + name + "\n\n" + "Message:\n" + message;

    var mailtoLink = "mailto:cedric.weigel7@gmail.com" +
        "?subject=Message from " + name +
        "&body=" + encodeURIComponent(emailBody);

    window.location.href = mailtoLink;
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const windowHeight = window.innerHeight;
                const elementHeight = targetElement.offsetHeight;

                const scrollToY = targetElement.offsetTop - (windowHeight - elementHeight) / 2;

                window.scrollTo({
                    top: scrollToY,
                    behavior: "smooth"
                });
            }
        });
    });
});




// Function to scroll to the contact section
function scrollToContact() {
    const contactSection = document.getElementById('Heading4');

    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Contact section not found!');
    }
}





