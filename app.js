const navSlide = () => {
	const burger = document.querySelector(".navigation__burger-menu");
	const nav = document.querySelector(".navigation__links");
	const navLinks = document.querySelectorAll(".navigation__nav-item");

	burger.addEventListener("click", () => {
		// Toggle nav

		nav.classList.toggle("nav-active");

		// Animate links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${
					index / 7 + 0.3
				}s`;
			}
		});
	});
};

navSlide();

// Validation
init();
function init() {
	const inputs = document.querySelectorAll(".contact-form__input");
	const form = document.getElementById("form");
	// const errorMessage = document.getElementsByClassName(".error-message");
	form.addEventListener("submit", (e) => {
		e.preventDefault();

		inputs.forEach((inputs) => {
			if (inputs.value.length == 0) {
				inputs.classList.add("error");
				inputs.nextElementSibling.classList.remove("error-message__hidden");
			} else {
				return false;
			}
		});
	});

	inputs.forEach((inputs) => {
		inputs.addEventListener("focus", () => {
			inputs.classList.remove("error");
			inputs.nextElementSibling.classList.add("error-message__hidden");
		});
	});
}
