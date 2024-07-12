function createPlant(name) {
    let state = {
      name,
      height: 0,
      abilities: []
    };
  
    return {
      getState: () => ({ ...state }), // Return a copy of the state
      grow: () => {
        state.height += 1;
      },
      addAbility: (ability) => {
        state.abilities.push(ability);
      }
    };
  }
  
  const waterable = (plant) => {
    const originalGrow = plant.grow;
    plant.grow = () => {
      originalGrow();
      console.log(`${plant.getState().name} has been watered and grown!`);
    };
  };
  
  const fertilizerable = (plant) => {
    const originalGrow = plant.grow;
    plant.grow = () => {
      originalGrow();
      originalGrow();
      console.log(`${plant.getState().name} has been fertilized and grown twice!`);
    };
  };
  
  module.exports = { createPlant, waterable, fertilizerable };
  