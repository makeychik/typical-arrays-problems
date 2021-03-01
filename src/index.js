exports.min = function min(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    return array.reduce((minEl, curr) => (minEl < curr ? minEl : curr));
};

exports.max = function max(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    return array.reduce((maxEl, curr) => (maxEl > curr ? maxEl : curr));
};

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    return array.reduce((sum, curr) => (sum + curr)) / array.length;
};
