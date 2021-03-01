var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    let newList= []; 
    for(let i=0;i<people.length;i++){
        if(people[i]==personName){

        }else{
            newList.push(people[i]);
        }
    }

    return newList;
	
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));