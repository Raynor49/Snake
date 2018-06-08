import Snake from './snake.js'
export default class Game{
  constructor(ctx){
    this.ctx = ctx
    this.snake = new Snake
    this.draw = this.draw.bind(this)
  }

  play(){
    setInterval(this.draw, 8)
    setInterval(this.snake.move, 8)
    setInterval(this.snake.grow, 50)

  }

  draw(){
    this.snake.draw(this.ctx)
  }


}
