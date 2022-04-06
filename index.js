// QuerySelector
const $ = (tag, isAll) => {
   return isAll ? document.querySelectorAll(tag) : document.querySelector(tag);
};
const cases = $(".case", true);
const statusHtml = $("h2", false);
const playerScore = $(".score_player");
const equalityScore = $(".score_equality");
const robotScore = $(".score_robot");

// Utile info
statusHtml.textContent = "Good luck !";
let activeGame = true;
let player = "X";
let robot = "O";

let playerPoints = 0;
let equalityPoints = 0;
let robotPoints = 0;

playerScore.innerHTML = `Vous : ${playerPoints}`;
equalityScore.innerHTML = `Egalité : ${equalityPoints}`;
robotScore.innerHTML = `Robot : ${robotPoints}`;

const equality = () => "Egalité";

// Board
const createStateGame = () => {
   return Array(9).fill("");
};
let stateGame = createStateGame();

// Conditions for win
const victoryConditions = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6],
];

// Player
cases.forEach((cell) => cell.addEventListener("click", caseClic));
$("#tryagain", false).addEventListener("click", tryAgain);

function caseClic() {
   // On récupére l'index de la case cliquée
   const indexCase = parseInt(this.dataset.index);

   if (stateGame[indexCase] !== "" || !activeGame) {
      return;
   }

   stateGame[indexCase] = player;
   this.textContent = player;
   this.style.color = "#77B5FE";
   checkWin();
   robotAttack(victoryConditions, stateGame, robot, robotDefense);
}

/**
 *
 * @param {Array} victoryConditions
 * @param {Array.<String>} stateGame
 * @param {String} robot
 * @param {Function} robotDefense
 */
function robotAttack(victoryConditions, stateGame, robot, robotDefense) {
   let turn = 0;
   let val1 = undefined;
   let val2 = undefined;
   let val3 = undefined;

   for (let victoryCondition of victoryConditions) {
      turn++;
      val1 = stateGame[victoryCondition[0]];
      val2 = stateGame[victoryCondition[1]];
      val3 = stateGame[victoryCondition[2]];

      if (val1 === "" && val2 === robot && val3 === robot) {
         update(victoryCondition, 0, true, robot);
         console.log("Attack 1");
         break;
      } else if (val1 === robot && val2 === "" && val3 === robot) {
         update(victoryCondition, 1, true, robot);
         console.log("Attack 2");
         break;
      } else if (val1 === robot && val2 === robot && val3 === "") {
         update(victoryCondition, 2, true, robot);
         console.log("Attack 3");
         break;
      } else if (turn === 8) {
         robotDefense();
      }
   }
}

function robotDefense() {
   let turn = 0;

   for (let victoryCondition of victoryConditions) {
      turn++;
      let val1 = stateGame[victoryCondition[0]];
      let val2 = stateGame[victoryCondition[1]];
      let val3 = stateGame[victoryCondition[2]];

      if (val1 === "" && val2 === player && val3 === player) {
         update(victoryCondition, 0, true, robot);
         console.log("Defense 1");
         break;
      } else if (val1 === player && val2 === "" && val3 === player) {
         console.log("Defense 2");

         update(victoryCondition, 1, true, robot);

         break;
      } else if (val1 === player && val2 === player && val3 === "") {
         console.log("Defense 3");

         update(victoryCondition, 2, true, robot);
         break;
      }

      let turn2 = 0;

      if (turn === victoryConditions.length) {
         for (let victoryCondition of victoryConditions) {
            turn2++;

            let val1 = stateGame[victoryCondition[0]];
            let val2 = stateGame[victoryCondition[1]];
            let val3 = stateGame[victoryCondition[2]];

            if (stateGame[4] === player && stateGame[2] === "") {
               update(undefined, 2, false, robot);
               console.log("Defense 4");

               break;
            } else if (
               (stateGame[4] === "" && stateGame[0] === player) ||
               (stateGame[4] === "" && stateGame[2] === player) ||
               (stateGame[4] === "" && stateGame[6] === player) ||
               (stateGame[4] === "" && stateGame[8] === player)
            ) {
               update(undefined, 4, false, robot);
               console.log("Defense 5");
               break;
            } else if (
               stateGame[4] === player &&
               stateGame[6] === player &&
               stateGame[8] === ""
            ) {
               update(undefined, 8, false, robot);
               console.log("Defense 6");
               break;
            } else if (val1 === player && val2 === "") {
               update(victoryCondition, 1, true, robot);
               console.log("Defense 7");
               break;
            } else if (val2 === player && val3 === "") {
               console.log("Defense 8");
               update(victoryCondition, 2, true, robot);
               break;
            } else if (val3 === player && val2 === "") {
               console.log("Defense 9");
               update(victoryCondition, 1, true, robot);
               break;
            }
         }
      }
   }
}

/**
 *
 * @param {Array.<Number>} victoryCondition
 * @param {Number} index
 * @param {Boolean} checkVerif
 * @param {String} token
 */
function update(victoryCondition, index, checkVerif, token) {
   if (victoryCondition) {
      cases[victoryCondition[index]].textContent = token;
      stateGame[victoryCondition[index]] = token;
      cases[victoryCondition[index]].style.color = "#ff6961";
   } else {
      cases[index].textContent = token;
      stateGame[index] = token;
      cases[index].style.color = "#ff6961";
   }

   if (checkVerif) checkWin();
}

function checkWin() {
   let winTurn = false;

   for (let victoryCondition of victoryConditions) {
      let val1 = stateGame[victoryCondition[0]];
      let val2 = stateGame[victoryCondition[1]];
      let val3 = stateGame[victoryCondition[2]];
      if (val1 === "" || val2 === "" || val3 === "") {
         continue;
      }
      if (val1 === player && val2 === player && val3 === player) {
         statusHtml.textContent = "Le player X à gagné";
         playerPoints++;
         robotScore.innerHTML = `Vous : ${playerPoints}`;
         winTurn = true;
         break;
      }

      if (val1 === robot && val2 === robot && val3 === robot) {
         statusHtml.textContent = "Le player O à gagné";
         robotPoints++;
         robotScore.innerHTML = `Robot : ${robotPoints}`;
         winTurn = true;
         break;
      }
   }

   if (winTurn) {
      activeGame = false;
      return;
   }

   if (!stateGame.includes("")) {
      statusHtml.textContent = equality();
      equalityPoints++;
      equalityScore.innerHTML = `Egalité : ${equalityPoints}`;
      activeGame = false;
      return;
   }
}

function tryAgain() {
   player = player;
   activeGame = true;
   stateGame = createStateGame();
   statusHtml.textContent = "Good luck !";
   cases.forEach((cell) => (cell.textContent = ""));
}
