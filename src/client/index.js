import './styles/app.css';
import data from './js/dino.json'; 
import AnimalSpec from './js/AnimalSpec';
import Inventory from './js/Inventory';

(function(){
  
  const inventory = new Inventory();
  for(const {species, weight, height, diet, where, when, fact} of data.Dinos) {
    const spec = new AnimalSpec(weight, height, diet);
    inventory.addDino(species, where, when, fact, spec);
  }

  console.log(
    JSON.stringify(
      inventory.valueOf()
    )
  );
  

})();
