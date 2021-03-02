function lyricsGenerator(array){
    let array2=[];
    let stringout='';
    let uno=0;

    for (let i = 0; i < array.length; i++) {
        if(array[i]==0){

           array2.push('Boom');
          
        }else if(array[i]==1){
            uno++;
           if(uno<3) {
               array2.push('Drop the base')
               
            }else{
                array2.push('Drop the base !!!Break the base!!!')
                uno=0;
            }
            
        }
        
    }
    return array2.join(' ');
}
// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))
