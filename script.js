function openMiniGame() {
    document.getElementById('minigame-modal').style.display = "block";
    const btn = document.getElementById('gameBtn');
    const scoreP = document.getElementById('gameScore');
    let score = 0;
    let started = false;
    btn.textContent = "Start";
    scoreP.textContent = "";
  
    btn.onclick = function () {
      if (!started) {
        started = true;
        score = 0;
        btn.textContent = "Klikni!";
        scoreP.textContent = "Body: 0";
        let left = 5;
        btn.disabled = false;
        let interval = setInterval(() => {
          left--;
          if (left <= 0) {
            btn.textContent = "Konec";
            btn.disabled = true;
            scoreP.textContent = "Tvůj výsledek: " + score;
            clearInterval(interval);
          }
        }, 1000);
        btn.onclick = function () {
          if (!btn.disabled) {
            score++;
            scoreP.textContent = "Body: " + score;
          }
        };
      }
    }
  }
  
  function closeMiniGame() {
    document.getElementById('minigame-modal').style.display = "none";
  }
  