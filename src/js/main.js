const board = document.querySelector("#board");

const emojis = [
  "☀️",
  "🐸",
  "💩",
  "🐢",
  "🦊",
  "🦐",
  "🪱",
  "🙊",
  "🐀",
  "🐥",
  "🐌",
  "🐝",
  "☀️",
  "🐸",
  "💩",
  "🐢",
  "🦊",
  "🦐",
  "🪱",
  "🙊",
  "🐀",
  "🐥",
  "🐌",
  "🐝",
];

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

shuffleArray(emojis);

emojis.forEach((emoji) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.emoji = emoji;

  board.appendChild(card);
});

addEventListener("click");

//trucs à faire : retourner les cartes, faire que de base les cartes soient tournées à l'envers.
//quand on clique sur la carte elle se retourne. addEventListener peut-être
//mettre une classe lorsque qu'on clique
//faire qu'on puisse pas retounrer une troisieme carte et SI carte 1 = carte 2 youpi, SINON elles se retournent
