function Stick(){
    this.position = {x: 0,y: 400} ;  
}


Stick.prototype.update = function(){
    this.position = Mouse.position;
    if(Mouse._left.pressed)
    {
        console.log("Pressed left");
    }
  };

  Stick.prototype.draw = function () {
    if(!this.visible)
      return;
    Canvas.drawImage(sprites.stick, this.position);
  };