function login() {
      const user = document.getElementById("usuario").value;
      const pass = document.getElementById("senha").value;
      const erro = document.getElementById("erro");

      if (user === "30K-001F" && pass === "Ayano30k@2026") {
        window.location.href = "afiliados/Ayano30kCeo/ayano30k.html"; // Substitua pelo painel real
      } else {
        erro.textContent = "ID ou senha incorretos.";
      }
    }
