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

// Notifications
var el = document.querySelector(".fa-bell");

// var count = Number(el.getAttribute('data-count')) || 0;
// el.setAttribute('data-count', count + 1);
// el.classList.remove('notify');
// el.offsetWidth = el.offsetWidth;
// el.classList.add('notify');
// if(count === 0){
//     el.classList.add('show-count');
// };

let getNotifications = dataCount => {
	let data = dataCount;
	var count = Number(el.getAttribute("data-count")) || 0;
	el.setAttribute("data-count", data);
	el.offsetWidth = el.offsetWidth;
	el.classList.add("notify");
	if (data === 2) {
		el.classList.add("show-count");
	} else {
		el.classList.remove("notify");
	}
};

getNotifications(2);
