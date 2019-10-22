// randomDamage: A random number generator for whole numbers 1 to 10
const randomDamage = () => Math.floor(Math.random() * 10) + 1;

// chooseOption: a decision making function that returns one of the two values passed to it randomly
const chooseOption = (opt1, opt2) => {
  const randNum = Math.floor(Math.random() * 2);
  return randNum === 0 ? opt1 : opt2;
};

// attackPlayer: a function to apply random damage to the passed "health" value using randomDamage()
const attackPlayer = function(health) {
  return health - randomDamage();
};

// logHealth: a message printing function that prints the current health of a player to the console.
const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

// logDeath: a message printing function that prints to the console a winner defeating a loser
const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

// isDead: a function to return the result of a boolean expression if a player's health reaches 0 or below
const isDead = health => {
  return health <= 0;
};

// fight
