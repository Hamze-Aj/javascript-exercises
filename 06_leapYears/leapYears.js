const leapYears = function(num) {
    let flag = false;

    if((num % 4 === 0) && !(num % 100 === 0)) {
        flag = true;
    }
    else if ((num % 100 === 0) && (num % 400 === 0)) {
        flag = true
        
    }
    return flag
    

};

// Do not edit below this line
module.exports = leapYears;
