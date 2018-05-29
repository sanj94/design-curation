let projects = [];
let img = [];
let netslider;
var intentionSliders = [];
var interpretationSliders = [];
let sliderName = [];
let sliderName2 = [];
let title = [];
let para = [];
var projdiv=[], x=[], y;
var def;
var value, valueIndex;
var menu;
var x = [], y = [];
var show=1;
var v, bigv=2500;
var sensativity = 0.005;
var myX=0;
var morex=[];
var thumb;
var GO;
var canvas;
var pfactor;
var canv; var canvx; var canvy=0;
var back, backx=0, backy=0;
var slider_min = -1;
var slider_max = 1;
var slider_val = -1;
var collect = [], collectx = [];
var cam;
var zoomout;
var zm=1;
var SCROLL_SPEED;
function windowResized()
{

	resizeCanvas(displayWidth,displayHeight);
	//resizeCanvas(windowWidth,windowHeight);
}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
	// cam = new Camera();


	for(i=0; i<17; i++){
		projdiv[i] = createDiv('div'+i);

		projdiv[i].style('z-index','900');
		x[i]=map(i,0,16,0,5000);
		y[i] = random(200,300);
		// projdiv[i].position(x[i]-2000+windowWidth/2-150,y);
		projdiv[i].id('projdiv'+ i);
		projdiv[i].class('projdiv');
		img[i] = createImg('assets/project['+i+'].jpg');
		img[i].parent('projdiv'+ i);
		img[i].hide();
		projdiv[i].hide();
		projects[i] = new Project(img[i]);

	}

	canv = createDiv();
	canv.id('canv');
	back = createDiv();
	back.id('back');

  netslider = createSlider(-8,8,0);
  netslider.class('slider1');
  netslider.size(5000);
  netslider.position(0,windowHeight-100);
	// netslider.style('z-index','-2');
	netslider.parent('canv');
  createP('');


  createP('');

  bgColor = color(200);

	canvas.position(0,0);

	canvas.style('z-index','-1');

  for(var i = 0 ; i < 4; i++)
	{
    intentionSliders.push(new Slider(slider_min,slider_max,slider_val,i));
  }

  intentionSliders[0].name = "Sublimity";
  intentionSliders[1].name = "Repetition";
  intentionSliders[2].name = "Complexity";
  intentionSliders[3].name = "Allusiveness";
  intentionSliders[0].definition = "The measure of spirituality of the 'process'.";
  intentionSliders[1].definition = "How repetitive the designer is in themes, styles, voice, etc.";
  intentionSliders[2].definition = "The measure of how complicated the interaction is.";
  intentionSliders[3].definition = "The measure of usage of rhetorical tropes and poetic tools in the experience.";

  for(var i = 0 ; i < 4; i++)
	{
    interpretationSliders.push(new Slider(slider_min,slider_max,slider_val,i));
  }

    interpretationSliders[0].name = "Functionality";
    interpretationSliders[1].name = "Chance";
    interpretationSliders[2].name = "Deconstruction";
    interpretationSliders[3].name = "Participation";
    interpretationSliders[0].definition = "The measure of how usable a designed experience is.";
    interpretationSliders[1].definition = "The measure of spontaneity on the designer's part.";
    interpretationSliders[2].definition = "The measure of breaking conventional and authoritarian models of anything & everything.";
    interpretationSliders[3].definition = "The measure of how inclusive a designed experience is.";

		projects[0].title = "Massimo Vignelli's Subway Map"
		projects[0].para = "In 1965, modernist graphic designer Massimo Vignelli and his business partner Bob Noorda landed stateside, and established Unimark International, a new design consultancy, in New York. They had built a substantial body of design work across Europe, and now aimed to bring their modernist design values to meet the growing design needs of American corporate clients.Around this time, the two were introduced to Mildred Constantine, an influential design curator at the Museum of Modern Art, and well connected in the city’s social scene. She was familiar with their earlier design work, and recommended them to her contacts at the New York City Transit Authority—the operators of the city’s subway system."
		projects[1].title = "Marian Bantjes's Intricate Typography"
		projects[1].para = "Marian’s art and design crosses boundaries of time, style and technology. She is known for her detailed and lovingly precise vector art, her obsessive hand work, her patterning and ornament. Marian’s work has an underlying structure and formality that frames its organic, fluid nature. It is these combinations and juxtapositions that draw the interest of such a wide variety of designers and typographers, from experienced formalists to young students."
		projects[2].title = "Moniker Interactive Music Video : 'Do Not Touch'"
		projects[2].para = "Moniker, the Amsterdam-based studio of Luna Maurer and Roel Wouters, is surely one of the key protagonists in the field of participatory design. The studio, which was originally co-founded with Jonathan Puckey in 2012, aims to find playful ways of integrating the user into the design process, focusing on interactive experimentation as design method and thus putting the process and the context thereof, rather than the medium-specific end result centre stage. "

	for(var i = 0 ; i < 4; i++)
	{
    createP('');
    intentionSliders[i].showSlider();
    intentionSliders[i].display_name();
  }

for(var i = 0 ; i < 4; i++)
{ createP('');
  interpretationSliders[i].showSlider();
  interpretationSliders[i].display_name();
}

  GO = createButton("Go");
  GO.class('button');
  GO.mousePressed(scoreCalculate);

	GO.parent('menu');

  def = createP('Hover over the parameter to see its definition');
  def.parent('menu');
	def.id('definition');

menu = createButton("Hide Menu");
zoomout = createButton("Zoom Out");
zoomout.class('button1');
zoomout.style('left',300 + 'px');
menu.class('button1');
menu.mousePressed(hideMenu);
zoomout.mousePressed(zoomOut);
canvx = -2500 + windowWidth/2;
backx = -2500 + windowWidth/2;
}



function draw() {

rect(700,100,100,100);
  value = intentionSliders[0].val + intentionSliders[1].val + intentionSliders[2].val + intentionSliders[3].val - interpretationSliders[0].val -interpretationSliders[1].val -interpretationSliders[2].val -interpretationSliders[3].val;
// print(value);

	netslider.value(value);
	v = map(value,-8,8,0,5000);
	valueIndex = value + 8;
	// for(var i; i<17; i++){
	// 	projdiv[i].position(x[i],y);
	// }

// canvx = -2500 + windowWidth/2 + SCROLL_SPEED;
// backx = -2500 + windowWidth/2 + SCROLL_SPEED;

	if(show<0){
	menu.html("Show Menu");
		$( "#menu" ).hide();
	} else{
		menu.html("Hide Menu");
		$( "#menu" ).show();
	}
	if(zm<0){
		zoomout.html("Zoom In");
		canv.style('zoom','0.5');
		back.style('zoom','0.5');

		for(var i=0;i<17;i++){
		projdiv[i].style('zoom','0.5');
	}
}else{

		zoomout.html("Zoom Out");
		canv.style('zoom','1');
		back.style('zoom','1');
		for(var i=0;i<17;i++){
		projdiv[i].style('zoom','1');
	}
	}


	for(i=0; i<17; i++){

		projdiv[i].position(x[i]-2500+windowWidth/2-150,y[i]);
				// projdiv[i].position(x[i]-1500+windowWidth-150+morex[i],y);
	}



// if (canvx > 0 && leftmost.x >= 0) canvx = 0;
// if (canvx < 0 && rightmost.x <= width) canvx = 0;
// if (canvy > 0 && topmost.y >= 0) canvy = 0;
// if (canvy < 0 && bottommost.y <= height) canvy = 0;

canv.position(canvx,canvy);
back.position(backx,backy);



}


class Project {
	constructor(img) {
		// this.title = title;
		// this.para = para;
		this.img = img;
    // this.i = i;
		// this.x = x;
		// this.projdiv = projdiv;
	}

	projectshow() {
		// scale(zoom);
		// let H1 = createElement('h1',this.title);
		// this.projdiv=createDiv();
		// this.projdiv.parent('canv');
		// this.projdiv.id('projdiv');
    // H1.position(this.x-200,50);
		// H1.class('projecttext');
		// H1.parent('projdiv');
    // let P = createP(this.para);
    // P.position(this.x-200,200);
		// P.class('projecttext');
		// P.parent('projdiv');
		this.img.show();
		this.img.attribute('width','300px');
				// this.img.style('left','0px');
		// this.img.position(this.x, windowHeight - this.img.height - 90);
		// this.img.parent('projdiv' + i);

		// selectAll(projecttext).parent(projecttextdiv);
		}
}

  function def(str) {
  def.html(str);
	def.parent('menu');
  }

  function unDefine() {
    def.html('Hover over the parameter to see its definition');
  }


function Slider(min,max,val,name="",index, definition="")
  {
  	this.name = name;
  	this.min = min;
  	this.max = max;
  	this.val = val;
    this.index = index;
    this.definition = definition;
  	this.valueCallback = function(elt)
  	{
  		this.val = elt.value();
  		// console.log(this.val);
  		//console.log("slider call back")

  	}
  	this.display_name = function() {
      this.P = createP(this.name);
      this.P.class('parameter');
			this.P.parent('menu');
      this.P.mouseOver(def.bind(this,this.definition));
      this.P.mouseOut(unDefine);
    }

  	this.showSlider = function() {
      this.slider = createSlider(this.min,this.max,this.val);
      this.slider.input(this.valueCallback.bind(this,this.slider))
      this.slider.class('slider');
			this.slider.parent('menu');
      this.slider.mouseOver(def.bind(this,this.definition));
      this.slider.mouseOut(unDefine);
    }

}


function scoreCalculate() {


	// projdiv[valueIndex].position(x[valueIndex],y);

  clear();
	$( "#projdiv" ).empty();

		// projects[index].x = v;
		// -projects[index].img.width;
    projects[valueIndex].projectshow();
		projdiv[valueIndex].show();

	collect.push(projects[valueIndex]);
	collectx.push(x[valueIndex]);

for(i=0;i<collect.length;i++) {
	// console.log(collect);
	    collect[i].projectshow();
}
// bigv = v;
}

function hideMenu() {
	show=-1*show;

}

function zoomOut() {
	zm = -1*zm;

}


// function mouseMoved() {
// 	canvx = mouseX < windowWidth/2 ?  +SCROLL_SPEED : -SCROLL_SPEED;
// 	backx = mouseX < windowWidth/2 ? +SCROLL_SPEED : -SCROLL_SPEED;
// 	SCROLL_SPEED = Math.abs(mouseX - windowWidth/2);
// 	// SCROLL_SPEED = map(mouseX, 0, windowWidth, -5, 5);
// 	canvx += SCROLL_SPEED;
// 	backx += SCROLL_SPEED;
// 	if(zm<0){
// 		pfactor = 0.1;
// 	} else {
// 		pfactor = 0.06;
// 	}
// 	for(i=0; i<17; i++){
// 		morex[i] = mouseX < windowWidth/2 ? +SCROLL_SPEED : -SCROLL_SPEED;
// morex[i] += SCROLL_SPEED*i*pfactor;
//
// }
//
// if(canvx>0){
// 	canvx=0;
// }
// if(backx>0){
//  backx=0;
// }
//
// }
