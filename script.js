"use strict";

const board = document.querySelector(".board");
const grids = document.querySelector(".grid");
const imgCross = "./images/cross.png";
const imgCircle = "./images/circle.png";

const player = (sign) => {
  const name = sign;
  const moves = [];
  return { moves, name };
};

const game = () => {
  let curSign = imgCircle;
  let curPlayer = circlePlayer;

  board.addEventListener("click", _renderSign);

  function _renderSign(e) {
    const gridEl = e.target.closest(".grid");
    gridEl.innerHTML = `<img src='${curSign}'>`;
    curPlayer.moves.push(+e.target.id);

    _checkStatus();
    _nextPlayer();
  }

  function _nextPlayer() {
    curSign = curSign === imgCircle ? imgCross : imgCircle;
    curPlayer = curPlayer === circlePlayer ? crossPlayer : circlePlayer;
  }

  function _checkStatus() {
    const winIdNums = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];
    // console.log(curPlayer);
    winIdNums.forEach((el) => {
      if (el.every((e) => curPlayer.moves.includes(e)))
        console.log(`${curPlayer.name.toUpperCase()} WIN!`);
    });
  }
};

const circlePlayer = player("circle");
const crossPlayer = player("cross");

game();
