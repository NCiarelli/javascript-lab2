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

// fight: a function to run a fight between two players. Requires two player names and their associated starting health values
function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

// Call the fight function to display a test case, a totally legit test case
fight("Nick", "David", 2000, 50);
