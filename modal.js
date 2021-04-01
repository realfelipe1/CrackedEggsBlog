// www.sitepoint.com/delay-sleep-pause-wait
function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}

const modalAnimation = new TimelineMax();

const modal = document.querySelector(".modal");
const filter = document.querySelector(".filter");

modalAnimation.fromTo(modal, 1, {opacity: 0, scale: 0}, {opacity: 1, scale: 1, ease: Power2.easeInOut});

filter.style.display = "block";

// Make the advertisement hidden
async function removeModal() {
	modal.style.opacity = "0";
	filter.style.opacity = "0";
	await sleep(500);
	modal.style.display = "none";
	filter.style.display = "none";
}