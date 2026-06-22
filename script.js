let score = 0;

const scoreText = document.getElementById("score");
const button = document.getElementById("clickBtn");

button.addEventListener("click", function () {
  score++;
  scoreText.textContent = score;
});
