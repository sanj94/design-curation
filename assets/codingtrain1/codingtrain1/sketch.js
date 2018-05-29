var x=0;
var y=0;
var on=false;
var s='hi you suck';
function preload() {
	myFont=loadFont('libraries/assets/DIN Black.ttf');
}

function setup() {
	createCanvas(windowWidth, windowHeight);

}

function draw() {
	background(245,mouseY,9);
	fill(mouseX,76,96);
	noStroke();
	rect(x,y,mouseX,mouseY);
	fill(255);
	if(on){
		fill(0);
	}
	textFont(myFont,180);
	textLeading(mouseY);
	text(s, mouseX, 80, [mouseX], [mouseY]);


}

function mousePressed() {
	on=!on;

}
