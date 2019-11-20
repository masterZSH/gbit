'use strict';


function getKeys(num) {
    let keys = [];
    while (num > 0) {
        let lowbit = num & -num;
        keys.push(Math.log2(lowbit))
        num = num - (lowbit)
    }
    return keys
}

module.exports = getKeys;