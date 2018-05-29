import Coord from './coord.js';

export default class Snake{
  constructor() {
    this.direction = "N"
    this.segmentPositions = [new Coord(0,0)]
  }

  head(){
    return this.segmentPositions.last
  }

  move() {
    this.segmentPositions.push(this.head().plus(DIRECTIONS[this.direction]))
  }




}

DIRECTIONS = {
  "N" => new Coord(0,1),
  "S" => new Coord(0,-1),
  "E" => new Coord(1,0),
  "W" => new Coord(-1,0)
}
