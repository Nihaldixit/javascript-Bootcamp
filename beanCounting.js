/*  function that takes two argument both strings.
the function counts the number of character(arg2) in a string(arg1)
*/
function countChar(str1,str2){
    let count = 0;
    if(typeof(str1) && typeof(str2) == 'string'){
        for(let i = 0;i<str1.length;i++){
            if(str1[i] == str2){
                count += 1;
            }

        }
        return count;
    }else{
        console.log(
        "argument type error: 'countChar' ->parameter must be string");
    }

}
const sentence = "iiilksdfjilskdfilaskdfweli";
const char = "i";
console.log(countChar(sentence,char));