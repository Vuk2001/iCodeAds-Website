// NAVIGACIJA
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Otvori/zatvori meni
hamburger.addEventListener('click', (e) => {
  e.stopPropagation();
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('open');
});

// Zatvori meni kad klikneš izvan njega
document.addEventListener('click', (e) => {
  if (navLinks.classList.contains('active') &&
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target)) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('open');
  }
});

// Zatvori meni kad klikneš na link
const navItems = navLinks.querySelectorAll('a, button');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('open');
  });
});


// Process sekcija scroll za kartice
$(document).ready(function(){
    $('.card').hover(
      function() {
        // Hover in
        $(this).css({
          'transform': 'translateY(-8px)',
          'box-shadow': '0 8px 20px rgba(0,0,0,0.2)'
        });
      },
      function() {
        // Hover out
        $(this).css({
          'transform': 'translateY(0)',
          'box-shadow': '0 2px 6px rgba(0,0,0,0.1)'
        });
      }
    );
  });


// TESTIMONIAL
document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".content-wrapper .content-container");
  let currentIndex = 0;

  // Inicijalna aktivacija
  containers.forEach((container, i) => {
    if (container.classList.contains("active")) {
      currentIndex = i;
    } else {
      container.style.display = "none";
    }
  });

  function showContainer(index) {
    containers.forEach((container, i) => {
      container.classList.remove("active");
      container.style.display = i === index ? "flex" : "none";
    });
    containers[index].classList.add("active");
  }

  document.querySelectorAll(".next-arrow").forEach(arrow => {
    arrow.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % containers.length;
      showContainer(currentIndex);
    });
  });

  document.querySelectorAll(".previous-arrow").forEach(arrow => {
    arrow.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + containers.length) % containers.length;
      showContainer(currentIndex);
    });
  });

  // Osiguraj da se samo jedan prikazuje na load
  showContainer(currentIndex);
});


// KONTAKT
document.getElementById("contactFrom").addEventListener("submit", function(e) {
  e.preventDefault();

  // Ovdje ide kod za slanje podataka na server (AJAX ili fetch)

  // Prikaži popup
  const popup = document.getElementById("popupOverlay");
  popup.style.display = "flex";

  // Sakrij popup nakon 5 sekundi
  setTimeout(() => {
    popup.style.display = "none";
  }, 5000);

  // Očisti formu
  this.reset();
});