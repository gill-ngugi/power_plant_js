const { createPlant, waterable, fertilizerable } = require('./plant');

const rose = createPlant('Rose');
waterable(rose);
rose.grow();
console.log(rose.getState());

const tulip = createPlant('Tulip');
fertilizerable(tulip);
tulip.grow();
console.log(tulip.getState());
