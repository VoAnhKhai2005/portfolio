// Hiệu ứng xuất hiện cho các section khi cuộn xuống (fade/slide-in)
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

// Hiệu ứng xuất hiện cho Hobbies section khi load trang
function showHobbiesOnLoad() {
  const hobbiesSection = document.querySelector('.hobbies');
  if (hobbiesSection) {
    hobbiesSection.classList.add('section-appear');
  }
}
window.addEventListener('DOMContentLoaded', showHobbiesOnLoad);

// Hiệu ứng xuất hiện cho hobbies khi scroll
function showHobbiesOnScroll() {
  const hobbiesSection = document.querySelector('.hobbies');
  const hobbyCards = document.querySelectorAll('.hobby-card');
  if (!hobbiesSection || !hobbyCards.length) return;

  const rect = hobbiesSection.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  if (rect.top < windowHeight - 100) {
    hobbyCards.forEach((card, i) => {
      setTimeout(() => card.classList.add('hobby-visible'), i * 150);
    });
    window.removeEventListener('scroll', showHobbiesOnScroll);
  }
}
window.addEventListener('scroll', showHobbiesOnScroll);
window.addEventListener('DOMContentLoaded', showHobbiesOnScroll);

// Hiệu ứng xuất hiện cho skills khi scroll (Tiếng Việt)
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

// Resposive menu trên di động
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
if (menu && navbar) {
  menu.onclick = () => {
    navbar.classList.toggle('active');
  };
}

// Đánh dấu nav link khi đang lướt
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

// Chế độ tối
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

if (darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

// Tải CV
const downloadBtn = document.getElementById('download-btn');
downloadBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = "https://drive.usercontent.google.com/u/0/uc?id=1Z22-lHjWJEq3R16EqIbo8aP0WbuleGiQ&export=download";
  link.download = "VoAnhKhai-CV.pdf";
  link.click();
});