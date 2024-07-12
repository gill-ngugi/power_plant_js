const { createPlant, waterable, fertilizerable } = require('../src/plant');

describe('Plant functionality', () => {
  test('should create a plant and grow it', () => {
    const plant = createPlant('Rose');
    plant.grow();
    expect(plant.getState().height).toBe(1);
  });

  test('should add abilities to a plant', () => {
    const plant = createPlant('Tulip');
    waterable(plant);
    plant.grow();
    expect(plant.getState().height).toBe(1);
  });

  test('should allow multiple abilities', () => {
    const plant = createPlant('Sunflower');
    waterable(plant);
    fertilizerable(plant);
    plant.grow();
    expect(plant.getState().height).toBe(2);
  });
});
