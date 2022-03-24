let array = [-1, 0, 2, 3, 5, 8]
const getSumof3element = require('./AONJ - 4 - sum of 3 element in array.js')
test("return [[ 0, 3, 8 ]] for target 11", () => {
     expect(getSumof3element(array, 11)).toStrictEqual([[0, 3, 8]]);
});
test("return [ [ 0, 2, 3 ] ] for target 5", () => {
     expect(getSumof3element(array, 5)).toStrictEqual([[0, 2, 3]]);
});
test("return [] for target 100", () => {
     expect(getSumof3element(array, 100)).toStrictEqual([]);
});