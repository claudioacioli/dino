import AnimalSpec from './AnimalSpec';

function Dino(species, where, when, fact, spec) {

  if(!(spec instanceof AnimalSpec)) 
    throw new Error('Please, invalid AnimalSpec argument');
  
  this.spec = spec;
  this.species = species;
  this.where = where;
  this.when = when;
  this.fact = fact;

}

export default Dino;
