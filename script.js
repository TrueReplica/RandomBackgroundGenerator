'use strict';
const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');
const btn = document.getElementById('gradient');

function setGradient() {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

	css.textContent = body.style.background + ';';
}

function getRandomColor() {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function randomColors() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();

	setGradient();
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
btn.addEventListener('click', randomColors);
