let a;
let b;
let ra;
let xa;
let ya;
let xb;
let yb;
function setup() {
    createCanvas(800, 500);
    a=-PI/6
    b=-PI/3
    ra=height;
}


function draw() {
    background(70);
    noFill();
    stroke(255);
    strokeWeight(4);
    let ox=10;
    let oy=height-20;
  
    //arc(ox,oy, ra*2,ra*2,-PI/2,0);
  
  
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
    //texts
    if (keyIsPressed) {

      if (key==='q') {
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

    if (key==='w') {
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
        textSize(15);
        text('cos y',xa+35,ya+(oy-ya)/2)
  
        
        
        
    }
    if (key==='e') {
        fill(255);
        triangle(ox, oy, xb, yb, xb, oy)
        noFill()
        arc(ox, oy, 200, 200, b, 0)
        text('x+y', ox+100, oy-50)
        text('1', ox+(xb-ox)/2-10, yb+(-yb+oy)/2-10)
        rect(xb-15, oy-15, 15, 15)
    }
    if (key==='r') {
        fill(255);
        triangle(xb, yb, xb, ya, xa, ya)
    }
    if (key==='t') {
        stroke('cyan')
        strokeWeight(3);
        line(xb, ya, xb, oy);
        line(xa, ya, xa, oy);
    }
  }
  
}


