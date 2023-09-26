const rate = 0.015 // its the rate it increases its angle every frame rate
let time =0
let path  = [] // for collecting value of y's
let N 
let fourierX
let x=[]
let state = -1

const USER = 0;
const FOURIER = 1;

function mousePressed() {
  state = USER;
  drawing = [];
  x = [];
  time = 0;
  path = [];
}

function mouseReleased() {
  state = FOURIER;
  const skip = 1 
  for (let i = 0; i < drawing.length; i += skip) {
    x.push(new Complex(drawing[i].x, drawing[i].y));
  }
  fourierX = dft(x);

  fourierX.sort((a, b) => b.amp - a.amp);
}
// this is where things start it runs only ones
function setup(){ 
  createCanvas(windowWidth,windowHeight)
			.parent('can-container')

	makeinputBox(1,"slider") 

  for (let i = 0; i < x.length; i++) {
    x.push(new Complex(x[i].x,x[i].y));
  }
	 
	fourierX = dft(x);
  fourierX.sort((a, b) => b.amp - a.amp);
	
}

// this function loops every frame 
function draw(){
	
  if (state == USER) {
		clear()
    let point = createVector(mouseX - width / 2, mouseY - height / 2);
    drawing.push(point);
    stroke(255);
    noFill();
    beginShape();
    for (let v of drawing) {
      vertex(v.x + width / 2, v.y + height / 2);
    }
    endShape();
  } 
	else if (state == FOURIER) {
		clear()
    let v = epicycles(width / 2, height / 2, 0, fourierX);
    path.unshift(v);
    beginShape();
    noFill();
    strokeWeight(2);
    stroke("yellow");
    for (let i = 0; i < path.length; i++) {
      vertex(path[i].x, path[i].y);
    }
    endShape();

    const dt = TWO_PI / fourierX.length;
    time += dt;

    if (time > TWO_PI) {
      time = 0;
      path = [];
    }
  }

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
const makeslider = (initalVal,finalval,step,id) =>{
	return createSlider(initalVal,finalval,step)
							.addClass("mybutton")
							.id(id)
							.parent("button_container")
}

function windowResized () { // is called when the window is resized
	resizeCanvas(windowWidth,windowHeight)
	radius  = width/6
	ballRadius = radius/8
}

const fourior = () =>{

	let x=0
	let y=0
	const sv = select('#slider').value()
	
	for (let i=0 ;i<sv;i++){
		let prev_x=x
		let prev_y=y
		let n=i+1;
		let radius1=20*(6/n*(pow(-1,i)));
		x+=radius1*cos(n*time)
		y+=radius1*sin(n*time)

		strokeWeight(2)
		stroke(255,100)
		ellipse(prev_x,prev_y,2*radius1)
		// stroke(255)
		stroke('blue')
		strokeWeight(3)
		line(prev_x,prev_y,x,y)}

		yPoints.unshift(y)
		fill(0,100,250)
		ellipse(x,y,8)
		translate(200,0)
		line(x-200,y,0,yPoints[0])
		beginShape()
			noFill()
			for (let i=1;i<yPoints.length;i++){
			vertex(i,yPoints[i]);
			}
		endShape()
		yPoints.length>800 ? yPoints.pop() : null
		time+=rate
}
function epicycles(x, y, rotation, fourier) {
  for (let i = 0; i < fourier.length; i++) {
    let prevx = x;
    let prevy = y;
    let freq = fourier[i].freq;
    let radius = fourier[i].amp;
    let phase = fourier[i].phase;
    x += radius * cos(freq * time + phase + rotation);
    y += radius * sin(freq * time + phase + rotation);

    stroke(255, 100);
    noFill();
    ellipse(prevx, prevy, radius * 2);
    stroke(255);
    line(prevx, prevy, x, y);
  }
  return createVector(x, y);
}


// const dec = ()=>{N= N-1}
// const inc = () =>{N= N+1}
