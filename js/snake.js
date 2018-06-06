import Coord from './coord.js';
export default class Snake{
  constructor() {
    this.direction = "N"
    this.segmentPositions = [new Coord(100,100)]
  }

  draw(ctx){
    
    // for (var i = 0; i < this.segmentPositions.length; i++) {
    //   ctx.beginPath();
    //   ctx.arc(
    //     this.segmentPositions[i][0], this.segmentPositions[i][1], 100, 0, 2*Math.PI, false
    //   );
    //   ctx.fillStyle = "red"
    //   ctx.fill()
    //   ctx.closePath();
    // }
  }

  head(){
    return this.segmentPositions.last
  }

  grow(){
    this.segmentPositions.unshift()
  }

  move() {
    this.segmentPositions.push(this.head().plus(DIRECTIONS[this.direction]))
    this.segmentPositions.shift()
  }




}

Snake.DIRECTIONS = {
  "N" : new Coord(0,1),
  "S" : new Coord(0,-1),
  "E" : new Coord(1,0),
  "W" : new Coord(-1,0)
}
