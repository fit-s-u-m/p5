let zMouseController = true
let isLines = false
let isBalls = false
let showTrace = false
let finiteZ = []
let finiteC = []
let allC = []
let allZ = []
function setup() {
  createCanvas(windowWidth, windowHeight).parent("can-container")

  createCheckbox("lines")
    .parent("button_container")
    .id("check")
    .changed(() => {
      isLines = !isLines
    })
  createCheckbox("trace")
    .parent("button_container")
    .id("check")
    .changed(() => {
      showTrace = !showTrace
      allC.length = 0
      allZ.length = 0
    })
  createCheckbox("balls")
    .parent("button_container")
    .id("check")
    .changed(() => {
      isBalls = !isBalls
    })

  makeButton("changing z", "change", () => {
    zMouseController = !zMouseController
  })
  createElement("lable", "zoom").addClass("other").parent("button_container")
  makeslider(80, 500, 10,100, "zoom").size(200, 10)
}

function draw() {
  clear()
  translate(width / 2, height / 2)
  let space = select("#zoom").value()
  colorMode(HSB)
  noStroke()
  if (showTrace) {
    if (zMouseController) {
      allZ.forEach((i) => {
        fill(i.v, 255, 255, 0.5)
        ellipse(i.x, i.y, space / 10)
      })
    } else {
      allC.forEach((i) => {
        fill(i.v, 255, 255, 0.5)
        ellipse(i.x, i.y, space / 10)
      })
    }
  }
  graph(space)
  noFill()
  stroke("red")
  ellipse(0, 0, 4 * space)
  stroke("green")
  ellipse(0, 0, 2 * space)
  change(space)
}

// HELPER FUNCTIONS
const discribeText = (s) => {
  select("#discription").html(s)
}

const styleWhenButtonOn = (id) => {
  select(id).style("color", "white").style("background-color", "black")
}

const styleWhenButtonOff = (id) => {
  select(id)
    .style("color", "var(--carrot)")
    .style("background-color", "var(--transparent)")
}

const makeButton = (name, id, actionWhenPressed) => {
  return createButton(name)
    .addClass("mybutton")
    .id(id)
    .parent("button_container")
    .mousePressed(actionWhenPressed)
}

const makeinputBox = (initalVal, id) => {
  return createInput(initalVal)
    .addClass("other")
    .id(id)
    .parent("button_container")
}
const makeslider = (initalVal, finalval, step,def, id) => {
  return createSlider(initalVal, finalval, def,step)
    .addClass("other")
    .id(id)
    .parent("button_container")
}

function windowResized() {
  // is called when the window is resized
  resizeCanvas(windowWidth, windowHeight)
}

const loopinteraion = (zx, zy, cx, cy, space) => {
  let maxIte = 255
  fill(0)
  noStroke()
  textSize(40)
  text("Z", zx, zy)
  text("C", cx, cy)

  stroke(255, 50)
  line(zx, zy, zx, 0)
  line(zx, zy, 0, zy)
  line(cx, cy, cx, 0)
  line(cx, cy, 0, cy)

  let xval = zx / space
  let yval = zy / space
  let cxval = cx / space
  let cyval = cy / space
  let value = 0

  for (let i = 0; i < maxIte; i++) {
    zSq = square({ x: xval, y: yval })
    zNxt = { x: zSq.x + cxval, y: zSq.y + cyval }

    if (zNxt.x ** 2 + zNxt.y ** 2 <= 4 && i == maxIte - 1)
      zMouseController
        ? finiteZ.push({ x: zx, y: zy, v: value })
        : finiteC.push({ x: cx, y: cy, v: value })

    if (isBalls) {
      fill("orange")
      noStroke()
      ellipse(xval * space, yval * space, space / 10)
    }
    stroke("blue")
    if (isLines)
      line(xval * space, yval * space, zNxt.x * space, zNxt.y * space)

    xval = zNxt.x
    yval = zNxt.y
    if (zNxt.x ** 2 + zNxt.y ** 2 <= 4) value++
  }
  zMouseController
    ? allZ.push({ x: zx, y: zy, v: value })
    : allC.push({ x: cx, y: cy, v: value })
}
const loopbound = (zx, zy, cx, cy, space) => {
  let maxIte = 200
  let xval = zx / space
  let yval = zy / space
  let cxval = cx / space
  let cyval = cy / space

  for (let i = 0; i < maxIte; i++) {
    zNxt = sqrts({ x: xval - cxval, y: yval - cyval })
    fill("red")
    noStroke()

    if (i > 20) ellipse(zNxt.x * space, zNxt.y * space, 10)
    ellipse(-zNxt.x * space, zNxt.y * space, 10)
    ellipse(zNxt.x * space, -zNxt.y * space, 10)
    ellipse(-zNxt.x * space, -zNxt.y * space, 10)

    xval = zNxt.x
    yval = zNxt.y
  }
}

const square = (c) => {
  return {
    x: c.x ** 2 - c.y ** 2,
    y: 2 * c.x * c.y,
  }
}
const sqrts = (c) => {
  return {
    x: sqrt((c.x + sqrt(c.x ** 2 + c.y ** 2)) / 2),
    y: sqrt((-c.x + sqrt(c.x ** 2 + c.y ** 2)) / 2),
  }
}
const graph = (space) => {
  let divider = 2

  stroke("blue")
  line(-width / 2, 0, width / 2, 0)
  stroke("red")
  line(0, -height / 2, 0, width / 2)

  fill("black")
  noStroke()
  textAlign(CENTER)
  stroke(0)
  textSize(17)
  let div = space / divider
  for (let i = 0; i <= width / 2; i += div) {
    text(i / space, i, 0)
    line(-width / 2, i, width / 2, i)
  }
  for (let i = -div; i >= -width / 2; i -= div) {
    text(i / space, i, 0)
    line(-width / 2, i, width / 2, i)
  }
  for (
    let i = div, j = 0;
    i <= height / 2, j <= width / 2;
    i += div, j += div
  ) {
    text(-i / space, 0, i)
    line(j, -height / 2, j, height / 2)
  }
  for (
    let i = -div, j = -div;
    i >= -height / 2, j >= -width / 2;
    i -= div, j -= div
  ) {
    text(-i / space, 0, i)
    line(j, -height / 2, j, height / 2)
  }
}

const change = (space) => {
  let midMousex = mouseX - width / 2
  let midMousey = mouseY - height / 2
  let cinp = select("#c").value()
  let zinp = select("#z").value()

  if (zMouseController) {
    let cx
    let cy
    const match = cinp.match(/([-+]?\d+(?:\.\d+)?)\s*([-+])\s*(\d+(?:\.\d+)?i)/)
    if (match) {
      cx = parseFloat(match[1])
      const sign = match[2] === "+" ? 1 : -1
      cy = sign * parseFloat(match[3])
      discribeText("")
    } else discribeText("invalid input")
    loopinteraion(midMousex, midMousey, cx * space, -cy * space, space)
    // loopbound(midMousex,midMousey,cx*space,-cy*space,space)
    styleWhenButtonOn("#change")
    select("#change").html("changing Z")
  } else {
    let zx
    let zy
    const match = zinp.match(/([-+]?\d+(?:\.\d+)?)\s*([-+])\s*(\d+(?:\.\d+)?i)/)
    if (match) {
      zx = parseFloat(match[1])
      const sign = match[2] === "+" ? 1 : -1
      zy = sign * parseFloat(match[3])
      discribeText("")
    } else discribeText("invalid input")
    loopinteraion(zx * space, -zy * space, midMousex, midMousey, space)
    // loopbound(zx*space,-zy*space,midMousex,midMousey,space)
    styleWhenButtonOff("#change")
    select("#change").html("changing C")
  }
}
