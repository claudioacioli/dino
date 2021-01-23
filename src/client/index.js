import './styles/app.css';
import data from './js/dino.json'; 
import AnimalSpec from './js/AnimalSpec';
import inventory from './js/inventory';

(function(){
  
  const formElement = document.querySelector('form');
  const buttonElement = document.querySelector('#btn');
  
  for(const {species, weight, height, diet, where, when, fact} of data.Dinos) {
    const spec = new AnimalSpec(weight, height, diet);
    inventory.addDino(species, where, when, fact, spec);
  }
 
  buttonElement.addEventListener("click", function submitForm(e) {
    e.preventDefault();
    formElement.classList.toggle('hide');
  });
  

})();
