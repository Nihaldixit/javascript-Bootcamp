/* 
prints Fizz if number is divisible by 3.
prints Buzz if number is divisible by 5.
prints FizzBuzz if number is divisible by both 3 and 5.
prints the number if none of the above holds true.
*/
   


for(let i =1; i<=100; i++){
    if(i % 3 ===0 && i % 5 === 0){
        console.log("FizzBuzz");
    }else if(i % 3 === 0){
        console.log("Fizz");
    }
    else if(i % 5 === 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}