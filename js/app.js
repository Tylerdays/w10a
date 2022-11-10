
//first function of two integers times five
function timesFive(num1, num2){
    let result = (num1 + num2) * 5;
    return result;
}
//Console log for the timeFive function
console.log(timesFive(10,10));
console.log(timesFive(20,20));
console.log(timesFive(30,30));

//function for determining length of a string
function stringCount(words){
    //if statement to find strings greater than 10 
    if (words.length > 10){
        return true;
    }
    //else statement to return false if it's less than 10
    else {
        return false;
    }
    
}

console.log(stringCount("This"))
console.log(stringCount("how many characters"))
console.log(stringCount("Be"))




    