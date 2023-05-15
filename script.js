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
  if (playerChoice === 'wand' && cpuChoice() === 'mace' ||
      playerChoice === 'bow' && cpuChoice() === 'wand' ||
      playerChoice === 'mace' && cpuChoice() === 'bow') {
      playerLives.innerText = pLives--;
      result = `You LOSE! ${capitalizer(cpuChoice())} beats ${capitalizer(playerChoice)}! You takes damage!`
}
  else if (playerChoice === 'wand' && cpuChoice() === 'bow' ||
           playerChoice === 'bow' && cpuChoice() === 'mace' ||
           playerChoice === 'mace' && cpuChoice() === 'wand') {
           computerLives.innerText = cLives--;
           result = `You WIN! ${capitalizer(playerChoice)} beats ${capitalizer(cpuChoice())}! Your opponent takes damage!`
  }
  else {
    result = `Draw! You both chose ${capitalizer(cpuChoice())}`;
  }

  return resultDisplay.innerText = result;
}

function endOfGame(player, computer) {
  if (player.innerText === '0') {
    return resultDisplay.innerText = "You LOSE! Game over.  Reload page to play agian.";
  }
  else if (computer.innerText === '0') {
    return resultDisplay.innerText = "You WON! Game over. Reload page to play agian.";
  }
}

buttons.forEach(btn => btn.addEventListener('click', (e) => {
  playerChoice = e.target.id;
  cpuChoice();
  isWinner();
  endOfGame(playerLives, computerLives);
}));