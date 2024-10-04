/* 
prints a chessboard pattern (using ' ' and '#') based on the given value of 
height and widht.
*/



const height = 8;
const width = 8;
for (let i = 1; i <= height; i++) {
  let pattern = "";
  for (let j = 1; j <= width; j++) {
    if (i % 2 == 0) {
      if (j % 2 != 0) {
        pattern += "#";
      } else {
        pattern += " ";
      }
    } else {
      if (j % 2 != 0) {
        pattern += " ";
      } else {
        pattern += "#";
      }
    }
  }
  console.log(pattern);
}
