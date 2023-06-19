// script.js
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});