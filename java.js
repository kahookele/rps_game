
//  set the count for the lives
let pLives = 5;
let cLives = 5;
let rounds = 0

// Query selectors to manipulate
let round = document.querySelector(".round-count");
let playerLives = document.querySelector(".p-lives");
let computerLives = document.querySelector(".c-lives");
let info = document.querySelector(".combat-info");

// Query selectors to use
const wand = document.querySelector('#wand');
const bow = document.querySelector('#bow');
const mace = document.querySelector('#mace');
const weapons = [wand, bow, mace];

// Game logic
weapons.forEach(c => c.addEventListener('click', () => {
  rounds += 1;
  round.innerText = rounds;
  roundWinner(c);
  combatArea(c);
  health(c);
}));

// Player choice
function pChoice(e) {
  return e;
};

// Computer choice
function cpuChoice() {
  let n = Math.floor(Math.random() * weapons.length);
  return weapons[n];
};

// Winner of round
function roundWinner(e) {
  if (e === cpuChoice()) {
    return "draw"
  }
  else if (e === wand && cpuChoice() === mace ||
           e === mace && cpuChoice() === bow ||
           e === bow && cpuChoice() === wand) {
    return "player";
  }
  else {
    return "computer";
  }
};

// Combat information
function combatArea(e) {
  if (roundWinner(e) === "draw") {
    info.innerText = "COMBAt: It is a draw.";
  }
  else if (roundWinner(e) === "player") {
    info.innerText = "COMBAt: You Win!.";
  }
  else {
    info.innerText = "COMBAt: You Suck.";
  }
}

// Health Check
function health(e) {
  if (roundWinner(e) === "player") {
    cLives -= 1;
    return computerLives.innerText = cLives;
  }
  else if (roundWinner(e) === "computer") {
    pLives -= 1;
    return playerLives.innerText = pLives;
  }
  else {
    nil;
  }
};