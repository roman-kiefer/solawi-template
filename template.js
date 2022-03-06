import './style.css';

const lighttheme = 'solawiLight';
const darktheme = 'solawiDark';

console.log('template.js');
//const themeModeToggle = (btn) => {
window.themeModeToggle = (btn) => {
  console.log('themeModeToggle');
  if (localStorage.theme === lighttheme) {
    document.documentElement.classList.remove(lighttheme);
    localStorage.theme = darktheme;
    document.documentElement.classList.add(darktheme);
    document.documentElement.setAttribute('data-theme', darktheme);
    // btn.innerHTML = darktheme;
  } else if (localStorage.theme === darktheme) {
    document.documentElement.classList.remove(darktheme);
    localStorage.theme = lighttheme;
    document.documentElement.classList.add(lighttheme);
    document.documentElement.setAttribute('data-theme', lighttheme);
    // btn.innerHTML = lighttheme;
  }
};

const el = document.getElementById('colorModeImg');
el.addEventListener(
  'click',
  () => {
    console.log('themeModeToggle');
    if (localStorage.theme === lighttheme) {
      document.documentElement.classList.remove(lighttheme);
      localStorage.theme = darktheme;
      document.documentElement.classList.add(darktheme);
      document.documentElement.setAttribute('data-theme', darktheme);
      // btn.innerHTML = darktheme;
    } else if (localStorage.theme === darktheme) {
      document.documentElement.classList.remove(darktheme);
      localStorage.theme = lighttheme;
      document.documentElement.classList.add(lighttheme);
      document.documentElement.setAttribute('data-theme', lighttheme);
      // btn.innerHTML = lighttheme;
    }
  },
  false
);
