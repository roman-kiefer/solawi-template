const btnArr = [
  { text: 'template', path: 'template.html' },
  { text: 'color', path: 'color.html' },
];

btnArr.forEach((element) => {
  const btn = document.createElement('button');
  const btnTxt = document.createTextNode(element.text);
  btn.appendChild(btnTxt);
  btn.addEventListener('click', (e) => {
    window.location.href = element.path;
  });
  document.body.appendChild(btn);
});
