let r=240;
let angle;
let light_blue;
let dark;
let silent;
let carrot;
let blue;
let red;
let xs =[]
let ys =[]
function setup (){
    createCanvas(1000,800)
    angle=TWO_PI-PI/4;
    light_blue=color(112, 248, 186);
    dark=color(30, 16, 20);
    silent=color(124, 180, 184);
    carrot=color(234, 144, 16);
    blue=color(0, 79, 255);
    red=color(255, 32, 110);

}
function draw(){
  background(silent);
  let  x= r*cos(angle);
  let y= r*sin(angle);
  translate(width/2,height/2);
  
  noFill();
  point(0,0);
  point(x,y);
  stroke(dark);
  ellipse(0,0,2*r,2*r);
  line(0,0,x,y )
  stroke(dark);
  
  //cross
  push()
  line(x,0,y)
  pop()
  line(0,-r,0,r);
  line(-r,0,r,0);
  strokeWeight(3);
  stroke(red)
  line(x,0,x,y);
  stroke(blue)
  line(0,0,x,0)
  stroke(blue);
  fill(200,240,0);
  text("cos(x)",x/2,25);
  push()
  translate(x+20,y/2)
  rotate(-PI/2)
  text("sin(x)",0,0);
  pop()
  fill(255);
  text("(0,0)",0,0);
  text("(1,0)",r,0);
  text("(0,1)",0,r);
  text("(0,-1)",0,-r);
  text("(-1,0)",-r,0);
  
  // line(0,0,x*cos(angle)*cos(angle),x*cos(angle)*sin(angle));
  //   stroke(red);
  // line(0,0,x,y);
  
  textSize(24);
  textAlign(CENTER);
  fill(255,0,255);
    
   text("cos^2(x)",x*cos(angle)*cos(angle)/2,x*cos(angle)*sin(angle)/2);
   let xval=x*cos(angle)*cos(angle)+(x-x*cos(angle)*cos(angle))/2;
   let yval=x*cos(angle)*sin(angle)+(y-x*cos(angle)*sin(angle))/2;
  xmid = x*cos(angle)*cos(angle)
	ymid =x*cos(angle)*sin(angle)
	xs.unshift(xmid)
	ys.unshift(ymid)
	beginShape()
	noFill()
	for(let i =0 ; i<=xs.length;i++){
		vertex(xs[i],ys[i])
	}
	endShape()

   fill(255,0,255);
   text("sin^2(x)",xval,yval);
   stroke(0,255,0);
   line(x,0,x*cos(angle)*cos(angle),x*cos(angle)*sin(angle));
  
  angle-=0.01;

}
