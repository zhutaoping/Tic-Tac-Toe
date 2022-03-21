"use strict";

const board = document.querySelector(".board");
const grids = document.querySelector(".grid");

const gameBoard = (() => {
  const gameMoves = [];
})();

board.addEventListener("click", function (e) {
  const gridEl = e.target.closest(".grid");
  gridEl.innerHTML = `<img src='./images/circle.png'>`;
});
