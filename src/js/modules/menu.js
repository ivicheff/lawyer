const logo = document.querySelector(".navbar__name");

const navSlide = () => {
  const nav = document.querySelector(".navbar__nav-links");
  const navLinks = document.querySelectorAll('.navbar__nav-links li');
  logo.addEventListener('click', () => {
    let width = window.innerWidth
    //Toggle Nav
    if (width <= 1200) {
      nav.classList.toggle('navbar__nav-active');
    }
    //Animate links
    navLinks.forEach((link, index) => {
      true ? link.style.animation = '' : 
      link.style.animation = `navLinkFade 0.1s ease forwards ${index /12}s`;

    });
  });
}


navSlide();

export default logo;

