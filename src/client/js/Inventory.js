import Dino from './Dino';
import AnimalSpec from './AnimalSpec';

function Inventory() {
  this.dinosaurs = [];
}

Inventory.prototype.addDino = function(species, where, when, fact, spec) {
  const dino = new Dino(species, where, when, fact, spec);
  this.dinosaurs.push(dino);
};

Inventory.prototype.compare = function(spec) {
  if(!(spec instanceof AnimalSpec))
    throw new Error('Invalid AnimalSpect object');

};

export default Inventory;
