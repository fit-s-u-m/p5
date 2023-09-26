let a;
let b;
let ra;
let xa;
let ya;
let xb;
let yb;
let buttonY;
let buttonX;
let buttonXY;
let button180;
let boolY =false;
let boolX =false;
let boolXY =false;
let an=0;
let trans=0;
let transx=10;
let Opacity=255;
let bool180=false;
function setup() {
    createCanvas(800, 1000);
    a=-PI/6
    b=-PI/3
    ra=height/2;
    buttonY=createButton("angleY")
    buttonY.addClass("mybutton")
    buttonY.mousePressed(by)
    buttonX=createButton("angleX")
    buttonX.addClass("mybutton")
    buttonX.mousePressed(bx)
    buttonXY=createButton("angle(X+Y)")
    buttonXY.addClass("mybutton")
    buttonXY.mousePressed(bxy)
    button180=createButton("sum_of_angles_0f triangle_is_180")
    button180.addClass("mybutton")
    button180.mousePressed(b180)
}
function draw() {
    background(70);
    noFill();
    stroke(255);
    strokeWeight(4);
    let ox=10;
    let oy=height/2-20;
  
    // arc(ox,oy, ra*2,ra*2,-PI/2,0);
  
  
    xb=ra*cos(b);
    yb=ra*sin(b)+oy;
    stroke(0, 0, 255);
    strokeWeight(3);
    line(ox, oy, xb, yb);
  
    xa=ra*cos(b-a)*cos(a);
    ya=ra*cos(b-a)*sin(a)+oy;
    stroke(255, 0, 0);
    strokeWeight(3);
    line(ox, oy, xa, ya);

    arc(ox, oy, 200, 200, b, a)
    stroke(255, 0, 0);
    arc(ox, oy, 150, 150, a, 0)

    fill(255);
    textSize(25);
    
    tax=85*cos(a/2);
    tay=85*sin(a/2)+oy
    text("x", tax, tay);
    
    tbx=110*cos(b/2+a/2);
    tby=110*sin(b/2+a/2)+oy
    text("y", tbx, tby);
    
    line(ox, oy, xa, oy);
    stroke(0, 0, 255);
    line(ox, oy, xb, oy);
    line(xb, yb, xb, oy);
    stroke(255, 0, 0);
    line(xa, ya, xa, oy);


    stroke(255);
    strokeWeight(2);
    line(xa, ya, xb, yb)
    line(xa, ya, xb, ya)
    push()
    strokeWeight(1)
    textSize(15)
    text('A',ox,oy+15)
    text('B',xb,yb)
    text('C',xa,ya)
    text('D',xa,oy+15)
    text('E',xb,ya)
    text('F',xb,oy+15)
    pop()

    //90 degrees
    noFill()
    stroke('red')
    rect(xa-10, oy-10, 10, 10)
    
    push()
    translate(xa, ya)
    rotate(a);
    rect(-15, -15, 15, 15)
    pop()
    if(boolXY){
        fill(80);
        triangle(ox, oy, xb, yb, xb, oy)
        noFill()
        arc(ox, oy, 200, 200, b, 0)
        text('x+y', ox+100, oy-50)
        text('1', ox+(xb-ox)/2-10, yb+(-yb+oy)/2-10)
        rect(xb-15, oy-15, 15, 15)

        }

    if (boolY) {
        fill(255);
        triangle(ox, oy, xa, ya, xb, yb)
        fill(0);
        stroke('cyan');
        text('1', ox+(xb-ox)/2-10, yb+(-yb+oy)/2-10)
        textSize(18);
        text('sin y', xb+(xa-xb)/2-40, yb+(ya-yb)/2+10)
        text('cos y', ox+(xa-ox)/2, ya+(oy-ya)/2-30)
        strokeWeight(3);
    
        line(xa, ya, xb, yb)
        line(ox, oy, xa, ya)
        line(ox, oy, xb, yb)
        noFill()
        arc(ox, oy, 200, 200, b, a)
        fill(255)
        stroke(255,0,0)
        tbx=110*cos(b/2+a/2);
        tby=110*sin(b/2+a/2)+oy
        text("y", tbx, tby);
        
        
        
    }
   
    if (boolX) {
        fill(255);
        triangle(ox, oy, xa, ya, xa, oy)
        rect(xa-15, oy-15, 15, 15)
        tax=85*cos(a/2);
        tay=85*sin(a/2)+oy
        text("x", tax, tay);
        stroke(255, 0, 0);
        arc(ox, oy, 150, 150, a, 0)
        textSize(18)
        
        text('sin x * ',xa,ya+(oy-ya)/2)
        fill(0);
        stroke('cyan')
        textSize(17);
        text('    cos y',xa+35,ya+(oy-ya)/2)
        text('cos y', ox+(xa-ox)/2, ya+(oy-ya)/2-30)
      
  }
if(bool180){
    noFill()
    stroke(255,0,0)
    strokeWeight(3)
    triangle(ox, oy+ya+200, xa, ya+ya+200, xa, oy+ya+200)
    let slope=(2*ya-ya-oy)/(xa-ox)
    let t=slope*(xa/2);
    push()
    translate( xa, ya+ya+200)
    rotate(an)
    stroke(255,255,0,Opacity)
    line(-xa/2,-t, 0, 0)
    line( 0, 0, 0,ya/2)
    arc(0, 0, 150, 150, PI/2, PI/2+(PI/2+a)) 

    if(an<=PI-0.01){
        an+=0.01
    }
    else{
        stroke('yellow')
        translate(0,trans)
        line(-xa/2,-t, 0, 0)
        line( 0, 0, 0,ya/2)
        arc(0, 0, 150, 150, PI/2, PI/2+(PI/2+a))
        if(trans>47-ya){
            trans-=1;
            Opacity-=10
        }}
    pop()

        push()
        translate(transx,oy+ya+200)
        stroke('red')
        line(0, 0, xa/2, 0)
        line(0, 0,xa/2, t)
        strokeWeight(2)
        stroke(255,0,0)
        arc(0, 0, 150, 150, a, 0)
        tax=87*cos(a/2);
        tay=87*sin(a/2)+oy+ya+10
        text("a", tax, tay);
        if(transx <= ox+xa-6)transx++;
        pop()

        stroke('green')
        rect(ox+xa-10,oy+ya+200,-77)

    }
    
}
   

  

function by(){ boolY=!boolY;}
function bx(){boolX=!boolX;}
function bxy(){boolXY=!boolXY}
function b180(){
    bool180=!bool180
    an=0;
    trans=0;
    transx=10;
    Opacity=255;
}

