function handleMouseMove(evt) {
    var canvasScale = Canvas2D.scale;
    var canvasOffset = Canvas2D.offset;
    int x = evt.pageX;
    int y = evt.pageY;
    Mouse._position = new Vector2(x, y);
}


function handleMouseDown(evt) {
    handleMouseMove(evt);

    if (evt.which === 1) {
        if (!Mouse._left.down)
            Mouse._left.pressed = true;
        Mouse._left.down = true;
    } else if (evt.which === 2) {
        if (!Mouse._middle.down)
            Mouse._middle.pressed = true;
        Mouse._middle.down = true;
    } else if (evt.which === 3) {
        if (!Mouse._right.down)
            Mouse._right.pressed = true;
        Mouse._right.down = true;
    }
}

function handleMouseUp(evt) {
    handleMouseMove(evt);

    if (evt.which === 1)
        Mouse._left.down = false;
    else if (evt.which === 2)
        Mouse._middle.down = false;
    else if (evt.which === 3)
        Mouse._right.down = false;
}


function MouseHandler(){
    this._left = new ButtonState();
    this._middle = new ButtonState();
    this._right = new ButtonState(); 
    this.position = new Vector2(); 
    document.onmousemove = handleMouseMove;
    document.onmousedown = handleMouseDown;
    document.onmouseup = handleMouseUp;


}

MouseHandler.prototype.reset = function()
{
    this.left.pressed=false;
    this.middle.pressed=false;
    this.right.pressed=false;

}

let Mouse = new MouseHandler();