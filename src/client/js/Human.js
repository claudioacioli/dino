function Human(name, spec) {
 
  if(!(spec instanceof AnimalSpec)) 
    throw new Error('Please, invalid AnimalSpec argument');
  
  this.spec = spec;
  this.name = name;
}

export default Human;
