document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById('menu_button');
    const icon = menuButton.querySelector('i');
    const nav = document.querySelector("nav");
  
    menuButton.addEventListener("click", () => {
      if (nav.style.display === "block") {
        nav.style.display = "none";
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      } else {
        nav.style.display = "block";
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      }
    });
});