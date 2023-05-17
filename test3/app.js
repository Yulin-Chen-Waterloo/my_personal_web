document.addEventListener("DOMContentLoaded", function () {
  // Get all the anchor tags inside the nav element
  const navLinks = document.querySelectorAll("nav a");

  // Loop through each nav link and add a click event listener
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default behavior

      const targetId = this.getAttribute("href"); // Get the target element's id
      const targetElement = document.querySelector(targetId); // Get the target element using the id

      // Smooth scroll to the target element
      const headerOffset = 115;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    });
  });
});
