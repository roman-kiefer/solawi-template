const lighttheme = 'solawiLight';
const darktheme = 'solawiDark';

console.log('onload.js');
if (localStorage.theme === darktheme || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  console.log('onload.js dark');
  document.documentElement.classList.add(darktheme);
  document.documentElement.setAttribute('data-theme', darktheme);
  localStorage.theme = darktheme;
} else {
  console.log('onload.js light');
  document.documentElement.classList.remove(darktheme);
  document.documentElement.setAttribute('data-theme', lighttheme);
  localStorage.theme = lighttheme;
}
