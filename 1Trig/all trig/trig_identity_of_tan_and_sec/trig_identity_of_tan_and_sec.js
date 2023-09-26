let r ;
let angle =0;
let time =0;
let cr;
let slider;
let makeSlider;
let makeRotate;
let input;
let isSlider=false;
let isRotate=true;
let isInput=false;
let slider2

function setup() {
	let can=createCanvas(windowWidth*0.7,windowHeight*0.93);
	can.parent("box")


	makeSlider=createButton("change  to Slider" )
	makeSlider.mousePressed(showBySlider)
	makeSlider.addClass("mybutton")
	makeSlider.parent("mybutton")

	let lable=createElement("label","angle =")
	lable.addClass("label")
	lable.parent("mybutton")

	slider=createSlider(0,4*PI,0,0.01);
	slider.size(150,10);
	slider.addClass("slider")
	slider.parent("mybutton")

	makeRotate=createButton("Rotate Mode is off ");
	makeRotate.mousePressed(Rotate);
	makeRotate.addClass("mybutton");
	makeRotate.parent("mybutton")

	input=createInput("0");
	input.addClass("input")
	input.parent("mybutton")

	r= width/4 
	cr=width/40;
}

function draw() {
		clear()
		translate(width/2,height/2);
		let x= r*cos(angle);
		let y =r*sin(angle);
		noFill();
		stroke(0);
		strokeWeight(2);
		
		ellipse(0,0,r*2);
		fill(255);
		ellipse(x,y,5);
		
		//cross
		line(-r,0,r,0);
		line(0,-r,0,r);
	
		stroke(0)
		line(0,0,x,y);
		fill(0);
		push();
			rotate(angle);   
			fill(255,75);
			// noStroke()
			stroke(255)
			rect(cos(angle-PI/2),sin(angle-PI/2),r,r);
			fill(255,100)
			text("1",cos(angle-PI/2)+r/2,sin(angle-PI/2)+r/2)
		pop();
			 
		textSize(30);
		textAlign(CENTER)
		//tan
		stroke('white');
		push();
		translate(x,y);
		rotate(angle);
		text("tan^2(X)",-r*y/(2*x),-r*y/(2*x));
		pop();
		push();
		fill(0, 79, 255,75);
		rotate(angle);
		strokeWeight(2)
		square(r,0,-r*y/x)
		pop();
		noFill();
		stroke(255)
	 
		arc(0,0,100,100,angle,0)

		//sec
		fill(255, 32, 110,75);
		text('sec^2(X)',((r*r)/x)/2,((r*r)/x)/2);
		strokeWeight(2)
		square(0,0,r*r/x);
		if(isSlider && !isRotate){ angle=-1*slider.value(); }
			
		else if(isRotate && !isSlider){ angle-=0.01; input.html("love",true)}
	
		else {angle = radians(float(-1 * input.value()))}
	
		let anglev=round(degrees(-1*angle))
		while(anglev<0 || anglev>360){
			if(anglev<0)anglev+=360;
			if(anglev>360)anglev-=360;
		}
		textSize(25)
		fill(0)
		text(anglev,50*cos(radians(-1*anglev/2)),50*sin(radians(-1*anglev/2)))
	}
function showBySlider(){
	 isSlider=!isSlider
	if (isSlider) {
		 makeSlider.html("you changed to slider");
		 makeSlider.style("background-color","white");
		 makeSlider.style("color","black");
 }
	 else{
		 makeSlider.html("change to Slider ")
		 makeSlider.style("background-color","var(--transparent)");
		 makeSlider.style("color","var(--carrot)");
	 }
	 
}
function Rotate(){
	 isRotate=!isRotate
		if (isRotate){
	 makeRotate.html("Rotate Mode is on")
	 makeRotate.style("background-color","white");
	 makeRotate.style("color","black");
	}
	 else{
	 makeRotate.html(" Rotate mode is off")
	 makeRotate.style("background-color","var(--transparent)");
	 makeRotate.style("color","var(--carrot)");
	
	}
	
}
