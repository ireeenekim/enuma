document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded successfully");

  const hamburger = document.querySelector(".hamburger");
  const menuItems = document.querySelector(".menu-items");
  const contactUsBtn = document.getElementById("contactUsBtn");
  const contactSection = document.querySelector(".contact");

  function toggleMenu() {
    menuItems.classList.toggle("show");
  }

  function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function () {
      const context = this,
        args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  } else {
    console.error("Hamburger menu element not found");
  }

  function updateContactButtonVisibility() {
    if (window.innerWidth <= 960) {
      const contactSectionTop = contactSection.offsetTop;
      if (window.scrollY + window.innerHeight >= contactSectionTop) {
        contactUsBtn.style.display = "none";
      } else {
        contactUsBtn.style.display = "flex";
      }
    } else {
      contactUsBtn.style.display = "none";
    }
  }

  const handleResize = debounce(() => {
    if (window.innerWidth > 960) {
      menuItems.classList.remove("show");
    }
    updateContactButtonVisibility();
  });

  if (contactUsBtn) {
    contactUsBtn.addEventListener("click", () => {
      contactSection.scrollIntoView({ behavior: "smooth" });
    });
    window.addEventListener("scroll", debounce(updateContactButtonVisibility));
    window.addEventListener("resize", handleResize);
    updateContactButtonVisibility();
  } else {
    console.error("Contact Us button element not found");
  }
});
