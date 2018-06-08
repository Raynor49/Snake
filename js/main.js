import Game from './game.js'
$(() => {
  let canvas = document.getElementById("canvas")
  let ctx = canvas.getContext("2d")
  let game = new Game(ctx)
  game.play()
})

// document.addEventListener("DOMContentLoaded", () => {
//   let canvas = document.getElementById("canvas")
//   let ctx = canvas.getContext("2d")
// })
