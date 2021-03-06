// data structure holding members of the cat family
let catFamily = [
				{name: 'tiger', url: "img/tiger.png"}, {name: 'ocelot', url: "img/ocelot.jpg"},
				{name: 'leopard', url: "img/leopard.jpg"}, {name: 'cheetah', url: "img/cheetah.jpg"},
				{name: 'jaguar', url: "img/jaguar.jpg"}, {name: 'lion', url: "img/lion.jpg"},
				{name: 'lynx', url: "img/lynx.jpg"}, {name: 'cougar', url: "img/cougar.jpg"},
				{name: 'panther', url: "img/panther.jpg"}, {name: 'cat', url: "img/cat.jpg"},
				{name: 'liger', url: "img/liger.jpg"}, {name: 'tigon', url: "img/tigon.jpg"},
				{name: 'puma', url: "img/puma.jpg"}, {name: 'caracal', url: "img/caracal.png"},
				{name: 'serval', url: "img/serval1.jpg"}
				];


let input = document.querySelector('input');
let gallery = document.querySelector('.gallery');//shows a picture if input is correct
let img = document.createElement("img");
let btn = document.querySelector("button");
let alert = document.querySelector(".alert");//alerts user of outcome of input

// Sets focus to textbox on page load
window.addEventListener("load", input.focus());

input.addEventListener('keydown', function (e) {
	// listens for event where user hits the Enter key
	if (e.keyCode === 13) {
		findCat(e.target.value);
	}
});
btn.addEventListener('click', function () {

	findCat(input.value);

})

// Checks if user's input belongs to the cat family
function findCat (arg) {
	if (arg === "" || arg === null) {
		alert.textContent = 'Please enter a cat specie';
		alert.style.color = '#ff3d00';
		input.focus();
		return;
	}
	gallery.innerHTML = "";
	let present = false;

	for (const cat of catFamily) {
		if(arg.toLowerCase().trim() === cat.name) {
			img.src = cat.url;
			gallery.style.opacity = 1;
			alert.textContent = `Excellent! ${arg} is a member of the Cat Family`;
			alert.style.color = '#1594a2';
			present = true;
			break;
		}
	}
	if (present === false) {
		alert.textContent = `Nah! ${arg} is not a member of the Cat Family!
		Please try again!`;
		alert.style.color = '#ff3d00';
		gallery.style.boxShadow = 'none';
		input.value = "";
		input.focus();
		return;
	}

	gallery.appendChild(img);
	input.value = "";
}

//Preload Images on page load
var images = new Array()
function preload() {
	for (i = 0; i < catFamily.length; i++) {
		images[i] = new Image()
		images[i].src = catFamily[i].url;
	}
}
preload();