let x = 200 ; 
let y = 0 ; 
let z = 200 ;
let BO = 0 ;



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200, 255, 0);
  
  rect (x, 0, 200, 200)
  rect (0, y, 200, 200)
  rect (200, z, 200, 200)
  rect (BO , 200 , 200, 200)
  rect (x, y, 200, 200)
  rect (y, x, 200, 200)

  //shapes

  
x = x - 1;
y = y + 1;
z = z - 1;
BO = BO + 1;
  //movement
  
 if (y == 200) {
     x = 200 ; 
     y = 0 ;
     z = 200 ;
     BO = 0 ;
  }
  //reset


 fill (0, 0, 0, 20)
}