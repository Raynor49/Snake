export default class Coord{
  constructor(x=0, y=0){
    this.x = x
    this.y = y
  }

  plus(coord2){
    this.x += coord2.x
    this.y += coord2.y
  }

}
