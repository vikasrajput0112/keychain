```javascript
document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value;

            alert(
                "Thank you, " + name +
                "! Your message has been received."
            );

            contactForm.reset();
        });

    }

});
```
