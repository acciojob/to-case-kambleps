function toCase(text) {
  // write your code here
	let ans =text.toLowerCase();
	let res =text.toUpperCase();
	let str = ans +"-"+res;
	return str;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
