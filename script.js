const playerLives = document.querySelector('#player-lives');
const computerLives = document.querySelector('#computer-lives');
const resultDisplay = document.querySelector('.result');
const buttons = document.querySelectorAll('button');
let playerChoice;
let result;
let pLives = 5;
let cLives = 5;
playerLives.innerText = pLives;
computerLives.innerText = cLives;

const choices = ['wand', 'bow', 'mace'];

function cpuChoice() {
  let choice = Math.floor(Math.random() * choices.length);
  return choices[choice];
}

function capitalizer(string) {
  let letter = string.charAt(0).toUpperCase();
  return letter + string.slice(1);
}

function isWinner() {
  if (playerChoice == cpuChoice()) {
      result = `It's a draw! You both chose ${capitalizer(playerChoice)}.`
  }
  else if (playerChoice === 'wand' && cpuChoice() === 'bow' ||
           playerChoice === 'bow' && cpuChoice() === 'mace' ||
           playerChoice === 'mace' && cpuChoice() === 'wand') {
           result = `You win! ${capitalizer(playerChoice)} beats ${capitalizer(cpuChoice())}! Your opponent takes damage!`
           computerLives.innerText = cLives--;

  }
  else {
    result = `The opponents ${capitalizer(cpuChoice())} beats your ${capitalizer(playerChoice)}! You take damage!`
    playerLives.innerText = pLives--;
  }

  return resultDisplay.innerText = result;
}

function endOfGame(player, computer) {
  if (player.innerText === '0') {
    pLives.innerText = '';
    cLives.innerText = '';
    return resultDisplay.innerText = "You LOSE! Game over.  Reload page to play agian.";
  }
  else if (computer.innerText === '0') {
    pLives.innerText = '';
    cLives.innerText = '';
    return resultDisplay.innerText = "You WON! Game over. Reload page to play agian.";
  }
}

buttons.forEach(btn => btn.addEventListener('click', (e) => {
  playerChoice = e.target.id;
  cpuChoice();
  isWinner();
  endOfGame(playerLives, computerLives);
}))