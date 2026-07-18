// ==========================================
// PORTFOLIO GLOBAL JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initActiveNavLink();
  initContactForm();
});

// ================= Mobile Navigation Menu =================
function initMobileMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      // Change burger menu icon state
      if (navLinks.classList.contains("active")) {
        menuBtn.innerText = "✕";
      } else {
        menuBtn.innerText = "☰";
      }
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.innerText = "☰";
      });
    });
  }
}

// ================= Active Navigation Link Highlighter =================
function initActiveNavLink() {
  const currentPath = window.location.pathname;
  let currentPage = currentPath.split("/").pop();
  
  // Default to index.html if path is empty or just slash
  if (!currentPage || currentPage === "") {
    currentPage = "index.html";
  }

  const navLinks = document.querySelectorAll(".nav-links a");
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute("href");
    if (linkHref === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// ================= Contact Form Submission Handler =================
function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  const formMsg = document.getElementById("formMsg");

  if (contactForm && formMsg) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const nameInput = document.getElementById("name");
      const name = nameInput ? nameInput.value.trim() : "there";
      
      // Simulate sending state
      formMsg.className = "form-status";
      formMsg.innerText = "Sending your message...";
      
      setTimeout(() => {
        formMsg.innerText = `Thanks ${name}! Your message has been sent successfully ✅`;
        formMsg.classList.add("success");
        contactForm.reset();
      }, 1000);
    });
  }
}
