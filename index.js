// Code your solution in this file!
function distanceFromHqInBlocks (current) {
    return Math.abs(42-current)
}
function distanceFromHqInFeet (blocks) {
    return distanceFromHqInBlocks(blocks)*264
}
function distanceTravelledInFeet (pickup, dest) {
    return Math.abs(pickup-dest)*264
}


function calculatesFarePrice (pickup, dest) {
    const distance = distanceTravelledInFeet(pickup, dest)  
    if (distance<400) {
        return 0
     }
     else if(distance > 400 && distance < 2000) {
        return (distance-400)*0.02
     }
     else if(distance >= 2000 && distance <= 2500) {
        return 25
     }
     else {
        return 'cannot travel that far'
     }  
}