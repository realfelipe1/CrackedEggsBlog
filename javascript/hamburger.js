const burger = document.querySelector(".burger");
const navlinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
	burger.classList.toggle("is-active");
	navlinks.classList.toggle("active");
});