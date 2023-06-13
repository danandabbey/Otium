function mean(array) {                          // accepts an array of numbers
    let dataTotal = 0;
    for (const value of array){
        dataTotal += value;
    };
    return (dataTotal / array.length);
};

function geometricMean(array) {                 // accepts an array of gains in the form of percentages.
    let total = 1;
    array.forEach(num => {
        total *= num;
    });
    return (Math.pow(total, 1 / array.length)); 
};

function dataPointVariance(array) {             // accepts an array of numbers
    let variances = [];
    for (const price of array){
        let x = price - mean(array);
        variances.push(x);
    };
    return variances;
};

function standardDeviation(array) {             // accepts an array of numbers

    function sumOfTheSquaredVarianceOfDataPoints() {
        let sumTotal = 0;
        for (const variance of dataPointVariance(array)){
            const x = Math.pow(variance , 2);
            sumTotal += x;
        };
        return sumTotal;
    };
    return (Math.sqrt(sumOfTheSquaredVarianceOfDataPoints()/array.length));
};

function kellyCriterion(probSuccess, odds) {
    const p = probSuccess
    const q = 1 - probSuccess;              //probability of failure
    const b = odds;                         // 2-1 odds would be 2/1 or 2
    return ((b * p - q) / b);
};

function percentile(num, array) {
    return ((num - mean(array)) / standardDeviation(array));
}


export { standardDeviation, geometricMean, mean, kellyCriterion, percentile };