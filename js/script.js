// const headTag = document.getElementById("header");

/*
==============================================================
Arrow function: is easy to read. Also, you can use Arrow function with map, filter, and reduce built-in functions
==============================================================

const myFunc = name => {
	return `Hey ${name}`;
};
console.log(myFunc("Noah"));
headTag.innerHTML = myFunc("Noah");

Array with Arrow Function
let arr = ["Bifur", "Bofur", "Bombur", "Fili", "Kili"];

let arr2 = arr.map(item => item);
console.log(arr2);
*/

/*
==============================================================
Template literals: We don’t have to use the plus (+) operator to concatenate strings
==============================================================

let userDetails = (name, age) => {
	return `Hi ${name}, you are ${age} years old`;
};

alert(userDetails("Noah", 26));
*/

/*
==============================================================
Array and object destructing: assigned the values of an array or object to the new variable easier.

Note: if you assign a variable that is not identical to the name of property, it will return undefined. For example, if the name of the property is name and we assign it to a username variable, it will return undefined.
==============================================================

const contact = {
	name: "Noah",
	lastName: "Olatoye",
	age: 26
};

let { name, lastName, age } = contact;
console.log(`${name} ${lastName} is ${age} years old.`);
*/

/* 
==============================================================
Promises: It’s a method to write asynchronous code. It can be used when, for example, we want to fetch data from an API, or when we have a function that takes time to be executed
==============================================================

const myPromise = () => {
	return new Promise((resolve, reject) => {
		resolved("Hi the Promise execute successfully");
	});
};

console.log(myPromise());

const url = "https://jsonplaceholder.typicode.com/posts";
const getData = url => {
	return fetch(url);
};
getData(url)
	.then(data => data.json())
    .then(result => console.log(result)); 
    
    */

/* 
==============================================================
Rest parameter and Spread operator: is used to get argument of an array, and return a new array
==============================================================

const arr = ["Noah", 20, "JavaScript enthusiast", "Hi", "noah", "How are you?"];

// get some value using destruction
const [val1, val2, val3, ...rest] = arr;

const demo = restOfArr => {
	return restOfArr
		.filter(item => {
			return item;
		})
		.join(" ");
};

console.log(demo(arr));

const func = (...anArray) => {
	return anArray;
};

console.log(func(arr));

let name = "noah";
const sortArr = (...anArray) => {
	if (name == anArray) {
		return name;
	} else {
		return "not available";
	}
};
console.log(sortArr(arr[4]));
*/

/* 
==============================================================
Classes: make your code more secure and encapsulated. Using classes gives your code a nice structure and keeps it oriented.
==============================================================


class myClass {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

// Declare value to the class
const user = new myClass("Noah", 20);
console.log(user.name); //  Noah
console.log(user.age); //  20

// To inherit from another class, use the "extends" keyword by the name of the class you want to inherit

class classDemo {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	sayHello() {
		console.log(`Hi ${this.name} your aga is ${this.age}`);
	}
}

// Extends classDemo in userProfile
class userProfile extends classDemo {
	username() {
		console.log(this.name);
	}
}

// Declare value to the classes
const profile = new userProfile("Noah", 26);
profile.sayHello();
profile.username();

*/

function myFunction() {
	var x = document.getElementById("myLinks");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}
