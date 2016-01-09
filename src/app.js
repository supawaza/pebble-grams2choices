/**
 * A very simple app to convert Carbohydrates Grams to Choices for easy recording for your dietitians to see
 */

var UI = require('ui');
var Vector2 = require('vector2');
var window = new UI.Window();

//Add UI elements to the Pebble window
var addElements = function(win, obj) {
	for (var key in obj) {
  		if (obj.hasOwnProperty(key)) {
			win.add(obj[key]);
		}
	}
	win.show();
};

var configs = {
	initGram: 5,
	initChoice: 0,
	numbersTextFont: 'gothic-24-bold',
	numbersTextColor: '#333333',
	gramShortIncrement: 1,
	gramLongIncrement: 5,
	staticTextFont: 'gothic-18-bold',
	staticTextColor: 'green',
	textBg: '#a5eab7',
	images: ['images/white_arrows.png']
};

var app = {};

//App Title Text
app.titleText = new UI.Text({
	position: new Vector2(0, 5),
	size: new Vector2(150, 40),
	font: 'gothic-24-bold',
	text: 'Grams2Choices',
	textAlign: 'center',
	color: 'white'
});

//Static Grams Text
app.gramText = new UI.Text({
	position: new Vector2(10, 45),
	size: new Vector2(150, 30),
	font: configs.staticTextFont,
	text: 'Grams',
	textAlign: 'left',
	color: 'green'
});

//Static Choice Text
app.choiceText = new UI.Text({
	position: new Vector2(-10, 45),
	size: new Vector2(150, 30),
	font: configs.staticTextFont,
	text: 'Choices',
	textAlign: 'right',
	color: configs.staticTextColor
});

//Static Arrows Image
app.arrows = new UI.Image({
  position: new Vector2(52, 42),
  size: new Vector2(36, 36),
  image: configs.images[0]
});

//Green background behind the numbers
app.rect = new UI.Rect({
  position: new Vector2(0, 75),
  size: new Vector2(150, 35),
  backgroundColor: configs.textBg
});

//Grams dynamic text element
app.gramsElement = new UI.Text({
	position: new Vector2(23, 75),
	size: new Vector2(144, 30),
	font: configs.numbersTextFont,
	text: configs.initGram,
	textAlign: 'left',
	color: configs.numbersTextColor
});

//Choices dynamic text element
app.choicesElement = new UI.Text({
	position: new Vector2(-23, 75),
	size: new Vector2(144, 30),
	font: configs.numbersTextFont,
	text: configs.initChoice,
	textAlign: 'right',
	color: configs.numbersTextColor
});

//Add elements onto the Pebble window
addElements(window, app);

var gram = configs.initGram,
	choice = configs.initChoice;

app.updateChoices = function(gram) {
	var updatedChoice = 0;

	if( gram >= 0 && gram <= 5 ){
		updatedChoice = 0;

	} else if( gram > 5 && gram <= 10) {
		updatedChoice = 0.5;

	} else if(gram > 10 && gram <= 20) {
		updatedChoice = 1;

	} else if(gram > 20 && gram <= 25) {
		updatedChoice = 1.5;

	} else if(gram > 25 && gram <= 35) {
		updatedChoice = 2;

	} else if(gram > 35 && gram <= 40) {
		updatedChoice = 2.5;

	} else if(gram > 40 && gram <= 50) {
		updatedChoice = 3;

	} else if(gram > 50 && gram <= 55) {
		updatedChoice = 3.5;

	} else if(gram > 55 && gram <= 65) {
		updatedChoice = 4;

	} else if(gram > 65 && gram <= 70) {
		updatedChoice = 4.5;

	} else if(gram > 70 && gram <= 80) {
		updatedChoice = 5;

	} else if(gram > 80 && gram <= 85) {
		updatedChoice = 5.5;

	} else if(gram > 85 && gram <= 95) {
		updatedChoice = 6;

	} else if(gram > 95 && gram <= 100) {
		updatedChoice = 6.5;

	} else {
		updatedChoice = 7;
	}

	this.choicesElement.text(updatedChoice);
};

/*  EVENTS
	------------------------------------ */

//Long click the SELECT button to reset
window.on('longClick', 'select', function() {
	gram = configs.initGram;
	app.gramsElement.text(gram);
	app.updateChoices(gram);
});

//Single click the UP button will increment Grams of 1
window.on('click', 'up', function(e) {
	app.gramsElement.text(gram+=configs.gramShortIncrement);
	app.updateChoices(gram);

});

//Long clicking the UP button will increment the Grams of 5 (default)
window.on('longClick', 'up', function() {
	app.gramsElement.text(gram+=configs.gramLongIncrement);
	app.updateChoices(gram);
});

//Single click the DOWN button will decrement Grams of 1
window.on('click', 'down', function() {
	if(gram > 0) {
		app.gramsElement.text(gram-=configs.gramShortIncrement);
		app.updateChoices(gram);
	}
});

//Long clicking the DOWN button will decrement the Grams of 5 (default)
window.on('longClick', 'down', function() {
	if(gram > 0 && gram > 5) {
		app.gramsElement.text(gram-=configs.gramLongIncrement);
		app.updateChoices(gram);
	}
});