float r= 600/4;
float angle =0;
float time =0;
float cr;
float x;
float y;
boolean iscross=false;
boolean iscircle=false;
boolean isball=false;


void setup() {
  size(600, 400);



  cr=width/40;
}

void draw() {
  background(100);
  translate(width/2, height/2);
  x= r*cos(angle);
  y= r*sin(angle);
  noFill();
  stroke(0);
  strokeWeight(2);
      if (iscross){
         line(-r, 0, r, 0);
         line(0, -r, 0, r);
      }
      if (iscircle){
           ellipse(0, 0, r*2, r*2);
           textSize(25);
           textAlign(CENTER);
           text("(1,0)",r,0);
           text("(0,1)",0,r);
           text("(-1,0)",-r,0);
           text("(0,-1)",0,-r);
           text("(0,0)",0,0);
      }
      if (isball){
          fill(0, 0, 255);
          ellipse(x, y, cr, cr);
          stroke(0);
          strokeWeight(2);
          float scale=1-(cr/r)/2;
          line(0, 0, x*scale, y*scale);
          line(x, y, 0, y);
          line(x, y, x, 0);
      }
        
  fill(255, 200, 0);
  ellipse(x, 0, cr*1.25, cr*1.25);
  fill(255, 200, 0);
  ellipse(0, y, cr*1.25, cr*1.25);

  angle-=0.02;
  //saveFrame("frames/f_#####.png");
}
void showCross() {
  iscross=!iscross;

}

void showCircle() {
  iscircle=!iscircle;
}

void showBall() {
 isball=!isball;
}
void keyPressed() {
  if (key=='c') {
    showCircle();
  }
  if (key=='r') {
    showCross();
  }
  if (key=='b') {
    showBall();
  }
}
