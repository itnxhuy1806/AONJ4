let array = [-1, 0, 2, 3, 5, 8]
const getSumof2element = require('./AONJ - 4 - sum of 2 element in array.js')
test("return [ [ -1, 3 ], [ 0, 2 ] ] for target 2", () => {
     expect(getSumof2element(array, 2)).toStrictEqual([ [ -1, 3 ], [ 0, 2 ] ]);
});
test("return [ [ 0, 3 ] ] for target 3", () => {
     expect(getSumof2element(array, 3)).toStrictEqual([ [ 0, 3 ] ]);
});
test("return [] for target 100", () => {
     expect(getSumof2element(array, 100)).toStrictEqual([]);
});