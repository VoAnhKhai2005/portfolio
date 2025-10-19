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