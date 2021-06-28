// Code your solution in this file!//

const headQ = 42
const feet = 264

function distanceFromHqInBlocks(pickup){
    if(pickup > 42){
        return (pickup - headQ);
    } else if (pickup < 42){
        return (headQ - pickup);
    }
}

function distanceFromHqInFeet(destination){
    return distanceFromHqInBlocks(destination)*feet
  }

function distanceTravelledInFeet(startingBlock, endingBlock){
   let distance =  Math.abs(endingBlock - startingBlock);
   return distance*feet

}

function calculatesFarePrice(start, destination) {

    let driveLength = (Math.abs(start - destination)*feet);

    if (driveLength <= 400) {
        return 0;
    } else if (driveLength > 400 && driveLength <= 2000) {
        return (driveLength-400)*0.02;
    } else if (driveLength > 2000 && driveLength < 2500) {
        return 25;
    } else if (driveLength >2500) {
        return "cannot travel that far"
    }
}