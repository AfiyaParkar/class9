var ball
var ball2
function setup() {
  createCanvas(400,400);

  ball=createSprite(200,200,30,30)
  ball2=createSprite(100,100,70,70)
}

function draw() 
{
  background(30);

  if(keyDown(RIGHT_ARROW)){
    ball.x=ball.x+5
  }

  if(keyDown(LEFT_ARROW)){
    ball.x=ball.x-5
  }

  if(keyDown(UP_ARROW)){
    ball.y=ball.y-5
  }

  if(keyDown(DOWN_ARROW))
  ball.y=ball.y+5
drawSprites()
}




