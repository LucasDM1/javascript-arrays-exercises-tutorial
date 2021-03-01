let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
function mergeTwoList(AllElements){
    let odd=[];
    let even=[];
    

    for(let i=0; i < AllElements.length; i++){
        if(AllElements[i]%2== 0){
            even.push(AllElements[i]);
        }else{
            odd.push(AllElements[i]);
        }
    }

    
    let merged=odd.concat(even);
    return merged;

}


console.log(mergeTwoList(list_of_numbers))
