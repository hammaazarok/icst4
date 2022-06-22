const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navheader = document.querySelector('.nav-header');

const mobileMenu = () => {
  navMenu.classList.toggle('show');
  // hamburger.classList.toggle("show");
  if (navMenu.classList.contains('show')) {
    hamburger.innerHTML = '<i class="fa-solid fa-xmark right"></i>';
  } else {
    hamburger.innerHTML = '<img src="assets/mobile_menu.png" alt=""/>';
  }

  navheader.classList.toggle('margin-top');
  
};

const closeMenu = () => {
  hamburger.innerHTML = "<i class='fas fa-bars'></i>";
  navMenu.classList.remove('show');
  hamburger.classList.remove('show');
};

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach((n) => n.addEventListener('click', closeMenu));

hamburger.addEventListener('click', mobileMenu, false);