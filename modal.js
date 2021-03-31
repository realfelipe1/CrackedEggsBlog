const modalAnimation = new TimelineMax();

const modal = document.querySelector(".modal");
const filter = document.querySelector(".filter");

modalAnimation.fromTo(modal, 1, {opacity: 0, scale: 0}, {opacity: 1, scale: 1, ease: Power2.easeInOut});

filter.style.display = "block";

// Make the advertisement hidden
function removeModal() {
	modal.style.display = "none";
	filter.style.display = "none";
}