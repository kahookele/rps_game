// Options for Rock, Paper, or Scissors
const options = ['wand', 'bow', 'mace'];

// Computer makes a random choice from options.
function cpuChoice() {
  let choice = Math.floor(Math.random() * options.length);
  return options[choice];
}

// Capitalize a string function
function capitalizer(string) {
  let letter = string.charAt(0).toUpperCase()
  return letter + string.slice(1);
}

// Decides on who is the winner of the round.
function round(player, computer) {
  if (player === computer) {
    return "It's a tie!"
  }
  else if (player === 'wand' && computer === 'bow' ||
           player === 'bow' && computer === 'mace' ||
           player === 'mace' && computer === 'wand') {
        return `You win! ${capitalizer(player)} beats ${capitalizer(computer)}.`
      }
  else {
    return `You lose! ${capitalizer(computer)} beats ${capitalizer(player)}`
  }
}

console.log(round('mace', cpuChoice()));