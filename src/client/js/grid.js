import gridItemComponent from './gridItem';

const 

  importAll = req => {
    const images = {};
    req.keys().map(item => { 
      const key = item.toLowerCase().replace('./','').replace('.png','');
      images[key] = req(item); 
    });
    return images;
  },
  
  images = importAll(require.context('../media', false, /\.(png|jpe?g|svg)$/)),
  
  containerElement = document.getElementById('grid'),
  
  gridComponent = (items=[]) => {

    console.log(images);

    const fragment = document.createDocumentFragment();

    for(const {title, src, fact} of items) 
      fragment.appendChild(
        gridItemComponent(title, images[src], fact)
      );

    containerElement.appendChild(fragment);
    return containerElement;
  }
;

export default gridComponent;
