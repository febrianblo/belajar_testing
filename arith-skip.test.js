const {add,mul,sub,div} = require('./arith');

xtest('2+3=5',()=>{  //skip
    expect(add(2,3)).toBe(5);
});
test.skip('4*3=12',()=>{  //skip
    expect(mul(4,3)).toBe(12);
});
test('5-6=-1',()=>{
    expect(sub(5,6)).toBe(-1);
});
test('8/4=2',()=>{
    expect(div(8,4)).toBe(2);
});