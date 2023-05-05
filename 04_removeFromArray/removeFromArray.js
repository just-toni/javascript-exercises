const removeFromArray = function(array, ...args) {
    const result = array.filter((value) => !args.includes(value))
    return result
};

const a = []

// Do not edit below this line
module.exports = removeFromArray;
