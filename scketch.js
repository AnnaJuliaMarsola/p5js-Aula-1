function setup() {
    createCanvas(600, 600);
    background("white");
  }
  
  function draw() {
    stroke(random(0,255),random(0,255),random(0,255));
    fill(random(0,255),random(0,255),random(0,255));
    
    if(mouseIsPressed){
      rect(mouseX,mouseY, random(10,20), random (30,40));
    }
    
  }