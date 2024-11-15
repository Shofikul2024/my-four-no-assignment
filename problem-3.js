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

