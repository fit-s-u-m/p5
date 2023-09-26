let centerX, centerY, radius;
let angle = 0;
let meriKal
let meri

function setup() {
  createCanvas(windowWidth-30,windowHeight-10);
  centerX = width / 2;
  centerY = height / 2;
  radius = 340;
	let inp = createInput("መሪ").parent("#inp").id("#meri")
	inp.position(80, 80)
  inp.size(100)
	inp.input(myInputEvent)
}

function draw() {
	clear()
	translate(centerX,centerY)
	meri = ["ነ","ሠ","ጉ","ን","ት","ሥ","ገ"]
	textSize(50)
	fill(0)
	textSize(18)

	angleMode(DEGREES)
	noFill()

	ellipse(0,0,radius) // main cicle
	ellipse(0,0,radius*1.05) // others
	ellipse(0,0,radius*1.07)

	stroke("blue")
	ellipse(0,0,radius/2)

	let meris = meri.length
	let num = 90
	meri.slice().reverse().forEach((i,ind)=>{if(i==meriKal)num=ind})
	let error=0.01
	for(let i=90/14; i<=90+(90/7);i+=90/7){
		stroke("red")
		strokeWeight(2)
		push()
			rotate(-i)
			if(i<=( 90/14+ num*(90/7))+error && i>=( 90/14+ num*(90/7))-error )
				fill(255,0,0,200)
			if (i<90)
		  	arc(0,0,radius/2,radius/2,-90/7,0,PIE)
		pop()
		push()
		  noStroke()
			rotate(-i)
			translate(radius*(1/8)+10,(radius/3)*sin(90/14))
			fill("black")
			textSize(20)
			strokeWeight(1)
			if(i!=90/14)
				text(meri[meris],i/6,0)
		pop()
		meris--
	}
	fill(0)
	noStroke()
	ellipse(0,0,radius/8) // black in the middle
	noFill()
	strokeWeight(1)
	stroke("blue")
	textSize(18)
	//days
	const weeks = ["ሰኞ","ማክሰኞ","ረቡዕ","ሐሙስ","አርብ","ቅዳሜ","እሁድ"]
	let week=3
	for(let i=45; i<=405;i+=90/7){
		push()
			rotate(i)
			line(radius/4,0,radius/2,0)
		pop()
		push()
			rotate(i)
			fill("blue")
			translate(radius/2.2,(radius/2.2)*sin(90/14.5))
			rotate(180)
			text(weeks[week],0,0)
		pop()
		if(week==0)week=7
		week--
	}

	stroke(0)
	const rad = 2.2*radius
	stroke("red")

	push()
		rotate(angle)
		arc(0,0,rad,rad,180+90/14,-90+90/14)
	const month = ["ታህሳስ-ሐምሌ","መጋቢት","ህዳር-ሰኔ","የካቲት-ጳግሜ","ጥቅምት-ግንቦት","ጥር-ነሐሴ","መስከረም-ሚያዝያ"]
	let ind=0
		for(let i=90-90/14; i<=180;i+=90/7){
			push()
				rotate(-i)
				line(rad/2,0,rad/4,0)
			pop()
			push()
				rotate(-i-90/7)
				translate(rad*(1/3.6),(rad/3.6)*sin(90/14))
				textSize(20)
				fill(0)
				noStroke()
				text(month[ind],0,0)
			pop()
			ind++
		}
	stroke("red")

	let days=1
		for(let i=45; i<=45+8*(90/7);i+=90/7){
			push()
				rotate(i)
				line(rad/2,0,rad/4,0)
			pop()
		}

		for(let i=rad/2;i<=rad;i+=rad/10){
			arc(0,0,i,i,45,45+90)
			push()
				for(let j=45+6*(90/7); j>=45-90/7;j-=90/7){
						push()
							rotate(j)
							translate(i/2+20,(rad/3.5)*sin(90/14))
							rotate(-90)
							if(days<=30)
								text(days,0,0)
						days++
						pop()
				}
			pop()
		}
	pop()
	stroke(0)
	textSize(100)
	fill(0)
	if(meriKal)
		text(meriKal,width/4,0)
	else
		text("")

}
function keyPressed(){
	if(keyCode === LEFT_ARROW){
		angle-=90/7
	}
	if(keyCode === RIGHT_ARROW){
		angle+=90/7
	}
}
function myInputEvent(){
	const meris =["ን","ጉ","ነ","ገ","ሥ","ት", "ጉ","ሠ","ነ","ገ", "ት","ን","ጉ","ሠ", "ገ","ሥ","ት","ን", "ሠ",
		"ነ","ገ","ሥ","ን","ጉ","ሠ","ነ","ሥ","ት"]

	if(parseInt(this.value())){
		let num = this.value()
		let newNum=1922
		let val
		if(num>=newNum){
			val = (num-newNum)%28
		}
		else {
			val =28- (newNum-num)%28
		}
	  meriKal = (meris[val])

	}
}
function windowResized(){
	resizeCanvas(windowWidth-30, windowHeight-10);
}

