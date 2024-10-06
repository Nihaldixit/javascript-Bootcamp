/* a function 'min' that takes two argument and returns the one 
with minimum value.
*/
const min = function (num1, num2) {
  if (typeof num1 == "number" && typeof num2 == "number") {
    if (num1 < num2) {
      return num1;
    } else if (num2 < num1) {
      return num2;
    } else {
      return "number are equal";
    }
  } else {
    console.log("argument type error: 'min' -> paramenter should be number");
  }
};

console.log(min(45, "a"));
