const gbit = require('./index');

test('verify returns', () => {
    // test case1
    const testNum1 = 20 ;
    // 10100
    const lowBits1 = gbit(testNum1);
    expect(String(lowBits1)).toBe('2,4');

     // test case2
    const testNum2 = 2000 ;
    // 11111010000

    const lowBits2 = gbit(testNum2);
    expect(String(lowBits2)).toBe('4,6,7,8,9,10');

});

