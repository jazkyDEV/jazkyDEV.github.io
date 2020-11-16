let name = "pi";
let pi = 3.14;
let right = false;

let array = [name, pi, right];

alert("First 2 elements: " + array[0] + ", " + array[1]);
array[2] = true;
alert("After changing the 3rd element: " + array);
array.unshift(2.71828);
array.push("e-number");

alert("After pushing front and back: " + array);

let string = "Every man in the world! Every woman on earth!";
alert("String: " + string);
let old_string = "";
let first = true;
while (old_string != string) {
  if (!first) {
    old_string = string;
  }
  let change = "man";
  string = string.replace(change, "person");
  change = "woman";
  string = string.replace(change, "person");
  first = false;
}

alert("String after changing words: " + string);
