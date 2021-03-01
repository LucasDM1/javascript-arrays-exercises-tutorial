let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
let newArray=theBools.map(function(item){

    if (item==0) {
        return item="woko";
        
    }else{
        return item="wiki"
    }
});
console.log(newArray)