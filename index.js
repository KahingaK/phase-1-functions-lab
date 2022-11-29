// Code your solution in this file!
const scuberHq = 42
function distanceFromHqInBlocks(blockNumber) {
   
    if (scuberHq < blockNumber) { return (scuberHq - blockNumber)*-1
        
    }
    return scuberHq-blockNumber
    
}
function distanceFromHqInFeet(blockNumber) {
    if (scuberHq < blockNumber) { return ((scuberHq - blockNumber)*-1) * 264
        
    }
    return (scuberHq-blockNumber) * 264
    

}
function distanceTravelledInFeet(fromHome, destination) {
    if (destination < fromHome) { return ((destination - fromHome)*-1) * 264
        
    }
    return (destination - fromHome) * 264
    

    
}
function calculatesFarePrice(start, destination) {
    
     const result = Math.abs((destination - start) * 264)
     
     if (result <= 400) { return 0
        
     } else if (result > 400 && result <= 2000){ return (result - 400)* 0.02}
            
       else if(result > 2000 &&  result < 2500 ){return 25} 

       else return 'cannot travel that far'
      
        

     
    }
       
            
        calculatesFarePrice(42, 32)
        
    