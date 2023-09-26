let r 
let angle =0
let time =0
let cr
let slider
let rotate
let boolR=false
let boolS=false
let slider2
let input_box
let sliderB

let light_blue
let dark
let silent
let purple
let mid_gray
let carrot
let blue
let red
let colorPicker

function setup() {
  let can=createCanvas(windowWidth, windowHeight)
  can.parent("can")


  sliderB=createButton("Change to slider")
  sliderB.addClass("button")
  sliderB.parent("box")
  sliderB.mousePressed(()=>boolS=!boolS)

  let label=createElement("label","Angel =")
  label.addClass("label")
  label.parent("box")

  slider=createSlider(0,4*PI,0,0.01)
  slider.addClass("slider")
  slider.parent("box")
  // slider.size(200,3)

  rotate=createButton("Rotate mode is on")
  rotate.mousePressed(()=>boolR=!boolR)
  rotate.addClass("button")
  rotate.parent("box")

  light_blue=color(112, 248, 186)
  dark=color(30, 16, 20)
  silent=color(124, 180, 184)
  purple=color(202, 60, 255)
  mid_gray=color(8, 76, 97)
  carrot=color(234, 144, 16)
  blue= color(0, 79, 255)
  red= color(255, 32, 110)


  input_box=createInput("0")
  input_box.addClass("label")
  input_box.parent("box")

	colorPicker = createColorPicker('var(-carrot)');
  colorPicker.addClass("button")
  colorPicker.parent("box")


  cr = width / 40
	r  = width/ 6


}

function draw() {
  clear()
  Style()
  translate(width/2,height/2)
  let x= r*cos(angle)
  let y =r*sin(angle)
  noFill()
  stroke(0)
  strokeWeight(2)

  ellipse(0,0,r*2)
  textSize(30)

  line(-width,0,width,0)
  line(0,-height,0,height)

  stroke(0)
  strokeWeight(4)
  line(0,0,x,y)

  //tan
  stroke('blue')
  line(x,y,(y*y+x*x)/x,0)
  fill(255)
  text("tan",(x+(y*y+x*x)/x)/2,y/2)
  //cot
  stroke('red')
  line(0,((-x*(-x)/y)+y),x,y)
  text('cot',x/2,(((-x*(-x)/y)+y)+y)/2)
  //csc
  stroke(red)
  line(0,0,0,((-x*(-x)/y)+y))
  text('csc',0,((-x*(-x)/y)+y)/2)
  //sec
  stroke(blue)
  line(0,0,(y*y+x*x)/x,0)
  text('sec',((y*y+x*x)/x)/2,0)
  //sin
  stroke(red)
  line(x,y,x,0)
  text('sin',x,y/2)
  //cos
  stroke(blue)
  line(x,y,0,y)
  text('cos',x/2,y)
  //arc
  noFill()
  stroke(255)
  arc(0,0,100,100,angle,0)
    
  if (boolR) {
    time-=0.01
    angle=map(time,0,10,0,2*PI)
    rotate.style("color","white")  
    rotate.style("background-color","black")
  }
  else if(boolS){
    angle=-1*slider.value()
    sliderB.style("color","white")
    sliderB.style("background-color","black")
  }
  else {angle = radians(-1 * input_box.value())}
  
  let anglev=round(degrees(-1*angle))
  while(anglev<0 || anglev>360){
    if(anglev<0)anglev+=360
    if(anglev>360)anglev-=360
  }
  textSize(20)
  fill(0)
  text(anglev,50*cos(radians(-1*anglev/2)),50*sin(radians(-1*anglev/2)))

}
function Style(){
  rotate.style("background-color","rgba(0,0,0,0)")  
  rotate.style("color",colorPicker.color())
  sliderB.style("background-color","rgba(0,0,0,0)")
  sliderB.style("color",colorPicker.color())
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  cr = width / 40
	r  = width/ 4
}
