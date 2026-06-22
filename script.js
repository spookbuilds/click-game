let score = 0;
let clickPower = 1;
let upgradeCost = 10;

const scoreText = document.getElementById("score");
const button = document.getElementById("clickBtn");

const upgradeBtn = document.getElementById("upgradeBtn");
const powerText = document.getElementById("power");

button.addEventListener("click", function () {
  score += clickPower;
  scoreText.textContent = score;
});

upgradeBtn.addEventListener("click", function () {
  if (score >= upgradeCost) {
    score -= upgradeCost;
    clickPower += 1;
    upgradeCost = Math.floor(upgradeCost * 1.5);

    scoreText.textContent = score;
    powerText.textContent = clickPower;

    upgradeBtn.textContent = `Upgrade Click (+1 per click) - Cost: ${upgradeCost}`;
  } else {
    alert("Not enough points!");
  }
});
