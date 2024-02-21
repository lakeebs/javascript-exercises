// use the rest parameter for additional arguments (...args)
const removeFromArray = function(array, ...args) {

    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        // if the rest parameter (args array) doesn't include 
        // the array iteration
        if (!args.includes(array[i])) {

            // add it to the new array
            newArray.push(array[i]);
        }
    }
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
