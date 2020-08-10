const startButton = document.querySelector(".preloader-container");
const body = document.querySelector("body");
const menuToggler = document.querySelector(".menu-toggle");

document.addEventListener("DOMContentLoaded", () => {
	startButton.addEventListener("click", function () {
		body.classList.add("hide");
		window.setTimeout(function () {
			body.classList.toggle("erase");
		}, 1200);
		body.classList.add("slide-left-blue");
		window.setTimeout(function () {
			body.classList.add("slide-left-purple");
		}, 1700);
		window.setTimeout(function () {
			body.classList.add("slide-left-yellow");
		}, 2200);
		window.setTimeout(function () {
			body.classList.add("slide-left-green");
		}, 2700);
		window.setTimeout(function () {
			body.classList.toggle("reveal");
			body.classList.toggle("fade-out");
		}, 3600);
	});

	menuToggler.addEventListener("click", function () {
		body.classList.toggle("open");
	});
});
