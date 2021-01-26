import './styles/app.css';
import data from './js/dino.json'; 
import AnimalSpec from './js/AnimalSpec';
import inventory from './js/inventory';
import gridComponent from './js/grid';

(function(){
  
  const
    // Elements
    formElement = document.getElementById('dino-compare'),
    buttonElement = document.getElementById('btn'),
    feetElement = document.getElementById('feet'),
    inchesElement = document.getElementById('inches'),
    weightElement = document.getElementById('weight'),
    dietElement = document.getElementById('diet'),
    
    // Helpers
    initObjects = () => {
      for(const {species, weight, height, diet, where, when, fact} of data.Dinos) {
        const spec = new AnimalSpec(weight, height, diet);
        inventory.addDino(species, where, when, fact, spec);
      }
    },

    // Handlers
    
    chooseFeet = e => {
      inchesElement.disabled = e.target.value.length > 0;
    },

    chooseInches = e => {
      feetElement.disabled = e.target.value.length > 0;
    },

    // Render Functions
    renderGrid = e => {
      
      const items = inventory.getAllDinos().map(({species, fact}) => ({
        title: species,
        src: species.toLowerCase(),
        fact
      }));
      
      gridComponent(items);

    }
  ;

  initObjects();

  feetElement.addEventListener("change", chooseFeet);
  feetElement.addEventListener("keypress", chooseFeet);
  feetElement.addEventListener("paste", chooseFeet);
  feetElement.addEventListener("cut", chooseFeet);

  inchesElement.addEventListener("change", chooseInches);
  inchesElement.addEventListener("keypress", chooseInches);
  inchesElement.addEventListener("paste", chooseInches);
  inchesElement.addEventListener("cut", chooseInches);
  
  formElement.addEventListener("submit", function submitForm(e) {
    e.preventDefault();
    formElement.classList.toggle("hide");
    renderGrid();
    formElement.reset();
  });

  buttonElement.addEventListener("click", function clickButton(e) {
    e.preventDefault();
    formElement.requestSubmit();
  });
  
})();
