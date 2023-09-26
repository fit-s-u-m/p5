const angInc = 0.015 // its the rate it increases its angle every frame rate

let angle =0

// this are for telling if the buttons are on or off
let circleButtonIsOn	     = false
let circlingBallButtonIsOn   = false
let makeCircleButtonIsOn     = false
let midPointButtonIsOn	     = false
let ballsButtonIsOn	     = false
let sinGraphButtonIsOn	     = false
let cosGraphButtonIsOn	     = false
let vertCosGraphButtonIsOn   = false
let showDerivativeButtonIsOn = false
let stop                     = false

let input

let xPoints = [] // for collecting value of x's
let yPoints  = [] // for collecting value of y's


// this is where things start it runs only ones
function setup(){ 
	const can = createCanvas(windowWidth,windowHeight) // creates a HTML5 canvas
	can.parent('can-container')

	const stopButton         = makeButton("Stop","stopButton",()=>{stop=!stop})

	const circleButton       = makeButton("Circle","circleButton",()=>{circleButtonIsOn=!circleButtonIsOn})

	const circlingBallButton = makeButton("Circling Ball","circlingBallButton",()=>{circlingBallButtonIsOn=!circlingBallButtonIsOn}) 

	const makeCircleButton   = makeButton("make circle","makeCircleButton",()=>{makeCircleButtonIsOn=!makeCircleButtonIsOn})

	const midPointButton     = makeButton("show mid", "midPointButton",()=>{midPointButtonIsOn=!midPointButtonIsOn})

	const ballsButton        = makeButton("Balls","ballsButton",()=>{ballsButtonIsOn=!ballsButtonIsOn})

	const sinGraphButton     = makeButton("sin Graph","sinGraphButton",()=>{sinGraphButtonIsOn=!sinGraphButtonIsOn})

	const cosGraphButton     = makeButton("cos Graph","cosGraphButton",()=>{cosGraphButtonIsOn=!cosGraphButtonIsOn})

	const vertCosGraphButton = makeButton("vertcal cos", "vertCosGraphButton",()=>{vertCosGraphButtonIsOn=!vertCosGraphButtonIsOn})

	const showDerivativeButton = makeButton("derivative","showDerivativeButton",()=>{showDerivativeButtonIsOn=!showDerivativeButtonIsOn})

	input = makeinputBox("0","#input")

}



// this function loops every frame 
function draw(){
	clear() // clears the background
	translate(width/2,height/2) // translates to the middle
  const radius =width/6
  const ballRadius = radius/8 

	const x = radius * cos(angle)
	const y = radius * sin(angle)
	const always= ()=>{ // it draws the balls always except when we make circle
		noStroke()
		fill("blue")
		ellipse(x,0,ballRadius)
		fill("red")
		ellipse(0,y,ballRadius)
    styleWhenButtonOff("#makeCircleButton")
	}

	xPoints.unshift(x) // adds value of x to the front of the list 
	yPoints.unshift(y)
  // its a substitute for if and else
	// if this                   then                                     else 
	circleButtonIsOn	 ? showCircle(radius)                        :styleWhenButtonOff("#circleButton")
	circlingBallButtonIsOn	 ? showCirclingBall(x,y,ballRadius)          :styleWhenButtonOff("#circlingBallButton")
	makeCircleButtonIsOn	 ? makeCircle(x,y,xPoints,yPoints,radius)    :always()
	midPointButtonIsOn	 ? showMidPoint(x,y,xPoints,yPoints,radius)  :styleWhenButtonOff("#midPointButton")
ballsButtonIsOn		       ? showBalls(radius,angle,3,ballRadius)      :styleWhenButtonOff("#ballsButton")
	sinGraphButtonIsOn       ? showSinGraph(yPoints)                     :styleWhenButtonOff("#sinGraphButton")
	cosGraphButtonIsOn       ? showCosGraph(x,xPoints)		     :styleWhenButtonOff("#cosGraphButton")
	vertCosGraphButtonIsOn   ? showCosVert(xPoints)	                     :styleWhenButtonOff("#vertCosGraphButton")
	showDerivativeButtonIsOn ? derivative(x,y,radius)                    :styleWhenButtonOff("#showDerivativeButton")

	inputAngle = radians(float(-1*input.value()))  // calculates the angle from given input
	stop ? (()=>{angle =inputAngle; styleWhenButtonOn("#stopButton")})() : (()=>{angle-=angInc;styleWhenButtonOff("#stopButton")})()

}



// HELPER FUNCTIONS
const discribeText = s => {
	select("#discription") // selects with id
		.html(s) // and manuplates the inner html
}

const styleWhenButtonOn = id => {
	select(id)
		.style("color","white") // adds css
		.style("background-color","black")
}

const styleWhenButtonOff = id => {
	select(id)
		.style("color","var(--carrot)")
		.style("background-color","var(--transparent)")
}

const makeButton = (name,id,actionWhenPressed) => {
	return  createButton(name)
	            .addClass("mybutton") // to style it as a button
              .id(id) //to edit it below
	            .parent("button_container")
              .mousePressed(actionWhenPressed)  // function call when button is called
}

const makeinputBox = (initalVal,id) => {
	return  createInput(initalVal)
	            .addClass("mybutton") // to style it as a button
              .id(id) //to edit it below
	            .parent("button_container")
}

function windowResized () { // is called when the window is resized
	resizeCanvas(windowWidth,windowHeight)
	radius  = width/6
	ballRadius = radius/8
}



// functions executed when button is Pressed
const showCircle = radius =>{
	noFill()
	strokeWeight(2.5) // sets the thickness
	stroke("white")
	ellipse(0,0,2*radius)
	stroke("blue")
	line(-radius , 0, radius, 0)
	stroke("red")
	line(0,-radius,0,radius)
  //
	s ="they look like they are moving in a stright lines <br> press the button <em>Ball</em> to see next"
	discribeText(s)
	//
	styleWhenButtonOn("#circleButton")
}
const showCirclingBall = (x, y, ballradius) =>{
	noStroke()
	fill("orange")
	ellipse(x,y,ballradius,ballradius)
  
	strokeWeight(4)
	stroke(24)
	line(0, 0, x, y) // to the middle
	line(x, y, 0, y) // from the ball to vertical line
	line(x, y, x, 0) // from the ball to horizontal line
  
	s= "but really they are drawn as the <em> vertival</em> and <em>horizontal</em> motion of circular moving ball"
	discribeText(s)
  
	styleWhenButtonOn("#circlingBallButton")
}
const makeCircle = (x, y, xs, ys, radius) =>{
	stroke(180)
	strokeWeight(2)
	line(0, radius, 2*radius, radius)
	line(0, radius, 0, -radius)
  
	noStroke()
	fill("red")
	ellipse(0,y,radius/10)
	fill("blue")
	ellipse(x+radius,radius,radius/10)
  
	stroke("red")
	line(0, y, x+radius, y)
	stroke("blue")
	line(x+radius , y, x+radius, radius)
	
	beginShape()
		stroke("yellow")
		noFill()
		xs.forEach( (value,index)=>vertex(value+radius,ys[index]) )
	endShape()
	xs.length >100 ? xs.pop() :null
	ys.length >100 ? ys.pop() :null
  
	discribeText("Did you know you can make circles out of objects moving in a straight line <br> <em>Archimedes</em> knew that")
	styleWhenButtonOn("#makeCircleButton")
}
const showMidPoint = (x, y, xs, ys, radius) => {
	stroke("white")
	strokeWeight(2)
	noFill()
	line(x,0,0,y)
	ys.length >200 ? ys.pop(): null
	xs.length >200 ? xs.pop(): null
  
	beginShape()
			for (let i=0; i<xs.length; i+=10){
				circle(xs[i]/2, ys[i]/2, radius/30)
			}
	endShape()
	stroke("black")
	line(0,0,x/2,y/2)
  
	const s = "so if you see the mid point between the balls that also makes a circle"
	discribeText(s)
  
	styleWhenButtonOn("#midPointButton")
}
const showBalls =(radius,angle,num,ballRadius)=> {
	stroke("white")
	strokeWeight(1)
	noFill()
	ellipse(0,0,radius*2)
	const angledivided = 360/num
  
	for (let i=0; i<360;i+=angledivided){
		push()
			angleMode(DEGREES)
			rotate(i)
			const xi = radius * cos(degrees(angle)-i)
			const yi = radius * sin(degrees(angle)-i)
			
			let hue = map (i,0,360,0,255)
			colorMode(HSB,255)
			strokeWeight(2)
			fill(hue,255,200)
			stroke(hue,255,200)
			line(-radius,0,radius,0)
			line(0,-radius,0,radius) // 90 deg oposite of the privious line
			ellipse(xi,0,ballRadius)
			ellipse(0,yi,ballRadius)
      //
		pop()
	}
		angleMode(RADIANS)
		styleWhenButtonOn("#ballsButton")
	//
		s = "the original balls only track the <em> vertical </em> and <em>horizontal</em> but if we track in diffrent directions it gives this"
		discribeText(s)
}
const showSinGraph = ys =>{
	 beginShape()
		 let sintime =0
		 const skipTime = 10
		 noFill()
		 stroke("red")
		 strokeWeight(2)
		 for(let i=0; i<ys.length;i+=skipTime){
			 vertex(sintime,ys[i])
			 sintime+=skipTime
		 }
	 endShape()
	 ys.length >600 ? ys.pop():null
	 styleWhenButtonOn("#sinGraphButton")
}
const showCosGraph = (x, xs ) =>{
	 beginShape()
		 let costime =0
		 const skipTime = 10
		 noFill()
		 stroke("blue")
		 strokeWeight(2)
		 for(let i=0; i<xs.length;i+=skipTime){
			 vertex(costime,xs[i])
			 costime+=skipTime
		 }
	endShape()
	stroke("white")
	line(x,0,0,xs[0])
	// 
	xs.length >600 ? xs.pop():null
	styleWhenButtonOn("#cosGraphButton")
}
const showCosVert = xs =>{
	 beginShape()
		 let costime =0
		 const skipTime = 10
		 noFill()
		 stroke("blue")
		 strokeWeight(2)
		 for(let i=0; i<xs.length;i+=skipTime){
			 vertex(xs[i], costime)
			 costime+=skipTime
		 }
	endShape()
	// 
	xs.length >600 ? xs.pop():null
	styleWhenButtonOn("#vertCosGraphButton")
}
const derivative = (x,y,radius) =>{
	strokeWeight(2.5)
	stroke(255)
	noFill()
	ellipse(0,0,2*radius)
	push()
		translate(x,y)
		stroke("blue")
		line(-radius, 0, radius, 0)
		stroke("red")
		line(0, -radius, 0, radius)
		// 
		stroke("yellow")
		rotate(angle)
		line(0,-radius,0,radius)
	pop()
	styleWhenButtonOn("#showDerivativeButton")
}
