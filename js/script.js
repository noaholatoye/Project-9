let closeWindow = document.querySelector(".fa-window-close");

// Hamburger menu
function myFunction() {
	var x = document.getElementById("myLinks");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

// Sticky navbar
window.onscroll = function() {
	myStickyMenu();
};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;
console.log(sticky.node);

function myStickyMenu() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}
