
import Segment from './segment.js'
export default class Snake{
  constructor() {
    this.segments = [new Segment(10,10,"E")]
    this.move = this.move.bind(this)
    this.grow = this.grow.bind(this)
  }

  draw(ctx){
    ctx.clearRect(0, 0, $("#canvas").width(), $("#canvas").height());
    for (var i = 0; i < this.segments.length; i++) {
      ctx.beginPath();
      ctx.arc(
        this.segments[i].x(), this.segments[i].y(), 15, 0, 2*Math.PI, false
      );
      ctx.fillStyle = "red"
      ctx.fill()
      ctx.closePath();
    }
  }

  head(){
    return this.segments[0]
  }

  tail(){
    return this.segments[this.segments.length-1]
  }

  grow(){
    if (this.tail().direction == "N"){
      this.segments.push(new Segment(this.tail().x(), this.tail().y() + 1, this.tail().direction))
    }else if(this.tail().direction == "S"){
      this.segments.push(new Segment(this.tail().x(), this.tail().y() - 1, this.tail().direction))
    }else if(this.tail().direction == "E"){
      this.segments.push(new Segment(this.tail().x() - 1, this.tail().y(), this.tail().direction))
    }else if(this.tail().direction == "W"){
      this.segments.push(new Segment(this.tail().x() + 1, this.tail().y(), this.tail().direction))
    }
  }

  move() {
    if (this.head().direction == "N"){
      this.segments.unshift(new Segment(this.head().x(), this.head().y() - 1, this.head().direction))
    }else if(this.head().direction == "S"){
      this.segments.unshift(new Segment(this.head().x(), this.head().y() + 1, this.head().direction))
    }else if(this.head().direction == "E"){
      this.segments.unshift(new Segment(this.head().x() + 1, this.head().y(), this.head().direction))
    }else if(this.head().direction == "W"){
      this.segments.unshift(new Segment(this.head().x() - 1, this.head().y(), this.head().direction))
    }
    this.segments.pop()
  }




}
