let startBtn = document.querySelector("#start-game");
let cardP = document.querySelector("#cards");
let sumP = document.querySelector("#sum");
let messageP = document.querySelector("#message-el");
let body = document.querySelector("body");
let newCardBtn;
let restart;

startBtn.addEventListener("click", () => {
  if (!restart) {
    restart = document.createElement("button");
    restart.innerText = "Restart";
    restart.setAttribute("id", "restart-btn");
    body.appendChild(restart);
    restart.addEventListener("click", () => {
      cardP.innerText = `Cards:`;
      sumP.innerText = `Sum:`;
      messageP.innerText = "Want to play a round?";
      sum = 0;
      if (newCardBtn) {
        body.removeChild(newCardBtn);
        newCardBtn = null;
      }
      if (restart) {
        body.removeChild(restart);
        restart = null;
      }
    });
  }
  let firstCard = Math.ceil(Math.random() * 10) + 1;
  let secondCard = Math.ceil(Math.random() * 10) + 1;
  let sum = firstCard + secondCard;
  let message = "";
  cardP.innerText = `Cards: ${firstCard} ${secondCard} `;
  sumP.innerText = `Sum: ${sum}`;

  if (sum < 21) {
    message = "Do you want to Draw another Card? ";
    if (!newCardBtn) {
      newCardBtn = document.createElement("button");
      newCardBtn.innerText = "Add new card";
      newCardBtn.setAttribute("id", "add-btn");
      body.appendChild(newCardBtn);

      newCardBtn.addEventListener("click", () => {
        sum = firstCard + secondCard;
        let thirdCard = Math.ceil(Math.random() * 10) + 1;
        sum += thirdCard;
        cardP.innerText = `Cards: ${firstCard} ${secondCard} ${thirdCard}`;
        sumP.innerText = `Sum: ${sum}`;
        if (sum === 21) {
          message = "You won! you got black jack!";
        } else if (sum > 21) {
          message = "You got over 21 so you lost";
        } else {
          message = "Do you want to play another Round? ";
        }
        messageP.innerText = message;
        if (newCardBtn) {
          body.removeChild(newCardBtn);
          newCardBtn = null;
        }
      });
    }
  } else if (sum === 21) {
    message = "You won! you got black jack!";
  } else {
    message = "You got over 21 so you lost";
  }
  messageP.innerText = message;
});
