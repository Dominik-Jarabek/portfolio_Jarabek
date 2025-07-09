
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
// Zobrazit/zavřít AI asistenta
document.getElementById('ai-close').onclick = function(e) {
    e.stopPropagation();
    document.getElementById('ai-assistant').classList.add('ai-assistant-hidden');
    document.getElementById('ai-open-btn').style.display = "flex";
    // Reset
    document.getElementById('ai-panel').classList.remove('ai-expanded');
    document.getElementById('ai-chat').style.display = "none";
  };
  
  document.getElementById('ai-open-btn').onclick = function() {
    document.getElementById('ai-assistant').classList.remove('ai-assistant-hidden');
    document.getElementById('ai-open-btn').style.display = "none";
  };
  
  window.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.getElementById('ai-assistant').classList.remove('ai-assistant-hidden');
    }, 1200);
  });
  
  // Otevřít chat na klik na panel (mimo křížek)
  document.getElementById('ai-panel').addEventListener('click', function(e){
    if(e.target.id === "ai-close") return; // klik na křížek neotvírá chat
    this.classList.add('ai-expanded');
    document.getElementById('ai-chat').style.display = "flex";
    document.getElementById('ai-chat-input').focus();
  });
  
  // Jednoduchá chat logika (demo odpověď)
  document.getElementById('ai-chat-form').onsubmit = function(e){
    e.preventDefault();
    const input = document.getElementById('ai-chat-input');
    const history = document.getElementById('ai-chat-history');
    const msg = input.value.trim();
    if(!msg) return;
    // Přidej uživatelskou zprávu
    const userMsg = document.createElement('div');
    userMsg.className = "ai-chat-msg user";
    userMsg.textContent = msg;
    history.appendChild(userMsg);
  
    input.value = "";
    setTimeout(()=>{
      // Demo "AI" odpověď (můžeš nahradit napojením na API)
      const aiMsg = document.createElement('div');
      aiMsg.className = "ai-chat-msg ai";
      aiMsg.textContent = "Děkuji za dotaz! Ještě neumím odpovídat, ale brzy mě to Dominik naučí 🙂";
      history.appendChild(aiMsg);
      history.scrollTop = history.scrollHeight;
    }, 600);
    history.scrollTop = history.scrollHeight;
  };
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if(window.scrollY > 70) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }
  });
  