 

 











// ans to the question no 5

function  waitingTime(waitingTimes  , serialNumber) {
    
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return "Invalid Input";
    }
 
    let sum = 0;
    for(number of waitingTimes){
        sum = sum + number;
    }
    const counts = waitingTimes.length;
    let  avarages = Math.round(sum / counts);
    let serial = serialNumber - 1;
    let originalSerial = serial - waitingTimes.length;
    let time = Math.round(avarages * originalSerial);
    return time;
}

const outcome= waitingTime([14, 16, 6, 8, 10], "18");
// console.log(outcome)