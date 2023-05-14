const btns = document.querySelectorAll("[data-key]");
const playerLives = document.querySelector("#player-lives");
const computerLives = document.querySelector("#computer-lives");
let playerCount = 5;
let computerCount = 5;
playerLives.innerText = playerCount;
computerLives.innerText = computerCount;

function rounds() {

}

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    playerLives.innerText = playerCount--;
  })
})