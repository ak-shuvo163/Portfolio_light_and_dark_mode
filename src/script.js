
// ========== DARK MODE TOGGLE ==========
const themeToggleBtn = document.getElementById("theme-toggle");
const icon = themeToggleBtn.querySelector("i");
const html = document.documentElement;

// Load theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
} else {
  html.classList.remove("dark");
  icon.classList.remove("fa-sun");
  icon.classList.add("fa-moon");
}

// Toggle on click
themeToggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");
  const isDark = html.classList.contains("dark");

  // Icon toggle
  icon.classList.toggle("fa-moon", !isDark);
  icon.classList.toggle("fa-sun", isDark);

  // Save preference
  localStorage.setItem("theme", isDark ? "dark" : "light");
});


// ========== MOBILE MENU ==========
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

// Show menu on button click
mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("right-[-100%]");
  mobileMenu.classList.add("right-0");
});

// Close menu on close button click
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("right-[-100%]");
  mobileMenu.classList.remove("right-0");
});

// Close menu when any link is clicked
mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("right-[-100%]");
    mobileMenu.classList.remove("right-0");
  });
});


// ========== ANIMATIONS ==========
anime({
  targets: "nav",
  opacity: [0, 1],
  translateY: [-30, 0],
  duration: 1000,
  easing: "easeOutExpo"
});

anime.timeline({ easing: 'easeOutExpo', duration: 1000 })
  .add({
    targets: '#home h1',
    opacity: [0, 1],
    translateY: [30, 0],
    delay: 100
  })
  .add({
    targets: '#home p',
    opacity: [0, 1],
    translateY: [20, 0],
    delay: 100
  })
  .add({
    targets: '#home a',
    opacity: [0, 1],
    translateY: [20, 0],
    delay: 100
  })
  .add({
    targets: '#home .fab, #home .fas',
    opacity: [0, 1],
    translateY: [10, 0],
    delay: anime.stagger(100)
  })
  .add({
    targets: '#home img',
    opacity: [0, 1],
    scale: [0.9, 1],
  });

anime({
  targets: "#skills .bg-gray-100, #skills .dark\\:bg-gray-800",
  opacity: [0, 1],
  scale: [0.8, 1],
  delay: anime.stagger(100),
  easing: "easeOutExpo",
  duration: 1000
});

const swiper = new Swiper('.mySwiper', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  centeredSlides: true,
  grabCursor: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const form = document.getElementById('newsletterForm');
const emailInput = document.getElementById('emailInput');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = emailInput.value.trim();

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.className = 'mt-4 text-center text-sm font-medium text-red-600';
    formMessage.classList.remove('hidden');
    return;
  }

  formMessage.textContent = 'Subscribing...';
  formMessage.className = 'mt-4 text-center text-sm font-medium text-blue-600';
  formMessage.classList.remove('hidden');

  const formData = new FormData(form);

  // Send real data to Formspree
  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      formMessage.textContent = 'Thank you for subscribing!';
      formMessage.className = 'mt-4 text-center text-sm font-medium text-green-600';
      form.reset();
    } else {
      formMessage.textContent = 'Something went wrong. Please try again.';
      formMessage.className = 'mt-4 text-center text-sm font-medium text-red-600';
    }
  }).catch(() => {
    formMessage.textContent = 'Network error. Please try again.';
    formMessage.className = 'mt-4 text-center text-sm font-medium text-red-600';
  });
});

// // ========== TYPEWRITER EFFECT ==========
// document.addEventListener("DOMContentLoaded", () => {
//   const phrases = [
//     "I am a Web Developer.",
//     "CSE Student at BUBT.",
//     "I build responsive websites.",
//     "I love helping people through code."
//   ];

//   let i = 0, j = 0, isDeleting = false;
//   const textElement = document.getElementById("typing-text");
//   if (!textElement) return;

//   function typeEffect() {
//     const current = phrases[i];
//     textElement.textContent = isDeleting
//       ? current.substring(0, j--)
//       : current.substring(0, j++);

//     if (!isDeleting && j === current.length) {
//       isDeleting = true;
//       setTimeout(typeEffect, 1000);
//     } else if (isDeleting && j === 0) {
//       isDeleting = false;
//       i = (i + 1) % phrases.length;
//       setTimeout(typeEffect, 500);
//     } else {
//       setTimeout(typeEffect, isDeleting ? 60 : 100);
//     }
//   }

//   typeEffect();
// });
