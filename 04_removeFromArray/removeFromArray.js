const removeFromArray = function(arr, ...args) {
    let myArr = [];

    arr.forEach(element => {
        if (!args.includes(element)) {
            myArr.push(element)
            
        }
        
    });

    return myArr;
};

removeFromArray([1,2,3,4,5,6,7,8,9,0], 4)

// Do not edit below this line
module.exports = removeFromArray;
