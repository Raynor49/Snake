export default class Segment{
  constructor(x,y,dir){
    this.pos = [x,y]
    this.direction = dir
  }

  move(){
    if (this.direction = "N"){
      this.pos[1] -= 7
    }else if(this.direction = "S"){
      this.pos[1] += 7
    }else if (this.direction = "E"){
      this.pos[0] += 7
    }else if (this.direction = "W"){
      this.pos[0] -= 7
    }

  }

  x(){
    return this.pos[0]
  }

  y(){
    return this.pos[1]
  }
}
