document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully");

  const hamburger = document.querySelector(".hamburger");
  const menuItems = document.querySelector(".menu-items");
  const contactUsBtn = document.getElementById("contactUsBtn");
  const contactSection = document.querySelector(".contact");

  function toggleMenu() {
    menuItems.classList.toggle("show");
  }

  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  } else {
    console.error("Hamburger menu element not found");
  }

  function handleResize() {
    if (window.innerWidth > 960) {
      // 60rem * 16px = 960px
      menuItems.classList.remove("show");
    }
    updateContactButtonVisibility();
  }

  window.addEventListener("resize", handleResize);

  if (contactUsBtn) {
    contactUsBtn.addEventListener("click", () => {
      contactSection.scrollIntoView({ behavior: "smooth" });
    });

    function updateContactButtonVisibility() {
      if (window.innerWidth <= 960) {
        // Show only on smaller screens
        const contactSectionTop = contactSection.offsetTop;
        if (window.scrollY + window.innerHeight >= contactSectionTop) {
          contactUsBtn.style.display = "none";
        } else {
          contactUsBtn.style.display = "flex";
        }
      } else {
        contactUsBtn.style.display = "none"; // Hide on larger screens
      }
    }

    window.addEventListener("scroll", updateContactButtonVisibility);
    window.addEventListener("resize", updateContactButtonVisibility);
    updateContactButtonVisibility(); // Initial check
  } else {
    console.error("Contact Us button element not found");
  }
});
