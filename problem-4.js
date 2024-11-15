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

console.log(calculateFinalScore(student2));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true })); 
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true })); 
console.log(calculateFinalScore("hello"));
