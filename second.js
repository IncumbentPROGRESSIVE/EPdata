darkModeButton2.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeButton.classList.toggle('on');

  // Save Dark Mode setting in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'true');
  } else {
    localStorage.setItem('dark-mode', 'false');
  }
});

window.addEventListener('DOMContentLoaded', (event) => {
  // Check for dark mode preference on page load
  if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
    darkModeButton.classList.add('on');
  }
});
