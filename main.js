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


