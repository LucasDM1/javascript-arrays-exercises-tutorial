let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]
function getParkingLotState(matrix){
    let state={
        totalSlots:0,
        availableSlots:0,
        occupiedSlots:0
    };
   for (let i = 0; i < matrix.length; i++) {
       for (let j = 0; j < matrix.length; j++) {
           if(matrix[i][j]==1){
               state.occupiedSlots=state.occupiedSlots+1;
           }else if(matrix[i][j]==2){
               state.availableSlots=state.availableSlots+1;
           }else{
               
           }
           
        }
       
    } 

    state.totalSlots=state.occupiedSlots+state.availableSlots;

    return state;
}
console.log(getParkingLotState(parking_state))