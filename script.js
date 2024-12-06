document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle functionality
  const menuToggle = document.querySelector('.menu-toggle');
  const navbarList = document.querySelector('.navbar-list');
  
  menuToggle.addEventListener('click', () => {
      navbarList.classList.toggle('active');
  });
  

  // Image slider for smooth looping of images
  const track = document.querySelector('.slider-track');
  const images = track.querySelectorAll('img');

  // Duplicate logos for smooth loop
  const totalImages = images.length;
  for (let i = 0; i < totalImages; i++) {
      const clone = images[i].cloneNode(true);
      track.appendChild(clone);
  }
});
