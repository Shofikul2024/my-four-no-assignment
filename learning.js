 //  ans to the question no 1 :

function calculateTax(income , expenses)  {
    if (expenses < 0 || income < 0 || expenses > income )

        {
            return "Invalid Input" 

        }
        const different = income - expenses ;
        const tax =different * .20 ;
        return tax ;
    }

    const result = calculateTax(34000, 1753) ;
    // console.log(result)


 //  ans to the question no 2 :

function sendNotification(email) {

    if(typeof email !== "string" || !email.includes("@")){
        return "Invalid Email"
    }
    const splitEmail = email.split("@");
    const userName = splitEmail[0];
    const domainName = splitEmail[1];
    const notification = userName +  "sent you an email from" + domainName
    return notification;
}

const p = sendNotification("zihad@gmail.com")
// console.log(p)




//  ans to the question no 3:

function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return "Invalid Input"
    }

    let str = name.split('');

    for(const array of str){
      if(!isNaN(array)){
        return true;
      }
    }
    return false;
}

const r = checkDigitsInName('@#')
console.log(r);













//  Ans to the question no  4

function calculateFinalScore(student) {
    if (
        typeof student !== "object" || 
        typeof student.name !== "string" || 
        typeof student.testScore !== "number" || 
        typeof student.schoolGrade !== "number" || 
        typeof student.isFFamily !== "boolean"
    ) {
        return "Invalid Input";
    }
    
    let totalMarks = student.testScore + student.schoolGrade;

    if (student.isFFamily) {
        totalMarks += totalMarks * 0.2;
    }

    return totalMarks >= 80;
}

const student1 = { 
    name: "Rajib", 
    testScore: 50,  
    schoolGrade: 30, 
    isFFamily: true 
};

const student2 = { 
    name: "Karim", 
    testScore: 48,  
    schoolGrade: 24, 
    isFFamily: true 
};

// console.log(calculateFinalScore(student2));
// console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true })); 
// console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true })); 
// console.log(calculateFinalScore("hello"));



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