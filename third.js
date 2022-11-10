//Array of strings
function phFinder(finalPH){
//for loop for running through the string
    for (let i = 0; i < finalPH.length; i++) {


        let phFind = finalPH[i];//  To check the index's of the arrays
        let searchPh = phFind.startsWith('ph'); //To find the instances of PH
        //if statement to find ph
        if (searchPh){
        }  return finalPH[i];
    }
        
}


console.log (phFinder(["bang","boom","phem","snake","food"]));
console.log (phFinder(["yak","photo","god","good","goad"]));
console.log (phFinder(["phone","fish","phog","ham","cheese"]));