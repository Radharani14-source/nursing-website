// Toggle dropdown on click
    document.querySelectorAll('.dropbtn').forEach(button => {
      button.addEventListener('click', e => {
        e.stopPropagation(); // Prevent click bubbling
        const dropdown = button.nextElementSibling;
        dropdown.classList.toggle('show');

        // Close any other open dropdowns
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          if (menu !== dropdown) menu.classList.remove('show');
        });
      });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('show');
      });
    });
    // togglar
    document.addEventListener("DOMContentLoaded", () => {
    const togglar = document.querySelector(".togglar");
    const topList = document.querySelector(".topList");

    togglar.addEventListener("click", () => {
        topList.classList.toggle("active");

        // Optional: change icon when menu is open
        const icon = togglar.querySelector("i");
         icon.classList.toggle("fa-sliders");
         icon.classList.toggle("fa-xmark"); 
    });
});
// navbar
document.addEventListener("DOMContentLoaded", () => {
  const togglar = document.querySelector(".togglar2");
  const navList = document.querySelector(".navList");
  const dropdowns = document.querySelectorAll(".dropdown");

  // Toggle full nav list (bottom drawer)
  togglar.addEventListener("click", () => {
    navList.classList.toggle("active");

    // Change icon (open/close)
    const icon = togglar.querySelector("i");
    icon.classList.toggle("fa-sliders");
    icon.classList.toggle("fa-xmark");
  });

  // Mobile dropdown toggles
  dropdowns.forEach(drop => {
    drop.addEventListener("click", e => {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        drop.classList.toggle("open");
      }
    });
  });
});