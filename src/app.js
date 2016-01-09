/**
 * A very simple app to convert Carbohydrates Grams to Choices for easy recording for your dietitians to see
 */

var UI = require('ui');
var Vector2 = require('vector2');
var window = new UI.Window();

var titleText = new UI.Text({
	position: new Vector2(0, 5),
	size: new Vector2(150, 40),
	font: 'gothic-24-bold',
	text: 'Grams2Choices',
	textAlign: 'center',
	color: 'white'
});

var gramText = new UI.Text({
	position: new Vector2(10, 45),
	size: new Vector2(150, 30),
	font: 'gothic-18-bold',
	text: 'Grams',
	textAlign: 'left',
	color: 'green'
});

var choiceText = new UI.Text({
	position: new Vector2(-10, 45),
	size: new Vector2(150, 30),
	font: 'gothic-18-bold',
	text: 'Choices',
	textAlign: 'right',
	color: 'green'
});

var arrows = new UI.Image({
  position: new Vector2(52, 42),
  size: new Vector2(36, 36),
  image: 'images/white_arrows.png'
});

var rect = new UI.Rect({
  position: new Vector2(0, 75),
  size: new Vector2(150, 35),
  backgroundColor: '#a5eab7'
});


var gramsElement = new UI.Text({
	position: new Vector2(23, 75),
	size: new Vector2(144, 30),
	font: 'gothic-24-bold',
	text: 5,
	textAlign: 'left',
	color: '#333333'
});

var choicesElement = new UI.Text({
	position: new Vector2(-23, 75),
	size: new Vector2(144, 30),
	font: 'gothic-24-bold',
	text: 0,
	textAlign: 'right',
	color: '#333333'
});

window.add(titleText);
window.add(gramText);
window.add(choiceText);
window.add(rect);
window.add(arrows);
window.add(gramsElement);
window.add(choicesElement);
window.show();

var gram = parseInt(localStorage.getItem('gram')) || 5;
var choice = parseInt(localStorage.getItem('choice')) || 0;

function updateChoices(gram) {
	if( gram >= 0 && gram <= 5 ){
		choicesElement.text(0);

	} else if( gram > 5 && gram <= 10) {
		choicesElement.text(0.5);

	} else if(gram > 10 && gram <= 20) {
		choicesElement.text(1);

	} else if(gram > 20 && gram <= 25) {
		choicesElement.text(1.5);

	} else if(gram > 25 && gram <= 35) {
		choicesElement.text(2);

	} else if(gram > 35 && gram <= 40) {
		choicesElement.text(2.5);

	} else if(gram > 40 && gram <= 50) {
		choicesElement.text(3);

	} else if(gram > 50 && gram <= 55) {
		choicesElement.text(3.5);

	} else if(gram > 55 && gram <= 65) {
		choicesElement.text(4);

	} else if(gram > 65 && gram <= 70) {
		choicesElement.text(4.5);

	} else if(gram > 70 && gram <= 80) {
		choicesElement.text(5);

	} else if(gram > 80 && gram <= 85) {
		choicesElement.text(5.5);

	} else if(gram > 85 && gram <= 95) {
		choicesElement.text(6);

	} else if(gram > 95 && gram <= 100) {
		choicesElement.text(6.5);

	} else {
		choicesElement.text(7);

	}
}

window.on('longClick', 'select', function() {
	gram = 5;
	gramsElement.text(5);


	updateChoices(gram);
});

window.on('click', 'up', function(e) {
	gramsElement.text(gram+=1);

	updateChoices(gram);

});

window.on('longClick', 'up', function() {
	gramsElement.text(gram+=5);

	updateChoices(gram);
});

window.on('click', 'down', function() {
	if(gram > 0) {
		gramsElement.text(gram-=1);

		updateChoices(gram);
	}
});

window.on('longClick', 'down', function() {
	if(gram > 0 && gram > 5) {
		gramsElement.text(gram-=5);

		updateChoices(gram);
	}
});