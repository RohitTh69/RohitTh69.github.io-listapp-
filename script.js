var input = document.getElementById('userInput');
var buttonOne = document.getElementById('ADD');
var ul = document.querySelector('ul');

// Code to add on list
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

buttonOne.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);