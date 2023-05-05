const sumAll = function(firstNo, lastNo) {
    if(firstNo < 0 || lastNo < 0) return "ERROR";
    if(typeof firstNo !== 'number' || typeof lastNo !== 'number') return "ERROR";
    let sum = 0;
    if(firstNo < lastNo){
        for (let index = firstNo; index <= lastNo; index++) {
            sum+= index;
        }
        return sum;
    }
    else {
        for (let index = lastNo; index <= firstNo; index--) {
            sum+= index;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
