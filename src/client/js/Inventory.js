import Dino from './Dino';
import AnimalSpec from './AnimalSpec';

const inventory = (function(){
  const dinosaurs = [];

  function add(species, where, when, fact, spec) {
    const dino = new Dino(species, where, when, fact, spec);
    dinosaurs.push(dino);
  }

  return {
    addDino: add
  };

})();

export default inventory;
