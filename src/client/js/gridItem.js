const 
  
  template = document.getElementById('item-template'),

  gridItemComponent = (title, src, fact) => {
    const element = document.importNode(template.content, true);
    element.querySelector('h3').textContent = title;
    element.querySelector('img').src = src;
    element.querySelector('p').textContent = fact;
    return element;
  }
;

export default gridItemComponent;
