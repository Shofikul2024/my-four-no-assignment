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
console.log(p)


