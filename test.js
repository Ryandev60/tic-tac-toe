else {
 // Tableau de case vides
 const emptyCase = [];
 // Index de la case vide
 var idx = etatJeu.indexOf("");
 // Tant que le tableau n'est pas parcouru entiérement on cherche si il y à des cases vides
 while (idx != -1) {
   // On pousse l'index de la case vide dans le tableau
   emptyCase.push(idx);
   // On incrémente idx de 1 pour que vérifier l'index suivant
   idx = etatJeu.indexOf("", idx + 1);
 }
 const random = Math.floor(Math.random() * emptyCase.length);
 const randomValue = emptyCase[random];
 document.querySelectorAll(".case")[randomValue].innerHTML = "O";
 etatJeu[randomValue] = "O";
 console.log("random");
 verifGagne();
 break;
}


if (
 (val1 === "" && val2 === "X" && val3 === "X") ||
 (val1 === "X" && val2 === "" && val3 === "X") ||
 (val1 === "X" && val2 === "X" && val3 === "")
) {
 
}


if (val1 === "" && val2 === "O" && val3 === "O") {
  document.querySelectorAll(".case")[conditionVictoire[0]].innerHTML = "O";
  etatJeu[conditionVictoire[0]] = "O";
  console.log("1");
  verifGagne();
  break;
} else if (val1 === "O" && val2 === "" && val3 === "O") {
  document.querySelectorAll(".case")[conditionVictoire[1]].innerHTML = "O";
  etatJeu[conditionVictoire[1]] = "O";
  console.log("2");

  verifGagne();
  break;
} else if (val1 === "O" && val2 === "O" && val3 === "") {
  document.querySelectorAll(".case")[conditionVictoire[2]].innerHTML = "O";
  etatJeu[conditionVictoire[2]] = "O";
  console.log("3");

  verifGagne();
  break;
}

if (turn === 8) {
  const emptyCase = [];
  // Index de la case vide
  var idx = etatJeu.indexOf("");
  // Tant que le tableau n'est pas parcouru entiérement on cherche si il y à des cases vides
  while (idx != -1) {
    // On pousse l'index de la case vide dans le tableau
    emptyCase.push(idx);
    // On incrémente idx de 1 pour que vérifier l'index suivant
    idx = etatJeu.indexOf("", idx + 1);
  }
  const random = Math.floor(Math.random() * emptyCase.length);
  const randomValue = emptyCase[random];
  document.querySelectorAll(".case")[randomValue].innerHTML = "O";
  etatJeu[randomValue] = "O";
  verifGagne();
}




if (turn === 8) {
  if (
    (etatJeu[4] === "" && etatJeu[0] === "X") ||
    (etatJeu[4] === "" && etatJeu[2] === "X") ||
    (etatJeu[4] === "" && etatJeu[6] === "X") ||
    (etatJeu[4] === "" && etatJeu[8] === "X")
  ) {
    cases[4].innerHTML = "O";
    etatJeu[4] = "O";
  } else if (true) {
  } else {
    const emptyCase = [];
    // Index de la case vide
    var idx = etatJeu.indexOf("");
    // Tant que le tableau n'est pas parcouru entiérement on cherche si il y à des cases vides
    while (idx != -1) {
      // On pousse l'index de la case vide dans le tableau
      emptyCase.push(idx);
      // On incrémente idx de 1 pour que vérifier l'index suivant
      idx = etatJeu.indexOf("", idx + 1);
    }
    const random = Math.floor(Math.random() * emptyCase.length);
    const randomValue = emptyCase[random];
    document.querySelectorAll(".case")[randomValue].innerHTML = "O";
    etatJeu[randomValue] = "O";
    verifGagne();
  }
}


if (turn === 8) {
  console.log("turn = 8");
  if (
    (stateGame[4] === "" && stateGame[0] === "X") ||
    (stateGame[4] === "" && stateGame[2] === "X") ||
    (stateGame[4] === "" && stateGame[6] === "X") ||
    (stateGame[4] === "" && stateGame[8] === "X")
  ) {
    update(undefined, 4, false, "O");
  } else if (stateGame[4] === "X" && stateGame[0] === "") {
    update(undefined, 0, false, "O");
  } else if (stateGame[1] === "X" && stateGame[7] === "") {
    update(undefined, 7, false, "O");
  } else if (stateGame[7] === "X" && stateGame[1] === "") {
    update(undefined, 1, false, "O");
  } else if (stateGame[3] === "X" && stateGame[5] === "") {
    update(undefined, 5, false, "O");
  } else if (stateGame[5] === "X" && stateGame[3] === "") {
    update(undefined, 3, false, "O");
  } else {
    console.log("random");

    const emptyCase = [];
    // Index de la case vide
    var idx = stateGame.indexOf("");
    // Tant que le tableau n'est pas parcouru entiérement on cherche si il y à des cases vides
    while (idx != -1) {
      // On pousse l'index de la case vide dans le tableau
      emptyCase.push(idx);
      // On incrémente idx de 1 pour que vérifier l'index suivant
      idx = stateGame.indexOf("", idx + 1);
    }
    const random = Math.floor(Math.random() * emptyCase.length);
    const randomValue = emptyCase[random];
    $(".case", true)[randomValue].textContent = "O";
    stateGame[randomValue] = "O";
    checkWin();
  }
}