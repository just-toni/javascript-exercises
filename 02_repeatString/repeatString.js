const repeatString = function(word, frequency) {
    if (frequency < 0) return "ERROR" 
    let result = "";
    for (let index = 0; index < frequency; index++) {
        result += word;
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
