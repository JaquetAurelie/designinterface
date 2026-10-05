const board = document.querySelector("#board");

const emojis = [
  "☀️",
  "🐸",
  "🦐",
  "🪱",
  "🐌",
  "🐝",
  "☀️",
  "🐸",
  "🦐",
  "🪱",
  "🐌",
  "🐝",
];

let firstChoice = null;
let secondChoice = null;
let cardsLeftToMatch = emojis.length / 2;
let consecutiveMistakes = 0;
let consecutivePairs = 0;

const message = document.querySelector("#message");
let messageTimeout = null;

const showMessage = (text) => {
  message.textContent = text;
  message.classList.add("visible");

  clearTimeout(messageTimeout);
  messageTimeout = setTimeout(() => {
    message.classList.remove("visible");
  }, 133500);
};

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

shuffleArray(emojis);

const revealCard = (card) => {
  card.classList.remove("hidden");
};

const hideCard = (card) => {
  card.classList.add("hidden");
};

emojis.forEach((emoji) => {
  const card = document.createElement("div");
  card.classList.add("card", "hidden");
  card.dataset.emoji = emoji;

  card.addEventListener("click", () => {
    if (!card.classList.contains("hidden")) {
      return;
    }

    if (firstChoice === null) {
      firstChoice = card;
      card.classList.remove("hidden");
    } else if (secondChoice === null) {
      secondChoice = card;
      card.classList.remove("hidden");

      if (firstChoice.dataset.emoji === secondChoice.dataset.emoji) {
        cardsLeftToMatch = cardsLeftToMatch - 1;
        consecutiveMistakes = 0;
        consecutivePairs++;
        if (consecutivePairs === 2) {
          showMessage("Trop fort");
        }
        if (cardsLeftToMatch === 0) {
          window.alert("Bravo !");
        }
        firstChoice = null;
        secondChoice = null;
      } else {
        consecutivePairs = 0;
        consecutiveMistakes = consecutiveMistakes + 1;

        if (consecutiveMistakes === 1) {
          showMessage("Tu es nul !");
        }
        if (consecutiveMistakes === 5) {
          showMessage("trop nuuulll");
        }

        if (consecutiveMistakes === 8) {
          showMessage("un peu la honte quand même");
        }
        if (consecutiveMistakes === 10) {
          showMessage("tu fais exprès ou quoi?");
        }

        setTimeout(() => {
          firstChoice.classList.add("hidden");
          secondChoice.classList.add("hidden");
          firstChoice = null;
          secondChoice = null;
        }, 1000);
      }
    } else {
      //on fait rien
    }
  });
  board.appendChild(card);
});
