float r=240;
float angle=TWO_PI-PI/4;
void setup (){
//size(500,500);
fullScreen();


}
void draw(){
  background(100);
  float x= r*cos(angle);
  float y= r*sin(angle);
  translate(width/2,height/2);
  
  noFill();
  point(0,0);
  point(x,y);
  stroke(0);
  ellipse(0,0,2*r,2*r);
  stroke(255,0,0);
  line(0,0,x,y);
  stroke(0);
  
  //cross
  line(0,-r,0,r);
  line(-r,0,r,0);
  strokeWeight(3);
  line(x,0,x,y);
  stroke(0,0,255);
  fill(200,240,0);
  text("cos(x)",x/2,0);
  text("sin(x)",x,y/2);
  fill(255);
  text("(0,0)",0,0);
  text("(1,0)",r,0);
  text("(0,1)",0,r);
  text("(0,-1)",0,-r);
  text("(-1,0)",-r,0);
  
  line(0,0,x*cos(angle)*cos(angle),x*cos(angle)*sin(angle));
  
  textSize(24);
  textAlign(CENTER);
  fill(255,0,255);
  
  text("cos^2(x)",x*cos(angle)*cos(angle)/2,x*cos(angle)*sin(angle)/2);
  float xval=x*cos(angle)*cos(angle)+(x-x*cos(angle)*cos(angle))/2;
  float yval=x*cos(angle)*sin(angle)+(y-x*cos(angle)*sin(angle))/2;
  fill(255,0,255);
  text("sin^2(x)",xval,yval);
  stroke(0,255,0);
  line(x,0,x*cos(angle)*cos(angle),x*cos(angle)*sin(angle));
  
  //angle+=0.001;

}
