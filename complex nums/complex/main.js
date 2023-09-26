let zMouseController = true
let isLines = false
let isBalls = false
let showTrace = false
let finiteZ = []
let finiteC = []
let allC  = []
let allZ  = []
let v
let v1
let v2
let v3
function setup(){ 
  createCanvas(windowWidth,windowHeight-30).parent('can-container')

  // createCheckbox('lines')
		// 						.parent("button_container")
		// 						.id("check")
		// 						.changed(()=>{isLines=!isLines})
  // createCheckbox('trace')
		// 						.parent("button_container")
		// 						.id("check")
		// 						.changed(()=>{showTrace=!showTrace;allC.length=0;allZ.length=0})
  // createCheckbox('balls')
		// 						.parent("button_container")
		// 						.id("check")
								// .changed(()=>{isBalls=!isBalls})

	// makeButton("changing z","change",()=>{zMouseController=!zMouseController})
	// createElement("lable","zoom").addClass("other").parent("button_container")
  makeslider(100,300,10,"zoom").size(200,10)
	v= createVector(1,1)
	v1= createVector(-0.5,1)
	v2= createVector(1,2)
	v3= createVector(1,1.5)
	
}

function draw(){
	clear() 
	translate(width/2,height/2)
	let space = select("#zoom").value()
	colorMode(HSB)
	noStroke()
	graph(space)
	stroke("blue")
	fill("blue")
	showVector(v,space)
	stroke("red")
	fill("red")
	showVector(v1,space)
}



// HELPER FUNCTIONS
const discribeText = s => {
	select("#discription") 
		.html(s) 
}

const styleWhenButtonOn = id => {
	select(id)
		.style("color","white") 
		.style("background-color","black")
}

const styleWhenButtonOff = id => {
	select(id)
		.style("color","var(--carrot)")
		.style("background-color","var(--transparent)")
}

const makeButton = (name,id,actionWhenPressed) => {
	return  createButton(name)
	            .addClass("mybutton") 
              .id(id) 
	            .parent("button_container")
              .mousePressed(actionWhenPressed)
}

const makeinputBox = (initalVal,id) => {
	return  createInput(initalVal)
	            .addClass("other") 
              .id(id) 
	            .parent("button_container")
}
const makeslider = (initalVal,finalval,step,id) =>{
	return createSlider(initalVal,finalval,step)
							.addClass("other")
							.id(id)
							.parent("button_container")
}

const square = c =>{
	return {
    	x : c.x**2 - c.y**2,
  	  y : 2*c.x*c.y
	}
}
const sqrts  = c =>{
	 return {
			 x  : sqrt((c.x + sqrt(c.x**2 + c.y**2))/2),
			 y  : sqrt((-c.x + sqrt(c.x**2 + c.y**2))/2)
   }
}
const graph = space =>{
	let divider = 2

	stroke("blue")
	line(-height/2,0,height/2,0)
	stroke("red")
	line(0,-height/2,0,height/2)

	fill("yellow")
	noStroke()
	textAlign(CENTER)
	textSize(15)
	let div = space/divider

	//text
	stroke(0)
	for(let i = 0; i<=height/2;i+=div){
		text(i/space,i,0)
		line(-height/2,i,height/2,i)
	}
	for(let i = -div; i>=-height/2;i-=div){
		text(i/space,i,0)
		line(-height/2,i,height/2,i)
	}
	for(let i =div; i<=height/2;i+=div){
		text(-i/space,0,i)
		line(i,-height/2,i,height/2)
	}
	for(let i = -space/divider; i>=-height/2;i-=space/divider){
		text(-i/space,0,i)
		line(i,-height/2,i,height/2)
	}
}
const showVector = (v,space,sv=createVector(0,0))=>{
	push()
	let vmag = v.mag()*space
	translate(sv.x*space,-sv.y*space)
	rotate(-v.heading())
	line(0,0,vmag,0)
	// fill(0)
	noStroke()
	triangle(vmag-space/4,space/8,vmag-space/4,-space/8,vmag,0)
	pop()
}


function windowResized(){
	resizeCanvas(windowWidth,windowHeight-30)
}
