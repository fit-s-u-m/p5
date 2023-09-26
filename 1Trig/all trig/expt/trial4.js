let r ;
let angle =0;
let time =0;
let cr;
let cross;
let circle;
let ball;
let sinGraph;
let cosGraph;
let cosvert;
let mid
let ismid=false
let iscross=false;
let iscircle=false;
let isball=false;
let isSinGraph=false;
let isCosGraph=false;
let isvert=false;
let si=[];
let co=[];
let arrx=[]
let arry=[]
let slider;
let is_small=false
let is_smallL=false
let is_smalle=false
let x
let y

function setup() {
  let canv=createCanvas(800,800);
  canv.parent('can-container');

  cross=createButton(" cross ");
  cross.addClass("mybutton")
  cross.mousePressed(showCross);
  cross.parent("button_container")

  circle=createButton("circle");
  circle.addClass("mybutton")
  circle.mousePressed(showCircle);
  circle.parent("button_container")

  ball=createButton("ball");
  ball.addClass("mybutton")
  ball.mousePressed(showball);
  ball.parent("button_container")

  mid=createButton("mid point");
  mid.addClass("mybutton")
  mid.mousePressed(()=>{
    ismid=!ismid
    arrx.length=0;
    arry.length=0
    if(is_small==false ){
      setTimeout(()=>is_small=!is_small,3000)
      setTimeout(()=>is_smallL=!is_smallL,6000)
      setTimeout(()=>is_smalle=!is_smalle,10000)
    }
    else{
      is_smallL=!is_smallL
      is_smalle=!is_smalle
      is_small=!is_small
    }
  })
  mid.parent("button_container")

  sinGraph=createButton("sin");
  sinGraph.addClass("mybutton")
  sinGraph.mousePressed(showSinGraph);
  sinGraph.parent("button_container")

  cosGraph=createButton("cos");
  cosGraph.addClass("mybutton")
  cosGraph.mousePressed(showCosGraph);
  cosGraph.parent("button_container")

  cosvert=createButton("cosvert");
  cosvert.addClass("mybutton")
  cosvert.mousePressed(showCosvert);
  cosvert.parent("button_container")



  let l=createElement("lable","radius =")
  l.parent("button_container")
  l.addClass("label")

  slider=createSlider(width/12,width/3,width/4,0.5)
  slider.parent("button_container");
  slider.addClass("slider")
  slider.size(300,10)

  cr=width/40;

}


function draw() {
  // background(124, 180, 184);
  clear()
  Style()
  translate(width/2,height/2)
   x= r*cos(angle);
   y =r*sin(angle);
  noFill();
  stroke(255);
  strokeWeight(3.5)
  r= slider.value();
  if (iscross){
    strokeWeight(2)
        line(-r,0,r,0);
        line(0,-r,0,r);

        cross.style("color","var(--light-blue)")
        cross.style('background-color',"var(--dark)")
    }
  if (iscircle){
    strokeWeight(5)   
    ellipse(0,0,r*2)
    ellipse(x, y, r * 2)

    ellipse(x, y, 10, 10)
    push()
    translate(x, y)
    line(-r, 0, r, 0)
    line(0, -r, 0, r)
    stroke(200, 60)
    ellipse(x, y, r * 2)
    stroke('red')
    rotate(angle)
    line(0, -r, 0, r)
    pop()

    // pop()
    circle.style("color","var(--light-blue)")
    circle.style('background-color',"var(--dark)")
    }
  if(ismid){
    stroke(255)
    line(x,0,0,y)
    if (is_small){
      showSmallc()
    }
    if(is_smalle){
      showSmalle()
    }
    if(is_smallL){
      showSmallL()
    }
    strokeWeight(2)
    stroke(0)
    mid.style("color","var(--light-blue)")
    mid.style('background-color',"var(--dark)")

  }
        // center circle
  if(isball){
        noStroke()
        fill(234, 144, 16);
        ellipse(x,y,cr,cr);
        strokeWeight(3)
        stroke(0)
        let scale=1-(cr/r)/2
        line(0,0,x*scale,y*scale)
        line(x,y,0,y);
        line(x,y,x,0);
        ball.style("color","var(--light-blue)")
        ball.style('background-color',"var(--dark)")
   }
  if(isSinGraph){
  sinGraph.style("color","var(--light-blue)")
  sinGraph.style('background-color',"var(--dark)")
        beginShape();
          let sintime=0;

         for(let i=0;i<si.length;i++){ 
            noFill()
            stroke(255,0,0);
            vertex(sintime,si[i])
            sintime+=0.3;
          }
          if(si.length>3000)si.pop()
        endShape();
      }
    if(isCosGraph){
      cosGraph.style("color","var(--light-blue)")
      cosGraph.style('background-color',"var(--dark)")
        beginShape();
          let costime=0;
            
          for(let i=0;i<co.length;i++){
            noFill()
            stroke(0,0,255);
            vertex(costime,-co[i])
            costime+=0.3;
            }  
          push()
          stroke(255)
          line(x,0,0,-co[0])
          pop()

        endShape();
      }
      if(isvert){
        cosvert.style("color","var(--light-blue)")
        cosvert.style('background-color',"var(--dark)")
          beginShape();
            let vert=0;
            for(let i=0;i<co.length;i++){
              noFill()
              stroke(0,0,255);
              vertex(co[i],vert)
              vert+=0.3;
          }
          endShape();
      }

  noStroke();
  fill('blue')
  ellipse(x,0,cr*1.25,cr*1.25);
  fill('red')
  ellipse(0,y,cr*1.25,cr*1.25);
  angle-=0.02

  
}
function Style(){

 cross.style("color","var(--dark)")
 cross.style('background-color',"var(--light-blue)")

 circle.style("color","var(--dark)")
 circle.style('background-color',"var(--light-blue)")

 ball.style("color","var(--dark)")
 ball.style('background-color',"var(--light-blue)")

 sinGraph.style("color","var(--dark)")
 sinGraph.style('background-color',"var(--light-blue)")

 cosGraph.style("color","var(--dark)")
 cosGraph.style('background-color',"var(--light-blue)")

 cosvert.style("color","var(--dark)")
 cosvert.style('background-color',"var(--light-blue)")

 mid.style("background-color","var(--light-blue)")
 mid.style('color',"var(--dark)")
}

function showCross(){ 
  iscross=!iscross;
 }

function showCircle(){
  iscircle=!iscircle;
}

function showball(){
  isball=!isball;
}

function showSinGraph(){ 
  si.unshift(y);
  isSinGraph=!isSinGraph;
 
 
}

function showCosGraph(){  
  co.unshift(x);
  isCosGraph=!isCosGraph;
}

function showCosvert(){ 
  isvert=!isvert;
}
function showSmallc(){ 
  arrx.unshift(x/2)
  arry.unshift(y/2)
  beginShape()
    stroke(255)
    for(let i=0;i<arrx.length;i+=10){
      // vertex(arrx[i],arry[i])
      ellipse(arrx[i],arry[i],10,10)
    }
    if(arrx.length>200){arrx.pop();arry.pop()}
  endShape()
}
function showSmalle(){
  line(x/2,0,x/2,y/2)
  line(0,y/2,x/2,y/2)
  stroke("blue")
  ellipse(x/2,0,10,10)
  stroke("red")
  ellipse(0,y/2,10,10)
}
function showSmallL(){
  stroke(0)
  line(0,0,x/2,y/2)
}