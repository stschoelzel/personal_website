

document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".card ul li a:not(.contact-link)");

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener("click", function (event) {
            event.preventDefault();
            const targetSectionId = this.getAttribute("href");
            window.location.href = "content.html" + targetSectionId;
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var contactLink = document.getElementById("contact-link");
    var emailAddress = "info" + "@" + "stschoelzel.de";
    contactLink.href = "mailto:" + emailAddress;

    contactLink.addEventListener("click", function (event) {
        if (!emailAddress) {
            event.preventDefault();
        }
    });
});


