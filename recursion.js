/* isEven() function returns true if number is even and false otherwise.
 */

function isEven(num) {
  if (num >= 0 && typeof num == "number") {
    if (num == 0) {
      return true;
    } else if (num == 1) {
      return false;
    } else {
      num -= 2;
      return isEven(num);
    }
  } else {
    console.log(
      "argument type error: 'isEven' -> parameter should be a posititve whole number"
    );
  }
}
console.log(isEven(-1));
