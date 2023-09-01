let plives = 5;
let clives = 5;
let rounds = 0;
let modalContainerOne = document.querySelector('.modal-container-one');
let modalContainerTwo = document.querySelector('.modal-container-two');
let enemyImg = document.getElementById('enemy-img');
let pLivesText = document.querySelector('.p-lives');
let cLivesText = document.querySelector('.c-lives');
let info = document.querySelector('.combat-info');

let round = document.querySelector('.round-count');
const wand = document.querySelector('#wand');
const mace = document.querySelector('#mace');
const bow = document.querySelector('#bow');
const weapons = [wand, mace, bow];

weapons.forEach(c => c.addEventListener('click', () => {
  const cpu = cpuChoice()
  changeImg(cpu)
  const user = userChoice(c)
  roundWinner(user, cpu)
  health(user, cpu)
  roundsPlayed()
  announceWinner()
}))

// Rounds played
function roundsPlayed() {
  rounds++
  round.innerText = rounds;
};

// computer choice
function cpuChoice() {
  const n = Math.floor(Math.random() * weapons.length)
  return weapons[n].id
};

//  player choice
function userChoice(e) {
  return e.id
}

// winner
function roundWinner(p, c) {
  if (p === c) {
    info.innerText = `Draw! you chose ${p} and enemy chose ${c}`
  }
  else if (p === 'wand' && c === 'mace') {
    info.innerText = `Win! you chose ${p} and enemy chose ${c}`
  }
  else if (p === 'mace' && c === 'bow') {
    info.innerText = `Win! you chose ${p} and enemy chose ${c}`
  }
  else if (p === 'bow' && c === 'wand') {
    info.innerText = `Win! you chose ${p} and enemy chose ${c}`
  }
  else if (c === 'wand' && p === 'mace') {
    info.innerText = `Lose! you chose ${p} and enemy chose ${c}`
  }
  else if (c === 'mace' && p === 'bow') {
    info.innerText = `Lose! you chose ${p} and enemy chose ${c}`
  }
  else if (c === 'bow' && p === 'wand') {
    info.innerText = `Lose! you chose ${p} and enemy chose ${c}`
  }
};

// lives
function cpuHealth() {
  clives -= 1
  return clives
}

function userHealth() {
  plives -= 1
  return plives
};

function health(p, c) {
  if (p === c) {
    false
  }
  else if (p === 'wand' && c === 'mace' ||
      p === 'mace' && c === 'bow' ||
      p === 'bow' && c === 'wand') {
    return cLivesText.innerHTML = cpuHealth()
  }
  else {
    return pLivesText.innerHTML = userHealth()
  };
};

// Modal to announce the winner
function announceWinner() {
  if (clives === 0) {
    modalContainerOne.style.display = 'block'
  }
  else if (plives === 0) {
    modalContainerTwo.style.display = 'block'
  }
}

// (enemyImg.src = "../images/bow.png")
function changeImg(cpu) {
  if (cpu === 'wand') {
    enemyImg.src = "../images/wand.png"
  }
  else if (cpu === 'mace') {
    enemyImg.src = "../images/mace.png"
  }
  else if (cpu === 'bow') {
    enemyImg.src = "../images/bow.png"
  };
};