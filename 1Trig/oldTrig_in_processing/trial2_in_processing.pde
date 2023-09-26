float r ;
float angle =0;
float time =0;
float cr;



void setup() {
  size(1280, 720);

  r= width/5;
  cr=width/40;
}

void draw() {
  background(90);
  translate(width/2, height/2);
  float x= r*cos(angle);
  float y =r*sin(angle);
  noFill();
  stroke(0);
  strokeWeight(2);
  ellipse(0, 0, r*2, r*2);

  //cross
  line(-width, 0, width, 0);
  line(0, -height, 0, height);
  // center circle
  fill(255, 190, 0);

  stroke(0);
  strokeWeight(2);
  line(0, 0, x, y);
  stroke(255, 0, 0);
  point(r*cos(angle+PI), r*sin(angle+PI));

  strokeWeight(4);
  textSize(40);
  stroke(255, 190, 0);
  line(x, y, (y*y+x*x)/x, 0);
  stroke(255);
  text("tan", (x+(y*y+x*x)/x)/2, y/2);

  stroke(0, 200, 170);
  line(0, (-x*(-x)/y)+y, x, y);
  stroke(255);
  //fill(255,0,0);
  text("cot", x/2, (((-x*(-x)/y)+y)+y)/2);


  //csc
  stroke(200, 240, 0);
  line(0, 0, 0, ((-x*(-x)/y)+y));
  stroke(255);
  fill(200, 240, 0);
  text("csc", 0, ((-x*(-x)/y)+y)/2);
  //sec

  line(0, 0, (y*y+x*x)/x, 0);
  text("sec", ((y*y+x*x)/x)/2, 0);

  //sin
  stroke(255, 0, 0);
  line(x, y, x, 0);
  fill(255, 0, 0);
  stroke(255);
  text("sin", x, y/2);

  //cos
  stroke(0, 0, 255);
  line(x, y, 0, y);
  fill(0, 0, 255);
  stroke(255);
  text("cos", x/2, y);

  textSize(25);
  textAlign(CENTER);
  text("(1,0)", r, 0);
  text("(0,1)", 0, r);
  text("(-1,0)", -r, 0);
  text("(0,-1)", 0, -r);
  text("(0,0)", 0, 0);



  angle-=0.01;
}
