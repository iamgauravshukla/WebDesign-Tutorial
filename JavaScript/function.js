console.log("I am function tutorial");

function greet(name,greetText = "I am greeting from JS"){
	console.log(greetText + " " + name);
	console.log(name + " is a good man");
}

function sum(a,b,c){
	let d = a + b + c;
	return d;
}

function greater(a,b){
	if(a>b){
		return a;
	}
	else{
		return b;
	}
}

let name = "Gaurav";
let name1 = "Saurav";
let name2 = "Vivek";
let wish = "Good evening";

greet(name,wish);
greet(name1);
greet(name2,wish);

let returnVal = sum(1 , 3 , 5);
console.log(returnVal);

let result = greater(12,20);
console.log(result + " is greatest");