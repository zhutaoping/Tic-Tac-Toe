"use strict";

const player = (sign) => {
  const name = sign;
  const moves = [];
  return { moves, name };
};

const game = () => {
  const board = document.querySelector(".board");
  const grids = document.querySelectorAll(".grid");
  const resetBtn = document.querySelector("button");

  const imgCross = "./images/cross.png";
  const imgCircle = "./images/circle.png";

  let curSign = imgCircle;
  let curPlayer = circlePlayer;
  let gameOver = false;

  board.addEventListener("click", _renderSign);
  resetBtn.addEventListener("click", _init);

  function _checkMarked(e) {
    return e.classList.contains("marked") ? true : false;
  }

  function _renderSign(e) {
    const gridEl = e.target.closest(".grid");
    if (_checkMarked(gridEl)) return;
    gridEl.classList.add("marked");
    gridEl.innerHTML = `<img  src='${curSign}'>`;
    curPlayer.moves.push(+e.target.id);

    _checkGameStatus();

    _nextTurn();
  }

  function _checkGameStatus() {
    const numsOnLine = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];

    numsOnLine.forEach((el) => {
      if (el.every((e) => curPlayer.moves.includes(e))) {
        _winnerScreen();
        // console.log(`${curPlayer.name} WIN!`);
      }
    });
  }

  function _nextTurn() {
    curSign = curSign === imgCircle ? imgCross : imgCircle;

    curPlayer = curPlayer === circlePlayer ? crossPlayer : circlePlayer;
  }

  function _winnerScreen() {
    board.style.background = "teal";
    board.style.display = "flex";
    board.style.alignItems = "center";
    board.innerHTML = `<img src='${curSign}' width= '16%' height="16%">`;
    board.innerHTML += "<h1>WIN!</h1>";
    gameOver = true;
    board.removeEventListener("click", _renderSign);
  }

  function _init() {
    circlePlayer.moves = [];
    crossPlayer.moves = [];
    curSign = imgCircle;
    curPlayer = circlePlayer;
    grids.forEach((grid) => grid.classList.remove("marked"));

    if (gameOver === false) {
      grids.forEach((grid) => (grid.innerHTML = ""));
      return;
    }
    gameOver = true;
    location.reload();
  }
};

const circlePlayer = player("Circle");
const crossPlayer = player("Cross");
game();
