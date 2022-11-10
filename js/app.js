
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

//Array of strings


function phFinder(finalPH){
    
    //for loop for running through the string
        for (let i = 0; i < finalPH.length; i++) {
    
            let phFind = finalPH[i];//  To check the index's of the arrays
            let searchPh = phFind.startsWith('ph'); //To find the instances of ph and tie the vars together
            //if statement to find ph
            if (searchPh){
            }  return finalPH[i];
        }
            
    }
    //I've gotten it to print to console, but couldn't figure out how to make it print the specific element of ph
    console.log (phFinder(["bang","boom","phem","snake","food"]));
    console.log (phFinder(["yak","photo","god","good","goad"]));
    console.log (phFinder(["phone","fish","phog","ham","cheese"]));


    