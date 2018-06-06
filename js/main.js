import Snake from './snake.js'
$(() => {
  let canvas = document.getElementById("canvas")
  let ctx = canvas.getContext("2d")
  let snake = new Snake
  snake.draw(ctx)
})

// document.addEventListener("DOMContentLoaded", () => {
//   let canvas = document.getElementById("canvas")
//   let ctx = canvas.getContext("2d")
// })
