"use strict";

const board = document.querySelector(".board");
const grids = document.querySelector(".grid");
const imgCross = "./images/cross.png";
const imgCircle = "./images/circle.png";

const game = () => {
  const gameMoves = [];
  const gameMoves2 = [{ circle: 6 }, { circle: 7 }, { circle: 2 }];
  let curSign = imgCircle;

  board.addEventListener("click", _renderSign);

  function _renderSign(e) {
    const gridEl = e.target.closest(".grid");
    gridEl.innerHTML = `<img src='${curSign}'>`;

    _storeMove2Arr(+e.target.id);
  }

  function _storeMove2Arr(id) {
    const curMove = {
      [curSign === imgCircle ? "circle" : "cross"]: id,
    };
    gameMoves.push(curMove);

    _nextTurnSign();
  }

  function _nextTurnSign() {
    curSign = curSign === imgCircle ? imgCross : imgCircle;

    if (gameMoves.length > 4) _checkGameStatus();
  }

  function _checkGameStatus() {
    console.log("checking");
  }

  return { gameMoves2 };
};

game();
