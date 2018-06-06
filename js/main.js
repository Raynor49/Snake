import Snake from './snake.js'
$(() => {
  let canvas = document.getElementById("canvas")
  let ctx = canvas.getContext("2d")
  let snake = new Snake
  snake.draw(ctx)
  snake.grow()
  snake.draw(ctx)
  snake.move()
  snake.draw(ctx)
})

// document.addEventListener("DOMContentLoaded", () => {
//   let canvas = document.getElementById("canvas")
//   let ctx = canvas.getContext("2d")
// })
