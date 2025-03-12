document.addEventListener('DOMContentLoaded',function() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
  //chenge mode fn
  function toggleDarkMode(){
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode'))
        {
      localStorage.setItem('darkMode','enabled');
      }else{
       localStorage.setItem('darkMode', 'disabled');
      }
  }
  // load data from localStrage
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
    }
  // add listener for switch
    darkModeToggle.addEventListener('click', toggleDarkMode);
});
