import './style.css';

const colors = [
  { name: 'solawiDark', textcolor: 'text-blue-500' },
  { name: 'dark', textcolor: 'text-blue-500' },
  { name: 'solawiLight', textcolor: 'text-black' },
  { name: 'light', textcolor: 'text-black' },
  { name: 'bumblebee', textcolor: 'text-blue-500' },
  { name: 'garden', textcolor: 'text-blue-500' },
  { name: 'forest', textcolor: 'text-blue-500' },
];

const structs = [
  ['bg-primary', 'bg-primary-focus', 'bg-primary-content'],
  ['bg-secondary', 'bg-secondary-focus', 'bg-secondary-content'],
  ['bg-accent', 'bg-accent-focus', 'bg-accent-content'],
  ['bg-neutral', 'bg-neutral-focus', 'bg-neutral-content'],
  ['bg-base-100', 'bg-base-200', 'bg-base-300'],
  ['bg-base-content', 'bg-info', 'bg-success', 'bg-warning', 'bg-error'],
];

// RGB to HEX
const componentToHex = (c) => (+c).toString(16).padStart(2, '0').toUpperCase();

const rgbToHex = (rgb) => {
  rgb = rgb.slice(4, -1);
  const [r, g, b] = rgb.split(',');
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

colors.forEach((color) => {
  const element = document.createElement('div');
  const content = document.createTextNode(color.name);
  element.appendChild(content);
  element.setAttribute('data-theme', color.name);
  element.classList.add('card', 'flex-row', 'flex-1', 'border-rounded', 'm-2', 'p-2', 'bg-base-100', color.textcolor);
  document.body.appendChild(element);

  structs.forEach((struct) => {
    const container = document.createElement('div');
    container.classList.add('container', 'flex-1', 'border-rounded', 'px-4', 'py-1');
    element.appendChild(container);

    struct.forEach((item) => {
      const e = document.createElement('div');
      e.classList.add('item', 'p-4');
      e.appendChild(document.createTextNode(item));
      e.classList = item;
      container.appendChild(e);

      const styles = window.getComputedStyle(e);
      const c = document.createElement('div');
      c.appendChild(document.createTextNode(rgbToHex(styles.backgroundColor)));
      container.appendChild(c);
    });
  });
});
