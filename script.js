// ===== Hiệu ứng xuất hiện cho các section khi cuộn xuống (fade/slide-in) =====
function showSectionsOnScroll() {
  const sections = document.querySelectorAll('section.section-appear');
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < windowHeight - 100) {
      sec.classList.add('section-visible');
    }
  });
}
window.addEventListener('scroll', showSectionsOnScroll);
window.addEventListener('DOMContentLoaded', showSectionsOnScroll);
// ===== Hiệu ứng xuất hiện cho skills khi scroll (Tiếng Việt) =====
function showSkillsOnScroll() {
  const skillsSection = document.querySelector('.skills');
  const skillCards = document.querySelectorAll('.skill-card');
  if (!skillsSection || !skillCards.length) return;

  const rect = skillsSection.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  // Nếu vùng skills đã vào view (ít nhất 100px)
  if (rect.top < windowHeight - 100) {
    skillCards.forEach((card, i) => {
      setTimeout(() => card.classList.add('skill-visible'), i * 90);
    });
    window.removeEventListener('scroll', showSkillsOnScroll);
  }
}
window.addEventListener('scroll', showSkillsOnScroll);
window.addEventListener('DOMContentLoaded', showSkillsOnScroll);
// Mobile menu toggle: only bind if element exists
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
if (menu && navbar) {
  menu.onclick = () => {
    navbar.classList.toggle('active');
  };
}

// Highlight nav link on scroll (section in viewport)
window.onscroll = () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');

  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => links.classList.remove('active'));
      const activeLink = document.querySelector('header nav a[href*="' + id + '"]');
      if (activeLink) activeLink.classList.add('active');
    }
  });
};

// Theme (dark mode) toggle
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-toggle')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})