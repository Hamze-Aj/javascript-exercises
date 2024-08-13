const reverseString = function(str) {
    const arr = str.split('')

    let reverseString = "";
    let range = arr.length -1;

    for (let i = range; i > -1 ; i--) {
        reverseString = reverseString.concat(arr[i])
    }

    return reverseString;

};

reverseString('axmad')



// Do not edit below this line
module.exports = reverseString;
