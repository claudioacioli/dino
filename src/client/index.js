import './styles/app.css';

function component() {
  const element = document.createElement('div');
  element.innerHTML = ['Hello', 'World'].join(' ');
  return element;
}

document.body.appendChild(component());
