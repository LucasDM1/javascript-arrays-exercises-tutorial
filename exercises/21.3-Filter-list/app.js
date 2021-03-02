let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

//declare your function here
function filterByName(name, string){
    let newArray=[];
    name.forEach(element => {
       if(element.includes(string)){
           newArray.push(element);

       }
   });

   return newArray;
}

console.log(filterByName(names, 'am'));