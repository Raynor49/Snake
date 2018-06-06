import Coord from './coord.js';
export default class Snake{
  constructor() {
    this.segments = [new Segment(10,10,"N")]
  }

  draw(ctx){
    for (var i = 0; i < this.segmentPositions.length; i++) {
      ctx.beginPath();
      ctx.arc(
        this.segments[i].x, this.segments[i].y, 30, 0, 2*Math.PI, false
      );
      ctx.fillStyle = "red"
      ctx.fill()
      ctx.closePath();
    }
  }

  head(){
    return this.segments[this.segments.length-1]
  }

  grow(){

  }

  move() {
    for (var i = 0; i < this.segments.length; i++) {
      this.segments[i].move()
    }
  }




}

Snake.DIRECTIONS = {
  "N" : new Coord(0,1),
  "S" : new Coord(0,-1),
  "E" : new Coord(1,0),
  "W" : new Coord(-1,0)
}
