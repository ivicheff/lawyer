const navSlide = () => {
  const logo = document.querySelector(".navbar__name");
  const nav = document.querySelector(".navbar__nav-links");
  const navLinks = document.querySelectorAll('.navbar__nav-links li');
  
  logo.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('navbar__nav-active');

    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.05s ease forwards ${index /12}s`;
      }
    });
  });
}

navSlide();