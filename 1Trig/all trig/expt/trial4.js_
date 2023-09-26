let r
let angInc
let angle = 0
let time = 0
let cr
let cross
let derivative
let ball
let sinGraph
let cosGraph
let cosvert
let mid
let ismid = false
let iscross = false
let isDerivative = false
let isball = false
let isSinGraph = false
let isCosGraph = false
let isvert = false
let si = []
let co = []
let arrx = []
let arry = []
let sins = []
let coss = []
let is_small = false
let is_smallL = false
let is_smalle = false
let x
let y
let balls
let isballs = false
let sincirclebutton
let isSincicle = false
let describe 

function setup() {
  const width = windowWidth 
  const height = windowHeight 
  let canv = createCanvas(width, height)
  canv.parent('can-container')
	describe= select("#discription")



  // cross = createButton("circle")
  // cross.addClass("mybutton")
  // cross.mousePressed(showCross)
  // cross.parent("button_container")
	cross = makeButton("circle","circle",showCross)


  ball = createButton("ball")
  ball.addClass("mybutton")
  ball.mousePressed(() => isball = !isball)
  ball.parent("button_container")

  sincirclebutton = createButton("make circle")
  sincirclebutton.addClass("mybutton")
  sincirclebutton.mousePressed(() => {
    isSincicle = !isSincicle
    sins.length = 0
    coss.length = 0
  })
  sincirclebutton.parent("button_container")

  mid = createButton("mid point")
  mid.addClass("mybutton")
  mid.mousePressed(() => {
    ismid = !ismid
    arrx.length = 0
    arry.length = 0
    if (is_small == false) {
      setTimeout(() => is_small = !is_small, 6000)
      setTimeout(() => is_smallL = !is_smallL, 3000)
      setTimeout(() => is_smalle = !is_smalle, 10000)
			describe.html("if you also take the mid point you also get a circle")
    }
    else {
      is_smallL = !is_smallL
      is_smalle = !is_smalle
      is_small = !is_small
    }
  })
  mid.parent("button_container")

  balls = createButton("balls")
  balls.addClass("mybutton")
  balls.mousePressed(() => isballs = !isballs)
  balls.parent("button_container")

  sinGraph = createButton("sin")
  sinGraph.addClass("mybutton")
  sinGraph.mousePressed(() => {
    isSinGraph = !isSinGraph
  })
  sinGraph.parent("button_container")

  cosGraph = createButton("cos")
  cosGraph.addClass("mybutton")
  cosGraph.mousePressed(() => {
    isCosGraph = !isCosGraph
  }
  )
  cosGraph.parent("button_container")

  cosvert = createButton("cosvert")
  cosvert.addClass("mybutton")
  cosvert.mousePressed(() => isvert = !isvert)
  cosvert.parent("button_container")

  derivative = createButton("derivative")
  derivative.addClass("mybutton")
  derivative.mousePressed(showDerivative)
  derivative.parent("button_container")

	colorPicker = createColorPicker("rgb(234,144,16)");
  colorPicker.parent("button_container")
	colorPicker.id("colorPicker")


	r = width/6
	angInc = 0.015
  cr = width / 60
}
const makeButton = (name,id,actionWhenPressed) => {
	return  createButton(name)
	.addClass("mybutton") // to style it as a button
	.id(id) //to edit it below
	.mousePressed(actionWhenPressed)  // function call when button is called
	.parent("button_container")
}



function draw() {

  clear()
  Style()
  translate(width / 2, height / 2)
  x = r * cos(angle)
  y = r * sin(angle)
  co.unshift(x)
  si.unshift(y)
  sins.unshift(y)
  coss.unshift(x)
  noFill()
  stroke(255)
  if (iscross) {
    strokeWeight(2.5)
		ellipse(0,0,2*r)
		stroke("blue")
    line(-r, 0, r, 0)
		stroke("red")
    line(0, -r, 0, r)
		describe.html("it looks like they are moving in stright lines <br> press the button BALL")


    cross.style("color", "white")
    cross.style('background-color', "black")
  }
  // if (isball) showball()
	isball? showball() : null
  if (isSincicle) makeCircle()
  else {
    noStroke()
    fill("blue")
    ellipse(x, 0, 30)
    fill('red')
    ellipse(0, y, 30)
    // ellipse(0, height)
  }
  if (ismid) {
    stroke(255)
		strokeWeight(2)
    line(x, 0, 0, y)

    if (is_small) {
      showSmallc()
    }
    if (is_smalle) {
      showSmalle()
    }
    if (is_smallL) {
      showSmallL()
    }
    strokeWeight(2)
    stroke(0)
    mid.style("color", "white")
    mid.style('background-color', "black")

  }
  if (isballs) drawballs()

  if (isSinGraph) showSinGraph()
  if (isCosGraph) showCosGraph()
  if (isvert) showCosvert()
  if (isDerivative) {
    strokeWeight(2.5)
		stroke(255)
		noFill()
    ellipse(0, 0, r * 2)
    derivative.style("color", "white")
    derivative.style('background-color', "black")
    push()
    translate(x, y)
    stroke('blue')
    line(-r, 0, r, 0)
    stroke('red')
    line(0, -r, 0, r)
    stroke('yellow')
    rotate(angle)
    line(0, -r, 0, r)
    pop()
  }

  angle -= angInc
  if(si.length>600)si.pop()
  if(co.length>600)co.pop()

}

function showCross() {
  iscross = !iscross
}

function showDerivative() {
  isDerivative = !isDerivative
}

function showball() {
  noStroke()
  fill(234, 144, 16)
  ellipse(x, y, cr, cr)
  strokeWeight(4)
  stroke(24)
  let scale = 1 - (cr / r) / 2
  line(0, 0, x * scale, y * scale)
  // line(0, 0, x , y )
  line(x, y, 0, y)
  line(x, y, x, 0)
	describe.html("but really they are drawn as the <em>vertical</em> and <em>horizontal</em> motion of circular moving ball")
  ball.style("color", "white")
  ball.style('background-color', "black")
}
function drawballs() {
  stroke(255)
	strokeWeight(2)
  noFill()
  ellipse(0, 0, r * 2)
  let num
  num = 360/3

  for (let i = num; i < 360; i += num) {
		noFill()
    push()
    angleMode(DEGREES)
    rotate(i)
    let x2 = r * cos(degrees(angle) - i)
    let y2 = r * sin(degrees(angle) - i)
    let redish = map(i, 0, 360, 0, 255)
    let greenish = map(i, 0, 50, 0, 255)
    let blueish = map(i, 0, 10, 0, 255)

    colorMode(HSB, 255)
    strokeWeight(2)
    stroke(255)
    // fill(redish, greenish,255)

    stroke(redish, 200, 255)
    line(-r, 0, r, 0)
    // line(0, -r, 0, r)

    // noStroke()
		noFill()
    ellipse(x2, 0, 20)
    // ellipse(0, y2, 20)

    noFill()
    ellipse(0, 0, r * 2)
    angleMode(RADIANS)
    pop()
  }
    balls.style("color", "white")
    balls.style('background-color', "black")
		describe.html("the original balls track the ball's verstical and horizontal positon but if we track the ball's distance in other angles it looks something like this")

}

function showSinGraph() {
  sinGraph.style("color", "white")
  sinGraph.style('background-color', "black")
  beginShape()
		let sintime = 0
		noFill()
		stroke(255, 0, 0)
		strokeWeight(2)
		const skipTime =20
		for (let i = 0; i < si.length; i+=skipTime) {
			vertex(sintime, si[i])
			sintime += skipTime }
  endShape()
  if(si.length>600)si.pop()
}

function showCosGraph() {

  cosGraph.style("color", "white")
  cosGraph.style('background-color', "black")
  beginShape()
		let costime = 0
		stroke(0, 0, 255)
		strokeWeight(2)
		noFill()
		const skipTime =20
		for (let i = 0; i < co.length; i += skipTime) {
			vertex(costime, -co[i])
			costime += skipTime }
  endShape()
  stroke(255)
  line(x, 0, 0, -co[0])
  if(co.length>600)co.pop()

}

function showCosvert() {

	cosvert.style("color", "white")
	cosvert.style("background-color", "black")
	beginShape()
		const skipTime =20
		let vert = 0
		noFill()
		stroke(0, 0, 255)
		strokeWeight(2)
		for (let i = 0; i < co.length; i+=skipTime) {
			vertex(co[i], vert)
			vert += skipTime 
		}
	endShape()
}
function showSmallc() {
	arrx.unshift(x / 2)
	arry.unshift(y / 2)
	beginShape()
	stroke(255)
	for (let i = 0; i < arrx.length; i += 10) {
		ellipse(arrx[i], arry[i], r / 30, r /30)
	}
	if (arrx.length > 200) {arrx.pop(); arry.pop()}
	endShape()
}
function showSmalle() {
	line(x / 2, 0, x / 2, y / 2)
	line(0, y / 2, x / 2, y / 2)
	stroke("blue")
	ellipse(x / 2, 0, 10, 10)
	stroke("red")
	ellipse(0, y / 2, 10, 10)

  line(x / 2, 0, 0, y / 2)
}
function showSmallL() {
  stroke(0)
  line(0, 0, x / 2, y / 2)
}

function makeCircle() {

  stroke(180)
  line(0, r, r + r, r)
  line(0, r, 0, -r)

  noStroke()
  fill("red")
  ellipse(0, y, 30)
  fill("blue")
  ellipse(x + r, r, 30)
  // stroke(255)
  // ellipse(x + r, y, 10)

  stroke('blue')
  line(x + r, y, x + r, r)
  stroke('red')
  line(0, y, x + r, y)

  beginShape()
		stroke('yellow')
		noFill()
		for (let i = 0; i < sins.length; i++) {
			vertex(coss[i] + r, sins[i])
		}
  endShape()

  if (coss.length > 400 || sins.length > 400) {
    coss.pop()
    sins.pop()
  }
	describe.html("tramel Archimedis  from this balls moving in stright line can create circle")
  sincirclebutton.style("color", "white")
  sincirclebutton.style('background-color', "black")
}

function Style() {

  cross.style("color", colorPicker.color())
  cross.style('background-color', "var(--transparent)")

  derivative.style("color", colorPicker.color())
  derivative.style('background-color', "var(--transparent)")

  ball.style("color", colorPicker.color())
  ball.style('background-color', "var(--transparent)")

  sinGraph.style("color", colorPicker.color())
  sinGraph.style('background-color', "var(--transparent)")

  cosGraph.style("color", colorPicker.color())
  cosGraph.style('background-color', "var(--transparent)")

  cosvert.style("color", colorPicker.color())
  cosvert.style('background-color', "var(--transparent)")

  mid.style("background-color", "var(--transparent)")
  mid.style('color', colorPicker.color())

  sincirclebutton.style("background-color", "var(--transparent)")
  sincirclebutton.style('color', colorPicker.color())

  balls.style("background-color", "var(--transparent)")
  balls.style('color', colorPicker.color())
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
	r = width/6
  cr = width / 60
}
