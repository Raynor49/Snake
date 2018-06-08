import Snake from './snake.js'
export default class Game{
  constructor(ctx){
    this.ctx = ctx
    this.snake = new Snake
    this.draw = this.draw.bind(this)
  }

  play(){
    setInterval(this.draw, 1000)
    setInterval(this.snake.move, 1000)

  }

  draw(){
    this.snake.draw(this.ctx)
  }


}
