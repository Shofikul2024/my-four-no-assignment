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

    console.log(result)
