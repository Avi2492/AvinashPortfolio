const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      "service_r896tch",
      "template_et60r87",
      "#contact-form",
      "ZrHVyhuocHCD5eNeH"
    )
    .then(
      () => {
        contactMessage.textContent = "Message Sent!";
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "Not sent";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);
