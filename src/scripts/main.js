import Alpine from "alpinejs";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import Headroom from "headroom.js";
import { MaskInput } from "maska";

window.Alpine = Alpine;

Alpine.start();

document.addEventListener("DOMContentLoaded", () => {
	//     Validation form

	const form = document.querySelectorAll(".consultation__input-wrapper");
	const beforSubmit = document.querySelector(".befor-submit");
	const maska = document.querySelectorAll(".consultation__input");
	const afterSubmit = document.querySelector(".after-submit");
	let isValid;
	new MaskInput("[data-maska]");

	form.forEach((elem) => {
		const input = elem.querySelector(".consultation__input");

		input.addEventListener("focus", () => {
			input.parentElement.classList.remove("consultation__lable--error");
			input.value = "";
		});

		elem.addEventListener("submit", (evt) => {
			evt.preventDefault();
			if (input.value === "" || input.value.replaceAll(/\D/g, "").length < 11) {
				isValid = false;
			} else {
				isValid = true;
			}

			if (isValid) {
				beforSubmit.classList.add("hidden");
				afterSubmit.classList.remove("hidden");
				form.submit();
			} else {
				input.parentElement.classList.add("consultation__lable--error");
				input.value = "Заполните поле";
			}
		});
	});

	//  Header

	if (Headroom.cutsTheMustard) {
		const myElement = document.querySelector("header");
		const headroom = new Headroom(myElement, {
			offset: 205,
			tolerance: 5,
			classes: {
				initial: "headroom",
				pinned: "headroom--pinned",
				unpinned: "headroom--unpinned",
			},
		});
		headroom.init();
	}

	//    Slider

	function makeSplide(selector, options) {
		const splide = new Splide(selector, options).mount();

		const parentEl = document.querySelector(selector).parentElement;
		const prevButton = parentEl.querySelector(".slider__arrow--prev");
		const nextButton = parentEl.querySelector(".slider__arrow--next");

		prevButton.addEventListener("click", () => {
			splide.go("-${i}");
		});

		nextButton.addEventListener("click", () => {
			splide.go("+${i}");
		});
	}

	makeSplide(".splide__promotion", {
		type: "loop",
		perPage: 3,
		gap: "1.5rem",
		fixedWidth: "32.5rem",
		pagination: false,
		arrows: false,
		breakpoints: {
			768: {
				perPage: 3,
				fixedWidth: "19.3rem",
				gap: "0.25rem",
			},
		},
	});

	makeSplide(".splide__about", {
		type: "fade",
		perPage: 1,
		gap: "1rem",
		pagination: false,
		arrows: false,
		breakpoints: {
			768: {
				pagination: true,
				classes: {
					pagination: "splide__pagination slide-pagination",
					page: "splide__pagination__page slide-page",
				},
			},
		},
	});

	makeSplide(".splide__cost", {
		type: "loop",
		perPage: 3,
		gap: "2.5rem",
		fixedWidth: "37.5rem",
		pagination: false,
		arrows: false,
		breakpoints: {
			768: {
				fixedWidth: "21.5rem",
				perPage: 2,
				gap: "1.5rem",
			},
			375: {
				perPage: 1,
				pagination: true,
			},
		},
	});

	makeSplide(".splide__good-place", {
		type: "loop",
		perPage: 1,
		gap: "1rem",
		pagination: false,
		// fixedHeight: "33.75rem",
		arrows: false,
		breakpoints: {
			768: {
				pagination: true,
			},
		},
	});

	makeSplide(".splide__special-promotion", {
		type: "loop",
		perPage: 3,
		gap: "1rem",
		pagination: false,
		arrows: false,
		breakpoints: {
			1400: {
				perPage: 2,
				pagination: true,
			},

			375: {
				perPage: 1,
			},
		},
	});

	new Splide(".splide__connexion", {
		type: "fade",
		perPage: 1,
		pagination: false,
		arrows: false,
		rewind: true,
		width: "4.5rem",
		height: "4.5rem",
		focus: "center",
		autoplay: true,
		interval: 2000,
	}).mount();

	const tabButton = document.querySelectorAll(".service__text");
	const tabTitle = document.querySelectorAll(".service__tab-title");
	const tab = document.querySelectorAll(".service__tab");

	console.log(tabButton[0].parentElement);

	tab.forEach((i) => {
		i.classList.add("hidden");
	});

	tabButton[0].parentElement.classList.toggle("service__item--active");
	tab[0].classList.remove("hidden");

	tabButton.forEach((i) => {
		i.addEventListener("click", () => {
			tabButton.forEach((j) => {
				j.parentElement.classList.remove("service__item--active");
			});
			tab.forEach((j) => {
				const tabTitle = j.querySelector(".service__tab-title");
				j.classList.add("hidden");
				if (tabTitle.textContent.trim() === i.textContent.trim()) {
					j.classList.remove("hidden");
				}
			});
			i.parentElement.classList.toggle("service__item--active");
		});
	});
});
