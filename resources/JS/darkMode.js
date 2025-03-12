document.addEventListener('DOMContentLoaded', function() {
  const modeSwitch = document.getElementById('modeSwitch');
  const body = document.body;

  // Change mode function
  function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  }

  // Load data from localStorage
  if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    modeSwitch.checked = true;
  }

  // Add listener for switch
  modeSwitch.addEventListener('change', toggleDarkMode);
});
