let a;
let b;
let ra;
let xa;
let ya;
let xb;
let yb;
let ox;
let oy;
let light_blue;
let dark;
let silent;
let purple;
let mid_gray;
let carrot;
let blue;
let red;
let buttonY;
let buttonYo;
let buttonX;
let buttonXY;
let button180;
let buttonAll;
let boolY =false;
let boolYo =false;
let boolX =false;
let boolXY =false;
let bool180 =false;
let boolAll =false;
let boolExt=false;
let an=0;
let trans=0;
let transx=10;
let Opacity=255;
let rotateyo;
let rotatey1;
let transyo;
let opacity1=0;
let opacity0=0;
let opacity2=255;
let start=false;
let startB=false;
let line0;
let extention;
let ex;
let ey;
let Xex=130;
let exi=103/2
let exj=0;
let exx=0;
let exy=125;
function setup() {
    let can=createCanvas(1000, windowHeight*0.91);
    can.parent("container")
    can.style("width","50vw")
    light_blue= color(112, 248, 186);
    dark= color(30, 16, 20);
    silent= color(124, 180, 184);
    purple= color(202, 60, 255);
    mid_gray= color(8, 76, 97);
    carrot= color(234, 144, 16);
    blue= color(0, 79, 255);
    red= color(255, 32, 110);
    a=-PI/6
    b=-PI/3
    ra=height/2;
    rotateyo=0;
    rotatey1=PI/6;
    ox=10;
    oy=height/2-20;
    xb=ra*cos(b);
    yb=ra*sin(b)+oy;
    xa=ra*cos(b-a)*cos(a);
    ya=ra*cos(b-a)*sin(a)+oy;
    ex=xa;
    ey=ya;
    transyo=ox+xa+100
    line0=yb
    startB=createButton("Start")
    startB.parent("button-container")
    startB.addClass("mybutton")
    startB.mousePressed(bstart)

    buttonYo=createButton("angleY_first_move")
    buttonYo.parent('button-container')
    buttonYo.addClass("mybutton")
    buttonYo.mousePressed(byo)

    buttonY=createButton("angleY")
    buttonY.parent("button-container")
    buttonY.addClass("mybutton")
    buttonY.mousePressed(by)

    buttonX=createButton("angleX")
    buttonX.parent('button-container')
    buttonX.addClass("mybutton")
    buttonX.mousePressed(bx)

    buttonXY=createButton("angle(X+Y)")
    buttonXY.parent('button-container')
    buttonXY.addClass("mybutton")
    buttonXY.mousePressed(bxy)

    button180=createButton("sum_angles_0f triangle_is_180")
    button180.parent('button-container')
    button180.addClass("mybutton")
    button180.mousePressed(b180)

    buttonAll=createButton("show all")
    buttonAll.parent('button-container')
    buttonAll.addClass("mybutton");
    buttonAll.mousePressed(bAll);

    extention=createButton("extention")
    extention.parent('button-container')
    extention.addClass("mybutton");
    extention.mousePressed(bExt);

}

function draw() {
    background(silent);
    // clear()
    Style()
    if (boolAll == false) boolExt = false
    if(start){
        startB.style('background-color',dark)
        startB.style('color',light_blue)
        // fill(255);
        noFill()
        strokeWeight("3")
        stroke(255, 32, 110)
        triangle(ox, oy, xa, ya, xa, oy)
        noFill()
        arc(ox, oy, 150, 150, a, 0)
        rect(xa-15, oy-15, 15, 15)
        fill("white")
        stroke(0)
        textSize(20)
        tax=89*cos(a/2);
        tay=89*sin(a/2)+oy
        text("x", tax, tay);
        // fill(255,255,255);
        // stroke(252,166,9);
        // strokeWeight(3);
    
        push()
        translate(ox+xa+100,oy)
        stroke(blue)
        fill("white")
        textSize(25);
        text('sin y',(xa) +50, (-ya)+ya/2)
        text('cos y', (xa)/2, 20)
        text('1', (xa)/2,-(ya)/2-20)
        rotate(PI/6)
        // fill(255,255,255);
        noFill()
        stroke(blue);
        strokeWeight(3);
        triangle(0, 0, xa-ox, ya-oy, xb-ox, yb-oy)
        fill("white")
        textSize(20)
        tbx=80*cos(b-a/2)
        tby=80*sin(b-a/2)
        text("y", tbx, tby);
        noFill()
        arc(0,0,150,150,-PI/3,-PI/6)

        pop()
   
    }
    
    if(boolAll){
        buttonAll.style('background-color',dark)
        buttonAll.style('color',light_blue)
        stroke(purple);
        strokeWeight(4);
        line(ox, oy, xb, yb);
    
        stroke(red);
        strokeWeight(3);
        line(ox, oy, xa, ya);
        noFill()
        arc(ox, oy, 250, 250, b, a)
        stroke(red);
        arc(ox, oy, 150, 150, a, 0)

        fill(255);
        textSize(25);
        tax=85*cos(a/2);
        tay=85*sin(a/2)+oy
        text("x", tax, tay);
        
        tbx=130*cos(b/2+a/2);
        tby=130*sin(b/2+a/2)+oy
        text("y", tbx, tby);
        
        line(ox, oy, xa, oy);
        stroke(purple);
        line(ox, oy, xb, oy);
        line(xb, yb, xb, oy);
        stroke(red);
        line(xa, ya, xa, oy);


        stroke(carrot);
        strokeWeight(3);
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
        rect(xa-15, oy-15, 15, 15)
        
        push()
            translate(xa, ya)
            rotate(a);
            rect(-15, -15, 15, 15)
        pop()
        boolX = false
        boolY = false
        boolXY = false
        start = false
        

        
    }
    if(boolXY){
        buttonXY.style('background-color',dark)
        buttonXY.style('color',light_blue)
        noFill()
        stroke(purple)
        strokeWeight(4)
        triangle(ox, oy, xb, yb, xb, oy)
        noFill()
        arc(ox, oy, 200, 200, b, 0)
        strokeWeight(2)
        textSize(18)
        stroke(red)
        text('x ', ox+100, oy-50)
        stroke(255);
        text(' + ', ox+110, oy-50)
        stroke(blue)
        text(' y', ox+125, oy-50)
        stroke(255);
        text('1', ox+(xb-ox)/2-10, yb+(-yb+oy)/2-10)
        stroke(purple)
        noFill()
        rect(xb-15, oy-15, 15, 15)
        
        fill(255)
        push()
        translate(xb+20,(oy-yb)/2+80)
        rotate(-PI/2)
        text("Sin (X + Y)",0,0)
        pop()
        text("cos(X + Y)", xb / 2 - 20, oy + 20)
        boolYo = false
        start = false
        boolX=false
        }
    if(boolExt){
        extention.style('background-color',dark)
        extention.style('color',light_blue)
        const sl=(ya-oy)/(xa-ox);
        const ye=sl*(ex-ox)+oy;
        stroke(red);
        strokeWeight(3)
        line(ox,oy,ex,ye)
        if(ex < xa+150 )ex+=0.5;
        line(xa,ya,ex,ya);
        line(xa,ya,xa,ey)
        if(ey > 50)ey-=0.5
       
        push()
            const sp=(oy-ya)/(xa-ox)
            const yew=(c)=>sp*(c-ox)-oy
            let i=103
            translate(Xex,-1*yew(Xex))
            stroke(blue)
            rotate((atan(sp))+PI/2.455)
            
            if(Xex<=xa+125){
                line(0,0,2*exi,2*exi)
                Xex+=0.6
            }
            else{

               if(exi<103)exi+=0.4;
               if(exj<=103) exj+=0.8
                line(exj,exj,2*exi-25,2*exi-25)
            }
        pop()
        push()
        translate(Xex,-1*yew(Xex))
        stroke(blue)
        textSize(15)
        fill(255)
        
        
        
        if(Xex<=xa+125){
            arc(-125,75,150,150,a,0)
            line(-125,75,0,75)
            text("X",-70,65)
        }
        else{
            if(exx<125){
                exx+=0.7
                exy+=0.7  
            }
            line(-exy+25,75,-exx,75)
            
        }
        pop()



    }

   
    if (boolX) {
        buttonX.style('background-color',dark)
        buttonX.style('color',light_blue)
        fill(255);
        strokeWeight("3")
        stroke(red)
        triangle(ox, oy, xa, ya, xa, oy)
        rect(xa-15, oy-15, 15, 15)
        tax=85*cos(a/2);
        tay=85*sin(a/2)+oy
        fill(0)
        stroke(red)
        text("x", tax, tay);
        noFill()
        arc(ox, oy, 150, 150, a, 0)
        textSize(18)
        fill(0)
        stroke(red)
        text('sin x  ',xa,ya+(oy-ya)/2)
        fill(0);
        stroke(blue)
        textSize(17);
        text('    cos y',xa+35,ya+(oy-ya)/2)
        text('cos y', ox+(xa-ox)/2, ya+(oy-ya)/2-30)
      
  }
    if (boolY) {
        buttonY.style('background-color',dark)
        buttonY.style('color',light_blue)
        fill(255);
        stroke(blue)
        triangle(ox, oy, xa, ya, xb, yb)
        fill(0);
        stroke(blue);
        text('1', ox+(xb-ox)/2-10, yb+(-yb+oy)/2-10)
        textSize(18);
        text('sin y', xb+(xa-xb)/2-40, yb+(ya-yb)/2+10)
        text('cos y', ox+(xa-ox)/2, ya+(oy-ya)/2-30)
        strokeWeight(3);

        fill(255)
        noFill()
        arc(ox, oy, 200, 200, b, a)
        stroke(dark)
        fill(blue)
        tbx=110*cos(b/2+a/2);
        tby=110*sin(b/2+a/2)+oy
        text("y", tbx, tby);
        stroke(purple)
        line(xb,yb,xb,line0)
        if(line0<oy)line0+=0.85 
    
    }
  
   if(boolYo){
    buttonYo.style('background-color',dark)
    buttonYo.style('color',light_blue)
    push()
        translate(transyo,oy)
        push()
        rotate(PI/6)
        // fill(255,255,255,opacity2);
       noFill()
        stroke(0, 79, 255,opacity2);
        strokeWeight(3);
        triangle(0, 0, xa-ox, ya-oy, xb-ox, yb-oy)
        pop()
       strokeWeight(3);
       textSize(20)
       fill(255, 255, 255, opacity2);
        stroke(0, 79, 255,opacity2);
        text('1', (xa)/2,-(ya)/2-20)
        textSize(25);
        text('sin y',(xa) +50, (-ya)+ya/2)
        text('cos y', (xa)/2, 20)
        
        noFill()
        fill(255,255,255,opacity2)
        stroke(0, 79, 255,opacity2)
        tbx=110*cos(a/2)
        tby=110*sin(a/2)
        text("y", tbx, tby);

        if(transyo>ox){
            transyo-=1;
        }
        opacity2-=0.5;
    pop()
    if(opacity2<=70){
    push()
        translate(ox,oy)
        rotate(rotatey1)
        fill(255,255,255,opacity1);
        stroke(0, 79, 255,opacity1);
        strokeWeight(3);
        triangle(0, 0, xa-ox, ya-oy, xb-ox, yb-oy)
        if(rotatey1>=0){
            rotatey1-=0.002
            opacity1+=5
        }
    pop()

    push()
        translate(ox,oy)
        rotate(rotateyo)
        fill(0,0,0,opacity0);
        stroke(0, 79, 255,opacity0);
        text('1', (xa)/2,-(ya)/2-20)
        textSize(18);
        text('sin y',(xa) +50, (-ya)+ya/2)
        text('cos y', (xa)/2, 20)
        strokeWeight(3);
        noFill()
        fill(255,255,255,opacity0)
        stroke(0, 79, 255,opacity0)
        tbx=110*cos(a/2)
        tby=110*sin(a/2)
        text("y", tbx, tby);
        if(rotateyo>=-PI/6){
            rotateyo-=0.002
            opacity0+=5
            
        }
        
    pop()

    }

}
   if(bool180){
    button180.style('background-color',dark)
    button180.style('color',light_blue)
    noFill()
    stroke('green')
    rect(ox+xa-10,oy+ya+200,-77)
    stroke(0)
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
    if(an<=PI-0.01){ an+=0.01}
    else{
        stroke('yellow')
        translate(0,trans)
        line(-xa/2,-t, 0, 0)
        line( 0, 0, 0,ya/2)
        arc(0, 0, 150, 150, PI/2, PI/2+(PI/2+a))
        if(trans>height/20-ya-5){
            trans-=1;
            Opacity-=10
        }
    }
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
        if(transx <= ox+xa-6 )transx+=0.7;
        pop()


    }
    
  
    
}
function Style(){
    startB.style('background-color','var(--light-blue)')
    startB.style('color',"var(--dark)")

    buttonY.style('background-color','var(--light-blue)')
    buttonY.style('color',"var(--dark)")

    buttonYo.style('background-color','var(--light-blue)')
    buttonYo.style('color',"var(--dark)")

    buttonX.style('background-color','var(--light-blue)')
    buttonX.style('color',"var(--dark)")

    buttonXY.style('background-color','var(--light-blue)')
    buttonXY.style('color',"var(--dark)")

    button180.style('background-color','var(--light-blue)')
    button180.style('color',"var(--dark)")

    buttonAll.style('background-color','var(--light-blue)')
    buttonAll.style('color',"var(--dark)")

    extention.style('background-color','var(--light-blue)')
    extention.style('color',"var(--dark)")

    
}
function by(){ 
    boolY = !boolY;
    line0=yb
}
function bx(){ boolX = !boolX;}
function bxy(){ boolXY = !boolXY}
function b180(){
    bool180=!bool180
    an=0;
    trans=0;
    transx=10;
    Opacity=255;
}
function bAll(){
    boolAll=!boolAll;
}
function byo(){
    rotateyo=0;
    rotatey1=PI/6;
    boolYo = !boolYo;
    transyo=ox+xa+100;
    opacity1=0;
    opacity0=0;
    opacity2=255;
}
function bstart(){
    start=!start;
}
function bExt() {
    boolExt = !boolExt;
    

    Xex=130
    ey=ya
    ex=xa
    exi=103/2
    exj=0;
    exx=0;
    exy=125;

}

