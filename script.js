function toCase(text) {
  // write your code here
	let ans =text.toLowerCase();
	let res =text.toUpperCase();
	return ans.concat(res);
	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
