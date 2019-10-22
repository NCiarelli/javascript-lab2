// randomDamage: A random number generator for whole numbers 1 to 10
const randomDamage = () => Math.floor(Math.random() * 10) + 1;

// chooseOption: a decision making function that returns one of the two values passed to it randomly
const chooseOption = (opt1, opt2) => {
  const randNum = Math.floor(Math.random() * 2);
  return randNum === 0 ? opt1 : opt2;
};

// attackPlayer: a function to apply random damage to the passed "health" value using randomDamage()
