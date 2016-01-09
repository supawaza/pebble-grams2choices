/**
 * A very simple app to convert Carbohydrates Grams to Choices for easy recording for your dietitians to see
 */

var UI = require('ui');
var Vector2 = require('vector2');
var window = new UI.Window();

var configs = {
	initGram: 5,
	initChoice: 0,
	gramShortIncrement: 1,
	gramLongIncrement: 5,
	images: ['images/white_arrows.png']
};

var addElements = function(win, obj) {
	for (var key in obj) {
  		if (obj.hasOwnProperty(key)) {
			win.add(obj[key]);
		}
	}
	win.show();
};

var app = {};

app.titleText = new UI.Text({
	position: new Vector2(0, 5),
	size: new Vector2(150, 40),
	font: 'gothic-24-bold',
	text: 'Grams2Choices',
	textAlign: 'center',
	color: 'white'
});

app.gramText = new UI.Text({
	position: new Vector2(10, 45),
	size: new Vector2(150, 30),
	font: 'gothic-18-bold',
	text: 'Grams',
	textAlign: 'left',
	color: 'green'
});

app.choiceText = new UI.Text({
	position: new Vector2(-10, 45),
	size: new Vector2(150, 30),
	font: 'gothic-18-bold',
	text: 'Choices',
	textAlign: 'right',
	color: 'green'
});

app.arrows = new UI.Image({
  position: new Vector2(52, 42),
  size: new Vector2(36, 36),
  image: configs.images[0]
});

app.rect = new UI.Rect({
  position: new Vector2(0, 75),
  size: new Vector2(150, 35),
  backgroundColor: '#a5eab7'
});

app.gramsElement = new UI.Text({
	position: new Vector2(23, 75),
	size: new Vector2(144, 30),
	font: 'gothic-24-bold',
	text: configs.initGram,
	textAlign: 'left',
	color: '#333333'
});

app.choicesElement = new UI.Text({
	position: new Vector2(-23, 75),
	size: new Vector2(144, 30),
	font: 'gothic-24-bold',
	text: configs.initChoice,
	textAlign: 'right',
	color: '#333333'
});

addElements(window, app);

var gram = configs.initGram;
var choice = configs.initChoice;

app.updateChoices = function(gram) {
	var textElement = this.choicesElement;

	if( gram >= 0 && gram <= 5 ){
		textElement.text(0);

	} else if( gram > 5 && gram <= 10) {
		textElement.text(0.5);

	} else if(gram > 10 && gram <= 20) {
		textElement.text(1);

	} else if(gram > 20 && gram <= 25) {
		textElement.text(1.5);

	} else if(gram > 25 && gram <= 35) {
		textElement.text(2);

	} else if(gram > 35 && gram <= 40) {
		textElement.text(2.5);

	} else if(gram > 40 && gram <= 50) {
		textElement.text(3);

	} else if(gram > 50 && gram <= 55) {
		textElement.text(3.5);

	} else if(gram > 55 && gram <= 65) {
		textElement.text(4);

	} else if(gram > 65 && gram <= 70) {
		textElement.text(4.5);

	} else if(gram > 70 && gram <= 80) {
		textElement.text(5);

	} else if(gram > 80 && gram <= 85) {
		textElement.text(5.5);

	} else if(gram > 85 && gram <= 95) {
		textElement.text(6);

	} else if(gram > 95 && gram <= 100) {
		textElement.text(6.5);

	} else {
		textElement.text(7);

	}
};

// EVENTS

window.on('longClick', 'select', function() {
	gram = 5;
	app.gramsElement.text(5);
	app.updateChoices(gram);
});

window.on('click', 'up', function(e) {
	app.gramsElement.text(gram+=configs.gramShortIncrement);
	app.updateChoices(gram);

});

window.on('longClick', 'up', function() {
	app.gramsElement.text(gram+=configs.gramLongIncrement);
	app.updateChoices(gram);
});

window.on('click', 'down', function() {
	if(gram > 0) {
		app.gramsElement.text(gram-=configs.gramShortIncrement);
		app.updateChoices(gram);
	}
});

window.on('longClick', 'down', function() {
	if(gram > 0 && gram > 5) {
		app.gramsElement.text(gram-=configs.gramLongIncrement);
		app.updateChoices(gram);
	}
});