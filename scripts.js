
function jugar() {
  let numeroAleatorio1 = Math.floor(Math.random() * 6 + 1);
  let numeroAleatorio2 = Math.floor(Math.random() * 6 + 1);

  const imagen1 = document.querySelector(".img1");
  const imagen2 = document.querySelector(".img2");

  imagen1.setAttribute("SRC", "images/dice" + numeroAleatorio1 + ".png");
  imagen2.setAttribute("SRC", "images/dice" + numeroAleatorio2 + ".png");

  let ganador = document.querySelector(".ganador");
  if (numeroAleatorio1 > numeroAleatorio2) {
    ganador.textContent = "🚩Player 1 Wins!";
  } else if (numeroAleatorio2 > numeroAleatorio1) {
    ganador.textContent = "Player 2 Wins! 🚩";
  } else {
    ganador.textContent = "Draw!";
  }
}

/* console.log(numeroAleatorio1);
console.log(numeroAleatorio2); */