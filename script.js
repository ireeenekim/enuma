document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully");

  const hamburger = document.querySelector(".hamburger");
  const menuItems = document.querySelector(".menu-items");
  const contactUsBtn = document.getElementById("contactUsBtn");
  const contactSection = document.querySelector(".contact");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      console.log("Hamburger menu clicked");
      menuItems.classList.toggle("show");
      console.log("Menu items class list:", menuItems.classList);
    });
  } else {
    console.error("Hamburger menu element not found");
  }

  if (contactUsBtn) {
    contactUsBtn.addEventListener("click", () => {
      contactSection.scrollIntoView({ behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
      const contactSectionTop = contactSection.offsetTop;
      if (window.scrollY + window.innerHeight >= contactSectionTop) {
        contactUsBtn.style.display = "none";
      } else {
        contactUsBtn.style.display = "flex";
      }
    });
  } else {
    console.error("Contact Us button element not found");
  }
});
